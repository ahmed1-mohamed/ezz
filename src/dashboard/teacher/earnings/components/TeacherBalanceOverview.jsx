import { TrendingUp, Clock, CheckCircle2, Receipt } from 'lucide-react'

export default function TeacherBalanceOverview({ balance, isLoading, t }) {
  const currency = t('teacher.earnings.currency', 'ج.م')
  const formatAmount = (val) => {
    const num = Number(val ?? 0)
    if (Number.isNaN(num)) return '0'
    return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
  const cards = [
    {
      id: 'totalEarnings',
      title: t('teacher.earnings.balance.totalEarnings', 'إجمالي الأرباح'),
      desc: t('teacher.earnings.balance.totalEarningsDesc', 'إجمالي الأرباح المحققة حتى الآن'),
      value: `${formatAmount(balance?.totalEarnings)} ${currency}`,
      icon: TrendingUp,
      color: 'text-emerald-700 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200/60 dark:border-emerald-800/40',
    },
    {
      id: 'dueEarnings',
      title: t('teacher.earnings.balance.dueEarnings', 'الرصيد المستحق'),
      desc: t('teacher.earnings.balance.dueEarningsDesc', 'مستحقات جاهزة للتحويل القادم'),
      value: `${formatAmount(balance?.dueEarnings)} ${currency}`,
      icon: Clock,
      color: 'text-amber-700 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200/60 dark:border-amber-800/40',
    },
    {
      id: 'totalPaid',
      title: t('teacher.earnings.balance.totalPaid', 'إجمالي المحوّل'),
      desc: t('teacher.earnings.balance.totalPaidDesc', 'إجمالي ما تم تحويله لحسابك'),
      value: `${formatAmount(balance?.totalPaid)} ${currency}`,
      icon: CheckCircle2,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200/60 dark:border-blue-800/40',
    },
    {
      id: 'payoutsCount',
      title: t('teacher.earnings.balance.payoutsCount', 'عدد التحويلات'),
      desc: t('teacher.earnings.balance.payoutsCountDesc', 'عمليات التحويل المنفذة بنجاح'),
      value: String(balance?.payoutsCount ?? 0),
      icon: Receipt,
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
      border: 'border-purple-200/60 dark:border-purple-800/40',
    },
  ]
  if (isLoading && !balance) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
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

