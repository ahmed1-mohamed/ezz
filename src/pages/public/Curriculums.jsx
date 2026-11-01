import React from 'react';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import heroImg from '@/images/curriculums/education-hero.svg'
import CurriculumUnits from '@/shared/components/CurriculumUnits.jsx'
import CurriculumsCTA from '@/shared/components/CurriculumsCTA.jsx'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default React.memo(function Curriculums() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20">
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto space-y-16">

                <section className="overflow-hidden rounded-3xl sm:rounded-[40px] border border-slate-200/60 bg-[#EBF2F0] dark:bg-slate-900/90 dark:border-slate-800 p-6 sm:p-10 lg:p-12 xl:p-16 shadow-xs">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-1 max-w-2xl space-y-6 flex flex-col items-start text-start"
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full bg-[#735C00] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-xs">
                                {t('curriculum.badge', 'رحلة المعرفة')}
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#005247] dark:text-emerald-400 leading-[1.3] tracking-tight">
                                    <span className="block">{t('curriculum.titleLine1', 'مناهج تعليمية شاملة')}</span>
                                    <span className="block">{t('curriculum.titleLine2', 'لفهم أعمق وتعلّم متكامل')}</span>
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
                                {t('curriculum.description', 'نقدم مناهج تعليمية شاملة تجمع مختلف المواد الدراسية بشرح مبسط ومترابط، لبناء معرفة متكاملة تدعم فهم الطلاب وتفوقهم.')}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="flex-1 flex justify-center items-center w-full max-w-lg lg:max-w-xl"
                        >
                            <img
                                src={heroImg}
                                alt={t('curriculum.badge', 'رحلة المعرفة')}
                                className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
                            />
                        </motion.div>
                    </div>
                </section>

                <CurriculumUnits />

                <CurriculumsCTA />

            </div>
        </div>
    )
})
