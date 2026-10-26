import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import TeacherProfileHeaderCard from './TeacherProfileHeaderCard'
import TeacherPersonalInfoCard from './TeacherPersonalInfoCard'
import TeacherAcademicInfoCard from './TeacherAcademicInfoCard'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { sortCountries, normalizeCountries } from '@/shared/utils/countryUtils'
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
  subject: teacher?.subject || 'القرآن الكريم',
  email: teacher?.email || '',
  phone: teacher?.phone || '',
  joinDate: teacher?.joinDate || new Date().toISOString().split('T')[0],
  totalEarnings: teacher?.totalEarnings || 0,
  dueEarnings: teacher?.dueEarnings || 0,
  hourlyRate: Number(teacher?.hourlyRate ?? 0),
  yearsOfExperience: teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0,
  experienceYears: teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0,
  country: teacher?.country || '',
  degree: getInitialDegreeAr(teacher),
  degreeAr: getInitialDegreeAr(teacher),
  degreeEn: getInitialDegreeEn(teacher),
  qualification: getInitialDegreeAr(teacher),
  qualificationEn: getInitialDegreeEn(teacher),
  totalGroups: teacher?.totalGroups ?? teacher?.groupsCount ?? 0,
  groupsCount: teacher?.totalGroups ?? teacher?.groupsCount ?? 0,
  totalLessons: teacher?.totalLessons ?? teacher?.totalSessions ?? 0,
  totalSessions: teacher?.totalLessons ?? teacher?.totalSessions ?? 0,
  totalStudents: teacher?.totalStudents ?? teacher?.studentsCount ?? 0,
  studentsCount: teacher?.totalStudents ?? teacher?.studentsCount ?? 0,
  profitPercentage: teacher?.profitPercentage ?? 20,
  status: teacher?.active === false ? 'Suspended' : 'Active',
  active: teacher?.active !== false,
  rating: teacher?.rating || 5.0,
  bio: getInitialBioAr(teacher),
  aboutAr: getInitialBioAr(teacher),
  aboutEn: getInitialBioEn(teacher),
  showOnWebsite: Boolean(teacher?.showOnWebsite),
  certificates: Array.isArray(teacher?.certificates) ? teacher.certificates : [],
  specializations: (teacher?.specializations || []).map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean),
  achievements: normalizeAchievements(teacher?.achievements),
  image: teacher?.image || '',
  profileImageFile: null,
  password: '',
  confirmPassword: '',
  documents: teacher?.documents || []
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
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nameArStr = typeof formData.name === 'object' && formData.name !== null
      ? (formData.name.ar || formData.name.en || '')
      : String(formData.name || '')
    const nameEnStr = typeof formData.nameEn === 'object' && formData.nameEn !== null
      ? (formData.nameEn.en || formData.nameEn.ar || '')
      : String(formData.nameEn || '')

    const nameArTrimmed = nameArStr.trim()
    const nameEnTrimmed = nameEnStr.trim()

    if (!nameArTrimmed || !formData.email) {
      showErrorToast(isRtl ? 'الرجاء إدخال الاسم والبريد الإلكتروني!' : 'Please enter Name and Email!', isRtl)
      return
    }

    if (!teacher && !formData.password) {
      showErrorToast(isRtl ? 'يرجى إدخال كلمة المرور للمعلم الجديد' : 'Please enter a password for the new teacher', isRtl)
      return
    }

    if (!teacher && formData.password && formData.password !== formData.confirmPassword) {
      showErrorToast(isRtl ? 'كلمتا المرور غير متطابقتين!' : 'Passwords do not match!', isRtl)
      return
    }

    const rawDegreeAr = typeof formData.degreeAr === 'object' && formData.degreeAr !== null
      ? (formData.degreeAr.ar || formData.degreeAr.en || '')
      : String(formData.degreeAr || formData.degree || formData.qualification || '')
    const rawDegreeEn = typeof formData.degreeEn === 'object' && formData.degreeEn !== null
      ? (formData.degreeEn.en || formData.degreeEn.ar || '')
      : String(formData.degreeEn || formData.qualificationEn || '')

    const rawBioAr = typeof formData.aboutAr === 'object' && formData.aboutAr !== null
      ? (formData.aboutAr.ar || formData.aboutAr.en || '')
      : String(formData.aboutAr || formData.bio || '')
    const rawBioEn = typeof formData.aboutEn === 'object' && formData.aboutEn !== null
      ? (formData.aboutEn.en || formData.aboutEn.ar || '')
      : String(formData.aboutEn || '')

    let formattedAchievements = formData.achievements
    if (Array.isArray(formData.achievements)) {
      const arList = []
      const enList = []
      formData.achievements.forEach(item => {
        if (typeof item === 'object' && item !== null) {
          if (item.ar || item.en) {
            arList.push(item.ar || item.en || '')
            enList.push(item.en || item.ar || '')
          }
        } else if (typeof item === 'string' && item.trim()) {
          arList.push(item.trim())
          enList.push(item.trim())
        }
      })
      formattedAchievements = { ar: arList, en: enList }
    }

    onSave({
      ...formData,
      name: {
        ar: nameArTrimmed,
        en: nameEnTrimmed || nameArTrimmed
      },
      nameEn: nameEnTrimmed || nameArTrimmed,
      bio: {
        ar: rawBioAr.trim(),
        en: (rawBioEn || rawBioAr).trim()
      },
      aboutAr: rawBioAr.trim(),
      aboutEn: (rawBioEn || rawBioAr).trim(),
      degree: {
        ar: rawDegreeAr.trim() || 'مؤهل جامعي',
        en: (rawDegreeEn || rawDegreeAr).trim() || 'University Degree'
      },
      degreeAr: rawDegreeAr.trim() || 'مؤهل جامعي',
      degreeEn: (rawDegreeEn || rawDegreeAr).trim() || 'University Degree',
      specializations: (formData.specializations || []).map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean),
      certificates: formData.certificates,
      achievements: formattedAchievements,
      yearsOfExperience: Math.max(0, Number(formData.yearsOfExperience) || 0),
      hourlyRate: Math.max(0, Number(formData.hourlyRate) || 0),
      totalLessons: Math.max(0, Number(formData.totalLessons || formData.totalSessions) || 0),
      totalStudents: Math.max(0, Number(formData.totalStudents || formData.studentsCount) || 0),
      showOnWebsite: Boolean(formData.showOnWebsite),
      profitPercentage: Math.min(100, Math.max(0, Number(formData.profitPercentage) || 0)),
      totalEarnings: Number(formData.totalEarnings) || 0,
      dueEarnings: Number(formData.dueEarnings) || 0,
      totalGroups: Number(formData.totalGroups || formData.groupsCount) || 0
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
        />

         <TeacherAcademicInfoCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
          t={t}
          curricula={apiCurricula}
          teacher={teacher}
          isEdit={!!teacher}
        />

        <TeacherSecurityCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
          isEdit={!!teacher}
          teacher={teacher}
        />
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