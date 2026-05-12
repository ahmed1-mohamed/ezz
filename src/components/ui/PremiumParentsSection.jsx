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
                y: 32,
                stagger: 0.16,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2,
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section
            dir={i18n.dir()}
            className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-[#D4AF37]/20 bg-white/95 px-4 py-8 shadow-[0_20px_40px_rgba(15,122,108,0.08)] dark:border-[#D4AF37]/15 dark:bg-slate-950/85 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-10 xl:py-20"
        >

            <div className="relative z-10 mx-auto flex max-w-8xl flex-col gap-8 sm:gap-12">
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

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">                    {cards.map(({ title, description, Icon }, index) => (
                    <article
                        key={title}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="group relative flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                    >
                        <div className="mb-2 flex items-center justify-between">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#0F7A6C]/20 to-[#005F54]/10 shadow-lg">
                                <Icon
                                    size={28}
                                    className="text-[#0F7A6C] group-hover:text-[#005F54] transition-colors duration-300"
                                    aria-hidden="true"
                                />
                            </div>

                        </div>

                        <div className="flex flex-1 flex-col">
                            <h3 className="min-h-[32px] text-2xl font-extrabold leading-relaxed text-[#0F172A]">
                                {title}
                            </h3>

                            <p className="mt-2 flex-1 text-base leading-[2] text-[#334155]">
                                {description}
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />                        </article>
                ))}
                </div>

            </div>
        </section>
    )
}
