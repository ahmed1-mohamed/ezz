import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import TeacherProfileHeaderCard from './TeacherProfileHeaderCard'
import TeacherPersonalInfoCard from './TeacherPersonalInfoCard'
import TeacherAcademicInfoCard from './TeacherAcademicInfoCard'
import TeacherAvailabilityCard from './TeacherAvailabilityCard'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { sortCountries, normalizeCountries, resolveCountryIdFromLabel } from '@/shared/utils/countryUtils'
import TeacherSecurityCard from './TeacherSecurityCard'

const normalizeAchievements = (ach) => {
  if (!ach) return []
  if (Array.isArray(ach)) {
    return ach.map(item => {
      if (typeof item === 'object' && item !== null) {
        return {
          ar: item.ar || item.name || '',
          en: item.en || item.nameEn || item.ar || ''
        }
      }
      return { ar: String(item), en: String(item) }
    })
  }
  if (typeof ach === 'object' && ach !== null) {
    const arList = Array.isArray(ach.ar) ? ach.ar : []
    const enList = Array.isArray(ach.en) ? ach.en : []
    const maxLen = Math.max(arList.length, enList.length)
    const list = []
    for (let i = 0; i < maxLen; i++) {
      list.push({
        ar: arList[i] || '',
        en: enList[i] || arList[i] || ''
      })
    }
    return list
  }
  return []
}

const getInitialNameAr = (teacher) => {
  if (!teacher) return ''
  if (typeof teacher.name === 'object' && teacher.name !== null) {
    return teacher.name.ar || teacher.name.en || ''
  }
  return teacher.nameAr || (typeof teacher.name === 'string' ? teacher.name : '')
}

const getInitialNameEn = (teacher) => {
  if (!teacher) return ''
  if (typeof teacher.name === 'object' && teacher.name !== null) {
    return teacher.name.en || ''
  }
  return teacher.nameEn || ''
}

const getInitialDegreeAr = (teacher) => {
  if (!teacher) return ''
  if (typeof teacher.degree === 'object' && teacher.degree !== null) {
    return teacher.degree.ar || teacher.degree.en || ''
  }
  return teacher.degreeAr || (typeof teacher.degree === 'string' ? teacher.degree : '') || teacher.qualification || ''
}

const getInitialDegreeEn = (teacher) => {
  if (!teacher) return ''
  if (typeof teacher.degree === 'object' && teacher.degree !== null) {
    return teacher.degree.en || ''
  }
  return teacher.degreeEn || teacher.qualificationEn || ''
}

const getInitialBioAr = (teacher) => {
  if (!teacher) return ''
  if (typeof teacher.bio === 'object' && teacher.bio !== null) {
    return teacher.bio.ar || teacher.bio.en || ''
  }
  return teacher.aboutAr || (typeof teacher.bio === 'string' ? teacher.bio : '')
}

const getInitialBioEn = (teacher) => {
  if (!teacher) return ''
  if (typeof teacher.bio === 'object' && teacher.bio !== null) {
    return teacher.bio.en || ''
  }
  return teacher.aboutEn || ''
}

const getInitialFormData = (teacher) => ({
  name: getInitialNameAr(teacher),
  nameEn: getInitialNameEn(teacher),
  email: teacher?.email || '',
  phone: teacher?.phone || '',
  // detail endpoints return the country as "<flag> <name>"; it is resolved to an ID once countries load
  country: '',
  countryLabel: teacher?.country || '',
  hourlyRate: '',
  yearsOfExperience: teacher?.yearsOfExperience ?? 0,
  degreeAr: getInitialDegreeAr(teacher),
  degreeEn: getInitialDegreeEn(teacher),
  aboutAr: getInitialBioAr(teacher),
  aboutEn: getInitialBioEn(teacher),
  bio: { ar: getInitialBioAr(teacher), en: getInitialBioEn(teacher) },
  showOnWebsite: Boolean(teacher?.showOnWebsite),
  specializations: (teacher?.specializations || []).map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean),
  achievements: normalizeAchievements(teacher?.achievements),
  availability: Array.isArray(teacher?.availability) ? teacher.availability : [],
  image: teacher?.image || '',
  profileImage: teacher?.image || '',
  profileImageFile: null,
  password: '',
  confirmPassword: '',
})

