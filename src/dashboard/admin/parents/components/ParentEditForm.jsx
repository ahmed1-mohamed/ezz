import { Upload, Eye, EyeOff } from 'lucide-react'

export default function ParentEditForm({
  formData,
  handleChange,
  handleSaveEdit,
  isRtl,
  setMode,
  selectedCountryCode,
  setSelectedCountryCode,
  isPhoneDropdownOpen,
  setIsPhoneDropdownOpen,
  countryCodesList,
  countriesList,
  phoneVal,
  setPhoneVal,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}) {
  return (
    <form onSubmit={handleSaveEdit} className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
        <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
          {isRtl ? 'البيانات الشخصية' : 'Personal Details'}
        </h3>
        
        <div className="flex flex-col items-center gap-3">
          <div className="h-20 w-20 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
            {formData.profileImage
              ? <img src={formData.profileImage} alt="" className="w-full h-full object-cover" />
              : formData.name?.charAt(0) || <Upload size={24} />}
          </div>
          <label className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl cursor-pointer transition-all">
            <Upload size={14} />
            <span>{isRtl ? 'تغيير الصورة' : 'Change Photo'}</span>
            <input type="file" className="hidden" accept="image/*" onChange={(e) => {
              const f = e.target.files[0]
              if (!f) return
              const r = new FileReader()
              r.onloadend = () => handleChange('profileImage', r.result)
              r.readAsDataURL(f)
            }} />
          </label>
          <p className="text-xs text-slate-400">{isRtl ? 'الحد الأقصى 5 ميجابايت، PNG أو JPG' : 'Max 5MB, PNG or JPG'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">Full Name</label>
            <input type="text" value={formData.nameEn} onChange={(e) => handleChange('nameEn', e.target.value)}
              placeholder="Khaled Al-Mansour" dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">{isRtl ? 'الاسم بالعربية' : 'Arabic Name'}</label>
            <input type="text" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)}
              placeholder={isRtl ? 'خالد المنصور' : 'Khaled Al-Mansour'}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-start" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">{isRtl ? 'رقم الهاتف' : 'Phone'}</label>
            <div className="flex gap-3" dir="ltr">
              <div className="relative shrink-0">
                <button type="button" onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                  className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer">
                  <span>{selectedCountryCode.flag}</span>
                  <span>({selectedCountryCode.code})</span>
                </button>
                {isPhoneDropdownOpen && (
                  <div className="absolute left-0 mt-2 z-10 w-44 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden animate-fadeIn">
                    {countryCodesList.map((c) => (
                      <button key={c.code} type="button" onClick={() => { setSelectedCountryCode(c); setIsPhoneDropdownOpen(false) }}
                        className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-750 dark:text-slate-300 text-sm transition-colors text-left">
                        <span>{c.flag}</span><span className="font-semibold">{c.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input type="tel" value={phoneVal} onChange={(e) => setPhoneVal(e.target.value)} placeholder="01012345678"
                className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">{isRtl ? 'البريد الإلكتروني' : 'Email'}</label>
            <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
              placeholder="khalid@email.com" dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">{isRtl ? 'البلد' : 'Country'}</label>
          <select
            value={formData.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
          >
            {countriesList.map((c) => (
              <option key={c.id || c.name} value={c.id || c.name}>
                {isRtl ? c.name : c.nameEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
        <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
          {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { key: 'confirmPassword', label: isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password', show: showConfirmPassword, toggle: () => setShowConfirmPassword(!showConfirmPassword) },
            { key: 'password', label: isRtl ? 'كلمة المرور' : 'Password', show: showPassword, toggle: () => setShowPassword(!showPassword) },
          ].map(({ key, label, show, toggle }) => (
            <div key={key}>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">{label}</label>
              <div className="relative" dir="ltr">
                <input type={show ? 'text' : 'password'} value={formData[key]} onChange={(e) => handleChange(key, e.target.value)}
                  placeholder="••••••••••••••••••••"
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400" />
                <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={() => setMode('view')}
          className="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
        <button type="submit"
          className="flex-[2] py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-lg shadow-brand-500/20 transition-all active:scale-[0.98]">
          {isRtl ? 'حفظ التعديلات' : 'Save Changes'}
        </button>
      </div>
    </form>
  )
}
