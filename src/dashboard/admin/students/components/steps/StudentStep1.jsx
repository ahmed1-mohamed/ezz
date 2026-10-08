import { Upload, Calendar } from 'lucide-react'

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
  countries = [],
  levels = [],
  selectCountryCode,
  isEdit
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 max-w-4xl mx-auto">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        {isRtl ? 'البيانات الشخصية' : 'Personal Details'}
      </h3>

      <div className="flex flex-col items-center justify-center space-y-2 py-2">
        <label htmlFor="profileImageInput" className="relative cursor-pointer group flex flex-col items-center justify-center w-36 h-36 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-[#f3f7f6] dark:bg-slate-950/20 transition-all overflow-hidden">
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
                {isRtl ? 'اضغط لرفع صورة الطالب' : 'Click to upload student image'}
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
          {isRtl ? 'صورة شخصية (اختياري)' : 'Profile Picture (Optional)'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإسم بالعربية *' : 'Name in Arabic *'}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'عمر خالد المنصور' : 'Omar Khaled Al-Mansour'}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الاسم بالإنجليزية' : 'Full Name (English)'}
          </label>
          <input
            type="text"
            value={formData.nameEn}
            onChange={(e) => handleChange('nameEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="Omar Khaled Al-Mansour"
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'رقم الهاتف *' : 'Phone Number *'}
          </label>
          <div className="flex gap-3" dir="ltr">
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-955 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer"
              >
                <span>{selectedCountryCode?.flag || '🌍'}</span>
                <span>({selectedCountryCode?.code || '+20'})</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 z-20 w-48 max-h-60 overflow-y-auto bg-white dark:bg-slate-955 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-850 py-2 animate-fadeIn">
                  {countryCodes.map((country) => (
                    <button
                      key={country.code + (country.name || '')}
                      type="button"
                      onClick={() => selectCountryCode(country)}
                      className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-750 dark:text-slate-350 text-sm transition-colors text-left"
                    >
                      <span>{country.flag}</span>
                      <span className="font-semibold">{country.code}</span>
                      <span className="text-xs text-slate-400 truncate">{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              required
              value={phoneVal}
              onChange={(e) => setPhoneVal(e.target.value)}
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-450"
              placeholder="501234567"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البريد الإلكتروني *' : 'Email Address *'}
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="omar.khaled@example.com"
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البلد *' : 'Country *'}
          </label>
          <select
            required
            value={formData.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
          >
            <option value="" disabled>{isRtl ? 'اختر الدولة' : 'Select Country'}</option>
            {countries.map((c) => {
              const cid = c.id || c._id
              return (
                <option key={cid} value={cid}>
                  {c.flag ? `${c.flag} ` : ''}{c.name}
                </option>
              )
            })}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{isRtl ? 'تاريخ الميلاد *' : 'Birth Date *'}</span>
          </label>
          <input
            type="date"
            required
            value={formData.birthDate || ''}
            onChange={(e) => handleChange('birthDate', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm cursor-pointer"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {isRtl ? 'المستوى التعليمي للطالب *' : 'Student Educational Level *'}
        </label>
        <select
          required
          value={formData.studentLevel}
          onChange={(e) => handleChange('studentLevel', e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
        >
          <option value="" disabled>{isRtl ? 'اختر المستوى التعليمي' : 'Select Educational Level'}</option>
          {levels.map((lvl) => {
            const lid = lvl.id || lvl._id || lvl.value
            const lname = typeof lvl.name === 'object'
              ? (lvl.name.ar || lvl.name.en)
              : (lvl.name || lvl.label || lid)
            return (
              <option key={lid} value={lid}>
                {lname}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}