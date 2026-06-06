import React from 'react';
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, Heart, Globe } from 'lucide-react'
import quranImage from '@/images/about/2.png'

export default React.memo(function AboutCoreValues() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    const values = useMemo(() => [
        {
            title: t('about.values.v1.title', 'الأمانة العلمية'),
            desc: t('about.values.v1.desc', 'نقل العلم بسند متصل ومنهجية رصينة تحفظ الأصالة.'),
            icon: <Check className="w-5 h-5 text-slate-700" />,
            delay: 0.1
        },
        {
            title: t('about.values.v2.title', 'الرفق واللين'),
            desc: t('about.values.v2.desc', 'التعليم بالحب والتشجيع وفق المنهج النبوي الكريم.'),
            icon: <Heart className="w-5 h-5 text-slate-700" />,
            delay: 0.2
        },
        {
            title: t('about.values.v3.title', 'التيسير والشمول'),
            desc: t('about.values.v3.desc', 'جعل العلم متاحاً للجميع مهما كانت المسافات والظروف.'),
            icon: <Globe className="w-5 h-5 text-slate-700" />,
            delay: 0.3
        }
    ], [t])

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 order-2 lg:order-1"
                >
                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg">
                        <img
                            src={quranImage}
                            alt="Core Values"
                            className="w-full h-auto aspect-square object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00695C] text-start">
                        {t('about.values.mainTitle', 'قيمنا الجوهرية')}
                    </h2>

                    <div className="space-y-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.4 }}
                                className="flex items-start gap-5 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#E5ECEB] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#D1E0DD]">
                                    {item.icon}
                                </div>
                                <div className="space-y-2 text-start pt-1">
                                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#00695C] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">
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

