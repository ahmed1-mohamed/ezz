import { useTranslation } from 'react-i18next'

const teachers = [
    { name: 'Mariam Fathy', subject: 'Science', experience: '8 years' },
    { name: 'Hassan Adel', subject: 'Mathematics', experience: '10 years' },
    { name: 'Nada Samir', subject: 'English', experience: '6 years' },
]

export default function Teachers() {
    const { t } = useTranslation()

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <section className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sky-500">{t('public.nav.teachers')}</p>
                <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">{t('public.teachers.title')}</h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">{t('public.teachers.description')}</p>
            </section>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {teachers.map((teacher) => (
                    <article key={teacher.name} className="rounded-xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col h-full">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-slate-500 dark:text-slate-400">{teacher.subject}</p>
                        <h2 className="mt-2 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">{teacher.name}</h2>
                        <p className="mt-2 sm:mt-3 text-sm text-slate-600 dark:text-slate-300">{t('public.teachers.experience', { years: teacher.experience })}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}
