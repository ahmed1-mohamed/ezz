import { useState } from 'react'
import { Trash2, BookOpen, Percent } from 'lucide-react'

const subjects = [
  'القرآن الكريم',
  'التجويد والقراءات',
  'اللغة العربية',
  'الدراسات الإسلامية',
  'القاعدة النورانية'
]

export default function TeacherAcademicInfoCard({
  formData,
  onChange,
  isRtl,
  t,
  curricula = [],
  showAboutAndLicenses = false
}) {
  const [newLicense, setNewLicense] = useState('')

  const handleAddLicense = () => {
    if (!newLicense.trim()) return
    const currentList = formData.certificates || []
    const updated = [...currentList, newLicense.trim()]
    onChange('certificates', updated)
    setNewLicense('')
  }

  const handleRemoveLicense = (index) => {
    const currentList = formData.certificates || []
    const updated = currentList.filter((_, i) => i !== index)
    onChange('certificates', updated)
  }

  const handleToggleCurriculum = (curriculumId) => {
    const currentSpecs = formData.specializations || []
    const exists = currentSpecs.some(
      (s) => (typeof s === 'object' ? s.id || s._id : s) === curriculumId
    )

    let updated
    if (exists) {
      updated = currentSpecs.filter(
        (s) => (typeof s === 'object' ? s.id || s._id : s) !== curriculumId
      )
    } else {
      const curriculumObj = curricula.find((c) => (c.id || c._id) === curriculumId)
      updated = [...currentSpecs, curriculumObj || curriculumId]
    }
    onChange('specializations', updated)
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 flex items-center gap-2">
        <BookOpen size={18} className="text-[#005953] dark:text-emerald-400" />
        <span>{t('adminDashboard.teachers.academicInfo', 'البيانات الأكاديمية والمالية')}</span>
      </h3>

      {/* Specializations selection from available Curricula */}
      {curricula && curricula.length > 0 && (
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'المناهج والتخصصات المرتبطة' : 'Curricula & Specializations'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto p-1">
            {curricula.map((curriculum) => {
              const cId = curriculum.id || curriculum._id
              const cName = typeof curriculum.name === 'object'
                ? (isRtl ? curriculum.name.ar || curriculum.name.en : curriculum.name.en || curriculum.name.ar)
                : curriculum.name
              const isSelected = (formData.specializations || []).some(
                (s) => (typeof s === 'object' ? s.id || s._id : s) === cId
              )

              return (
                <div
                  key={cId}
                  onClick={() => handleToggleCurriculum(cId)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer select-none text-xs font-bold ${
                    isSelected
                      ? 'border-[#005953] bg-[#005953]/10 text-[#005953] dark:text-emerald-300'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {}}
                    className="rounded accent-[#005953] cursor-pointer"
                  />
                  {curriculum.image && (
                    <img
                      src={curriculum.image}
                      alt={cName}
                      className="w-5 h-5 rounded object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                  <span className="truncate">{cName}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Degree & Years of Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'المؤهل العلمي / الشهادة' : 'Degree / Qualification'}
          </label>
          <input
            type="text"
            value={formData.degree || formData.qualification || ''}
            onChange={(e) => {
              onChange('degree', e.target.value)
              onChange('qualification', e.target.value)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'مثال: ليسانس لغة عربية - جامعة الأزهر' : 'e.g. BA in Arabic - Al-Azhar'}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.teachers.yearsOfExperience', 'سنوات الخبرة')}
          </label>
          <input
            type="number"
            min="0"
            value={formData.yearsOfExperience ?? formData.experienceYears ?? ''}
            onChange={(e) => {
              const val = e.target.value === '' ? '' : Number(e.target.value)
              onChange('yearsOfExperience', val)
              onChange('experienceYears', val)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={t('adminDashboard.teachers.yearsOfExperiencePlaceholder', 'عدد سنوات الخبرة')}
          />
        </div>
      </div>

      {/* Profit Percentage & Fallback Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
            <Percent size={13} className="text-[#005953] dark:text-emerald-400" />
            <span>{isRtl ? 'نسبة ربح المعلم (%)' : 'Teacher Profit Share (%)'}</span>
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.profitPercentage ?? ''}
            onChange={(e) => onChange('profitPercentage', e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="مثال: 25"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.teachers.specialization', 'التخصص الرئيسي')}
          </label>
          <select
            value={formData.subject || ''}
            onChange={(e) => onChange('subject', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
          >
            <option value="" disabled>
              {t('adminDashboard.teachers.selectSpecialization', 'اختر التخصص')}
            </option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showAboutAndLicenses && (
        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {t('adminDashboard.teachers.aboutTeacher', 'نبذة عن المعلم')}
            </label>
            <textarea
              rows={4}
              value={formData.bio || formData.aboutAr || ''}
              onChange={(e) => {
                onChange('bio', e.target.value)
                onChange('aboutAr', e.target.value)
              }}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm resize-none leading-relaxed"
              placeholder={t('adminDashboard.teachers.aboutTeacherPlaceholder', 'نبذة مختصرة عن خبرات المعلم ومؤهلاته...')}
            />
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
              {t('adminDashboard.teachers.licenses', 'الإجازات والشهادات')}
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                value={newLicense}
                onChange={(e) => setNewLicense(e.target.value)}
                className="flex-1 bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none text-sm"
                placeholder={t('adminDashboard.teachers.licenses', 'اسم الإجازة أو الشهادة')}
              />
              <button
                type="button"
                onClick={handleAddLicense}
                className="px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white text-sm font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {t('adminDashboard.teachers.addBtn', 'إضافة')}
              </button>
            </div>

            <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden">
              <div className="bg-[#005953] px-4 py-3 text-start">
                <span className="text-xs font-bold text-white">
                  {t('adminDashboard.teachers.licenses', 'الإجازات والشهادات')}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950/40 p-4 divide-y divide-slate-100 dark:divide-slate-800/60 text-start">
                {(!formData.certificates || formData.certificates.length === 0) ? (
                  <p className="text-xs text-slate-400 py-1">
                    {t('adminDashboard.teachers.noLicenses', 'لا توجد إجازات مضافة.')}
                  </p>
                ) : (
                  formData.certificates.map((cert, index) => {
                    const certName = typeof cert === 'string' ? cert : (cert.name || `شهادة #${index + 1}`)
                    return (
                      <div key={index} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {certName}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveLicense(index)}
                          className="p-1 bg-white hover:bg-rose-50 border border-slate-100 hover:border-rose-200 text-rose-500 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}