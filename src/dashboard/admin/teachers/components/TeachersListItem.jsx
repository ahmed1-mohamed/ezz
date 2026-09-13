import { Eye, Pencil, Trash2, Star, Ban, CheckCircle2, Globe, BookOpen } from 'lucide-react'

export default function TeachersListItem({
  teacher,
  isSelected,
  onSelectTeacher,
  onViewDetails,
  onOpenEditScreen,
  onDelete,
  onToggleStatus,
  isRtl,
  t
}) {
  const initial = teacher?.name?.trim()?.charAt(0) || 'م'
  const isSuspended = !teacher.active

  return (
    <div
      onClick={() => onSelectTeacher(teacher.id)}
      className={`bg-white dark:bg-slate-900 rounded-3xl border p-4 sm:p-5 shadow-soft hover:shadow-md transition-all cursor-pointer ${
        isSelected
          ? 'border-[#005953] ring-2 ring-[#005953]/20 shadow-md'
          : 'border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700'
      }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left / Start: Avatar & Identity */}
        <div className="flex items-center gap-3.5 flex-1 min-w-0 w-full md:w-auto">
          <div className="relative shrink-0">
            {teacher.image ? (
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-12 h-12 rounded-2xl object-cover border border-slate-100 dark:border-slate-800 shadow-xs"
                onError={(e) => {
                  e.target.style.display = 'none'
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
                }}
              />
            ) : null}
            <div
              style={{ display: teacher.image ? 'none' : 'flex' }}
              className="w-12 h-12 rounded-2xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-emerald-400 items-center justify-center text-lg font-black shrink-0 border border-[#005953]/20 shadow-xs"
            >
              {initial}
            </div>
            {teacher.showOnWebsite && (
              <span
                className="absolute -top-1 -end-1 w-4 h-4 bg-sky-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] text-white"
                title={isRtl ? 'معروض في الموقع الإلكتروني' : 'Shown on website'}
              >
                <Globe size={9} />
              </span>
            )}
          </div>

          <div className="space-y-1 text-start flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-slate-800 dark:text-white text-sm sm:text-base truncate max-w-[180px] sm:max-w-xs">
                {teacher.name}
              </span>

              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 ${
                  isSuspended
                    ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400'
                    : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full me-1 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
                {isSuspended
                  ? (isRtl ? 'موقوف' : 'Stopped')
                  : (isRtl ? 'نشط' : 'Active')}
              </span>

              {teacher.profitPercentage > 0 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 shrink-0">
                  {teacher.profitPercentage}% {isRtl ? 'ربح' : 'profit'}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
              {teacher.degree || teacher.subject || (isRtl ? 'معلم معتمد' : 'Certified Teacher')}
            </p>

            {/* Specializations tags */}
            {teacher.specializations && teacher.specializations.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {teacher.specializations.slice(0, 3).map((spec) => (
                  <span
                    key={spec.id || spec._id || spec.name}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    <BookOpen size={10} className="text-[#005953] dark:text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[120px]">{spec.name}</span>
                  </span>
                ))}
                {teacher.specializations.length > 3 && (
                  <span className="text-[10px] font-bold text-slate-400 self-center">
                    +{teacher.specializations.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Group: Metrics & Compact Action Icons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800/80">
          {/* Metrics Pill */}
          <div className="flex items-center justify-around gap-2.5 sm:gap-3.5 bg-slate-50/80 dark:bg-slate-950/50 px-3.5 py-2 rounded-2xl border border-slate-100 dark:border-slate-800/80 shrink-0">
            <div className="text-center px-1">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold leading-tight">
                {t('adminDashboard.teachers.groups', 'المجموعات')}
              </p>
              <p className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200 mt-0.5 leading-tight">
                {teacher.totalGroups ?? 0}
              </p>
            </div>
            <div className="w-px h-5 bg-slate-200/80 dark:bg-slate-800" />
            <div className="text-center px-1">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold leading-tight">
                {t('adminDashboard.teachers.sessions', 'الحصص')}
              </p>
              <p className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200 mt-0.5 leading-tight">
                {teacher.totalLessons ?? 0}
              </p>
            </div>
            <div className="w-px h-5 bg-slate-200/80 dark:bg-slate-800" />
            <div className="text-center px-1">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold leading-tight">
                {isRtl ? 'الطلاب' : 'Students'}
              </p>
              <p className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200 mt-0.5 leading-tight">
                {teacher.totalStudents ?? 0}
              </p>
            </div>
            <div className="w-px h-5 bg-slate-200/80 dark:bg-slate-800" />
            <div className="text-center px-1">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold leading-tight">
                {t('adminDashboard.teachers.rating', 'التقييم')}
              </p>
              <p className="text-xs sm:text-sm font-black text-amber-500 mt-0.5 leading-tight flex items-center justify-center gap-0.5">
                <span>{teacher.rating ?? 0}</span>
                <Star size={11} fill="currentColor" className="text-amber-500" />
              </p>
            </div>
          </div>

          {/* Action Icons (Compact square buttons without text) */}
          <div className="flex items-center gap-1.5 shrink-0">
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
              className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#005953] dark:hover:text-emerald-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
              title={t('adminDashboard.teachers.viewDetails', 'عرض التفاصيل')}
              aria-label={t('adminDashboard.teachers.viewDetails', 'عرض التفاصيل')}
            >
              <Eye size={16} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenEditScreen(teacher)
              }}
              className="w-9 h-9 flex items-center justify-center bg-[#005953] hover:bg-[#004742] text-white rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
              title={isRtl ? 'تعديل المعلم' : 'Edit teacher'}
              aria-label={isRtl ? 'تعديل المعلم' : 'Edit teacher'}
            >
              <Pencil size={15} />
            </button>

            {onToggleStatus && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleStatus(teacher.id)
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all cursor-pointer active:scale-95 ${
                  isSuspended
                    ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400'
                }`}
                title={isSuspended ? (isRtl ? 'تفعيل الحساب' : 'Activate') : (isRtl ? 'إيقاف الحساب' : 'Suspend')}
                aria-label={isSuspended ? (isRtl ? 'تفعيل الحساب' : 'Activate') : (isRtl ? 'إيقاف الحساب' : 'Suspend')}
              >
                {isSuspended ? <CheckCircle2 size={16} /> : <Ban size={16} />}
              </button>
            )}

            {onDelete && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(teacher)
                }}
                className="w-9 h-9 flex items-center justify-center bg-rose-50 hover:bg-rose-100 text-rose-500 dark:bg-rose-950/30 dark:text-rose-400 rounded-xl transition-all cursor-pointer active:scale-95"
                title={isRtl ? 'حذف المعلم' : 'Delete teacher'}
                aria-label={isRtl ? 'حذف المعلم' : 'Delete teacher'}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}