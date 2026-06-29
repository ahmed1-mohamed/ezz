import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import TeacherProfileHeaderCard from './TeacherProfileHeaderCard'
import TeacherPersonalInfoCard from './TeacherPersonalInfoCard'
import TeacherAcademicInfoCard from './TeacherAcademicInfoCard'
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

  const [formData, setFormData] = useState({
    name: teacher?.name || '',
    nameEn: teacher?.nameEn || '',
    subject: teacher?.subject || 'القرآن الكريم',
    email: teacher?.email || '',
    phone: teacher?.phone || '',
    joinDate: teacher?.joinDate || new Date().toISOString().split('T')[0],
    totalEarnings: teacher?.totalEarnings || 0,
    dueEarnings: teacher?.dueEarnings || 0,
    experienceYears: teacher?.experienceYears || 0,
    country: teacher?.country || 'مصر',
    qualification: teacher?.qualification || '',
    qualificationEn: teacher?.qualificationEn || '',
    groupsCount: teacher?.groupsCount || 0,
    totalSessions: teacher?.totalSessions || 0,
    status: teacher?.status || 'Active',
    rating: teacher?.rating || 5.0,
    aboutAr: teacher?.aboutAr || '',
    aboutEn: teacher?.aboutEn || '',
    certificates: teacher?.certificates || [],
    studentsCount: teacher?.studentsCount || 0,
    documents: teacher?.documents || []
  })

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      alert(isRtl ? 'الرجاء إدخال الاسم والبريد الإلكتروني!' : 'Please enter Name and Email!')
      return
    }

    onSave({
      ...formData,
      totalEarnings: Number(formData.totalEarnings) || 0,
      dueEarnings: Number(formData.dueEarnings) || 0,
      experienceYears: Number(formData.experienceYears) || 0,
      groupsCount: Number(formData.groupsCount) || 0,
      totalSessions: Number(formData.totalSessions) || 0,
      studentsCount: Number(formData.studentsCount) || 0
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

        <div className="space-y-8">
          <TeacherPersonalInfoCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
          />

          {teacher && (
            <TeacherAboutCard
              formData={formData}
              onChange={handleFieldChange}
              isRtl={isRtl}
              t={t}
            />
          )}

          <TeacherSecurityCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
            isEdit={!!teacher}
          />
        </div>

        <div className="space-y-8">
          <TeacherAcademicInfoCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
            showAboutAndLicenses={!teacher}
          />

          {!teacher && (
            <>
              <TeacherWebsiteDisplayCard
                formData={formData}
                onChange={handleFieldChange}
                isRtl={isRtl}
                t={t}
              />

              <TeacherDocumentsUploadCard
                formData={formData}
                onChange={handleFieldChange}
                isRtl={isRtl}
                t={t}
              />
            </>
          )}

          {teacher && (
            <>
              <TeacherCertificatesCard
                formData={formData}
                onChange={handleFieldChange}
                isRtl={isRtl}
                t={t}
              />

              <TeacherWebsiteDisplayCard
                formData={formData}
                onChange={handleFieldChange}
                isRtl={isRtl}
                t={t}
              />
            </>
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
          className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
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