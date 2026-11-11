import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import api from '@/shared/services/api/axiosConfig'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import {
  sortCountries,
  sortCountryCodes,
  normalizeCountries,
  toDialCodeOptions,
  resolveCountryIdFromLabel,
  splitPhoneNumber,
  joinPhoneNumber,
  DEFAULT_DIAL_CODE
} from '@/shared/utils/countryUtils'
import StudentStep1 from './steps/StudentStep1'
import StudentStep2 from './steps/StudentStep2'

const getLevelName = (lvl) => (typeof lvl?.name === 'object' && lvl?.name !== null ? [lvl.name.ar, lvl.name.en] : [lvl?.name])

const resolveLevelId = (levels, ...labels) => {
  const values = labels.filter(Boolean)
  const match = levels.find((lvl) => getLevelName(lvl).some((n) => n && values.includes(n)))
  return match ? (match.id || match._id) : ''
}

export default function AddEditStudentScreen({
  student = null,
  isRtl,
  isSaving = false,
  onSave,
  onCancel
}) {
  const isEdit = Boolean(student)
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const [countriesList, setCountriesList] = useState([])
  const [countryCodesList, setCountryCodesList] = useState([])
  const [levelsList, setLevelsList] = useState([])
  const [parentsList, setParentsList] = useState([])
  const [selectedCountryCode, setSelectedCountryCode] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState('')
  const [parentSearch, setParentSearch] = useState('')
  const [selectedParentId, setSelectedParentId] = useState(student?.parent?.parent_id || '')
  const [selectedParentName, setSelectedParentName] = useState(student?.parent?.name || '')
  const [formData, setFormData] = useState({
    name: student?.name?.ar || '',
    nameEn: student?.name?.en || '',
    email: student?.email || '',
    country: '',
    studentLevel: '',
    birthDate: student?.birthDate ? String(student.birthDate).slice(0, 10) : '',
    password: '',
    confirmPassword: '',
    profileImageFile: null,
    profileImage: student?.image || null
  })
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }
  useEffect(() => {
    api.get('/api/v1/countries')
      .then((res) => {
        const raw = res.data?.data || res.data || []
        if (!Array.isArray(raw) || raw.length === 0) return
        const normalized = normalizeCountries(raw)
        setCountriesList(sortCountries(normalized, isRtl))
        setCountryCodesList(sortCountryCodes(toDialCodeOptions(normalized), isRtl))
      })
      .catch((err) => console.error('Error fetching countries:', err))
    adminLevelsApi.fetchLevels()
      .then((res) => {
        const list = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : [])
        setLevelsList(list)
      })
      .catch((err) => console.error('Error fetching student levels:', err))
  }, [isRtl])
  useEffect(() => {
    let active = true
    const trimmed = parentSearch.trim()
    const timer = setTimeout(async () => {
      try {
        const res = await api.get('/api/v1/parents/localized/all', {
          params: { search: trimmed || undefined, limit: 50 }
        })
        if (!active) return
        const rawParents = res.data?.data || (Array.isArray(res.data) ? res.data : [])
        setParentsList(rawParents.map((p) => {
          const name = typeof p.name === 'string' ? p.name : (p.name?.ar || p.name?.en || '')
          return {
            id: p.parent_id || p.id || p._id,
            name,
            email: p.email || '',
            phone: p.phone || '',
            initial: (name || 'و').trim().charAt(0)
          }
        }))
      } catch (err) {
        console.error('Error fetching parents:', err)
        if (active) setParentsList([])
      }
    }, trimmed ? 300 : 0)
    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [parentSearch])
  useEffect(() => {
    if (countryCodesList.length === 0) return
    if (student?.phone) {
      const { code, number } = splitPhoneNumber(student.phone, countryCodesList)
      setSelectedCountryCode(code)
      setPhoneVal(number)
    } else {
      setSelectedCountryCode((prev) => prev || countryCodesList.find((c) => c.code === DEFAULT_DIAL_CODE) || null)
    }
  }, [student, countryCodesList])
  useEffect(() => {
    if (!student || countriesList.length === 0) return
    const countryId = resolveCountryIdFromLabel(countriesList, student.countryAr, student.countryEn, student.country)
    if (countryId) setFormData((prev) => ({ ...prev, country: countryId }))
  }, [student, countriesList])
  useEffect(() => {
    if (levelsList.length === 0) return
    if (student) {
      const levelId = resolveLevelId(levelsList, student.studentLevelAr, student.studentLevelEn, student.studentLevel)
      if (levelId) setFormData((prev) => ({ ...prev, studentLevel: levelId }))
    } else {
      setFormData((prev) => (prev.studentLevel ? prev : { ...prev, studentLevel: levelsList[0].id || levelsList[0]._id }))
    }
  }, [student, levelsList])
  const handleParentSelect = (parentId, parentName) => {
    setSelectedParentId(parentId)
    setSelectedParentName(parentName)
  }
  const handleSave = () => {
    const nameAr = formData.name.trim()
    const nameEn = formData.nameEn.trim()
    const fail = (ar, en) => {
      showErrorToast(isRtl ? ar : en, isRtl)
      return false
    }
    const isValid = (() => {
      if (nameAr.length < 2 || nameAr.length > 50) return fail('الاسم بالعربية يجب أن يكون بين 2 و 50 حرفًا', 'Arabic name must be 2–50 characters')
      if (nameEn.length < 2 || nameEn.length > 50) return fail('الاسم بالإنجليزية يجب أن يكون بين 2 و 50 حرفًا', 'English name must be 2–50 characters')
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) return fail('الرجاء إدخال بريد إلكتروني صالح', 'Please enter a valid email')
      if (!selectedCountryCode?.code) return fail('الرجاء اختيار مفتاح الدولة للهاتف', 'Please select the phone country code')
      if (!/^\d{6,14}$/.test(phoneVal.replace(/\D/g, '').replace(/^0+/, ''))) return fail('الرجاء إدخال رقم هاتف صحيح', 'Please enter a valid phone number')
      if (!formData.country) return fail('الرجاء اختيار الدولة', 'Please select a country')
      if (!isEdit && !formData.birthDate) return fail('الرجاء إدخال تاريخ الميلاد', 'Please enter birth date')
      if (!formData.studentLevel) return fail('الرجاء اختيار المستوى التعليمي', 'Please select student level')
      if (!selectedParentId) return fail('الرجاء اختيار ولي الأمر للطالب', 'Please select a parent for the student')
      if (!isEdit) {
        if (formData.password.length < 6) return fail('كلمة المرور يجب أن لا تقل عن 6 أحرف', 'Password must be at least 6 characters')
        if (formData.password !== formData.confirmPassword) return fail('كلمة المرور وتأكيد كلمة المرور غير متطابقتين', 'Passwords do not match')
      }
      return true
    })()
    if (!isValid) return
    onSave({
      name: { ar: nameAr, en: nameEn },
      email: formData.email.trim(),
      phone: joinPhoneNumber(selectedCountryCode.code, phoneVal),
      country: formData.country,
      birthDate: formData.birthDate,
      studentLevel: formData.studentLevel,
      parent: selectedParentId,
      ...(isEdit ? {} : { password: formData.password, confirmPassword: formData.confirmPassword }),
      profileImageFile: formData.profileImageFile
    })
  }
  const selectCountryCode = (country) => {
    setSelectedCountryCode(country)
    setIsDropdownOpen(false)
  }
  const filteredParents = parentsList
  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn max-w-5xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105 shrink-0"
          title={isRtl ? 'إلغاء' : 'Cancel'}
        >
          <BackArrow size={20} />
        </button>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
            {isEdit
              ? (isRtl ? 'تعديل بيانات الطالب' : 'Edit Student')
              : (isRtl ? 'إضافة طالب جديد' : 'Add New Student')}
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-semibold">
            {isEdit
              ? (isRtl ? 'تحديث وتعديل ملف الطالب في النظام' : 'Update student record')
              : (isRtl ? 'تسجيل طالب جديد وربطه بولي الأمر والمستوى التعليمي' : 'Register new student and link parent & level')}
          </p>
        </div>
      </div>
      <StudentStep1
        formData={formData}
        handleChange={handleChange}
        isRtl={isRtl}
        selectedCountryCode={selectedCountryCode}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        phoneVal={phoneVal}
        setPhoneVal={setPhoneVal}
        countryCodes={countryCodesList}
        countries={countriesList}
        levels={levelsList}
        selectCountryCode={selectCountryCode}
        isEdit={isEdit}
      />
      <StudentStep2
        formData={formData}
        handleChange={handleChange}
        isRtl={isRtl}
        parentSearch={parentSearch}
        setParentSearch={setParentSearch}
        selectedParentId={selectedParentId}
        selectedParentName={selectedParentName}
        handleParentSelect={handleParentSelect}
        filteredParents={filteredParents}
        isEdit={isEdit}
      />
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSaving}
          className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-600 dark:text-slate-300 rounded-2xl font-bold text-sm transition-all cursor-pointer disabled:opacity-50"
        >
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className="px-8 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl font-bold text-sm transition-all shadow-md shadow-brand-500/10 active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
          {isEdit
            ? (isRtl ? 'حفظ التعديلات' : 'Save Changes')
            : (isRtl ? 'تأكيد وحفظ الطالب' : 'Confirm & Save')}
        </button>
      </div>
    </div>
  )
}
