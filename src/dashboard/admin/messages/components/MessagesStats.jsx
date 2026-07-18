import { FileText, PlusCircle, CheckCircle } from 'lucide-react'

export default function MessagesStats({ statistics, isLoading, t }) {
  if (isLoading && !statistics) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-between animate-pulse">
            <div className="space-y-3 flex-1">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
            </div>
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
          </div>
        ))}
      </div>
    )
  }

  const total = statistics?.total || 0
  const newRequests = statistics?.unread || statistics?.unRead || statistics?.newRequests || 0
  const replied = statistics?.read || statistics?.isRead || statistics?.replied || 0

  const statCards = [
    {
      title: t('adminDashboard.messages.totalRequests', 'إجمالي الطلبات'),
      value: total,
      icon: FileText,
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: t('adminDashboard.messages.newRequests', 'طلبات جديدة'),
      value: newRequests,
      icon: PlusCircle,
      color: 'text-[#005953] dark:text-brand-400',
      bg: 'bg-[#005953]/10 dark:bg-[#005953]/20'
    },
    {
      title: t('adminDashboard.messages.replied', 'تم الرد عليها'),
      value: replied,
      icon: CheckCircle,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-soft hover:shadow-md transition-shadow"
          >
            <div>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">
                {stat.title}
              </p>
              <h3 className={`text-2xl sm:text-3xl font-black ${stat.color}`}>
                {stat.value}
              </h3>
            </div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <Icon size={24} />
            </div>
          </div>
        )
      })}
    </div>
  )
}