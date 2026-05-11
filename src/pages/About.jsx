import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'
import { Link } from 'react-router-dom'

export default function About() {
    const { t } = useTranslation()

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <section className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="max-w-4xl space-y-4 sm:space-y-6">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-500">{t('public.nav.about')}</p>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">{t('public.about.title')}</h1>
                    <p className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">{t('public.about.description')}</p>
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-4 sm:p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                            <h2 className="text-lg sm:text-xl font-semibold">{t('public.about.missionTitle')}</h2>
                            <p className="mt-2 sm:mt-3 text-sm text-slate-600 dark:text-slate-400">{t('public.about.missionText')}</p>
                        </div>
                        <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-4 sm:p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                            <h2 className="text-lg sm:text-xl font-semibold">{t('public.about.visionTitle')}</h2>
                            <p className="mt-2 sm:mt-3 text-sm text-slate-600 dark:text-slate-400">{t('public.about.visionText')}</p>
                        </div>
                        <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-4 sm:p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                            <h2 className="text-lg sm:text-xl font-semibold">{t('public.about.valuesTitle')}</h2>
                            <p className="mt-2 sm:mt-3 text-sm text-slate-600 dark:text-slate-400">{t('public.about.valuesText')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">{t('public.about.teamTitle')}</h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">{t('public.about.teamText')}</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50 p-6 sm:p-8 lg:p-10 text-slate-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100">
                    <h3 className="text-lg sm:text-xl font-semibold">{t('public.about.quickLinks')}</h3>
                    <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                        <li>{t('public.about.quickLink1')}</li>
                        <li>{t('public.about.quickLink2')}</li>
                        <li>{t('public.about.quickLink3')}</li>
                    </ul>
                    <div className="mt-4 sm:mt-6">
                        <Link to="/contact">
                            <Button className="w-full sm:w-auto">{t('public.about.contactButton')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
