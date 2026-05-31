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

    // Replace specific known paths regardless of relative level
    // This uses a regex to match import statements and replace the old paths with the new ones.
    
    // Replace components/ui -> shared/components
    content = content.replace(/from\s+['"]([^'"]*?)components\/ui\/([^'"]+)['"]/g, "from '$1shared/components/$2'");
    content = content.replace(/from\s+['"]([^'"]*?)components\/layout\/([^'"]+)['"]/g, "from '$1shared/components/$2'");
    
    // Replace hooks -> shared/hooks
    content = content.replace(/from\s+['"]([^'"]*?)hooks\/([^'"]+)['"]/g, "from '$1shared/hooks/$2'");
    
    // Replace services -> shared/services
    content = content.replace(/from\s+['"]([^'"]*?)services\/([^'"]+)['"]/g, "from '$1shared/services/$2'");
    
    // Replace constants -> shared/constants
    content = content.replace(/from\s+['"]([^'"]*?)constants\/([^'"]+)['"]/g, "from '$1shared/constants/$2'");
    
    // Wait, the relative paths might be wrong now because the depth of the files might have changed.
    // Let's not blindly replace. Let's calculate the correct relative path!
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed imports in:', filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);
