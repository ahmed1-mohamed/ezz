import React from 'react';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import bgImage from '../../images/about/1.png'
import mainImage from '../../images/about/2.png'

export default React.memo(function AboutHero() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    return (
        <section className="relative min-h-[600px] sm:min-h-[700px] py-24 lg:py-0 flex items-center mb-20 w-full overflow-hidden rounded-xl sm:rounded-[20px] shadow-sm">
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Background Pattern"
                    className="w-full h-full object-cover object-center opacity-30"
                    loading="lazy"
                />
                <div className="absolute inset-0 " />
                <div className={`absolute inset-0 bg-gradient-to-${isRtl ? 'l' : 'r'} from-white/95 via-white/80 to-transparent`} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full lg:w-1/2 space-y-8 flex  flex-col items-center lg:items-start text-center lg:text-start"
                >
                    <div className="inline-flex items-center rounded-full bg-[#735C00] px-6 py-2.5 text-sm font-bold text-white shadow-sm mb-2">
                        {t('about.hero.badge', 'أكاديمية تعليمية متكاملة')}
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.3] pb-2">
                        <span className="text-[#00695C] block pb-3">{t('about.hero.title1', 'حيث يلتقي')}</span>
                        <span className="text-[#735C00] block">{t('about.hero.title2', 'نور العلم بصفاء الروح')}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-xl">
                        {t('about.hero.subtitle', 'منارة العز ليست مجرد أكاديمية، بل هي رحلة في أعماق المعرفة، صُممت لتكون ملاذاً رقمياً يجمع بين أصالة التراث وحداثة التكنولوجيا.')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#00695C]/20 to-[#735C00]/20 blur-3xl rounded-full opacity-70 mix-blend-multiply" />

                        <motion.div
                            animate={{ rotate: [0, 3, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-2xl transform translate-y-5 -translate-x-5 scale-[1.03] backdrop-blur-sm border border-white/20"
                        />
                        <motion.div
                            animate={{ rotate: [0, -3, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute inset-0  rounded-2xl transform -translate-y-4 translate-x-4 scale-[1.03] backdrop-blur-sm border border-white/20"
                        />

                        <div className="relative group p-2.5  rounded-2xl shadow-2xl">
                            <div className="relative overflow-hidden rounded-xl bg-slate-100">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    src={mainImage}
                                    alt="Academy"
                                    className="w-full h-auto aspect-[4/5] lg:aspect-[6/7] object-cover relative z-10"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00695C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                            </div>
                        </div>



                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
})

