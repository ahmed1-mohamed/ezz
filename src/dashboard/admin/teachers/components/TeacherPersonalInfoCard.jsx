import { useState, useEffect, useMemo, useRef } from 'react'
import { Image as ImageIcon, ChevronDown } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { sortCountries, getCountryName, fetchCountries, DEFAULT_DIAL_CODE } from '@/shared/utils/countryUtils'

export default function TeacherPersonalInfoCard({
  formData,
  onChange,
  isRtl = true,
  countries = [],
  isEdit = false
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    let isMounted = true
    if (!countries || countries.length === 0) {
      fetchCountries()
        .then((list) => {
          if (isMounted && list.length > 0) {
            setFetchedCountries(list)
          }
        })
        .catch((err) => console.error('TeacherPersonalInfoCard fetchCountries error:', err))
    }
    return () => {
      isMounted = false
    }
  }, [countries])

  const sourceCountries = countries && countries.length > 0 ? countries : fetchedCountries

  const activeCountries = useMemo(() => {
    const rawList = sourceCountries.map(c => {
      const dialCode = c.dialCode || c.phoneCode || (typeof c.code === 'string' && c.code.startsWith('+') ? c.code : '') || ''
      return {
        code: dialCode,
        dialCode,
        flag: c.flag || '🌍',
        name: c.name || c.nameAr || '',
        nameEn: c.nameEn || '',
        id: c.id || c._id
      }
    })
    return sortCountries(rawList, isRtl)
  }, [sourceCountries, isRtl])

  const rawPhone = (formData.phone || '').trim()
  const [userSelectedCountry, setUserSelectedCountry] = useState(null)

  const { parsedCountry, parsedPhone } = useMemo(() => {
    if (!rawPhone) return { parsedCountry: null, parsedPhone: '' }
    if (rawPhone.startsWith('+')) {
      const sorted = [...activeCountries].sort((a, b) => (b.code?.length || 0) - (a.code?.length || 0))
      for (const country of sorted) {
        if (country.code && rawPhone.startsWith(country.code)) {
          return {
            parsedCountry: country,
            parsedPhone: rawPhone.slice(country.code.length).trim()
          }
        }
      }
      const match = rawPhone.match(/^(\+\d{1,4})\s*(.*)$/)
      if (match) {
        const found = activeCountries.find(c => c.code === match[1])
        return {
          parsedCountry: found || null,
          parsedPhone: match[2].trim()
        }
      }
    }
    if (rawPhone.includes(' ')) {
      const parts = rawPhone.split(' ')
      const prefix = parts[0]
      const found = activeCountries.find(c => c.code === prefix)
      return {
        parsedCountry: found || null,
        parsedPhone: parts.slice(1).join(' ').trim()
      }
    }
    return { parsedCountry: null, parsedPhone: rawPhone }
  }, [rawPhone, activeCountries])

  const selectedCountry = useMemo(() => {
    if (userSelectedCountry) return userSelectedCountry
    if (activeCountries.length === 0) return null
    const byCountryId = formData.country ? activeCountries.find(c => c.id === formData.country) : null
    if (parsedCountry) {
      // Several countries share a dial code (e.g. +1); prefer the teacher's saved country when it matches.
      return byCountryId && byCountryId.code === parsedCountry.code ? byCountryId : parsedCountry
    }
    return byCountryId || activeCountries.find(c => c.code === DEFAULT_DIAL_CODE) || activeCountries[0]
  }, [userSelectedCountry, parsedCountry, activeCountries, formData.country])

  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  })

  useEffect(() => {
    if (activeCountries.length > 0 && !formData.country && selectedCountry?.id) {
      onChangeRef.current('country', selectedCountry.id)
    }
  }, [activeCountries, formData.country, selectedCountry])

  const phoneNumberOnly = parsedPhone

  const handlePhoneNumChange = (value) => {
    const cleanVal = value.replace(/[^\d]/g, '')
    if (selectedCountry?.code) {
      onChange('phone', cleanVal ? `${selectedCountry.code}${cleanVal.replace(/^0+/, '')}` : '')
    } else {
      onChange('phone', cleanVal)
    }
  }

  const selectCountryCode = (country) => {
    setUserSelectedCountry(country)
    setIsDropdownOpen(false)
    onChange('country', country.id)
    onChange('phone', phoneNumberOnly ? `${country.code}${phoneNumberOnly}` : '')
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'البيانات الشخصية' : 'Personal Information'}
      </h2>

      <div className="flex flex-col items-center justify-center pt-1 pb-4">
        <label className="relative cursor-pointer group flex flex-col items-center justify-center w-44 h-44 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-[#005953] bg-[#f8faf9] dark:bg-slate-950/20 transition-all overflow-hidden">
          {formData.profileImage || formData.image ? (
            <img
              src={formData.profileImage || formData.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4 space-y-2.5">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl text-slate-350 dark:text-slate-500 shadow-xs transition-transform group-hover:scale-105">
                <ImageIcon size={28} className="text-slate-300 dark:text-slate-500" />
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {isRtl ? 'اضغط لرفع صورة شخصية' : 'Click to upload photo'}
              </span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0]
              e.target.value = ''
              if (!file) return
              if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
                toast.error(isRtl ? 'الرجاء اختيار صورة صالحة بحجم لا يتجاوز 5 ميجابايت' : 'Please choose a valid image up to 5MB')
                return
              }
              onChange('profileImageFile', file)
              onChange('profileImage', URL.createObjectURL(file))
            }}
          />
        </label>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-2.5">
          {isRtl ? 'صورة شخصية' : 'Profile Picture'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإسم بالعربية' : 'Name in Arabic'}
          </label>
          <input
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'نورة أحمد' : 'Nora Ahmed'}
            dir="rtl"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الاسم بالإنجليزية' : 'Name in English'}
          </label>
          <input
            type="text"
            value={formData.nameEn || ''}
            onChange={(e) => onChange('nameEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="Nora ahmed"
            dir="ltr"
          />
        </div>
      </div>

      <div className={`grid grid-cols-1 ${!isEdit ? 'md:grid-cols-2' : ''} gap-5`}>
        {!isEdit && (
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input
              type="email"
              required
              value={formData.email || ''}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
              placeholder="Nora_ahmed@yahoo.com"
              dir="ltr"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <div className="flex gap-2.5" dir="ltr">
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-12 flex items-center justify-center gap-1.5 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-850 border border-transparent rounded-2xl transition-all text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
              >
                <ChevronDown size={14} className="text-slate-400" />
                <span className="text-xs">{selectedCountry?.code || ''}</span>
                <span className="text-base">{selectedCountry?.flag || '🌍'}</span>
              </button>

              {isDropdownOpen && (
                <div className={`absolute ${isRtl ? 'right-0' : 'left-0'} mt-2 z-30 w-52 bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 max-h-60 overflow-y-auto animate-fadeIn`}>
                  {activeCountries.map((country, idx) => (
                    <button
                      key={country.id || country.code || idx}
                      type="button"
                      onClick={() => selectCountryCode(country)}
                      className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm transition-colors text-start"
                    >
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span className="font-semibold text-xs">{getCountryName(country, isRtl)}</span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">{country.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="tel"
              required
              value={phoneNumberOnly}
              onChange={(e) => handlePhoneNumChange(e.target.value)}
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400 text-start"
              placeholder="501234567"
            />
          </div>
        </div>
      </div>
    </div>
  )
}