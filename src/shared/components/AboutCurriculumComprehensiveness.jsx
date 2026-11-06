import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FileText, BarChart2, Calendar, Home, Users } from 'lucide-react'

export default React.memo(function AboutCurriculumComprehensiveness() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n?.language?.startsWith('ar') ?? true
    const coverageItems = useMemo(() => [
        {
            title: t('curriculum.comprehensiveness.coverage.lessonExplanation.title', 'شرح الدروس'),
            desc: t('curriculum.comprehensiveness.coverage.lessonExplanation.desc', 'نبدأ من الأساس، لنشرح المفاهيم بطرق بسيطة وواضحة، مع توفير أمثلة واضحة تساعد على الفهم العميق.'),
            icon: <FileText className="w-5 h-5" />,
            badgeStyle: 'bg-[#FFFBEB] dark:bg-amber-950/40 text-[#B45309] dark:text-amber-400'
        },
        {
            title: t('curriculum.comprehensiveness.coverage.exercises.title', 'التدريبات والتمارين'),
            desc: t('curriculum.comprehensiveness.coverage.exercises.desc', 'نركز على تطبيق المعرفة، من خلال تمارين متنوعة تساعد الطالب على تعزيز مهاراته وتثبيت المعلومات.'),
            icon: <BarChart2 className="w-5 h-5" />,
            badgeStyle: 'bg-[#E6F4F1] dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400'
        },
        {
            title: t('curriculum.comprehensiveness.coverage.reviews.title', 'المراجعات الدورية'),
            desc: t('curriculum.comprehensiveness.coverage.reviews.desc', 'نتابع التقدم بانتظام، من خلال مراجعات دورية تساعد الطالب على استرجاع المعلومات وتعزيز الثقة قبل الامتحانات.'),
            icon: <Calendar className="w-5 h-5" />,
            badgeStyle: 'bg-[#FFFBEB] dark:bg-amber-950/40 text-[#B45309] dark:text-amber-400'
        }
    ], [t])
    const stagesItems = useMemo(() => [
        {
            title: t('curriculum.comprehensiveness.stages.primary.title', 'المرحلة الابتدائية'),
            desc: t('curriculum.comprehensiveness.stages.primary.desc', 'نركز على بناء الأساس الصحيح، مع التركيز على فهم المفاهيم الأساسية والقواعد الأساسية.'),
            icon: <Home className="w-5 h-5" />,
            badgeStyle: 'bg-[#FFFBEB] dark:bg-amber-950/40 text-[#B45309] dark:text-amber-400'
        },
        {
            title: t('curriculum.comprehensiveness.stages.preparatory.title', 'المرحلة الإعدادية'),
            desc: t('curriculum.comprehensiveness.stages.preparatory.desc', 'نعمق الفهم، مع التركيز على تطبيق المفاهيم في حل المسائل والتدريبات بطرق أكثر تعقيداً.'),
            icon: <BarChart2 className="w-5 h-5" />,
            badgeStyle: 'bg-[#E6F4F1] dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400'
        },
        {
            title: t('curriculum.comprehensiveness.stages.secondary.title', 'المرحلة الثانوية'),
            desc: t('curriculum.comprehensiveness.stages.secondary.desc', 'نركز على التحضير للامتحانات، مع تعزيز مهارات التحليل والاستدلال والتفكير النقدي.'),
            icon: <FileText className="w-5 h-5" />,
            badgeStyle: 'bg-[#FFFBEB] dark:bg-amber-950/40 text-[#B45309] dark:text-amber-400'
        }
    ], [t])
    const subjectItems = useMemo(() => [
        {
            title: t('curriculum.comprehensiveness.subjects.math.title', 'الرياضيات'),
            desc: t('curriculum.comprehensiveness.subjects.math.desc', 'نركز على فهم المفاهيم الأساسية والعمليات الحسابية، مع تطبيقها في حل المسائل والتدريبات بطرق تفاعلية وسهلة الفهم.'),
            icon: <Calendar className="w-5 h-5 text-[#8C6D1F]" />,
            badgeStyle: 'bg-[#FFFBEB] dark:bg-amber-950/40 text-[#B45309] dark:text-amber-400'
        },
        {
            title: t('curriculum.comprehensiveness.subjects.science.title', 'العلوم'),
            desc: t('curriculum.comprehensiveness.subjects.science.desc', 'نربط بين النظريات والتجارب، لتعزيز الفهم العميق للظواهر الطبيعية ونمو مهارات الاستكشاف والتفكير العلمي.'),
            icon: <BarChart2 className="w-5 h-5 text-[#00695C]" />,
            badgeStyle: 'bg-[#E6F4F1] dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400'
        },
        {
            title: t('curriculum.comprehensiveness.subjects.languages.title', 'اللغات'),
            desc: t('curriculum.comprehensiveness.subjects.languages.desc', 'نطور مهارات القراءة والكتابة والتحدث، مع التركيز على فهم النصوص والتواصل الفعال في مختلف السياقات.'),
            icon: <FileText className="w-5 h-5 text-[#8C6D1F]" />,
            badgeStyle: 'bg-[#FFFBEB] dark:bg-amber-950/40 text-[#B45309] dark:text-amber-400'
        },
        {
            title: t('curriculum.comprehensiveness.subjects.social.title', 'الدراسات الاجتماعية'),
            desc: t('curriculum.comprehensiveness.subjects.social.desc', 'نربط بين التاريخ والجغرافيا والمواطنة، لننشئ رؤية متكاملة للعالم وتقدير للتراث والهوية.'),
            icon: <Users className="w-5 h-5 text-[#00695C]" />,
            badgeStyle: 'bg-[#E6F4F1] dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400'
        }
    ], [t])
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20" dir={isRtl ? 'rtl' : 'ltr'}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {t('curriculum.comprehensiveness.mainTitle', 'شمول المناهج الدراسية')}
                </h2>
                <div className="w-28 sm:w-36 h-1 sm:h-1.5 bg-[#8C6D1F] dark:bg-amber-500 rounded-full mx-auto mt-3" />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-7 flex flex-col gap-6"
                >
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
                        <div className="space-y-2 text-start">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00695C] dark:text-emerald-400">
                                {t('curriculum.comprehensiveness.coverage.title', 'تغطية شاملة للمناهج')}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                {t('curriculum.comprehensiveness.coverage.subtitle', 'نغطي جميع المواد الأساسية، مع التركيز على فهم الدروس والتدريبات والمراجعات، ليكون الطالب مستعداً للمتابعة والتقدم بثقة.')}
                            </p>
                        </div>
                        <div className="space-y-5 pt-2">
                            {coverageItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-start group">
                                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.badgeStyle}`}>
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1 pt-0.5">
                                        <h4 className="text-sm sm:text-base font-bold text-[#00695C] dark:text-emerald-400">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
                        <div className="space-y-2 text-start">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00695C] dark:text-emerald-400">
                                {t('curriculum.comprehensiveness.stages.title', 'تنوع المراحل الدراسية')}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                {t('curriculum.comprehensiveness.stages.subtitle', 'نغطي مختلف المراحل، مع تباين في الأسلوب والعمق حسب احتياجات كل مرحلة، من الأساس إلى المتقدم.')}
                            </p>
                        </div>
                        <div className="space-y-5 pt-2">
                            {stagesItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-start group">
                                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.badgeStyle}`}>
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1 pt-0.5">
                                        <h4 className="text-sm sm:text-base font-bold text-[#00695C] dark:text-emerald-400">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5"
                >
                    {subjectItems.map((subject, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col items-start text-start space-y-3 group hover:shadow-md transition-shadow duration-300"
                        >
                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${subject.badgeStyle}`}>
                                {subject.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#00695C] dark:text-emerald-400">
                                {subject.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                {subject.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
})
