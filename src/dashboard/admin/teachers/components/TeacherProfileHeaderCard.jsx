import { useMemo } from 'react'
import { Star, Users, DollarSign, BookOpen, Award, Pencil } from 'lucide-react'

export default function TeacherProfileHeaderCard({
  formData,
  isRtl,
  t
}) {
  const avatarLetter = useMemo(() => {
    return formData.name ? formData.name.trim().charAt(0) : 'ف'
  }, [formData.name])

  const isSuspended = formData.status !== 'Active'

  return (
    <div className="space-y-6">

      <div className="flex justify-end select-none">
        <div className="px-5 py-2.5 bg-brand-500 text-white rounded-2xl text-sm font-bold flex items-center gap-2 shadow-md shadow-brand-500/10">
          <Pencil size={16} />
          <span>{isRtl ? 'تعديل البيانات' : 'Edit Data'}</span>
        </div>
      </div>

      {/* Main card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">

        {/* Profile info header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-5">

          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center text-2xl font-black">
              {avatarLetter}
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xl font-bold text-slate-850 dark:text-white">
                {formData.name}
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
                  {formData.subject}
                </span>
                <span className="text-xs text-slate-350 dark:text-slate-655 font-bold">|</span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <span>{isRtl ? `${formData.rating} من 5` : `${formData.rating} of 5`}</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status badge */}
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold ${isSuspended
            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400'
            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
            }`}>
            <span className={`w-1.5 h-1.5 rounded-full me-2 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
            {isSuspended
              ? t('adminDashboard.teachers.suspended', 'غير نشط')
              : t('adminDashboard.teachers.active', 'نشط')}
          </span>

        </div>

        {/* 5 Stats boxes row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">

          {/* Rating */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/25 border border-slate-100/50 dark:border-slate-850/60 rounded-2xl flex flex-col items-center text-center justify-center">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 mb-2">
              <Award size={18} />
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {t('adminDashboard.teachers.rating', 'التقييم')}
            </p>
            <p className="text-sm font-black text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-0.5">
              <span>{formData.rating}</span>
              <Star size={11} fill="currentColor" className="text-amber-500" />
            </p>
          </div>

          {/* Sessions */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/25 border border-slate-100/50 dark:border-slate-850/60 rounded-2xl flex flex-col items-center text-center justify-center">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 mb-2">
              <BookOpen size={18} />
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {isRtl ? 'الحصص' : 'Sessions'}
            </p>
            <p className="text-sm font-black text-slate-700 dark:text-slate-300 mt-1">
              {formData.totalSessions}
            </p>
          </div>

          {/* Due Earnings */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/25 border border-slate-100/50 dark:border-slate-850/60 rounded-2xl flex flex-col items-center text-center justify-center">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 mb-2">
              <DollarSign size={18} />
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold truncate max-w-[80px]">
              {isRtl ? 'الأرباح المستحقة' : 'Due Earnings'}
            </p>
            <p className="text-sm font-black text-slate-700 dark:text-slate-300 mt-1">
              {formData.dueEarnings} {isRtl ? 'ر.س' : 'SAR'}
            </p>
          </div>

          {/* Total Earnings */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/25 border border-slate-100/50 dark:border-slate-850/60 rounded-2xl flex flex-col items-center text-center justify-center">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 mb-2">
              <DollarSign size={18} />
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {isRtl ? 'إجمالي الأرباح' : 'Total Earnings'}
            </p>
            <p className="text-sm font-black text-slate-700 dark:text-slate-300 mt-1">
              {formData.totalEarnings} {isRtl ? 'ر.س' : 'SAR'}
            </p>
          </div>

          {/* Groups */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/25 border border-slate-100/50 dark:border-slate-850/60 rounded-2xl flex flex-col items-center text-center justify-center">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 mb-2">
              <Users size={18} />
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
              {isRtl ? 'المجموعات' : 'Groups'}
            </p>
            <p className="text-sm font-black text-slate-700 dark:text-slate-300 mt-1">
              {formData.groupsCount}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
