import { Link, NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'
import LanguageSwitcher from '../components/layout/LanguageSwitcher.jsx'
import { publicNavigation } from '../constants/publicNavigation.js'


const navLinks = publicNavigation.map(item => ({
    label: item.labelKey,
    to: item.path,
}))

export default function PublicLayout() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm dark:border-slate-800/80 dark:bg-slate-950/95">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <Link to="/" className="text-xl font-semibold text-slate-900 dark:text-white">
                        {t('appName')}
                    </Link>
                    <nav className="hidden items-center gap-4 md:flex">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition ${isActive ? 'text-brand-700 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
                                }
                            >
                                {t(item.label)}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />
                        <Link to="/register">
                            <Button variant="secondary">{t('public.register')}</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="ghost">{t('public.login')}</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <Outlet />
            </main>

            <footer className="border-t border-slate-200/80 bg-white/90 py-8 text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/95 dark:text-slate-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>{t('public.footer.copyright')}</p>
                        <p>{t('public.footer.tagline')}</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
