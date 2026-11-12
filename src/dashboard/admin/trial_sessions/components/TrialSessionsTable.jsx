import {
  Eye,
  CalendarPlus,
  Ban,
  Clock,
  CheckCircle2,
  XCircle,
  BookOpen,
  Calendar,
  CheckCheck,
  AlertCircle,
} from 'lucide-react'

function formatDate(dateStr, isRtl = true) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d)
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

function resolveText(val, isRtl = true) {
  if (!val) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'object') {
    return (isRtl ? (val.ar || val.en) : (val.en || val.ar)) || val.name || ''
  }
  return String(val)
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

export default function TrialSessionsTable({
  trialSessions = [],
  onViewDetails,
  onAssignSession,
  onCancelRequest,
  isRtl = true,
}) {
  const renderStatus = (status, statusLabel) => {
    const s = String(status || '').toLowerCase().trim()
    const label = statusLabel ? String(statusLabel).trim() : ''
    if (s === 'scheduled' || s === 'assigned' || s === 'مجدولة' || s === 'تم التسكين' || s === 'مسكن') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
          <CheckCircle2 size={13} />
          <span>{isRtl ? (label || 'مجدولة') : 'Scheduled'}</span>
        </span>
      )
    }
    if (s === 'cancelled' || s === 'canceled' || s === 'ملغي' || s === 'ملغاة' || s === 'rejected' || s === 'مرفوض' || s === 'مرفوضة') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40">
          <XCircle size={13} />
          <span>{isRtl ? (label || 'ملغاة') : 'Cancelled'}</span>
        </span>
      )
    }
    if (s === 'completed' || s === 'مكتملة') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/40">
          <CheckCheck size={13} />
          <span>{isRtl ? (label || 'مكتملة') : 'Completed'}</span>
        </span>
      )
    }
    if (s === 'missed' || s === 'لم يحضر' || s === 'فائتة') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          <AlertCircle size={13} />
          <span>{isRtl ? (label || 'فائتة') : 'Missed'}</span>
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
        <Clock size={13} />
        <span>{isRtl ? (label || 'بانتظار التسكين') : 'Pending'}</span>
      </span>
    )
  }

  if (trialSessions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-3" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <Calendar size={24} />
        </div>
        <h4 className="text-base font-extrabold text-slate-700 dark:text-slate-200">
          {isRtl ? 'لا توجد طلبات حصص تجريبية' : 'No trial session requests found'}
        </h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          {isRtl
            ? 'لم يتم العثور على أي طلبات حصص تجريبية تطابق معايير الفلترة أو البحث الحالية.'
            : 'No trial session requests matching the current filters.'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden text-start" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-extrabold">
              <th className="py-4 px-4">{isRtl ? 'الطالب' : 'Student'}</th>
              <th className="py-4 px-4">{isRtl ? 'ولي الأمر' : 'Parent'}</th>
              <th className="py-4 px-4">{isRtl ? 'المنهج الدراسي' : 'Curriculum'}</th>
              <th className="py-4 px-4">{isRtl ? 'تاريخ الطلب' : 'Request Date'}</th>
              <th className="py-4 px-4">{isRtl ? 'الحالة' : 'Status'}</th>
              <th className="py-4 px-4">{isRtl ? 'التسكين الحالي' : 'Assigned Session'}</th>
              <th className="py-4 px-4 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {trialSessions.map((item) => {
              const reqId = item.id || item._id
              const studentObj = item.student || {}
              const studentName = resolveText(studentObj.name || item.studentName, isRtl) || (isRtl ? 'طالب' : 'Student')
              const studentLevel = resolveText(studentObj.studentLevel || studentObj.level, isRtl)
              const studentInitial = studentName.trim().charAt(0) || 'ط'
              const parentObj = item.parent || {}
              const parentName = resolveText(parentObj.name || item.parentName, isRtl) || '-'
              const parentPhone = parentObj.phone || item.parentPhone || '-'
              const curriculumObj = item.curriculum || {}
              const curriculumName = resolveText(curriculumObj.name || item.curriculumName, isRtl) || '-'
              const sLower = String(item.status || '').toLowerCase().trim()
              const isPending = !item.status || sLower === 'pending'
              const isCancelled = sLower === 'cancelled' || sLower === 'canceled' || sLower === 'rejected'
              const assignedGroup = item.assignedGroup || item.group || null
              const assignedGroupName = resolveText(assignedGroup?.name || item.groupName, isRtl)
              const rawTeacher = assignedGroup?.teacher
              const assignedTeacher = resolveText(
                typeof rawTeacher === 'object' && rawTeacher !== null
                  ? (rawTeacher.name || rawTeacher)
                  : (rawTeacher || item.teacherName || item.teacher),
                isRtl
              )
              const assignedSession = item.assignedSession || item.session || null
              return (
                <tr
                  key={reqId}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="py-4 px-4 font-bold text-slate-800 dark:text-white whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#005953]/10 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                        {studentInitial}
                      </div>
                      <div>
                        <span className="block font-black text-slate-900 dark:text-white">{studentName}</span>
                        {studentLevel && (
                          <span className="text-[10px] text-slate-400 font-medium block">
                            {studentLevel}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <span className="block font-bold text-slate-800 dark:text-slate-200">{parentName}</span>
                      <span className="text-[10px] text-slate-400 font-mono block" dir="ltr">{parentPhone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={13} className="text-[#005953] dark:text-emerald-400 shrink-0" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[150px]">
                        {curriculumName}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">
                    {formatDate(item.createdAt || item.requestDate, isRtl)}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {renderStatus(item.status, item.statusLabel)}
                  </td>
                  <td className="py-4 px-4 text-xs">
                    {assignedGroupName ? (
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#005953] dark:text-emerald-400 block truncate max-w-[160px]">
                          {assignedGroupName}
                        </span>
                        {assignedTeacher && (
                          <span className="text-[10px] text-slate-400 block truncate max-w-[160px]">
                            {isRtl ? `المعلم: ${assignedTeacher}` : `Teacher: ${assignedTeacher}`}
                          </span>
                        )}
                        {assignedSession?.date && (
                          <span className="text-[10px] text-slate-500 font-mono block">
                            {assignedSession.title ? `${assignedSession.title} • ` : ''}
                            {formatDate(assignedSession.date, isRtl)}
                            {assignedSession.startTime ? ` ${formatTime(assignedSession.startTime, isRtl)}` : ''}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-slate-400 font-semibold">{isRtl ? 'لم تسكن بعد' : 'Not assigned'}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1.5">
                      {isPending && onAssignSession && (
                        <button
                          type="button"
                          onClick={() => onAssignSession(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#005953] hover:bg-[#004742] text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                          title={isRtl ? 'تسكين الطالب في حصة' : 'Assign to session'}
                        >
                          <CalendarPlus size={13} />
                          <span>{isRtl ? 'تسكين' : 'Assign'}</span>
                        </button>
                      )}
                      {onViewDetails && (
                        <button
                          type="button"
                          onClick={() => onViewDetails(item)}
                          className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                          title={isRtl ? 'عرض التفاصيل' : 'View details'}
                        >
                          <Eye size={15} />
                        </button>
                      )}
                      {!isCancelled && item.status !== 'completed' && onCancelRequest && (
                        <button
                          type="button"
                          onClick={() => onCancelRequest(item)}
                          className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                          title={isRtl ? 'إلغاء أو رفض الطلب' : 'Cancel request'}
                        >
                          <Ban size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
