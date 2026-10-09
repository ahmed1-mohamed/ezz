import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import api from '@/shared/services/api/axiosConfig'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import StudentStep1 from './steps/StudentStep1'
import StudentStep2 from './steps/StudentStep2'

export default function AddEditStudentScreen({
  student = null,
  isRtl,
  onSave,
  onCancel
}) {
  const isEdit = Boolean(student)
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const [step, setStep] = useState(1)

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

  // Fetch full details if editing
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

  // Fetch Countries, Levels, Parents
  useEffect(() => {
    // 1. Countries
    api.get('/api/v1/countries', { skipLang: false })
      .then((res) => {
        const raw = res.data?.data || res.data || []
        if (Array.isArray(raw) && raw.length > 0) {
          setCountriesList(raw)
          const codes = raw.map((c) => ({
            code: c.phoneCode || '',
            flag: c.flag || '🌍',
            name: c.name || ''
          })).filter((c) => c.code)
          codes.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ar', { sensitivity: 'base' }))
          setCountryCodesList(codes)
        }
      })
      .catch((err) => console.error('Error fetching countries:', err))

    // 2. Student Levels
    adminLevelsApi.fetchLevels()
      .then((res) => {
        const rawLevels = res?.data || res || []
        const list = Array.isArray(rawLevels) ? rawLevels : (rawLevels.data || [])
        setLevelsList(list)
        if (!formData.studentLevel && list.length > 0 && !student) {
          handleChange('studentLevel', list[0].id || list[0]._id)
        }
      })
      .catch((err) => console.error('Error fetching student levels:', err))

    // 3. Parents
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
  }, [])

  const handleNextStep = () => {
    if (step === 1) {
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
      setStep(2)
    } else if (step === 2) {
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
      }
      handleSave()
    }
  }

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1))
  }

  const handleParentSelect = (parentId, parentName) => {
    setSelectedParentId(parentId)
    setSelectedParentName(parentName)
    handleChange('parent', parentId)
  }

  const handleSave = () => {
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
      }
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
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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

         <div className="flex items-center gap-2 self-start sm:self-center">
          <span
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              step === 1
                ? 'bg-[#005953] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
            }`}
          >
            1. {isRtl ? 'البيانات الشخصية' : 'Personal Info'}
          </span>
          <span
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              step === 2
                ? 'bg-[#005953] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
            }`}
          >
            2. {isRtl ? 'الأمان وولي الأمر' : 'Security & Parent'}
          </span>
        </div>
      </div>

       {step === 1 && (
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
      )}

      {step === 2 && (
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
        />
      )}

       <div className="flex items-center justify-between max-w-4xl mx-auto pt-4 border-t border-slate-100 dark:border-slate-800">
        {step > 1 ? (
          <button
            type="button"
            onClick={handlePrevStep}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-2xl font-bold text-sm transition-all cursor-pointer"
          >
            {isRtl ? 'السابق' : 'Previous'}
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-600 dark:text-slate-300 rounded-2xl font-bold text-sm transition-all cursor-pointer"
          >
            {isRtl ? 'إلغاء' : 'Cancel'}
          </button>

          <button
            type="button"
            onClick={handleNextStep}
            className="px-8 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl font-bold text-sm transition-all shadow-md shadow-brand-500/10 active:scale-95 cursor-pointer"
          >
            {step === 1
              ? (isRtl ? 'التالي: الأمان وولي الأمر' : 'Next: Security & Parent')
              : (isEdit ? (isRtl ? 'حفظ التعديلات' : 'Save Changes') : (isRtl ? 'تأكيد وحفظ الطالب' : 'Confirm & Save'))}
          </button>
        </div>
      </div>
    </div>
  )
}