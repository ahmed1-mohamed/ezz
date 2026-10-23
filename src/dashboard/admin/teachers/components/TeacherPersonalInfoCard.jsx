import { useState, useEffect, useMemo } from 'react'
import { Image as ImageIcon, ChevronDown } from 'lucide-react'
import { sortCountries, getCountryName, fetchCountries } from '@/shared/utils/countryUtils'

export default function TeacherPersonalInfoCard({
  formData,
  onChange,
  isRtl = true,
  countries = []
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

  const initialCode = formData.phone?.startsWith('+') ? formData.phone.split(' ')[0] : ''
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if (activeCountries.length > 0) {
      const matched = initialCode ? activeCountries.find((c) => c.code === initialCode) : null
      const selected = matched || selectedCountry || activeCountries[0]
      setSelectedCountry(selected)
      if (!formData.country && selected?.name) {
        onChange('country', getCountryName(selected, isRtl))
      }
    }
  }, [activeCountries, initialCode])

  const rawPhone = formData.phone || ''
  const phoneNumberOnly = rawPhone.includes(' ')
    ? rawPhone.split(' ').slice(1).join(' ')
    : (rawPhone.startsWith('+') ? rawPhone.replace(/^\+\d+/, '').trim() : rawPhone)

  const handlePhoneNumChange = (value) => {
    const cleanVal = value.replace(/[^\d]/g, '')
    if (selectedCountry?.code) {
      onChange('phone', `${selectedCountry.code} ${cleanVal}`.trim())
    } else {
      onChange('phone', cleanVal)
    }
  }

  const selectCountryCode = (country) => {
    setSelectedCountry(country)
    setIsDropdownOpen(false)
    onChange('country', getCountryName(country, isRtl))
    onChange('phone', `${country.code} ${phoneNumberOnly}`.trim())
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
              if (file) {
                onChange('profileImageFile', file)
                onChange('image', file)
                const reader = new FileReader()
                reader.onloadend = () => {
                  onChange('profileImage', reader.result)
                }
                reader.readAsDataURL(file)
              }
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
            Full Name
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

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              placeholder="+0201012345678"
            />
          </div>
        </div>
      </div>
    </div>
  )
}