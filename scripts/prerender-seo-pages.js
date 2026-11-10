import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BASE_SITE_URL, SEO_CONFIG } from '../src/shared/constants/seoData.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(projectRoot, 'dist')
const baseUrl = BASE_SITE_URL.replace(/\/$/, '')
const imageUrl = baseUrl + '/NewLogo.webp'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeRegExp(value) {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function setMeta(html, attribute, key, content) {
  const pattern = new RegExp('<meta\\s+[^>]*' + attribute + '="' + escapeRegExp(key) + '"[^>]*>', 'i')
  const tag = '<meta ' + attribute + '="' + escapeHtml(key) + '" content="' + escapeHtml(content) + '" />'
  if (pattern.test(html)) return html.replace(pattern, tag)
  return html.replace('</head>', '  ' + tag + '\n  </head>')
}

function pageUrl(lang, routePath) {
  const cleanPath = routePath.replace(/^\/+|\/+$/g, '')
  return baseUrl + '/' + lang + (cleanPath ? '/' + cleanPath : '/')
}

function createPageHtml(template, lang, routePath, title, description) {
  const currentUrl = pageUrl(lang, routePath)
  const arUrl = pageUrl('ar', routePath)
  const enUrl = pageUrl('en', routePath)
  let html = template

  html = html.replace(/<html\b[^>]*>/i, '<html lang="' + lang + '" dir="' + (lang === 'ar' ? 'rtl' : 'ltr') + '">')
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + escapeHtml(title) + '</title>')
  html = setMeta(html, 'name', 'description', description)
  html = setMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', description)
  html = setMeta(html, 'property', 'og:type', 'website')
  html = setMeta(html, 'property', 'og:url', currentUrl)
  html = setMeta(html, 'property', 'og:image', imageUrl)
  html = setMeta(html, 'property', 'og:locale', lang === 'ar' ? 'ar_EG' : 'en_US')
  html = setMeta(html, 'property', 'og:locale:alternate', lang === 'ar' ? 'en_US' : 'ar_EG')
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', description)
  html = setMeta(html, 'name', 'twitter:image', imageUrl)

  html = html.replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]+"[^>]*>\s*/gi, '')
  const links = [
    '<link rel="canonical" href="' + currentUrl + '" />',
    '<link rel="alternate" hreflang="ar" href="' + arUrl + '" />',
    '<link rel="alternate" hreflang="en" href="' + enUrl + '" />',
    '<link rel="alternate" hreflang="x-default" href="' + arUrl + '" />',
  ].join('\n  ')
  html = html.replace('</head>', '  ' + links + '\n  </head>')

  const jsonLdPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i
  html = html.replace(jsonLdPattern, function (match, jsonLd) {
    try {
      const data = JSON.parse(jsonLd)
      for (const node of data['@graph'] || []) {
        if (node['@type'] === 'WebSite') {
          node.url = currentUrl
          node.inLanguage = lang
          node.description = description
          node.name = lang === 'ar' ? 'منصة منارة العز التعليمية' : 'Manarat Al-Ezz Educational Platform'
        }
        if (node['@type'] === 'EducationalOrganization') {
          node.url = baseUrl + '/'
          node.logo = imageUrl
        }
      }
      return '<script type="application/ld+json">\n' + JSON.stringify(data, null, 2) + '\n</script>'
    } catch {
      return match
    }
  })

  return html
}

function createSitemap(pages) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ]

  for (const [, page] of pages) {
    const arUrl = pageUrl('ar', page.path)
    const enUrl = pageUrl('en', page.path)
    for (const url of [arUrl, enUrl]) {
      lines.push(
        '  <url>',
        '    <loc>' + escapeXml(url) + '</loc>',
        '    <xhtml:link rel="alternate" hreflang="ar" href="' + escapeXml(arUrl) + '" />',
        '    <xhtml:link rel="alternate" hreflang="en" href="' + escapeXml(enUrl) + '" />',
        '    <xhtml:link rel="alternate" hreflang="x-default" href="' + escapeXml(arUrl) + '" />',
        '  </url>',
      )
    }
  }
  lines.push('</urlset>')
  return lines.join('\n') + '\n'
}

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
const pages = Object.entries(SEO_CONFIG).filter(([key]) => key !== 'teacherProfile')

for (const [, page] of pages) {
  for (const lang of ['ar', 'en']) {
    const directory = path.join(distDir, lang, ...page.path.split('/').filter(Boolean))
    await mkdir(directory, { recursive: true })
    const html = createPageHtml(template, lang, page.path, page.title[lang], page.description[lang])
    await writeFile(path.join(directory, 'index.html'), html)
  }
}

const sitemap = createSitemap(pages)
await writeFile(path.join(projectRoot, 'public', 'sitemap.xml'), sitemap)
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('Generated localized SEO pages and sitemap for ' + pages.length + ' public routes.')
