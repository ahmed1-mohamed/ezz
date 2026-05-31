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

    content = content.replace(/from\s+['"](?:\.\.\/)+shared\/components\/([^'"]+)['"]/g, "from '@/shared/components/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+components\/ui\/([^'"]+)['"]/g, "from '@/shared/components/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+components\/layout\/([^'"]+)['"]/g, "from '@/shared/components/$1'");

    content = content.replace(/from\s+['"](?:\.\.\/)+shared\/hooks\/([^'"]+)['"]/g, "from '@/shared/hooks/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+hooks\/([^'"]+)['"]/g, "from '@/shared/hooks/$1'");

    content = content.replace(/from\s+['"](?:\.\.\/)+context\/([^'"]+)['"]/g, "from '@/shared/context/$1'");

    content = content.replace(/from\s+['"](?:\.\.\/)+shared\/services\/([^'"]+)['"]/g, "from '@/shared/services/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+services\/([^'"]+)['"]/g, "from '@/shared/services/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+services\/api\/([^'"]+)['"]/g, "from '@/shared/services/api/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+services\/mockData\/([^'"]+)['"]/g, "from '@/shared/services/mockData/$1'");

    content = content.replace(/from\s+['"](?:\.\.\/)+shared\/constants\/([^'"]+)['"]/g, "from '@/shared/constants/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+constants\/([^'"]+)['"]/g, "from '@/shared/constants/$1'");

    content = content.replace(/from\s+['"](?:\.\.\/)+pages\/([^'"]+)['"]/g, "from '@/pages/public/$1'");
    content = content.replace(/from\s+['"]@\/pages\/public\/Login\.jsx['"]/g, "from '@/pages/auth/Login.jsx'");
    content = content.replace(/from\s+['"]@\/pages\/public\/Register\.jsx['"]/g, "from '@/pages/auth/Register.jsx'");

    content = content.replace(/from\s+['"](?:\.\.\/)+features\/parent\/presentation\/components\/child_details\/([^'"]+)['"]/g, "from '@/dashboard/parent/components/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+features\/parent\/presentation\/components\/([^'"]+)['"]/g, "from '@/dashboard/parent/components/$1'");

    content = content.replace(/from\s+['"](?:\.\.\/)+store\/([^'"]+)['"]/g, "from '@/store/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+features\/parent\/parentSlice['"]/g, "from '@/store/parentSlice'");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed imports in:', filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);