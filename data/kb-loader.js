/**
 * kb-loader.js - 运行时从 KB JSON 文件加载并构建内存结构
 * 用法: node data/kb-loader.js
 *
 * 演示：
 *   1. 从 KB JSON 文件加载所有静态参考数据
 *   2. 建立索引（factor by id, signals by id, factor→signals 索引等）
 *   3. 验证抽取（用真实 seed 测试）
 *   4. 报告 KB 统计
 */

const fs = require('fs');
const path = require('path');

const KB_DIR = path.join(__dirname, 'kb');
const C = {
  reset: '\x1b[0m', green: '\x1b[32m', dim: '\x1b[2m',
  bold: '\x1b[1m', blue: '\x1b[34m', yellow: '\x1b[33m'
};

console.log(C.bold + '\n═══ KB 运行时加载器 ═══' + C.reset + '\n');

// ============================================================
// 1. 加载所有 KB 表
// ============================================================
const KB = {};
const load = (name) => {
  const p = path.join(KB_DIR, name + '.json');
  KB[name] = JSON.parse(fs.readFileSync(p, 'utf8'));
  return KB[name];
};

['dimensions','factors','signals','factor-signals','negations','modifiers','intents','observations','profile-types','scenarios','moods','factor-relations'].forEach(load);

console.log(C.green + '✓ 加载 12 张 KB 表' + C.reset);

// ============================================================
// 2. 构建索引
// ============================================================
const T0 = Date.now();
const Index = {
  factorsById: {},
  factorsByDim: {},
  signalsById: {},
  signalsByText: {},       // text → [signalId]
  negationsByText: {},     // text → negation 对象
  negationsByPriority: [], // 倒序排列
  modifiersByText: {},
  modifiersByPriority: [],
  intentsByCode: {},
  dimsByCode: {},
  obsByKey: {},
  ptByCode: {},
  scenarioByCode: {},
  moodByCode: {},
  relationsByFactor: {},   // factorId → [relation]
  // 多对多：factor → signals
  signalsOfFactor: {},     // factorId → [signal objects]
  factorsOfSignal: {},     // signalId → [factor objects]
};

KB.factors.records.forEach(f => {
  Index.factorsById[f.id] = f;
  if (!Index.factorsByDim[f.dimCode]) Index.factorsByDim[f.dimCode] = [];
  Index.factorsByDim[f.dimCode].push(f);
});
KB.signals.records.forEach(s => {
  Index.signalsById[s.id] = s;
  if (!Index.signalsByText[s.text]) Index.signalsByText[s.text] = [];
  Index.signalsByText[s.text].push(s);
});
KB.negations.records.forEach(n => {
  Index.negationsByText[n.text] = n;
});
Index.negationsByPriority = KB.negations.records.slice().sort((a,b) => b.priority - a.priority);
KB.modifiers.records.forEach(m => {
  Index.modifiersByText[m.text] = m;
});
Index.modifiersByPriority = KB.modifiers.records.slice().sort((a,b) => b.priority - a.priority);
KB.intents.records.forEach(i => { Index.intentsByCode[i.code] = i; });
KB.dimensions.records.forEach(d => { Index.dimsByCode[d.code] = d; });
KB.observations.records.forEach(o => { Index.obsByKey[o.key] = o; });
KB['profile-types'].records.forEach(p => { Index.ptByCode[p.code] = p; });
KB.scenarios.records.forEach(s => { Index.scenarioByCode[s.code] = s; });
KB.moods.records.forEach(m => { Index.moodByCode[m.code] = m; });
KB['factor-relations'].records.forEach(r => {
  if (!Index.relationsByFactor[r.sourceFactorId]) Index.relationsByFactor[r.sourceFactorId] = [];
  Index.relationsByFactor[r.sourceFactorId].push(r);
});
KB['factor-signals'].records.forEach(fs => {
  const factor = Index.factorsById[fs.factorId];
  const signal = Index.signalsById[fs.signalId];
  if (!factor || !signal) return;
  if (!Index.signalsOfFactor[fs.factorId]) Index.signalsOfFactor[fs.factorId] = [];
  Index.signalsOfFactor[fs.factorId].push({ signal, weight: fs.weight, matchType: fs.matchType, negationOverride: fs.negationOverride });
  if (!Index.factorsOfSignal[fs.signalId]) Index.factorsOfSignal[fs.signalId] = [];
  Index.factorsOfSignal[fs.signalId].push({ factor, weight: fs.weight, matchType: fs.matchType });
});

const tIdx = Date.now() - T0;
console.log(C.green + `✓ 构建索引耗时 ${tIdx}ms` + C.reset);

// ============================================================
// 3. 模拟抽取（KB-driven，含 looseMatch）
// ============================================================
function looseMatch(text, sig){
  const out = [];
  if (!sig || sig.length < 2) return out;
  const maxGap = sig.length === 2 ? 3 : Math.min(sig.length + 1, 4);
  const maxSpan = sig.length + maxGap * (sig.length - 1);
  const first = sig[0];
  let from = 0;
  while(true){
    const startIdx = text.indexOf(first, from);
    if (startIdx === -1) break;
    let pos = startIdx, ok = true;
    for (let j = 1; j < sig.length; j++){
      const next = text.indexOf(sig[j], pos + 1);
      if (next === -1 || next - startIdx > maxSpan){ ok = false; break; }
      pos = next;
    }
    if (ok) out.push({ index: startIdx, length: pos - startIdx + 1 });
    from = startIdx + 1;
  }
  return out;
}

