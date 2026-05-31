const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

function processFile(filePath) {
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/from\s+['"]\.\.\/ui\/([^'"]+)['"]/g, "from './$1'");
    content = content.replace(/from\s+['"]\.\.\/layout\/([^'"]+)['"]/g, "from './$1'");

    content = content.replace(/from\s+['"]@\/shared\/components\/ui\/([^'"]+)['"]/g, "from '@/shared/components/$1'");
    content = content.replace(/from\s+['"]@\/shared\/components\/layout\/([^'"]+)['"]/g, "from '@/shared/components/$1'");


    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed imports in:', filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);
