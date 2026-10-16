import { Users, DollarSign, BookOpen, Star, Pencil } from 'lucide-react'

export default function TeacherDetailsHeaderCard({ teacher, isRtl = true, onOpenHourlyRateModal }) {
  const isSuspended = teacher?.active === false

  const teacherRawName = typeof teacher?.name === 'object'
    ? (isRtl ? teacher?.name?.ar : teacher?.name?.en) || teacher?.name?.ar || teacher?.name?.en
    : teacher?.name
  const initial = teacherRawName?.trim()?.charAt(0) || 'م'

  const totalGroups = teacher?.totalGroups ?? teacher?.groupsCount ?? 0
  const hourlyRate = teacher?.hourlyRate ?? 0
  const totalEarnings = teacher?.totalEarnings ?? 0
  const dueEarnings = teacher?.dueEarnings ?? 0
  const totalLessons = teacher?.totalLessons ?? teacher?.totalSessions ?? 0
  const ratingNumber = teacher?.rating !== undefined && teacher?.rating !== null ? Number(teacher.rating) : 5
  const rating = ratingNumber.toFixed(1)

  const subjectName = teacher?.subject ||
    (Array.isArray(teacher?.specializations) && teacher?.specializations.length > 0
      ? (typeof teacher.specializations[0] === 'object' ? (teacher.specializations[0].name?.ar || teacher.specializations[0].name) : teacher.specializations[0])
      : (isRtl ? 'غير محدد' : 'Not specified'))

  const teacherDisplayName = teacherRawName
    ? (teacherRawName.startsWith('أ.') ? teacherRawName : `أ. ${teacherRawName}`)
    : (isRtl ? 'معلم' : 'Teacher')

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {teacher?.image ? (
            <img
              src={teacher.image}
              alt={teacherDisplayName}
              className="w-16 h-16 rounded-2xl object-cover shadow-xs border border-slate-100 dark:border-slate-800"
              onError={(e) => {
                e.target.style.display = 'none'
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            style={{ display: teacher?.image ? 'none' : 'flex' }}
            className="w-16 h-16 rounded-2xl bg-[#005953] text-white items-center justify-center text-2xl font-bold shrink-0 shadow-xs"
          >
            {initial}
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {teacherDisplayName}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              {subjectName}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {rating} {isRtl ? 'من 5' : 'out of 5'}
              </span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(ratingNumber)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
            isSuspended
              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50'
              : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isSuspended ? 'bg-rose-500' : 'bg-emerald-500'}`} />
          <span>{isSuspended ? (isRtl ? 'موقوف' : 'Suspended') : (isRtl ? 'نشط' : 'Active')}</span>
        </span>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
        
        <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <Users size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'المجموعات' : 'Groups'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {totalGroups}
            </span>
          </div>
        </div>

        
        <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <DollarSign size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'إجمالي الأرباح' : 'Total Earnings'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {totalEarnings} $
            </span>
          </div>
        </div>

        
        <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <DollarSign size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'الأرباح المستحقة' : 'Due Earnings'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {dueEarnings} $
            </span>
          </div>
        </div>

        
        <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <BookOpen size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'الحصص' : 'Lessons'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {totalLessons}
            </span>
          </div>
        </div>

        
        <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between col-span-2 sm:col-span-1">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <DollarSign size={18} />
          </div>
          <div className="text-end">
            <div className="flex items-center justify-end gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
                {isRtl ? 'سعر الساعة' : 'Hourly Rate'}
              </span>
              {onOpenHourlyRateModal && (
                <button
                  type="button"
                  onClick={onOpenHourlyRateModal}
                  className="text-[#005953] hover:text-[#004742] dark:text-emerald-400 p-0.5 rounded cursor-pointer transition-colors"
                  title={isRtl ? 'تعديل سعر الساعة' : 'Edit hourly rate'}
                >
                  <Pencil size={12} />
                </button>
              )}
            </div>
            <span className="text-lg font-extrabold text-teal-600 dark:text-teal-400 block mt-0.5">
              {hourlyRate} $
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
