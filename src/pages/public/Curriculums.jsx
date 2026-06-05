import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import imageSrc from '../../images/programs/7.png';
import CurriculumUnits from '@/shared/components/CurriculumUnits.jsx'
import CurriculumsCTA from '@/shared/components/CurriculumsCTA.jsx'
import TeacherLevels from './components/TeacherProfile/TeacherLevels.jsx'

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

    const levelsData = [
        {
            id: 1,
            title: t('levels.level1.title', "المستوى الأول التجويد"),
            unitsCount: 8,
            modules: [
                { title: t('levels.level1.mod1', "مقدمة في التجويد") },
                { title: t('levels.level1.mod2', "مخارج الحروف") }
            ]
        },
        {
            id: 2,
            title: t('levels.level2.title', "المستوى الثاني القرآن"),
            unitsCount: 8,
            modules: [
                { title: t('levels.level2.mod1', "القاعدة النورانية") },
                { title: t('levels.level2.mod2', "أحكام التجويد الأساسية") }
            ]
        },
        {
            id: 3,
            title: t('levels.level3.title', "المستوى الثالث التلاوة"),
            unitsCount: 8,
            modules: [
                { title: t('levels.level3.mod1', "تلاوة سورة البقرة") },
                { title: t('levels.level3.mod2', "تلاوة سورة آل عمران") }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto space-y-16">

                <section className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white p-6 sm:p-12 lg:p-16 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-start">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="order-2 lg:order-1 max-w-3xl space-y-8 flex-1 flex flex-col items-center text-center lg:items-start lg:text-start"
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-4 py-2 text-sm font-bold text-white shadow-sm">
                                {t('curriculum.badge', 'رحلة المعرفة')}
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-4">
                                <h1 className="bg-gradient-to-r from-[#00695C] to-[#004D40] bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.4] py-2 text-transparent overflow-visible">
                                    {t('curriculum.titleLine1', 'مناهج تعليمية')}
                                </h1>
                                <h1 className="bg-gradient-to-r from-[#00695C] to-[#004D40] bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.4] py-2 text-transparent overflow-visible">
                                    {t('curriculum.titleLine2', 'تنير البصيرة وتسمو بالروح')}
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                                {t('curriculum.description', 'نقدم محتوى تعليمي متخصص مصمم بأحدث الأساليب التربوية لغرس القيم وبناء جيل متسلح بالعلم والإيمان')}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: isRtl ? 40 : -40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="order-1 lg:order-2 flex justify-center flex-1"
                        >
                            <div className="relative w-full max-w-lg">
                                <div className="absolute z-0 inset-0 -m-8 rounded-full bg-[#FEF6E0] blur-3xl mix-blend-multiply" />
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl"
                                >
                                    <img src={imageSrc} alt="Curriculums" className="w-full h-64 sm:h-80 lg:h-[400px] object-cover" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <CurriculumUnits />

                <TeacherLevels levels={levelsData} t={t} />

                <CurriculumsCTA />

            </div>
        </div>
    )
})