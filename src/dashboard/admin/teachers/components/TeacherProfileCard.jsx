import { useMemo } from 'react'
import { Star, Pencil, Ban, CheckCircle2 } from 'lucide-react'

export default function TeacherProfileCard({
  teacher,
  isRtl,
  t,
  onEdit,
  onToggleStatus
}) {
  const avatarLetter = useMemo(() => {
    return teacher?.name ? teacher?.name?.trim().charAt(0) : 'ف'
  }, [teacher])

  if (!teacher) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-10 text-center text-slate-400 dark:text-slate-500 font-bold shadow-soft">
        {isRtl ? 'اختر معلماً لعرض تفاصيله' : 'Select a teacher to view details'}
      </div>
    )
  }

  const isSuspended = teacher.status !== 'Active'

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft flex flex-col items-center text-center space-y-6">

      <div className="w-20 h-20 rounded-2xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center text-3xl font-black">
        {avatarLetter}
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          {teacher.name}
        </h3>
        <p className="text-xs text-slate-405 dark:text-slate-500 font-semibold">
          {teacher.subject}
        </p>
      </div>

      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      <div className="w-full divide-y divide-slate-100 dark:divide-slate-800 text-sm">

        <div className="flex justify-between py-3">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.joinDate', 'تاريخ الانضمام')}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.joinDate}
          </span>
        </div>

        {/* Groups Count */}
        <div className="flex justify-between py-3">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.groupsCount', 'عدد المجموعات')}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.groupsCount} {isRtl ? 'مجموعات' : 'groups'}
          </span>
        </div>

        {/* Sessions Count */}
        <div className="flex justify-between py-3">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.totalSessions', 'إجمالي الحصص')}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.totalSessions} {isRtl ? 'حصة' : 'sessions'}
          </span>
        </div>

        {/* Total Earnings */}
        <div className="flex justify-between py-3">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.totalEarnings', 'إجمالي الأرباح')}
          </span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {teacher.totalEarnings} {isRtl ? 'ر.س' : 'SAR'}
          </span>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3 pt-2">

        {/* Edit Button */}
        <button
          onClick={() => onEdit(teacher)}
          className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
        >
          <Pencil size={16} />
          <span>{t('adminDashboard.teachers.editData', 'تعديل البيانات')}</span>
        </button>

        {/* Suspend Status Button */}
        <button
          onClick={() => onToggleStatus(teacher.id)}
          className={`w-full py-3 font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer ${isSuspended
            ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400'
            : 'bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/20 dark:text-rose-400'
            }`}
        >
          {isSuspended ? (
            <>
              <CheckCircle2 size={16} />
              <span>{t('adminDashboard.teachers.activateAccount', 'تفعيل الحساب')}</span>
            </>
          ) : (
            <>
              <Ban size={16} />
              <span>{t('adminDashboard.teachers.suspendAccount', 'تعليق الحساب')}</span>
            </>
          )}
        </button>

      </div>

    </div>
  )
}
