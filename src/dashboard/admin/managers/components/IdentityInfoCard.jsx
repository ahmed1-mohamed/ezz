import { useState, useRef, useMemo } from 'react'
import { Camera, Image as ImageIcon } from 'lucide-react'

export default function IdentityInfoCard({
  formData,
  onChange,
  onPhotoChange,
  t,
  countries = [],
  isRtl
}) {
  const fileInputRef = useRef(null)
  const [photoPreview, setPhotoPreview] = useState(formData.photoUrl || null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')

  const sortedCountries = useMemo(() => {
    return [...countries].sort((a, b) => (a.name || '').localeCompare(b.name || ''))
  }, [countries])

  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return sortedCountries;
    const query = countrySearch.toLowerCase().replace(/\+/g, '').trim();
    return sortedCountries.filter(c => {
      const cName = (c.name || '').toLowerCase();
      const cCode = (c.code || '').toLowerCase();
      const cPhone = String(c.phoneCode || '').replace(/\+/g, '').trim();
      return cName.includes(query) || cPhone.includes(query) || cCode.includes(query);
    });
  }, [sortedCountries, countrySearch])

  const selectedPhoneCountry = useMemo(() => {
    const pfxNorm = String(formData.phonePrefix || '').replace(/\+/g, '').trim()
    const found = sortedCountries.find(c => {
      const cPhoneNorm = String(c.phoneCode || c.code || '').replace(/\+/g, '').trim()
      return cPhoneNorm && cPhoneNorm === pfxNorm
    })
    return found || { phoneCode: formData.phonePrefix || '+20', flag: '🌐' }
  }, [sortedCountries, formData.phonePrefix])

  const handlePhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setPhotoPreview(previewUrl)
      onPhotoChange(file, previewUrl)
    }
  }

  const selectCountryCode = (country) => {
    setIsDropdownOpen(false)
    setCountrySearch('')
    const pfx = String(country.phoneCode || country.code || '');
    const prefixWithPlus = pfx.startsWith('+') ? pfx : `+${pfx}`;
    onChange('phonePrefix', prefixWithPlus)
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">

      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <span>{t('adminDashboard.managers.addSupervisorScreen.identityTitle', '1- معلومات الهوية')}</span>
      </h3>

      <div className="flex flex-col items-center justify-center space-y-3">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-label={t('adminDashboard.managers.addSupervisorScreen.photoLabel', 'صورة شخصية')}
        />

        <button
          type="button"
          aria-label={t('adminDashboard.managers.addSupervisorScreen.photoLabel', 'صورة شخصية')}
          onClick={handlePhotoClick}
          className="relative group cursor-pointer flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-[#f9fbfb] dark:bg-slate-950/40 hover:border-brand-500 hover:bg-brand-50/10 transition-all overflow-hidden"
        >
          {photoPreview ? (
            <>
              <img
                src={photoPreview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Camera size={24} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-brand-500 transition-colors p-4 text-center">
              <ImageIcon size={32} className="mb-2 text-slate-300 group-hover:text-brand-400" />
              <span className="text-xs font-semibold leading-relaxed">
                {isRtl ? 'اضغط لرفع صورة المشرف' : 'Click to upload supervisor image'}
              </span>
            </div>
          )}
        </button>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500" aria-hidden="true">
          {t('adminDashboard.managers.addSupervisorScreen.photoLabel', 'صورة شخصية')}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label htmlFor="nameEnInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الاسم باللغة الإنجليزية' : 'Full Name (English)'}
          </label>
          <input
            id="nameEnInput"
            type="text"
            required
            value={formData.nameEn || ''}
            onChange={(e) => onChange('nameEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="nameArInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الاسم باللغة العربية' : 'Full Name (Arabic)'}
          </label>
          <input
            id="nameArInput"
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
          />
        </div>

      </div>

      <div>
        <label htmlFor="emailInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.managers.addSupervisorScreen.email', 'عنوان البريد الإلكتروني')}
        </label>
        <input
          id="emailInput"
          type="email"
          required
          value={formData.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
          dir="ltr"
        />
      </div>

      <div>
        <label htmlFor="phoneInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.managers.addSupervisorScreen.phone', 'رقم الهاتف')}
        </label>
        <div className="flex gap-3" dir="ltr">

          <div className="relative shrink-0">
            <button
              type="button"
              aria-label={isRtl ? 'اختر رمز الدولة' : 'Select country code'}
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                if (isDropdownOpen) setCountrySearch('');
              }}
              className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <span aria-hidden="true">{selectedPhoneCountry?.flag}</span>
              <span aria-hidden="true">({selectedPhoneCountry?.phoneCode || formData.phonePrefix || '+20'})</span>
            </button>

            {isDropdownOpen && (
              <div role="listbox" className="absolute left-0 mt-2 z-20 w-56 bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-855 py-2 max-h-60 overflow-y-auto animate-fadeIn">
                <div className="px-3 pb-2 pt-1 border-b border-slate-100 dark:border-slate-800/60 sticky top-0 bg-white dark:bg-slate-955 z-10">
                  <label htmlFor="countrySearchInput" className="sr-only">
                    {isRtl ? 'بحث...' : 'Search...'}
                  </label>
                  <input
                    id="countrySearchInput"
                    type="search"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    placeholder={isRtl ? 'بحث...' : 'Search...'}
                    className="w-full px-2.5 py-1.5 bg-[#f3f7f6] dark:bg-slate-900 text-xs rounded-xl outline-none text-slate-800 dark:text-slate-200 border border-transparent focus:border-brand-500"
                  />
                </div>
                {filteredCountries.map((country) => (
                  <button
                    key={country.id || country._id}
                    type="button"
                    onClick={() => selectCountryCode(country)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-[#f9fbfb] dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300 border-b last:border-b-0 border-slate-50 dark:border-slate-800/60 font-semibold cursor-pointer"
                  >
                    <span>{country.name}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400 dark:text-slate-500 font-medium" dir="ltr">{country.phoneCode}</span>
                      <span className="text-lg">{country.flag}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            id="phoneInput"
            type="tel"
            required
            value={formData.phone || ''}
            onChange={(e) => onChange('phone', e.target.value)}
            className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
          />

        </div>
      </div>

      <div>
        <label htmlFor="countrySelectInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {isRtl ? 'الدولة' : 'Country'}
        </label>
        <select
          id="countrySelectInput"
          required
          value={formData.countryId || ''}
          onChange={(e) => onChange('countryId', e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm cursor-pointer text-start"
        >
          <option value="" disabled>{isRtl ? 'اختر الدولة' : 'Select Country'}</option>
          {sortedCountries.map((country) => (
            <option key={country.id || country._id} value={country.id || country._id}>
              {country.name} {country.flag}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}