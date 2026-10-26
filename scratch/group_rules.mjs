import fs from 'fs';
import path from 'path';

const raw = fs.readFileSync('scratch/lint_results.json', 'utf8');
const results = JSON.parse(raw);

const rulesCount = {};
const issuesByRule = {};

for (const file of results) {
  for (const m of file.messages) {
    const rule = m.ruleId || 'syntax';
    rulesCount[rule] = (rulesCount[rule] || 0) + 1;
    if (!issuesByRule[rule]) issuesByRule[rule] = [];
    issuesByRule[rule].push({
      file: path.relative(process.cwd(), file.filePath),
      line: m.line,
      column: m.column,
      message: m.message
    });
  }
}

console.log('Rule Counts:');
console.log(rulesCount);

fs.writeFileSync('scratch/issues_by_rule.json', JSON.stringify(issuesByRule, null, 2), 'utf8');
