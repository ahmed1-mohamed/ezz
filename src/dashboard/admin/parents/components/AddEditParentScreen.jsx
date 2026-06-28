import { useState, useRef } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import ParentPersonalInfo from './steps/ParentPersonalInfo'
import ParentSecurity from './steps/ParentSecurity'
import ParentStudentLinkage from './steps/ParentStudentLinkage'

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
          countryCodes={countryCodes}
          countries={countries}
          setSelectedCountryCode={setSelectedCountryCode}
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
            className="px-8 py-3.5 bg-brand-650 hover:bg-brand-700 text-white font-bold rounded-2xl text-sm transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {isRtl ? 'حفظ التغييرات' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}