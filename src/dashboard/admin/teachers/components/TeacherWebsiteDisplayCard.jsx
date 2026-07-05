export default function TeacherWebsiteDisplayCard({
  formData,
  onChange,
  isRtl,
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">

      <h3 className="text-base font-bold text-slate-850 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        {isRtl ? 'بيانات صفحة العرض في الموقع الإلكتروني' : 'Website Profile Display Data'}
      </h3>

      <div className="space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'عدد الطلاب' : 'Number of Students'}
            </label>
            <input
              type="number"
              value={formData.studentsCount || ''}
              onChange={(e) => onChange('studentsCount', Number(e.target.value))}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'عدد الطلاب' : 'e.g. 45'}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
            </label>
            <input
              type="number"
              value={formData.experienceYears || ''}
              onChange={(e) => onChange('experienceYears', Number(e.target.value))}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'سنوات الخبرة' : 'e.g. 8'}
            />
          </div>

        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اجمالي الحصص' : 'Total Sessions'}
          </label>
          <input
            type="number"
            value={formData.totalSessions || ''}
            onChange={(e) => onChange('totalSessions', Number(e.target.value))}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
            placeholder={isRtl ? 'عدد الحصص' : 'e.g. 120'}
          />
        </div>

      </div>

    </div>
  )
}