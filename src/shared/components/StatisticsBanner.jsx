import React from 'react';
import { useEffect, useRef } from 'react'
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
        { number: 1250, label: t('statistics.students', 'طالب مسجل') },
        { number: 85, label: t('statistics.teachers', 'معلم معتمد') },
        { number: 320, label: t('statistics.classes', 'حصة تعليمية') },
    ]

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-8xl mx-auto">
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full min-h-[100px] sm:min-h-[132px] lg:min-h-[180px] bg-gradient-to-r from-[#0F7A6C] to-[#0B5C51] relative overflow-hidden rounded-[2rem] shadow-[0_20px_40px_rgba(15,122,108,0.2)] border border-[#17B89C]/20"
            >
                <div className="absolute top-0 start-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 end-0 w-[200px] h-[200px] bg-[#D4AF37]/20 rounded-full blur-[60px] translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay pointer-events-none" />

                <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-8xl w-full mx-auto divide-y sm:divide-y-0 sm:divide-x rtl:divide-x-reverse divide-white/10">
                        {statistics.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                className="flex flex-col items-center justify-center text-center space-y-2 pt-6 sm:pt-0 first:pt-0"
                            >
                                <div className="relative mb-1 drop-shadow-md">
                                    <Counter target={stat.number} locale={locale} />
                                </div>
                                <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium tracking-wide">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    )
})