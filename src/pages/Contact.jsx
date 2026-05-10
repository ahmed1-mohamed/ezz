import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'

export default function Contact() {
    const { t } = useTranslation()

    return (
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{t('public.nav.contact')}</p>
                <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">{t('public.contact.title')}</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{t('public.contact.description')}</p>
                <div className="mt-10 space-y-6 text-slate-600 dark:text-slate-300">
                    <p>{t('public.contact.address')}</p>
                    <p>{t('public.contact.email')}</p>
                    <p>{t('public.contact.phone')}</p>
                </div>
            </section>
            <form className="rounded-3xl border border-slate-200/80 bg-slate-50 p-10 shadow-sm dark:border-slate-700/60 dark:bg-slate-950">
                <div className="space-y-6">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                        {t('public.contact.form.name')}
                        <input type="text" placeholder={t('public.contact.form.namePlaceholder')} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
                    </label>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                        {t('public.contact.form.email')}
                        <input type="email" placeholder={t('public.contact.form.emailPlaceholder')} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
                    </label>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                        {t('public.contact.form.message')}
                        <textarea placeholder={t('public.contact.form.messagePlaceholder')} rows="5" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
                    </label>
                    <div className="pt-2">
                        <Button type="submit">{t('public.contact.form.submit')}</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
