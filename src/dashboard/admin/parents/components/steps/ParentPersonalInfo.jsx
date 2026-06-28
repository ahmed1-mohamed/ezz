import { Upload, ChevronDown } from 'lucide-react'

export default function ParentPersonalInfo({
  formData,
  handleChange,
  isRtl,
  fileInputRef,
  handleImageSelect,
  selectedCountryCode,
  isPhoneDropdownOpen,
  setIsPhoneDropdownOpen,
  phoneVal,
  setPhoneVal,
  isCountryDropdownOpen,
  setIsCountryDropdownOpen,
  countryCodes,
  countries,
  setSelectedCountryCode,
  initial
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-end">
        {isRtl ? 'البيانات الشخصية' : 'Personal Details'}
      </h3>

      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="h-20 w-20 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {formData.profileImage ? (
              <img src={formData.profileImage} alt="" className="w-full h-full object-cover rounded-full" />
            ) : (
              <span>{initial}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
        >
          <Upload size={14} />
          <span>{isRtl ? 'تغيير الصورة' : 'Change Photo'}</span>
        </button>
        <p className="text-xs text-slate-400">
          {isRtl ? 'الحد الأقصى 5 ميجابايت، PNG أو JPG' : 'Max 5MB, PNG or JPG'}
        </p>
        <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleImageSelect} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            Full Name
          </label>
          <input
            type="text"
            value={formData.nameEn}
            onChange={(e) => handleChange('nameEn', e.target.value)}
            placeholder="Khaled Al-Mansour"
            dir="ltr"
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-405"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
            {isRtl ? 'الاسم بالعربية' : 'Name in Arabic'}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder={isRtl ? 'خالد المنصور' : 'Khaled Al-Mansour'}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-405 text-end"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <div className="flex gap-2" dir="ltr">
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                className="h-12 flex items-center gap-1.5 px-3 bg-[#f3f7f6] dark:bg-slate-955 border border-transparent rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
              >
                <span>{selectedCountryCode.flag}</span>
                <span className="text-xs">({selectedCountryCode.code})</span>
                <ChevronDown size={12} className="text-slate-400" />
              </button>
              {isPhoneDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 z-20 w-44 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden">
                  {countryCodes.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => { setSelectedCountryCode(c); setIsPhoneDropdownOpen(false) }}
                      className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-colors text-left"
                    >
                      <span>{c.flag}</span>
                      <span className="font-semibold">{c.code}</span>
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
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-405"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
            {isRtl ? 'البريد الإلكتروني' : 'Email'}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="khalid@email.com"
            dir="ltr"
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-405"
          />
        </div>
      </div>

      <div className="relative">
        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
          {isRtl ? 'البلد' : 'Country'}
        </label>
        <button
          type="button"
          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
          className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-955 border border-transparent rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-105 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
        >
          <ChevronDown size={16} className="text-slate-400" />
          <span>{formData.country || (isRtl ? 'اختر الدولة' : 'Select Country')}</span>
        </button>
        {isCountryDropdownOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 z-20 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden">
            {countries.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => { handleChange('country', c.name); setIsCountryDropdownOpen(false) }}
                className="w-full px-4 py-2.5 flex items-center justify-end hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-colors"
              >
                {c.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            Notes
          </label>
          <textarea
            rows={3}
            value={formData.notesEn}
            onChange={(e) => handleChange('notesEn', e.target.value)}
            placeholder="Notes"
            dir="ltr"
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-405 resize-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
            {isRtl ? 'ملاحظات إضافية' : 'Additional Notes'}
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            placeholder={isRtl ? 'أي ملاحظات خاصة بالطالب...' : 'Any special notes...'}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-405 resize-none text-end"
          />
        </div>
      </div>
    </div>
  )
}
