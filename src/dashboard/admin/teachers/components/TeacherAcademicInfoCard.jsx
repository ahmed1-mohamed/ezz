import { useState } from 'react'
import { Trash2, Check } from 'lucide-react'

const getCurriculumId = (c) => (typeof c === 'object' && c !== null ? (c.id || c._id) : c)

export default function TeacherAcademicInfoCard({
  formData,
  onChange,
  isRtl = true,
  curricula = [],
  isEdit = false
}) {
  const [newAchAr, setNewAchAr] = useState('')
  const [newAchEn, setNewAchEn] = useState('')
  const handleAddAchievement = (e) => {
    e?.preventDefault?.()
    if (!newAchAr.trim() && !newAchEn.trim()) return
    const arText = newAchAr.trim() || newAchEn.trim()
    const enText = newAchEn.trim() || newAchAr.trim()
    const currentList = Array.isArray(formData.achievements)
      ? formData.achievements
      : (typeof formData.achievements === 'object' && formData.achievements !== null
        ? (() => {
            const ar = Array.isArray(formData.achievements.ar) ? formData.achievements.ar : []
            const en = Array.isArray(formData.achievements.en) ? formData.achievements.en : []
            const max = Math.max(ar.length, en.length)
            const list = []
            for (let i = 0; i < max; i++) {
              list.push({ ar: ar[i] || '', en: en[i] || ar[i] || '' })
            }
            return list
          })()
        : [])
    const updated = [
      ...currentList,
      { ar: arText, en: enText }
    ]
    onChange('achievements', updated)
    setNewAchAr('')
    setNewAchEn('')
  }
  const handleRemoveAchievement = (index) => {
    const currentList = Array.isArray(formData.achievements)
      ? formData.achievements
      : (typeof formData.achievements === 'object' && formData.achievements !== null
        ? (() => {
            const ar = Array.isArray(formData.achievements.ar) ? formData.achievements.ar : []
            const en = Array.isArray(formData.achievements.en) ? formData.achievements.en : []
            const max = Math.max(ar.length, en.length)
            const list = []
            for (let i = 0; i < max; i++) {
              list.push({ ar: ar[i] || '', en: en[i] || ar[i] || '' })
            }
            return list
          })()
        : [])
    const updated = currentList.filter((_, i) => i !== index)
    onChange('achievements', updated)
  }
  const achievementsList = Array.isArray(formData.achievements)
    ? formData.achievements.map(item => {
        if (typeof item === 'object' && item !== null) {
          return {
            ar: item.ar || item.name || '',
            en: item.en || item.nameEn || item.ar || ''
          }
        }
        return { ar: String(item), en: String(item) }
      })
    : (typeof formData.achievements === 'object' && formData.achievements !== null
      ? (() => {
          const ar = Array.isArray(formData.achievements.ar) ? formData.achievements.ar : []
          const en = Array.isArray(formData.achievements.en) ? formData.achievements.en : []
          const max = Math.max(ar.length, en.length)
          const list = []
          for (let i = 0; i < max; i++) {
            list.push({ ar: ar[i] || '', en: en[i] || ar[i] || '' })
          }
          return list
        })()
      : [])
  const selectedSpecIds = (Array.isArray(formData.specializations) ? formData.specializations : [])
    .map(getCurriculumId)
    .filter(Boolean)
  const toggleCurriculum = (curriculumId) => {
    onChange('specializations', (prev = []) => {
      const ids = prev.map(getCurriculumId).filter(Boolean)
      return ids.includes(curriculumId) ? ids.filter((id) => id !== curriculumId) : [...ids, curriculumId]
    })
  }
  const bioArValue = formData.aboutAr ?? (typeof formData.bio === 'object' ? formData.bio?.ar : formData.bio) ?? ''
  const bioEnValue = formData.aboutEn ?? (typeof formData.bio === 'object' ? formData.bio?.en : '') ?? ''
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'البيانات الأكاديمية' : 'Academic Information'}
      </h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400">
            {isRtl ? 'المناهج التي يدرّسها المعلم' : 'Curricula taught'}
          </label>
          <span className="text-[11px] font-bold text-slate-400">
            {isRtl ? `تم اختيار ${selectedSpecIds.length}` : `${selectedSpecIds.length} selected`}
          </span>
        </div>
        {curricula.length === 0 ? (
          <p className="text-xs text-slate-400 bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl p-4">
            {isRtl ? 'جاري تحميل المناهج...' : 'Loading curricula...'}
          </p>
        ) : (
          <div className="flex flex-wrap gap-2.5">
            {curricula.map((curr) => {
              const id = getCurriculumId(curr)
              const name = typeof curr.name === 'object' && curr.name !== null
                ? (isRtl ? curr.name.ar || curr.name.en : curr.name.en || curr.name.ar)
                : curr.name
              const isSelected = selectedSpecIds.includes(id)
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleCurriculum(id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-sm font-semibold border transition-all cursor-pointer ${isSelected
                    ? 'bg-[#0f7a6c] border-[#0f7a6c] text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-[#0f7a6c]/40'}`}
                >
                  {isSelected && <Check size={14} />}
                  <span>{name}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
          </label>
          <input
            type="number"
            min="0"
            value={formData.yearsOfExperience ?? ''}
            onChange={(e) => onChange('yearsOfExperience', e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'عدد سنوات الخبرة' : 'Years of experience'}
          />
        </div>
        {!isEdit && (
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'سعر الساعة ($) *' : 'Hourly Rate ($) *'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.hourlyRate ?? ''}
                onChange={(e) => onChange('hourlyRate', e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 pe-10 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
                placeholder={isRtl ? 'سعر الساعة بالدولار' : 'Hourly rate in USD'}
                dir="ltr"
              />
              <span className="absolute end-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">$</span>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'المؤهل العلمي (بالعربية)' : 'Qualification (Arabic)'}
          </label>
          <input
            type="text"
            value={formData.degreeAr || (typeof formData.degree === 'object' ? formData.degree?.ar : formData.degree) || formData.qualification || ''}
            onChange={(e) => {
              onChange('degreeAr', e.target.value)
              onChange('degree', e.target.value)
              onChange('qualification', e.target.value)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'مثال: ليسانس لغة عربية - جامعة عين شمس' : 'e.g. BA in Arabic'}
            dir="rtl"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'المؤهل العلمي (بالإنجليزية)' : 'Qualification (English)'}
          </label>
          <input
            type="text"
            value={formData.degreeEn || (typeof formData.degree === 'object' ? formData.degree?.en : '') || formData.qualificationEn || ''}
            onChange={(e) => {
              onChange('degreeEn', e.target.value)
              onChange('qualificationEn', e.target.value)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="e.g. BA in Arabic - Ain Shams University"
            dir="ltr"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'نبذة عن المعلم (بالعربية)' : 'About Teacher (Arabic)'}
          </label>
          <textarea
            rows={4}
            value={bioArValue}
            onChange={(e) => {
              onChange('aboutAr', e.target.value)
              onChange('bio', {
                ar: e.target.value,
                en: bioEnValue
              })
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400 resize-none leading-relaxed"
            placeholder={isRtl ? 'نبذة مختصرة عن خبرات المعلم ومؤهلاته بالعربية...' : 'Brief summary of teacher experience in Arabic...'}
            dir="rtl"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'نبذة عن المعلم (بالإنجليزية)' : 'About Teacher (English)'}
          </label>
          <textarea
            rows={4}
            value={bioEnValue}
            onChange={(e) => {
              onChange('aboutEn', e.target.value)
              onChange('bio', {
                ar: bioArValue,
                en: e.target.value
              })
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400 resize-none leading-relaxed"
            placeholder="Brief summary of teacher experience and credentials in English..."
            dir="ltr"
          />
        </div>
      </div>
      <div className="space-y-4">
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          {isRtl ? 'الإجازات والشهادات (باللغتين)' : 'Certificates & Ijazat (Bilingual)'}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              {isRtl ? 'الإجازة أو الشهادة (بالعربية)' : 'Certificate / Ijazah (Arabic)'}
            </label>
            <input
              type="text"
              value={newAchAr}
              onChange={(e) => setNewAchAr(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleAddAchievement(e)
                }
              }}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
              placeholder={isRtl ? 'مثال: إجازة في قراءة عاصم بروايتي حفص وشعبة' : 'e.g. Ijazah in Asim recitation'}
              dir="rtl"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              {isRtl ? 'الإجازة أو الشهادة (بالإنجليزية)' : 'Certificate / Ijazah (English)'}
            </label>
            <input
              type="text"
              value={newAchEn}
              onChange={(e) => setNewAchEn(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleAddAchievement(e)
                }
              }}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
              placeholder="e.g. Certified Quran Teacher with Ijazah"
              dir="ltr"
            />
          </div>
        </div>
        <div className="flex justify-start">
          <button
            type="button"
            onClick={handleAddAchievement}
            className="px-8 py-2.5 bg-[#005953] hover:bg-[#004742] text-white text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {isRtl ? 'إضافة' : 'Add'}
          </button>
        </div>
        <div className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xs mt-2">
          <div className="bg-[#005953] px-6 py-2.5 flex items-center justify-between text-start">
            <span className="text-xs font-bold text-white">
              {isRtl ? 'الإجازات و الشهادات' : 'Achievements & Certificates'}
            </span>
            <span className="text-[11px] font-medium text-emerald-100">
              {isRtl ? '(باللغتين العربية والإنجليزية)' : '(Arabic & English)'}
            </span>
          </div>
          <div className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 text-start">
            {achievementsList.length === 0 ? (
              <div className="px-6 py-6 text-xs text-slate-400 text-center">
                {isRtl ? 'لا توجد إجازات أو شهادات مضافة حالياً' : 'No achievements added yet'}
              </div>
            ) : (
              achievementsList.map((item, index) => (
                <div key={index} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 block">
                        {isRtl ? 'باللغة العربية' : 'Arabic'}
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100" dir="rtl">
                        {item.ar || '-'}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 block">
                        {isRtl ? 'باللغة الإنجليزية' : 'English'}
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100" dir="ltr">
                        {item.en || '-'}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAchievement(index)}
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-all cursor-pointer self-end sm:self-center shrink-0"
                    title={isRtl ? 'حذف' : 'Delete'}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}