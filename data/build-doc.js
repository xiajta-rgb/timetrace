/**
 * build-doc.js - 从 data/kb/*.json 自动生成 FACTOR-SYSTEM.md
 * 用法：node data/build-doc.js
 *
 * 输出的文档结构：
 * 1. 9 个维度的元数据
 * 2. 56 个因子的完整定义（按维度分组）
 * 3. 因子↔信号关联表
 * 4. 否定词 + 修饰符
 * 5. 意图 + 画像类型
 * 6. 5 个观察指标 + 公式
 * 7. 因子关系（同义/反义/因果）
 * 8. 因子在维度/意图上的分布
 */

const fs = require('fs');
const path = require('path');

const KB = {};
const tables = ['dimensions','factors','signals','factor-signals','negations','modifiers','intents','observations','profile-types','scenarios','moods','factor-relations','index'];
tables.forEach(t => {
  KB[t] = JSON.parse(fs.readFileSync(path.join(__dirname, 'kb', t + '.json'), 'utf8'));
});

// ============================================================
// 构建关联索引
// ============================================================
const signalsById = {};
KB.signals.records.forEach(s => signalsById[s.id] = s);

const factorSignalsByFactor = {};
const factorSignalsBySignal = {};
KB['factor-signals'].records.forEach(fs => {
  if (!factorSignalsByFactor[fs.factorId]) factorSignalsByFactor[fs.factorId] = [];
  factorSignalsByFactor[fs.factorId].push(fs);
  if (!factorSignalsBySignal[fs.signalId]) factorSignalsBySignal[fs.signalId] = [];
  factorSignalsBySignal[fs.signalId].push(fs);
});

// ============================================================
// 生成 Markdown
// ============================================================
let md = '';
const line = (s = '') => md += s + '\n';
const hr = (c = '─', n = 78) => line(c.repeat(n));
const h1 = (s) => { line(); line(`# ${s}`); };
const h3 = (s) => { line(); line(`### ${s}`); };
const h4 = (s) => { line(); line(`#### ${s}`); };

// ============================================================
// 标题
// ============================================================
h1('时痕 TimeTrace · 因子体系完整参考（v1.3）');
line();
line('> 本文档由 `node data/build-doc.js` 自动从 `data/kb/*.json` 生成。');
line('> 所有数据是单一事实来源，文档结构与 code 完全一致。');
line();
line('| 表 | 记录 |');
line('|---|---:|');
tables.forEach(t => {
  if (KB[t] && KB[t].records){
    line(`| ${t} | ${KB[t].records.length} |`);
  }
});
line();
line('**构建时间：** ' + new Date().toISOString());
line();

// ============================================================
// 1. 维度
// ============================================================
h1('1. 9 个维度（dimensions）');
line();
line('| code | layer | name | weight | threshold | question |');
line('|------|-------|------|-------:|----------:|----------|');
KB.dimensions.records.forEach(d => {
  line(`| \`${d.code}\` | ${d.layer} · ${d.layerName} | **${d.name}** | ${d.weight} | ${d.threshold} | ${d.question} |`);
});
line();
line('**描述全文：**');
KB.dimensions.records.forEach(d => {
  line(`- \`${d.code}\` **${d.name}**：${d.description}`);
});
line();

// ============================================================
// 2. 56 个因子（按维度分组）
// ============================================================
h1('2. 56 个因子（factors）');
line();
line('每个因子含：id / name / emotion 情绪切点 / description / weight / intent / enabled / signals。');
line();

KB.dimensions.records.forEach(dim => {
  const factors = KB.factors.records.filter(f => f.dimCode === dim.code);
  line(`### ${dim.code} · ${dim.layerName} · ${dim.name}（${factors.length} 个因子）`);
  line();
  factors.forEach(f => {
    const sigList = factorSignalsByFactor[f.id] || [];
    line(`#### \`${f.id}\` · ${f.name}`);
    line();
    line(`- **情绪切点**：${f.emotion || '（无）'}`);
    line(`- **描述**：${f.description}`);
    line(`- **权重**：${f.weight}`);
    line(`- **意图**：\`${f.intent}\`${f.intent === 'negative' ? '（反向：否定时反而加分）' : (f.intent === 'positive' ? '（正向：越高越好）' : '（中性：仅反映存在）')}`);
    line(`- **启用**：${f.enabled ? '✓' : '✗'}`);
    line(`- **关联信号**（${sigList.length} 个）：`);
    if (sigList.length === 0){
      line(`  - _（无）_`);
    } else {
      sigList.forEach(fs => {
        const sig = signalsById[fs.signalId];
        if (!sig) return;
        const note = fs.note ? ` _(${fs.note})_` : '';
        const flags = [];
        if (fs.matchType !== 'exact') flags.push('loose');
        if (fs.negationOverride) flags.push('neg:' + fs.negationOverride);
        const flagStr = flags.length ? ` [${flags.join(', ')}]` : '';
        line(`  - \`${sig.id}\` "${sig.text}" (w=${fs.weight})${flagStr}${note}`);
      });
    }
    line();
  });
});