function findOccurrences(text, sig){
  const out = [];
  let from = 0;
  while(true){
    const idx = text.indexOf(sig, from);
    if (idx === -1) break;
    out.push({ index: idx, length: sig.length, kind:'exact' });
    from = idx + sig.length;
  }
  if (sig.length >= 2){
    const loose = looseMatch(text, sig);
    loose.forEach(l => {
      const dup = out.some(o => o.index === l.index || (l.index >= o.index && l.index < o.index + o.length));
      if (!dup) out.push({ index: l.index, length: l.length, kind:'loose' });
    });
  }
  return out;
}

function kbExtract(text){
  const hits = [];
  Object.entries(Index.signalsOfFactor).forEach(([factorId, fss]) => {
    fss.forEach(({ signal, weight, matchType }) => {
      const occ = matchType === 'exact'
        ? (() => { const out=[]; let f=0; while(true){ const i=text.indexOf(signal.text,f); if(i===-1)break; out.push({index:i,length:signal.text.length}); f=i+signal.text.length;} return out; })()
        : findOccurrences(text, signal.text);
      occ.forEach(o => {
        const ctxStart = Math.max(0, o.index - 4);
        const before = text.slice(ctxStart, o.index);
        let negated = false, negatedWord = null;
        for (const n of Index.negationsByPriority){
          if (before.endsWith(n.text)){
            negated = true; negatedWord = n.id; break;
          }
        }
        let conf = 1.0, modifierWord = null;
        for (const m of Index.modifiersByPriority){
          if (before.endsWith(m.text)){
            conf = m.confidence; modifierWord = m.id; break;
          }
        }
        const factor = Index.factorsById[factorId];
        hits.push({
          key: factor.dimCode,
          cat: factor.dimCode.charAt(0),
          src: signal.text,
          signalId: signal.id,
          factorId: factorId,
          factorName: factor.name,
          intent: factor.intent,
          weight: weight * conf,
          confidence: conf,
          negated, negatedWord, modifierWord,
          _loc: o.index,
          _len: o.length
        });
      });
    });
  });
  // 同因子 dedup（位置相邻/重叠）
  const byFactor = new Map();
  hits.forEach(h => {
    const fk = h.factorId;
    if (!byFactor.has(fk)) byFactor.set(fk, []);
    let merged = false;
    for (let i = 0; i < byFactor.get(fk).length; i++){
      const ex = byFactor.get(fk)[i];
      const hStart = h._loc, hEnd = h._loc + h._len;
      const eStart = ex._loc, eEnd = ex._loc + ex._len;
      if (hStart <= eEnd && eStart <= hEnd){
        const ns = Math.min(hStart, eStart), ne = Math.max(hEnd, eEnd);
        const winner = h.confidence > ex.confidence ? h : ex;
        byFactor.get(fk)[i] = { ...winner, _loc: ns, _len: ne - ns };
        h._loc = ns; h._len = ne - ns;
        merged = true; break;
      }
    }
    if (!merged) byFactor.get(fk).push(h);
  });
  const result = [];
  byFactor.forEach(arr => {
    arr.forEach(h => {
      if (!h.negated || h.intent !== 'negative') result.push(h);
      else result.push({ ...h, weight: 0 });
    });
  });
  return result;
}

console.log(C.bold + '\n═══ KB-driven 抽取测试 ═══' + C.reset);
const seeds = [
  '今天第一次去了一家新开的咖啡馆，味道很好。突然明白了我以前的想法有问题。非常焦虑。',
  '今天开了三小时的会，加了班，不再焦虑未来。',
  '晚上和老朋友吃了顿饭，深度聊了一些人生选择。第一次和她说起家里的事，她说她懂我。',
  '周末陪家人，看了本书，画了会儿画。',
  '今天非常焦虑，担心 deadline，但完成了工作。',
];
seeds.forEach((text, i) => {
  const hits = kbExtract(text);
  const dims = new Set(hits.map(h => h.key));
  console.log(`  ${C.dim}#${i+1}${C.reset}  ${text.slice(0, 40)}…`);
  console.log(`    ${hits.length} hits, ${dims.size} 维: ${[...dims].join(',')}`);
});

// ============================================================
// 4. KB 统计报告
// ============================================================
console.log(C.bold + '\n═══ KB 统计 ═══' + C.reset);
const stats = {
  'dimensions': KB.dimensions.records.length,
  'factors': KB.factors.records.length,
  'signals': KB.signals.records.length,
  'factor_signals': KB['factor-signals'].records.length,
  'negations': KB.negations.records.length,
  'modifiers': KB.modifiers.records.length,
  'intents': KB.intents.records.length,
  'observations': KB.observations.records.length,
  'profile_types': KB['profile-types'].records.length,
  'scenarios': KB.scenarios.records.length,
  'moods': KB.moods.records.length,
  'factor_relations': KB['factor-relations'].records.length,
};
const maxLen = Math.max(...Object.keys(stats).map(k => k.length));
Object.entries(stats).forEach(([k, v]) => {
  console.log(`  ${k.padEnd(maxLen)}  ${v}`);
});

// 跨维度共享
const shared = {};
Object.entries(Index.signalsByText).forEach(([text, sigs]) => {
  if (sigs.length > 1){
    const factorIds = new Set();
    sigs.forEach(s => Index.factorsOfSignal[s.id]?.forEach(f => factorIds.add(f.factor.id)));
    if (factorIds.size > 1) shared[text] = factorIds.size;
  }
});
console.log(C.bold + '\n跨维度共享信号：' + C.reset);
Object.entries(shared).forEach(([t, n]) => console.log(`  "${t}" → ${n} 因子`));