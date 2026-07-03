import { useTranslation } from 'react-i18next'
import { useLayoutEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '@/shared/context/useAuth'
import AppRoutes from './routes/AppRoutes.jsx'
import ScrollManager from '@/shared/components/ScrollManager.jsx'

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
      <ScrollManager />
      <AppRoutes />
      <Toaster 
        position={isArabic ? 'top-left' : 'top-right'}
        reverseOrder={false}
        toastOptions={{
          className: 'dark:bg-slate-800 dark:text-white',
          style: {
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          },
        }} 
      />
    </div>
  )
}

export default App
