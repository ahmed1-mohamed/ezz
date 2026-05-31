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

    // Inside shared/components, things that were in layout/ imported from ../ui/
    // Now they are all in shared/components/
    content = content.replace(/from\s+['"]\.\.\/ui\/([^'"]+)['"]/g, "from './$1'");
    content = content.replace(/from\s+['"]\.\.\/layout\/([^'"]+)['"]/g, "from './$1'");

    // For absolute paths: replace all `from '../something'` where it's broken?
    // Let's just fix the known absolute path patterns:
    
    // Fix @/shared/components/ui -> @/shared/components (if any accidentally got replaced)
    content = content.replace(/from\s+['"]@\/shared\/components\/ui\/([^'"]+)['"]/g, "from '@/shared/components/$1'");
    content = content.replace(/from\s+['"]@\/shared\/components\/layout\/([^'"]+)['"]/g, "from '@/shared/components/$1'");

    // Fix i18n
    // From src/shared/components to src/i18n.js is `../../i18n.js` (src -> shared -> components). Yes, this is correct.

    // Let's also look for any unresolved `from '../` that could be using absolute imports
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed imports in:', filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);
