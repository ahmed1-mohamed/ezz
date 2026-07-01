import { useState, useRef, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Save } from 'lucide-react'
import ParentPersonalInfo from './steps/ParentPersonalInfo'
import ParentSecurity from './steps/ParentSecurity'
import ParentStudentLinkage from './steps/ParentStudentLinkage'
import { landingApi } from '@/shared/services/api/landingApi'
import { studentsApi } from '@/shared/services/api/studentsApi'


export default function AddEditParentScreen({ parent = null, isRtl, onSave, onCancel }) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const [apiCountries, setApiCountries] = useState([])
  const [selectedCountryCode, setSelectedCountryCode] = useState({ code: '', flag: '🌐', name: 'Loading...' })
  const [phoneVal, setPhoneVal] = useState('')
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const res = await landingApi.fetchCountries();
        const fetchedCountries = Array.isArray(res) ? res : (res?.data || []);
        if (fetchedCountries.length > 0) {
          setApiCountries(fetchedCountries);

          let prefix = parent?.phonePrefix;
          let phonePart = parent?.phone || '';

          if (parent?.phone && !parent?.phonePrefix) {
            const matchedCode = fetchedCountries.find(c => parent.phone.startsWith(c.phoneCode));
            if (matchedCode) {
              prefix = matchedCode.phoneCode;
              phonePart = parent.phone.substring(prefix.length);
            } else {
              prefix = fetchedCountries[0]?.phoneCode || '+966';
            }
          } else {
            prefix = prefix || fetchedCountries[0]?.phoneCode || '+966';
            if (phonePart) phonePart = phonePart.replace(prefix, '');
          }

          setPhoneVal(phonePart);

          const matchedCountry = fetchedCountries.find(c => c.phoneCode === prefix) || fetchedCountries[0];
          if (matchedCountry) {
            setSelectedCountryCode({ code: matchedCountry.phoneCode, flag: matchedCountry.flag, name: matchedCountry.name });
          }

          if (!parent) {
            const saudi = fetchedCountries.find(c => c.name === 'المملكة العربية السعودية' || c.nameEn === 'Saudi Arabia' || c.phoneCode === '+966');
            if (saudi) setFormData(prev => ({ ...prev, country: saudi.id || saudi._id }));
          } else if (parent.country) {
            const matchedCountry = fetchedCountries.find(c => c._id === parent.country || c.id === parent.country || c.name === parent.country || parent.country.includes(c.name));
            if (matchedCountry) {
              setFormData(prev => ({ ...prev, country: matchedCountry._id || matchedCountry.id }));
            }
          }
        }
      } catch (err) {
        console.error('Failed to load countries', err);
      }
    };

    const loadStudents = async () => {
      try {
        const res = await studentsApi.fetchAllLocalizedStudents();
        if (res && Array.isArray(res)) {
          setApiStudents(res);
        } else if (res?.data && Array.isArray(res.data)) {
          setApiStudents(res.data);
        }
      } catch (err) {
        console.error('Failed to load students:', err);
      }
    };

    loadCountries();
    loadStudents();
  }, []);

  const [apiStudents, setApiStudents] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [studentSearchTab, setStudentSearchTab] = useState('name')
  const [studentSearch, setStudentSearch] = useState('')
  const [selectedStudents, setSelectedStudents] = useState([])
  const [showStudentSearch, setShowStudentSearch] = useState(false)
  const initialNameObj = typeof parent?.name === 'object' ? parent.name : null;
  const initialName = initialNameObj ? (initialNameObj.ar || '') : (parent?.name || '');
  const initialNameEn = initialNameObj ? (initialNameObj.en || '') : (parent?.nameEn || '');

  const [formData, setFormData] = useState({
    name: initialName,
    nameEn: initialNameEn,
    email: parent?.email || '',
    country: parent?.country || 'المملكة العربية السعودية',
    birthDate: parent?.birthDate || '',
    status: parent?.active ? 'Active' : (parent?.status || 'Active'),
    gender: parent?.gender || 'male',
    password: parent ? '********' : '',
    confirmPassword: parent ? '********' : '',
    notes: '',
    notesEn: '',
    profileImage: parent?.image || parent?.profileImage || null,
    profileImageFile: null,
  })

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, profileImage: reader.result, profileImageFile: file }))
    }
    reader.readAsDataURL(file)
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
    if (!formData.name) {
      alert(isRtl ? 'الرجاء إدخال الاسم!' : 'Please enter Name!')
      return
    }
    if (!parent && !formData.profileImageFile) {
      alert(isRtl ? 'الرجاء اختيار صورة!' : 'Please select an image!')
      return
    }
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert(isRtl ? 'كلمة المرور وتأكيدها غير متطابقتين!' : 'Passwords do not match!')
      return
    }
    onSave({
      ...formData,
      phone: `${selectedCountryCode?.code || ''}${phoneVal.trim()}`,
      phonePrefix: selectedCountryCode?.code || '',
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
          countryCodes={apiCountries.map(c => ({ code: c.phoneCode, flag: c.flag, name: c.name }))}
          countries={apiCountries}
          setSelectedCountryCode={setSelectedCountryCode}
          dynamicCountryCodes={apiCountries.map(c => ({ code: c.phoneCode, flag: c.flag, name: c.name }))}
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
            className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 active:scale-95 cursor-pointer"
          >
            <Save size={18} />
            <span>{isRtl ? 'حفظ التغييرات' : 'Save Changes'}</span>
          </button>
        </div>
      </form>
    </div>
  )
}