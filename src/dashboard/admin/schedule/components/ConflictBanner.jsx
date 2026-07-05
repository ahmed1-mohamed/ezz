import { X, AlertTriangle } from 'lucide-react'

export default function ConflictBanner({ conflicts, onDismiss, t }) {
  if (!conflicts.length) return null
  return (
    <div className="flex items-start justify-between gap-4 px-5 py-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
      <button
        onClick={onDismiss}
        className="shrink-0 p-1 rounded-lg text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors mt-0.5 cursor-pointer"
      >
        <X size={16} />
      </button>
      <div className="flex-1 min-w-0 text-start space-y-1">
        <p className="text-sm font-bold text-amber-700 dark:text-amber-400">
          {t('adminDashboard.schedule.conflictsDetected', 'تم اكتشاف {{count}} تعارض في الجدول', { count: conflicts.length })}
        </p>
        {conflicts.map((c, i) => (
          <p key={i} className="text-xs text-amber-600 dark:text-amber-500 truncate">
            {c.teacher} · {c.time} · {c.dateStr} — {t('adminDashboard.schedule.duplicateSession', 'مجموعة مكررة في نفس الوقت')}
          </p>
        ))}
      </div>
      <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
        <AlertTriangle size={18} />
      </div>
    </div>
  )
}
