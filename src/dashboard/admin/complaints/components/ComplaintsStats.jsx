import { List, Clock, CheckCircle2, XCircle } from 'lucide-react'

const STAT_SKELETON_COUNT = 4

export default function ComplaintsStats({ statistics, activeTab, onSelectTab, isLoading, t }) {
  if (isLoading && !statistics) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: STAT_SKELETON_COUNT }, (_, i) => (
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

  const statCards = [
    {
      id: 'all',
      title: t('adminDashboard.complaints.totalCount', 'إجمالي الشكاوى والمقترحات'),
      value: statistics?.total ?? 0,
      icon: List,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      activeBorder: 'border-blue-500 ring-2 ring-blue-500/20'
    },
    {
      id: 'pending',
      title: t('adminDashboard.complaints.pendingCount', 'قيد المراجعة'),
      value: statistics?.pending ?? 0,
      icon: Clock,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      activeBorder: 'border-amber-500 ring-2 ring-amber-500/20'
    },
    {
      id: 'resolved',
      title: t('adminDashboard.complaints.resolvedCount', 'محلولة'),
      value: statistics?.resolved ?? 0,
      icon: CheckCircle2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/20'
    },
    {
      id: 'rejected',
      title: t('adminDashboard.complaints.rejectedCount', 'مرفوضة'),
      value: statistics?.rejected ?? 0,
      icon: XCircle,
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-900/20',
      activeBorder: 'border-rose-500 ring-2 ring-rose-500/20'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {statCards.map((stat) => {
        const Icon = stat.icon
        const isActive = activeTab === stat.id

        return (
          <button
            type="button"
            key={stat.id}
            id={`complaints-stat-${stat.id}`}
            onClick={() => onSelectTab(stat.id)}
            className={`bg-white dark:bg-slate-900 p-6 rounded-3xl border transition-all cursor-pointer flex items-center justify-between shadow-soft hover:shadow-md text-start ${isActive ? stat.activeBorder : 'border-slate-100 dark:border-slate-800'}`}
          >
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">{stat.title}</p>
              <h3 className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <Icon size={24} />
            </div>
          </button>
        )
      })}
    </div>
  )
}
