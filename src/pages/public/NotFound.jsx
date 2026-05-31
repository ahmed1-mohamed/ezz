import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@/shared/components/Button.jsx'

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
            <div className="w-full max-w-3xl rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-10 shadow-soft backdrop-blur-xl">
                <div className="space-y-6 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">{t('errors.notFound')}</p>
                    <h1 className="text-5xl font-semibold">404</h1>
                    <p className="max-w-xl mx-auto text-base leading-8 text-slate-400">{t('errors.notFound')}.</p>
                    <div className="flex justify-center">
                        <Link to="/">
                            <Button variant="secondary">{t('errors.goHome')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
