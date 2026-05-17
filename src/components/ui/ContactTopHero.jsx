import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

 import placeholderImg from "../../images/contact/1.jpg"

export default React.memo(function ContactTopHero() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                 <motion.div
                    initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`w-full lg:w-1/2 flex flex-col ${isRtl ? 'lg:items-start text-right' : 'lg:items-start text-left'} items-center  space-y-6 order-2 lg:order-1`}
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
                    initial={{ opacity: 0, scale: 0.9, x: isRtl ? 50 : -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="w-full lg:w-1/2 relative flex justify-center lg:justify-start order-1 lg:order-2"
                >
                    <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 bg-[#00695C]/20 mix-blend-multiply z-10 rounded-[2rem] sm:rounded-[3rem]"></div>
                        <img
                            src={placeholderImg}
                            alt="Contact Us"
                            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
                        />
                    </div>
                     <div className={`absolute -bottom-6 ${isRtl ? '-right-6' : '-left-6'} w-32 h-32 bg-[#FECD31]/30 rounded-full blur-2xl -z-10`}></div>
                    <div className={`absolute -top-6 ${isRtl ? '-left-6' : '-right-6'} w-40 h-40 bg-[#00695C]/10 rounded-full blur-3xl -z-10`}></div>
                </motion.div>

            </div>
        </section>
    )
})
