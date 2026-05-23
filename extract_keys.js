/* eslint-disable no-undef, no-useless-escape */
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const enFile = path.join(srcDir, 'locales', 'en', 'translation.json');

const enJson = JSON.parse(fs.readFileSync(enFile, 'utf8'));

// Function to check if a key path exists in object
function hasNestedKey(obj, keyPath) {
    return keyPath.split('.').reduce((acc, part) => acc && acc[part], obj) !== undefined;
}

const regex = /t\(\s*['"]([\w\.]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/g;

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    let missingKeys = [];
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            missingKeys = missingKeys.concat(scanDir(fullPath));
        } else if (fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            let match;
            while ((match = regex.exec(content)) !== null) {
                const key = match[1];
                const value = match[2];
                if (!hasNestedKey(enJson, key)) {
                    missingKeys.push({ key, value });
                }
            }
        }
    }
    return missingKeys;
}

const missing = scanDir(srcDir);
const uniqueMissing = {};
missing.forEach(item => {
    uniqueMissing[item.key] = item.value;
});

console.log(JSON.stringify(uniqueMissing, null, 2));
