import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Trash2 } from 'lucide-react'

export default function TeacherDetailsAcademicCard({ teacher, isRtl, onDeleteAchievement }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')

  const specialization = useMemo(() => {
    if (Array.isArray(teacher?.specializations) && teacher.specializations.length > 0) {
      const names = teacher.specializations.map((spec) => {
        if (typeof spec === 'object' && spec !== null) {
          if (typeof spec.name === 'object' && spec.name !== null) {
            return isRtlResolved ? (spec.name.ar || spec.name.en) : (spec.name.en || spec.name.ar)
          }
          return spec.name || spec.title || ''
        }
        return String(spec || '')
      }).filter(Boolean)
      if (names.length > 0) return names.join('، ')
    }
    if (typeof teacher?.subject === 'object' && teacher?.subject !== null) {
      return isRtlResolved ? (teacher.subject.ar || teacher.subject.en) : (teacher.subject.en || teacher.subject.ar)
    }
    return teacher?.subject || '-'
  }, [teacher, isRtlResolved])

  const years = Number(teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0)

  const degreeAr = teacher?.degreeAr || (typeof teacher?.degree === 'object' ? teacher?.degree?.ar : (typeof teacher?.degree === 'string' ? teacher?.degree : '')) || teacher?.qualification || '-'
  const degreeEn = teacher?.degreeEn || (typeof teacher?.degree === 'object' ? teacher?.degree?.en : '') || '-'

  const bioAr = teacher?.bioAr || (typeof teacher?.bio === 'object' ? teacher?.bio?.ar : (typeof teacher?.bio === 'string' ? teacher?.bio : '')) || teacher?.aboutAr || '-'
  const bioEn = teacher?.bioEn || (typeof teacher?.bio === 'object' ? teacher?.bio?.en : '') || '-'

  const achievements = useMemo(() => {
    const raw = teacher?.achievements
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
      const arList = Array.isArray(raw.ar) ? raw.ar : (Array.isArray(teacher?.achievementsAr) ? teacher.achievementsAr : [])
      const enList = Array.isArray(raw.en) ? raw.en : (Array.isArray(teacher?.achievementsEn) ? teacher.achievementsEn : [])
      const maxLen = Math.max(arList.length, enList.length)
      const list = []
      for (let i = 0; i < maxLen; i++) {
        list.push({
          ar: arList[i] || '',
          en: enList[i] || ''
        })
      }
      return list
    }
    if (Array.isArray(raw)) {
      return raw.map((item) => {
        if (typeof item === 'object' && item !== null) {
          return {
            ar: item.ar || item.name || '',
            en: item.en || ''
          }
        }
        return {
          ar: String(item),
          en: ''
        }
      })
    }
    return []
  }, [teacher])

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
        <div className="bg-[#005953] px-6 py-3 text-start flex items-center justify-between">
          <span className="text-xs font-bold text-white">
            {t('adminDashboard.teachers.achievementsAndCertificates', isRtlResolved ? 'الإجازات والشهادات' : 'Achievements & Accreditations')}
          </span>
          <span className="text-[11px] font-medium text-emerald-100">
            {isRtlResolved ? '(باللغتين العربية والإنجليزية)' : '(Arabic & English)'}
          </span>
        </div>
        <div className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 text-start">
          {achievements.length > 0 ? (
            achievements.map((item, index) => (
              <div key={index} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {isRtlResolved ? 'باللغة العربية' : 'Arabic'}
                    </span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100" dir="rtl">
                      {item.ar || '-'}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {isRtlResolved ? 'باللغة الإنجليزية' : 'English'}
                    </span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100" dir="ltr">
                      {item.en || '-'}
                    </p>
                  </div>
                </div>
                {onDeleteAchievement && (
                  <button
                    type="button"
                    onClick={() => onDeleteAchievement(index)}
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-all cursor-pointer self-end sm:self-center shrink-0"
                    title={t('common.delete', isRtlResolved ? 'حذف' : 'Delete')}
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="px-6 py-6 text-center text-xs text-slate-400">
              {t('adminDashboard.teachers.noAchievements', isRtlResolved ? 'لا توجد إجازات أو شهادات مضافة' : 'No achievements or accreditations added')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
