import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagesDir = path.resolve(__dirname, '../../images')

function getFilesRecursively(dir) {
  let results = []
  if (!fs.existsSync(dir)) return results
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath))
    } else {
      results.push(filePath)
    }
  })
  return results
}

async function convert() {
  const files = getFilesRecursively(imagesDir)
  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const webpPath = file.substring(0, file.length - ext.length) + '.webp'
      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(webpPath)
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err)
      }
    }
  }
}

convert()
