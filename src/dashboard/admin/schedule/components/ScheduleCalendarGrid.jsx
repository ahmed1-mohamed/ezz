import SessionCard from './SessionCard'

const WEEK_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export default function ScheduleCalendarGrid({
  weekDates,
  filteredSessions,
  today,
  handleEdit,
  handleDelete,
  t
}) {
  const getDayLabel = (dayName) => {
    const map = {
      'الأحد': t('adminDashboard.groups.days.sunday', 'الأحد'),
      'الاثنين': t('adminDashboard.groups.days.monday', 'الاثنين'),
      'الثلاثاء': t('adminDashboard.groups.days.tuesday', 'الثلاثاء'),
      'الأربعاء': t('adminDashboard.groups.days.wednesday', 'الأربعاء'),
      'الخميس': t('adminDashboard.groups.days.thursday', 'الخميس'),
      'الجمعة': t('adminDashboard.groups.days.friday', 'الجمعة'),
      'السبت': t('adminDashboard.groups.days.saturday', 'السبت'),
    }
    return map[dayName] || dayName
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-x-auto">
      <div className="min-w-[700px]">
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
                  {getDayLabel(dayName)}
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

        <div className="grid grid-cols-7 min-h-[280px]">
          {WEEK_DAYS.map((dayName, idx) => {
            const date = weekDates[idx]
            const isToday = isSameDay(date, today)
            const daySessions = filteredSessions.filter((s) => s.dayIndex === idx)
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
                      t={t}
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
export { WEEK_DAYS }