import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/useAuth.jsx'
import Button from '../ui/Button.jsx'

export default function AppSidebar({ links, role }) {
    const { logout } = useAuth()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <aside className="flex min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] w-full flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/95 lg:w-72 xl:w-80">
            <div className="space-y-3">
                <div className="rounded-2xl sm:rounded-3xl bg-brand-600/10 p-3 sm:p-5 text-brand-900 dark:bg-brand-700/20 dark:text-brand-100">
                    <p className="text-xs uppercase tracking-[0.24em] text-brand-800 dark:text-brand-100">{t('dashboard.rolePanel', { role })}</p>
                    <h2 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold">{t('dashboard.welcome')}</h2>
                </div>
                <div className="space-y-2">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path || location.pathname.startsWith(link.path)
                        return (
                            <Link key={link.path} to={link.path} className={`block rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium transition ${isActive ? 'bg-brand-50 text-brand-900 dark:bg-brand-700/20 dark:text-white' : 'text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-brand-700/10'}`}>
                                {t(link.label)}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="mt-auto">
                <Button
                    variant="ghost"
                    onClick={() => {
                        logout()
                        navigate('/login')
                    }}
                    className="w-full justify-center border border-brand-200 dark:border-brand-700/60 text-sm sm:text-base"
                >
                    {t('dashboard.logout')}
                </Button>
            </div>
        </aside>
    )
}
