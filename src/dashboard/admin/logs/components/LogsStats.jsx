import { memo } from 'react'
import { Activity, CalendarDays, Calendar, Users } from 'lucide-react'

const LogsStats = memo(({ stats, isRtl, isLoading, t, activeTab, setActiveTab }) => {
  const orderedCards = [
    {
      id: 'all',
      title: t('adminDashboard.logs.totalEvents', 'إجمالي الأحداث'),
      value: stats?.total || 0,
      icon: Activity,
      color: 'text-[#005953] dark:text-brand-400',
      bg: 'bg-[#005953]/10 dark:bg-[#005953]/20'
    },
    {
      id: 'today',
      title: t('adminDashboard.logs.today', 'اليوم'),
      value: stats?.today || 0,
      icon: Calendar,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-500/10'
    },
    {
      id: 'last-7-days',
      title: t('adminDashboard.logs.thisWeek', 'هذا الأسبوع'),
      value: stats?.lastWeek || 0,
      icon: CalendarDays,
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-500/10'
    },
    {
      id: 'last-30-days',
      title: t('adminDashboard.logs.thisMonth', 'هذا الشهر'),
      value: stats?.lastMonth || 0,
      icon: Users,
      color: 'text-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-500/10'
    }
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {orderedCards.map((card) => {
        const Icon = card.icon
        const isActive = activeTab === card.id
        return (
          <button
            key={card.id}
            onClick={() => setActiveTab && setActiveTab(card.id)}
            className={`text-start w-full bg-white dark:bg-slate-900 rounded-3xl p-6 border ${isActive ? 'border-[#005953] ring-2 ring-[#005953]/20 dark:border-brand-500 dark:ring-brand-500/20' : 'border-slate-100 dark:border-slate-800'} shadow-sm flex items-center justify-between transition-all hover:shadow-md cursor-pointer`}
          >
            {isLoading ? (
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-20 animate-pulse" />
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-16 animate-pulse" />
              </div>
            ) : (
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400">
                  {card.title}
                </h3>
                <p className={`text-2xl font-black ${card.color}`}>
                  {card.value.toLocaleString(isRtl ? 'ar-EG' : 'en-US')}
                </p>
              </div>
            )}
            <div className={`p-3 rounded-2xl shrink-0 ${card.bg} ${card.color}`}>
              <Icon size={24} />
            </div>
          </button>
        )
      })}
    </div>
  )
})

LogsStats.displayName = 'LogsStats'
export default LogsStats
