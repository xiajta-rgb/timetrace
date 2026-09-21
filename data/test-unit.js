// 模拟命令面板的"运行 Domain 单元测试"按钮，跑所有 38 项测试
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
// 模拟 Store
const Store = {
  getRules(){ return Domain.getRulesFromKB(); },
  getEntries(){ return []; },
};
module.exports = { Domain, Store };
`;
fs.writeFileSync('/tmp/test-unit.js', wrapper);
const { Domain, Store } = require('/tmp/test-unit.js');

// 直接跑 runDomainTests（需要从 app.html 提取）
const start2 = all.indexOf('function runDomainTests');
const end2 = all.indexOf('function showTestResults');
const runDomainTestsCode = all.slice(start2, end2);
const fn = new Function('Domain', 'Store', 'test', runDomainTestsCode + '\nreturn runDomainTests;');
const runDomainTests = fn(Domain, Store, (name, fn) => {
  try { const r = fn(); return r === true || (r && r.pass !== false); }
  catch(e){ return false; }
});

const results = runDomainTests();
let pass = 0, fail = 0;
results.forEach(r => {
  if (r.pass){ pass++; console.log('  \x1b[32m✓\x1b[0m ' + r.name); }
  else { fail++; console.log('  \x1b[31m✗\x1b[0m ' + r.name + ' \x1b[2m' + (r.detail||'') + '\x1b[0m'); }
});
console.log('\n' + pass + '/' + (pass+fail) + ' PASS');