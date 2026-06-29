import { Eye, Pencil, Star } from 'lucide-react'

export default function TeachersListItem({
  teacher,
  isSelected,
  onSelectTeacher,
  onViewDetails,
  onOpenEditScreen,
  isRtl,
  t
}) {
  const initial = teacher?.name?.trim().charAt(0) || 'ف'
  const isSuspended = teacher.status !== 'Active'

  return (
    <div
      onClick={() => onSelectTeacher(teacher.id)}
      className={`bg-white dark:bg-slate-900 rounded-3xl border p-5 shadow-soft hover:shadow-md transition-all cursor-pointer ${isSelected
          ? 'border-brand-500/40 ring-1 ring-brand-500/20'
          : 'border-slate-100 dark:border-slate-800/80'
        }`}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center text-xl font-bold">
            {initial}
          </div>

          <div className="space-y-1 text-start">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 dark:text-white">
                {teacher.name}
              </span>

              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${isSuspended
                  ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400'
                  : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
                }`}>
                <span className={`w-1 h-1 rounded-full me-1.5 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
                {isSuspended
                  ? t('adminDashboard.teachers.suspended', 'موقوف')
                  : t('adminDashboard.teachers.active', 'نشط')}
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
              {teacher.subject}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:gap-8 text-center bg-slate-50/50 dark:bg-slate-950/25 p-3 rounded-2xl border border-slate-100/50 dark:border-slate-850/50 flex-1 max-w-lg w-full">
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {t('adminDashboard.teachers.groups', 'المجموعات')}
            </p>
            <p className="text-sm font-extrabold text-slate-700 dark:text-slate-200 mt-0.5">
              {teacher.groupsCount}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {t('adminDashboard.teachers.sessions', 'الحصص')}
            </p>
            <p className="text-sm font-extrabold text-slate-700 dark:text-slate-200 mt-0.5">
              {teacher.totalSessions}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {t('adminDashboard.teachers.earnings', 'الأرباح')}
            </p>
            <p className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 truncate max-w-[80px]" title={`${teacher.totalEarnings} ر.س`}>
              {teacher.totalEarnings}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {t('adminDashboard.teachers.rating', 'التقييم')}
            </p>
            <p className="text-sm font-extrabold text-amber-500 mt-0.5 flex items-center justify-center gap-0.5">
              <span>{teacher.rating}</span>
              <Star size={11} fill="currentColor" className="text-amber-500" />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              if (onViewDetails) {
                onViewDetails(teacher)
              } else {
                onSelectTeacher(teacher.id)
              }
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-450 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-350 transition-colors cursor-pointer"
          >
            <Eye size={14} />
            <span>{t('adminDashboard.teachers.viewDetails', 'عرض التفاصيل')}</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpenEditScreen(teacher)
            }}
            className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer active:scale-95"
          >
            <Pencil size={12} />
            <span>{isRtl ? 'تعديل' : 'Edit'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}