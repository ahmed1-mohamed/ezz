import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

export default function StatisticsBanner() {
    const { i18n } = useTranslation()
    const bannerRef = useRef(null)
    const statsRef = useRef([])

    const statistics = [
        { number: 1250, label: 'طالب وطالبة' },
        { number: 85, label: 'معلم ومعلمة معتمدين' },
        { number: 320, label: 'حلقة تعليمية ناجحة' },
    ]

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
    }, [statistics])

    return (
        <section
            ref={bannerRef}
            dir={i18n.dir()}
            className="w-full min-h-[100px] sm:min-h-[132px] lg:min-h-[180px] bg-gradient-to-r from-brand-500 to-brand-700 relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
            </div>

            <div className="relative z-10 h-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-8xl w-full mx-auto">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            ref={(el) => (statsRef.current[index] = el)}
                            className="flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-3"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gold-light blur-xl opacity-30 rounded-full scale-150" />
                                <h2 className="stat-number relative text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#D3A900] leading-none drop-shadow-lg">
                                    0
                                </h2>
                            </div>

                            <p className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium leading-tight max-w-xs px-1 sm:px-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full" />
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full" />
            <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-white/10 rounded-full" />
            <div className="absolute bottom-2 sm:bottom-4 right-3 sm:right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full" />
        </section >
    )
}