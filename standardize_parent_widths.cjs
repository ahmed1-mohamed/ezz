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


    content = content.replace(/max-w-[3456]xl\s+mx-auto/g, "max-w-7xl mx-auto");
    content = content.replace(/max-w-md\s+mx-auto/g, "max-w-7xl mx-auto");
    content = content.replace(/max-w-lg\s+mx-auto/g, "max-w-7xl mx-auto");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

walkDir(path.join(__dirname, 'src/dashboard/parent'), processFile);
