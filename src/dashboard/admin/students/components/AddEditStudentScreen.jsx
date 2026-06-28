import { useState } from 'react'
import { ArrowRight, ArrowLeft, Upload, FileText, Trash2, Search, Check } from 'lucide-react'

const levels = [
  { value: 'مبتدئ', label: 'مبتدئ (Beginner)' },
  { value: 'متوسط', label: 'متوسط (Intermediate)' },
  { value: 'متقدم', label: 'متقدم (Advanced)' }
]

const countries = [
  { name: 'مصر', nameEn: 'Egypt' },
  { name: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia' },
  { name: 'الإمارات العربية المتحدة', nameEn: 'UAE' },
  { name: 'الكويت', nameEn: 'Kuwait' },
  { name: 'قطر', nameEn: 'Qatar' }
]

const countryCodes = [
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' }
]

const parentsMock = [
  { name: 'خالد المنصور', email: 'khalid@email.com', phone: '+966501234567', initial: 'خ' },
  { name: 'علي الهاشمي', email: 'ali@email.com', phone: '+966501234569', initial: 'ع' },
  { name: 'منى الكعبي', email: 'mona@email.com', phone: '+966501234570', initial: 'م' },
  { name: 'سارة العلي', email: 'sara@email.com', phone: '+966501234568', initial: 'س' }
]

export default function AddEditStudentScreen({
  student = null,
  isRtl,
  onSave,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  // Step Wizard State: 1 (Personal) -> 2 (Security & Parent) -> 3 (Display & Docs)
  const [step, setStep] = useState(1)

  // Phone number parsing helper
  const phonePrefix = student?.phone?.startsWith('+') ? student.phone.split(' ')[0] : '+20'
  const phoneNumberOnly = student?.phone?.includes(' ') ? student.phone.split(' ').slice(1).join(' ') : student?.phone || ''

  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes.find((c) => c.code === phonePrefix) || countryCodes[0]
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(phoneNumberOnly)

  const selectCountryCode = (country) => {
    setSelectedCountryCode(country)
    setIsDropdownOpen(false)
  }

  // Parents list states
  const [parentSearch, setParentSearch] = useState('')
  const [selectedParentName, setSelectedParentName] = useState(student?.parentName || '')

  // Documents upload states
  const [cvFileName, setCvFileName] = useState(null)
  const [certFileName, setCertFileName] = useState(null)

  // Main Form State
  const [formData, setFormData] = useState({
    name: student?.name || '',
    nameEn: student?.nameEn || '',
    age: student?.age || '',
    email: student?.email || '',
    country: student?.country || 'مصر',
    level: student?.level || 'متوسط',
    groupName: student?.groupName || 'مجموعة القرآن أ',
    parentName: student?.parentName || '',
    remainingSessions: student?.remainingSessions ?? 8,
    totalSessions: student?.totalSessions ?? 12,
    subscriptionStatus: student?.subscriptionStatus || 'Active',
    notes: student?.notes || '',
    profileImage: student?.profileImage || null,
    password: '',
    confirmPassword: '',
    studentsCount: 45,
    experienceYears: 8
  })

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name) {
        alert(isRtl ? 'الرجاء إدخال الاسم!' : 'Please enter Name!')
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (formData.password && formData.password !== formData.confirmPassword) {
        alert(isRtl ? 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين!' : 'Passwords do not match!')
        return
      }
      setStep(3)
    }
  }

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1))
  }

  const handleParentSelect = (parentName) => {
    setSelectedParentName(parentName)
    handleChange('parentName', parentName)
  }

  const handleSave = (e) => {
    e.preventDefault()
    const fullPhone = phoneVal ? `${selectedCountryCode.code} ${phoneVal.trim()}` : ''

    onSave({
      ...formData,
      phone: fullPhone,
      parentName: selectedParentName,
      age: Number(formData.age) || 10,
      remainingSessions: Number(formData.remainingSessions) || 0,
      totalSessions: Number(formData.totalSessions) || 12
    })
  }

  // Filter parents
  const filteredParents = parentsMock.filter(
    (p) =>
      p.name.includes(parentSearch) ||
      p.email.includes(parentSearch) ||
      p.phone.includes(parentSearch)
  )

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Header with back and Cancel */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={isRtl ? 'العودة لقائمة الطلاب' : 'Back to list'}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'إدارة الطلاب' : 'Student Management'}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {student 
                  ? (isRtl ? 'تعديل بيانات الطالب' : 'Edit Student Details') 
                  : (isRtl ? 'إضافة طالب جديد' : 'Add New Student')}
              </span>
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 cursor-pointer"
        >
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
      </div>

      {/* 2. Wizard Steps Progress Tracker */}
      <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950/20 p-4 rounded-2xl border border-slate-100 dark:border-slate-850/40">
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${step >= 1 ? 'bg-[#005953] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>1</span>
          <span className="text-xs font-bold text-slate-755 dark:text-slate-200">{isRtl ? 'البيانات الشخصية' : 'Personal Info'}</span>
        </div>
        <div className="h-0.5 w-10 bg-slate-200 dark:bg-slate-850" />
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${step >= 2 ? 'bg-[#005953] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>2</span>
          <span className="text-xs font-bold text-slate-755 dark:text-slate-200">{isRtl ? 'الأمان وولي الأمر' : 'Security & Parent'}</span>
        </div>
        <div className="h-0.5 w-10 bg-slate-200 dark:bg-slate-850" />
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${step >= 3 ? 'bg-[#005953] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>3</span>
          <span className="text-xs font-bold text-slate-755 dark:text-slate-200">{isRtl ? 'بيانات العرض والمستندات' : 'Display & Docs'}</span>
        </div>
      </div>

      {/* 3. Wizard Content Pages */}
      <div className="space-y-8">
        
        {/* Step 1 Content: Personal Details (from screenshot 8) */}
        {step === 1 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 max-w-4xl mx-auto">
            <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              {isRtl ? 'البيانات الشخصية' : 'Personal Details'}
            </h3>

            {/* Profile Image upload drop zone */}
            <div className="flex flex-col items-center justify-center space-y-2 py-2">
              <label className="relative cursor-pointer group flex flex-col items-center justify-center w-40 h-40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-[#f3f7f6] dark:bg-slate-950/20 transition-all overflow-hidden">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="" className="w-full h-full object-cover" />
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
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onloadend = () => handleChange('profileImage', reader.result)
                      reader.readAsDataURL(file)
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
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
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
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
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
                      className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer"
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
                    className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-450"
                    placeholder="01012345678"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
                  placeholder="Nora_ahmed@yahoo.com"
                  dir="ltr"
                />
              </div>
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
                  <option key={c.name} value={c.name}>
                    {isRtl ? c.name : c.nameEn}
                  </option>
                ))}
              </select>
            </div>

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

          </div>
        )}

        {/* Step 2 Content: Security & Add Parent (from screenshot 9) */}
        {step === 2 && (
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* 1. Security Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
              <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'كلمه المرور' : 'Password'}
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    placeholder="************************"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    placeholder="************************"
                  />
                </div>
              </div>
            </div>

            {/* 2. Add Parent Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
                <h3 className="text-base font-bold text-slate-855 dark:text-white">
                  {isRtl ? 'أضف ولي الأمر' : 'Link Parent'}
                </h3>
                <span className="text-xs font-bold text-rose-500 block">
                  * {isRtl ? 'ولي الأمر مطلوب' : 'Parent is required'}
                </span>
              </div>

              {/* Search parents bar */}
              <div className="relative w-full">
                <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-450`}>
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder={isRtl ? 'ابحث بالاسم، البريد الإلكتروني، أو رقم الجوال...' : 'Search by name, email or phone...'}
                  value={parentSearch}
                  onChange={(e) => setParentSearch(e.target.value)}
                  className={`w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm`}
                />
              </div>

              {/* Parents List */}
              <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
                {filteredParents.map((parent) => {
                  const isSelected = selectedParentName === parent.name
                  return (
                    <div
                      key={parent.name}
                      onClick={() => handleParentSelect(parent.name)}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#005953] bg-emerald-50/10 dark:bg-slate-955/20'
                          : 'border-slate-100 dark:border-slate-850 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-[#005953] text-white' : 'bg-emerald-50/20 text-brand-700 dark:bg-emerald-500/20'}`}>
                          {parent.initial}
                        </div>
                        <div className="text-start space-y-0.5">
                          <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                            {parent.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                            {parent.email} · {parent.phone}
                          </p>
                        </div>
                      </div>
                      
                      {isSelected && (
                        <div className="p-1 bg-[#005953] text-white rounded-full">
                          <Check size={14} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Skip button bottom left */}
              <div className="flex justify-start">
                <button
                  type="button"
                  onClick={() => handleParentSelect('')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  {isRtl ? 'تخطى' : 'Skip'}
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Step 3 Content: Display Page Data & Documents / Review (from screenshot 7) */}
        {step === 3 && (
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* 1. Website display info */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
              <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {isRtl ? 'بيانات صفحه العرض' : 'Display Page Data'}
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                      {isRtl ? 'عدد الطلاب' : 'Students Count'}
                    </label>
                    <input
                      type="number"
                      value={formData.studentsCount}
                      onChange={(e) => handleChange('studentsCount', e.target.value)}
                      className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                      placeholder={isRtl ? 'عدد الطلاب' : 'e.g. 45'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                      {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
                    </label>
                    <input
                      type="number"
                      value={formData.experienceYears}
                      onChange={(e) => handleChange('experienceYears', e.target.value)}
                      className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                      placeholder={isRtl ? 'سنوات الخبرة' : 'e.g. 8'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'اجمالي الحصص' : 'Total Sessions'}
                  </label>
                  <input
                    type="number"
                    value={formData.totalSessions}
                    onChange={(e) => handleChange('totalSessions', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    placeholder={isRtl ? 'عدد الحصص' : 'e.g. 12'}
                  />
                </div>
              </div>
            </div>

            {/* 2. Documents Upload Dropzones */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
              <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {isRtl ? 'المستندات والمراجعة' : 'Documents & Review'}
              </h3>
              
              <div className="space-y-6">
                
                {/* CV Dropzone */}
                <div className="space-y-2">
                  {cvFileName ? (
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-150">
                      <div className="flex items-center gap-3">
                        <FileText className="text-brand-500" size={20} />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-205">{cvFileName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCvFileName(null)}
                        className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 rounded-2xl border border-dashed border-slate-250 dark:border-slate-800 hover:border-brand-500 bg-white dark:bg-slate-955/20 transition-all">
                      <div className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-450 shadow-sm transition-transform group-hover:scale-110">
                          <Upload size={20} />
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          {isRtl ? 'رفع السيرة الذاتية' : 'Upload Resume / CV'}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                          {isRtl ? 'حتى 5 MB (PDF, DOC, DOCX)' : 'Up to 5 MB (PDF, DOC, DOCX)'}
                        </span>
                      </div>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => e.target.files[0] && setCvFileName(e.target.files[0].name)}
                      />
                    </label>
                  )}
                </div>

                {/* Certificates Dropzone */}
                <div className="space-y-2">
                  {certFileName ? (
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-955/40 rounded-2xl border border-slate-150">
                      <div className="flex items-center gap-3">
                        <FileText className="text-brand-500" size={20} />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-205">{certFileName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCertFileName(null)}
                        className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 rounded-2xl border border-dashed border-slate-255 dark:border-slate-800 hover:border-brand-500 bg-white dark:bg-slate-955/20 transition-all">
                      <div className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-450 shadow-sm transition-transform group-hover:scale-110">
                          <Upload size={20} />
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          {isRtl ? 'رفع الشهادات والأوراق' : 'Upload Certificates & Documents'}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                          {isRtl ? 'حتى 5 MB (PDF, PNG, JPG)' : 'Up to 5 MB (PDF, PNG, JPG)'}
                        </span>
                      </div>
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        className="hidden"
                        onChange={(e) => e.target.files[0] && setCertFileName(e.target.files[0].name)}
                      />
                    </label>
                  )}
                </div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* 4. Navigation Footer Buttons */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 max-w-4xl mx-auto">
        
        {/* Next / Save */}
        {step < 3 ? (
          <button
            type="button"
            onClick={handleNextStep}
            className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98] cursor-pointer text-center"
          >
            {isRtl ? 'التالي' : 'Next'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98] cursor-pointer text-center"
          >
            {isRtl ? 'حفظ التغييرات' : 'Save'}
          </button>
        )}

        {/* Previous / Cancel */}
        {step > 1 ? (
          <button
            type="button"
            onClick={handlePrevStep}
            className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer"
          >
            {isRtl ? 'السابق' : 'Previous'}
          </button>
        ) : (
          <button
            type="button"
            onClick={onCancel}
            className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer"
          >
            {isRtl ? 'إلغاء' : 'Cancel'}
          </button>
        )}

      </div>

    </div>
  )
}
