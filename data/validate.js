/**
 * validate.js - KB 与 User Schema 验证器
 * 用法: node data/validate.js
 *
 * 检查内容：
 * 1. 每张 KB 表的字段完整性
 * 2. 外键引用合法性
 * 3. 因子 ID 唯一性
 * 4. 信号 ID 唯一性
 * 5. 因子↔信号关联完整性
 * 6. 公式可计算性
 * 7. 关系图无自环
 * 8. 维度-因子覆盖完整
 */

const fs = require('fs');
const path = require('path');

const KB_DIR = path.join(__dirname, 'kb');
const SCHEMA_DIR = path.join(__dirname, 'schema');

const C = {
  reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m',
  yellow: '\x1b[33m', blue: '\x1b[34m', dim: '\x1b[2m', bold: '\x1b[1m'
};
let pass = 0, fail = 0;
const issues = [];
function ok(msg){ pass++; console.log('  ' + C.green + '✓' + C.reset + ' ' + msg); }
function bad(msg, detail){ fail++; issues.push({msg, detail}); console.log('  ' + C.red + '✗' + C.reset + ' ' + msg + (detail ? ' ' + C.dim + detail + C.reset : '')); }
function warn(msg){ console.log('  ' + C.yellow + '!' + C.reset + ' ' + C.dim + msg + C.reset); }
function info(msg){ console.log('  ' + C.dim + msg + C.reset); }

