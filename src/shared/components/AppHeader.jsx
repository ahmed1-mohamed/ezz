import { useTranslation } from 'react-i18next'
import { Sun, Moon } from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth.jsx'
import Button from './Button.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function AppHeader({ title }) {
    const { user, theme, toggleTheme } = useAuth()
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language.startsWith('ar')
    const isDarkMode = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const displayUserName = (() => {
        if (!user) return ''
        if (typeof user.name === 'object' && user.name !== null) {
            return isArabic ? (user.name.ar || user.name.en || '') : (user.name.en || user.name.ar || '')
        }
        if (user.nameAr || user.nameEn) {
            return isArabic ? (user.nameAr || user.nameEn || user.name) : (user.nameEn || user.nameAr || user.name)
        }
        return user.name || ''
    })()
    return (
        <header className="flex flex-col gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 lg:flex-row lg:items-center lg:justify-between text-start">
            <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{t('dashboard.overview', 'نظرة عامة')}</p>
                <h1 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {displayUserName && (
                    <div className="rounded-xl sm:rounded-2xl border border-brand-200 bg-brand-50 px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-brand-900 dark:border-emerald-800/40 dark:bg-emerald-950/20 dark:text-emerald-300">
                        {t('dashboard.welcome', 'مرحباً')}, <span className="font-bold">{displayUserName}</span>
                    </div>
                )}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <LanguageSwitcher />
                    <Button
                        variant="secondary"
                        onClick={toggleTheme}
                        className="inline-flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer shadow-xs"
                    >
                        {isDarkMode ? <Sun size={16} className="text-amber-500" /> : <Moon size={16} className="text-brand-500" />}
                        <span>{isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
