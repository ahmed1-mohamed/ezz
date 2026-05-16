import { useAuth } from './context/useAuth.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { useTranslation } from 'react-i18next'
import { useLayoutEffect } from 'react'

function App() {
  const { theme } = useAuth()
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  useLayoutEffect(() => {
    const dir = isArabic ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [i18n.language, isArabic])

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300`}>
      <AppRoutes />
    </div>
  )
}

export default App
