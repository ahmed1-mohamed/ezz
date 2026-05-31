import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'


const courses = [
    { title: 'Design Thinking', description: 'Build creative classroom systems and flexible learning workflows.' },
    { title: 'Leadership & Management', description: 'Empower school teams and staff with modern administrative tools.' },
    { title: 'Digital Teaching', description: 'Create engaging courses with digital-first teaching practices.' },
]

export default function Courses() {
    const { t } = useTranslation()

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80"
            >
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#00695C] font-bold">{t('public.nav.courses')}</p>
                <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">{t('public.courses.title')}</h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300 font-medium">{t('public.courses.description')}</p>
            </motion.section>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
                className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
                {courses.map((course) => (
                    <motion.article
                        key={course.title}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                        }}
                        className="rounded-xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 shadow-sm backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{course.title}</h2>
                        <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600 dark:text-slate-300 flex-1 font-medium">{course.description}</p>
                    </motion.article>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl sm:rounded-3xl border border-[#00695C]/20 bg-[#F4FAF8] p-5 sm:p-8 lg:p-10 text-slate-900 dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100 mb-20"
            >
                <div className="flex flex-col gap-5 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00695C]">{t('public.courses.ctaTitle')}</h2>
                        <p className="mt-2 text-base text-slate-600 dark:text-slate-300 font-medium">{t('public.courses.ctaText')}</p>
                    </div>
                    <button className="w-full sm:w-auto bg-[#00695C] hover:bg-[#005247] text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-md">
                        {t('public.courses.ctaButton')}
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
