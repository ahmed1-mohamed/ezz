import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO_CONFIG } from '@/shared/constants/seoData.js'

function setRobots(content) {
  let tag = document.querySelector('meta[name="robots"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'robots')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function clearCanonicals() {
  document
    .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
    .forEach((tag) => tag.remove())
}

export default function IndexingPolicy() {
  const { pathname } = useLocation()

  useEffect(() => {
    const match = pathname.match(/^\/(ar|en)(?:\/(.*))?\/?$/)
    const lang = match?.[1]
    const localizedPath = (match?.[2] || '').replace(/\/$/, '')
    const publicPaths = Object.values(SEO_CONFIG)
      .filter((page) => page.path !== 'teachers/:id')
      .map((page) => page.path)
    const isTeacherProfile = /^teachers\/[^/]+$/.test(localizedPath)
    const isIndexable = Boolean(
      lang && (publicPaths.includes(localizedPath) || isTeacherProfile),
    )

    if (isIndexable) {
      setRobots('index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
      return
    }

    setRobots('noindex, nofollow')
    clearCanonicals()
  }, [pathname])

  return null
}
