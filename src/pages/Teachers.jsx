import { useTranslation } from 'react-i18next'

const teachers = [
    { name: 'Mariam Fathy', subject: 'Science', experience: '8 years' },
    { name: 'Hassan Adel', subject: 'Mathematics', experience: '10 years' },
    { name: 'Nada Samir', subject: 'English', experience: '6 years' },
]

export default function Teachers() {
    const { t } = useTranslation()

    return (
        <div className="space-y-10">
            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{t('public.nav.teachers')}</p>
                <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">{t('public.teachers.title')}</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{t('public.teachers.description')}</p>
            </section>
            <div className="grid gap-6 md:grid-cols-3">
                {teachers.map((teacher) => (
                    <article key={teacher.name} className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{teacher.subject}</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{teacher.name}</h2>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t('public.teachers.experience', { years: teacher.experience })}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}
