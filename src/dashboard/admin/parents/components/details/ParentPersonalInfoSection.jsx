import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { getCountryName } from '@/shared/utils/countryUtils'

export default function ParentPersonalInfoSection({
  formData,
  handleChange,
  isRtl = true,
  selectedCountryCode,
  setSelectedCountryCode,
  isPhoneDropdownOpen,
  setIsPhoneDropdownOpen,
  countryCodesList = [],
  countriesList = [],
  phoneVal,
  setPhoneVal,
  onImageChange,
}) {
  const fileInputRef = useRef(null)
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file && onImageChange) {
      onImageChange(file)
    }
  }
  const avatarInitial = formData.name ? formData.name.trim().charAt(0) : '?'
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800/80 shadow-soft space-y-6">
      <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white text-start">
        {isRtl ? 'البيانات الشخصية' : 'Personal Information'}
      </h3>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shrink-0 overflow-hidden shadow-xs">
          {formData.profileImage ? (
            <img src={formData.profileImage} alt="" className="w-full h-full object-cover" />
          ) : (
            <span>{avatarInitial}</span>
          )}
        </div>
        <div className="text-start">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-5 py-2.5 bg-[#00594C] hover:bg-[#004742] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
          >
            {isRtl ? 'تغيير الصورة' : 'Change Photo'}
          </button>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 font-medium">
            {isRtl ? 'الحد الأقصى 5 ميجابايت JPG أو PNG' : 'Max 5MB JPG or PNG'}
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="order-2 md:order-1 text-start">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
              {isRtl ? 'الاسم بالإنجليزية' : 'English Name'}
            </label>
            <input
              type="text"
              value={formData.nameEn || ''}
              onChange={(e) => handleChange('nameEn', e.target.value)}
              placeholder="Nora ahmed"
              dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm placeholder-slate-400"
            />
          </div>
          <div className="order-1 md:order-2 text-start">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
              {isRtl ? 'الإسم بالعربية' : 'Arabic Name'}
            </label>
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder={isRtl ? 'نورة أحمد' : 'Nora Ahmed'}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm placeholder-slate-400 text-start"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="order-2 md:order-1 text-start">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
              {isRtl ? 'رقم الهاتف' : 'Phone Number'}
            </label>
            <div className="flex gap-2.5" dir="ltr">
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                  className="h-[46px] flex items-center justify-center gap-1.5 px-3 bg-[#f3f7f6] dark:bg-slate-950/80 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  <span>{selectedCountryCode?.flag || '🌍'}</span>
                  <span className="font-mono text-xs">
                    {selectedCountryCode?.code ? `(${selectedCountryCode.code})` : ''}
                  </span>
                  <ChevronDown size={14} className="text-slate-400" />
                </button>
                {isPhoneDropdownOpen && (
                  <div className="absolute left-0 mt-2 z-30 w-52 max-h-60 overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 animate-fadeIn">
                    {countryCodesList.map((c) => (
                      <button
                        key={c.code + (c.name || '')}
                        type="button"
                        onClick={() => {
                          setSelectedCountryCode(c)
                          setIsPhoneDropdownOpen(false)
                        }}
                        className="w-full px-4 py-2 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition-colors text-start cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span className="truncate">{getCountryName(c, isRtl)}</span>
                        </div>
                        <span className="font-semibold font-mono text-slate-400">{c.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                value={phoneVal}
                onChange={(e) => setPhoneVal(e.target.value)}
                placeholder="501234567"
                className="flex-1 bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm placeholder-slate-400 font-mono"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 text-start">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
              {isRtl ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="name@example.com"
              dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm placeholder-slate-400"
            />
          </div>
        </div>
        <div className="text-start">
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
            {isRtl ? 'الدولة' : 'Country'}
          </label>
          <div className="relative">
            <select
              value={formData.country || ''}
              onChange={(e) => handleChange('country', e.target.value)}
              className="w-full appearance-none bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 pr-10 outline-none transition-all text-sm cursor-pointer"
            >
              <option value="">{isRtl ? 'اختر الدولة' : 'Select Country'}</option>
              {countriesList.map((c) => (
                <option key={c.id || c._id || c.name} value={c.id || c._id || c.name}>
                  {c.flag ? `${c.flag} ` : ''}{getCountryName(c, isRtl)}
                </option>
              ))}
            </select>
            <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-4' : 'right-4'} pointer-events-none text-slate-400`}>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
