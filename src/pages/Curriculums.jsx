import { useTranslation } from 'react-i18next'

export default function Curriculums() {
    const { t } = useTranslation()

    const curriculums = [
        {
            title: 'Arabic Language',
            description: 'Master Arabic grammar, literature, and writing skills.',
        },
        {
            title: 'English Language',
            description: 'Comprehensive English course covering grammar, communication, and literature.',
        },
        {
            title: 'Mathematics',
            description: 'Build strong foundational and advanced mathematical concepts.',
        },
        {
            title: 'Science',
            description: 'Explore physics, chemistry, and biology fundamentals.',
        },
        {
            title: 'Social Studies',
            description: 'Learn about history, geography, and cultural awareness.',
        },
        {
            title: 'Information Technology',
            description: 'Introduction to computer science and digital literacy.',
        },
    ]

    return (
        <section className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">{t('public.curriculums?.subtitle', { defaultValue: 'Our Learning Pathways' })}</p>
                        <h1 className="mt-2 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">{t('public.curriculums?.title', { defaultValue: 'Featured Learning Curriculums' })}</h1>
                    </div>
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {curriculums.map((curriculum) => (
                            <article key={curriculum.title} className="rounded-xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col h-full">
                                <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{curriculum.title}</h2>
                                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 flex-1">{curriculum.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50 p-5 sm:p-8 lg:p-10 text-slate-900 dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100">
                <p className="text-center text-base sm:text-lg font-semibold">{t('public.curriculums?.ctaText', { defaultValue: 'Ready to explore our curriculums? Join us today!' })}</p>
            </div>
        </section>
    )
}
