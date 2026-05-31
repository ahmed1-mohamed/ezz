import { useTranslation } from 'react-i18next'
import { useLayoutEffect } from 'react'
import { useAuth } from '@/shared/context/useAuth'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  const { theme } = useAuth()
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  useLayoutEffect(() => {
    const dir = isArabic ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language

    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const applyTheme = (e) => {
        if (e.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      applyTheme(mediaQuery)
      mediaQuery.addEventListener('change', applyTheme)
      return () => mediaQuery.removeEventListener('change', applyTheme)
    } else {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [i18n.language, isArabic, theme])

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <AppRoutes />
    </div>
  )
}

export default App
