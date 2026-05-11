import { useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

export default function StatisticsBanner() {
    const { i18n } = useTranslation()
    const bannerRef = useRef(null)
    const statsRef = useRef([])

    const statistics = useMemo(() => [
        { number: 1250, label: 'طالب وطالبة' },
        { number: 85, label: 'معلم ومعلمة معتمدين' },
        { number: 320, label: 'حلقة تعليمية ناجحة' },
    ], [])

    useEffect(() => {
        if (!bannerRef.current) return

        const ctx = gsap.context(() => {

            gsap.from(bannerRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from(statsRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.3,
            })

            statsRef.current.forEach((statEl, index) => {
                if (!statEl) return

                const numberElement = statEl.querySelector('.stat-number')
                const targetNumber = statistics[index]?.number || 0

                const obj = { count: 0 }

                gsap.to(obj, {
                    count: targetNumber,
                    duration: 2,
                    ease: 'power2.out',
                    delay: 0.8 + index * 0.2,
                    onUpdate: () => {
                        if (numberElement) {
                            numberElement.textContent = Math.floor(obj.count).toLocaleString('ar-EG')
                        }
                    },
                })
            })

        }, bannerRef)

        return () => ctx.revert()
    }, [statistics, i18n.dir])

    return (
        <section
            ref={bannerRef}
            dir={i18n.dir()}
            className="w-full h-[232px] bg-gradient-to-r from-[#0F7A6C] to-[#005F54] relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
            </div>

            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl w-full">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            ref={(el) => (statsRef.current[index] = el)}
                            className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FFD700] blur-xl opacity-30 rounded-full scale-150" />
                                <h2 className="stat-number relative text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FFD700] leading-none drop-shadow-lg">
                                    0
                                </h2>
                            </div>

                            <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-medium leading-tight max-w-xs px-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full" />
            <div className="absolute bottom-6 left-12 w-3 h-3 bg-white/10 rounded-full" />
            <div className="absolute bottom-4 right-6 w-2 h-2 bg-white/20 rounded-full" />
        </section>
    )
}