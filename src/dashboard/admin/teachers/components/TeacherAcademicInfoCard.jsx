import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const subjects = [
  'القرآن الكريم',
  'التجويد والقراءات',
  'اللغة العربية',
  'الدراسات الإسلامية',
  'القاعدة النورانية'
]

const countries = [
  { name: 'مصر', nameEn: 'Egypt' },
  { name: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia' },
  { name: 'الإمارات العربية المتحدة', nameEn: 'UAE' },
  { name: 'الكويت', nameEn: 'Kuwait' },
  { name: 'قطر', nameEn: 'Qatar' }
]

export default function TeacherAcademicInfoCard({
  formData,
  onChange,
  isRtl,
  t,
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

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Section Header */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        {isRtl ? 'البيانات الأكاديمية' : 'Academic Information'}
      </h3>

      {/* Row 1: Specialization & Years of Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Specialization dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'التخصص' : 'Specialization'}
          </label>
          <select
            value={formData.subject || ''}
            onChange={(e) => onChange('subject', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
          >
            <option value="" disabled>
              {isRtl ? 'اختر التخصص' : 'Select Specialization'}
            </option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
          </label>
          <div className="relative flex items-center">
            <input
              type="number"
              value={formData.experienceYears || ''}
              onChange={(e) => onChange('experienceYears', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
              placeholder={isRtl ? 'عدد سنوات الخبرة' : 'Years of experience'}
            />
          </div>
        </div>

      </div>

      {/* Row 2: Qualification (qualification in En & المؤهل in Ar) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Qualification Arabic */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'المؤهل' : 'Qualification (AR)'}
          </label>
          <input
            type="text"
            value={formData.qualification || ''}
            onChange={(e) => onChange('qualification', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'المؤهل' : 'Qualification'}
          />
        </div>

        {/* Qualification English */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            qualification
          </label>
          <input
            type="text"
            value={formData.qualificationEn || ''}
            onChange={(e) => onChange('qualificationEn', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="qualification"
            dir="ltr"
          />
        </div>

      </div>

      {/* Country (Only show if we are not rendering the inline About/Licenses, to match screenshot spacing) */}
      {!showAboutAndLicenses && (
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البلد' : 'Country'}
          </label>
          <select
            value={formData.country || 'مصر'}
            onChange={(e) => onChange('country', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm cursor-pointer"
          >
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {isRtl ? c.name : c.nameEn}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Conditionally Render About biography & Licenses inline inside the card */}
      {showAboutAndLicenses && (
        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
          
          {/* Biography Textarea */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'نبذة عن المعلم' : 'About Teacher'}
            </label>
            <textarea
              rows={4}
              value={formData.aboutAr || ''}
              onChange={(e) => onChange('aboutAr', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm resize-none leading-relaxed"
              placeholder={isRtl ? 'نبذة مختصرة عن خبرات المعلم ومؤهلاته...' : 'A brief about the teacher\'s experiences and qualifications...'}
            />
          </div>

          {/* Licenses & Certificates section */}
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'الإجازات والشهادات' : 'Licenses & Certificates'}
            </label>

            {/* Inline Add Input */}
            <div className="flex gap-3">
              <input
                type="text"
                value={newLicense}
                onChange={(e) => setNewLicense(e.target.value)}
                className="flex-1 bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none text-sm"
                placeholder={isRtl ? 'الإجازات' : 'Licenses'}
              />
              <button
                type="button"
                onClick={handleAddLicense}
                className="px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white text-sm font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isRtl ? 'إضافة' : 'Add'}
              </button>
            </div>

            {/* List with Green Header */}
            <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden">
              <div className="bg-[#005953] px-4 py-3 text-start">
                <span className="text-xs font-bold text-white">
                  {isRtl ? 'الإجازات و الشهادات' : 'Licenses & Certificates'}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950/40 p-4 divide-y divide-slate-100 dark:divide-slate-800/60 text-start">
                {(!formData.certificates || formData.certificates.length === 0) ? (
                  <p className="text-xs text-slate-400 py-1">
                    {isRtl ? 'لا توجد إجازات مضافة.' : 'No licenses added.'}
                  </p>
                ) : (
                  formData.certificates.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {cert}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveLicense(index)}
                        className="p-1 bg-white hover:bg-rose-50 border border-slate-100 hover:border-rose-200 text-rose-500 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}
