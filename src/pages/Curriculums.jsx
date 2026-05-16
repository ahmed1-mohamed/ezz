import { Link } from 'react-router-dom'
import { useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { BookOpen, PenTool, Heart, Lightbulb, ChevronLeft, ChevronRight, GraduationCap, GraduationCapIcon, LucideGraduationCap } from 'lucide-react'
import imageSrc from '../images/برامجنا/7.png'
import CurriculumUnits from '../components/ui/CurriculumUnits.jsx'

export default function Curriculums() {
    const { t, i18n } = useTranslation()
    const containerRef = useRef(null)
    const badgeRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const imageWrapperRef = useRef(null)

    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ChevronLeft : ChevronRight



    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.from(badgeRef.current, { opacity: 0, y: -20, duration: 0.6 })
              .from(titleRef.current.children, { opacity: 0, y: 40, stagger: 0.15, duration: 0.9 }, '-=0.2')
              .from(descRef.current, { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
              .from(imageWrapperRef.current, { opacity: 0, scale: 0.9, x: 60, rotate: 4, duration: 1, ease: 'power4.out' }, '-=1')

            gsap.to(imageWrapperRef.current, { y: -12, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            <div ref={containerRef} className="pt-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto space-y-16">
                
                {/* Hero Section */}
                <section className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white p-6 sm:p-12 lg:p-16 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-start">
                        <div className="order-2 lg:order-1 max-w-3xl space-y-8 flex-1">
                            <div ref={badgeRef} className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-4 py-2 text-sm font-bold text-white shadow-sm">
                                {t('curriculum.badge', 'رحلة المعرفة')}
                            </div>

                            <div ref={titleRef} className="space-y-4">
                                <h1 className="bg-gradient-to-r from-[#00695C] to-[#004D40] bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.4] py-2 text-transparent overflow-visible">
                                    {t('curriculum.titleLine1', 'مناهج تعليمية')}
                                </h1>
                                <h1 className="bg-gradient-to-r from-[#00695C] to-[#004D40] bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.4] py-2 text-transparent overflow-visible">
                                    {t('curriculum.titleLine2', 'تنير البصيرة وتسمو بالروح')}
                                </h1>
                            </div>

                            <p ref={descRef} className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                                {t('curriculum.description', 'نقدم محتوى تعليمي متخصص مصمم بأحدث الأساليب التربوية لغرس القيم وبناء جيل متسلح بالعلم والإيمان')}
                            </p>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center flex-1">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute z-0 inset-0 -m-8 rounded-full bg-[#FEF6E0] blur-3xl mix-blend-multiply" />
                                <div ref={imageWrapperRef} className="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
                                    <img src={imageSrc} alt="Curriculums" className="w-full h-64 sm:h-80 lg:h-[400px] object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CurriculumUnits />

                {/* Call To Action Section */}
                <section className="relative overflow-hidden rounded-[32px] bg-[#FECD31] p-8 sm:p-12 lg:p-16 shadow-md flex flex-col items-start text-start mt-8">
                    <div className="relative z-10 space-y-6 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#735C00]">
                            {t('curriculum.cta.title', 'هل أنت مستعد لبدء رحلتك؟')}
                        </h2>
                        <p className="text-lg sm:text-xl text-[#997A00] font-medium">
                            {t('curriculum.cta.desc', 'انضم إلى أكثر من ٥٠٠٠ طالب يستمتعون بتجربة تعليمية فريدة.')}
                        </p>
                        <div className="pt-4">
                            <button className="bg-[#00695C] hover:bg-[#005247] text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg text-lg w-full sm:w-auto text-center">
                                {t('curriculum.cta.button', 'سجل الآن مجاناً')}
                            </button>
                        </div>
                    </div>
                    
                    {/* Decorative Icon */}
                    <div className={`absolute -bottom-16 sm:-bottom-24 ${isRtl ? 'left-0 sm:-left-4' : 'right-0 sm:-right-4'} opacity-30 pointer-events-none`}>
                        <LucideGraduationCap className="w-48 h-48 sm:w-[300px] sm:h-[300px] text-[#735C00] -rotate-2" strokeWidth={2.5} />
                    </div>
                </section>

            </div>
        </div>
    )
}