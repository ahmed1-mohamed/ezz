import {
  Sparkles,
  Clock,
  CheckCircle2,
  XCircle,
} from 'lucide-react'

export default function TrialSessionsStats({
  stats = {},
  isRtl = true,
  mode = 'platform',
}) {
  const total = Number(stats.total ?? stats.all ?? 0)
  const pending = Number(stats.pending ?? 0)
  const assigned = Number(stats.scheduled ?? stats.assigned ?? 0)
  const accepted = Number(stats.accepted ?? 0)
  const cancelled = Number(stats.cancelled ?? stats.canceled ?? 0)
  const rejected = Number(stats.rejected ?? 0)
  const items = mode === 'website' ? [
    {
      title: isRtl ? 'إجمالي طلبات الموقع' : 'Website Requests',
      value: total,
      subValue: isRtl ? 'كافة الطلبات المقدمة عبر الموقع' : 'All incoming website submissions',
      icon: Sparkles,
      textColor: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400',
      borderColor: 'border-indigo-100 dark:border-indigo-900/30',
    },
    {
      title: isRtl ? 'بانتظار الإجراء' : 'Pending Action',
      value: pending,
      subValue: isRtl ? 'طلبات جديدة تحتاج لمراجعة وربط' : 'New requests awaiting review',
      icon: Clock,
      textColor: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
      borderColor: 'border-amber-100 dark:border-amber-900/30',
    },
    {
      title: isRtl ? 'تم القبول والربط' : 'Accepted & Linked',
      value: accepted,
      subValue: isRtl ? 'تم قبولها وربطها بطلاب' : 'Accepted and linked to students',
      icon: CheckCircle2,
      textColor: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-100 dark:border-emerald-900/30',
    },
    {
      title: isRtl ? 'مرفوضة' : 'Rejected Requests',
      value: rejected,
      subValue: isRtl ? 'طلبات تم رفضها' : 'Rejected requests',
      icon: XCircle,
      textColor: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400',
      borderColor: 'border-rose-100 dark:border-rose-900/30',
    },
  ] : [
    {
      title: isRtl ? 'إجمالي الطلبات' : 'Total Requests',
      value: total,
      subValue: isRtl ? 'كافة طلبات الحصص التجريبية' : 'All trial session requests',
      icon: Sparkles,
      textColor: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400',
      borderColor: 'border-indigo-100 dark:border-indigo-900/30',
    },
    {
      title: isRtl ? 'بانتظار التسكين' : 'Pending Assignment',
      value: pending,
      subValue: isRtl ? 'تحتاج إلى تحديد موعد وحصة' : 'Need group & session assignment',
      icon: Clock,
      textColor: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
      borderColor: 'border-amber-100 dark:border-amber-900/30',
    },
    {
      title: isRtl ? 'تم التسكين' : 'Assigned Sessions',
      value: assigned,
      subValue: isRtl ? 'تم تعيينها لمجموعات ومعلمين' : 'Assigned to groups & teachers',
      icon: CheckCircle2,
      textColor: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-100 dark:border-emerald-900/30',
    },
    {
      title: isRtl ? 'ملغاة ومرفوضة' : 'Cancelled / Rejected',
      value: cancelled,
      subValue: isRtl ? 'طلبات تم إلغاؤها' : 'Cancelled or rejected requests',
      icon: XCircle,
      textColor: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400',
      borderColor: 'border-rose-100 dark:border-rose-900/30',
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir={isRtl ? 'rtl' : 'ltr'}>
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <div
            key={idx}
            className={`bg-white dark:bg-slate-900 rounded-3xl p-5 border ${item.borderColor} shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-start`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-snug">
                {item.title}
              </span>
              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                <Icon size={18} />
              </div>
            </div>
            <div className="mt-3">
              <span className={`text-2xl font-black tracking-tight ${item.textColor} block`}>
                {item.value}
              </span>
              {item.subValue && (
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1 block">
                  {item.subValue}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
