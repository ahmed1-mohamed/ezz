import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BookOpen, Award, Gem, CheckCircle2, XCircle, Package, Calendar, Clock, Tag } from 'lucide-react'
import { fetchPackagesAndFaqs } from '@/store/landingSlice'
import { currenciesApi, parseExchangeRateData } from '@/shared/services/api/currenciesApi'

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Pricing() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { packagesData, loading } = useSelector((state) => state.landing)
    const currentLang = i18n.language?.startsWith('en') ? 'en' : 'ar'
    const isRtl = currentLang === 'ar'
    const [currencyInfo, setCurrencyInfo] = useState({ symbol: '$', exchangeRate: 1 })
    useEffect(() => {
        dispatch(fetchPackagesAndFaqs(i18n.language))
    }, [dispatch, i18n.language])
    useEffect(() => {
        let isMounted = true
        const loadExchangeRate = async () => {
            try {
                const res = await currenciesApi.fetchExchangeRate()
                if (isMounted) {
                    const parsed = parseExchangeRateData(res)
                    setCurrencyInfo(parsed)
                }
            } catch (err) {
                console.warn('Could not fetch exchange rate, fallback to default USD:', err)
            }
        }
        loadExchangeRate()
        return () => {
            isMounted = false
        }
    }, [])
    const renderIcon = (icon, index) => {
        if (!icon) {
            const fallbacks = [BookOpen, Award, Gem]
            const FallbackIcon = fallbacks[index % 3]
            return <FallbackIcon className="w-10 h-10 text-[#00695C] dark:text-emerald-400" />
        }
        if (typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('data:'))) {
            const getImageUrl = (imagePath) => {
                if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
                    return imagePath
                }
                const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
                return `https://manaret-ezz.dramcode.top/${cleanPath}`
            }
            return <img src={getImageUrl(icon)} className="w-10 h-10 object-contain rounded-full shadow-sm" alt="" />
        }
        if (typeof icon === 'function' || typeof icon === 'object') {
            const IconComp = icon
            return <IconComp className="w-10 h-10 text-[#00695C] dark:text-emerald-400" />
        }
        const fallbacks = [BookOpen, Award, Gem]
        const FallbackIcon = fallbacks[index % 3]
        return <FallbackIcon className="w-10 h-10 text-[#00695C] dark:text-emerald-400" />
    }
    const displayPlans = useMemo(() => {
        const apiPackages = packagesData?.packages?.data || packagesData?.packages || []
        if (!Array.isArray(apiPackages)) return []
        const rate = Number(currencyInfo.exchangeRate) > 0 ? Number(currencyInfo.exchangeRate) : 1
        const symbol = currencyInfo.symbol || '$'
        return apiPackages.map((pkg, index) => {
            const name = typeof pkg.name === 'object' && pkg.name !== null
                ? (isRtl ? pkg.name.ar || pkg.name.en : pkg.name.en || pkg.name.ar)
                : pkg.name || ''
            const features = Array.isArray(pkg.features)
                ? pkg.features.map((f) => ({
                    text: typeof f === 'object' && f !== null ? (isRtl ? f.ar || f.en : f.en || f.ar) : String(f),
                    active: true,
                }))
                : []
            const sessionsCount = Number(
                pkg.sessionsCount ?? 
                pkg.sessions_per_month ?? 
                pkg.sessions ?? 
                pkg.lessonsCount ?? 
                pkg.lessons ?? 
                pkg.totalSessions ?? 
                0
            )
            const sessionDuration = Number(
                pkg.sessionDuration ?? 
                pkg.duration ?? 
                pkg.durationMinutes ?? 
                0
            )
            const rawBasePrice = Number(pkg.price ?? 0)
            const rawOriginalPrice = pkg.originalPrice != null 
                ? Number(pkg.originalPrice) 
                : (pkg.priceBeforeDiscount != null 
                    ? Number(pkg.priceBeforeDiscount) 
                    : (pkg.oldPrice != null ? Number(pkg.oldPrice) : null))
            const rawPriceAfterDiscount = pkg.priceAfterDiscount != null 
                ? Number(pkg.priceAfterDiscount) 
                : (pkg.discountedPrice != null ? Number(pkg.discountedPrice) : null)
            const rawDiscountPercent = pkg.discountPercentage != null 
                ? Number(pkg.discountPercentage) 
                : (pkg.discountPercent != null 
                    ? Number(pkg.discountPercent) 
                    : (pkg.discount != null && Number(pkg.discount) > 0 && Number(pkg.discount) <= 100 ? Number(pkg.discount) : null))
            let hasDiscount = false
            let usdOriginal = rawBasePrice
            let usdFinal = rawBasePrice
            let discountPercent = 0
            if (rawOriginalPrice != null && rawOriginalPrice > rawBasePrice) {
                hasDiscount = true
                usdOriginal = rawOriginalPrice
                usdFinal = rawBasePrice
                discountPercent = rawDiscountPercent || Math.round(((usdOriginal - usdFinal) / usdOriginal) * 100)
            } else if (rawPriceAfterDiscount != null && rawPriceAfterDiscount < rawBasePrice) {
                hasDiscount = true
                usdOriginal = rawBasePrice
                usdFinal = rawPriceAfterDiscount
                discountPercent = rawDiscountPercent || Math.round(((usdOriginal - usdFinal) / usdOriginal) * 100)
            } else if (rawDiscountPercent != null && rawDiscountPercent > 0 && rawDiscountPercent < 100) {
                hasDiscount = true
                usdOriginal = rawBasePrice
                discountPercent = Math.round(rawDiscountPercent)
                usdFinal = rawBasePrice * (1 - discountPercent / 100)
            } else if (pkg.hasDiscount && pkg.discountAmount) {
                hasDiscount = true
                usdOriginal = rawBasePrice
                usdFinal = Math.max(0, rawBasePrice - Number(pkg.discountAmount))
                discountPercent = Math.round(((usdOriginal - usdFinal) / usdOriginal) * 100)
            }
            const convertedFinal = usdFinal * rate
            const convertedOriginal = usdOriginal * rate
            const formatPrice = (val) => {
                if (isNaN(val)) return '0'
                const rounded = Math.round(val * 100) / 100
                return Number.isInteger(rounded)
                    ? rounded.toLocaleString()
                    : rounded.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })
            }
            return {
                id: pkg.id || pkg._id || index,
                name,
                icon: pkg.icon,
                popular: index === 1,
                features,
                sessionsCount,
                sessionDuration,
                hasDiscount,
                discountPercent,
                finalPrice: formatPrice(convertedFinal),
                originalPrice: formatPrice(convertedOriginal),
                symbol,
            }
        })
    }, [packagesData, currencyInfo, isRtl])
    const displayFaqs = useMemo(() => {
        const apiFaqs = packagesData?.faqs?.data || packagesData?.faqs || []
        if (!Array.isArray(apiFaqs)) return []
        return apiFaqs.map((faq) => {
            const q = typeof faq.question === 'object' && faq.question !== null
                ? (isRtl ? faq.question.ar || faq.question.en : faq.question.en || faq.question.ar)
                : faq.question || ''
            const a = typeof faq.answer === 'object' && faq.answer !== null
                ? (isRtl ? faq.answer.ar || faq.answer.en : faq.answer.en || faq.answer.ar)
                : faq.answer || ''
            return { q, a }
        })
    }, [packagesData, isRtl])
    return (
        <div className="min-h-screen bg-[#EEF4F2]/50 dark:bg-slate-950 py-16 sm:py-24 overflow-hidden font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00695C] dark:text-emerald-400 leading-tight">
                    {t('pricing.header.title', 'استثمر في رحلة طفلك الروحية')}
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                    {t('pricing.header.subtitle', 'خطط مرنة مصممة لتناسب احتياجات كل عائلة، مع نخبة من المعلمين المعتمدين في بيئة تعليمية آمنة وملهمة.')}
                </p>
            </motion.div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
                {loading && displayPlans.length === 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-96 rounded-[2.5rem] bg-slate-100 dark:bg-slate-800/60 animate-pulse border border-slate-200/50 dark:border-slate-800" />
                        ))}
                    </div>
                ) : displayPlans.length === 0 ? (
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 text-center max-w-xl mx-auto border border-slate-100 dark:border-slate-800 space-y-4">
                        <Package className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                            {t('pricing.noPackages', 'لا توجد باقات متاحة حالياً')}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {t('pricing.contactForCustom', 'يرجى التواصل معنا للاستفسار عن الباقات والعروض الخاصة')}
                        </p>
                        <Link
                            to={`/${currentLang}/contact`}
                            className="inline-block px-6 py-3 rounded-2xl bg-[#00695C] text-white font-bold text-sm shadow-md hover:bg-[#005247] transition-all cursor-pointer"
                        >
                            {t('public.nav.contactUs', 'تواصل معنا')}
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {displayPlans.map((plan, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                key={plan.id}
                                className={`relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full border border-slate-100 dark:border-slate-800 ${
                                    plan.popular 
                                    ? 'shadow-lg z-10 ring-2 ring-[#00695C]/30 dark:ring-emerald-500/30' 
                                    : 'shadow-sm'
                                }`}
                            >
                                <div className="bg-[#E6F0ED] dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mb-5">
                                    {renderIcon(plan.icon, index)}
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">{plan.name}</h2>
                                {plan.sessionsCount > 0 && (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F0ED] dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400 font-bold text-xs sm:text-sm mb-4">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{plan.sessionsCount} {t('pricing.sessionsPerMonth', 'حصص شهرياً')}</span>
                                        {plan.sessionDuration > 0 && (
                                            <>
                                                <span className="opacity-40">•</span>
                                                <span className="inline-flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{plan.sessionDuration} {t('pricing.minutes', 'دقيقة')}</span>
                                                </span>
                                            </>
                                        )}
                                    </div>
                                )}
                                <div className="flex flex-col items-center justify-center mb-8 w-full min-h-[80px]">
                                    {plan.hasDiscount ? (
                                        <>
                                            <div className="flex items-center justify-center gap-2 mb-1.5">
                                                <span className="text-base sm:text-lg font-bold text-slate-400 dark:text-slate-500 line-through">
                                                    {plan.originalPrice} {plan.symbol}
                                                </span>
                                                <span className="inline-flex items-center gap-1 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 text-xs font-black px-2.5 py-0.5 rounded-full">
                                                    <Tag className="w-3 h-3" />
                                                    <span>{t('pricing.discountBadge', 'خصم')} {plan.discountPercent}%</span>
                                                </span>
                                            </div>
                                            <div className="flex items-baseline justify-center gap-1.5 flex-wrap">
                                                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00695C] dark:text-emerald-400">
                                                    {plan.finalPrice}
                                                </span>
                                                <span className="text-xl sm:text-2xl font-black text-[#00695C] dark:text-emerald-400">
                                                    {plan.symbol}
                                                </span>
                                                <span className="text-slate-500 dark:text-slate-400 font-medium text-base">
                                                    {t('pricing.monthly', '/شهرياً')}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex items-baseline justify-center gap-1.5 flex-wrap">
                                            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00695C] dark:text-emerald-400">
                                                {plan.finalPrice}
                                            </span>
                                            <span className="text-xl sm:text-2xl font-black text-[#00695C] dark:text-emerald-400">
                                                {plan.symbol}
                                            </span>
                                            <span className="text-slate-500 dark:text-slate-400 font-medium text-base">
                                                {t('pricing.monthly', '/شهرياً')}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <ul className="space-y-4 w-full mb-10 flex-1 text-start px-2">
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            {feat.active ? (
                                                <CheckCircle2 className="w-5 h-5 text-[#00695C] dark:text-emerald-400 shrink-0" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0" />
                                            )}
                                            <span className={`text-sm sm:text-base font-medium ${feat.active ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-500 line-through'}`}>
                                                {feat.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link 
                                    to="/register"
                                    aria-label={`${t('pricing.btn', 'ابدأ الآن')} - ${plan.name}`}
                                    className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white transition-all shadow-md active:scale-95 cursor-pointer text-center"
                                >
                                    {t('pricing.btn', 'ابدأ الآن')}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
            {displayFaqs.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 mb-10 w-full">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-extrabold text-[#00695C] dark:text-emerald-400 text-center mb-12"
                    >
                        {t('pricing.faq.title', 'الأسئلة الشائعة')}
                    </motion.h2>
                    <div className="space-y-4">
                        {displayFaqs.map((faq, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                key={idx} 
                                className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">{faq.q}</h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-base sm:text-lg leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
