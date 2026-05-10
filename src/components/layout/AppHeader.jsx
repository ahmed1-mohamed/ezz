import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/useAuth.jsx'
import Button from '../ui/Button.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function AppHeader({ title }) {
    const { user, theme, toggleTheme } = useAuth()
    const { t } = useTranslation()

    return (
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{t('dashboard.overview')}</p>
                <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-900 dark:border-brand-500/40 dark:bg-brand-900/10 dark:text-white">
                    {t('dashboard.welcome')}, <span className="font-semibold">{user?.name}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    <LanguageSwitcher />
                    <Button variant="secondary" onClick={toggleTheme} className="whitespace-nowrap">
                        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    </Button>
                </div>
            </div>
        </header>
    )
}
