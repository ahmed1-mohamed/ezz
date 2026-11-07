const fs = require('fs');

const findings = JSON.parse(fs.readFileSync('scratch/search_audit_results.json', 'utf8'));

console.log('--- DETAILED FINDINGS ---');
findings.forEach((f, i) => {
  console.log(`[${i + 1}] ${f.file}:${f.lineNum} (${f.type})`);
  console.log(`    ${f.code}`);
});

