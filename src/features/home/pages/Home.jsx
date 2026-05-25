import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import StatisticsBanner from '../../../components/ui/StatisticsBanner.jsx'
import PremiumParentsSection from '../../../components/ui/PremiumParentsSection.jsx'
import EducationalPrograms from '../../../components/ui/EducationalPrograms.jsx'
import JourneySteps from '../../../components/ui/JourneySteps.jsx'
import TestimonialsSection from '../../../components/ui/TestimonialsSection.jsx'
import Button from '../../../components/ui/Button.jsx'
import imageSrc from '../../../images/برامجنا/5.jpg'

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

export default React.memo(function Home() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    return (
        <div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                <section className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className={`space-y-6 sm:space-y-8 w-full lg:w-1/2 flex flex-col ${isRtl ? 'lg:items-start text-end' : 'lg:items-start text-start'} items-center text-center lg:text-start`}
                        >

                            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm">
                                {t('home.badge')}
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900">
                                    {t('home.titleLine1')}
                                </h1>
                                <h1 className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.5] py-2 text-transparent overflow-visible">
                                    {t('home.titleLine2')}
                                </h1>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900">
                                    {t('home.titleLine3')}
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="max-w-2xl text-base sm:text-lg lg:text-xl leading-[1.8] sm:leading-[2.2] text-slate-600">
                                {t('home.description')}
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start w-full">
                                <Link to="/about" className="w-full sm:w-auto">
                                    <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg hover:scale-105 transition-transform">
                                        {t('home.ctaSecondary')}
                                    </Button>
                                </Link>

                                <Link to="/login" className="w-full sm:w-auto">
                                    <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg hover:scale-105 transition-transform">
                                        {t('home.ctaPrimary')}
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, x: isRtl ? 40 : -40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="w-full lg:w-1/2 flex justify-center"
                        >
                            <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">

                                <div
                                    className="absolute z-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[540px] xl:w-[540px]"
                                    style={{
                                        background: 'rgba(254, 214, 91, 0.2)',
                                        borderRadius: '199px 117px 459px 433px',
                                        transform: 'matrix(0.99, -0.11, 0.1, 1, 0, 0)',
                                    }}
                                />

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="relative z-10 overflow-hidden rounded-2xl sm:rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] w-full"
                                >
                                    <img
                                        src={imageSrc}
                                        alt="Islamic Education"
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="async"
                                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[520px] object-contain transition-transform duration-700 hover:scale-105 will-change-transform"
                                    />
                                </motion.div>

                            </div>
                        </motion.div>

                    </div>
                </section>

            </div>
            <StatisticsBanner />
            <PremiumParentsSection />
            <EducationalPrograms />
            <JourneySteps />
            <TestimonialsSection />
        </div>
    )
})