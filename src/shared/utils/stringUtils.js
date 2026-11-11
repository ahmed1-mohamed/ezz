export function normalizeArabic(text) {
  if (text === null || text === undefined) return ''
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىي]/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[\s\-_]+/g, ' ')
}

export function matchesArabicQuery(text, query) {
  if (!query) return true
  const normQuery = normalizeArabic(query)
  if (!normQuery) return true
  const normText = normalizeArabic(text)
  return normText.includes(normQuery)
}

