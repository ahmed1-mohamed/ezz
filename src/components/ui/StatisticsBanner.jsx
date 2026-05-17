import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView, animate } from 'framer-motion'

const Counter = ({ target, locale }) => {
    const nodeRef = useRef()
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" })

    useEffect(() => {
        const node = nodeRef.current
        if (!node || !isInView) return

        const controls = animate(0, target, {
            duration: 2,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = Math.floor(value).toLocaleString(locale)
            },
        })

        return () => controls.stop()
    }, [target, locale, isInView])

    return <h2 ref={nodeRef} className="stat-number text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#D3A900] leading-none">0</h2>
}

export default React.memo(function StatisticsBanner() {
    const { t, i18n } = useTranslation()
    const locale = i18n.language === 'ar' ? 'ar-EG' : 'en-US'

    const statistics = [
        { number: 1250, label: t('statistics.students') },
        { number: 85, label: t('statistics.teachers') },
        { number: 320, label: t('statistics.classes') },
    ]

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full min-h-[100px] sm:min-h-[132px] lg:min-h-[180px] bg-gradient-to-r from-brand-500 to-brand-700 relative overflow-hidden"
        >
            <div className="relative z-10 h-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-8xl w-full mx-auto">
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                            className="flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-3"
                        >
                            <div className="relative">
                                <Counter target={stat.number} locale={locale} />
                            </div>
                            <p className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium leading-tight max-w-xs px-1 sm:px-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
})