export default function AddEditTeacherScreen({
  teacher = null,
  isRtl,
  t,
  isSaving = false,
  onSave,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const [apiCountries, setApiCountries] = useState([])
  const [apiCurricula, setApiCurricula] = useState([])

  const [formData, setFormData] = useState(() => getInitialFormData(teacher))

  const [prevTeacher, setPrevTeacher] = useState(teacher)
  if (prevTeacher !== teacher) {
    setPrevTeacher(teacher)
    setFormData(getInitialFormData(teacher))
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const [countriesRes, curriculaRes] = await Promise.all([
          landingApi.fetchCountries().catch(() => []),
          adminCurriculaApi.fetchCurricula().catch(() => [])
        ])

        const rawCountries = Array.isArray(countriesRes) ? countriesRes : (countriesRes?.data || [])
        const fetchedCountries = normalizeCountries(rawCountries)
        if (fetchedCountries.length > 0) {
          setApiCountries(sortCountries(fetchedCountries, isRtl))
        }

        const rawCurricula = curriculaRes?.data || (Array.isArray(curriculaRes) ? curriculaRes : [])
        if (Array.isArray(rawCurricula)) {
          setApiCurricula(rawCurricula)
        }
      } catch (err) {
        console.error('Failed to load countries or curricula', err)
      }
    }
    loadData()
  }, [teacher, isRtl])

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: typeof value === 'function' ? value(prev[key]) : value }))
  }

  useEffect(() => {
    if (!formData.country && formData.countryLabel && apiCountries.length > 0) {
      const countryId = resolveCountryIdFromLabel(apiCountries, formData.countryLabel)
      if (countryId) setFormData((prev) => ({ ...prev, country: countryId }))
    }
  }, [apiCountries, formData.country, formData.countryLabel])

  const handleSubmit = (e) => {
    e.preventDefault()
    const fail = (ar, en) => showErrorToast(isRtl ? ar : en, isRtl)

    const nameAr = String(formData.name || '').trim()
    const nameEn = String(formData.nameEn || '').trim()
    if (nameAr.length < 2 || nameEn.length < 2) return fail('الرجاء إدخال الاسم بالعربية والإنجليزية', 'Please enter the Arabic and English names')
    if (!teacher && !/^\S+@\S+\.\S+$/.test(String(formData.email || '').trim())) return fail('الرجاء إدخال بريد إلكتروني صالح', 'Please enter a valid email')
    if (!/^\+\d{7,15}$/.test(String(formData.phone || '').replace(/\s+/g, ''))) return fail('الرجاء إدخال رقم هاتف صحيح مع مفتاح الدولة', 'Please enter a valid phone number with country code')
    if (!formData.country) return fail('الرجاء اختيار الدولة', 'Please select a country')

    if (!teacher) {
      if (formData.hourlyRate === '' || Number(formData.hourlyRate) < 0) return fail('الرجاء إدخال سعر الساعة', 'Please enter the hourly rate')
      if (String(formData.password || '').length < 6) return fail('كلمة المرور يجب أن لا تقل عن 6 أحرف', 'Password must be at least 6 characters')
      if (formData.password !== formData.confirmPassword) return fail('كلمتا المرور غير متطابقتين!', 'Passwords do not match!')
    }

    onSave({
      name: { ar: nameAr, en: nameEn },
      phone: String(formData.phone).replace(/\s+/g, ''),
      country: formData.country,
      bio: { ar: String(formData.aboutAr || '').trim(), en: String(formData.aboutEn || '').trim() },
      degree: { ar: String(formData.degreeAr || '').trim(), en: String(formData.degreeEn || '').trim() },
      specializations: formData.specializations,
      yearsOfExperience: Math.max(0, Number(formData.yearsOfExperience) || 0),
      achievements: formData.achievements,
      showOnWebsite: Boolean(formData.showOnWebsite),
      availability: formData.availability,
      profileImageFile: formData.profileImageFile,
      ...(teacher
        ? {}
        : {
            email: String(formData.email).trim(),
            hourlyRate: Math.max(0, Number(formData.hourlyRate) || 0),
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          }),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6 pb-12 text-start" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المعلمين')}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'إدارة المعلمين' : 'Teachers Management'}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {teacher
                  ? t('adminDashboard.teachers.addModal.editTitle', 'تعديل بيانات المعلم')
                  : t('adminDashboard.teachers.addModal.title', 'إضافة معلم جديد')}
              </span>
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 cursor-pointer"
        >
          {t('adminDashboard.teachers.addModal.cancel', 'إلغاء')}
        </button>
      </div>

      {teacher && (
        <TeacherProfileHeaderCard
          teacher={teacher}
          formData={formData}
          isRtl={isRtl}
          t={t}
        />
      )}

       <div className="space-y-6">
         <TeacherPersonalInfoCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
          countries={apiCountries}
          isEdit={!!teacher}
        />

         <TeacherAcademicInfoCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
          curricula={apiCurricula}
          isEdit={!!teacher}
        />

        <TeacherAvailabilityCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
        />

        {!teacher && (
          <TeacherSecurityCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
        <button
          type="submit"
          disabled={isSaving}
          className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer text-base flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSaving && <Loader2 className="w-5 h-5 animate-spin" />}
          {teacher
            ? t('adminDashboard.teachers.addModal.submit', 'حفظ التغييرات')
            : (isRtl ? 'إضافة معلم' : 'Add Teacher')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSaving}
          className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer text-base disabled:opacity-50"
        >
          {t('adminDashboard.teachers.addModal.cancel', 'إلغاء')}
        </button>
      </div>
    </form>
  )
}