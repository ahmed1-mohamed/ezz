import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Check, Loader2 } from 'lucide-react'
import { fetchCountries, sortCountries, getCountryName } from '@/shared/utils/countryUtils'

export default function CountryPhoneInput({ value = '', onChange, error, label }) {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language.startsWith('ar')

    const [rawCountries, setRawCountries] = useState([])
    const [countryCode, setCountryCode] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [loadingCountries, setLoadingCountries] = useState(false)

    useEffect(() => {
        let isMounted = true
        setLoadingCountries(true)
        fetchCountries({ sort: 'name' })
            .then((list) => {
                if (!isMounted) return
                const sorted = sortCountries(list, isRtl)
                setRawCountries(sorted)
                if (sorted.length > 0 && !countryCode) {
                    const matched = [...sorted]
                        .sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
                        .find(c => c.dialCode && value.trim().startsWith(c.dialCode))
                    setCountryCode(matched?.dialCode || sorted[0].dialCode || '+20')
                }
            })
            .catch((err) => console.error('CountryPhoneInput fetchCountries error:', err))
            .finally(() => {
                if (isMounted) setLoadingCountries(false)
            })

        return () => {
            isMounted = false
        }
    }, [i18n.language, isRtl])

    const countriesList = useMemo(() => {
        const sorted = sortCountries(rawCountries, isRtl)
        if (!searchTerm.trim()) return sorted
        const q = searchTerm.toLowerCase().trim()
        return sorted.filter(c =>
            (c.name && c.name.toLowerCase().includes(q)) ||
            (c.nameEn && c.nameEn.toLowerCase().includes(q)) ||
            (c.dialCode && c.dialCode.includes(q)) ||
            (c.code && c.code.toLowerCase().includes(q))
        )
    }, [rawCountries, searchTerm, isRtl])

    useEffect(() => {
        if (!value || rawCountries.length === 0) return
        const sorted = [...rawCountries].sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
        const matched = sorted.find(c => c.dialCode && value.trim().startsWith(c.dialCode))
        if (matched && matched.dialCode !== countryCode) {
            setCountryCode(matched.dialCode)
        }
    }, [value, rawCountries, countryCode])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.country-dropdown-container')) {
                setDropdownOpen(false)
            }
        }
        if (dropdownOpen) {
            document.addEventListener('click', handleClickOutside)
        }
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [dropdownOpen])

    const handleInputChange = (e) => {
        const inputVal = e.target.value
        let finalValue = inputVal

        const sorted = [...rawCountries].sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
        const matched = sorted.find(c => c.dialCode && inputVal.trim().startsWith(c.dialCode))

        if (matched) {
            setCountryCode(matched.dialCode)
            const prefix = matched.dialCode
            let rest = inputVal.substring(prefix.length)
            if (rest.trim().startsWith('0')) {
                rest = rest.replace('0', '')
            }
            finalValue = `${prefix}${rest}`
        }

        if (onChange) {
            onChange(finalValue)
        }
    }

    const handleCountryChange = (dialCode) => {
        setCountryCode(dialCode)

        let currentPhone = value.trim()
        const sorted = [...rawCountries].sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
        const existingCountry = sorted.find(c => c.dialCode && currentPhone.startsWith(c.dialCode))

        if (existingCountry) {
            currentPhone = currentPhone.substring(existingCountry.dialCode.length).trim()
        }

        if (currentPhone.startsWith('0')) {
            currentPhone = currentPhone.substring(1)
        }

        const newPhone = `${dialCode} ${currentPhone}`.trim()
        if (onChange) {
            onChange(newPhone)
        }
    }

    const selectedCountryObj = useMemo(() => {
        return rawCountries.find(c => c.dialCode === countryCode) || rawCountries[0] || null
    }, [rawCountries, countryCode])

    return (
        <div className="space-y-2 text-start">
            <label className="block text-sm font-semibold text-slate-650 dark:text-slate-400 px-1">
                {label || t('contact.form.phone', 'رقم الهاتف')}
            </label>
            <div className="flex gap-3">
                <div className="relative w-16 sm:w-20 country-dropdown-container shrink-0">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full h-full bg-[#F5F5F2] dark:bg-slate-800 border border-transparent dark:border-slate-700 hover:border-[#00695C]/35 dark:hover:border-emerald-500/35 text-slate-700 dark:text-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00695C] dark:focus:ring-emerald-500 p-3 flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-[0.98] outline-none"
                    >
                        <span className="text-lg sm:text-xl shrink-0">
                            {selectedCountryObj?.flag || '🌍'}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full mt-2 left-0 w-64 sm:w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col z-50 text-start"
                            >
                                <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/50">
                                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder={i18n.language === 'en' ? 'Search country or code...' : 'ابحث عن بلد أو رمز...'}
                                        className="w-full bg-transparent border-none text-slate-800 dark:text-white text-xs sm:text-sm outline-none placeholder-slate-400"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    {loadingCountries && (
                                        <Loader2 className="w-3.5 h-3.5 text-[#00695C] animate-spin shrink-0" />
                                    )}
                                </div>

                                <div className="max-h-60 overflow-y-auto py-1 divide-y divide-slate-50 dark:divide-slate-800/40 animate-none">
                                    {countriesList.length > 0 ? (
                                        countriesList.map((country) => {
                                            const isSelected = country.dialCode === countryCode;
                                            return (
                                                <button
                                                    key={`${country.id || country._id || country.name}-${country.dialCode}`}
                                                    type="button"
                                                    onClick={() => {
                                                        handleCountryChange(country.dialCode)
                                                        setDropdownOpen(false)
                                                        setSearchTerm('')
                                                    }}
                                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm transition-all hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 text-start group cursor-pointer ${isSelected ? 'bg-emerald-50/70 dark:bg-emerald-950/30 font-bold text-[#00695C] dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2.5 min-w-0">
                                                        <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform shrink-0" role="img" aria-label={country.name}>
                                                            {country.flag}
                                                        </span>
                                                        <span className="truncate pr-1.5 font-medium">{getCountryName(country, isRtl)}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 shrink-0">
                                                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold border ${isSelected
                                                            ? 'bg-[#00695C] text-white border-transparent'
                                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200/50 dark:border-slate-700/50'
                                                            }`}>
                                                            {country.dialCode}
                                                        </span>
                                                        {isSelected && <Check className="w-3.5 h-3.5 text-[#00695C] dark:text-emerald-400 shrink-0" />}
                                                    </div>
                                                </button>
                                            )
                                        })
                                    ) : (
                                        <div className="p-4 text-center text-xs text-slate-400">
                                            {loadingCountries
                                                ? (i18n.language === 'en' ? 'Loading countries...' : 'جاري التحميل...')
                                                : (i18n.language === 'en' ? 'No countries found' : 'لم يتم العثور على نتائج')}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <input
                    type="tel"
                    name="phone"
                    value={value}
                    onChange={handleInputChange}
                    dir="ltr"
                    placeholder={t('contact.form.phonePlaceholder', '01012345678')}
                    className={`flex-1 w-full bg-[#F5F5F2] dark:bg-slate-800 border text-slate-900 dark:text-white dark:placeholder-slate-500 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] dark:focus:ring-emerald-500 block p-4 transition-all text-start ${error ? 'border-red-500 focus:ring-red-500' : 'border-transparent dark:border-slate-700'}`}
                />
            </div>
            {error && <span className="text-xs text-red-500 font-bold px-1 block">{error}</span>}
        </div>
    )
}