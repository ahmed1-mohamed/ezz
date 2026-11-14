import { memo, Suspense, useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppNavbar from '@/shared/components/AppNavbar.jsx'
import Container from '@/shared/components/Container.jsx'
import Footer from '@/shared/components/Footer.jsx'
import NotFound from '@/pages/public/NotFound.jsx'
import SeoHead from '@/shared/components/SeoHead.jsx'
import FloatingWhatsAppButton from '@/shared/components/FloatingWhatsAppButton.jsx'
import { setLanguage } from '@/i18n.js'

export default memo(function PublicLayout() {
  const { lang: urlLang } = useParams()
  const { i18n } = useTranslation()
  const location = useLocation()
  const lang = urlLang || localStorage.getItem('appLanguage') || i18n.language || 'ar'
  const isValidLang = !urlLang || urlLang === 'ar' || urlLang === 'en'
  useEffect(() => {
    if (urlLang && (urlLang === 'ar' || urlLang === 'en') && i18n.language !== urlLang) {
      setLanguage(urlLang)
    }
  }, [urlLang, i18n.language])
  if (!isValidLang) {
    return <NotFound />
  }
  const subPath = location.pathname.replace(/^\/(ar|en)\/?/, '').replace(/^\//, '')
  const isSchedule = location.pathname.endsWith('/schedule')
  return (
    <div
      className={`min-h-screen flex flex-col text-slate-900 dark:text-slate-100 ${
        isSchedule ? 'bg-[#EEF2F0]/80 dark:bg-slate-950' : 'bg-white dark:bg-slate-950'
      }`}
    >
      {!subPath.startsWith("teachers/") && <SeoHead lang={lang} subPath={subPath} />}
      <AppNavbar />
      <main className="flex-1">
        {isSchedule ? (
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-28 min-h-[400px]">
                <div className="w-9 h-9 rounded-full border-3 border-[#00695C] border-t-transparent animate-spin" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        ) : (
          <Container className="py-6 sm:py-8 lg:py-10">
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-28 min-h-[400px]">
                  <div className="w-9 h-9 rounded-full border-3 border-[#00695C] border-t-transparent animate-spin" />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </Container>
        )}
      </main>
      <Footer className="border-t border-slate-200/80 bg-white/90 py-6 sm:py-8 lg:py-10 text-xs sm:text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/95 dark:text-slate-300" />
      <FloatingWhatsAppButton />
    </div>
  )
})
