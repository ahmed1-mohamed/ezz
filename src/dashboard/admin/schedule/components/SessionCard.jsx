import { Pencil, Trash2 } from 'lucide-react'

const SESSION_STATUS_MAP = {
  scheduled: { labelKey: 'scheduled', label: 'مجدولة', bg: 'bg-brand-500', text: 'text-white', border: 'border-brand-600' },
  postponed: { labelKey: 'postponed', label: 'مؤجلة', bg: 'bg-amber-400', text: 'text-white', border: 'border-amber-500' },
  conflict: { labelKey: 'conflict', label: 'تعارض', bg: 'bg-red-500', text: 'text-white', border: 'border-red-600' },
  completed: { labelKey: 'completed', label: 'مكتملة', bg: 'bg-slate-400', text: 'text-white', border: 'border-slate-500' },
}

export default function SessionCard({ session, onEdit, onDelete, t }) {
  const cfg = SESSION_STATUS_MAP[session.status] || SESSION_STATUS_MAP.scheduled

  const getTimeLabel = (timeStr) => {
    if (!timeStr) return ''
    return timeStr.split(' - ').map(part => {
      const parts = part.trim().split(' ')
      if (parts.length === 2) {
        const num = parts[0]
        const period = parts[1]
        if (period === 'ص') {
          return t('adminDashboard.groups.timePeriod.am', { defaultValue: '{{num}} ص', num })
        } else if (period === 'م') {
          return t('adminDashboard.groups.timePeriod.pm', { defaultValue: '{{num}} م', num })
        }
      }
      return part
    }).join(' - ')
  }

  return (
    <div
      className={`group relative rounded-xl border ${cfg.bg} ${cfg.border} ${cfg.text} px-2.5 py-2 text-xs space-y-0.5 cursor-default shadow-sm hover:brightness-95 transition-all`}
    >
      <p className="font-bold leading-tight truncate">{session.groupName}</p>
      <p className="opacity-80 truncate">{getTimeLabel(session.time)}</p>
      <p className="opacity-70 truncate">{session.dateStr}</p>
      {session.status !== 'scheduled' && (
        <span className="absolute top-1 left-1 text-[10px] font-bold opacity-90">
          {t(`adminDashboard.schedule.status.${cfg.labelKey}`, cfg.label)}
        </span>
      )}
      <div className="absolute inset-0 rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-black/20 transition-all">
        <button
          onClick={(e) => { e.stopPropagation(); onEdit(session) }}
          className="p-1.5 rounded-lg bg-white/90 text-slate-700 hover:bg-white transition cursor-pointer"
        >
          <Pencil size={12} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(session) }}
          className="p-1.5 rounded-lg bg-white/90 text-red-600 hover:bg-white transition cursor-pointer"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  )
}
export { SESSION_STATUS_MAP }
