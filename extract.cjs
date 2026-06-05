const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(dir + '/' + file);
        if (stat.isDirectory()) {
            fileList = getFiles(dir + '/' + file, fileList);
        } else if (file.endsWith('.jsx')) {
            fileList.push(dir + '/' + file);
        }
    }
    return fileList;
}

const files = getFiles('src');
const regex = /t\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/g;
const extracted = {};

for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    while ((match = regex.exec(content)) !== null) {
        extracted[match[1]] = match[2];
    }
}

fs.writeFileSync('extracted_keys.json', JSON.stringify(extracted, null, 2));
console.log('Extracted ' + Object.keys(extracted).length + ' keys.');
