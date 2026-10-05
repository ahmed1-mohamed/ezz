import { Pencil, Trash2, Clock } from 'lucide-react'

export default function SessionCard({ session, onEdit, onDelete }) {
  const teacherName = session.teacher?.name || ''

  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white p-3 text-xs space-y-2 shadow-sm shadow-brand-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <p className="font-bold text-[13px] leading-snug line-clamp-2 pe-10" title={session.group?.name}>
        {session.group?.name}
      </p>

      <div className="flex items-center gap-2 min-w-0">
        {session.teacher?.image ? (
          <img
            src={session.teacher.image}
            alt={teacherName}
            className="w-5 h-5 rounded-full object-cover border border-white/40 shrink-0"
          />
        ) : (
          <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center text-[10px] font-bold shrink-0">
            {teacherName.charAt(0)}
          </span>
        )}
        <span className="truncate opacity-95" title={teacherName}>{teacherName}</span>
      </div>

      <div className="flex items-center gap-1.5 opacity-90">
        <Clock size={12} className="shrink-0" />
        <span className="truncate" dir="auto">{session.timeRange}</span>
      </div>

      {session.status !== 'scheduled' && session.statusText && (
        <span className="inline-block px-2 py-0.5 rounded-full bg-white/25 text-[10px] font-bold">
          {session.statusText}
        </span>
      )}

      <div className="absolute top-2 end-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEdit(session) }}
          className="p-1 rounded-lg bg-white/90 text-slate-700 hover:bg-white transition cursor-pointer"
        >
          <Pencil size={11} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onDelete(session) }}
          className="p-1 rounded-lg bg-white/90 text-red-600 hover:bg-white transition cursor-pointer"
        >
          <Trash2 size={11} />
        </button>
      </div>
    </div>
  )
}
