import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  X,
  Plus,
  UserCheck,
  UserX,
  Clock,
  TrendingUp,
  Pencil,
  Trash2,
} from 'lucide-react'


const WEEK_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']

function getWeekDates(refDate) {
  const d = new Date(refDate)
  const day = d.getDay() // 0=Sun
  const start = new Date(d)
  start.setDate(d.getDate() - day)
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    return date
  })
}

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}


function buildMockSessions(weekDates) {
  const base = [
    { id: 1, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'scheduled', attendance: { present: 3, absent: 1, postponed: 0 } },
    { id: 2, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'postponed', attendance: { present: 0, absent: 0, postponed: 1 } },
    { id: 3, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'scheduled', attendance: { present: 2, absent: 0, postponed: 0 } },
    { id: 4, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي', time: '3 ص - 4 ص', dayIndex: 1, status: 'scheduled', attendance: { present: 4, absent: 0, postponed: 0 } },
    { id: 5, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي', time: '3 ص - 4 ص', dayIndex: 1, status: 'conflict', attendance: { present: 0, absent: 0, postponed: 0 } },
    { id: 6, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي', time: '3 ص - 4 ص', dayIndex: 1, status: 'scheduled', attendance: { present: 5, absent: 1, postponed: 0 } },
    { id: 7, groupName: 'مجموعة العربية ب', teacher: 'عائشة محمود', time: '3 ص - 5 ص', dayIndex: 2, status: 'scheduled', attendance: { present: 3, absent: 0, postponed: 0 } },
    { id: 8, groupName: 'مجموعة العربية ب', teacher: 'عائشة محمود', time: '3 ص - 5 ص', dayIndex: 3, status: 'scheduled', attendance: { present: 2, absent: 1, postponed: 0 } },
    { id: 9, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 4, status: 'scheduled', attendance: { present: 5, absent: 0, postponed: 0 } },
    { id: 10, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي', time: '3 ص - 4 ص', dayIndex: 5, status: 'postponed', attendance: { present: 0, absent: 0, postponed: 1 } },
  ]
  return base.map((s) => ({
    ...s,
    date: weekDates[s.dayIndex],
    dateStr: formatDate(weekDates[s.dayIndex]),
  }))
}


function ConflictBanner({ conflicts, onDismiss }) {
  if (!conflicts.length) return null
  return (
    <div className="flex items-start justify-between gap-4 px-5 py-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40">
      <button
        onClick={onDismiss}
        className="shrink-0 p-1 rounded-lg text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors mt-0.5"
      >
        <X size={16} />
      </button>
      <div className="flex-1 min-w-0 text-end space-y-1">
        <p className="text-sm font-bold text-amber-700 dark:text-amber-400">
          تم اكتشاف {conflicts.length} تعارض في الجدول
        </p>
        {conflicts.map((c, i) => (
          <p key={i} className="text-xs text-amber-600 dark:text-amber-500 truncate">
            {c.teacher} · {c.time} · {c.dateStr} — مجموعة مكررة في نفس الوقت
          </p>
        ))}
      </div>
      <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
        <AlertTriangle size={18} />
      </div>
    </div>
  )
}

function StatCard({ label, value, color, icon: Icon }) {
  const cls = {
    green: 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/10 border-brand-100 dark:border-brand-900/30',
    red: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30',
    amber: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30',
    slate: 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800',
  }
  return (
    <div className={`flex flex-col items-center gap-2 p-5 rounded-3xl border ${cls[color]}`}>
      {Icon && <Icon size={20} className="opacity-70" />}
      <span className="text-3xl font-extrabold">{value}</span>
      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 text-center">{label}</span>
    </div>
  )
}

const SESSION_STATUS_MAP = {
  scheduled: { label: 'مجدولة', bg: 'bg-brand-500', text: 'text-white', border: 'border-brand-600' },
  postponed: { label: 'مؤجلة', bg: 'bg-amber-400', text: 'text-white', border: 'border-amber-500' },
  conflict: { label: 'تعارض', bg: 'bg-red-500', text: 'text-white', border: 'border-red-600' },
  completed: { label: 'مكتملة', bg: 'bg-slate-400', text: 'text-white', border: 'border-slate-500' },
}

function SessionCard({ session, onEdit, onDelete }) {
  const cfg = SESSION_STATUS_MAP[session.status] || SESSION_STATUS_MAP.scheduled
  return (
    <div
      className={`group relative rounded-xl border ${cfg.bg} ${cfg.border} ${cfg.text} px-2.5 py-2 text-xs space-y-0.5 cursor-default shadow-sm hover:brightness-95 transition-all`}
    >
      <p className="font-bold leading-tight truncate">{session.groupName}</p>
      <p className="opacity-80 truncate">{session.time}</p>
      <p className="opacity-70 truncate">{session.dateStr}</p>
      {session.status !== 'scheduled' && (
        <span className="absolute top-1 left-1 text-[10px] font-bold opacity-90">
          {cfg.label}
        </span>
      )}
      <div className="absolute inset-0 rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-black/20 transition-all">
        <button
          onClick={(e) => { e.stopPropagation(); onEdit(session) }}
          className="p-1.5 rounded-lg bg-white/90 text-slate-700 hover:bg-white transition"
        >
          <Pencil size={12} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(session.id) }}
          className="p-1.5 rounded-lg bg-white/90 text-red-600 hover:bg-white transition"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  )
}


export default function AdminSchedule() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const today = new Date()
  const [refDate, setRefDate] = useState(today)
  const [showConflictBanner, setShowConflictBanner] = useState(true)

  const weekDates = useMemo(() => getWeekDates(refDate), [refDate])
  const sessions = useMemo(() => buildMockSessions(weekDates), [weekDates])

  const stats = useMemo(() => {
    const allAttendance = sessions.flatMap((s) => [
      ...Array(s.attendance.present).fill('present'),
      ...Array(s.attendance.absent).fill('absent'),
      ...Array(s.attendance.postponed).fill('postponed'),
    ])
    const present = allAttendance.filter((a) => a === 'present').length
    const absent = allAttendance.filter((a) => a === 'absent').length
    const postponed = allAttendance.filter((a) => a === 'postponed').length
    const total = present + absent
    const rate = total > 0 ? Math.round((present / total) * 100) : 0
    return { present, absent, postponed, rate }
  }, [sessions])

  const conflicts = useMemo(
    () => sessions.filter((s) => s.status === 'conflict'),
    [sessions]
  )

  const goToPrevWeek = () => {
    const d = new Date(refDate)
    d.setDate(d.getDate() - 7)
    setRefDate(d)
  }

  const goToNextWeek = () => {
    const d = new Date(refDate)
    d.setDate(d.getDate() + 7)
    setRefDate(d)
  }

  const goToToday = () => setRefDate(today)


  const handleEdit = (session) => {
    alert(`تعديل الجلسة: ${session.groupName}`)
  }

  const handleDelete = (id) => {
    alert(`حذف الجلسة رقم: ${id}`)
  }

  return (
    <div className="space-y-5 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">الجدول الدراسي</h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          منارة العز أكاديمي · لوحة الإدارة
        </p>
      </div>

      {showConflictBanner && conflicts.length > 0 && (
        <ConflictBanner conflicts={conflicts} onDismiss={() => setShowConflictBanner(false)} />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="معدل الحضور" value={`${stats.rate}%`} color="slate" icon={TrendingUp} />
        <StatCard label="حضر" value={stats.present} color="green" icon={UserCheck} />
        <StatCard label="غياب" value={stats.absent} color="red" icon={UserX} />
        <StatCard label="مؤجل" value={stats.postponed} color="amber" icon={Clock} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98]">
          <Plus size={18} />
          <span>إضافة مجموعة</span>
        </button>


        <div className="flex items-center gap-2">
          <button
            onClick={goToToday}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            اليوم
          </button>
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={isRtl ? goToNextWeek : goToPrevWeek}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <span className="px-3 text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap min-w-[160px] text-center">
              الأسبوع الحالي
            </span>
            <button
              onClick={isRtl ? goToPrevWeek : goToNextWeek}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-x-auto">
        <div className="min-w-[700px]">

          {/* Day headers */}
          <div className="grid grid-cols-7 border-b border-slate-100 dark:border-slate-800">
            {WEEK_DAYS.map((dayName, idx) => {
              const date = weekDates[idx]
              const isToday = isSameDay(date, today)
              return (
                <div
                  key={dayName}
                  className={`flex flex-col items-center gap-1 px-2 py-3 border-l first:border-l-0 border-slate-100 dark:border-slate-800 ${isToday ? 'bg-brand-50 dark:bg-brand-900/10' : ''}`}
                >
                  <span className={`text-xs font-bold ${isToday ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {dayName}
                  </span>
                  <span className={`text-lg font-extrabold ${isToday ? 'text-brand-500' : 'text-slate-700 dark:text-slate-200'}`}>
                    {date.getDate()}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {date.getMonth() + 1}/{date.getFullYear()}
                  </span>
                  {isToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Session cells */}
          <div className="grid grid-cols-7 min-h-[280px]">
            {WEEK_DAYS.map((dayName, idx) => {
              const date = weekDates[idx]
              const isToday = isSameDay(date, today)
              const daySessions = sessions.filter((s) => s.dayIndex === idx)
              return (
                <div
                  key={dayName}
                  className={`flex flex-col gap-2 p-2 border-l first:border-l-0 border-slate-100 dark:border-slate-800 min-h-[200px] ${isToday ? 'bg-brand-50/30 dark:bg-brand-900/5' : ''}`}
                >
                  {daySessions.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-slate-200 dark:text-slate-700 text-xs">—</span>
                    </div>
                  ) : (
                    daySessions.map((session) => (
                      <SessionCard
                        key={session.id}
                        session={session}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    ))
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 flex-wrap justify-end text-xs text-slate-500 dark:text-slate-400">
        {Object.entries(SESSION_STATUS_MAP).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${cfg.bg}`} />
            <span>{cfg.label}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
