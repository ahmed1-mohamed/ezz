import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  CalendarPlus,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Users,
  Layers,
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import { adminTrialSessionsApi } from '@/shared/services/api/adminTrialSessionsApi'
import Spinner from '@/shared/components/Spinner'

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
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }).format(d)
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

function getGroupSessions(group) {
  if (!group) return []
  const raw = group.upcomingSessions || group.availableSessions || group.sessions || group.nextSessions || []
  return Array.isArray(raw) ? raw : []
}

export default function AssignSessionModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onSuccess,
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [availableGroups, setAvailableGroups] = useState([])
  const [selectedGroupId, setSelectedGroupId] = useState('')
  const [selectedSessionId, setSelectedSessionId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const trialId = trialSession?.id || trialSession?._id
  useEffect(() => {
    if (!isOpen || !trialId) return
    let isMounted = true
    const loadAvailableGroups = async () => {
      try {
        const res = await adminTrialSessionsApi.fetchAvailableGroups(trialId)
        if (!isMounted) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setAvailableGroups(Array.isArray(list) ? list : [])
        if (list.length > 0) {
          const firstGroup = list[0]
          const gId = firstGroup.id || firstGroup._id
          setSelectedGroupId(gId)
          const sessions = getGroupSessions(firstGroup)
          if (sessions.length > 0) {
            setSelectedSessionId(sessions[0].id || sessions[0]._id)
          }
        }
      } catch (err) {
        console.error('Failed to load available groups for trial session:', err)
        if (isMounted) {
          setErrorMsg(isRtl ? 'فشل تحميل المجموعات المتاحة للحصة التجريبية' : 'Failed to load available groups')
          setAvailableGroups([])
        }
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }
    loadAvailableGroups()
    return () => {
      isMounted = false
    }
  }, [isOpen, trialId, isRtl])
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])
  const selectedGroup = useMemo(() => {
    return availableGroups.find((g) => (g.id || g._id) === selectedGroupId) || null
  }, [availableGroups, selectedGroupId])
  const groupSessions = useMemo(() => {
    return getGroupSessions(selectedGroup)
  }, [selectedGroup])
  if (!isOpen || !trialSession) return null
  const studentName = resolveText(trialSession.student?.name || trialSession.studentName, isRtl) || (isRtl ? 'طالب' : 'Student')
  const curriculumName = resolveText(trialSession.curriculum?.name || trialSession.curriculumName, isRtl) || '-'
  const handleGroupSelect = (g) => {
    const gId = g.id || g._id
    setSelectedGroupId(gId)
    const sessions = getGroupSessions(g)
    if (sessions.length > 0) {
      setSelectedSessionId(sessions[0].id || sessions[0]._id)
    } else {
      setSelectedSessionId('')
    }
  }
  if (!isOpen || !trialId || typeof document === 'undefined') return null
  const handleAssignSubmit = async (e) => {
    e.preventDefault()
    if (!selectedGroupId) {
      toast.error(isRtl ? 'يرجى اختيار المجموعة أولاً' : 'Please select a group first')
      return
    }
    if (!selectedSessionId) {
      toast.error(isRtl ? 'يرجى اختيار الحصة المتاحة للتسكين' : 'Please select a session')
      return
    }
    setIsSubmitting(true)
    setErrorMsg('')
    try {
      await adminTrialSessionsApi.assignSession(trialId, {
        groupId: selectedGroupId,
        group: selectedGroupId,
        sessionId: selectedSessionId,
        session: selectedSessionId,
      })
      toast.success(isRtl ? 'تم تسكين الطالب في الحصة التجريبية بنجاح' : 'Student assigned to trial session successfully')
      onSuccess?.()
      onClose()
    } catch (err) {
      console.error('Failed to assign trial session:', err)
      const resMsg = err.response?.data?.message
      const text = Array.isArray(resMsg) ? resMsg.join(' - ') : (resMsg || (isRtl ? 'فشل تسكين الحصة التجريبية' : 'Failed to assign session'))
      setErrorMsg(text)
      toast.error(text)
    } finally {
      setIsSubmitting(false)
    }
  }
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-[#005953] dark:text-emerald-400 flex items-center justify-center">
              <CalendarPlus size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                {isRtl ? 'تسكين طالب في حصة تجريبية' : 'Assign Student to Trial Session'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {isRtl ? 'اختيار المجموعة المناسبة والحصة المتاحة للمنهج المطلوب' : 'Select a group and available session for the requested curriculum'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleAssignSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
          <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">{isRtl ? 'اسم الطالب:' : 'Student Name:'}</span>
              <span className="font-black text-slate-800 dark:text-white text-sm block mt-0.5">{studentName}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">{isRtl ? 'المنهج المطلوب:' : 'Curriculum:'}</span>
              <span className="font-bold text-[#005953] dark:text-emerald-400 text-sm block mt-0.5">{curriculumName}</span>
            </div>
          </div>
          {isLoading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3">
              <Spinner />
              <span className="text-xs font-bold text-slate-400">
                {isRtl ? 'جاري جلب المجموعات والحصص المتاحة...' : 'Loading available groups & sessions...'}
              </span>
            </div>
          ) : availableGroups.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 space-y-2">
              <Layers size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
              <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
                {isRtl ? 'لا توجد مجموعات متاحة حالياً لهذا المنهج الدراسي' : 'No available groups found for this curriculum'}
              </p>
              <p className="text-[11px] text-slate-400">
                {isRtl ? 'يرجى مراجعة إعداد المجموعات وجدولتها في صفحة المجموعات' : 'Please check group schedules in the groups section'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200 block mb-2">
                  {isRtl ? '1. اختر المجموعة التعليمية' : '1. Select Educational Group'} <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-44 overflow-y-auto p-1">
                  {availableGroups.map((grp) => {
                    const gId = grp.id || grp._id
                    const isSelected = String(selectedGroupId) === String(gId)
                    const gName = resolveText(grp.name, isRtl)
                    const tName = resolveText(grp.teacher?.name || grp.teacher, isRtl)
                    const sessionsCount = getGroupSessions(grp).length
                    return (
                      <div
                        key={gId}
                        onClick={() => handleGroupSelect(grp)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                          isSelected
                            ? 'border-[#005953] bg-teal-50/50 dark:bg-emerald-950/20 ring-1 ring-[#005953]'
                            : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 bg-white dark:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#005953] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                            <Users size={14} />
                          </div>
                          <div className="min-w-0 text-start">
                            <span className="text-xs font-bold text-slate-800 dark:text-white block truncate">{gName}</span>
                            {tName && (
                              <span className="text-[10px] text-slate-400 block truncate">{tName}</span>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                          {sessionsCount} {isRtl ? 'حصة' : 'sessions'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
              {selectedGroup && (
                <div>
                  <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200 block mb-2">
                    {isRtl ? '2. اختر الحصة المتاحة للتسكين' : '2. Select Available Session'} <span className="text-rose-500">*</span>
                  </label>
                  {groupSessions.length === 0 ? (
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-xs font-medium border border-amber-200">
                      {isRtl ? 'لا توجد حصص مجدولة قادمة في هذه المجموعة حالياً' : 'No upcoming sessions in this group'}
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto p-1">
                      {groupSessions.map((ses) => {
                        const sId = ses.id || ses._id
                        const isSelected = String(selectedSessionId) === String(sId)
                        const sTitle = resolveText(ses.title, isRtl) || `${isRtl ? 'الحصة' : 'Session'} #${ses.sessionNumber || ''}`
                        const timeStr = ses.time || (ses.startTime ? `${ses.startTime} ${ses.endTime ? `- ${ses.endTime}` : ''}` : '')
                        const dayText = ses.day ? resolveText(ses.day, isRtl) : ''
                        const dateFormatted = formatDate(ses.date || ses.scheduledDate, isRtl)
                        const dateText = dayText && !dateFormatted.includes(dayText) ? `${dayText}، ${dateFormatted}` : dateFormatted
                        return (
                          <div
                            key={sId}
                            onClick={() => setSelectedSessionId(sId)}
                            className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'border-[#005953] bg-teal-50/50 dark:bg-emerald-950/20 ring-1 ring-[#005953]'
                                : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 bg-white dark:bg-slate-900'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#005953] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                <Clock size={15} />
                              </div>
                              <div className="text-start">
                                <span className="text-xs font-bold text-slate-800 dark:text-white block">{sTitle}</span>
                                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono mt-0.5">
                                  <span>{dateText}</span>
                                  {timeStr && <span>• {timeStr}</span>}
                                </div>
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-[#005953] bg-[#005953] text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                              {isSelected && <CheckCircle2 size={13} />}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !selectedSessionId || isLoading}
              className="px-5 py-2.5 rounded-xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>{isRtl ? 'جاري التسكين...' : 'Assigning...'}</span>
                </>
              ) : (
                <>
                  <CalendarPlus size={14} />
                  <span>{isRtl ? 'تأكيد تسكين الطالب في الحصة' : 'Confirm Assignment'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}
