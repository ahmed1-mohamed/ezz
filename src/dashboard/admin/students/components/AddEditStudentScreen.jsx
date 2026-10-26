import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import api from '@/shared/services/api/axiosConfig'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import { sortCountries, sortCountryCodes, normalizeCountries } from '@/shared/utils/countryUtils'
import StudentStep1 from './steps/StudentStep1'
import StudentStep2 from './steps/StudentStep2'

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

  const phoneNumberOnly = student?.phone?.includes(' ')
    ? student.phone.split(' ').slice(1).join('')
    : (student?.phone ? student.phone.replace(/^\+\d{1,4}/, '') : '')

  const [selectedCountryCode, setSelectedCountryCode] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(phoneNumberOnly)
  const [parentSearch, setParentSearch] = useState('')
  const [selectedParentId, setSelectedParentId] = useState(student?.parent?.id || student?.parent?._id || student?.parent || '')
  const [selectedParentName, setSelectedParentName] = useState(student?.parent?.name || student?.parentName || '')

  const [formData, setFormData] = useState({
    name: typeof student?.name === 'string' ? student.name : (student?.name?.ar || student?.name?.en || ''),
    nameEn: typeof student?.name === 'object' && student?.name !== null ? (student.name.en || student.name.ar || '') : (student?.nameEn || ''),
    email: student?.email || '',
    country: student?.country || '',
    studentLevel: student?.studentLevel?.id || student?.studentLevel?._id || student?.studentLevel || '',
    birthDate: student?.birthDate ? String(student.birthDate).slice(0, 10) : '',
    parent: student?.parent?.id || student?.parent?._id || student?.parent || '',
    password: '',
    confirmPassword: '',
    profileImageFile: null,
    profileImage: student?.image || student?.profileImage || null
  })

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    if (student) {
      const studentId = student.student_id || student._id || student.id || student.user_id
      if (studentId) {
        studentsApi.fetchStudentById(studentId)
          .then((res) => {
            const fullData = res?.data || res
            if (fullData) {
              setFormData((prev) => ({
                ...prev,
                name: typeof fullData.name === 'string' ? fullData.name : (fullData.name?.ar || fullData.name?.en || prev.name),
                nameEn: typeof fullData.name === 'object' && fullData.name ? (fullData.name.en || fullData.name.ar || prev.nameEn) : prev.nameEn,
                email: fullData.email || prev.email,
                birthDate: fullData.birthDate ? String(fullData.birthDate).slice(0, 10) : prev.birthDate,
                studentLevel: fullData.studentLevel?.id || fullData.studentLevel?._id || fullData.studentLevel || prev.studentLevel,
                parent: fullData.parent?.id || fullData.parent?._id || fullData.parent || prev.parent,
                country: fullData.country || prev.country,
                profileImage: fullData.image || fullData.profileImage || prev.profileImage
              }))

              if (fullData.parent?.id || fullData.parent?._id) {
                setSelectedParentId(fullData.parent.id || fullData.parent._id)
                setSelectedParentName(fullData.parent.name || '')
              }

              if (fullData.phone) {
                const cleanPhone = String(fullData.phone)
                const matchedPrefix = countryCodesList.find((c) => cleanPhone.startsWith(c.code))
                if (matchedPrefix) {
                  setSelectedCountryCode(matchedPrefix)
                  setPhoneVal(cleanPhone.slice(matchedPrefix.code.length))
                } else {
                  setPhoneVal(cleanPhone)
                }
              }
            }
          })
          .catch((err) => console.error('Failed to fetch full student details:', err))
      }
    }
  }, [student, countryCodesList])

  useEffect(() => {
    api.get('/api/v1/countries', { skipLang: false })
      .then((res) => {
        const raw = res.data?.data || res.data || []
        if (Array.isArray(raw) && raw.length > 0) {
          const normalized = normalizeCountries(raw)
          setCountriesList(sortCountries(normalized, isRtl))
          const codes = normalized.map((c) => ({
            code: c.dialCode || c.phoneCode || '',
            flag: c.flag || '🌍',
            name: c.name || '',
            nameEn: c.nameEn || ''
          })).filter((c) => c.code)
          setCountryCodesList(sortCountryCodes(codes, isRtl))
        }
      })
      .catch((err) => console.error('Error fetching countries:', err))

    adminLevelsApi.fetchLevels()
      .then((res) => {
        const rawLevels = res?.data || res || []
        const list = Array.isArray(rawLevels) ? rawLevels : (rawLevels.data || [])
        setLevelsList(list)
        if (!student && list.length > 0) {
          setFormData((prev) => (!prev.studentLevel ? { ...prev, studentLevel: list[0].id || list[0]._id } : prev))
        }
      })
      .catch((err) => console.error('Error fetching student levels:', err))

    api.get('/api/v1/parents/localized/all')
      .then((res) => {
        const rawParents = res.data?.data || res.data || []
        if (Array.isArray(rawParents)) {
          const list = rawParents.map((p) => ({
            id: p.id || p._id || p.user_id,
            name: typeof p.name === 'string' ? p.name : (p.name?.ar || p.name?.en || 'ولي أمر'),
            email: p.email || '',
            phone: p.phone || '',
            initial: (typeof p.name === 'string' ? p.name : (p.name?.ar || 'و')).trim().charAt(0)
          }))
          setParentsList(list)
        }
      })
      .catch((err) => console.error('Error fetching parents:', err))
  }, [isRtl, student])

  const handleParentSelect = (parentId, parentName) => {
    setSelectedParentId(parentId)
    setSelectedParentName(parentName)
    handleChange('parent', parentId)
  }

  const handleSave = () => {
    if (!formData.name?.trim()) {
      showErrorToast(isRtl ? 'الرجاء إدخال اسم الطالب بالعربية!' : 'Please enter Arabic student name!', isRtl)
      return
    }
    if (!phoneVal?.trim()) {
      showErrorToast(isRtl ? 'الرجاء إدخال رقم الهاتف!' : 'Please enter phone number!', isRtl)
      return
    }
    if (!formData.email?.trim() && !isEdit) {
      showErrorToast(isRtl ? 'الرجاء إدخال البريد الإلكتروني!' : 'Please enter email address!', isRtl)
      return
    }
    if (!formData.country) {
      showErrorToast(isRtl ? 'الرجاء اختيار الدولة!' : 'Please select country!', isRtl)
      return
    }
    if (!formData.birthDate && !isEdit) {
      showErrorToast(isRtl ? 'الرجاء إدخال تاريخ الميلاد!' : 'Please enter birth date!', isRtl)
      return
    }
    if (!formData.studentLevel && !isEdit) {
      showErrorToast(isRtl ? 'الرجاء اختيار المستوى التعليمي!' : 'Please select student level!', isRtl)
      return
    }

    if (!isEdit) {
      if (!formData.password) {
        showErrorToast(isRtl ? 'الرجاء إدخال كلمة المرور!' : 'Please enter password!', isRtl)
        return
      }
      if (formData.password !== formData.confirmPassword) {
        showErrorToast(isRtl ? 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين!' : 'Passwords do not match!', isRtl)
        return
      }
      if (!selectedParentId && !formData.parent) {
        showErrorToast(isRtl ? 'الرجاء اختيار ولي الأمر للطالب!' : 'Please select a parent for the student!', isRtl)
        return
      }
    } else {
      if (formData.password && formData.password !== formData.confirmPassword) {
        showErrorToast(isRtl ? 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين!' : 'Passwords do not match!', isRtl)
        return
      }
    }

    const rawNumber = phoneVal.trim().replace(/^0+/, '').replace(/\s+/g, '')
    const fullPhone = `${selectedCountryCode?.code || ''}${rawNumber}`

    const payload = {
      ...formData,
      phone: fullPhone,
      parent: selectedParentId || formData.parent,
      studentLevel: formData.studentLevel,
      country: formData.country,
      name: {
        ar: formData.name.trim(),
        en: (formData.nameEn || formData.name).trim()
      },
      profileImageFile: formData.profileImageFile
    }

    onSave(payload)
  }

  const selectCountryCode = (country) => {
    setSelectedCountryCode(country)
    setIsDropdownOpen(false)
  }

  const filteredParents = parentsList.filter((p) => {
    if (!parentSearch.trim()) return true
    const q = parentSearch.toLowerCase()
    return (
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.email && p.email.toLowerCase().includes(q)) ||
      (p.phone && p.phone.includes(q))
    )
  })

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn max-w-5xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
          title={isRtl ? 'إلغاء' : 'Cancel'}
        >
          <BackArrow size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
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
        student={student}
      />

      
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
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