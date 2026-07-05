import { RefreshCw, UserX, X, Users, Clock } from 'lucide-react'
import StatusBadge from './StatusBadge'
import ReschedulePanel from './ReschedulePanel'
import ChangeTeacherPanel from './ChangeTeacherPanel'

export default function SessionRow({
  session,
  isExpanded,
  expandedPanel,
  handleTogglePanel,
  handleReschedule,
  handleChangeTeacher,
  handleCancelSession,
  mockTeachers,
  t
}) {
  const getSessionTimeLabel = (timeStr) => {
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
    <div className="group">
      <div className="hidden md:grid grid-cols-[2fr_2fr_1.2fr_1.2fr_0.8fr_1.2fr_1.5fr] gap-2 items-center px-5 py-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors">
        <div className="flex items-center gap-2 flex-wrap">
          {session.status !== 'cancelled' && session.status !== 'completed' && (
            <>
              <button
                type="button"
                onClick={() => handleTogglePanel(session.id, 'reschedule')}
                title={t('adminDashboard.sessions.actions.reschedule', 'إعادة جدولة')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${isExpanded && expandedPanel === 'reschedule'
                    ? 'bg-brand-500 text-white border-brand-500'
                    : 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 hover:bg-brand-100'
                  }`}
              >
                <RefreshCw size={12} />
                <span>{t('adminDashboard.sessions.actions.reschedule', 'إعادة جدولة')}</span>
              </button>
              <button
                type="button"
                onClick={() => handleTogglePanel(session.id, 'teacher')}
                title={t('adminDashboard.sessions.actions.changeTeacher', 'تغيير المدرس')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${isExpanded && expandedPanel === 'teacher'
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800 hover:bg-amber-100'
                  }`}
              >
                <UserX size={12} />
                <span>{t('adminDashboard.sessions.actions.changeTeacher', 'تغيير المدرس')}</span>
              </button>
              <button
                type="button"
                onClick={() => handleCancelSession(session.id)}
                title={t('adminDashboard.sessions.actions.cancelGroup', 'إلغاء الحصة')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-100 transition-all cursor-pointer"
              >
                <X size={12} />
                <span>{t('adminDashboard.sessions.actions.cancelGroup', 'إلغاء المجموعة')}</span>
              </button>
            </>
          )}
        </div>

        <div className="flex justify-end">
          <StatusBadge status={session.status} />
        </div>

        <div className="flex items-center justify-end gap-1.5 text-sm text-slate-600 dark:text-slate-350">
          <span>{session.studentsCount}</span>
          <Users size={14} className="text-slate-400" />
        </div>

        <div className="flex items-center justify-end gap-1.5 text-sm text-slate-600 dark:text-slate-350">
          <span>{t('adminDashboard.sessions.minutesValue', { defaultValue: '{{count}} دقيقة', count: session.duration })}</span>
          <Clock size={14} className="text-slate-400" />
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400 text-end">
          {session.date}
        </div>

        <div className="text-sm font-medium text-slate-700 dark:text-slate-300 text-end">
          {session.teacher}
        </div>

        <div className="flex items-center gap-2 justify-end">
          <span className="text-sm font-bold text-slate-800 dark:text-white">{session.groupName}</span>
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-2 px-4 py-4">
        <div className="flex items-center justify-between">
          <StatusBadge status={session.status} />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-500" />
            <span className="text-sm font-bold text-slate-800 dark:text-white">{session.groupName}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{session.date} | {getSessionTimeLabel(session.time)}</span>
          <span>{session.teacher}</span>
        </div>
        {session.status !== 'cancelled' && session.status !== 'completed' && (
          <div className="flex items-center gap-2 flex-wrap pt-1">
            <button
              type="button"
              onClick={() => handleTogglePanel(session.id, 'reschedule')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 text-brand-600 border border-brand-200 hover:bg-brand-100 transition-all cursor-pointer"
            >
              <RefreshCw size={12} />
              {t('adminDashboard.sessions.actions.reschedule', 'إعادة جدولة')}
            </button>
            <button
              type="button"
              onClick={() => handleTogglePanel(session.id, 'teacher')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100 transition-all cursor-pointer"
            >
              <UserX size={12} />
              {t('adminDashboard.sessions.actions.changeTeacher', 'تغيير المدرس')}
            </button>
            <button
              type="button"
              onClick={() => handleCancelSession(session.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all cursor-pointer"
            >
              <X size={12} />
              {t('adminDashboard.sessions.actions.cancel', 'إلغاء')}
            </button>
          </div>
        )}
      </div>

      {isExpanded && expandedPanel === 'reschedule' && (
        <ReschedulePanel
          session={session}
          onConfirm={(date, time) => handleReschedule(session.id, date, time)}
          onCancel={() => handleTogglePanel(session.id, 'reschedule')}
        />
      )}
      {isExpanded && expandedPanel === 'teacher' && (
        <ChangeTeacherPanel
          session={session}
          onConfirm={(tid, tname) => handleChangeTeacher(session.id, tid, tname)}
          onCancel={() => handleTogglePanel(session.id, 'teacher')}
          teachers={mockTeachers}
        />
      )}
    </div>
  )
}
