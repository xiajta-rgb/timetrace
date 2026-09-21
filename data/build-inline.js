/**
 * build-inline.js - 从 data/kb/*.json 生成 inline JS 加载器
 *
 * 输出：data/kb-inline.js  （一个 IIFE，将 KB 写入 window.TT_KB）
 * 用法：app.html 在 <script> 标签里引入此文件，会自动建立 KB 索引
 *
 * 优势：
 *   - KB 仍然是 data/kb/*.json 文件，可外部编辑
 *   - 运行时通过 window.TT_KB 访问，自动建立索引
 *   - app.html 不需要 inline 几千行 JSON，保持可读
 *   - validate.js 可以独立验证 JSON 文件完整性
 *
 * 用法: node data/build-inline.js
 */

const fs = require('fs');
const path = require('path');

const KB_DIR = path.join(__dirname, 'kb');
const OUT_FILE = path.join(__dirname, 'kb-inline.js');

const tables = [
  'dimensions', 'factors', 'signals', 'factor-signals',
  'negations', 'modifiers', 'intents', 'observations',
  'profile-types', 'scenarios', 'moods', 'factor-relations'
];

const KB = {};
tables.forEach(t => {
  KB[t] = JSON.parse(fs.readFileSync(path.join(KB_DIR, t + '.json'), 'utf8'));
});

const header = `/* AUTO-GENERATED from data/kb/*.json by data/build-inline.js — DO NOT EDIT
 * Generated at: ${new Date().toISOString()}
 *
 * 包含 12 张 KB 表：${tables.join(', ')}
 * 用法：
 *   - 在 app.html 中通过 <script src="data/kb-inline.js"></script> 加载
 *   - 运行时通过 window.TT_KB 访问
 *   - Domain 层调用 KB.index(...) 获取索引
 */

window.TT_KB = ${JSON.stringify(KB, null, 2)};

// ============================================================
// 索引构建
// ============================================================
(function(){
  const KB = window.TT_KB;
  const Index = {
    factorsById: {},
    factorsByDim: {},
    signalsById: {},
    signalsByText: {},
    negationsByText: {},
    negationsByPriority: [],
    modifiersByText: {},
    modifiersByPriority: [],
    intentsByCode: {},
    dimsByCode: {},
    obsByKey: {},
    ptByCode: {},
    scenarioByCode: {},
    moodByCode: {},
    relationsByFactor: {},
    signalsOfFactor: {},
    factorsOfSignal: {},
  };

  KB.factors.records.forEach(f => {
    Index.factorsById[f.id] = f;
    (Index.factorsByDim[f.dimCode] = Index.factorsByDim[f.dimCode] || []).push(f);
  });
  KB.signals.records.forEach(s => {
    Index.signalsById[s.id] = s;
    (Index.signalsByText[s.text] = Index.signalsByText[s.text] || []).push(s);
  });
  KB.negations.records.forEach(n => { Index.negationsByText[n.text] = n; });
  Index.negationsByPriority = KB.negations.records.slice().sort((a,b) => b.priority - a.priority);
  KB.modifiers.records.forEach(m => { Index.modifiersByText[m.text] = m; });
  Index.modifiersByPriority = KB.modifiers.records.slice().sort((a,b) => b.priority - a.priority);
  KB.intents.records.forEach(i => { Index.intentsByCode[i.code] = i; });
  KB.dimensions.records.forEach(d => { Index.dimsByCode[d.code] = d; });
  KB.observations.records.forEach(o => { Index.obsByKey[o.key] = o; });
  KB['profile-types'].records.forEach(p => { Index.ptByCode[p.code] = p; });
  KB.scenarios.records.forEach(s => { Index.scenarioByCode[s.code] = s; });
  KB.moods.records.forEach(m => { Index.moodByCode[m.code] = m; });
  KB['factor-relations'].records.forEach(r => {
    (Index.relationsByFactor[r.sourceFactorId] = Index.relationsByFactor[r.sourceFactorId] || []).push(r);
  });
  KB['factor-signals'].records.forEach(fs => {
    const factor = Index.factorsById[fs.factorId];
    const signal = Index.signalsById[fs.signalId];
    if (!factor || !signal) return;
    (Index.signalsOfFactor[fs.factorId] = Index.signalsOfFactor[fs.factorId] || []).push({
      signal, weight: fs.weight, matchType: fs.matchType, negationOverride: fs.negationOverride
    });
    (Index.factorsOfSignal[fs.signalId] = Index.factorsOfSignal[fs.signalId] || []).push({
      factor, weight: fs.weight, matchType: fs.matchType
    });
  });

  window.TT_KB_INDEX = Index;
})();
`;

fs.writeFileSync(OUT_FILE, header);
console.log('✓ 生成 ' + OUT_FILE);
console.log('  大小: ' + (fs.statSync(OUT_FILE).size / 1024).toFixed(1) + ' KB');
console.log('  KB 表数: ' + Object.keys(KB).length);
console.log('  信号总数: ' + KB.signals.records.length);
console.log('  因子总数: ' + KB.factors.records.length);
console.log('  关联总数: ' + KB['factor-signals'].records.length);