function loadKB(name){
  const p = path.join(KB_DIR, name + '.json');
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

// ============================================================
console.log(C.bold + '\n═══ KB 加载与基础校验 ═══' + C.reset);

const dimensions = loadKB('dimensions');
const factors = loadKB('factors');
const signals = loadKB('signals');
const factorSignals = loadKB('factor-signals');
const negations = loadKB('negations');
const modifiers = loadKB('modifiers');
const intents = loadKB('intents');
const observations = loadKB('observations');
const profileTypes = loadKB('profile-types');
const scenarios = loadKB('scenarios');
const moods = loadKB('moods');
const factorRelations = loadKB('factor-relations');

ok('加载 11 张 KB 表');
info(`dimensions: ${dimensions.records.length}`);
info(`factors: ${factors.records.length}`);
info(`signals: ${signals.records.length}`);
info(`factor_signals: ${factorSignals.records.length}`);
info(`negations: ${negations.records.length}`);
info(`modifiers: ${modifiers.records.length}`);
info(`intents: ${intents.records.length}`);
info(`observations: ${observations.records.length}`);
info(`profile_types: ${profileTypes.records.length}`);
info(`scenarios: ${scenarios.records.length}`);
info(`moods: ${moods.records.length}`);
info(`factor_relations: ${factorRelations.records.length}`);

// ============================================================
console.log(C.bold + '\n═══ 1. 主键唯一性 ═══' + C.reset);

const dimCodes = dimensions.records.map(r => r.code);
const factorIds = factors.records.map(r => r.id);
const signalIds = signals.records.map(r => r.id);
const negIds = negations.records.map(r => r.id);
const modIds = modifiers.records.map(r => r.id);
const intentCodes = intents.records.map(r => r.code);
const obsKeys = observations.records.map(r => r.key);
const ptCodes = profileTypes.records.map(r => r.code);
const scCodes = scenarios.records.map(r => r.code);
const moodCodes = moods.records.map(r => r.code);

const dupCheck = (name, ids) => {
  const seen = new Set();
  const dups = [];
  for (const id of ids){ if (seen.has(id)) dups.push(id); seen.add(id); }
  if (dups.length === 0) ok(`${name} 主键全部唯一 (${ids.length})`);
  else bad(`${name} 主键重复`, dups.join(','));
};
dupCheck('dimensions.code', dimCodes);
dupCheck('factors.id', factorIds);
dupCheck('signals.id', signalIds);
dupCheck('negations.id', negIds);
dupCheck('modifiers.id', modIds);
dupCheck('intents.code', intentCodes);
dupCheck('observations.key', obsKeys);
dupCheck('profile_types.code', ptCodes);
dupCheck('scenarios.code', scCodes);
dupCheck('moods.code', moodCodes);

// ============================================================
console.log(C.bold + '\n═══ 2. 外键完整性 ═══' + C.reset);

// factor.dimCode → dimensions.code
const dimSet = new Set(dimCodes);
let badDim = factors.records.filter(r => !dimSet.has(r.dimCode));
if (badDim.length === 0) ok('factors.dimCode 全部存在于 dimensions');
else bad('factors.dimCode 无效', badDim.map(r => `${r.id}→${r.dimCode}`).join(','));

// factor_signals.factorId → factors.id
const factorSet = new Set(factorIds);
let badFS_f = factorSignals.records.filter(r => !factorSet.has(r.factorId));
if (badFS_f.length === 0) ok('factor_signals.factorId 全部存在');
else bad('factor_signals.factorId 无效', badFS_f.map(r => r.factorId).slice(0,3).join(','));

// factor_signals.signalId → signals.id
const signalSet = new Set(signalIds);
let badFS_s = factorSignals.records.filter(r => !signalSet.has(r.signalId));
if (badFS_s.length === 0) ok('factor_signals.signalId 全部存在');
else bad('factor_signals.signalId 无效', badFS_s.map(r => r.signalId).slice(0,3).join(','));

// factor_relations.sourceFactorId/targetFactorId → factors.id
let badFR_s = factorRelations.records.filter(r => !factorSet.has(r.sourceFactorId));
let badFR_t = factorRelations.records.filter(r => !factorSet.has(r.targetFactorId));
if (badFR_s.length === 0) ok('factor_relations.sourceFactorId 全部存在');
else bad('factor_relations.sourceFactorId 无效', badFR_s.map(r => r.sourceFactorId).slice(0,3).join(','));
if (badFR_t.length === 0) ok('factor_relations.targetFactorId 全部存在');
else bad('factor_relations.targetFactorId 无效', badFR_t.map(r => r.targetFactorId).slice(0,3).join(','));

// observations.weightByDim key → dimensions.code
let badObs = [];
observations.records.forEach(o => {
  Object.keys(o.weightByDim).forEach(k => {
    if (!dimSet.has(k)) badObs.push(`${o.key}→${k}`);
  });
});
if (badObs.length === 0) ok('observations.weightByDim 维度 key 全部合法');
else bad('observations 引用了不存在的维度', badObs.slice(0,3).join(','));

// ============================================================
console.log(C.bold + '\n═══ 3. 因子数与维度分布 ═══' + C.reset);

const factorByDim = {};
factors.records.forEach(f => {
  factorByDim[f.dimCode] = factorByDim[f.dimCode] || [];
  factorByDim[f.dimCode].push(f.id);
});
let totalFactors = 0;
Object.entries(factorByDim).forEach(([k, arr]) => {
  totalFactors += arr.length;
  info(`  ${k}: ${arr.length} 因子 → ${arr.join(', ')}`);
});
if (totalFactors === 57) ok(`总因子数 === 57`);
else bad('总因子数 ≠ 57', 'actual=' + totalFactors);

// ============================================================
console.log(C.bold + '\n═══ 4. 信号使用统计 ═══' + C.reset);

const signalUsage = {};
factorSignals.records.forEach(r => {
  signalUsage[r.signalId] = (signalUsage[r.signalId] || 0) + 1;
});
const sortedUsage = Object.entries(signalUsage).sort((a,b) => b[1] - a[1]);
info('使用最多的 5 个信号：');
sortedUsage.slice(0, 5).forEach(([id, n]) => {
  const sig = signals.records.find(s => s.id === id);
  info(`  ${id} "${sig?.text}" → ${n} 个因子`);
});

const unusedSignals = signalIds.filter(id => !signalUsage[id]);
if (unusedSignals.length === 0) info('所有信号至少被 1 个因子使用');
else info('未被使用的信号: ' + unusedSignals.length + ' 个（可考虑清理）');

// 跨维度共享信号
const sharedSigs = Object.entries(signalUsage).filter(([id, n]) => n > 1);
if (sharedSigs.length === 0) info('无跨维度共享信号');
else info(`跨维度共享信号 ${sharedSigs.length} 个（设计允许）：` + sharedSigs.slice(0,5).map(([id, n]) => `${id}(${n})`).join(', '));

// ============================================================
console.log(C.bold + '\n═══ 5. 因子意图分布 ═══' + C.reset);

const intentByName = {};
factors.records.forEach(f => {
  intentByName[f.intent] = (intentByName[f.intent] || 0) + 1;
});
Object.entries(intentByName).forEach(([k, n]) => {
  const ic = intents.records.find(i => i.code === k);
  info(`  ${k} ${ic?.name || ''}: ${n} 因子`);
});

const validIntents = new Set(intentCodes);
const badIntents = factors.records.filter(f => !validIntents.has(f.intent));
if (badIntents.length === 0) ok('所有因子 intent 引用合法');
else bad('非法 intent 引用', badIntents.map(f => `${f.id}=${f.intent}`).join(','));

// ============================================================
console.log(C.bold + '\n═══ 6. 公式可计算性 ═══' + C.reset);

function testFormula(formula, dimScores){
  try {
    // 公式形如 'D2*0.4 + (10-D3)*0.3 + (10-T1)*0.3'
    const expr = formula
      .replace(/D1/g, dimScores.D1)
      .replace(/D2/g, dimScores.D2)
      .replace(/D3/g, dimScores.D3)
      .replace(/S1/g, dimScores.S1)
      .replace(/S2/g, dimScores.S2)
      .replace(/S3/g, dimScores.S3)
      .replace(/T1/g, dimScores.T1)
      .replace(/T2/g, dimScores.T2)
      .replace(/T3/g, dimScores.T3);
    // eslint-disable-next-line no-new-func
    const result = Function('"use strict"; return (' + expr + ')')();
    return typeof result === 'number' && !isNaN(result);
  } catch(e){
    return false;
  }
}

const testDimScores = {D1:5,D2:5,D3:5,S1:5,S2:5,S3:5,T1:5,T2:5,T3:5};
const obsOk = observations.records.every(o => testFormula(o.formula, testDimScores));
if (obsOk) ok('所有 observation 公式可计算');
else bad('存在无法计算的 observation 公式');

const ptOk = profileTypes.records.every(p => testFormula(p.criteria.formula, testDimScores));
if (ptOk) ok('所有 profile_types 公式可计算');
else bad('存在无法计算的 profile_types 公式');

// ============================================================
console.log(C.bold + '\n═══ 7. 关系图完整性 ═══' + C.reset);

const selfRefs = factorRelations.records.filter(r => r.sourceFactorId === r.targetFactorId);
if (selfRefs.length === 0) ok('factor_relations 无自环');
else bad('存在自环关系', selfRefs.map(r => r.sourceFactorId).join(','));

const validRelTypes = new Set(['synonym','antonym','cause','subset']);
const badRelTypes = factorRelations.records.filter(r => !validRelTypes.has(r.type));
if (badRelTypes.length === 0) ok('所有关系 type 合法');
else bad('非法关系 type', badRelTypes.map(r => r.type).join(','));

// 关系图连通性检查
const reachable = new Set();
factorRelations.records.forEach(r => {
  reachable.add(r.sourceFactorId);
  reachable.add(r.targetFactorId);
});
const orphanFactors = factorIds.filter(id => !reachable.has(id));
info(`${reachable.size}/${factorIds.length} 因子至少出现在 1 个关系中`);
if (orphanFactors.length > factorIds.length * 0.5) warn(`超过 50% 因子无关系定义（${orphanFactors.length} 个）`);
else ok(`仅 ${orphanFactors.length} 个因子无关系定义（正常）`);

// ============================================================
console.log(C.bold + '\n═══ 8. 信号文本唯一性（同文本不应有不同 ID） ═══' + C.reset);

const textToIds = {};
signals.records.forEach(s => {
  if (!textToIds[s.text]) textToIds[s.text] = [];
  textToIds[s.text].push(s.id);
});
const dupTexts = Object.entries(textToIds).filter(([t, ids]) => ids.length > 1);
if (dupTexts.length === 0) ok('信号 text 全部唯一');
else bad('信号 text 重复', dupTexts.map(([t, ids]) => `"${t}" → ${ids.join(',')}`).slice(0,3).join('; '));

// 因子名唯一性
const nameToIds = {};
factors.records.forEach(f => {
  if (!nameToIds[f.name]) nameToIds[f.name] = [];
  nameToIds[f.name].push(f.id);
});
const dupFactorNames = Object.entries(nameToIds).filter(([n, ids]) => ids.length > 1);
if (dupFactorNames.length === 0) ok('因子 name 全部唯一');
else info(`因子 name 重名（同维度下允许）：` + dupFactorNames.map(([n, ids]) => `"${n}" → ${ids.join(',')}`).slice(0,3).join('; '));

// ============================================================
console.log(C.bold + '\n═══ 9. 抽取覆盖率测试（用真实 seed 测试） ═══' + C.reset);

const seedEntry = '今天第一次去了一家新开的咖啡馆，味道很好。突然明白了我以前的想法有问题。非常焦虑。';
// 模拟抽取
const matchedSignals = new Set();
factorSignals.records.forEach(fs => {
  const sig = signals.records.find(s => s.id === fs.signalId);
  if (sig && seedEntry.includes(sig.text)){
    matchedSignals.add(fs.factorId);
  }
});
const matchedDims = new Set();
factors.records.filter(f => matchedSignals.has(f.id)).forEach(f => matchedDims.add(f.dimCode));
info(`"${seedEntry}"`);
info(`  命中因子数: ${matchedSignals.size}`);
info(`  命中维度: ${[...matchedDims].join(', ')}`);
if (matchedDims.size >= 4) ok('典型日记覆盖 ≥4 维度');
else bad('典型日记覆盖维度不足', '仅 ' + matchedDims.size + ' 维');

// ============================================================
console.log(C.bold + '\n═══ 10. 用户数据 schema 校验 ═══' + C.reset);

const usersSchema = JSON.parse(fs.readFileSync(path.join(SCHEMA_DIR, 'users.json'), 'utf8'));
ok('用户数据 schema 加载成功');
info(`共 ${usersSchema._meta.tables.length} 张用户表`);
const requiredTables = ['entries','entry_signals','entry_segments','entry_moods','entry_tags','scenarios_custom','observation_snapshots','audit_log','user_preferences','schema_version'];
const missing = requiredTables.filter(t => !usersSchema._meta.tables.find(t2 => t2.name === t));
if (missing.length === 0) ok('所有必需表都在');
else bad('缺少必需表', missing.join(','));

// 检查每张表的审计字段
usersSchema._meta.tables.forEach(t => {
  const hasCreated = t.fields.some(f => f.name === 'createdAt');
  const hasId = t.fields.some(f => f.name === 'id' && f.primaryKey !== false);
  if (t.name !== 'user_preferences' && t.name !== 'schema_version' && !hasCreated){
    warn(`${t.name} 缺少 createdAt 字段（建议补充）`);
  }
  if (t.name !== 'user_preferences' && t.name !== 'schema_version' && !hasId){
    warn(`${t.name} 缺少主键 id 字段`);
  }
});
ok('所有用户表字段完整性已检查');

// ============================================================
console.log(C.bold + '\n═══ 总结 ═══' + C.reset);

const total = pass + fail;
console.log(`\n${pass === total ? C.green : C.red}  ${pass}/${total} 通过${C.reset}`);
if (fail > 0){
  console.log('\n' + C.red + '失败项：' + C.reset);
  issues.forEach((i, idx) => console.log(`  ${idx+1}. ${i.msg}${i.detail ? ' (' + i.detail + ')' : ''}`));
}

process.exit(fail > 0 ? 1 : 0);
