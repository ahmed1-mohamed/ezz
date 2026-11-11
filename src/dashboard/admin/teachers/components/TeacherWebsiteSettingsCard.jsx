import { Globe, Eye, EyeOff, Users, Video } from 'lucide-react'

export default function TeacherWebsiteSettingsCard({
  formData,
  onChange,
  isRtl = true,
}) {
  const isShowOnWebsite = Boolean(formData?.showOnWebsite)
  const handleToggleShowOnWebsite = () => {
    onChange('showOnWebsite', !isShowOnWebsite)
  }
  const handleStudentsChange = (e) => {
    const val = e.target.value
    onChange('totalStudents', val === '' ? '' : Math.max(0, parseInt(val, 10) || 0))
  }
  const handleLessonsChange = (e) => {
    const val = e.target.value
    onChange('totalLessons', val === '' ? '' : Math.max(0, parseInt(val, 10) || 0))
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 rounded-2xl shrink-0">
            <Globe size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'العرض في الموقع الإلكتروني والإحصائيات' : 'Website Display & Public Stats'}
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {isRtl
                ? 'التحكم في ظهور المعلم على الموقع وإحصائيات الطلاب والحصص المعروضة للزوار'
                : 'Manage teacher public visibility and displayed student & lesson counters'}
            </p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shrink-0 ${
            isShowOnWebsite
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
          }`}
        >
          {isShowOnWebsite ? <Eye size={13} /> : <EyeOff size={13} />}
          <span>{isShowOnWebsite ? (isRtl ? 'ظاهر للزوار' : 'Visible on Website') : (isRtl ? 'مخفي حالياً' : 'Hidden from Website')}</span>
        </span>
      </div>
      <div className="p-4 rounded-2xl bg-[#f8fbfa] dark:bg-slate-950/50 border border-slate-150 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {isRtl ? 'عرض المعلم في الموقع الإلكتروني' : 'Show Teacher on Website'}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {isRtl
              ? 'عند التفعيل، سيتمكن أولياء الأمور والطلاب من استعراض ملف المعلم في قائمة المعلمين وحجز الحصص'
              : 'When enabled, public visitors and students can browse the profile and book trial lessons'}
          </p>
        </div>
        <button
          type="button"
          onClick={handleToggleShowOnWebsite}
          aria-label={isRtl ? 'تبديل حالة العرض في الموقع' : 'Toggle website visibility'}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none cursor-pointer shrink-0 ${
            isShowOnWebsite ? 'bg-[#00594C]' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
              isShowOnWebsite
                ? (isRtl ? '-translate-x-6' : 'translate-x-6')
                : (isRtl ? '-translate-x-1' : 'translate-x-1')
            }`}
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Users size={14} className="text-[#00594C] dark:text-emerald-400" />
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400">
              {isRtl ? 'عدد الطلاب' : 'Number of Students'}
            </label>
          </div>
          <input
            type="number"
            min="0"
            value={formData.totalStudents ?? ''}
            onChange={handleStudentsChange}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'أدخل عدد الطلاب (مثال: 25)' : 'e.g. 25'}
            dir="ltr"
          />
          <p className="text-[11px] text-slate-400 mt-1">
            {isRtl ? 'إجمالي عدد الطلاب الذين التحقوا بالمعلم ويظهر في بطاقة المعلم' : 'Total enrolled students shown on the public profile'}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Video size={14} className="text-[#00594C] dark:text-emerald-400" />
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400">
              {isRtl ? 'عدد الحصص' : 'Number of Lessons'}
            </label>
          </div>
          <input
            type="number"
            min="0"
            value={formData.totalLessons ?? ''}
            onChange={handleLessonsChange}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder={isRtl ? 'أدخل عدد الحصص (مثال: 120)' : 'e.g. 120'}
            dir="ltr"
          />
          <p className="text-[11px] text-slate-400 mt-1">
            {isRtl ? 'إجمالي عدد الحصص التعليمية المكتملة للمعلم' : 'Total completed lessons conducted by this teacher'}
          </p>
        </div>
      </div>
    </div>
  )
}

