import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Trash2, ChevronDown } from 'lucide-react'

export default function TeacherDetailsAcademicCard({ teacher, isRtl, onDeleteAchievement }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')

  const specialization = useMemo(() => {
    if (Array.isArray(teacher?.specializations) && teacher.specializations.length > 0) {
      const names = teacher.specializations.map((spec) => {
        if (typeof spec === 'object' && spec !== null) {
          if (typeof spec.name === 'object') {
            return isRtlResolved ? (spec.name.ar || spec.name.en) : (spec.name.en || spec.name.ar)
          }
          return spec.name || spec.title || ''
        }
        return String(spec)
      }).filter(Boolean)
      if (names.length > 0) return names.join('، ')
    }
    if (typeof teacher?.subject === 'object' && teacher?.subject !== null) {
      return isRtlResolved ? (teacher.subject.ar || teacher.subject.en) : (teacher.subject.en || teacher.subject.ar)
    }
    return teacher?.subject || '-'
  }, [teacher, isRtlResolved])

  const years = Number(teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0)

  const country = useMemo(() => {
    if (!teacher?.country) return '-'
    if (typeof teacher.country === 'object') {
      return isRtlResolved
        ? (teacher.country.ar || teacher.country.name || teacher.country.nameAr)
        : (teacher.country.en || teacher.country.nameEn || teacher.country.name)
    }
    return teacher.country
  }, [teacher, isRtlResolved])

  const degreeAr = (typeof teacher?.degree === 'object' ? teacher?.degree?.ar : teacher?.degree) || teacher?.qualification || '-'
  const degreeEn = (typeof teacher?.degree === 'object' ? teacher?.degree?.en : teacher?.degreeEn) || teacher?.qualificationEn || '-'

  const bioAr = (typeof teacher?.bio === 'object' ? teacher?.bio?.ar : teacher?.bio) || teacher?.aboutAr || '-'
  const bioEn = (typeof teacher?.bio === 'object' ? teacher?.bio?.en : teacher?.aboutEn) || '-'

  const rawAchievements = Array.isArray(teacher?.achievements)
    ? teacher.achievements
    : (Array.isArray(teacher?.certificates) ? teacher.certificates.filter((c) => typeof c === 'string') : [])

  const achievements = rawAchievements

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {t('adminDashboard.teachers.academicInfo', isRtlResolved ? 'البيانات الأكاديمية' : 'Academic Information')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.teachers.specialization', isRtlResolved ? 'التخصص' : 'Specialization')}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {specialization}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.teachers.yearsOfExperience', isRtlResolved ? 'سنوات الخبرة' : 'Years of Experience')}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {years} {t('adminDashboard.teachers.years', isRtlResolved ? 'سنوات' : 'years')}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.teachers.country', isRtlResolved ? 'البلد' : 'Country')}
        </label>
        <div className="relative">
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent flex items-center justify-between">
            <span>{country}</span>
            <ChevronDown size={16} className="text-slate-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.teachers.qualificationAr', isRtlResolved ? 'المؤهل (بالعربية)' : 'Qualification (Arabic)')}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent" dir="rtl">
            {degreeAr}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.teachers.qualificationEn', isRtlResolved ? 'المؤهل (بالإنجليزية)' : 'Qualification (English)')}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent" dir="ltr">
            {degreeEn}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.teachers.bioAr', isRtlResolved ? 'نبذة عن المعلم (بالعربية)' : 'About the Teacher (Arabic)')}
        </label>
        <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl p-4 text-sm font-medium border border-transparent min-h-[90px] leading-relaxed" dir="rtl">
          {bioAr}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
          {t('adminDashboard.teachers.bioEn', isRtlResolved ? 'نبذة عن المعلم (بالإنجليزية)' : 'Brief About Teacher (English)')}
        </label>
        <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl p-4 text-sm font-medium border border-transparent min-h-[90px] leading-relaxed" dir="ltr">
          {bioEn}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xs mt-2">
        <div className="bg-[#005953] px-6 py-2.5 text-start">
          <span className="text-xs font-bold text-white">
            {t('adminDashboard.teachers.achievementsAndCertificates', isRtlResolved ? 'الإجازات والشهادات' : 'Achievements & Accreditations')}
          </span>
        </div>
        <div className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 text-start">
          {achievements.length > 0 ? (
            achievements.map((item, index) => {
              const title = typeof item === 'object' && item !== null
                ? (isRtlResolved ? (item.ar || item.name || item.en) : (item.en || item.name || item.ar))
                : item
              return (
                <div key={index} className="px-6 py-3.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                  <button
                    type="button"
                    onClick={() => onDeleteAchievement && onDeleteAchievement(index)}
                    className="p-1 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                    title={t('common.delete', isRtlResolved ? 'حذف' : 'Delete')}
                  >
                    <Trash2 size={16} />
                  </button>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {title}
                  </span>
                </div>
              )
            })
          ) : (
            <div className="px-6 py-4 text-center text-xs text-slate-400">
              {t('adminDashboard.teachers.noAchievements', isRtlResolved ? 'لا توجد إجازات أو شهادات مضافة' : 'No achievements or accreditations added')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
