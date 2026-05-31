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

    content = content.replace(/from\s+['"]([^'"]*?)components\/ui\/([^'"]+)['"]/g, "from '$1shared/components/$2'");
    content = content.replace(/from\s+['"]([^'"]*?)components\/layout\/([^'"]+)['"]/g, "from '$1shared/components/$2'");

    content = content.replace(/from\s+['"]([^'"]*?)hooks\/([^'"]+)['"]/g, "from '$1shared/hooks/$2'");

    content = content.replace(/from\s+['"]([^'"]*?)services\/([^'"]+)['"]/g, "from '$1shared/services/$2'");

    content = content.replace(/from\s+['"]([^'"]*?)constants\/([^'"]+)['"]/g, "from '$1shared/constants/$2'");


    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed imports in:', filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);