// ============================================================
// 3. 否定词 + 修饰符
// ============================================================
h1('3. 上下文识别');
line();

h3('3.1 否定词（negations · 14 条）');
line();
line('按 priority 倒序匹配（数值越大越优先）。');
line();
line('| id | text | priority | intentOverride | scope |');
line('|---|---|---:|---|---|');
KB.negations.records.forEach(n => {
  line(`| \`${n.id}\` | **${n.text}** | ${n.priority} | ${n.intentOverride} | ${n.scope} |`);
});
line();

h3('3.2 修饰符（modifiers · 9 条）');
line();
line('按 priority 倒序匹配。confidence 与 factor.weight 相乘作为最终权重。');
line();
line('| id | text | confidence | priority | scope |');
line('|---|---|---:|---:|---|');
KB.modifiers.records.forEach(m => {
  line(`| \`${m.id}\` | **${m.text}** | ${m.confidence} | ${m.priority} | ${m.scope} |`);
});
line();

// ============================================================
// 4. 意图
// ============================================================
h1('4. 意图（intents · 3 条）');
line();
KB.intents.records.forEach(i => {
  line(`### \`${i.code}\` · ${i.name}`);
  line();
  line(`- ${i.description}`);
  line(`- reverseOnNegate: ${i.reverseOnNegate}`);
  line(`- color: \`${i.color}\``);
  line();
});

// ============================================================
// 5. 5 个观察指标
// ============================================================
h1('5. 5 个观察指标（observations）');
line();
KB.observations.records.forEach(o => {
  line(`### \`${o.key}\` · ${o.name}`);
  line();
  line(`- **公式**：\`${o.formula}\``);
  line(`- **维度权重**：${JSON.stringify(o.weightByDim)}`);
  line(`- **范围**：[${o.range[0]}, ${o.range[1]}]`);
  line(`- **高分含义**：${o.highMeans}（warning=需要警惕 / good=好事）`);
  line(`- **描述**：${o.description}`);
  line(`- **建议**：${o.advice}`);
  line();
});

// ============================================================
// 6. 3 种画像
// ============================================================
h1('6. 画像类型（profile_types · 3 种）');
line();
KB['profile-types'].records.forEach(p => {
  line(`### ${p.emoji} ${p.code} · ${p.name}`);
  line();
  line(`- **公式**：\`${p.criteria.formula}\``);
  line(`- **描述**：${p.criteria.description}`);
  line(`- **干预建议**：${p.criteria.intervention}`);
  line();
});

// ============================================================
// 7. 因子关系图
// ============================================================
h1('7. 因子关系（factor_relations · 21 条）');
line();
line('| source | type | target | strength | note |');
line('|---|---|---|---:|---|');
['synonym','antonym','cause','subset'].forEach(type => {
  const rels = KB['factor-relations'].records.filter(r => r.type === type);
  if (rels.length === 0) return;
  rels.forEach(r => {
    line(`| \`${r.sourceFactorId}\` | **${type}** | \`${r.targetFactorId}\` | ${r.strength} | ${r.note || ''} |`);
  });
});
line();

// ============================================================
// 8. 因子在维度上的分布
// ============================================================
h1('8. 因子分布');
line();

h3('8.1 按维度');
line();
KB.dimensions.records.forEach(dim => {
  const factors = KB.factors.records.filter(f => f.dimCode === dim.code);
  line(`- **${dim.code} ${dim.name}**（${factors.length}）：${factors.map(f => '`'+f.id+'`').join(', ')}`);
});
line();

h3('8.2 按意图');
line();
KB.intents.records.forEach(i => {
  const factors = KB.factors.records.filter(f => f.intent === i.code);
  line(`- **${i.name}（\`${i.code}\`）**（${factors.length}）：${factors.map(f => '`'+f.id+'`').join(', ')}`);
});
line();

// ============================================================
// 9. 信号使用排行
// ============================================================
h1('9. 信号使用频率');
line();
const usage = {};
Object.entries(factorSignalsBySignal).forEach(([sid, arr]) => {
  usage[sid] = arr.length;
});
const sorted = Object.entries(usage).sort((a,b) => b[1] - a[1]);
const top = sorted.slice(0, 30);
const maxN = top[0][1];
line('Top 30 跨因子共享信号：');
line();
line('| rank | signal | text | 因子数 |');
line('|---:|---|---|---:|');
top.forEach(([sid, n], i) => {
  const sig = signalsById[sid];
  if (!sig) return;
  line(`| ${i+1} | \`${sid}\` | ${sig.text} | ${'█'.repeat(n)}${'░'.repeat(maxN-n)} ${n} |`);
});
line();

// ============================================================
// 写入文件
// ============================================================
const OUT = path.join(__dirname, '..', 'FACTOR-SYSTEM.md');
fs.writeFileSync(OUT, md);
console.log('✓ 生成 ' + OUT);
console.log('  行数:', md.split('\n').length);
console.log('  字节:', md.length);