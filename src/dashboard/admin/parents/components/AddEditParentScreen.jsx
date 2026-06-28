import { useState, useRef } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  Eye,
  EyeOff,
  Search,
  Check,
  Plus,
  UserPlus,
  ChevronDown,
  X,
} from 'lucide-react'

const countryCodes = [
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
]

const countries = [
  { name: 'مصر', nameEn: 'Egypt' },
  { name: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia' },
  { name: 'الإمارات العربية المتحدة', nameEn: 'UAE' },
  { name: 'الكويت', nameEn: 'Kuwait' },
  { name: 'قطر', nameEn: 'Qatar' },
]

const mockAvailableStudents = [
  {
    id: 1,
    name: 'أحمد خالد المنصور',
    email: 'student1@email.com',
    age: 10,
    level: 'متوسط',
    groupName: 'مجموعة القرآن أ',
    phone: '+96650100000',
    initial: 'أ',
  },
  {
    id: 2,
    name: 'أحمد خالد المنصور',
    email: 'student1@email.com',
    age: 10,
    level: 'متوسط',
    groupName: 'مجموعة القرآن أ',
    phone: '+96650100000',
    initial: 'أ',
  },
  {
    id: 3,
    name: 'سليمان خالد المنصور',
    email: 'soliman@email.com',
    age: 9,
    level: 'مبتدئ',
    groupName: 'مجموعة التجويد ب',
    phone: '+96650200000',
    initial: 'س',
  },
  {
    id: 4,
    name: 'يوسف محمد السعيد',
    email: 'youssef@email.com',
    age: 11,
    level: 'متقدم',
    groupName: 'مجموعة القراءات ج',
    phone: '+97150300000',
    initial: 'ي',
  },
  {
    id: 5,
    name: 'لينا عمر الحسن',
    email: 'lina@email.com',
    age: 8,
    level: 'مبتدئ',
    groupName: 'مجموعة القرآن أ',
    phone: '+96650400000',
    initial: 'ل',
  },
  {
    id: 6,
    name: 'ريم سالم المطيري',
    email: 'reem@email.com',
    age: 12,
    level: 'متقدم',
    groupName: 'مجموعة التجويد ب',
    phone: '+96650500000',
    initial: 'ر',
  },
]

export default function AddEditParentScreen({ parent = null, isRtl, onSave, onCancel }) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const initialPrefix = parent?.phonePrefix || '+966'
  const initialPhone = parent?.phone
    ? parent.phone.replace(initialPrefix, '').trim()
    : ''

  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes.find((c) => c.code === initialPrefix) || countryCodes[0]
  )
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(initialPhone)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [studentSearchTab, setStudentSearchTab] = useState('name')
  const [studentSearch, setStudentSearch] = useState('')
  const [selectedStudents, setSelectedStudents] = useState([])
  const [showStudentSearch, setShowStudentSearch] = useState(false)
  const [formData, setFormData] = useState({
    name: parent?.name || '',
    nameEn: parent?.nameEn || '',
    email: parent?.email || '',
    country: parent?.country || 'المملكة العربية السعودية',
    birthDate: parent?.birthDate || '',
    status: parent?.status || 'Active',
    gender: parent?.gender || 'male',
    password: '',
    confirmPassword: '',
    notes: '',
    notesEn: '',
    profileImage: parent?.profileImage || null,
  })

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => handleChange('profileImage', reader.result)
    reader.readAsDataURL(file)
  }

  const filteredStudents = mockAvailableStudents.filter((s) => {
    const query = studentSearch.toLowerCase()
    if (studentSearchTab === 'name') return s.name.toLowerCase().includes(query)
    if (studentSearchTab === 'email') return s.email.toLowerCase().includes(query)
    if (studentSearchTab === 'phone') return s.phone.includes(query)
    return true
  })

  const toggleStudentSelect = (student) => {
    setSelectedStudents((prev) =>
      prev.find((s) => s.id === student.id)
        ? prev.filter((s) => s.id !== student.id)
        : [...prev, student]
    )
  }

  const isStudentSelected = (id) => selectedStudents.some((s) => s.id === id)

  const handleSave = (e) => {
    e.preventDefault()
    if (!formData.name) {
      alert(isRtl ? 'الرجاء إدخال الاسم!' : 'Please enter Name!')
      return
    }
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert(isRtl ? 'كلمة المرور وتأكيدها غير متطابقتين!' : 'Passwords do not match!')
      return
    }
    onSave({
      ...formData,
      phone: `${selectedCountryCode.code} ${phoneVal.trim()}`,
      phonePrefix: selectedCountryCode.code,
      children: selectedStudents.map((s) => s.id),
      childrenCount: selectedStudents.length,
    })
  }

  const initial = formData.name ? formData.name.trim().charAt(0) : 'أ'

  return (
    <div className="space-y-6 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all hover:scale-105"
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'أولياء الأمور' : 'Parents'}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {parent
                  ? (isRtl ? 'تعديل بيانات ولي الأمر' : 'Edit Parent')
                  : (isRtl ? 'إضافة ولي أمر جديد' : 'Add New Parent')}
              </span>
            </h1>
          </div>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800"
        >
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-4xl mx-auto">

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
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all"
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
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
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
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-end"
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
                    className="h-12 flex items-center gap-1.5 px-3 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
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
                  className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
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
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
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
              className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-950 border border-transparent rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-100 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
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
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 resize-none"
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
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 resize-none text-end"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
          <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-end">
            {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
                {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
              </label>
              <div className="relative" dir="ltr">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="••••••••••••••••••••"
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
                {isRtl ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative" dir="ltr">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="••••••••••••••••••••"
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowStudentSearch(!showStudentSearch)}
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all"
            >
              <Plus size={16} />
              <span>{isRtl ? 'إضافة' : 'Add'}</span>
            </button>
            <h3 className="text-base font-bold text-slate-800 dark:text-white text-end">
              {isRtl ? 'أضف الطالب' : 'Add Student'}
            </h3>
          </div>

          {selectedStudents.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-end">
              {selectedStudents.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center gap-2 px-3 py-1.5 bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 rounded-full text-xs font-semibold"
                >
                  <button
                    type="button"
                    onClick={() => toggleStudentSelect(s)}
                    className="text-brand-400 hover:text-brand-700 transition-colors"
                  >
                    <X size={12} />
                  </button>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          )}

          {showStudentSearch && (
            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">

              <div className="flex items-center justify-end gap-2 p-3 bg-slate-50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
                {[
                  { key: 'phone', label: isRtl ? 'بحث بالجوال' : 'By Phone' },
                  { key: 'email', label: isRtl ? 'بحث بالبريد' : 'By Email' },
                  { key: 'name', label: isRtl ? 'بحث بالاسم' : 'By Name' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => { setStudentSearchTab(tab.key); setStudentSearch('') }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${studentSearchTab === tab.key
                      ? 'bg-brand-600 text-white'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-3 border-b border-slate-100 dark:border-slate-800">
                <div className="relative">
                  <Search size={16} className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3' : 'left-3'} text-slate-400`} />
                  <input
                    type="text"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    placeholder={isRtl ? 'ابحث باسم الطالب..' : 'Search student name..'}
                    className={`w-full bg-slate-50 dark:bg-slate-950 rounded-xl py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none ${isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'}`}
                  />
                </div>
              </div>

              <div className="max-h-72 overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/50 dark:bg-slate-950/10 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400">
                    {isRtl ? `الطلاب المتاحون (${filteredStudents.length})` : `Available Students (${filteredStudents.length})`}
                  </span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredStudents.map((student) => {
                    const selected = isStudentSelected(student.id)
                    return (
                      <div
                        key={student.id}
                        className={`p-4 transition-colors ${selected ? 'bg-brand-50/50 dark:bg-brand-950/10' : 'hover:bg-slate-50/50 dark:hover:bg-slate-950/20'}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <button
                            type="button"
                            onClick={() => toggleStudentSelect(student)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selected
                              ? 'bg-brand-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-brand-950/20 hover:text-brand-600'
                              }`}
                          >
                            {selected ? (
                              <span className="flex items-center gap-1"><Check size={12} /> {isRtl ? 'محدد' : 'Selected'}</span>
                            ) : (
                              isRtl ? 'اختر' : 'Select'
                            )}
                          </button>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{student.name}</span>
                            <div className="h-8 w-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold">
                              {student.initial}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 text-end">
                          <div>
                            <p className="font-semibold text-slate-400 dark:text-slate-500 text-[10px]">{isRtl ? 'المجموعة' : 'Group'}</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300">{student.groupName}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-400 dark:text-slate-500 text-[10px]">{isRtl ? 'المستوى' : 'Level'}</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300">{student.level}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-400 dark:text-slate-500 text-[10px]">{isRtl ? 'البريد' : 'Email'}</p>
                            <p className="font-bold text-slate-600 dark:text-slate-400 truncate" dir="ltr">{student.email}</p>
                          </div>
                        </div>
                        <div className="flex justify-end mt-1">
                          <p className="text-xs text-slate-400 dark:text-slate-500" dir="ltr">{student.phone}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            {isRtl ? 'إلغاء' : 'Cancel'}
          </button>
          <button
            type="submit"
            className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-lg shadow-brand-500/20 transition-all active:scale-[0.98]"
          >
            <UserPlus size={18} />
            <span>
              {parent
                ? (isRtl ? 'حفظ التعديلات' : 'Save Changes')
                : (isRtl ? 'إضافة ولي الأمر' : 'Add Parent')}
            </span>
          </button>
        </div>

      </form>
    </div>
  )
}