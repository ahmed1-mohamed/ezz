import { memo } from 'react'
import { LogIn, BookOpen, DollarSign, Activity, CalendarDays, Clock } from 'lucide-react'

const getLogStyling = (title = '') => {
  if (title.includes('دخول') || title.toLowerCase().includes('login')) {
    return {
      icon: LogIn,
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      color: 'text-emerald-500',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-900/30',
      badgeColor: 'text-emerald-600 dark:text-emerald-400'
    }
  }
  if (title.includes('حصة') || title.toLowerCase().includes('session')) {
    return {
      icon: BookOpen,
      bg: 'bg-[#005953]/10 dark:bg-[#005953]/30',
      color: 'text-[#005953] dark:text-brand-400',
      badgeBg: 'bg-[#005953]/10 dark:bg-[#005953]/20',
      badgeColor: 'text-[#005953] dark:text-brand-300'
    }
  }
  if (title.includes('دفع') || title.includes('اشتراك') || title.toLowerCase().includes('payment')) {
    return {
      icon: DollarSign,
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      color: 'text-amber-500',
      badgeBg: 'bg-amber-50 dark:bg-amber-900/30',
      badgeColor: 'text-amber-600 dark:text-amber-400'
    }
  }
  return {
    icon: Activity,
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    color: 'text-blue-500',
    badgeBg: 'bg-blue-50 dark:bg-blue-900/30',
    badgeColor: 'text-blue-600 dark:text-blue-400'
  }
}

const formatDateTime = (isoString, isRtl) => {
  if (!isoString) return { date: '', time: '' }
  try {
    const d = new Date(isoString)
    const date = d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    const time = d.toLocaleTimeString(isRtl ? 'ar-EG' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
    return { date, time }
  } catch {
    return { date: '', time: '' }
  }
}

const LogsTimeline = memo(({ logs, isRtl, isLoading, t }) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 text-center space-y-4 shadow-soft">
        <Activity className="mx-auto w-8 h-8 text-slate-300 dark:text-slate-600 animate-pulse" />
        <p className="text-sm font-bold text-slate-500">{t('adminDashboard.logs.loading', 'جاري تحميل الأحداث...')}</p>
      </div>
    )
  }
  if (!logs || logs.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
        <Activity className="mx-auto w-12 h-12 text-slate-200 dark:text-slate-700" />
        <h3 className="text-base font-bold text-slate-600 dark:text-slate-400">
          {t('adminDashboard.logs.noEvents', 'لا توجد أحداث')}
        </h3>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          {t('adminDashboard.logs.noEventsDesc', 'لم يتم تسجيل أي أحداث حتى الآن.')}
        </p>
      </div>
    )
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft p-4 sm:p-8">
      <div className="flex items-center gap-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
        <Activity className="text-[#005953] dark:text-brand-400" size={20} />
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.logs.titleWithCount', `الأحداث (${logs.length})`, { count: logs.length })}
        </h2>
      </div>
      <div className="space-y-0">
        {logs.map((log, index) => {
          const { icon: Icon, bg, color, badgeBg, badgeColor } = getLogStyling(log.title)
          const { date, time } = formatDateTime(log.createdAt, isRtl)
          const isLast = index === logs.length - 1
          return (
            <div key={log.id} className="relative flex gap-4 sm:gap-6 group pb-8">
              {!isLast && (
                <div className={`absolute top-12 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800/60 ${isRtl ? 'right-[112px] sm:right-[150px]' : 'left-[112px] sm:left-[150px]'} -translate-x-1/2`} />
              )}
              <div className="w-24 sm:w-36 shrink-0 text-start pt-2 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <CalendarDays size={12} className="shrink-0" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500">
                  <Clock size={12} className="shrink-0" />
                  <span dir="ltr">{time}</span>
                </div>
              </div>
              <div className="relative z-10 shrink-0">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${bg} ${color} transition-transform group-hover:scale-110`}>
                  <Icon size={18} />
                </div>
              </div>
              <div className="flex-1 pt-1.5 pb-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                  {log.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {log.details}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${badgeBg} ${badgeColor}`}>
                    {log.title}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})

LogsTimeline.displayName = 'LogsTimeline'
export default LogsTimeline
