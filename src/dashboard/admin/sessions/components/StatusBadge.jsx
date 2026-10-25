import { useTranslation } from 'react-i18next'

export default function StatusBadge({ status }) {
  const { t } = useTranslation()

  const normalized = (status || '').toLowerCase()

  const config = {
    live: {
      label: t('adminDashboard.sessions.status.live', 'مباشر الآن'),
      cls: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800',
    },
    in_progress: {
      label: t('adminDashboard.sessions.status.live', 'مباشر الآن'),
      cls: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800',
    },
    scheduled: {
      label: t('adminDashboard.sessions.status.scheduled', 'مجدولة'),
      cls: 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800',
    },
    upcoming: {
      label: t('adminDashboard.sessions.status.upcoming', 'قادمة'),
      cls: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    },
    completed: {
      label: t('adminDashboard.sessions.status.completed', 'مكتملة'),
      cls: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    },
    cancelled: {
      label: t('adminDashboard.sessions.status.cancelled', 'ملغاة'),
      cls: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
    },
    canceled: {
      label: t('adminDashboard.sessions.status.cancelled', 'ملغاة'),
      cls: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
    },
    'مكتملة': {
      label: t('adminDashboard.sessions.status.completed', 'مكتملة'),
      cls: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    },
    'ملغاة': {
      label: t('adminDashboard.sessions.status.cancelled', 'ملغاة'),
      cls: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
    },
    'مباشر': {
      label: t('adminDashboard.sessions.status.live', 'مباشر الآن'),
      cls: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800',
    },
  }

  const { label, cls } = config[normalized] || (normalized.includes('live') || normalized.includes('progress') ? config.live : normalized.includes('complete') ? config.completed : normalized.includes('cancel') ? config.cancelled : config.scheduled)

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cls}`}>
      {normalized === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
      )}
      {label}
    </span>
  )
}
