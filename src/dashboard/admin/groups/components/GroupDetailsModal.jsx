import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { Users, UserPlus, X, GraduationCap, Calendar, Loader2, UserCheck, Trash2 } from 'lucide-react'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentSelect from './fields/StudentSelect'
import StatusBadge from './StatusBadge'
import { getLocalizedValue } from '../utils/groupUtils'

export default function GroupDetailsModal({ group, onClose, onRemoveStudent, onOpenAddStudents, onAddStudent, onChangeTeacher, onChangeStatus, onEditSchedule, t, isRtl }) {
  const [availableStudents, setAvailableStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isAdding, setIsAdding] = useState(false)
  const [isLoadingStudents, setIsLoadingStudents] = useState(false)

  const studentsList = group.students || []
  const count = group.currentStudentsCount ?? studentsList.length

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

  useEffect(() => {
    let active = true
    const load = async () => {
      setIsLoadingStudents(true)
      try {
        const res = await studentsApi.fetchAllLocalizedStudents()
        if (!active) return
        const data = res?.data || res || []
        setAvailableStudents(Array.isArray(data) ? data : [])
      } catch (err) {
        console.warn('Could not load students for select:', err)
      } finally {
        if (active) setIsLoadingStudents(false)
      }
    }
    load()
    return () => { active = false }
  }, [])

  const existingIds = useMemo(() => studentsList.map((s) => s.id || s._id), [studentsList])

  const handleAddClick = async () => {
    if (!selectedStudent || !onAddStudent) return
    setIsAdding(true)
    try {
      await onAddStudent(group.id, selectedStudent)
      setSelectedStudent(null)
    } finally {
      setIsAdding(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-start sm:items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10 shrink-0 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
              <Users size={20} />
            </div>
            <div className="text-start">
              <h2 className="text-base font-bold text-slate-800 dark:text-white">{getLocalizedValue(group.name, isRtl)}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('adminDashboard.groups.groupStudents', 'طلاب المجموعة ({{count}})', { count })}
              </p>
            </div>
            <div className="hidden sm:block">
              <StatusBadge
                status={group.status}
                onChangeStatus={onChangeStatus ? (newStatus) => onChangeStatus(group.id, newStatus) : null}
                t={t}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenAddStudents && (
              <button
                type="button"
                onClick={onOpenAddStudents}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 dark:hover:bg-brand-900/40 text-brand-600 dark:text-brand-400 transition-all border border-brand-200 dark:border-brand-800 cursor-pointer"
                title={t('adminDashboard.groups.addStudents', 'إضافة طلاب')}
              >
                <UserPlus size={14} />
                <span className="hidden sm:inline">{t('adminDashboard.groups.addStudents', 'إضافة طلاب')}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

         <div className="px-5 py-3 bg-amber-50/50 dark:bg-amber-950/20 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
              <GraduationCap size={16} />
            </div>
            <div className="text-start truncate">
              <span className="text-[10px] text-slate-400 font-semibold block">{t('adminDashboard.groups.teacher', 'المعلم')}</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate block">
                {getLocalizedValue(group.teacher?.name, isRtl) || (typeof group.teacher === 'string' ? group.teacher : t('adminDashboard.groups.unassigned', 'غير محدد'))}
              </span>
            </div>
          </div>
          {onChangeTeacher && (
            <button
              type="button"
              onClick={() => onChangeTeacher(group)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700 transition-all border border-amber-200 dark:border-amber-800/60 shadow-xs cursor-pointer shrink-0"
              title={t('adminDashboard.groups.changeTeacher', 'تغيير المعلم')}
            >
              <UserCheck size={13} />
              <span>{t('adminDashboard.groups.changeTeacher', 'تغيير المعلم')}</span>
            </button>
          )}
        </div>

         <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <Calendar size={15} className="text-brand-600 dark:text-brand-400 shrink-0" />
            <div className="flex items-center gap-1.5 flex-wrap">
              {(group.weeklySchedule || group.schedule || []).map((s, i) => (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {getDayName(s.day)} ({s.startTime || s.timeFrom} - {s.endTime || s.timeTo})
                </span>
              ))}
              {(!group.weeklySchedule || group.weeklySchedule.length === 0) && (
                <span className="text-xs text-slate-400">{t('adminDashboard.groups.noSchedule', 'لا توجد مواعيد محددة')}</span>
              )}
            </div>
          </div>
          {onEditSchedule && (
            <button
              type="button"
              onClick={() => onEditSchedule(group)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 transition-all border border-brand-200 dark:border-brand-800 shrink-0 cursor-pointer"
            >
              <Calendar size={12} />
              <span>{t('adminDashboard.groups.editScheduleAction', 'تعديل الجدول')}</span>
            </button>
          )}
        </div>

         <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 space-y-2 shrink-0">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 text-start">
            {t('adminDashboard.groups.addStudentToGroup', 'إضافة طالب إلى المجموعة')}
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 min-w-0">
              <StudentSelect
                students={availableStudents}
                selectedStudent={selectedStudent}
                onSelect={setSelectedStudent}
                excludeIds={existingIds}
                placeholder={t('adminDashboard.groups.selectStudentPlaceholder', 'اختر طالباً لإضافته...')}
                isRtl={isRtl}
                disabled={isAdding || isLoadingStudents}
              />
            </div>
            <button
              type="button"
              onClick={handleAddClick}
              disabled={!selectedStudent || isAdding}
              className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer shrink-0"
            >
              {isAdding ? <Loader2 size={14} className="animate-spin" /> : <UserPlus size={14} />}
              <span>{t('adminDashboard.groups.add', 'إضافة')}</span>
            </button>
          </div>
        </div>

        <div className="p-5 space-y-3 overflow-y-auto flex-1">
          {studentsList.length === 0 ? (
            <p className="text-center text-slate-400 text-sm py-8">
              {t('adminDashboard.groups.noStudentsInGroup', 'لا يوجد طلاب مسجلون في هذه المجموعة')}
            </p>
          ) : (
            studentsList.map((student) => (
              <div
                key={student.id || student._id}
                className="flex items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group/std"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-sm shrink-0">
                    {getLocalizedValue(student.name, isRtl).charAt(0)}
                  </div>
                  <div className="text-start">
                    <p className="text-sm font-bold text-slate-800 dark:text-white">{getLocalizedValue(student.name, isRtl)}</p>
                    {student.joinDate && <p className="text-xs text-slate-400">{student.joinDate}</p>}
                  </div>
                </div>
                <button
                  onClick={() => onRemoveStudent(group.id, student.id || student._id, getLocalizedValue(student.name, isRtl))}
                  className="flex items-center gap-1.5 p-2 md:px-3 md:py-1.5 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all border border-red-200 dark:border-red-800 cursor-pointer opacity-100 sm:opacity-0 group-hover/std:opacity-100"
                  title={t('adminDashboard.groups.removeStudent', 'إزالة')}
                >
                  <Trash2 size={14} />
                  <span className="hidden sm:inline">{t('adminDashboard.groups.removeStudent', 'إزالة')}</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
