import {
  TrendingUp,
  Clock,
  CheckCircle2,
  Receipt,
  Calendar,
  GraduationCap,
  Hourglass,
  Coins,
} from 'lucide-react'

export default function TeacherBalanceOverview({ balance, isLoading, t, isRtl = true }) {
  const currency = isRtl ? 'دولار' : '$'
  const formatAmount = (val) => {
    const num = Number(val ?? 0)
    if (Number.isNaN(num)) return '0'
    return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
  const totalEarningsVal = balance?.totalEarnings ?? balance?.totalRevenue ?? balance?.totalAmount ?? 0
  const dueEarningsVal = balance?.dueEarnings ?? balance?.currentBalance ?? balance?.availableBalance ?? balance?.balance ?? 0
  const totalPaidVal = balance?.totalPaid ?? balance?.paidEarnings ?? balance?.transferredAmount ?? 0
  const monthlyEarningsVal = balance?.monthlyEarnings ?? balance?.currentMonthEarnings ?? balance?.thisMonthEarnings ?? 0
  const payoutsCountVal = balance?.payoutsCount ?? balance?.totalPayouts ?? balance?.transfersCount ?? 0
  const completedSessionsVal = balance?.completedSessionsCount ?? balance?.totalSessions ?? balance?.sessionsCount ?? balance?.completedLessons ?? 0
  const totalHoursVal = balance?.totalTeachingHours ?? balance?.totalHours ?? balance?.hoursCount ?? 0
  const pendingEarningsVal = balance?.pendingEarnings ?? balance?.pendingPayoutsAmount ?? balance?.pendingPayouts ?? balance?.inReviewEarnings ?? 0
  const cards = [
    {
      id: 'totalEarnings',
      title: t('teacher.earnings.balance.totalEarnings', 'إجمالي الأرباح'),
      desc: t('teacher.earnings.balance.totalEarningsDesc', 'إجمالي الأرباح المحققة حتى الآن'),
      value: `${formatAmount(totalEarningsVal)} ${currency}`,
      icon: TrendingUp,
      color: 'text-emerald-700 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200/60 dark:border-emerald-800/40',
    },
    {
      id: 'dueEarnings',
      title: t('teacher.earnings.balance.dueEarnings', 'الرصيد المستحق'),
      desc: t('teacher.earnings.balance.dueEarningsDesc', 'مستحقات جاهزة للتحويل القادم'),
      value: `${formatAmount(dueEarningsVal)} ${currency}`,
      icon: Clock,
      color: 'text-amber-700 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200/60 dark:border-amber-800/40',
    },
    {
      id: 'totalPaid',
      title: t('teacher.earnings.balance.totalPaid', 'إجمالي المحوّل'),
      desc: t('teacher.earnings.balance.totalPaidDesc', 'إجمالي ما تم تحويله لحسابك'),
      value: `${formatAmount(totalPaidVal)} ${currency}`,
      icon: CheckCircle2,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200/60 dark:border-blue-800/40',
    },
    {
      id: 'monthlyEarnings',
      title: t('teacher.earnings.balance.monthlyEarnings', 'أرباح الشهر الحالي'),
      desc: t('teacher.earnings.balance.monthlyEarningsDesc', 'الأرباح المستحقة عن هذا الشهر'),
      value: `${formatAmount(monthlyEarningsVal)} ${currency}`,
      icon: Calendar,
      color: 'text-teal-700 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-950/30',
      border: 'border-teal-200/60 dark:border-teal-800/40',
    },
    {
      id: 'payoutsCount',
      title: t('teacher.earnings.balance.payoutsCount', 'عدد التحويلات'),
      desc: t('teacher.earnings.balance.payoutsCountDesc', 'عمليات التحويل المنفذة بنجاح'),
      value: String(payoutsCountVal),
      icon: Receipt,
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
      border: 'border-purple-200/60 dark:border-purple-800/40',
    },
    {
      id: 'completedSessions',
      title: t('teacher.earnings.balance.completedSessions', 'الحصص المنجزة'),
      desc: t('teacher.earnings.balance.completedSessionsDesc', 'إجمالي الحصص المنفذة المعتمدة'),
      value: String(completedSessionsVal),
      icon: GraduationCap,
      color: 'text-indigo-700 dark:text-indigo-400',
      bg: 'bg-indigo-50 dark:bg-indigo-950/30',
      border: 'border-indigo-200/60 dark:border-indigo-800/40',
    },
    {
      id: 'totalHours',
      title: t('teacher.earnings.balance.totalHours', 'ساعات التدريس'),
      desc: t('teacher.earnings.balance.totalHoursDesc', 'إجمالي الساعات التدريسية المكتملة'),
      value: `${formatAmount(totalHoursVal)} ${isRtl ? 'ساعة' : 'hrs'}`,
      icon: Hourglass,
      color: 'text-sky-700 dark:text-sky-400',
      bg: 'bg-sky-50 dark:bg-sky-950/30',
      border: 'border-sky-200/60 dark:border-sky-800/40',
    },
    {
      id: 'pendingEarnings',
      title: t('teacher.earnings.balance.pendingEarnings', 'قيد المراجعة / التحويل'),
      desc: t('teacher.earnings.balance.pendingEarningsDesc', 'مبالغ جاري مراجعتها للتحويل'),
      value: `${formatAmount(pendingEarningsVal)} ${currency}`,
      icon: Coins,
      color: 'text-rose-700 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/30',
      border: 'border-rose-200/60 dark:border-rose-800/40',
    },
  ]
  if (isLoading && !balance) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft animate-pulse flex items-center justify-between"
          >
            <div className="space-y-3 flex-1">
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
              <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
              <div className="h-3 bg-slate-100 dark:bg-slate-800/60 rounded w-3/4" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 shrink-0" />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.id}
            className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border ${card.border} shadow-soft hover:shadow-md transition-all flex flex-col justify-between text-start relative overflow-hidden`}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">
                {card.title}
              </span>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${card.bg} ${card.color}`}>
                <Icon size={24} />
              </div>
            </div>
            <div>
              <div className={`text-2xl sm:text-3xl font-black ${card.color} tracking-tight`}>
                {card.value}
              </div>
              <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1 line-clamp-1">
                {card.desc}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
