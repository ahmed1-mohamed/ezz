import { useTranslation } from 'react-i18next'
import SessionCard from './SessionCard'

const DAY_KEYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const DAY_FALLBACKS_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
const DAY_FALLBACKS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function isSameDay(a, b) {
  if (!a || !b) return false
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function toDateKey(date) {
  if (!date) return ''
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function compareByStartTime(a, b) {
  if (!a?.startTime || !b?.startTime) return 0
  return new Date(a.startTime) - new Date(b.startTime)
}

export default function ScheduleCalendarGrid({
  weekDates,
  filteredSessions,
  today,
  handleEdit,
  handleDelete,
  t,
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-x-auto">
      <div className="min-w-[860px]">
        <div className="grid grid-cols-7 border-b border-slate-100 dark:border-slate-800">
          {weekDates.map((date, idx) => {
            if (!date) return null
            const isToday = isSameDay(date, today)
            const dayIdx = date.getDay()
            const dayKey = DAY_KEYS[dayIdx]
            const fallbackName = isRtl ? DAY_FALLBACKS_AR[dayIdx] : DAY_FALLBACKS_EN[dayIdx]
            const dayLabel = t(`adminDashboard.groups.days.${dayKey}`, fallbackName)

            return (
              <div
                key={`header-${idx}-${date.toISOString()}`}
                className={`flex flex-col items-center gap-0.5 px-2 py-4 border-s first:border-s-0 border-slate-100 dark:border-slate-800 ${isToday ? 'bg-brand-50 dark:bg-brand-900/10' : ''}`}
              >
                <span className={`text-xs font-bold ${isToday ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'}`}>
                  {dayLabel}
                </span>
                <span className={`mt-1 w-9 h-9 rounded-full flex items-center justify-center text-lg font-extrabold ${isToday ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' : 'text-slate-700 dark:text-slate-200'}`}>
                  {date.getDate()}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5" dir="ltr">
                  {date.getMonth() + 1}/{date.getFullYear()}
                </span>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-7 min-h-[320px]">
          {weekDates.map((date, idx) => {
            if (!date) return null
            const isToday = isSameDay(date, today)
            const dateKey = toDateKey(date)
            const daySessions = (filteredSessions || [])
              .filter((s) => s.date === dateKey || (typeof s.date === 'string' && s.date.startsWith(dateKey)))
              .sort(compareByStartTime)

            return (
              <div
                key={`sessions-${idx}-${dateKey}`}
                className={`flex flex-col gap-2.5 p-2.5 border-s first:border-s-0 border-slate-100 dark:border-slate-800 ${isToday ? 'bg-brand-50/40 dark:bg-brand-900/5' : ''}`}
              >
                {daySessions.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-slate-200 dark:text-slate-700 text-xs">—</span>
                  </div>
                ) : (
                  daySessions.map((session) => (
                    <SessionCard
                      key={session.id || session._id || `${dateKey}-${session.startTime}`}
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
  )
}