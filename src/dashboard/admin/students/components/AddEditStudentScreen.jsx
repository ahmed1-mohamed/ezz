import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import StudentStep1 from './steps/StudentStep1'
import StudentStep2 from './steps/StudentStep2'
import StudentStep3 from './steps/StudentStep3'

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
  const [step, setStep] = useState(1)

  const phonePrefix = student?.phone?.startsWith('+') ? student.phone.split(' ')[0] : '+20'
  const phoneNumberOnly = student?.phone?.includes(' ') ? student.phone.split(' ').slice(1).join(' ') : student?.phone || ''

  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes.find((c) => c.code === phonePrefix) || countryCodes[0]
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(phoneNumberOnly)
  const [parentSearch, setParentSearch] = useState('')
  const [selectedParentName, setSelectedParentName] = useState(student?.parentName || '')
  const [cvFileName, setCvFileName] = useState(null)
  const [certFileName, setCertFileName] = useState(null)

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

  const selectCountryCode = (country) => {
    setSelectedCountryCode(country)
    setIsDropdownOpen(false)
  }

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
            countryCodes={countryCodes}
            countries={countries}
            levels={levels}
            selectCountryCode={selectCountryCode}
          />
        )}

        {step === 2 && (
          <StudentStep2
            formData={formData}
            handleChange={handleChange}
            isRtl={isRtl}
            parentSearch={parentSearch}
            setParentSearch={setParentSearch}
            selectedParentName={selectedParentName}
            handleParentSelect={handleParentSelect}
            filteredParents={filteredParents}
          />
        )}

        {step === 3 && (
          <StudentStep3
            formData={formData}
            handleChange={handleChange}
            isRtl={isRtl}
            cvFileName={cvFileName}
            setCvFileName={setCvFileName}
            certFileName={certFileName}
            setCertFileName={setCertFileName}
          />
        )}
      </div>

      {/* 4. Navigation Footer Buttons */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 max-w-4xl mx-auto">
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
