import { useState, useRef, useEffect, useMemo } from 'react'
import { ArrowRight, ArrowLeft, Save, Loader2 } from 'lucide-react'
import ParentPersonalInfo from './steps/ParentPersonalInfo'
import ParentSecurity from './steps/ParentSecurity'
import ParentStudentLinkage from './steps/ParentStudentLinkage'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import {
  sortCountries,
  sortCountryCodes,
  normalizeCountries,
  fetchCountries,
  toDialCodeOptions,
  joinPhoneNumber,
  DEFAULT_DIAL_CODE
} from '@/shared/utils/countryUtils'

export default function AddEditParentScreen({ isRtl, isSaving = false, onSave, onCancel }) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const [apiCountries, setApiCountries] = useState([])
  const [selectedCountryCode, setSelectedCountryCode] = useState(null)
  const [phoneVal, setPhoneVal] = useState('')
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [apiStudents, setApiStudents] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [studentSearchTab, setStudentSearchTab] = useState('name')
  const [studentSearch, setStudentSearch] = useState('')
  const [selectedStudents, setSelectedStudents] = useState([])
  const [showStudentSearch, setShowStudentSearch] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
    profileImageFile: null,
  })

  useEffect(() => {
    let isMounted = true
    fetchCountries().then((list) => {
      if (!isMounted || list.length === 0) return
      const normalized = sortCountries(normalizeCountries(list), isRtl)
      setApiCountries(normalized)
      setSelectedCountryCode((prev) => prev || toDialCodeOptions(normalized).find((c) => c.code === DEFAULT_DIAL_CODE) || null)
    })

    studentsApi.fetchAllLocalizedStudents({ limit: 1000 })
      .then((res) => {
        if (!isMounted) return
        const list = Array.isArray(res?.data) ? res.data : []
        setApiStudents(list.map((s) => ({ ...s, id: s.student_id })))
      })
      .catch((err) => console.error('Failed to load students:', err))

    return () => {
      isMounted = false
    }
  }, [isRtl])

  const dialCodes = useMemo(() => sortCountryCodes(toDialCodeOptions(apiCountries), isRtl), [apiCountries, isRtl])

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    e.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) {
      showErrorToast(isRtl ? 'الرجاء اختيار ملف صورة صالح' : 'Please choose a valid image file', isRtl)
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      showErrorToast(isRtl ? 'حجم الصورة يجب ألا يتجاوز 5 ميجابايت' : 'Image must be 5MB or less', isRtl)
      return
    }
    setFormData((prev) => ({ ...prev, profileImage: URL.createObjectURL(file), profileImageFile: file }))
  }

  const filteredStudents = apiStudents.filter((s) => {
    const query = studentSearch.toLowerCase()
    const nameStr = typeof s.name === 'object' ? (s.name?.ar || s.name?.en || '') : (s.name || '')
    if (studentSearchTab === 'name') return nameStr.toLowerCase().includes(query)
    if (studentSearchTab === 'email') return (s.email || '').toLowerCase().includes(query)
    if (studentSearchTab === 'phone') return (s.phone || '').includes(query)
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
    const nameAr = formData.name.trim()
    const nameEn = formData.nameEn.trim()
    const phone = joinPhoneNumber(selectedCountryCode?.code, phoneVal)
    const fail = (ar, en) => showErrorToast(isRtl ? ar : en, isRtl)

    if (nameAr.length < 2 || nameAr.length > 50) return fail('الاسم بالعربية يجب أن يكون بين 2 و 50 حرفًا', 'Arabic name must be 2–50 characters')
    if (nameEn.length < 2 || nameEn.length > 50) return fail('الاسم بالإنجليزية يجب أن يكون بين 2 و 50 حرفًا', 'English name must be 2–50 characters')
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) return fail('الرجاء إدخال بريد إلكتروني صالح', 'Please enter a valid email')
    if (!phone || phone.length < 8) return fail('الرجاء إدخال رقم هاتف صحيح مع مفتاح الدولة', 'Please enter a valid phone number with country code')
    if (!formData.country) return fail('الرجاء اختيار الدولة', 'Please select a country')
    if (formData.password.length < 6) return fail('كلمة المرور يجب أن لا تقل عن 6 أحرف', 'Password must be at least 6 characters')
    if (formData.password !== formData.confirmPassword) return fail('كلمة المرور وتأكيدها غير متطابقتين', 'Passwords do not match')

    onSave({
      name: { ar: nameAr, en: nameEn },
      email: formData.email.trim(),
      phone,
      country: formData.country,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      imageFile: formData.profileImageFile,
      childrenIds: selectedStudents.map((s) => s.id),
    })
  }

  const initial = formData.name ? formData.name.trim().charAt(0) : '?'

  return (
    <div className="space-y-6 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all hover:scale-105 shrink-0"
          >
            <BackArrow size={20} />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white flex flex-wrap items-center gap-x-2">
            <span>{isRtl ? 'أولياء الأمور' : 'Parents'}</span>
            <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-semibold text-base sm:text-lg">
              {isRtl ? 'إضافة ولي أمر جديد' : 'Add New Parent'}
            </span>
          </h1>
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
        <ParentPersonalInfo
          formData={formData}
          handleChange={handleChange}
          isRtl={isRtl}
          fileInputRef={fileInputRef}
          handleImageSelect={handleImageSelect}
          selectedCountryCode={selectedCountryCode}
          isPhoneDropdownOpen={isPhoneDropdownOpen}
          setIsPhoneDropdownOpen={setIsPhoneDropdownOpen}
          phoneVal={phoneVal}
          setPhoneVal={setPhoneVal}
          isCountryDropdownOpen={isCountryDropdownOpen}
          setIsCountryDropdownOpen={setIsCountryDropdownOpen}
          countries={apiCountries}
          setSelectedCountryCode={setSelectedCountryCode}
          dynamicCountryCodes={dialCodes}
          initial={initial}
        />

        <ParentSecurity
          formData={formData}
          handleChange={handleChange}
          isRtl={isRtl}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
        />

        <ParentStudentLinkage
          isRtl={isRtl}
          showStudentSearch={showStudentSearch}
          setShowStudentSearch={setShowStudentSearch}
          selectedStudents={selectedStudents}
          toggleStudentSelect={toggleStudentSelect}
          studentSearchTab={studentSearchTab}
          setStudentSearchTab={setStudentSearchTab}
          studentSearch={studentSearch}
          setStudentSearch={setStudentSearch}
          filteredStudents={filteredStudents}
          isStudentSelected={isStudentSelected}
        />

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isSaving}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 active:scale-95 cursor-pointer disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            <span>{isRtl ? 'إضافة ولي الأمر' : 'Add Parent'}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
