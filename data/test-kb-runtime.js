// test-kb-runtime.js - 验证运行时 KB 驱动抽取
const fs = require('fs');
const kbInline = fs.readFileSync('data/kb-inline.js', 'utf8');
const html = fs.readFileSync('app.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const all = scripts.join('\n;\n');
const start = all.indexOf('const Domain = (() => {');
const end = all.indexOf('})();', start) + 4;

const wrapper = `
const window = { TT_KB: null, TT_KB_INDEX: null };
const document = { addEventListener:()=>{} };
const localStorage = { data: {}, getItem(k){return this.data[k]||null;}, setItem(k,v){this.data[k]=v;} };
${kbInline}
${all.slice(start, end)}
module.exports = Domain;
`;
fs.writeFileSync('/tmp/domain-with-kb.js', wrapper);
const Domain = require('/tmp/domain-with-kb.js');

const C = {
  reset: '\x1b[0m', green: '\x1b[32m', bold: '\x1b[1m', dim: '\x1b[2m'
};

console.log(C.bold + '\n═══ KB 运行时集成测试 ═══' + C.reset);

const stats = Domain.KBStats();
console.log(C.green + '✓ KB Stats:' + C.reset, JSON.stringify(stats));

const rules = Domain.getRulesFromKB();
const flatFactors = rules.flatMap(r => r.factors);
console.log(C.green + `✓ KB 派生 Rules: ${rules.length} 条 / Factors: ${flatFactors.length} 个` + C.reset);

// 用 KB 驱动的 rules 跑抽取
const tests = [
  '今天开了三小时的会，加了班，不再焦虑未来。',
  '今天第一次去了一家新开的咖啡馆，味道很好。突然明白了我以前的想法有问题。',
  '晚上和老朋友吃了顿饭，深度聊了一些人生选择。第一次和她说起家里的事，她说她懂我。',
];
tests.forEach((text, i) => {
  const sigs = Domain.extractSignals(text, rules);
  console.log(`\n  ${C.dim}#${i+1}${C.reset} ${text}`);
  console.log(`    ${sigs.length} hits`);
  sigs.forEach(s => {
    const negMark = s.negated ? C.dim + ' [已否定]' + C.reset : '';
    console.log(`    · ${s.factorId} ${s.factorName} · ${s.src} conf=${s.confidence}${negMark}`);
  });
});