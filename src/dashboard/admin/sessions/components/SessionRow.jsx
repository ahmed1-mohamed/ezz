import { RefreshCw, UserX, X, Users, Clock, Video } from 'lucide-react'
import StatusBadge from './StatusBadge'
import ReschedulePanel from './ReschedulePanel'
import ChangeTeacherPanel from './ChangeTeacherPanel'

const safeText = (val, fallback = '') => {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    return val.ar || val.en || val.name || val.title || fallback;
  }
  return String(val);
};

export default function SessionRow({
  session,
  isExpanded,
  expandedPanel,
  handleTogglePanel,
  handleReschedule,
  handleChangeTeacher,
  handleCancelSession,
  teachers,
  t,
}) {
  const isCancelled = session.status === 'cancelled'
  const isCompleted = session.status === 'completed'

  const groupName = safeText(session.groupName, 'مجموعة دراسية')
  const sessionTitle = safeText(session.title)
  const sessionNum = safeText(session.sessionNumber)
  const teacher = safeText(session.teacher, 'غير محدد')
  const teacherContact = safeText(session.teacherPhone || session.teacherEmail)
  const date = safeText(session.date, '-')
  const day = safeText(session.day)
  const time = safeText(session.time, '-')
  const studentsCount = Number(session.studentsCount) || 0

  return (
    <div className="group">
      {/* Desktop Table Row */}
      <div className="hidden md:grid grid-cols-[2.5fr_1.8fr_1.3fr_1.4fr_0.9fr_1.1fr_2.2fr] gap-3 items-center px-5 py-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors">
        {/* 1. Group & Session Title */}
        <div className="flex items-start gap-2.5 min-w-0 text-start">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800 dark:text-white truncate">
                {groupName}
              </span>
              {sessionNum !== '' && (
                <span className="px-1.5 py-0.5 rounded-md bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-bold shrink-0">
                  #{sessionNum}
                </span>
              )}
            </div>
            {sessionTitle && (
              <p
                className="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5"
                title={sessionTitle}
              >
                {sessionTitle}
              </p>
            )}
          </div>
        </div>

        {/* 2. Teacher */}
        <div className="text-start min-w-0">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">
            {teacher}
          </p>
          {teacherContact && (
            <p className="text-[11px] text-slate-400 truncate mt-0.5">
              {teacherContact}
            </p>
          )}
        </div>

        {/* 3. Date & Day */}
        <div className="text-start">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {date}
          </p>
          {day && (
            <p className="text-xs text-slate-400 mt-0.5">
              {day}
            </p>
          )}
        </div>

        {/* 4. Time & Duration */}
        <div className="text-start">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Clock size={13} className="text-slate-400 shrink-0" />
            <span>{time}</span>
          </div>
          {session.durationMinutes > 0 && (
            <p className="text-xs text-slate-400 mt-0.5">
              {t('adminDashboard.sessions.minutesValue', {
                defaultValue: '{{count}} دقيقة',
                count: session.durationMinutes,
              })}
            </p>
          )}
        </div>

        {/* 5. Students Count */}
        <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <Users size={14} className="text-slate-400" />
          <span>{studentsCount}</span>
        </div>

        {/* 6. Status */}
        <div className="flex justify-center">
          <StatusBadge status={session.status} />
        </div>

        {/* 7. Actions */}
        <div className="flex items-center justify-end gap-1.5 flex-wrap">
          {session.zoomJoinUrl && !isCancelled && (
            <a
              href={session.zoomJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t('adminDashboard.sessions.joinZoom', 'دخول زووم')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-all cursor-pointer"
            >
              <Video size={12} />
              <span>{t('adminDashboard.sessions.zoom', 'زووم')}</span>
            </a>
          )}

          {!isCancelled && !isCompleted && (
            <>
              <button
                type="button"
                onClick={() => handleTogglePanel(session.id, 'reschedule')}
                title={t('adminDashboard.sessions.actions.reschedule', 'إعادة جدولة')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  isExpanded && expandedPanel === 'reschedule'
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
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  isExpanded && expandedPanel === 'teacher'
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
                title={t('adminDashboard.sessions.actions.cancel', 'إلغاء الحصة')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-100 transition-all cursor-pointer"
              >
                <X size={12} />
                <span>{t('adminDashboard.sessions.actions.cancel', 'إلغاء')}</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-800 text-start">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 shrink-0" />
            <span className="text-sm font-bold text-slate-800 dark:text-white truncate">
              {groupName}
            </span>
            {sessionNum !== '' && (
              <span className="px-1.5 py-0.5 rounded-md bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-bold shrink-0">
                #{sessionNum}
              </span>
            )}
          </div>
          <StatusBadge status={session.status} />
        </div>

        {sessionTitle && (
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {sessionTitle}
          </p>
        )}

        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl">
          <div>
            <span className="text-slate-400 text-[11px] block">{t('adminDashboard.sessions.headers.teacher', 'المعلم')}</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">{teacher}</span>
          </div>
          <div>
            <span className="text-slate-400 text-[11px] block">{t('adminDashboard.sessions.headers.count', 'عدد الطلاب')}</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">{studentsCount}</span>
          </div>
          <div>
            <span className="text-slate-400 text-[11px] block">{t('adminDashboard.sessions.headers.date', 'التاريخ واليوم')}</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">{date} {day ? `(${day})` : ''}</span>
          </div>
          <div>
            <span className="text-slate-400 text-[11px] block">{t('adminDashboard.sessions.headers.time', 'الوقت')}</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">{time}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap pt-1">
          {session.zoomJoinUrl && !isCancelled && (
            <a
              href={session.zoomJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer"
            >
              <Video size={12} />
              <span>{t('adminDashboard.sessions.zoom', 'زووم')}</span>
            </a>
          )}
          {!isCancelled && !isCompleted && (
            <>
              <button
                type="button"
                onClick={() => handleTogglePanel(session.id, 'reschedule')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 text-brand-600 border border-brand-200 hover:bg-brand-100 transition-all cursor-pointer"
              >
                <RefreshCw size={12} />
                <span>{t('adminDashboard.sessions.actions.reschedule', 'إعادة جدولة')}</span>
              </button>
              <button
                type="button"
                onClick={() => handleTogglePanel(session.id, 'teacher')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100 transition-all cursor-pointer"
              >
                <UserX size={12} />
                <span>{t('adminDashboard.sessions.actions.changeTeacher', 'تغيير المدرس')}</span>
              </button>
              <button
                type="button"
                onClick={() => handleCancelSession(session.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all cursor-pointer"
              >
                <X size={12} />
                <span>{t('adminDashboard.sessions.actions.cancel', 'إلغاء')}</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Expandable Panels */}
      {isExpanded && expandedPanel === 'reschedule' && (
        <ReschedulePanel
          session={session}
          onConfirm={(rescheduleData) => handleReschedule(session.id, rescheduleData)}
          onCancel={() => handleTogglePanel(session.id, 'reschedule')}
        />
      )}
      {isExpanded && expandedPanel === 'teacher' && (
        <ChangeTeacherPanel
          session={session}
          onConfirm={(tid, tname) => handleChangeTeacher(session.id, tid, tname)}
          onCancel={() => handleTogglePanel(session.id, 'teacher')}
          teachers={teachers}
        />
      )}
    </div>
  )
}
