import fs from 'fs';
import path from 'path';

try {
  const filePath = path.resolve('scratch/lint_results.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const results = JSON.parse(raw);

  let totalErrors = 0;
  let totalWarnings = 0;
  const filesWithIssues = [];

  for (const item of results) {
    if (item.errorCount > 0 || item.warningCount > 0) {
      totalErrors += item.errorCount;
      totalWarnings += item.warningCount;
      const relPath = path.relative(process.cwd(), item.filePath);
      const messages = item.messages.map(m => `  L${m.line}:${m.column} [${m.severity === 2 ? 'ERR' : 'WARN'}] (${m.ruleId || 'syntax'}): ${m.message}`);
      filesWithIssues.push(`${relPath} (Errors: ${item.errorCount}, Warnings: ${item.warningCount})\n${messages.join('\n')}`);
    }
  }

  const output = `Total Errors: ${totalErrors}, Total Warnings: ${totalWarnings}\nFiles with issues: ${filesWithIssues.length}\n\n` + filesWithIssues.join('\n\n');
  fs.writeFileSync('scratch/lint_compact_summary.txt', output, 'utf8');
  console.log(`Summary written: ${filesWithIssues.length} files with issues (${totalErrors} errors, ${totalWarnings} warnings).`);
} catch (err) {
  console.error('Failed to parse lint results:', err);
}