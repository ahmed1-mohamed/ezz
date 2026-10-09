import { useState } from 'react'
import { Trash2, ChevronDown } from 'lucide-react'

const fallbackSubjects = [
  'القرآن الكريم',
  'التجويد والقراءات',
  'اللغة العربية',
  'الدراسات الإسلامية',
  'القاعدة النورانية'
]

export default function TeacherAcademicInfoCard({
  formData,
  onChange,
  isRtl = true,
  curricula = []
}) {
  const [newAchievement, setNewAchievement] = useState('')

  const handleAddAchievement = (e) => {
    e?.preventDefault?.()
    if (!newAchievement.trim()) return

    const currentList = Array.isArray(formData.achievements) ? formData.achievements : []
    const updated = [...currentList, newAchievement.trim()]
    onChange('achievements', updated)
    // Also sync to certificates if backend expects them there
    const currentCerts = Array.isArray(formData.certificates) ? formData.certificates : []
    if (!currentCerts.includes(newAchievement.trim())) {
      onChange('certificates', [...currentCerts, newAchievement.trim()])
    }
    setNewAchievement('')
  }

  const handleRemoveAchievement = (index) => {
    const currentList = Array.isArray(formData.achievements) ? formData.achievements : []
    const itemToRemove = currentList[index]
    const updated = currentList.filter((_, i) => i !== index)
    onChange('achievements', updated)

    const currentCerts = Array.isArray(formData.certificates) ? formData.certificates : []
    onChange('certificates', currentCerts.filter(c => c !== itemToRemove))
  }

  const achievementsList = Array.isArray(formData.achievements) && formData.achievements.length > 0
    ? formData.achievements
    : (Array.isArray(formData.certificates) ? formData.certificates.filter(c => typeof c === 'string') : [])

  const selectedSpecId = Array.isArray(formData.specializations) && formData.specializations.length > 0
    ? (typeof formData.specializations[0] === 'object' ? (formData.specializations[0].id || formData.specializations[0]._id) : formData.specializations[0])
    : ''

  const handleSelectCurriculum = (e) => {
    const value = e.target.value
    if (!value) return

    const matchedCurriculum = curricula.find(c => (c.id || c._id) === value)
    if (matchedCurriculum) {
      const cId = matchedCurriculum.id || matchedCurriculum._id
      const cName = typeof matchedCurriculum.name === 'object'
        ? (matchedCurriculum.name.ar || matchedCurriculum.name.en)
        : matchedCurriculum.name

      onChange('specializations', [cId])
      onChange('subject', cName)
    } else {
      onChange('subject', value)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'البيانات الأكاديمية' : 'Academic Information'}
      </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'التخصص' : 'Specialization'}
          </label>
          <div className="relative">
            <select
              value={selectedSpecId || formData.subject || ''}
              onChange={handleSelectCurriculum}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 pe-10 outline-none transition-all text-sm font-medium appearance-none cursor-pointer"
            >
              <option value="" disabled>
                {isRtl ? 'اختر التخصص' : 'Select Specialization'}
              </option>
              {curricula && curricula.length > 0 ? (
                curricula.map((curr) => {
                  const id = curr.id || curr._id
                  const name = typeof curr.name === 'object'
                    ? (isRtl ? curr.name.ar || curr.name.en : curr.name.en || curr.name.ar)
                    : curr.name
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  )
                })
              ) : (
                fallbackSubjects.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))
              )}
            </select>
            <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 ${isRtl ? 'left-3.5' : 'right-3.5'}`}>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
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
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'عدد سنوات الخبرة' : 'Years of experience'}
          />
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'المؤهل' : 'Qualification'}
          </label>
          <input
            type="text"
            value={formData.degreeAr || formData.degree || formData.qualification || ''}
            onChange={(e) => {
              onChange('degreeAr', e.target.value)
              onChange('degree', e.target.value)
              onChange('qualification', e.target.value)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'المؤهل' : 'Qualification'}
            dir="rtl"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            qualification
          </label>
          <input
            type="text"
            value={formData.degreeEn || formData.qualificationEn || ''}
            onChange={(e) => {
              onChange('degreeEn', e.target.value)
              onChange('qualificationEn', e.target.value)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="qualification"
            dir="ltr"
          />
        </div>
      </div>

       <div>
        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
          {isRtl ? 'نبذة عن المعلم' : 'About the Teacher'}
        </label>
        <textarea
          rows={4}
          value={formData.bio || formData.aboutAr || ''}
          onChange={(e) => {
            onChange('bio', e.target.value)
            onChange('aboutAr', e.target.value)
          }}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400 resize-none leading-relaxed"
          placeholder={isRtl ? 'نبذة مختصرة عن خبرات المعلم ومؤهلاته...' : 'Brief summary of teacher experience and credentials...'}
        />
      </div>

       <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإجازات والشهادات' : 'Certificates & Ijazat'}
          </label>
          <input
            type="text"
            value={newAchievement}
            onChange={(e) => setNewAchievement(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddAchievement()
              }
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'الإجازات' : 'Ijazat & Certificates'}
          />
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

         <div className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="bg-[#005953] px-6 py-2.5 text-start">
            <span className="text-xs font-bold text-white">
              {isRtl ? 'الإجازات و الشهادات' : 'Achievements & Certificates'}
            </span>
          </div>
          <div className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 text-start">
            {achievementsList.length === 0 ? (
              <div className="px-6 py-3.5 text-xs text-slate-400">
                {isRtl ? 'لا توجد إجازات مضافة' : 'No achievements added yet'}
              </div>
            ) : (
              achievementsList.map((item, index) => {
                const title = typeof item === 'object' ? (item.ar || item.name || item.en) : item
                return (
                  <div key={index} className="px-6 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                    <button
                      type="button"
                      onClick={() => handleRemoveAchievement(index)}
                      className="p-1 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                      title={isRtl ? 'حذف' : 'Delete'}
                    >
                      <Trash2 size={16} />
                    </button>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {title}
                    </span>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}