import { useState, useRef } from 'react'
import { Camera, Image as ImageIcon } from 'lucide-react'

const countryCodes = [
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' }
]

export default function IdentityInfoCard({
  formData,
  onChange,
  onPhotoChange,
  isRtl,
  t
}) {
  const fileInputRef = useRef(null)
  const [photoPreview, setPhotoPreview] = useState(formData.photoUrl || null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(
    countryCodes.find(c => formData.phonePrefix?.startsWith(c.code)) || countryCodes[0]
  )

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
    setSelectedCountry(country)
    setIsDropdownOpen(false)
    onChange('phonePrefix', country.code)
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <span>{t('adminDashboard.managers.addSupervisorScreen.identityTitle', '1- معلومات الهوية')}</span>
      </h3>

      {/* Picture Upload */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        
        <div
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
                {t('adminDashboard.managers.addSupervisorScreen.photoUploadText', 'اضغط لرفع صورة المكافأة')}
              </span>
            </div>
          )}
        </div>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
          {t('adminDashboard.managers.addSupervisorScreen.photoLabel', 'صورة شخصية')}
        </span>
      </div>

      {/* Inputs Form Row: Full Name Ar & Full Name En */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Full Name English */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.managers.addSupervisorScreen.fullNameEn', 'Full Name')}
          </label>
          <input
            type="text"
            required
            value={formData.nameEn || ''}
            onChange={(e) => onChange('nameEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="Nora ahmed"
            dir="ltr"
          />
        </div>

        {/* Full Name Arabic */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.managers.addSupervisorScreen.fullNameAr', 'الإسم كامل')}
          </label>
          <input
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="نورة أحمد"
          />
        </div>

      </div>

      {/* Email Address */}
      <div>
        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.managers.addSupervisorScreen.email', 'عنوان البريد الإلكتروني')}
        </label>
        <input
          type="email"
          required
          value={formData.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
          placeholder="alex.p@enterprise.com"
          dir="ltr"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.managers.addSupervisorScreen.phone', 'رقم الهاتف')}
        </label>
        <div className="flex gap-3" dir="ltr">
          
          {/* Prefix Picker Code */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer"
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

          {/* Actual input number */}
          <input
            type="tel"
            required
            value={formData.phone || ''}
            onChange={(e) => onChange('phone', e.target.value)}
            className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-450"
            placeholder="01012345678"
          />

        </div>
      </div>

    </div>
  )
}
