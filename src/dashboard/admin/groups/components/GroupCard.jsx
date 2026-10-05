import { Trash2, Pencil, UserCheck, Clock, Calendar, Users } from 'lucide-react'
import { getLocalizedValue } from '../utils/groupUtils'
import StatusBadge from './StatusBadge'

export default function GroupCard({ group, onEdit, onViewStudents, onDelete, onChangeTeacher, onChangeStatus, onEditSchedule, t, isRtl }) {
  const teacherName = getLocalizedValue(group.teacher?.name, isRtl) || (typeof group.teacher === 'string' ? group.teacher : t('adminDashboard.groups.unassigned', 'غير محدد'))
  const subjectText = getLocalizedValue(group.curriculum?.name || group.subject, isRtl)
  const levelText = getLocalizedValue(group.studentLevel?.name || group.level, isRtl)
  const subDetails = [subjectText, levelText].filter(Boolean).join(' · ')
  const studentsCount = group.currentStudentsCount ?? group.students?.length ?? 0
  const maxStudents = group.maxStudents || 0
  const scheduleList = group.weeklySchedule || group.schedule || []

  const getDayName = (rawDay) => {
    if (!rawDay) return ''
    const key = rawDay.toString().trim().toLowerCase()
    const map = {
      'sunday': t('schedule.sunday', 'الأحد'),
      'monday': t('schedule.monday', 'الاثنين'),
      'tuesday': t('schedule.tuesday', 'الثلاثاء'),
      'wednesday': t('schedule.wednesday', 'الأربعاء'),
      'thursday': t('schedule.thursday', 'الخميس'),
      'friday': t('schedule.friday', 'الجمعة'),
      'saturday': t('schedule.saturday', 'السبت'),
    }
    return map[key] || rawDay
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft p-5 flex flex-col justify-between gap-4 hover:shadow-md transition-all group">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDelete(group)}
              className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all cursor-pointer"
              title={t('adminDashboard.groups.delete', 'حذف')}
            >
              <Trash2 size={14} />
            </button>
            <button
              onClick={() => onEdit(group)}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              title={t('adminDashboard.groups.edit', 'تعديل')}
            >
              <Pencil size={14} />
            </button>
            {onChangeTeacher && (
              <button
                onClick={() => onChangeTeacher(group)}
                className="p-1.5 rounded-lg text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all cursor-pointer"
                title={t('adminDashboard.groups.changeTeacher', 'تغيير المعلم')}
              >
                <UserCheck size={14} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {group.country?.flag && (
              <span className="text-sm" title={group.country.name}>
                {group.country.flag}
              </span>
            )}
            {group.type && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                {group.type === 'public'
                  ? t('adminDashboard.groups.typePublic', 'عامة')
                  : t('adminDashboard.groups.typePrivate', 'خاصة')}
              </span>
            )}
            <StatusBadge
              status={group.status}
              onChangeStatus={onChangeStatus ? (newStatus) => onChangeStatus(group.id, newStatus) : null}
              t={t}
            />
          </div>
        </div>

        <div className="text-start space-y-1">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white truncate" title={getLocalizedValue(group.name, isRtl)}>
            {getLocalizedValue(group.name, isRtl)}
          </h3>
          {subDetails && (
            <p className="text-xs text-slate-400 dark:text-slate-500 truncate" title={subDetails}>
              {subDetails}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div
          onClick={() => onChangeTeacher && onChangeTeacher(group)}
          className="flex flex-col items-center gap-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 border border-transparent hover:border-amber-200 dark:hover:border-amber-800/50 rounded-2xl px-2.5 py-2 min-w-0 transition-all cursor-pointer group/tch"
          title={t('adminDashboard.groups.clickToChangeTeacher', 'انقر لتغيير المعلم')}
        >
          <span className="font-bold text-slate-700 dark:text-slate-200 truncate max-w-full text-center group-hover/tch:text-amber-600 dark:group-hover/tch:text-amber-400 transition-colors" title={teacherName}>
            {teacherName}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">{t('adminDashboard.groups.teacher', 'المعلم')}</span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold opacity-0 group-hover/tch:opacity-100 transition-opacity">
              ({t('adminDashboard.groups.change', 'تغيير')})
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl px-2.5 py-2">
          <span className="font-bold text-brand-600 dark:text-brand-400">
            {studentsCount} / {maxStudents}
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">{t('adminDashboard.groups.students', 'الطلاب')}</span>
        </div>
      </div>

      {scheduleList.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap gap-1.5 justify-start items-center">
            {scheduleList.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2 py-0.5 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 rounded-lg flex items-center gap-1"
                title={s.startTime ? `${s.startTime} - ${s.endTime}` : (s.timeFrom ? `${s.timeFrom} - ${s.timeTo}` : '')}
              >
                <Clock size={10} className="opacity-60" />
                <span>{getDayName(s.day)}</span>
                {s.startTime && <span className="text-[9px] opacity-75 dir-ltr">{s.startTime}</span>}
              </span>
            ))}
            {scheduleList.length > 3 && (
              <span className="text-[11px] font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg">
                +{scheduleList.length - 3}
              </span>
            )}
            {onEditSchedule && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onEditSchedule(group)
                }}
                className="text-[10px] text-brand-600 hover:text-brand-700 dark:text-brand-400 font-bold hover:underline cursor-pointer flex items-center gap-0.5 ms-auto"
                title={t('adminDashboard.groups.editSchedule', 'تعديل جدول الحصص')}
              >
                <Calendar size={11} />
                <span>{t('adminDashboard.groups.editScheduleAction', 'تعديل الجدول')}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {scheduleList.length === 0 && onEditSchedule && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onEditSchedule(group)
          }}
          className="text-xs text-brand-600 hover:text-brand-700 dark:text-brand-400 font-semibold flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-brand-50/60 dark:bg-brand-900/10 border border-brand-200/60 hover:bg-brand-100/60 transition-all cursor-pointer"
        >
          <Calendar size={13} />
          <span>{t('adminDashboard.groups.setSchedule', 'تحديد جدول الحصص')}</span>
        </button>
      )}

      <button
        onClick={() => onViewStudents(group)}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-2xl border border-dashed border-brand-300 dark:border-brand-700 text-brand-600 dark:text-brand-400 text-xs font-semibold hover:bg-brand-50 dark:hover:bg-brand-900/10 transition-all cursor-pointer"
      >
        <Users size={14} />
        <span>{t('adminDashboard.groups.viewAndManageStudents', 'عرض الطلاب وإدارتهم')}</span>
      </button>
    </div>
  )
}
