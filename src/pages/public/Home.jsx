import { memo, useEffect, useState, lazy, Suspense, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import SEOHead from '@/shared/components/SEOHead.jsx'
import Button from '@/shared/components/Button.jsx'
import imageSrc from '../../images/programs/NewLogo.webp'
import { fetchLandingPage } from '@/store/landingSlice'

const StatisticsBanner = lazy(() => import('@/shared/components/StatisticsBanner.jsx'))
const PremiumParentsSection = lazy(() => import('@/shared/components/PremiumParentsSection.jsx'))
const EducationalPrograms = lazy(() => import('@/shared/components/EducationalPrograms.jsx'))
const JourneySteps = lazy(() => import('@/shared/components/JourneySteps.jsx'))
const TestimonialsSection = lazy(() => import('@/shared/components/TestimonialsSection.jsx'))
const TeachersSection = lazy(() => import('@/shared/components/MainTeachers.jsx'))
const CTASection = lazy(() => import('@/shared/components/CTASection.jsx'))
const StarsSection = lazy(() => import('@/shared/components/StarsSection.jsx'))

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const heroImageAnimation = {
    animate: { y: [0, -12, 0] },
    transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
}

function readLocalStorage() {
    let stats = null, stars = null, testimonials = null
    try { stats = JSON.parse(localStorage.getItem('website_stats')) } catch (_) { }
    try { stars = JSON.parse(localStorage.getItem('website_stars')) } catch (_) { }
    try { testimonials = JSON.parse(localStorage.getItem('website_testimonials')) } catch (_) { }
    return { stats, stars, testimonials }
}

const SectionSkeleton = () => <div className="h-40 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />

export default memo(function Home() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    const dispatch = useDispatch()
    const { landingData } = useSelector((state) => state.landing)

    const [localData, setLocalData] = useState({ stats: null, stars: null, testimonials: null })

    const loadLanding = useCallback(() => {
        dispatch(fetchLandingPage(i18n.language))
    }, [dispatch, i18n.language])

    useEffect(() => {
        loadLanding()
        setLocalData(readLocalStorage())
    }, [loadLanding])

    const heroInitial = { opacity: 0, scale: 0.92, x: isRtl ? 30 : -30 }
    const heroAnimate = { opacity: 1, scale: 1, x: 0 }
    const heroTransition = { duration: 0.7, ease: 'easeOut', delay: 0.2 }

    return (
        <main>
            <SEOHead 
                title={isRtl ? 'الرئيسية' : 'Home'} 
                description={isRtl ? 'منصة منارة العز التعليمية لإدارة وتسهيل تعليم القرآن الكريم واللغة العربية والمواد الإسلامية للطلاب وأولياء الأمور.' : 'Manarat Al-Ezz educational platform for teaching the Holy Quran, Arabic language, and Islamic studies to students and parents.'}
            />
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                <section id="hero-section" className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6 sm:space-y-8 w-full lg:w-1/2 flex flex-col lg:items-start items-center text-center lg:text-start"
                        >

                            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm">
                                {t('home.badge', 'أكاديمية تعليمية متكاملة')}
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900">
                                    <span className="block">{t('home.titleLine1', 'حيث يلتقي')}</span>
                                    <span className="block bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.5] py-2 text-transparent overflow-visible">
                                        {t('home.titleLine2', 'نور العلم بصفاء الروح')}
                                    </span>
                                    <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900 mt-2">
                                        {t('home.titleLine3', 'وتتحقق طموحاتك')}
                                    </span>
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="max-w-2xl text-base sm:text-lg lg:text-xl leading-[1.8] sm:leading-[2.2] text-slate-600">
                                {t('home.description', 'منارة العز ليست مجرد أكاديمية، بل هي رحلة في أعماق المعرفة.')}
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start w-full">
                                <Link to="/about" className="w-full sm:w-auto">
                                    <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg hover:scale-105 transition-transform">
                                        {t('home.ctaSecondary', 'تعرف علينا')}
                                    </Button>
                                </Link>

                                <Link to="/login" className="w-full sm:w-auto">
                                    <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg hover:scale-105 transition-transform">
                                        {t('home.ctaPrimary', 'انضم الآن')}
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={heroInitial}
                            animate={heroAnimate}
                            transition={heroTransition}
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
                                    aria-hidden="true"
                                />

                                <motion.div
                                    animate={heroImageAnimation.animate}
                                    transition={heroImageAnimation.transition}
                                    className="relative z-10 overflow-hidden rounded-2xl sm:rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] w-full"
                                >
                                    <img
                                        src={imageSrc}
                                        alt={t('home.logoAlt', 'أكاديمية منارة العز')}
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="async"
                                        width="512"
                                        height="512"
                                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[520px] object-contain"
                                    />
                                </motion.div>

                            </div>
                        </motion.div>

                    </div>
                </section>
            </div>

            <Suspense fallback={<SectionSkeleton />}>
                <StatisticsBanner data={localData.stats || landingData?.statistics} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <PremiumParentsSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <EducationalPrograms />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <StarsSection featuredStudents={localData.stars || landingData?.featuredStudents} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <JourneySteps />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <TeachersSection eliteTeachers={landingData?.eliteTeachers} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <TestimonialsSection testimonials={localData.testimonials || landingData?.testimonials} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <CTASection />
            </Suspense>
        </main>
    )
})