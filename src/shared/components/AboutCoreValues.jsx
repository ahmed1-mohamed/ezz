import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, Heart, Globe } from 'lucide-react'
import coreValuesImage from '@/images/about/core-values.webp'

export default React.memo(function AboutCoreValues() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n?.language?.startsWith('ar') ?? true
    const values = useMemo(() => [
        {
            title: t('curriculum.coreValues.v1.title', t('about.values.v1.title', 'الأمانة العلمية')),
            desc: t('curriculum.coreValues.v1.desc', 'نحرص على دقّة ما نعلّمه، ونقدّم المعرفة بأسلوب واضح يناسب مستوى كل طالب.'),
            icon: <Check className="w-5 h-5 text-[#00695C] dark:text-emerald-400" />,
            delay: 0.1
        },
        {
            title: t('curriculum.coreValues.v2.title', t('about.values.v2.title', 'الرفق والتشجيع')),
            desc: t('curriculum.coreValues.v2.desc', 'نُعلّم بصبر ورفق، ونشجّع طلابنا على السؤال والمحاولة حتى يتعلّموا بثقة.'),
            icon: <Heart className="w-5 h-5 text-[#00695C] dark:text-emerald-400" />,
            delay: 0.2
        },
        {
            title: t('curriculum.coreValues.v3.title', t('about.values.v3.title', 'المرونة وإتاحة التعلّم')),
            desc: t('curriculum.coreValues.v3.desc', 'نقدّم دروسًا عبر الإنترنت بمواعيد مرنة، ونراعي اختلاف مستويات طلابنا واحتياجاتهم.'),
            icon: <Globe className="w-5 h-5 text-[#00695C] dark:text-emerald-400" />,
            delay: 0.3
        }
    ], [t])
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`w-full lg:w-1/2 ${isRtl ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                        <img
                            src={coreValuesImage}
                            alt={t('curriculum.coreValues.title', 'قيمنا الجوهرية')}
                            width="696"
                            height="720"
                            className="w-full h-auto aspect-square object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`w-full lg:w-1/2 ${isRtl ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} space-y-10`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00695C] dark:text-emerald-400 text-start">
                        {t('curriculum.coreValues.title', t('about.values.mainTitle', 'قيمنا الجوهرية'))}
                    </h2>
                    <div className="space-y-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.4 }}
                                className="flex items-start gap-5 group text-start"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#D5E4E1] dark:bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#C2D8D4] dark:group-hover:bg-slate-700">
                                    {item.icon}
                                </div>
                                <div className="space-y-1.5 text-start pt-1">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00695C] dark:group-hover:text-emerald-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-sm sm:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
})
