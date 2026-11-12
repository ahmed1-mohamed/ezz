import { createPortal } from 'react-dom'
import {
  X,
  User,
  BookOpen,
  CalendarPlus,
  CheckCircle2,
} from 'lucide-react'

function resolveText(val, isRtl = true) {
  if (!val) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'object') {
    return (isRtl ? (val.ar || val.en) : (val.en || val.ar)) || val.name || ''
  }
  return String(val)
}

function formatDate(dateStr, isRtl = true) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(d)
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

function formatTime(timeVal, isRtl = true) {
  if (!timeVal) return ''
  try {
    if (String(timeVal).includes('T')) {
      const d = new Date(timeVal)
      if (!isNaN(d.getTime())) {
        return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }).format(d)
      }
    }
  } catch {
    return String(timeVal)
  }
  return String(timeVal)
}

export default function TrialSessionDetailsModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onOpenAssign,
}) {
  if (!isOpen || !trialSession || typeof document === 'undefined') return null
  const studentObj = trialSession.student || {}
  const studentName = resolveText(studentObj.name || trialSession.studentName, isRtl) || (isRtl ? 'طالب' : 'Student')
  const studentAge = studentObj.age || trialSession.age
  const studentCountry = studentObj.country || trialSession.country
  const studentLevel = resolveText(studentObj.studentLevel || studentObj.level, isRtl)
  const parentObj = trialSession.parent || {}
  const parentName = resolveText(parentObj.name || trialSession.parentName, isRtl) || '-'
  const parentPhone = parentObj.phone || trialSession.parentPhone || '-'
  const parentEmail = parentObj.email || trialSession.parentEmail || '-'
  const curriculumObj = trialSession.curriculum || {}
  const curriculumName = resolveText(curriculumObj.name || trialSession.curriculumName, isRtl) || '-'
  const sLower = String(trialSession.status || '').toLowerCase().trim()
  const isPending = !trialSession.status || sLower === 'pending'
  const isCancelled = sLower === 'cancelled' || sLower === 'canceled' || sLower === 'rejected'
  const assignedGroup = trialSession.assignedGroup || trialSession.group || null
  const assignedGroupName = resolveText(assignedGroup?.name || trialSession.groupName, isRtl)
  const rawTeacher = assignedGroup?.teacher
  const assignedTeacher = resolveText(
    typeof rawTeacher === 'object' && rawTeacher !== null
      ? (rawTeacher.name || rawTeacher)
      : (rawTeacher || trialSession.teacherName || trialSession.teacher),
    isRtl
  )
  const assignedSession = trialSession.assignedSession || trialSession.session || null
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col my-auto animate-scaleUp text-start"
      >
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-[#005953] dark:text-emerald-400 flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-800 dark:text-white">
                {isRtl ? 'تفاصيل طلب الحصة التجريبية' : 'Trial Session Details'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl ? 'بيانات الطالب، ولي الأمر، وحالة التسكين' : 'Student, parent, and assignment info'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div className="p-4 rounded-2xl bg-[#005953]/5 dark:bg-emerald-950/20 border border-[#005953]/15 dark:border-emerald-900/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#005953] dark:text-emerald-400 flex items-center gap-1.5">
                <User size={14} />
                <span>{isRtl ? 'بيانات الطالب' : 'Student Details'}</span>
              </span>
              <span className="text-xs font-black text-slate-800 dark:text-white">{studentName}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-[#005953]/10">
              {studentAge && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'العمر:' : 'Age:'}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{studentAge} {isRtl ? 'سنوات' : 'years'}</span>
                </div>
              )}
              {studentCountry && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'الدولة:' : 'Country:'}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{studentCountry}</span>
                </div>
              )}
              {studentLevel && (
                <div className="col-span-2">
                  <span className="text-slate-400 block">{isRtl ? 'المستوى الدراسي:' : 'Level:'}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{studentLevel}</span>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1">
              {isRtl ? 'بيانات ولي الأمر والتواصل' : 'Parent & Contact'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{isRtl ? 'ولي الأمر:' : 'Parent:'}</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{parentName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{isRtl ? 'رقم الهاتف:' : 'Phone:'}</span>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300" dir="ltr">{parentPhone}</span>
            </div>
            {parentEmail && parentEmail !== '-' && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{isRtl ? 'البريد الإلكتروني:' : 'Email:'}</span>
                <span className="font-mono text-slate-700 dark:text-slate-300">{parentEmail}</span>
              </div>
            )}
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1">
              {isRtl ? 'المنهج والطلب' : 'Curriculum & Request'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{isRtl ? 'المنهج التعليمي:' : 'Curriculum:'}</span>
              <span className="font-bold text-[#005953] dark:text-emerald-400">{curriculumName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{isRtl ? 'تاريخ الطلب:' : 'Request Date:'}</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{formatDate(trialSession.createdAt || trialSession.requestDate, isRtl)}</span>
            </div>
            {trialSession.notes && (
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-400 block mb-0.5">{isRtl ? 'ملاحظات ولي الأمر:' : 'Parent Notes:'}</span>
                <p className="font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  {trialSession.notes}
                </p>
              </div>
            )}
          </div>
          {assignedGroupName && (
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>{isRtl ? 'التسكين الفعلي للحصة' : 'Assigned Session Details'}</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  {isRtl ? (trialSession.statusLabel || 'مجدولة') : 'Scheduled'}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-500">{isRtl ? 'المجموعة:' : 'Group:'}</span>
                <span className="font-bold text-slate-800 dark:text-white">{assignedGroupName}</span>
              </div>
              {assignedTeacher && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{isRtl ? 'المعلم:' : 'Teacher:'}</span>
                  <span className="font-bold text-slate-800 dark:text-white">{assignedTeacher}</span>
                </div>
              )}
              {assignedSession?.date && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{isRtl ? 'موعد الحصة:' : 'Session Time:'}</span>
                  <span className="font-mono text-slate-800 dark:text-white">
                    {assignedSession.title ? `${assignedSession.title} • ` : ''}
                    {formatDate(assignedSession.date, isRtl)}
                    {assignedSession.startTime ? ` ${formatTime(assignedSession.startTime, isRtl)}` : ''}
                  </span>
                </div>
              )}
            </div>
          )}
          {isCancelled && trialSession.cancellationReason && (
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs space-y-1">
              <span className="font-bold text-rose-700 dark:text-rose-300 block">{isRtl ? 'سبب الإلغاء / الرفض:' : 'Cancellation Reason:'}</span>
              <p className="text-slate-600 dark:text-slate-300">{trialSession.cancellationReason}</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          {isPending && onOpenAssign ? (
            <button
              type="button"
              onClick={() => {
                onClose()
                onOpenAssign(trialSession)
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <CalendarPlus size={15} />
              <span>{isRtl ? 'تسكين الطالب في حصة الآن' : 'Assign to Session Now'}</span>
            </button>
          ) : <div />}
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isRtl ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
