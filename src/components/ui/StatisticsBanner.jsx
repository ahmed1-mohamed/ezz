import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

export default function StatisticsBanner() {
    const { t } = useTranslation()
    const bannerRef = useRef(null)
    const statsRef = useRef([])

    const statistics = [
        { number: 1250, label: t('statistics.students') },
        { number: 85, label: t('statistics.teachers') },
        { number: 320, label: t('statistics.classes') },
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
                            numberElement.textContent = Math.floor(obj.count).toLocaleString('en-EG')
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
            className="w-full min-h-[100px] sm:min-h-[132px] lg:min-h-[180px] bg-gradient-to-r from-brand-500 to-brand-700 relative overflow-hidden"
        >

            <div className="relative z-10 h-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-8xl w-full mx-auto">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            ref={(el) => (statsRef.current[index] = el)}
                            className="flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-3"
                        >
                            <div className="relative">
                                <h2 className="stat-number text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#D3A900] leading-none">
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
        </section >
    )
}