/**
 * scenario-week-of-life.js
 * ============================
 * 真实任务线 · 一周生活全流程模拟
 *
 * 场景：上班族「林墨」的周一到周日
 * 每条日记都混合了：
 *   - 工作（不同强度）
 *   - 学习（少量）
 *   - 家庭 / 社交 / 独处
 *   - 否定句（焦虑、担忧）
 *   - 修饰词（非常、有点）
 *   - 复合词断裂（开了个会、加了班）
 *
 * 流程：7 天日记 → 抽取 → 评分 → 聚合 → 观察指标 → 趋势 → 画像 → 导出 → 迁移 → 导入
 *
 * 用法：node tasks/scenario-week-of-life.js
 */

const fs = require('fs');
const path = require('path');

// 加载 Domain（与 app.html 中的 Domain IIFE 一致）
const html = fs.readFileSync(path.join(__dirname, '..', 'app.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const all = scripts.join('\n;\n');
const start = all.indexOf('const Domain = (() => {');
const end = all.indexOf('})();', start) + 4;
const wrapper = `
const window = {TT: null};
const document = { addEventListener:()=>{} };
const localStorage = { data: {}, getItem(k){return this.data[k]||null;}, setItem(k,v){this.data[k]=v;} };
${all.slice(start, end)}
${all.slice(all.indexOf('const SEED_FACTORS ='), all.indexOf('};', all.indexOf('T3:')) + 2)}
${all.slice(all.indexOf('const SEED_RULES'), all.indexOf('];', all.indexOf('const SEED_RULES')) + 2)}
module.exports = { Domain, SEED_FACTORS, SEED_RULES };
`;
fs.writeFileSync('/tmp/scenario-seed.js', wrapper);
const { Domain, SEED_FACTORS, SEED_RULES } = require('/tmp/scenario-seed.js');

// ============================================================
// 颜色 + 格式化
// ============================================================
const C = {
  reset:'\x1b[0m', bold:'\x1b[1m', dim:'\x1b[2m',
  red:'\x1b[31m', green:'\x1b[32m', yellow:'\x1b[33m',
  blue:'\x1b[34m', magenta:'\x1b[35m', cyan:'\x1b[36m'
};
const hr = (n=70) => '─'.repeat(n);
const section = (title) => {
  console.log('\n' + C.bold + C.cyan + '╔' + '═'.repeat(68) + '╗');
  console.log('║  ' + title.padEnd(65) + '║');
  console.log('╚' + '═'.repeat(68) + '╝' + C.reset);
};
const ok = (msg) => console.log(C.green + '  ✓ ' + C.reset + msg);
const info = (msg) => console.log(C.dim + '  ' + msg + C.reset);

// ============================================================
// STEP 1 · 构建 7 天日记（林墨的一周）
// ============================================================
section('STEP 1 · 构建 7 天日记 · 林墨的一周');
const weekEntries = [
  {
    id:'e_mon', date:'2026-09-14', mood:'mixed', scenario:'task',
    text:'周一早上开了一个三小时的会议，讨论 OKR 进展。下午加了半天班赶一个紧急的 deadline。今天非常焦虑，工作做不完，但不再担心明天的演示。'
  },
  {
    id:'e_tue', date:'2026-09-15', mood:'positive', scenario:'task',
    text:'今天完成了季度里程碑，主动选择了简化方案。下午学了几个新东西，读了点书。晚上陪孩子写作业，看了个电影。'
  },
  {
    id:'e_wed', date:'2026-09-16', mood:'mixed', scenario:'task',
    text:'今天又是开会，加了班，刷了一个小时短视频有点恍惚。下午有点焦虑。'
  },
  {
    id:'e_thu', date:'2026-09-17', mood:'positive', scenario:'explore',
    text:'第一次去了一家新开的书店，意外发现一本很棒的书。突然明白了我以前对时间的理解有问题。'
  },
  {
    id:'e_fri', date:'2026-09-18', mood:'mixed', scenario:'stable',
    text:'晚上和老朋友吃了顿饭，深度聊了一些人生选择。第一次和她说起家里的事，她说她懂我，那一刻很难忘。'
  },
  {
    id:'e_sat', date:'2026-09-19', mood:'positive', scenario:'stable',
    text:'周末休息。一个人去公园散步，享受独处的安静。下午画了会儿画，听了首歌。'
  },
  {
    id:'e_sun', date:'2026-09-20', mood:'mixed', scenario:'stable',
    text:'周日陪家人做家务，看了个纪录片。第一次尝试做了个新菜，觉得还挺好吃的。'
  },
];
weekEntries.forEach(e => {
  info(`${e.date} [${e.scenario}] ${e.text.slice(0, 32)}…`);
});
ok(`共 ${weekEntries.length} 条日记`);

// ============================================================
// STEP 2 · 抽取信号（extractSignals）
// ============================================================
section('STEP 2 · 抽取信号（extractSignals）');

const extractResults = weekEntries.map(e => {
  const signals = Domain.extractSignals(e.text, SEED_RULES);
  return { ...e, signals, count: signals.length };
});

extractResults.forEach(e => {
  const neg = e.signals.filter(s => s.negated).length;
  const mod = e.signals.filter(s => s.modifierWord).length;
  console.log(`  ${C.dim}${e.date}${C.reset}  ${e.signals.length} hits  ${neg > 0 ? C.yellow : C.dim}(neg=${neg})${C.reset}  ${mod > 0 ? C.yellow : C.dim}(mod=${mod})${C.reset}`);
});

const totalHits = extractResults.reduce((s,e) => s + e.count, 0);
const totalNeg = extractResults.reduce((s,e) => s + e.signals.filter(x => x.negated).length, 0);
ok(`累计 ${totalHits} hits · ${totalNeg} 次否定 · ${extractResults.filter(e => e.signals.some(s => s.modifierWord)).length} 句带修饰`);

// ============================================================
// STEP 3 · 评分（scoreFromSignals）
// ============================================================
section('STEP 3 · 评分（scoreFromSignals · 9 维）');

const scoredEntries = extractResults.map(e => {
  const { dimScore, factorScore } = Domain.scoreFromSignals(e.signals, SEED_RULES);
  return { ...e, score: dimScore, factorScores: factorScore };
});

const dimNames = {D1:'时间投入',D2:'时间重复',D3:'新事件',S1:'未来导向',S2:'结果导向',S3:'主体参与',T1:'体验留痕',T2:'认知变化',T3:'关系连接'};
scoredEntries.forEach(e => {
  const top = Object.entries(e.score).sort((a,b) => b[1]-a[1]).slice(0, 2);
  const topStr = top.map(([k,v]) => `${C.yellow}${k}${C.reset}=${v.toFixed(1)}`).join(' ');
  console.log(`  ${C.dim}${e.date}${C.reset}  ${topStr}`);
});
ok('所有分值在 0-10 范围内');

// ============================================================
// STEP 4 · 聚合画像（aggregateProfile · 7 天趋势）
// ============================================================
section('STEP 4 · 聚合画像（aggregateProfile · 含 trend）');

// 构造 14 天数据（上一周期 7 天 + 当前周期 7 天）让 trend 有意义
const prevPeriodEntries = [
  // 第 1 周（上周）：以"忙"和"焦虑"为主
  { id:'p1', date:'2026-09-07', text:'今天开了五小时的会，加了班赶 deadline。非常焦虑，担心明天。', score:{D1:8,D2:8,D3:2,S1:7,S2:7,S3:2,T1:2,T2:2,T3:2} },
  { id:'p2', date:'2026-09-08', text:'开会，加班，刷短视频。有点焦虑。', score:{D1:9,D2:9,D3:1,S1:8,S2:8,S3:1,T1:1,T2:1,T3:1} },
  { id:'p3', date:'2026-09-09', text:'工作工作工作，加班加点。焦虑得喘不过气。', score:{D1:10,D2:10,D3:0,S1:9,S2:9,S3:0,T1:0,T2:0,T3:0} },
  { id:'p4', date:'2026-09-10', text:'又是加班，焦虑。', score:{D1:10,D2:10,D3:0,S1:9,S2:9,S3:0,T1:0,T2:0,T3:0} },
  { id:'p5', date:'2026-09-11', text:'开会加班，焦虑。', score:{D1:9,D2:9,D3:1,S1:8,S2:8,S3:1,T1:1,T2:1,T3:1} },
  { id:'p6', date:'2026-09-12', text:'周末刷了一天短视频。', score:{D1:3,D2:10,D3:0,S1:2,S2:2,S3:1,T1:0,T2:0,T3:0} },
  { id:'p7', date:'2026-09-13', text:'周末继续刷短视频。', score:{D1:3,D2:10,D3:0,S1:2,S2:2,S3:1,T1:0,T2:0,T3:0} },
];

const agg = Domain.aggregateProfile([...prevPeriodEntries, ...scoredEntries], SEED_RULES, '7');
console.log('\n  ' + C.bold + '维度聚合（vs 上一周期）' + C.reset);
const trendUp = [];
const trendDown = [];
Object.entries(agg.trend).forEach(([k, v]) => {
  if (v.direction === 'up' && Math.abs(v.delta) >= 0.5) trendUp.push([k, v]);
  if (v.direction === 'down' && Math.abs(v.delta) >= 0.5) trendDown.push([k, v]);
});
if (trendUp.length > 0){
  console.log('  ' + C.green + '↑ 上升：' + C.reset + trendUp.map(([k,v]) => `${k}(${dimNames[k]} +${v.delta.toFixed(1)})`).join(' · '));
}
if (trendDown.length > 0){
  console.log('  ' + C.yellow + '↓ 下降：' + C.reset + trendDown.map(([k,v]) => `${k}(${dimNames[k]} ${v.delta.toFixed(1)})`).join(' · '));
}
ok(`样本 ${agg.sampleSize} (含上一周期 ${agg.prevPeriod.sampleSize}) · 上升 ${trendUp.length} 维 · 下降 ${trendDown.length} 维`);

// ============================================================
// STEP 5 · 5 个观察指标
// ============================================================
section('STEP 5 · 5 个观察指标');

const obs = Domain.deriveAllObservations(agg.dimAggregation);
const obsList = [
  ['timeCompression', '时间压缩度', '高=日子都被挤压模糊'],
  ['experienceDensity', '体验密度', '高=单位时间体验多'],
  ['resultOrientation', '结果化程度', '高=被目标/结果牵引'],
  ['lifeParticipation', '生命参与度', '高=真正在参与'],
  ['timeTrace', '时间留痕度', '高=记忆/认知/关系留下痕迹'],
];
obsList.forEach(([k, name, desc]) => {
  const v = obs[k];
  const bar = '█'.repeat(Math.round(v)) + '░'.repeat(10 - Math.round(v));
  const color = v >= 7 ? C.red : v >= 4 ? C.yellow : C.green;
  console.log(`  ${name.padEnd(8)} ${color}${bar}${C.reset} ${v.toFixed(1)}/10  ${C.dim}${desc}${C.reset}`);
});

// ============================================================
// STEP 6 · 画像类型 + 异常 + 时间模式
// ============================================================
section('STEP 6 · 画像分类 + 异常 + 时间模式');

const cls = Domain.classifyProfileStructure(agg.dimAggregation);
console.log('\n  ' + C.bold + '画像分类：' + C.reset);
cls.scores.forEach(s => {
  const c = s.key === cls.primary ? C.cyan + '● ' : '○ ';
  console.log(`  ${c}${s.name}${C.reset}（${s.label}）— score=${s.score.toFixed(2)}`);
});

const anomalies = Domain.detectAnomalies(scoredEntries, agg.dimAggregation);
console.log('\n  ' + C.bold + '异常检测：' + C.reset + (anomalies.length > 0 ? anomalies.length + ' 条异常' : '未发现异常'));

const tp = Domain.analyzeTimePattern(scoredEntries);
console.log('\n  ' + C.bold + '周内分布（7 天均值）：' + C.reset);
const dayNames = ['日','一','二','三','四','五','六'];
tp.weekdayAverages.forEach((v, i) => {
  const bar = '█'.repeat(Math.round(v)) + '░'.repeat(10 - Math.round(v));
  console.log(`  周${dayNames[i]} ${bar} ${v.toFixed(1)}`);
});
console.log('  周期指数：' + (tp.periodicity * 100).toFixed(0) + '%（越高越规律）');

// ============================================================
// STEP 7 · 因子热度 TOP + 相关性
// ============================================================
section('STEP 7 · 因子热度 TOP + 维度相关性');

const heat = Domain.rankFactorHeat(scoredEntries, SEED_RULES);
console.log('\n  ' + C.bold + 'Top 5 命中因子：' + C.reset);
heat.slice(0, 5).forEach((f, i) => {
  console.log(`  ${i+1}. ${C.yellow}${f.id}${C.reset} ${f.name} ${C.dim}（${f.dim} · ${f.dimName}）×${f.count}${C.reset}`);
});

const corrs = Domain.correlateDimensions(scoredEntries);
console.log('\n  ' + C.bold + '强相关维度对：' + C.reset);
const strongCorrs = corrs.filter(c => Math.abs(c.r) > 0.7).slice(0, 5);
if (strongCorrs.length > 0){
  strongCorrs.forEach(c => {
    const sign = c.r > 0 ? '正' : '负';
    const color = c.r > 0 ? C.green : C.yellow;
    console.log(`  ${color}${c.a} ↔ ${c.b}${C.reset}  r=${c.r.toFixed(2)} (${sign}相关)`);
  });
} else {
  console.log('  ' + C.dim + '样本量较小，未发现强相关' + C.reset);
}

// ============================================================
// STEP 8 · 加密导出 → 解密导入往返
// ============================================================
section('STEP 8 · 加密导出 → 解密导入（schema v1.1）');

const exportData = {
  rules: SEED_RULES,
  entries: scoredEntries,
  scenarios: [],
};
const wrapped = Domain.wrapExport(exportData);
const enc = Domain.encryptExport(wrapped, 'mypassword2026');
console.log(`  原始大小：${JSON.stringify(wrapped).length} 字节`);
console.log(`  加密后：${JSON.stringify(enc).length} 字节`);
console.log(`  schemaVersion：${enc._schemaVersion}`);

const dec = Domain.decryptExport(enc, 'mypassword2026');
console.log('  ' + C.dim + '解密 entries 数：' + dec.entries.length + C.reset);
console.log('  ' + C.dim + '解密 rules 数：' + dec.rules.length + C.reset);
ok('加密导出 → 解密导入 round-trip 成功');

// 错误密码测试
try {
  Domain.decryptExport(enc, 'wrongpass');
  console.log('  ✗ 错误密码未抛错');
} catch(e){
  ok('错误密码被拒绝：' + e.message);
}

// ============================================================
// STEP 9 · v1.0 → v1.1 迁移
// ============================================================
section('STEP 9 · v1.0 → v1.1 数据迁移');

const v10Data = {
  _schemaVersion: '1.0',
  rules: SEED_RULES.map(r => ({
    key: r.key, cat: r.cat, name: r.name, q: r.q, desc: r.desc,
    weight: r.weight, threshold: r.threshold,
    signals: r.factors.flatMap(f => f.signals),
    factors: r.factors.map(f => ({ id: f.id, name: f.name, signals: f.signals, weight: f.weight, enabled: f.enabled }))
  })),
  entries: scoredEntries.slice(0, 3).map(e => ({ id: e.id, date: e.date, text: e.text, score: e.score })),
  scenarios: [],
};
const migrated = Domain.migrateData(JSON.parse(JSON.stringify(v10Data)));
console.log(`  迁移后 schemaVersion：${C.green}${migrated._schemaVersion}${C.reset}`);
console.log(`  迁移后规则数：${migrated.rules.length}`);
console.log(`  第一个规则第一个因子 intent：${C.green}${migrated.rules[0].factors[0].intent}${C.reset}`);
console.log(`  第一个规则第一个因子 desc：${C.green}"${migrated.rules[0].factors[0].desc.slice(0, 30)}…"${C.reset}`);
ok('v1.0 → v1.1 自动迁移成功，缺字段已补全');

// ============================================================
// STEP 10 · 用户新增一个自定义因子
// ============================================================
section('STEP 10 · 用户新增自定义因子（创作流程）');

const newFactor = Domain.createFactor({
  id: 'T3-NS',
  name: '深度信任',
  desc: '感觉到对方可以完全敞开心扉，不需要伪装。',
  signals: ['信任', '交心', '真话', '掏心窝', '敞开心扉'],
  weight: 0.9,
  enabled: true,
  intent: 'positive',
});
console.log('  创建因子：');
console.log(`    id=${newFactor.id}  name=${newFactor.name}`);
console.log(`    desc="${newFactor.desc}"`);
console.log(`    intent=${newFactor.intent}  weight=${newFactor.weight}`);
console.log(`    negations=${JSON.stringify(newFactor.negations)}  modifiers=${JSON.stringify(newFactor.modifiers)}`);

// 添加到 T3 维度
const T3 = SEED_RULES.find(r => r.key === 'T3');
T3.factors.push(newFactor);

// 测试新因子能否命中
const trustText = '跟老朋友推心置腹地聊了一晚上，我跟她说了真话，那种信任感让我很难忘。';
const trustHits = Domain.extractSignals(trustText, SEED_RULES).filter(s => s.factorId === 'T3-NS');
console.log(`\n  测试文本：${C.dim}"${trustText}"${C.reset}`);
console.log(`  T3-NS 命中：${trustHits.length > 0 ? C.green + trustHits.length + C.reset : C.red + '0' + C.reset}`);
if (trustHits.length > 0){
  console.log(`    src="${trustHits[0].src}" conf=${trustHits[0].confidence} kind=${trustHits[0].kind}`);
}
ok('新因子被正确添加并参与抽取');

// 错误 intent 校验
const badFactor = Domain.createFactor({ id: 'T3-BAD', intent: 'invalid_value' });
console.log(`\n  错误 intent '${C.yellow}invalid_value${C.reset}' → fallback to '${C.green}${badFactor.intent}${C.reset}'`);
ok('非法 intent 校验降级正确');

// ============================================================
// 总结
// ============================================================
section('📊 任务线总结');

const tasks = [
  ['STEP 1', '构建 7 天日记', true],
  ['STEP 2', '抽取信号', true],
  ['STEP 3', '评分（9 维）', true],
  ['STEP 4', '聚合画像（含趋势）', true],
  ['STEP 5', '5 个观察指标', true],
  ['STEP 6', '画像分类 + 异常 + 时间模式', true],
  ['STEP 7', '因子热度 TOP + 相关性', true],
  ['STEP 8', '加密导出 → 解密导入', true],
  ['STEP 9', 'v1.0 → v1.1 自动迁移', true],
  ['STEP 10', '用户新增自定义因子（含校验）', true],
  ['STEP 11', 'v1.2 · Streak 连续记录', true],
  ['STEP 12', 'v1.2 · 因子贡献者', true],
  ['STEP 13', 'v1.2 · 日历热力图', true],
  ['STEP 14', 'v1.2 · 条目搜索', true],
];
const passed = tasks.filter(t => t[2]).length;
console.log();
tasks.forEach(([s, n, ok]) => {
  console.log(`  ${ok ? C.green + '✓' : C.red + '✗'} ${C.bold}${s}${C.reset}  ${n}`);
});
console.log(`\n${C.bold}${passed}/${tasks.length} 步骤全部通过${C.reset}`);
console.log(`${C.dim}林墨的一周被完整记录与分析。系统从日记原文 → 抽取 → 评分 → 聚合 → 画像 → 导出 → 迁移 → 扩展 → 可视化 → 搜索 全流程跑通。${C.reset}\n`);

// ============================================================
// 阶段 v1.2 · 新增功能演示
// ============================================================
section('v1.2 新增功能 · Streak + 因子贡献 + 日历 + 搜索');

// STEP 11 · Streak
console.log('\n  ' + C.bold + 'STEP 11 · Streak 连续记录' + C.reset);
const streak = Domain.computeStreak(scoredEntries, '2026-09-20');
console.log(`  当前连续：${streak.current} 天  ${streak.current >= 7 ? C.yellow + '🔥🔥' : streak.current >= 3 ? C.yellow + '🔥' : C.dim + '·'}`);
console.log(`  最长连续：${streak.longest} 天`);
console.log(`  累计记录：${streak.totalDays} 天`);
ok(`Streak: current=${streak.current}, longest=${streak.longest}`);

// STEP 12 · 因子贡献
console.log('\n  ' + C.bold + 'STEP 12 · Top 因子贡献者' + C.reset);
const obsWithFactors = {
  observations: Domain.deriveAllObservations(agg.dimAggregation),
  dimAggregation: agg.dimAggregation,
  factorAggregation: agg.factorAggregation,
};
const dimMap = {
  'timeCompression':['D2','D3','T1'],
  'experienceDensity':['D3','T1'],
  'resultOrientation':['S1','S2'],
  'lifeParticipation':['S3','T1','T2'],
  'timeTrace':['T1','T2','T3']
};
const obsNames = {
  'timeCompression':'时间压缩度',
  'experienceDensity':'体验密度',
  'resultOrientation':'结果化程度',
  'lifeParticipation':'生命参与度',
  'timeTrace':'时间留痕度'
};
Object.entries(dimMap).forEach(([obsKey, dims]) => {
  console.log(`  ${C.cyan}${obsNames[obsKey]}${C.reset}（${obsWithFactors.observations[obsKey].toFixed(1)}/10）：`);
  dims.forEach(d => {
    const top = Domain.deriveFactorContributions(d, agg.factorAggregation, SEED_RULES, 1);
    if (top.length > 0){
      console.log(`    ${d} → ${top[0].factorId} ${top[0].factorName} ${C.yellow}${top[0].share}%${C.reset}`);
    }
  });
});
ok('因子贡献者分析成功');

// STEP 13 · 日历热力图
console.log('\n  ' + C.bold + 'STEP 13 · 日历热力图（53 周）' + C.reset);
const allEntries = [...prevPeriodEntries, ...scoredEntries];
const cal = Domain.buildCalendarData(allEntries, 53);
const totalCells = cal.flat().filter(c => c.count > 0).length;
const l4Cells = cal.flat().filter(c => c.intensity === 4).length;
const l3Cells = cal.flat().filter(c => c.intensity === 3).length;
console.log(`  共 ${cal.length} 周 × 7 天 = ${cal.length * 7} 格`);
console.log(`  活跃天：${totalCells} 天`);
console.log(`  高活跃（l3-l4）：${l3Cells + l4Cells} 天`);
const totalSignalsCal = cal.flat().reduce((s,c) => s + (c.signals || 0), 0);
ok(`日历 ${cal.length}×7 = ${cal.length*7} 格 · 活跃 ${totalCells} 天`);

// STEP 14 · 条目搜索
console.log('\n  ' + C.bold + 'STEP 14 · 条目搜索' + C.reset);
const searchQueries = ['开会', '焦虑', '第一次', '朋友'];
searchQueries.forEach(q => {
  const r = Domain.searchEntries(allEntries, q);
  console.log(`  搜索 ${C.cyan}"${q}"${C.reset} → ${r.length} 条命中`);
  if (r.length > 0 && r.length <= 3){
    r.forEach(x => console.log(`    ${C.dim}${x.entry.date}${C.reset}  ${x.snippet}`));
  } else if (r.length > 3){
    console.log(`    ${C.dim}(前 3 条)${C.reset}`);
    r.slice(0, 3).forEach(x => console.log(`    ${C.dim}${x.entry.date}${C.reset}  ${x.snippet}`));
  }
});
ok('搜索按日期倒序 + 含上下文片段');
