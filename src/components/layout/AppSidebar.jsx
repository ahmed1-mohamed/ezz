import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/useAuth.jsx'
import Button from '../ui/Button.jsx'

export default function AppSidebar({ links, role }) {
    const { logout } = useAuth()
    const { t } = useTranslation()
    const location = useLocation()

    return (
        <aside className="flex min-h-[calc(100vh-3rem)] w-full flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/95 md:w-80">
            <div className="space-y-3">
                <div className="rounded-3xl bg-brand-600/10 p-5 text-brand-900 dark:bg-brand-700/20 dark:text-brand-100">
                    <p className="text-xs uppercase tracking-[0.24em] text-brand-800 dark:text-brand-100">{t('dashboard.rolePanel', { role })}</p>
                    <h2 className="mt-3 text-xl font-semibold">{t('dashboard.welcome')}</h2>
                </div>
                <div className="space-y-2">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path || location.pathname.startsWith(link.path)
                        return (
                            <Link key={link.path} to={link.path} className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-brand-50 text-brand-900 dark:bg-brand-700/20 dark:text-white' : 'text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-brand-700/10'}`}>
                                {t(link.label)}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="mt-auto">
                <Button variant="ghost" onClick={() => { logout(); window.location.href = '/login' }} className="w-full justify-center border border-brand-200 dark:border-brand-700/60">
                    {t('dashboard.logout')}
                </Button>
            </div>
        </aside>
    )
}
