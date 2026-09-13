import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import TeacherProfileHeaderCard from './TeacherProfileHeaderCard'
import TeacherPersonalInfoCard from './TeacherPersonalInfoCard'
import TeacherAcademicInfoCard from './TeacherAcademicInfoCard'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import TeacherAboutCard from './TeacherAboutCard'
import TeacherCertificatesCard from './TeacherCertificatesCard'
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
    yearsOfExperience: teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0,
    experienceYears: teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0,
    country: teacher?.country || 'مصر',
    degree: teacher?.degree || teacher?.qualification || '',
    qualification: teacher?.degree || teacher?.qualification || '',
    qualificationEn: teacher?.qualificationEn || '',
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
    bio: teacher?.bio || teacher?.aboutAr || '',
    aboutAr: teacher?.bio || teacher?.aboutAr || '',
    aboutEn: teacher?.aboutEn || '',
    showOnWebsite: Boolean(teacher?.showOnWebsite),
    certificates: teacher?.certificates || [],
    specializations: teacher?.specializations || [],
    achievements: teacher?.achievements || [],
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
          setApiCountries(fetchedCountries)
          if (!teacher) {
            const defaultCountry = fetchedCountries.find((c) => c.phoneCode === '+20' || c.name === 'Egypt' || c.name === 'مصر')
            if (defaultCountry) {
              setFormData((prev) => ({ ...prev, country: defaultCountry.id || defaultCountry._id }))
            }
          }
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

    const rawDegree = formData.degree || formData.qualification || ''
    const rawDegreeEn = formData.qualificationEn || formData.degreeEn || rawDegree || ''

    onSave({
      ...formData,
      degree: {
        ar: rawDegree.trim() || 'مؤهل جامعي',
        en: rawDegreeEn.trim() || 'University Degree'
      },
      yearsOfExperience: Math.max(0, Number(formData.yearsOfExperience) || 0),
      profitPercentage: Math.min(100, Math.max(0, Number(formData.profitPercentage) || 0)),
      showOnWebsite: Boolean(formData.showOnWebsite),
      totalEarnings: Number(formData.totalEarnings) || 0,
      dueEarnings: Number(formData.dueEarnings) || 0,
      totalGroups: Number(formData.totalGroups || formData.groupsCount) || 0,
      totalLessons: Number(formData.totalLessons || formData.totalSessions) || 0,
      totalStudents: Number(formData.totalStudents || formData.studentsCount) || 0
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-10 text-start" dir={isRtl ? 'rtl' : 'ltr'}>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <TeacherPersonalInfoCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
            countries={apiCountries}
          />

          <TeacherAboutCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
          />

          <TeacherSecurityCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
            isEdit={!!teacher}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <TeacherAcademicInfoCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
            curricula={apiCurricula}
            showAboutAndLicenses={false}
          />

          <TeacherWebsiteDisplayCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
          />

          <TeacherCertificatesCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
          />

          {!teacher && (
            <TeacherDocumentsUploadCard
              formData={formData}
              onChange={handleFieldChange}
              isRtl={isRtl}
              t={t}
            />
          )}
        </div>
      </div>

      {teacher && (
        <TeacherPersonalInfoMetaCard
          formData={formData}
          isRtl={isRtl}
          t={t}
        />
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          type="submit"
          className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer"
        >
          {t('adminDashboard.teachers.addModal.submit', 'حفظ التغييرات')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer"
        >
          {t('adminDashboard.teachers.addModal.cancel', 'إلغاء')}
        </button>
      </div>
    </form>
  )
}