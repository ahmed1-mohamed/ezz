import { BookOpen } from 'lucide-react'

export default function TeacherDetailsRecentLessonsCard({ teacher, isRtl = true }) {
  const rawSessions = Array.isArray(teacher?.sessions) && teacher.sessions.length > 0
    ? teacher.sessions
    : [
        {
          id: '1',
          groupName: 'مجموعة القرآن أ',
          date: '2024-04-23 · 10:00 (60 دقيقة)',
          status: 'live',
          studentsCount: 4
        },
        {
          id: '2',
          groupName: 'مجموعة القرآن أ',
          date: '2024-04-24 · 10:00 (60 دقيقة)',
          status: 'upcoming',
          studentsCount: 4
        }
      ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'آخر الحصص' : 'Recent Lessons'}
        </h2>
        <BookOpen size={20} className="text-[#005953]" />
      </div>

      <div className="space-y-3.5">
        {rawSessions.map((session, index) => {
          const groupName = session.groupName || session.group?.name || (isRtl ? 'مجموعة القرآن أ' : 'Quran Group A')
          const date = session.date || session.dateTime || '2024-04-23 · 10:00 (60 دقيقة)'
          const count = session.studentsCount ?? 4
          const isLive = session.status === 'live' || index === 0

          return (
            <div
              key={session.id || index}
              className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4.5 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between"
            >
               <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-emerald-950/30 text-[#005953] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 block">
                    {groupName}
                  </h4>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {date}
                  </span>
                </div>
              </div>

               <div className="flex items-center gap-2.5">
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span>{isRtl ? 'مباشرة الآن' : 'Live Now'}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{isRtl ? 'قادمة' : 'Upcoming'}</span>
                  </span>
                )}
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {count} {isRtl ? 'طلاب' : 'students'}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
