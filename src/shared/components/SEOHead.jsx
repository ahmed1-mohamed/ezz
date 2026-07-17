import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://manarat-al-ezz.com/assets/NewLogo.webp',
  url,
  type = 'website',
  structuredData,
  noindex = false
}) {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'ar'
  const isArabic = lang === 'ar'

  const siteName = isArabic ? 'أكاديمية منارة العز' : 'Manarat Al-Ezz Academy'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const defaultDescription = isArabic
    ? 'منصة تعليمية متكاملة لتعليم القرآن الكريم واللغة العربية والمواد الإسلامية للطلاب وأولياء الأمور.'
    : 'A comprehensive educational platform for teaching the Holy Quran, Arabic language, and Islamic studies to students and parents.'

  const metaDescription = description || defaultDescription
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://manarat-al-ezz.com/')

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="ar" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Indexing */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={isArabic ? 'ar_EG' : 'en_US'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
