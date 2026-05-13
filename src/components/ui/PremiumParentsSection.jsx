import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ShieldCheck, BookOpen, Video } from 'lucide-react'

const cards = [
    {
        title: 'متابعة دقيقة',
        description:
            'لوحة تحكم شاملة لأولياء الأمور توفر رؤية كاملة عن مستوى الطالب والتقدم في الحفظ والدروس لحظة بلحظة.',
        Icon: ShieldCheck,
    },
    {
        title: 'معلمون معتمدون',
        description:
            'نخبة من المعلمين المتميزين الحاصلين على إجازات عالية في القرآن وشهادات مؤهلة في التربية والتعليم.',
        Icon: BookOpen,
    },
    {
        title: 'حصص مباشرة',
        description:
            'جلسات تفاعلية حية مباشرة تضمن التركيز والمتابعة المستمرة بين المعلم والطالب بأحدث التقنيات.',
        Icon: Video,
    },
]

export default function PremiumParentsSection() {
    const { i18n } = useTranslation()
    const titleRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 24,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 60,
                scale: 0.92,
                stagger: 0.18,
                duration: 1,
                ease: 'power4.out',
                delay: 0.25,
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section
            dir={i18n.dir()}
            className="relative  rounded-2xl sm:rounded-[2.5rem] border border-[#D4AF37]/2 px-4 py-8 shadow-[0_20px_40px_rgba(15,122,108,0.08)]  sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-10 xl:py-20"
        >

            <div className=" z-50 mx-auto flex max-w-8xl flex-col gap-8 sm:gap-12">
                <div ref={titleRef} className="max-w-3xl mx-auto w-full text-center">

                    <div className="mt-1 sm:mt-6 text-2xl flex flex-col items-center justify-center gap-2 sm:gap-3">
                        <span className={i18n.language === 'ar' ? 'text-right' : 'text-left'}>
                            لماذا يختارنا الأهالى ؟
                        </span>
                        <span className="mt-2 sm:mt-2 inline-block h-0.5 w-16 sm:w-24 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F0D374] to-[#D4AF37]" />
                    </div>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-slate-600 dark:text-slate-300">
                        نقدم تجربة متكاملة بخدمات مدرسية ذكية واحترافية لمتابعة العملية التعليمية بكل وضوح وشفافية.
                    </p>
                </div>

                <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">                                       {cards.map(({ title, description, Icon }, index) => (
                    <article
                        key={title}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#0F7A6C]/30 hover:shadow-[0_30px_80px_rgba(15,122,108,0.12)]"
                    >
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0F7A6C]/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                        <div className="relative z-10 mb-7">
                            <div className="flex h-20 w-20 items-center justify-center rounded-[1.8rem] bg-[#F5FAF9] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0F7A6C]">
                                <Icon
                                    size={34}
                                    className="text-[#0F7A6C] transition-all duration-500 group-hover:text-white"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-1 flex-col">
                            <h3 className="min-h-[72px] text-2xl font-extrabold leading-[1.7] text-[#0F172A]">
                                {title}
                            </h3>

                            <p className="mt-4 flex-1 text-[15px] leading-[2.1] text-slate-600">
                                {description}
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />

                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0F7A6C]/5 blur-3xl transition-all duration-500 group-hover:bg-[#0F7A6C]/10" />
                    </article>
                ))}
                </div>

            </div>
        </section>
    )
}
