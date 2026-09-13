import { Globe } from 'lucide-react'

export default function TeacherWebsiteDisplayCard({
  formData,
  onChange,
  isRtl,
}) {
  const showOnWebsite = Boolean(formData.showOnWebsite)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <h3 className="text-base font-bold text-slate-850 dark:text-white flex items-center gap-2">
          <Globe size={18} className="text-sky-500" />
          <span>{isRtl ? 'الظهور في الموقع الإلكتروني' : 'Website Profile Display'}</span>
        </h3>

        {/* Toggle showOnWebsite */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showOnWebsite}
            onChange={(e) => onChange('showOnWebsite', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-[#005953]" />
          <span className="ms-3 text-xs font-bold text-slate-700 dark:text-slate-300">
            {showOnWebsite ? (isRtl ? 'معروض' : 'Enabled') : (isRtl ? 'مخفي' : 'Hidden')}
          </span>
        </label>
      </div>

      <div className="space-y-4">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          {isRtl
            ? 'تحديد ما إذا كان الملف الشخصي للمعلم سيظهر للزوار والطلاب في الصفحة العامة للموقع.'
            : 'Controls whether this teacher profile is visible publicly to visitors and students on the website.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
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
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'مثال: 45' : 'e.g. 45'}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
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
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'مثال: 120' : 'e.g. 120'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}