import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import api from '@/shared/services/api/axiosConfig'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentStep1 from './steps/StudentStep1'
import StudentStep2 from './steps/StudentStep2'

const levels = [
  { value: 'مبتدئ', label: 'مبتدئ (Beginner)' },
  { value: 'متوسط', label: 'متوسط (Intermediate)' },
  { value: 'متقدم', label: 'متقدم (Advanced)' }
]



export default function AddEditStudentScreen({
  student = null,
  isRtl,
  onSave,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const [step, setStep] = useState(1)

  const [countriesList, setCountriesList] = useState([{ name: '🇪🇬 مصر', nameEn: 'Egypt' }])
  const [countryCodesList, setCountryCodesList] = useState([{ code: '+20', flag: '🇪🇬', name: 'Egypt' }])
  const [parentsList, setParentsList] = useState([])

  const phoneNumberOnly = student?.phone?.includes(' ') ? student.phone.split(' ').slice(1).join(' ') : student?.phone || ''

  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodesList[0]
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(phoneNumberOnly)
  const [parentSearch, setParentSearch] = useState('')
  const [selectedParentName, setSelectedParentName] = useState(student?.parentName || '')

  const [formData, setFormData] = useState({
    name: typeof student?.name === 'string' ? student.name : (student?.name?.ar || student?.name?.en || student?.name_ar || student?.arabicName || ''),
    nameEn: (typeof student?.name === 'object' && student?.name?.en) ? student.name.en : (student?.nameEn || student?.name_en || student?.englishName || ''),
    age: student?.age || '',
    email: student?.email || '',
    country: student?.country || '',
    level: student?.level || 'متوسط',
    groupName: student?.groupName || 'مجموعة القرآن أ',
    parentName: student?.parentName || '',
    remainingSessions: student?.remainingSessions ?? 8,
    totalSessions: student?.totalSessions ?? 12,
    subscriptionStatus: student?.subscriptionStatus || 'Active',
    notes: student?.notes || '',
    profileImageFile: null,
    profileImage: student?.image || student?.profileImage || student?.avatar || student?.photo || student?.picture || student?.profilePicture || null,
    password: '',
    confirmPassword: '',
    studentsCount: 45,
    experienceYears: 8
  })

  // Fetch complete student details if we are in Edit mode
  useEffect(() => {
    if (student) {
      const studentId = student._id || student.id || student.studentId || student.userId;
      if (studentId) {
        studentsApi.fetchStudentById(studentId)
          .then(res => {
            const fullData = res?.data || res;
            if (fullData) {
              setFormData(prev => ({
                ...prev,
                name: typeof fullData.name === 'string' ? fullData.name : (fullData.name?.ar || fullData.name?.en || fullData.name_ar || fullData.arabicName || prev.name),
                nameEn: (typeof fullData.name === 'object' && fullData.name?.en) ? fullData.name.en : (fullData.nameEn || fullData.name_en || fullData.englishName || prev.nameEn),
                profileImage: fullData.image || fullData.profileImage || fullData.avatar || fullData.photo || fullData.picture || fullData.profilePicture || prev.profileImage,
                phone: fullData.phone || prev.phone,
                country: fullData.country || prev.country
              }));
              
              if (fullData.phone) {
                const prefix = fullData.phone.startsWith('+') ? fullData.phone.split(' ')[0] : '+20';
                setPhoneVal(fullData.phone.includes(' ') ? fullData.phone.split(' ').slice(1).join(' ') : fullData.phone);
                // Country code update will happen in the countries fetch effect or here if countryCodesList is ready
              }
            }
          })
          .catch(err => console.error("Failed to fetch full student details:", err));
      }
    }
  }, [student]);

  useEffect(() => {
    // Fetch countries
    api.get('/api/v1/countries').then(res => {
      const data = res.data?.data || res.data || [];
      if (Array.isArray(data) && data.length > 0) {
        const fetchedCountries = data.map(c => ({
          id: c.id,
          name: c.name || '',
          nameEn: c.name || ''
        }));
        const fetchedCodes = data.map(c => ({
          code: c.phoneCode || '',
          flag: c.flag || '',
          name: c.name || ''
        }));

        setCountriesList(fetchedCountries.length ? fetchedCountries : [{ id: '', name: '🇪🇬 مصر', nameEn: 'Egypt' }]);
        setCountryCodesList(fetchedCodes.length ? fetchedCodes : [{ code: '+20', flag: '🇪🇬', name: 'Egypt' }]);

        if (!student?.country && fetchedCountries.length > 0) {
          handleChange('country', fetchedCountries[0].id);
        } else if (student?.country) {
          const match = fetchedCountries.find(c => 
            c.name === student.country || 
            c.id === student.country ||
            (student.country && c.name && student.country.includes(c.name))
          );
          if (match) handleChange('country', match.id);
        }

        const prefix = student?.phone?.startsWith('+') ? student.phone.split(' ')[0] : '+20';
        const matchCode = fetchedCodes.find((c) => c.code === prefix) || fetchedCodes[0];
        if (matchCode) setSelectedCountryCode(matchCode);
      }
    }).catch(err => console.error('Error fetching countries:', err));

    api.get('/api/v1/parents/localized/all').then(res => {
      const data = res.data?.data || res.data || [];
      if (Array.isArray(data)) {
        const fetchedParents = data.map(p => ({
          id: p.id || p._id,
          name: p.name || p.nameEn || '',
          email: p.email || '',
          phone: p.phone || '',
          initial: (p.name || p.nameEn || '?').charAt(0)
        }));
        setParentsList(fetchedParents);
      }
    }).catch(err => console.error('Error fetching parents:', err));
  }, [student?.phone]);

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
      handleSave({ preventDefault: () => { } })
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

  const filteredParents = parentsList.filter(
    (p) =>
      (p.name && p.name.includes(parentSearch)) ||
      (p.email && p.email.includes(parentSearch)) ||
      (p.phone && p.phone.includes(parentSearch))
  )

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
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

      {!student && (
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950/20 p-4 rounded-2xl border border-slate-100 dark:border-slate-850/40">
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${step >= 1 ? 'bg-[#005953] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>1</span>
            <span className="text-xs font-bold text-slate-755 dark:text-slate-200">{isRtl ? 'البيانات الشخصية' : 'Personal Info'}</span>
          </div>
          <div className="h-0.5 w-10 bg-slate-200 dark:bg-slate-850" />
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${step >= 2 ? 'bg-[#005953] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>2</span>
            <span className="text-xs font-bold text-slate-755 dark:text-slate-200">{isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}</span>
          </div>
        </div>
      )}

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
            countryCodes={countryCodesList}
            countries={countriesList}
            levels={levels}
            selectCountryCode={selectCountryCode}
            isEdit={!!student}
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
      </div>

      <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 max-w-4xl mx-auto">
        {step < 2 && !student ? (
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