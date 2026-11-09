import { useState, useEffect, useMemo, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Lock, User, ArrowRight, ArrowLeft, Eye, EyeOff, Search, ChevronDown, Check, Loader2, Sun, Moon } from 'lucide-react'
import logoImg from '@/images/programs/NewLogo.webp'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.jsx'
import { sortCountries, getCountryName, fetchCountries, searchCountriesBackend } from '@/shared/utils/countryUtils'
import { canShowErrorInToaster } from '@/shared/utils/errorHandler.js'
import { motion, AnimatePresence } from 'framer-motion'

export default function Register() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft
    const navigate = useNavigate()
    const { signup, loading, theme, toggleTheme } = useAuth()
    const isDarkMode = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phoneLocal: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [countriesList, setCountriesList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false)
    const [countrySearch, setCountrySearch] = useState('')
    const [backendCountries, setBackendCountries] = useState(null)
    const [isSearchingCountry, setIsSearchingCountry] = useState(false)
    const [loadingCountries, setLoadingCountries] = useState(false)
    const dropdownRef = useRef(null)
    useEffect(() => {
        let isMounted = true
        const fetchCountriesData = async () => {
            setLoadingCountries(true)
            try {
                const list = await fetchCountries({ sort: 'name' })
                if (isMounted && list.length > 0) {
                    const sorted = sortCountries(list, isRtl)
                    setCountriesList(sorted)
                    setSelectedCountry((prev) => {
                        if (!prev) return sorted[0]
                        const targetId = prev.id || prev._id
                        const matched = sorted.find(c => (c.id === targetId || c._id === targetId || c.dialCode === (prev.dialCode || prev.phoneCode)))
                        return matched || sorted[0]
                    })
                }
            } catch (err) {
                console.error('Failed to load countries:', err)
            } finally {
                if (isMounted) setLoadingCountries(false)
            }
        }
        fetchCountriesData()
        return () => {
            isMounted = false
        }
    }, [i18n.language, isRtl])
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setCountryDropdownOpen(false)
            }
        }
        if (countryDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [countryDropdownOpen])
    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast(prev => ({ ...prev, show: false }))
            }, 4500)
            return () => clearTimeout(timer)
        }
    }, [toast.show])
    const [prevCountrySearch, setPrevCountrySearch] = useState(countrySearch)
    if (prevCountrySearch !== countrySearch) {
        setPrevCountrySearch(countrySearch)
        if (!countrySearch.trim()) {
            setBackendCountries(null)
            setIsSearchingCountry(false)
        }
    }
    useEffect(() => {
        const trimmed = countrySearch.trim()
        if (!trimmed) return
        let active = true
        const timer = setTimeout(async () => {
            setIsSearchingCountry(true)
            try {
                const list = await searchCountriesBackend(trimmed)
                if (active) setBackendCountries(list)
            } catch (err) {
                console.warn('Backend country search failed:', err)
                if (active) setBackendCountries([])
            } finally {
                if (active) setIsSearchingCountry(false)
            }
        }, 300)
        return () => {
            active = false
            clearTimeout(timer)
        }
    }, [countrySearch])
    const filteredCountries = useMemo(() => {
        const list = backendCountries !== null ? backendCountries : countriesList
        return sortCountries(list, isRtl)
    }, [backendCountries, countriesList, isRtl])
    const validate = () => {
        const nextErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formValues.name.trim()) {
            nextErrors.name = t('register.nameRequired', 'الاسم الكامل مطلوب.')
        } else if (formValues.name.trim().length < 2) {
            nextErrors.name = t('register.nameMinLength', 'الاسم يجب أن يحتوي على حرفين على الأقل.')
        }
        if (!formValues.email.trim()) {
            nextErrors.email = t('register.emailRequired', 'البريد الإلكتروني مطلوب.')
        } else if (!emailRegex.test(formValues.email.trim())) {
            nextErrors.email = t('register.validEmail', 'يرجى إدخال بريد إلكتروني صالح.')
        }
        if (!selectedCountry?.id && !selectedCountry?._id) {
            nextErrors.country = t('register.countryRequired', 'يرجى اختيار الدولة.')
        }
        const phoneDigits = formValues.phoneLocal.trim().replace(/\D/g, '')
        if (!phoneDigits) {
            nextErrors.phone = t('register.phoneRequired', 'رقم الهاتف مطلوب.')
        } else if (phoneDigits.length < 6) {
            nextErrors.phone = t('register.validPhone', 'يرجى إدخال رقم هاتف صالح.')
        }
        if (!formValues.password) {
            nextErrors.password = t('register.passwordRequired', 'كلمة المرور مطلوبة.')
        } else if (formValues.password.length < 6) {
            nextErrors.password = t('register.passwordMinLength', 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.')
        }
        if (!formValues.confirmPassword) {
            nextErrors.confirmPassword = t('register.confirmPasswordRequired', 'يرجى تأكيد كلمة المرور.')
        } else if (formValues.password !== formValues.confirmPassword) {
            nextErrors.confirmPassword = t('register.passwordMismatch', 'كلمات المرور غير متطابقة.')
        }
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setServerError('')
        if (!validate()) return
        let localDigits = formValues.phoneLocal.trim().replace(/\D/g, '')
        if (localDigits.startsWith('0')) {
            localDigits = localDigits.substring(1)
        }
        const countryCode = selectedCountry?.dialCode || selectedCountry?.phoneCode || ''
        const fullPhone = `${countryCode}${localDigits}`
        const countryId = selectedCountry?.id || selectedCountry?._id
        const signupPayload = {
            email: formValues.email.trim(),
            name: formValues.name.trim(),
            phone: fullPhone,
            country: countryId,
            password: formValues.password,
            confirmPassword: formValues.confirmPassword
        }
        try {
            const user = await signup(signupPayload)
            setToast({
                show: true,
                message: t('register.successMessage', 'تم إنشاء الحساب بنجاح! جاري تحويلك...'),
                type: 'success'
            })
            setTimeout(() => {
                navigate(getRedirectPath(user?.role || 'Student'))
            }, 600)
        } catch (error) {
            const errorMsg = error.message || t('register.errorMessage', 'فشل إنشاء الحساب، يرجى المحاولة مرة أخرى.')
            setServerError(errorMsg)
            if (canShowErrorInToaster(error)) {
                setToast({
                    show: true,
                    message: errorMsg,
                    type: 'error'
                })
            }
        }
    }
    return (
        <div className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 transition-colors duration-300 flex flex-col font-sans">
            <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between z-10 shrink-0">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-[#00695C] dark:text-emerald-400 hover:text-[#004D40] dark:hover:text-emerald-300 font-bold transition-colors bg-white/70 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 px-3 sm:px-4 py-2 rounded-full shadow-xs border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm cursor-pointer"
                >
                    <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{t('register.backToHome', 'العودة للرئيسية')}</span>
                </Link>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/70 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 transition-colors cursor-pointer shadow-xs"
                        title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-[#00695C]" />}
                    </button>
                    <LanguageSwitcher />
                </div>
            </header>
            <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-6 my-auto">
                <div className="text-center mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto shadow-sm mb-3.5 p-2">
                        <img src={logoImg} alt={t('register.academyName', 'أكاديمية منارة العز')} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" width="56" height="56" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00695C] dark:text-emerald-400 mb-1.5">
                        {t('register.academyName', 'أكاديمية منارة العز')}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-sm">
                        {t('register.academySubtitle', 'أكاديمية تعليمية روحية ومعاصرة')}
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2rem] shadow-sm p-6 sm:p-9 border border-slate-100 dark:border-slate-800">
                    <div className="mb-6 text-center sm:text-start">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                            {t('register.title', 'إنشاء حساب جديد')}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                            {t('register.description', 'سجل الآن للوصول إلى لوحة التحكم المخصصة لك والبدء في رحلتك التعليمية.')}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div className="space-y-1.5">
                            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 px-1 text-start">
                                {t('register.name', 'الاسم الكامل')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-400">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={formValues.name}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, name: e.target.value })
                                        if (errors.name) setErrors(prev => ({ ...prev, name: null }))
                                    }}
                                    placeholder={t('register.namePlaceholder', 'أدخل اسمك الكامل')}
                                    className={`w-full bg-[#F5F8F7] dark:bg-slate-800 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#00695C] dark:focus:border-emerald-500'} text-slate-800 dark:text-white rounded-2xl py-3 ps-11 pe-4 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-sm`}
                                />
                            </div>
                            {errors.name && <p className="text-xs text-red-500 px-1 text-start">{errors.name}</p>}
                        </div>
                        <div className="space-y-1.5">
                            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 px-1 text-start">
                                {t('register.email', 'البريد الإلكتروني')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    value={formValues.email}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, email: e.target.value })
                                        if (errors.email) setErrors(prev => ({ ...prev, email: null }))
                                    }}
                                    dir="ltr"
                                    placeholder={t('register.emailPlaceholder', 'example@mail.com')}
                                    className={`w-full bg-[#F5F8F7] dark:bg-slate-800 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#00695C] dark:focus:border-emerald-500'} text-slate-800 dark:text-white rounded-2xl py-3 ps-11 pe-4 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-sm text-start`}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500 px-1 text-start">{errors.email}</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="space-y-1.5 text-start" ref={dropdownRef}>
                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">
                                    {t('register.country', 'الدولة')}
                                </label>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setCountryDropdownOpen(!countryDropdownOpen)
                                            setCountrySearch('')
                                        }}
                                        className={`w-full bg-[#F5F8F7] dark:bg-slate-800 border ${errors.country ? 'border-red-500' : 'border-transparent focus:border-[#00695C] dark:focus:border-emerald-500'} text-slate-800 dark:text-white rounded-2xl py-3 px-3.5 flex items-center justify-between gap-2 transition-all cursor-pointer text-sm outline-none`}
                                    >
                                        <div className="flex items-center gap-2 min-w-0">
                                            <span className="text-xl shrink-0">{selectedCountry?.flag || '🌍'}</span>
                                            <span className="truncate font-medium text-xs sm:text-sm">
                                                {getCountryName(selectedCountry, isRtl) || t('register.countryPlaceholder', 'اختر الدولة')}
                                            </span>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {countryDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full mt-1.5 start-0 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 text-start"
                                            >
                                                <div className="p-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50/70 dark:bg-slate-800/80">
                                                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                                                    <input
                                                        type="text"
                                                        value={countrySearch}
                                                        onChange={(e) => setCountrySearch(e.target.value)}
                                                        placeholder={t('register.searchCountry', 'ابحث عن دولة أو رمز...')}
                                                        className="w-full bg-transparent border-none text-slate-800 dark:text-white text-xs sm:text-sm outline-none placeholder-slate-400 dark:placeholder-slate-500"
                                                        autoFocus
                                                    />
                                                    {(loadingCountries || isSearchingCountry) && (
                                                        <Loader2 className="w-3.5 h-3.5 text-[#00695C] dark:text-emerald-400 animate-spin shrink-0" />
                                                    )}
                                                </div>
                                                <div className="max-h-56 overflow-y-auto py-1 divide-y divide-slate-50 dark:divide-slate-800">
                                                    {filteredCountries.length > 0 ? (
                                                        filteredCountries.map((c) => {
                                                            const isSelected = (c.id === selectedCountry?.id) || (c._id && c._id === selectedCountry?._id)
                                                            return (
                                                                <button
                                                                    key={c.id || c._id || `${c.name}-${c.phoneCode}`}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedCountry(c)
                                                                        setCountryDropdownOpen(false)
                                                                        if (errors.country) setErrors(prev => ({ ...prev, country: null }))
                                                                    }}
                                                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm transition-all hover:bg-emerald-50/50 dark:hover:bg-slate-800 text-start group cursor-pointer ${isSelected ? 'bg-emerald-50/80 dark:bg-emerald-950/60 font-bold text-[#00695C] dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200'}`}
                                                                >
                                                                    <div className="flex items-center gap-2.5 min-w-0">
                                                                        <span className="text-lg shrink-0">{c.flag || '🌍'}</span>
                                                                        <span className="truncate">{getCountryName(c, isRtl)}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1.5 shrink-0">
                                                                        <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 dir-ltr">
                                                                            {c.dialCode || c.phoneCode}
                                                                        </span>
                                                                        {isSelected && <Check className="w-4 h-4 text-[#00695C] dark:text-emerald-400 shrink-0" />}
                                                                    </div>
                                                                </button>
                                                            )
                                                        })
                                                    ) : (
                                                        <div className="p-4 text-center text-xs text-slate-400 dark:text-slate-500">
                                                            {t('register.noCountries', 'لم يتم العثور على دول')}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                {errors.country && <p className="text-xs text-red-500 px-1">{errors.country}</p>}
                            </div>
                            <div className="space-y-1.5 text-start">
                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">
                                    {t('register.phone', 'رقم الهاتف')}
                                </label>
                                <div className="flex rounded-2xl bg-[#F5F8F7] dark:bg-slate-800 border border-transparent focus-within:border-[#00695C] dark:focus-within:border-emerald-500 transition-all overflow-hidden">
                                    <div className="flex items-center gap-1 px-3 bg-slate-100/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-200 font-bold text-xs sm:text-sm dir-ltr shrink-0 select-none">
                                        <span>{selectedCountry?.flag || '🌍'}</span>
                                        <span>{selectedCountry?.dialCode || selectedCountry?.phoneCode || ''}</span>
                                    </div>
                                    <input
                                        type="tel"
                                        value={formValues.phoneLocal}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/[^\d]/g, '')
                                            setFormValues({ ...formValues, phoneLocal: val })
                                            if (errors.phone) setErrors(prev => ({ ...prev, phone: null }))
                                        }}
                                        dir="ltr"
                                        placeholder={t('register.phonePlaceholder', '1012345678')}
                                        className={`w-full bg-transparent py-3 px-3 outline-none text-slate-800 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 text-start ${errors.phone ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                {errors.phone && <p className="text-xs text-red-500 px-1">{errors.phone}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="space-y-1.5 text-start">
                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">
                                    {t('register.password', 'كلمة المرور')}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-400">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formValues.password}
                                        onChange={(e) => {
                                            setFormValues({ ...formValues, password: e.target.value })
                                            if (errors.password) setErrors(prev => ({ ...prev, password: null }))
                                        }}
                                        dir="ltr"
                                        placeholder="••••••••"
                                        className={`w-full bg-[#F5F8F7] dark:bg-slate-800 border ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#00695C] dark:focus:border-emerald-500'} text-slate-800 dark:text-white rounded-2xl py-3 ps-11 pe-11 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-sm`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-xs text-red-500 px-1">{errors.password}</p>}
                            </div>
                            <div className="space-y-1.5 text-start">
                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">
                                    {t('register.confirmPassword', 'تأكيد كلمة المرور')}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-400">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={formValues.confirmPassword}
                                        onChange={(e) => {
                                            setFormValues({ ...formValues, confirmPassword: e.target.value })
                                            if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: null }))
                                        }}
                                        dir="ltr"
                                        placeholder="••••••••"
                                        className={`w-full bg-[#F5F8F7] dark:bg-slate-800 border ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#00695C] dark:focus:border-emerald-500'} text-slate-800 dark:text-white rounded-2xl py-3 ps-11 pe-11 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-sm`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.confirmPassword && <p className="text-xs text-red-500 px-1">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                        {serverError && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 text-red-600 dark:text-red-400 text-xs sm:text-sm text-center font-bold shadow-xs"
                            >
                                {serverError}
                            </motion.div>
                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold rounded-2xl py-3.5 transition-all shadow-md active:scale-[0.98] mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>{t('register.submitting', 'جاري إنشاء الحساب...')}</span>
                                </>
                            ) : (
                                <span>{t('register.submit', 'إنشاء الحساب')}</span>
                            )}
                        </button>
                    </form>
                    <div className="mt-6 text-center flex items-center justify-center gap-1.5 text-sm border-t border-slate-100 dark:border-slate-800 pt-5">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                            {t('register.haveAccount', 'هل لديك حساب بالفعل؟')}
                        </span>
                        <Link
                            to="/login"
                            className="font-bold text-[#00695C] dark:text-emerald-400 hover:text-[#004D40] dark:hover:text-emerald-300 hover:underline transition-colors"
                        >
                            {t('register.login', 'تسجيل الدخول')}
                        </Link>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -40, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, x: 40, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className={`fixed top-5 right-5 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl font-bold border bg-white dark:bg-slate-900 ${
                            toast.type === 'success'
                                ? 'border-emerald-200 dark:border-emerald-800 border-s-4 border-s-[#00695C] text-[#00695C] dark:text-emerald-400'
                                : 'border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 text-red-600 dark:text-red-400'
                        }`}
                    >
                        <span className="flex items-center justify-center rounded-full p-1 shrink-0">
                            {toast.type === 'success' ? (
                                <Check className="w-4 h-4 text-[#00695C] dark:text-emerald-400" />
                            ) : (
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            )}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
