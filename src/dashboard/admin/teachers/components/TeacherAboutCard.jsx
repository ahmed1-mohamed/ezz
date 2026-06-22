export default function TeacherAboutCard({
  formData,
  onChange,
  isRtl,
  t
}) {
  return (
    <div className="space-y-6">
      
      {/* Arabic About card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-4 text-start">
        <h3 className="text-sm font-bold text-slate-800 dark:text-white">
          {isRtl ? 'نبذة عن المعلم' : 'About the Teacher (Arabic)'}
        </h3>
        <textarea
          value={formData.aboutAr || ''}
          onChange={(e) => onChange('aboutAr', e.target.value)}
          rows={4}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm resize-none leading-relaxed"
          placeholder={isRtl ? 'أدخل نبذة عن المعلم هنا...' : 'Enter Arabic biography...'}
        />
      </div>

      {/* English About card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-4 text-start">
        <h3 className="text-sm font-bold text-slate-800 dark:text-white">
          {isRtl ? 'Brief About Teacher' : 'About the Teacher (English)'}
        </h3>
        <textarea
          value={formData.aboutEn || ''}
          onChange={(e) => onChange('aboutEn', e.target.value)}
          rows={4}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm resize-none leading-relaxed"
          placeholder={isRtl ? 'Enter biography in English...' : 'Enter English biography...'}
          dir="ltr"
        />
      </div>

    </div>
  )
}
