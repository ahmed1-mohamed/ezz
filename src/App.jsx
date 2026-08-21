import { useTranslation } from 'react-i18next'
import { useLayoutEffect, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '@/shared/context/useAuth'
import { useQueryClient } from '@tanstack/react-query'
import AppRoutes from './routes/AppRoutes.jsx'
import ScrollManager from '@/shared/components/ScrollManager.jsx'

function App() {
  const queryClient = useQueryClient()
  const { theme } = useAuth()
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'ar'
  const isArabic = currentLang.startsWith('ar')

  useEffect(() => {
    const handleLangChange = () => {
      queryClient.clear()
    }
    i18n.on('languageChanged', handleLangChange)
    window.addEventListener('appLanguageChanged', handleLangChange)
    return () => {
      i18n.off('languageChanged', handleLangChange)
      window.removeEventListener('appLanguageChanged', handleLangChange)
    }
  }, [i18n, queryClient])

  useLayoutEffect(() => {
    const dir = isArabic ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = currentLang

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
  }, [currentLang, isArabic, theme])

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <ScrollManager />
      <AppRoutes key={currentLang} />
      <Toaster 
        position={isArabic ? 'top-left' : 'top-right'}
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999999,
        }}
        containerClassName="!z-[99999999]"
        toastOptions={{
          className: 'dark:bg-slate-800 dark:text-white pointer-events-auto',
          style: {
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            zIndex: 99999999
          },
        }} 
      />
    </div>
  )
}

export default App
