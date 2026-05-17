import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import bgImage from '../../images/من نحن/1.png'
import mainImage from '../../images/من نحن/2.png'

export default React.memo(function AboutHero() {
    const { t } = useTranslation()

    return (
        <section className="relative w-full mb-20">
            <div className="absolute inset-0 z-0">
                <img 
                    src={bgImage} 
                    alt="Background Pattern" 
                    className="w-full h-full object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                    style={{ willChange: 'transform, opacity' }}
                    className="w-full lg:w-7/12 space-y-6 text-start"
                >
                    <div className="inline-flex items-center rounded-full bg-[#735C00] px-6 py-2.5 text-sm font-bold text-white shadow-sm mb-2">
                        {t('contact.hero.badge', 'أكاديمية تعليمية متكاملة')}
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.3] pb-2">
                        <span className="text-[#00695C] block pb-3">{t('contact.hero.title1', 'حيث يلتقي')}</span>
                        <span className="text-[#735C00] block">{t('contact.hero.title2', 'نور العلم بصفاء الروح')}</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-xl">
                        {t('contact.hero.subtitle', 'منارة العز ليست مجرد أكاديمية، بل هي رحلة في أعماق المعرفة، صُممت لتكون ملاذاً رقمياً يجمع بين أصالة التراث وحداثة التكنولوجيا.')}
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                    className="w-full lg:w-5/12 flex justify-center lg:justify-end"
                >
                    <motion.div 
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        style={{ willChange: 'transform' }}
                        className="relative w-full max-w-sm lg:max-w-md"
                    >
                        <div className="absolute inset-0 bg-[#00695C]/15 rounded-[2rem] blur-2xl transform translate-y-6 scale-95" />
                        
                        <img 
                            src={mainImage} 
                            alt="Academy" 
                            className="relative w-full h-auto rounded-[2rem] aspect-square lg:aspect-[4/3] object-cover shadow-xl transition-transform duration-700 hover:scale-[1.03]"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
})
