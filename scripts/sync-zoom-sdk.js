/**
 * Synchronizes official @zoom/meetingsdk distribution assets into public/zoom-sdk
 * This ensures Zoom Meeting SDK is always up-to-date with package.json
 * without relying on external CDN scripts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const zoomPkgDir = path.join(rootDir, 'node_modules', '@zoom', 'meetingsdk');
const zoomDistDir = path.join(zoomPkgDir, 'dist');
const targetDir = path.join(rootDir, 'public', 'zoom-sdk');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    const parentDir = path.dirname(dest);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

function syncZoomAssets() {
  if (!fs.existsSync(zoomDistDir)) {
    console.warn('[sync-zoom-sdk] @zoom/meetingsdk dist directory not found. Run npm install first.');
    return;
  }
  const pkgJsonPath = path.join(zoomPkgDir, 'package.json');
  let version = 'unknown';
  if (fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
      version = pkg.version || 'unknown';
    } catch (e) {
      console.warn('[sync-zoom-sdk] Failed to parse @zoom/meetingsdk package.json:', e.message);
    }
  }
  console.log(`[sync-zoom-sdk] Syncing @zoom/meetingsdk v${version} assets...`);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  // Copy Component View UMD script
  const embeddedSrc = path.join(zoomDistDir, `zoom-meeting-embedded-${version}.min.js`);
  const componentViewSrc = path.join(zoomDistDir, 'component-view.umd.min.js');
  const embeddedFile = fs.existsSync(embeddedSrc) ? embeddedSrc : componentViewSrc;
  if (fs.existsSync(embeddedFile)) {
    fs.copyFileSync(embeddedFile, path.join(targetDir, 'zoom-meeting-embedded.min.js'));
    // Also update root public/zoom-meeting-embedded.min.js
    fs.copyFileSync(embeddedFile, path.join(rootDir, 'public', 'zoom-meeting-embedded.min.js'));
  }
  // Copy Client View UMD script
  const clientSrc = path.join(zoomDistDir, `zoom-meeting-${version}.min.js`);
  const clientViewSrc = path.join(zoomDistDir, 'client-view.umd.min.js');
  const clientFile = fs.existsSync(clientSrc) ? clientSrc : clientViewSrc;
  if (fs.existsSync(clientFile)) {
    fs.copyFileSync(clientFile, path.join(targetDir, 'zoom-meeting.min.js'));
  }
  // Copy CSS
  const cssSrc = path.join(zoomDistDir, 'ui', 'zoom-meetingsdk.css');
  if (fs.existsSync(cssSrc)) {
    fs.copyFileSync(cssSrc, path.join(targetDir, 'zoom-meetingsdk.css'));
  }
  // Copy vendor libraries
  const vendorSrc = path.join(zoomDistDir, 'lib', 'vendor');
  if (fs.existsSync(vendorSrc)) {
    copyRecursive(vendorSrc, path.join(targetDir, 'vendor'));
  }
  // Copy AV and WASM libraries
  const avSrc = path.join(zoomDistDir, 'lib', 'av');
  if (fs.existsSync(avSrc)) {
    copyRecursive(avSrc, path.join(targetDir, 'lib', 'av'));
  }
  // Copy UI chunk scripts
  const uiSrc = path.join(zoomDistDir, 'ui');
  if (fs.existsSync(uiSrc)) {
    copyRecursive(uiSrc, path.join(targetDir, 'ui'));
  }
  // Write version metadata
  fs.writeFileSync(
    path.join(targetDir, 'version.json'),
    JSON.stringify({ version, syncedAt: new Date().toISOString() }, null, 2),
    'utf8'
  );
  console.log(`[sync-zoom-sdk] Successfully synced @zoom/meetingsdk v${version} to public/zoom-sdk.`);
}

syncZoomAssets();
