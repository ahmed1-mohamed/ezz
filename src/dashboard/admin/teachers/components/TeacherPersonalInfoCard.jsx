import { useState } from 'react'

const countryCodes = [
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' }
]

export default function TeacherPersonalInfoCard({
  formData,
  onChange,
  isRtl,
  t
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  // Extract phone number prefix
  const phonePrefix = formData.phone?.startsWith('+') ? formData.phone.split(' ')[0] : '+20'
  const phoneNumberOnly = formData.phone?.includes(' ') ? formData.phone.split(' ').slice(1).join(' ') : formData.phone

  const [selectedCountry, setSelectedCountry] = useState(
    countryCodes.find((c) => c.code === phonePrefix) || countryCodes[0]
  )

  const handlePhoneNumChange = (value) => {
    onChange('phone', `${selectedCountry.code} ${value}`)
  }

  const selectCountryCode = (country) => {
    setSelectedCountry(country)
    setIsDropdownOpen(false)
    onChange('phone', `${country.code} ${phoneNumberOnly}`)
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Section Header */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        {isRtl ? 'البيانات الشخصية' : 'Personal Information'}
      </h3>

      {/* Profile Image Upload Container */}
      <div className="flex flex-col items-center justify-center space-y-2 py-2">
        <label className="relative cursor-pointer group flex flex-col items-center justify-center w-40 h-40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-[#f3f7f6] dark:bg-slate-950/20 transition-all overflow-hidden">
          {formData.profileImage ? (
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl text-slate-400 dark:text-slate-500 shadow-sm transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                {isRtl ? 'اضغط لرفع صورة المكافأة' : 'Click to upload profile image'}
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
                const reader = new FileReader()
                reader.onloadend = () => {
                  onChange('profileImage', reader.result)
                }
                reader.readAsDataURL(file)
              }
            }}
          />
        </label>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
          {isRtl ? 'صورة شخصية' : 'Profile Picture'}
        </span>
      </div>

      {/* Row 1: Name En and Ar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Name English */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.nameEn || ''}
            onChange={(e) => onChange('nameEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="Nora ahmed"
            dir="ltr"
          />
        </div>

        {/* Name Arabic */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإسم بالعربية' : 'Name in Arabic'}
          </label>
          <input
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="نورة أحمد"
          />
        </div>

      </div>

      {/* Row 2: Phone with dropdown and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Phone Input */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <div className="flex gap-3" dir="ltr">
            
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer"
              >
                <span>{selectedCountry.flag}</span>
                <span>({selectedCountry.code})</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 z-10 w-44 bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-850 py-2 overflow-hidden animate-fadeIn">
                  {countryCodes.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => selectCountryCode(country)}
                      className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm transition-colors text-left"
                    >
                      <span>{country.flag}</span>
                      <span className="font-semibold">{country.code}</span>
                      <span className="text-xs text-slate-400">{country.name}</span>
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
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-450"
              placeholder="01012345678"
            />

          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
          </label>
          <input
            type="email"
            required
            value={formData.email || ''}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="Nora_ahmed@yahoo.com"
            dir="ltr"
          />
        </div>

      </div>

    </div>
  )
}
