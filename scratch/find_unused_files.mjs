import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');

function getAllFiles(dir, exts = ['.js', '.jsx', '.ts', '.tsx', '.css', '.svg', '.png', '.jpg']) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else if (exts.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

const allSrcFiles = getAllFiles(srcDir);
const allFilesIncludingHtmlAndConfig = [
  path.resolve('index.html'),
  path.resolve('vite.config.js'),
  path.resolve('tailwind.config.js'),
  ...allSrcFiles
];

// Read all files content
const fileContents = allFilesIncludingHtmlAndConfig.map(f => ({
  path: f,
  content: fs.readFileSync(f, 'utf8')
}));

const entryPoints = [
  path.resolve('src/main.jsx'),
  path.resolve('src/index.css'),
  path.resolve('src/App.jsx'),
  path.resolve('src/routes/AppRoutes.jsx')
];

const unusedFiles = [];

for (const file of allSrcFiles) {
  if (entryPoints.includes(file)) continue;

  const basename = path.basename(file);
  const nameWithoutExt = basename.replace(/\.[^/.]+$/, '');
  
  // Check if filename or nameWithoutExt is referenced anywhere in other files
  let isReferenced = false;
  for (const other of fileContents) {
    if (other.path === file) continue;
    if (other.content.includes(basename) || other.content.includes(nameWithoutExt)) {
      isReferenced = true;
      break;
    }
  }

  if (!isReferenced) {
    unusedFiles.push(path.relative(process.cwd(), file));
  }
}

console.log(`Potential unused files found: ${unusedFiles.length}`);
fs.writeFileSync('scratch/unused_files.json', JSON.stringify(unusedFiles, null, 2), 'utf8');
console.log(unusedFiles);
