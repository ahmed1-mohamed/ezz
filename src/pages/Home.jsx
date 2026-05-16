import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import StatisticsBanner from '../components/ui/StatisticsBanner.jsx'
import PremiumParentsSection from '../components/ui/PremiumParentsSection.jsx'
import EducationalPrograms from '../components/ui/EducationalPrograms.jsx'
import JourneySteps from '../components/ui/JourneySteps.jsx'
import TestimonialsSection from '../components/ui/TestimonialsSection.jsx'
import Button from '../components/ui/Button.jsx'
import imageSrc from '../images/برامجنا/5.jpg'
export default function Home() {
    const { t, i18n } = useTranslation()
    const containerRef = useRef(null)
    const badgeRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const buttonsRef = useRef(null)
    const imageWrapperRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.from(badgeRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6,
            })

                .from(
                    titleRef.current.children,
                    {
                        opacity: 0,
                        y: 40,
                        stagger: 0.15,
                        duration: 0.9,
                    },
                    '-=0.2'
                )

                .from(
                    descRef.current,
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.7,
                    },
                    '-=0.5'
                )

                .from(
                    buttonsRef.current.children,
                    {
                        opacity: 0,
                        y: 20,
                        stagger: 0.12,
                        duration: 0.5,
                    },
                    '-=0.4'
                )

                .from(
                    imageWrapperRef.current,
                    {
                        opacity: 0,
                        scale: 0.9,
                        x: 60,
                        rotate: 4,
                        duration: 1,
                        ease: 'power4.out',
                    },
                    '-=1'
                )

            gsap.to(imageWrapperRef.current, {
                y: -12,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div>
            <div ref={containerRef} className="space-y-8 sm:space-y-12 lg:space-y-16">
                <section
                    className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20 shadow-sm"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

                        <div className="space-y-6 sm:space-y-8 text-start">

                            <div
                                ref={badgeRef}
                                className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm"
                            >
                                {t('home.badge')}
                            </div>

                            <div
                                ref={titleRef}
                                className="space-y-2 sm:space-y-4"
                            >
                                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900">
                                    {t('home.titleLine1')}
                                </h1>

                                <h1 className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.5] py-2 text-transparent overflow-visible">
                                    {t('home.titleLine2')}
                                </h1>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900">
                                    {t('home.titleLine3')}
                                </h1>
                            </div>

                            <p
                                ref={descRef}
                                className="max-w-2xl text-base sm:text-lg lg:text-xl leading-[1.8] sm:leading-[2.2] text-slate-600"
                            >
                                {t('home.description')}
                            </p>

                            <div
                                ref={buttonsRef}
                                className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-start"
                            >
                                <Link to="/about" className="w-full sm:w-auto">
                                    <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg">
                                        {t('home.ctaSecondary')}
                                    </Button>
                                </Link>

                                <Link to="/login" className="w-full sm:w-auto">
                                    <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg">
                                        {t('home.ctaPrimary')}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">

                                <div
                                    className="absolute z-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[540px] xl:w-[540px]"
                                    style={{
                                        background: 'rgba(254, 214, 91, 0.2)',
                                        borderRadius: '199px 117px 459px 433px',
                                        transform: 'matrix(0.99, -0.11, 0.1, 1, 0, 0)',
                                    }}
                                />

                                <div
                                    ref={imageWrapperRef}
                                    className="relative z-10 overflow-hidden rounded-2xl sm:rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] w-full"
                                >
                                    <img
                                        src={imageSrc}
                                        alt="Islamic Education"
                                        loading="lazy"
                                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[520px] object-contain transition duration-700 hover:scale-105"
                                    />
                                </div>

                            </div>
                        </div>

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
}