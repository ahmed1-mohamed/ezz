import { BookOpen, Calendar } from 'lucide-react'

export default function TeacherDetailsSessions({ teacher, isRtl, t }) {
  const sessions = teacher?.sessions || []

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
        <BookOpen className="text-blue-500" size={18} />
        {isRtl ? 'آخر الحصص' : 'Recent Sessions'}
      </h3>

      <div className="space-y-4">
        {sessions.length === 0 ? (
          <div className="text-center py-6 text-slate-400 dark:text-slate-500 font-bold text-sm">
            {t('adminDashboard.teachers.noSessions', 'لا توجد حصص حديثة')}
          </div>
        ) : (
          sessions.map((session) => {
            const isLive = session.status === 'Live'
            return (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-100/60 dark:border-slate-850/40"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-700 dark:text-brand-400 rounded-2xl shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-850 dark:text-white">
                      {session.name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{session.dateTime}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${isLive
                      ? 'bg-rose-50 text-rose-700 dark:bg-rose-955/20 dark:text-rose-400 animate-pulse'
                      : 'bg-blue-50 text-blue-705 dark:bg-blue-955/20 dark:text-blue-400'
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isLive ? 'bg-rose-600' : 'bg-blue-600'}`} />
                    {isLive
                      ? (isRtl ? 'مباشرة الآن' : 'Live Now')
                      : (isRtl ? 'قادمة' : 'Upcoming')}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 hidden sm:inline">
                    {session.students}
                  </span>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}