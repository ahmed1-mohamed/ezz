import { Upload } from 'lucide-react'

export default function StudentStep1({
  formData,
  handleChange,
  isRtl,
  selectedCountryCode,
  isDropdownOpen,
  setIsDropdownOpen,
  phoneVal,
  setPhoneVal,
  countryCodes,
  countries,
  levels,
  selectCountryCode,
  isEdit
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 max-w-4xl mx-auto">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        {isRtl ? 'البيانات الشخصية' : 'Personal Details'}
      </h3>

      {/* Profile Image upload drop zone */}
      <div className="flex flex-col items-center justify-center space-y-2 py-2">
        <label htmlFor="profileImageInput" className="relative cursor-pointer group flex flex-col items-center justify-center w-40 h-40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-[#f3f7f6] dark:bg-slate-950/20 transition-all overflow-hidden">
          {formData.profileImage ? (
            <div className="relative w-full h-full group">
              <img src={formData.profileImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload size={24} className="text-white" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl text-slate-400 dark:text-slate-500 shadow-sm transition-transform group-hover:scale-110">
                <Upload size={20} />
              </div>
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                {isRtl ? 'اضغط لرفع صورة المكافأة' : 'Click to upload profile image'}
              </span>
            </div>
          )}
          <input
            id="profileImageInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0]
              if (file) {
                handleChange('profileImageFile', file)
                handleChange('profileImage', URL.createObjectURL(file))
              }
            }}
          />
        </label>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
          {isRtl ? 'صورة شخصية' : 'Profile Picture'}
        </span>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={formData.nameEn}
            onChange={(e) => handleChange('nameEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="Nora ahmed"
            dir="ltr"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإسم بالعربية' : 'Name in Arabic'}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'نورة أحمد' : 'Nora Ahmed'}
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <div className="flex gap-3" dir="ltr">
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-955 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer"
              >
                <span>{selectedCountryCode.flag}</span>
                <span>({selectedCountryCode.code})</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 z-10 w-44 bg-white dark:bg-slate-955 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-850 py-2 overflow-hidden animate-fadeIn">
                  {countryCodes.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => selectCountryCode(country)}
                      className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-750 dark:text-slate-350 text-sm transition-colors text-left"
                    >
                      <span>{country.flag}</span>
                      <span className="font-semibold">{country.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              value={phoneVal}
              onChange={(e) => setPhoneVal(e.target.value)}
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-450"
              placeholder="01012345678"
            />
          </div>
        </div>
        {!isEdit && (
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
              placeholder="Nora_ahmed@yahoo.com"
              dir="ltr"
            />
          </div>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {isRtl ? 'البلد' : 'Country'}
        </label>
        <select
          value={formData.country}
          onChange={(e) => handleChange('country', e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
        >
          {countries.map((c) => (
            <option key={c.id || c.name} value={c.id || c.name}>
              {isRtl ? c.name : c.nameEn}
            </option>
          ))}
        </select>
      </div>

      {!isEdit && (
        <>
          {/* Level Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'المستوى التعليمي *' : 'Educational Level *'}
            </label>
            <select
              value={formData.level}
              onChange={(e) => handleChange('level', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
            >
              <option value="" disabled>{isRtl ? 'ادخل المستوى' : 'Select Level'}</option>
              {levels.map((lvl) => (
                <option key={lvl.value} value={lvl.value}>
                  {lvl.label}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'ملاحظات إضافية' : 'Additional Notes'}
            </label>
            <textarea
              rows={4}
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm resize-none leading-relaxed"
              placeholder={isRtl ? 'أي ملاحظات خاصة بالطالب...' : 'Any special notes for student...'}
            />
          </div>
        </>
      )}
    </div>
  )
}
