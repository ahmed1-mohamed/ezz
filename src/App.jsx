import { useTranslation } from 'react-i18next'
import { useLayoutEffect, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '@/shared/context/useAuth'
import { useQueryClient } from '@tanstack/react-query'
import AppRoutes from './routes/AppRoutes.jsx'
import IndexingPolicy from '@/shared/components/IndexingPolicy.jsx'
import ScrollManager from '@/shared/components/ScrollManager.jsx'
import AppErrorBoundary from '@/shared/components/AppErrorBoundary.jsx'

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
    const iconLink = document.querySelector("link[rel*='icon']") || document.createElement('link')
    iconLink.type = 'image/png'
    iconLink.rel = 'shortcut icon'
    iconLink.href = '/favicon.png?v=20261107'
    document.getElementsByTagName('head')[0].appendChild(iconLink)
  }, [currentLang, isArabic, theme])
  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <ScrollManager />
      <IndexingPolicy />
      <AppErrorBoundary>
        <AppRoutes key={currentLang} />
      </AppErrorBoundary>
      <Toaster 
        position={isArabic ? 'top-left' : 'top-right'}
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999999,
        }}
        containerClassName="!z-[99999999]"
        toastOptions={{
          duration: 3500,
          className: 'dark:bg-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-800 pointer-events-auto font-medium text-sm',
          style: {
            borderRadius: '16px',
            padding: '14px 18px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            zIndex: 99999999,
            backgroundColor: '#ffffff',
            color: '#1e293b',
          },
          error: {
            className: 'dark:!bg-slate-900 dark:!text-red-400 dark:!border-red-900/60 font-bold text-sm pointer-events-auto shadow-xl',
            style: {
              backgroundColor: '#ffffff',
              color: '#dc2626',
              border: '1px solid #fecaca',
              borderInlineStart: '4px solid #ef4444',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
          success: {
            className: 'dark:!bg-slate-900 dark:!text-emerald-400 dark:!border-emerald-900/60 font-bold text-sm pointer-events-auto shadow-xl',
            style: {
              backgroundColor: '#ffffff',
              color: '#0f7a6c',
              border: '1px solid #ccfbf1',
              borderInlineStart: '4px solid #0f7a6c',
            },
            iconTheme: {
              primary: '#0f7a6c',
              secondary: '#ffffff',
            },
          },
        }} 
      />
    </div>
  )
}

export default App
