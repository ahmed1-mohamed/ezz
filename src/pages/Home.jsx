import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import StatisticsBanner from '../components/ui/StatisticsBanner.jsx'

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
        <div ref={containerRef} className="space-y-8 sm:space-y-12 lg:space-y-16">
            <section
                dir={i18n.dir()}
                className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20 shadow-sm"
            >
                <div className={`grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>

                    <div className={`order-2 space-y-6 sm:space-y-8 ${i18n.language === 'ar' ? 'text-right lg:order-1' : 'text-left lg:order-1'}`}>

                        <div
                            ref={badgeRef}
                            className="inline-flex items-center rounded-full border border-[#735C00] bg-[#735C00] px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm"
                        >
                            {t('home.badge')}
                        </div>

                        <div
                            ref={titleRef}
                            className="space-y-2 sm:space-y-4"
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] sm:leading-[1.3] text-slate-900">
                                {t('home.titleLine1')}
                            </h1>

                            <h1 className="bg-gradient-to-r from-[#0F7A6C] to-[#005F54] bg-clip-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] sm:leading-[1.3] text-transparent">
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
                            className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 ${i18n.language === 'ar' ? 'justify-start' : 'justify-start'}`}
                        >
                            <Link to="/about">
                                <button className="w-full sm:w-auto rounded-2xl border border-[#0F7A6C] bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-[#0F7A6C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F7A6C]/5 hover:shadow-lg">
                                    {t('home.ctaSecondary')}
                                </button>
                            </Link>

                            <Link to="/login">
                                <button className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-[#0F7A6C] to-[#005F54] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    {t('home.ctaPrimary')}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 flex justify-center lg:order-2">
                        <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">

                            <div
                                className="absolute z-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[540px] xl:w-[540px]"
                                style={{
                                    background: 'rgba(254, 214, 91, 0.2)',
                                    borderRadius: '199px 117px 459px 433px',
                                    transform: 'matrix(0.99, -0.11, 0.1, 1, 0, 0)',
                                }}
                            />

                            <div className="absolute -left-5 -top-5 sm:-left-8 sm:-top-8 lg:-left-10 lg:-top-10 z-0 h-20 w-20 sm:h-32 sm:w-32 lg:h-44 lg:w-44 rounded-full bg-[#0F7A6C]/10 blur-3xl" />
                            <div className="absolute -bottom-5 -right-5 sm:-bottom-8 sm:-right-8 lg:-bottom-10 lg:-right-10 z-0 h-20 w-20 sm:h-32 sm:w-32 lg:h-44 lg:w-44 rounded-full bg-[#005F54]/10 blur-3xl" />

                            <div
                                ref={imageWrapperRef}
                                className="relative z-10 overflow-hidden rounded-2xl sm:rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] w-full"
                            >
                                <img
                                    src="/src/images/منارة العز.jpg"
                                    alt="Islamic Education"
                                    loading="lazy"
                                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[520px] object-contain transition duration-700 hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Statistics Banner */}
            <StatisticsBanner />
        </div>
    )
}