import { useEffect } from 'react'
import { BASE_SITE_URL, SEO_CONFIG } from '@/shared/constants/seoData'

function findSeoConfig(subPath) {
  if (!subPath) return SEO_CONFIG.home
  const normalized = subPath.replace(/^\/+|\/+$/g, '')
  if (!normalized) return SEO_CONFIG.home
  if (normalized.startsWith('teachers/')) return SEO_CONFIG.teacherProfile
  return Object.values(SEO_CONFIG).find((item) => item.path === normalized) || SEO_CONFIG.home
}

function upsertMeta(attribute, value, content) {
  if (!content) return
  let element = document.querySelector('meta[' + attribute + '="' + value + '"]')
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel, href, extraAttrs = {}) {
  let selector = 'link[rel="' + rel + '"]'
  if (extraAttrs.hreflang) selector += '[hreflang="' + extraAttrs.hreflang + '"]'
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    Object.entries(extraAttrs).forEach(([key, value]) => element.setAttribute(key, value))
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function removeCanonicalAlternates() {
  document
    .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
    .forEach((element) => element.remove())
}

export default function SeoHead({ lang = 'ar', subPath = '', customTitle, customDescription }) {
  const currentLang = lang === 'en' ? 'en' : 'ar'
  const config = findSeoConfig(subPath)
  const title = customTitle || (currentLang === 'en' ? config.title.en : config.title.ar)
  const description =
    customDescription || (currentLang === 'en' ? config.description.en : config.description.ar)

  useEffect(() => {
    const cleanSubPath = subPath ? subPath.replace(/^\/+|\/+$/g, '') : ''
    const isPaymentStatus = /^(checkout\/status|payment\/(status|success))\/?$/.test(cleanSubPath)

    if (isPaymentStatus) {
      upsertMeta('name', 'robots', 'noindex, nofollow')
      removeCanonicalAlternates()
      return
    }

    document.title = title
    upsertMeta(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    )
    upsertMeta('name', 'description', description)

    const currentCanonical = cleanSubPath
      ? BASE_SITE_URL + '/' + currentLang + '/' + cleanSubPath
      : BASE_SITE_URL + '/' + currentLang + '/'
    const arUrl = cleanSubPath
      ? BASE_SITE_URL + '/ar/' + cleanSubPath
      : BASE_SITE_URL + '/ar/'
    const enUrl = cleanSubPath
      ? BASE_SITE_URL + '/en/' + cleanSubPath
      : BASE_SITE_URL + '/en/'

    upsertLink('canonical', currentCanonical)
    upsertLink('alternate', arUrl, { hreflang: 'ar' })
    upsertLink('alternate', enUrl, { hreflang: 'en' })
    upsertLink('alternate', arUrl, { hreflang: 'x-default' })

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', currentCanonical)
    upsertMeta('property', 'og:image', BASE_SITE_URL + '/NewLogo.webp')
    upsertMeta('property', 'og:locale', currentLang === 'ar' ? 'ar_EG' : 'en_US')
    upsertMeta('property', 'og:locale:alternate', currentLang === 'ar' ? 'en_US' : 'ar_EG')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', BASE_SITE_URL + '/NewLogo.webp')
  }, [currentLang, subPath, title, description])

  return null
}
