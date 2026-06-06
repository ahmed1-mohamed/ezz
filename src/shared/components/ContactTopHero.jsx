import React from 'react';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import mainImage from "../../images/contact/1.jpg"

export default React.memo(function ContactTopHero() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 z-10">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start space-y-6 order-2 lg:order-1`}
                >
                    <div
                        className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm">
                        {t('contact.topHero.badge', 'اترك أثراً')}
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.2] sm:leading-[1.3] text-[#005F54]">
                        {t('contact.topHero.title', 'تواصلوا معنا للاستفسار والتسجيل')}
                    </h1>

                    <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-[1.8] sm:leading-[2.2] text-slate-600">
                        {t('contact.topHero.desc', 'فريق منارة العز معكم دائماً لدعم أبنائكم تعليمياً والرد على جميع الاستفسارات و الشكاوي الخاصة بالدورات والتسجيل والمتابعة.')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2"
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
