import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'
import { Link } from 'react-router-dom'

export default function About() {
    const { t } = useTranslation()

    return (
        <div className="space-y-10">
            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="max-w-4xl space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{t('public.nav.about')}</p>
                    <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{t('public.about.title')}</h1>
                    <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{t('public.about.description')}</p>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-3xl bg-slate-50 p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                            <h2 className="font-semibold">{t('public.about.missionTitle')}</h2>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{t('public.about.missionText')}</p>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                            <h2 className="font-semibold">{t('public.about.visionTitle')}</h2>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{t('public.about.visionText')}</p>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                            <h2 className="font-semibold">{t('public.about.valuesTitle')}</h2>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{t('public.about.valuesText')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('public.about.teamTitle')}</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">{t('public.about.teamText')}</p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-10 text-slate-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100">
                    <h3 className="text-xl font-semibold">{t('public.about.quickLinks')}</h3>
                    <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
                        <li>{t('public.about.quickLink1')}</li>
                        <li>{t('public.about.quickLink2')}</li>
                        <li>{t('public.about.quickLink3')}</li>
                    </ul>
                    <div className="mt-6">
                        <Link to="/contact">
                            <Button>{t('public.about.contactButton')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
