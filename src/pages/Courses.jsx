import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'

const courses = [
    { title: 'Design Thinking', description: 'Build creative classroom systems and flexible learning workflows.' },
    { title: 'Leadership & Management', description: 'Empower school teams and staff with modern administrative tools.' },
    { title: 'Digital Teaching', description: 'Create engaging courses with digital-first teaching practices.' },
]

export default function Courses() {
    const { t } = useTranslation()

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <section className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sky-500">{t('public.nav.courses')}</p>
                <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">{t('public.courses.title')}</h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">{t('public.courses.description')}</p>
            </section>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <article key={course.title} className="rounded-xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col h-full">
                        <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{course.title}</h2>
                        <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600 dark:text-slate-300 flex-1">{course.description}</p>
                    </article>
                ))}
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50 p-5 sm:p-8 lg:p-10 text-slate-900 dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100">
                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold">{t('public.courses.ctaTitle')}</h2>
                        <p className="mt-1 sm:mt-2 text-sm text-slate-600 dark:text-slate-300">{t('public.courses.ctaText')}</p>
                    </div>
                    <Button className="w-full sm:w-auto">{t('public.courses.ctaButton')}</Button>
                </div>
            </div>
        </div>
    )
}
