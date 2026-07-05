import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Check, Loader2 } from 'lucide-react'
import { landingApi } from '@/shared/services/api/landingApi'

export default function CountryPhoneInput({ value = '', onChange, error, label }) {
    const { t, i18n } = useTranslation()

    const DEFAULT_COUNTRIES = useMemo(() => [
        { phoneCode: '+20', name: i18n.language === 'en' ? 'Egypt' : 'مصر', flag: '🇪🇬' },
        { phoneCode: '+966', name: i18n.language === 'en' ? 'Saudi Arabia' : 'السعودية', flag: '🇸🇦' },
        { phoneCode: '+971', name: i18n.language === 'en' ? 'UAE' : 'الإمارات', flag: '🇦🇪' },
        { phoneCode: '+965', name: i18n.language === 'en' ? 'Kuwait' : 'الكويت', flag: '🇰🇼' },
        { phoneCode: '+974', name: i18n.language === 'en' ? 'Qatar' : 'قطر', flag: '🇶🇦' },
        { phoneCode: '+973', name: i18n.language === 'en' ? 'Bahrain' : 'البحرين', flag: '🇧🇭' },
        { phoneCode: '+968', name: i18n.language === 'en' ? 'Oman' : 'عمان', flag: '🇴🇲' },
    ], [i18n.language])

    const [countriesList, setCountriesList] = useState(DEFAULT_COUNTRIES)
    const [countryCode, setCountryCode] = useState('+20')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [loadingCountries, setLoadingCountries] = useState(false)

    useEffect(() => {
        const allCountries = [...countriesList, ...DEFAULT_COUNTRIES]
        const sortedCountries = [...allCountries].sort((a, b) => b.phoneCode.length - a.phoneCode.length)
        const matchedCountry = sortedCountries.find(c => value.trim().startsWith(c.phoneCode))
        if (matchedCountry && matchedCountry.phoneCode !== countryCode) {
            setCountryCode(matchedCountry.phoneCode)
        }
    }, [value, countriesList, DEFAULT_COUNTRIES, countryCode])

    useEffect(() => {
        let isMounted = true
        const delayDebounceFn = setTimeout(async () => {
            setLoadingCountries(true)
            try {
                const response = await landingApi.fetchCountries({
                    lang: i18n.language,
                    sort: 'name',
                    search: searchTerm.trim() || undefined
                })
                if (isMounted && response?.data) {
                    setCountriesList(response.data)
                }
            } catch (err) {
                console.error("Failed to fetch countries:", err)
                if (isMounted && !searchTerm) {
                    setCountriesList(DEFAULT_COUNTRIES)
                }
            } finally {
                if (isMounted) setLoadingCountries(false)
            }
        }, searchTerm ? 300 : 0)

        return () => {
            isMounted = false
            clearTimeout(delayDebounceFn)
        }
    }, [searchTerm, i18n.language, DEFAULT_COUNTRIES])

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

        const allCountries = [...countriesList, ...DEFAULT_COUNTRIES]
        const sortedCountries = [...allCountries].sort((a, b) => b.phoneCode.length - a.phoneCode.length)
        const matchedCountry = sortedCountries.find(c => inputVal.trim().startsWith(c.phoneCode))

        if (matchedCountry) {
            setCountryCode(matchedCountry.phoneCode)
            const prefix = matchedCountry.phoneCode
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

    const handleCountryChange = (code) => {
        setCountryCode(code)

        let currentPhone = value.trim()
        const allCountries = [...countriesList, ...DEFAULT_COUNTRIES]
        const sortedCountries = [...allCountries].sort((a, b) => b.phoneCode.length - a.phoneCode.length)
        const existingCountry = sortedCountries.find(c => currentPhone.startsWith(c.phoneCode))

        if (existingCountry) {
            currentPhone = currentPhone.substring(existingCountry.phoneCode.length).trim()
        }

        if (currentPhone.startsWith('0')) {
            currentPhone = currentPhone.substring(1)
        }

        const newPhone = `${code} ${currentPhone}`
        if (onChange) {
            onChange(newPhone)
        }
    }

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
                        className="w-full h-full bg-[#F5F5F2] border border-transparent hover:border-[#00695C]/35 text-slate-700 rounded-2xl focus:ring-2 focus:ring-[#00695C] p-3 flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-[0.98] outline-none"
                    >
                        <span className="text-lg sm:text-xl shrink-0">
                            {countriesList.find(c => c.phoneCode === countryCode)?.flag ||
                                DEFAULT_COUNTRIES.find(c => c.phoneCode === countryCode)?.flag || '🌍'}
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
                                            const isSelected = country.phoneCode === countryCode;
                                            return (
                                                <button
                                                    key={`${country.id || country.name}-${country.phoneCode}`}
                                                    type="button"
                                                    onClick={() => {
                                                        handleCountryChange(country.phoneCode)
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
                                                        <span className="truncate pr-1.5 font-medium">{country.name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 shrink-0">
                                                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold border ${isSelected
                                                            ? 'bg-[#00695C] text-white border-transparent'
                                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200/50 dark:border-slate-700/50'
                                                            }`}>
                                                            {country.phoneCode}
                                                        </span>
                                                        {isSelected && <Check className="w-3.5 h-3.5 text-[#00695C] dark:text-emerald-400 shrink-0" />}
                                                    </div>
                                                </button>
                                            )
                                        })
                                    ) : (
                                        <div className="p-4 text-center text-xs text-slate-400">
                                            {i18n.language === 'en' ? 'No countries found' : 'لم يتم العثور على نتائج'}
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
                    className={`flex-1 w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all text-start ${error ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
                />
            </div>
            {error && <span className="text-xs text-red-500 font-bold px-1 block">{error}</span>}
        </div>
    )
}