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

    content = content.replace(/\/images\/المناهج/g, "/images/curriculums");
    content = content.replace(/\/images\/النخبة/g, "/images/elite");
    content = content.replace(/\/images\/برامجنا/g, "/images/programs");
    content = content.replace(/\/images\/من نحن/g, "/images/about");
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed image paths in:', filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);
