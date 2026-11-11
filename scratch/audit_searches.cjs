const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

const findings = [];

walkDir('src', function(filePath) {
  if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    // 1. Client side string matching in filters
    const hasFilterIncludes = /\.filter\s*\(/.test(trimmed) || /useMemo.*\.filter/.test(trimmed);
    const hasStringSearch = /\.includes\(|\.toLowerCase\(\)|\.indexOf\(|RegExp/.test(trimmed);
    
    // 2. Check for search inputs
    const isSearchInput = /type=['"]search['"]/.test(trimmed) || 
      (/placeholder=.*(بحث|search)/i.test(trimmed) && /<input/i.test(trimmed));
      
    // 3. Search state
    const isSearchState = /const\s+\[(search\w*|query\w*|term\w*),\s*set\w+\]\s*=\s*useState/.test(trimmed);

    if (hasFilterIncludes && hasStringSearch) {
      findings.push({
        type: 'CLIENT_FILTER_POTENTIAL',
        file: filePath,
        lineNum: idx + 1,
        code: trimmed
      });
    }

    if (isSearchInput || isSearchState) {
      findings.push({
        type: isSearchInput ? 'SEARCH_INPUT' : 'SEARCH_STATE',
        file: filePath,
        lineNum: idx + 1,
        code: trimmed
      });
    }
  });
});

console.log('Total findings:', findings.length);
fs.writeFileSync('scratch/search_audit_results.json', JSON.stringify(findings, null, 2));

const byFile = {};
findings.forEach(f => {
  if (!byFile[f.file]) byFile[f.file] = [];
  byFile[f.file].push(f);
});

console.log('\n=== Files with potential search / filter logic ===');
Object.keys(byFile).forEach(file => {
  console.log(`- ${file} (${byFile[file].length} occurrences)`);
});

