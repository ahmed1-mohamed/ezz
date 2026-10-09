import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import TeacherProfileHeaderCard from './TeacherProfileHeaderCard'
import TeacherPersonalInfoCard from './TeacherPersonalInfoCard'
import TeacherAcademicInfoCard from './TeacherAcademicInfoCard'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import TeacherSecurityCard from './TeacherSecurityCard'
import TeacherWebsiteDisplayCard from './TeacherWebsiteDisplayCard'
import TeacherPersonalInfoMetaCard from './TeacherPersonalInfoMetaCard'
import TeacherDocumentsUploadCard from './TeacherDocumentsUploadCard'

export default function AddEditTeacherScreen({
  teacher = null,
  isRtl,
  t,
  onSave,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const [apiCountries, setApiCountries] = useState([])
  const [apiCurricula, setApiCurricula] = useState([])

  const [formData, setFormData] = useState({
    name: teacher?.name || '',
    nameEn: teacher?.nameEn || '',
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
    degree: (typeof teacher?.degree === 'object' ? teacher?.degree?.ar : teacher?.degree) || teacher?.qualification || '',
    degreeAr: (typeof teacher?.degree === 'object' ? teacher?.degree?.ar : teacher?.degree) || teacher?.degreeAr || teacher?.qualification || '',
    degreeEn: (typeof teacher?.degree === 'object' ? teacher?.degree?.en : '') || teacher?.degreeEn || teacher?.qualificationEn || '',
    qualification: (typeof teacher?.degree === 'object' ? teacher?.degree?.ar : teacher?.degree) || teacher?.qualification || '',
    qualificationEn: (typeof teacher?.degree === 'object' ? teacher?.degree?.en : '') || teacher?.degreeEn || teacher?.qualificationEn || '',
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
    bio: (typeof teacher?.bio === 'object' ? teacher?.bio?.ar : teacher?.bio) || teacher?.aboutAr || '',
    aboutAr: (typeof teacher?.bio === 'object' ? teacher?.bio?.ar : teacher?.bio) || teacher?.aboutAr || '',
    aboutEn: (typeof teacher?.bio === 'object' ? teacher?.bio?.en : '') || teacher?.aboutEn || '',
    showOnWebsite: Boolean(teacher?.showOnWebsite),
    certificates: Array.isArray(teacher?.certificates) ? teacher.certificates : [],
    specializations: (teacher?.specializations || []).map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean),
    achievements: Array.isArray(teacher?.achievements) ? teacher.achievements : [],
    image: teacher?.image || '',
    profileImageFile: null,
    password: '',
    confirmPassword: '',
    documents: teacher?.documents || []
  })

  useEffect(() => {
    const loadData = async () => {
      try {
        const [countriesRes, curriculaRes] = await Promise.all([
          landingApi.fetchCountries().catch(() => []),
          adminCurriculaApi.fetchCurricula().catch(() => [])
        ])

        const fetchedCountries = Array.isArray(countriesRes) ? countriesRes : (countriesRes?.data || [])
        if (fetchedCountries.length > 0) {
          const sortedCountries = [...fetchedCountries].sort((a, b) =>
            (a.name || '').localeCompare(b.name || '', isRtl ? 'ar' : 'en')
          )
          setApiCountries(sortedCountries)
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
  }, [teacher])

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      showErrorToast(isRtl ? 'الرجاء إدخال الاسم والبريد الإلكتروني!' : 'Please enter Name and Email!', isRtl)
      return
    }

    if (!teacher && !formData.password) {
      showErrorToast(isRtl ? 'يرجى إدخال كلمة المرور للمعلم الجديد' : 'Please enter a password for the new teacher', isRtl)
      return
    }

    if (formData.password && formData.password !== formData.confirmPassword) {
      showErrorToast(isRtl ? 'كلمتا المرور غير متطابقتين!' : 'Passwords do not match!', isRtl)
      return
    }

    const rawDegreeAr = formData.degreeAr || formData.degree || formData.qualification || ''
    const rawDegreeEn = formData.degreeEn || formData.qualificationEn || ''

    onSave({
      ...formData,
      name: {
        ar: formData.name.trim(),
        en: (formData.nameEn || formData.name).trim()
      },
      nameEn: (formData.nameEn || formData.name).trim(),
      bio: {
        ar: formData.aboutAr.trim(),
        en: (formData.aboutEn || formData.aboutAr).trim()
      },
      aboutAr: formData.aboutAr.trim(),
      aboutEn: (formData.aboutEn || formData.aboutAr).trim(),
      degree: {
        ar: rawDegreeAr.trim() || 'مؤهل جامعي',
        en: rawDegreeEn.trim() || 'University Degree'
      },
      degreeAr: rawDegreeAr.trim() || 'مؤهل جامعي',
      degreeEn: rawDegreeEn.trim() || 'University Degree',
      specializations: (formData.specializations || []).map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean),
      certificates: formData.certificates,
      achievements: formData.achievements,
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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 pb-12 text-start" dir={isRtl ? 'rtl' : 'ltr'}>
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
        />

         <TeacherSecurityCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
          isEdit={!!teacher}
        />

         <TeacherWebsiteDisplayCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
        />

         <TeacherDocumentsUploadCard
          formData={formData}
          onChange={handleFieldChange}
          isRtl={isRtl}
        />
      </div>

      {teacher && (
        <TeacherPersonalInfoMetaCard
          formData={formData}
          isRtl={isRtl}
          t={t}
        />
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
        <button
          type="submit"
          className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer text-base"
        >
          {teacher
            ? t('adminDashboard.teachers.addModal.submit', 'حفظ التغييرات')
            : (isRtl ? 'إضافة معلم' : 'Add Teacher')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer text-base"
        >
          {t('adminDashboard.teachers.addModal.cancel', 'إلغاء')}
        </button>
      </div>
    </form>
  )
}