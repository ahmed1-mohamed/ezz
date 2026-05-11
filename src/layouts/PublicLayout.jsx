import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppNavbar from '../components/layout/AppNavbar.jsx'

export default function PublicLayout() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <AppNavbar />

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
