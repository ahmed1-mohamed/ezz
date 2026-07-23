import { List, Mail, MailOpen } from 'lucide-react'

export default function MessagesStats({ statistics, activeTab, onSelectTab, isLoading, t }) {
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
  const unread = statistics?.unread || 0
  const read = statistics?.read || 0

  const statCards = [
    {
      id: 'all',
      title: t('adminDashboard.messages.totalRequests', 'إجمالي طلبات التسجيل'),
      value: total,
      icon: List,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      activeBorder: 'border-blue-500 ring-2 ring-blue-500/20'
    },
    {
      id: 'unread',
      title: t('adminDashboard.messages.unreadRequests', 'طلبات تسجيل غير مقروءة'),
      value: unread,
      icon: Mail,
      color: 'text-[#005953] dark:text-brand-400',
      bg: 'bg-[#005953]/10 dark:bg-[#005953]/20',
      activeBorder: 'border-[#005953] ring-2 ring-[#005953]/20'
    },
    {
      id: 'read',
      title: t('adminDashboard.messages.readRequests', 'طلبات تسجيل مقروءة'),
      value: read,
      icon: MailOpen,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/20'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {statCards.map((stat) => {
        const Icon = stat.icon
        const isActive = activeTab === stat.id

        return (
          <div
            key={stat.id}
            onClick={() => onSelectTab && onSelectTab(stat.id)}
            className={`bg-white dark:bg-slate-900 p-6 rounded-3xl border transition-all cursor-pointer flex items-center justify-between shadow-soft hover:shadow-md ${isActive ? stat.activeBorder : 'border-slate-100 dark:border-slate-800'
              }`}
          >
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {stat.title}
              </p>
              <h3 className={`text-2xl sm:text-3xl font-black ${stat.color}`}>
                {stat.value}
              </h3>
              <span className="text-[10px] text-slate-400 font-medium block mt-1 dir-ltr">
                {stat.endpoint}
              </span>
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