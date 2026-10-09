export default function TeacherWebsiteDisplayCard({
  formData,
  onChange,
  isRtl = true,
}) {
  const showOnWebsite = Boolean(formData.showOnWebsite)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'بيانات صفحه العرض' : 'Website Display Data'}
        </h2>

         <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showOnWebsite}
            onChange={(e) => onChange('showOnWebsite', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-[#005953]" />
          <span className="ms-2.5 text-xs font-bold text-slate-600 dark:text-slate-300">
            {showOnWebsite ? (isRtl ? 'معروض' : 'Visible') : (isRtl ? 'مخفي' : 'Hidden')}
          </span>
        </label>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'عدد الطلاب' : 'Number of Students'}
          </label>
          <input
            type="number"
            min="0"
            value={formData.totalStudents ?? formData.studentsCount ?? ''}
            onChange={(e) => {
              const val = e.target.value === '' ? '' : Number(e.target.value)
              onChange('totalStudents', val)
              onChange('studentsCount', val)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'عدد الطلاب' : 'Number of students'}
          />
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
            {isRtl ? 'اجمالي الحصص' : 'Total Lessons'}
          </label>
          <input
            type="number"
            min="0"
            value={formData.totalLessons ?? formData.totalSessions ?? ''}
            onChange={(e) => {
              const val = e.target.value === '' ? '' : Number(e.target.value)
              onChange('totalLessons', val)
              onChange('totalSessions', val)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'عدد الحصص' : 'Total lessons'}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'سعر المعلم بالساعة (ر.س)' : 'Hourly Rate (SAR)'}
          </label>
          <input
            type="number"
            min="0"
            value={formData.hourlyRate ?? ''}
            onChange={(e) => {
              const val = e.target.value === '' ? '' : Number(e.target.value)
              onChange('hourlyRate', val)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'سعر المعلم بالساعة' : 'Hourly rate'}
          />
        </div>
      </div>
    </div>
  )
}