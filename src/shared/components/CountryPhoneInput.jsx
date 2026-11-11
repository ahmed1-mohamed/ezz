import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Check, Loader2 } from 'lucide-react'
import { fetchCountries, sortCountries, getCountryName, searchCountriesBackend } from '@/shared/utils/countryUtils'

function extractLocalDigits(fullVal, dialCode, allCountries) {
    if (!fullVal) return ''
    const str = String(fullVal).trim()
    if (dialCode && str.startsWith(dialCode)) {
        return str.substring(dialCode.length).trim()
    }
    if (str.startsWith('+') && Array.isArray(allCountries)) {
        const sorted = [...allCountries].sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
        const matched = sorted.find(c => c.dialCode && str.startsWith(c.dialCode))
        if (matched) {
            return str.substring(matched.dialCode.length).trim()
        }
    }
    return str
}

export default function CountryPhoneInput({
    value = '',
    onChange,
    error,
    label,
    placeholder,
    disabled = false,
    defaultCountry = 'AE',
    defaultDialCode = '+971',
    hideLabel = false
}) {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language.startsWith('ar')
    const [rawCountries, setRawCountries] = useState([])
    const [countryCode, setCountryCode] = useState(defaultDialCode)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const [isSearchingBackend, setIsSearchingBackend] = useState(false)
    const [loadingCountries, setLoadingCountries] = useState(true)
    useEffect(() => {
        let isMounted = true
        fetchCountries({ sort: 'name' })
            .then((list) => {
                if (!isMounted) return
                const sorted = sortCountries(list, isRtl)
                setRawCountries(sorted)
                if (sorted.length > 0) {
                    const matchedDefault = sorted.find(c =>
                        (defaultDialCode && c.dialCode === defaultDialCode) ||
                        (defaultCountry && c.code && c.code.toUpperCase() === defaultCountry.toUpperCase()) ||
                        (c.name && (c.name.includes('الإمارات') || c.name.includes('Emirates'))) ||
                        (c.nameEn && c.nameEn.toLowerCase().includes('emirates'))
                    )
                    const initialCode = matchedDefault?.dialCode || defaultDialCode || sorted[0].dialCode || '+971'
                    setCountryCode((prev) => prev || initialCode)
                }
            })
            .catch((err) => console.error('CountryPhoneInput fetchCountries error:', err))
            .finally(() => {
                if (isMounted) setLoadingCountries(false)
            })
        return () => {
            isMounted = false
        }
    }, [i18n.language, isRtl, defaultCountry, defaultDialCode])
    const [prevSearchTerm, setPrevSearchTerm] = useState(searchTerm)
    if (prevSearchTerm !== searchTerm) {
        setPrevSearchTerm(searchTerm)
        if (!searchTerm.trim()) {
            setSearchResults(null)
            setIsSearchingBackend(false)
        }
    }
    useEffect(() => {
        const trimmed = searchTerm.trim()
        if (!trimmed) return
        let active = true
        const timer = setTimeout(async () => {
            setIsSearchingBackend(true)
            try {
                const list = await searchCountriesBackend(trimmed)
                if (active) setSearchResults(list)
            } catch (err) {
                console.warn('Backend country search failed:', err)
                if (active) setSearchResults([])
            } finally {
                if (active) setIsSearchingBackend(false)
            }
        }, 300)
        return () => {
            active = false
            clearTimeout(timer)
        }
    }, [searchTerm])
    const countriesList = useMemo(() => {
        const list = searchResults !== null ? searchResults : rawCountries
        return sortCountries(list, isRtl)
    }, [searchResults, rawCountries, isRtl])
    const [prevValue, setPrevValue] = useState(value)
    if (prevValue !== value) {
        setPrevValue(value)
        if (value && rawCountries.length > 0) {
            const sorted = [...rawCountries].sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
            const matched = sorted.find(c => c.dialCode && value.trim().startsWith(c.dialCode))
            if (matched && matched.dialCode !== countryCode) {
                setCountryCode(matched.dialCode)
            }
        }
    }
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
    const displayLocal = useMemo(() => {
        return extractLocalDigits(value, countryCode, rawCountries)
    }, [value, countryCode, rawCountries])
    const handleInputChange = (e) => {
        const inputVal = e.target.value
        if (inputVal.trim().startsWith('+')) {
            const sorted = [...rawCountries].sort((a, b) => (b.dialCode?.length || 0) - (a.dialCode?.length || 0))
            const matched = sorted.find(c => c.dialCode && inputVal.trim().startsWith(c.dialCode))
            if (matched) {
                setCountryCode(matched.dialCode)
                let rest = inputVal.trim().substring(matched.dialCode.length).trim()
                if (rest.startsWith('0')) rest = rest.substring(1)
                const finalValue = rest ? `${matched.dialCode} ${rest}` : matched.dialCode
                if (onChange) onChange(finalValue)
                return
            }
        }
        let cleanDigits = inputVal.replace(/[^\d\s-]/g, '').trimStart()
        if (cleanDigits.startsWith('0')) {
            cleanDigits = cleanDigits.substring(1).trimStart()
        }
        const finalValue = cleanDigits ? `${countryCode} ${cleanDigits}` : ''
        if (onChange) {
            onChange(finalValue)
        }
    }
    const handleCountryChange = (dialCode) => {
        setCountryCode(dialCode)
        const currentLocal = extractLocalDigits(value, countryCode, rawCountries)
        const cleanLocal = currentLocal.startsWith('0') ? currentLocal.substring(1) : currentLocal
        const newPhone = cleanLocal ? `${dialCode} ${cleanLocal}`.trim() : `${dialCode}`
        if (onChange) {
            onChange(newPhone)
        }
    }
    const selectedCountryObj = useMemo(() => {
        const found = rawCountries.find(c => c.dialCode === countryCode) ||
                      rawCountries.find(c => c.dialCode === defaultDialCode) ||
                      rawCountries.find(c => c.code && c.code.toUpperCase() === defaultCountry.toUpperCase()) ||
                      rawCountries.find(c => (c.name && c.name.includes('الإمارات')) || (c.nameEn && c.nameEn.toLowerCase().includes('emirates'))) ||
                      rawCountries[0]
        return found || {
            name: 'الإمارات العربية المتحدة',
            nameEn: 'United Arab Emirates',
            dialCode: defaultDialCode || '+971',
            flag: '🇦🇪',
            code: 'AE'
        }
    }, [rawCountries, countryCode, defaultDialCode, defaultCountry])
    return (
        <div className="space-y-2 text-start">
            {!hideLabel && label !== false && (
                <label className="block text-sm font-semibold text-slate-650 dark:text-slate-400 px-1">
                    {label || t('contact.form.phone', 'رقم الهاتف')}
                </label>
            )}
            <div className="flex gap-2.5 items-stretch" dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="relative country-dropdown-container shrink-0">
                    <button
                        type="button"
                        disabled={disabled}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`min-w-[7.5rem] sm:min-w-[8.5rem] h-full bg-[#F5F5F2] dark:bg-slate-800 border border-transparent dark:border-slate-700 hover:border-[#00695C]/35 dark:hover:border-emerald-500/35 text-slate-700 dark:text-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00695C] dark:focus:ring-emerald-500 px-3.5 py-3 flex items-center justify-between gap-2 transition-all active:scale-[0.98] outline-none ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-lg sm:text-xl shrink-0" role="img" aria-label={selectedCountryObj?.name || 'country'}>
                                {selectedCountryObj?.flag || '🇦🇪'}
                            </span>
                            <span dir="ltr" className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 shrink-0">
                                {countryCode}
                            </span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full mt-2 start-0 w-64 sm:w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col z-50 text-start"
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
                                    {(loadingCountries || isSearchingBackend) && (
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
                                                        <span dir="ltr" className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold border ${isSelected
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
                    disabled={disabled}
                    value={displayLocal}
                    onChange={handleInputChange}
                    dir="ltr"
                    placeholder={placeholder || (countryCode === '+971' ? '50 123 4567' : '123456789')}
                    className={`flex-1 w-full bg-[#F5F5F2] dark:bg-slate-800 border text-slate-900 dark:text-white dark:placeholder-slate-500 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] dark:focus:ring-emerald-500 block p-4 transition-all text-start ${error ? 'border-red-500 focus:ring-red-500' : 'border-transparent dark:border-slate-700'} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
                />
            </div>
            {error && <span className="text-xs text-red-500 font-bold px-1 block">{error}</span>}
        </div>
    )
}

