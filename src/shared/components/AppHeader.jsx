import { useTranslation } from 'react-i18next'
import { useAuth } from '@/shared/context/useAuth.jsx'
import Button from './Button.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function AppHeader({ title }) {
    const { user, theme, toggleTheme } = useAuth()
    const { t } = useTranslation()

    return (
        <header className="flex flex-col gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{t('dashboard.overview')}</p>
                <h1 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="rounded-xl sm:rounded-2xl border border-brand-200 bg-brand-50 px-3 sm:px-4 py-2 sm:py-3 text-sm text-brand-900 dark:border-brand-500/40 dark:bg-brand-900/10 dark:text-white">
                    {t('dashboard.welcome')}, <span className="font-semibold">{user?.name}</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <LanguageSwitcher />
                    <Button variant="secondary" onClick={toggleTheme} className="whitespace-nowrap text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5">
                        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    </Button>
                </div>
            </div>
        </header>
    )
}
