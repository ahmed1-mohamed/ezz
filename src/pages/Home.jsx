import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'

export default function Home() {
    const { t } = useTranslation()

    const features = [
        { label: t('home.features.secureRouting'), value: 'Admin / Manager / Teacher / Student' },
        { label: t('home.features.protectedPages'), value: t('home.features.protectedPages') },
        { label: t('home.features.persistentAuth'), value: t('home.features.persistentAuth') },
        { label: t('home.features.responsiveUI'), value: t('home.features.responsiveUI') },
    ]

    return (
        <div className="space-y-10">
            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{t('appName')}</p>
                            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t('home.title')}</h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{t('home.description')}</p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link to="/login">
                                <Button>{t('home.button')}</Button>
                            </Link>
                            <Link to="/about" className="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                                {t('home.learnMore')} →
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 text-slate-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100">
                        <h2 className="text-xl font-semibold">{t('home.promoTitle')}</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{t('home.promoText')}</p>
                        <div className="mt-6 grid gap-4">
                            {features.map((item) => (
                                <div key={item.label} className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-900">
                                    <p className="font-semibold text-slate-900 dark:text-white">{item.label}</p>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
