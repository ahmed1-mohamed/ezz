import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Star,
  Sparkles,
  Smile,
  Meh,
  Frown,
  TrendingDown,
  Award,
  CheckCircle2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import { teachersApi, getImageUrl } from '@/shared/services/api/teachersApi'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi'
import { adminTeacherEvaluationsApi } from '@/shared/services/api/adminTeacherEvaluationsApi'

const RATING_OPTIONS = [
  {
    key: 'needs_improvement',
    labelAr: 'يحتاج للتطور',
    labelEn: 'Needs Improvement',
    colorClass: 'border-purple-300 bg-purple-50 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
    activeClass: 'ring-2 ring-purple-600 bg-purple-100 dark:bg-purple-900/60 font-bold',
    icon: TrendingDown,
  },
  {
    key: 'poor',
    labelAr: 'ضعيف',
    labelEn: 'Poor',
    colorClass: 'border-rose-300 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
    activeClass: 'ring-2 ring-rose-600 bg-rose-100 dark:bg-rose-900/60 font-bold',
    icon: Frown,
  },
  {
    key: 'acceptable',
    labelAr: 'مقبول',
    labelEn: 'Acceptable',
    colorClass: 'border-amber-300 bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    activeClass: 'ring-2 ring-amber-500 bg-amber-100 dark:bg-amber-900/60 font-bold',
    icon: Meh,
  },
  {
    key: 'good',
    labelAr: 'جيد',
    labelEn: 'Good',
    colorClass: 'border-blue-300 bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
    activeClass: 'ring-2 ring-blue-600 bg-blue-100 dark:bg-blue-900/60 font-bold',
    icon: Smile,
  },
  {
    key: 'very_good',
    labelAr: 'جيد جداً',
    labelEn: 'Very Good',
    colorClass: 'border-teal-300 bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800',
    activeClass: 'ring-2 ring-teal-600 bg-teal-100 dark:bg-teal-900/60 font-bold',
    icon: Award,
  },
  {
    key: 'excellent',
    labelAr: 'ممتاز',
    labelEn: 'Excellent',
    colorClass: 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    activeClass: 'ring-2 ring-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 font-bold',
    icon: Sparkles,
  },
]

const resolveGroupId = (entity) => {
  if (!entity) return ''
  if (typeof entity === 'string') return entity
  return String(entity.groupId || entity.id || entity._id || '')
}

export default function AdminAddTeacherEvaluationModal({
  isOpen,
  onClose,
  onCreated,
  initialTeacherId = '',
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true
  const [teachers, setTeachers] = useState([])
  const [groups, setGroups] = useState([])
  const [rawSessions, setRawSessions] = useState([])
  const [selectedTeacherId, setSelectedTeacherId] = useState(initialTeacherId || '')
  const [selectedGroupId, setSelectedGroupId] = useState('')
  const [selectedSessionId, setSelectedSessionId] = useState('')
  const [selectedRating, setSelectedRating] = useState('excellent')
  const [notes, setNotes] = useState('')
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(false)
  const [isLoadingGroups, setIsLoadingGroups] = useState(false)
  const [isLoadingSessions, setIsLoadingSessions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const selectedTeacher = useMemo(() => {
    return teachers.find((t) => {
      const tid = t.id || t._id || t.teacher_id || t.teacherId || t.user_id
      return String(tid) === String(selectedTeacherId)
    })
  }, [teachers, selectedTeacherId])
  useEffect(() => {
    if (!isOpen) return
    let active = true
    const loadTeachers = async () => {
      setIsLoadingTeachers(true)
      try {
        const res = await teachersApi.fetchTeachers({ limit: 100 })
        if (!active) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setTeachers(Array.isArray(list) ? list : [])
      } catch {
        if (!active) return
        setTeachers([])
      } finally {
        if (active) setIsLoadingTeachers(false)
      }
    }
    loadTeachers()
    return () => {
      active = false
    }
  }, [isOpen])
  useEffect(() => {
    if (!selectedTeacherId) return
    let active = true
    const loadGroups = async () => {
      setIsLoadingGroups(true)
      try {
        const res = await adminGroupsApi.fetchLocalizedActiveGroups({
          teacher: selectedTeacherId,
        })
        if (!active) return
        const list = res?.data || res?.groups || (Array.isArray(res) ? res : [])
        setGroups(Array.isArray(list) ? list : [])
      } catch {
        if (!active) return
        setGroups([])
      } finally {
        if (active) setIsLoadingGroups(false)
      }
    }
    loadGroups()
    return () => {
      active = false
    }
  }, [selectedTeacherId])
  useEffect(() => {
    if (!selectedGroupId) return
    let active = true
    const loadSessions = async () => {
      setIsLoadingSessions(true)
      try {
        const res = await adminSessionsApi.fetchAllLocalizedSessions({
          group: selectedGroupId,
          status: 'completed',
        })
        if (!active) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setRawSessions(Array.isArray(list) ? list : [])
      } catch {
        if (!active) return
        setRawSessions([])
      } finally {
        if (active) setIsLoadingSessions(false)
      }
    }
    loadSessions()
    return () => {
      active = false
    }
  }, [selectedGroupId])
  const activeGroups = useMemo(() => {
    if (!selectedTeacherId) return []
    return groups
  }, [selectedTeacherId, groups])
  const completedSessions = useMemo(() => {
    if (!selectedGroupId) return []
    return rawSessions.filter((session) => {
      const sessionGroupId = resolveGroupId(session.group) || String(session.groupId || '')
      return !sessionGroupId || sessionGroupId === String(selectedGroupId)
    })
  }, [rawSessions, selectedGroupId])
  const selectedGroup = useMemo(() => {
    return activeGroups.find((g) => (g.id || g._id) === selectedGroupId)
  }, [activeGroups, selectedGroupId])
  const selectedSession = useMemo(() => {
    return completedSessions.find((session) => (session.id || session._id) === selectedSessionId) || null
  }, [completedSessions, selectedSessionId])
  const handleTeacherChange = (newTeacherId) => {
    setSelectedTeacherId(newTeacherId)
    setSelectedGroupId('')
    setSelectedSessionId('')
    setGroups([])
    setRawSessions([])
  }
  const handleGroupChange = (newGroupId) => {
    setSelectedGroupId(newGroupId)
    setSelectedSessionId('')
    setRawSessions([])
  }
  const executeSubmit = async (e) => {
    e.preventDefault()
    if (!selectedTeacherId) {
      showErrorToast(isRtl ? 'يرجى اختيار المعلم' : 'Please select a teacher')
      return
    }
    if (!selectedGroupId) {
      showErrorToast(isRtl ? 'يرجى اختيار المجموعة الدراسية' : 'Please select a study group')
      return
    }
    if (!selectedSession || !selectedSessionId) {
      showErrorToast(isRtl ? 'يرجى اختيار الحصة الدراسية المكتملة' : 'Please select a completed session')
      return
    }
    if (!notes.trim()) {
      showErrorToast(isRtl ? 'يرجى كتابة ملاحظات التقييم' : 'Please provide evaluation notes')
      return
    }
    setIsSubmitting(true)
    try {
      const teacherName = typeof selectedTeacher?.name === 'object'
        ? (isRtl ? selectedTeacher.name.ar || selectedTeacher.name.en : selectedTeacher.name.en || selectedTeacher.name.ar)
        : (selectedTeacher?.displayName || selectedTeacher?.name || (isRtl ? 'معلم' : 'Teacher'))
      const groupName = typeof selectedGroup?.name === 'object'
        ? (isRtl ? selectedGroup.name.ar || selectedGroup.name.en : selectedGroup.name.en || selectedGroup.name.ar)
        : (selectedGroup?.name || selectedGroup?.title || (isRtl ? 'مجموعة دراسية' : 'Study Group'))
      const sessionTitle = selectedSession?.title || (selectedSession?.sessionNumber ? `${isRtl ? 'حصة رقم' : 'Session #'} ${selectedSession.sessionNumber}` : (isRtl ? 'حصة دراسية' : 'Session'))
      const payload = {
        teacher: selectedTeacherId,
        teacherId: selectedTeacherId,
        sessionId: selectedSessionId,
        session: selectedSessionId,
        grade: selectedRating,
        rating: selectedRating,
        notes: notes.trim(),
        teacherData: {
          id: selectedTeacherId,
          name: teacherName,
          image: selectedTeacher?.image ? getImageUrl(selectedTeacher.image) : null,
          specialty: selectedTeacher?.specialization || selectedTeacher?.subject || '',
        },
        group: selectedGroupId,
        groupData: {
          id: selectedGroupId,
          name: groupName,
        },
        sessionData: {
          id: selectedSessionId,
          title: sessionTitle,
          sessionNumber: selectedSession?.sessionNumber,
        },
      }
      const res = await adminTeacherEvaluationsApi.createAdminEvaluation(payload)
      if (res.success) {
        showSuccessToast(isRtl ? 'تم إضافة تقييم المعلم بنجاح' : 'Teacher evaluation added successfully')
        if (onCreated) onCreated(res.data)
        onClose()
      } else {
        showErrorToast(res.message || (isRtl ? 'فشل حفظ التقييم' : 'Failed to save evaluation'))
      }
    } catch (err) {
      showErrorToast(err.message || (isRtl ? 'حدث خطأ أثناء حفظ التقييم' : 'Error saving evaluation'))
    } finally {
      setIsSubmitting(false)
    }
  }
  if (!isOpen || typeof document === 'undefined') return null
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <div className="flex items-center gap-2.5 text-start">
            <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-[#0f7a6c]/20 dark:text-[#14a693] flex items-center justify-center">
              <Star size={20} className="fill-current" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                {isRtl ? 'إضافة تقييم جديد للمعلم' : 'New Teacher Evaluation'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isRtl ? 'تقييم رسمي من الإدارة لأداء المعلم بالحصة' : 'Official admin evaluation for class performance'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        <form onSubmit={executeSubmit} className="flex-1 overflow-y-auto p-6 space-y-5 text-start">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? '1. اختيار المعلم المراد تقييمه' : '1. Select Teacher'} *
            </label>
            <div className="relative">
              <select
                value={selectedTeacherId}
                onChange={(e) => handleTeacherChange(e.target.value)}
                disabled={isLoadingTeachers}
                required
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0f7a6c] focus:outline-hidden transition-all"
              >
                <option value="">{isRtl ? '-- اختر المعلم --' : '-- Select Teacher --'}</option>
                {teachers.map((t) => {
                  const tid = t.id || t._id || t.teacher_id || t.teacherId || t.user_id
                  const tname = typeof t.name === 'object'
                    ? (isRtl ? t.name.ar || t.name.en : t.name.en || t.name.ar)
                    : (t.displayName || t.name || (isRtl ? 'معلم' : 'Teacher'))
                  return (
                    <option key={tid} value={tid}>
                      {tname} {t.specialization ? `(${t.specialization})` : ''}
                    </option>
                  )
                })}
              </select>
              {isLoadingTeachers && (
                <div className="absolute inset-y-0 end-3 flex items-center">
                  <Spinner size="sm" />
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {isRtl ? '2. اختيار المجموعة الدراسية النشطة' : '2. Select Active Study Group'} *
              </label>
              <div className="relative">
                <select
                  value={selectedGroupId}
                  onChange={(e) => handleGroupChange(e.target.value)}
                  disabled={!selectedTeacherId || isLoadingGroups}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0f7a6c] focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <option value="">
                    {!selectedTeacherId
                      ? (isRtl ? '-- اختر المعلم أولاً --' : '-- Choose Teacher First --')
                      : isLoadingGroups
                        ? (isRtl ? 'جاري تحميل المجموعات النشطة...' : 'Loading active groups...')
                        : activeGroups.length === 0
                          ? (isRtl ? 'لا توجد مجموعات نشطة لهذا المعلم' : 'No active groups for this teacher')
                          : (isRtl ? '-- اختر المجموعة النشطة --' : '-- Select Active Group --')}
                  </option>
                  {activeGroups.map((g) => {
                    const gid = g.id || g._id
                    const gname = typeof g.name === 'object'
                      ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
                      : (g.name || g.title || (isRtl ? 'مجموعة نشطة' : 'Active Group'))
                    return (
                      <option key={gid} value={gid}>
                        {gname}
                      </option>
                    )
                  })}
                </select>
                {isLoadingGroups && (
                  <div className="absolute inset-y-0 end-3 flex items-center">
                    <Spinner size="sm" />
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {isRtl ? '3. اختيار الحصة الدراسية المكتملة' : '3. Select Completed Session'} *
                </label>
                {selectedGroupId && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                    <CheckCircle2 size={11} className="text-emerald-600 dark:text-emerald-400" />
                    <span>{isRtl ? 'الحصص المكتملة' : 'Completed Sessions'} ({completedSessions.length})</span>
                  </span>
                )}
              </div>
              <div className="relative">
                <select
                  value={selectedSession ? selectedSessionId : ''}
                  onChange={(e) => setSelectedSessionId(e.target.value)}
                  disabled={!selectedGroupId || isLoadingSessions}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0f7a6c] focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <option value="">
                    {!selectedGroupId
                      ? (isRtl ? '-- اختر المجموعة أولاً --' : '-- Choose Group First --')
                      : isLoadingSessions
                        ? (isRtl ? 'جاري تحميل الحصص المكتملة...' : 'Loading completed sessions...')
                        : completedSessions.length === 0
                          ? (isRtl ? 'لا توجد حصص مكتملة لهذه المجموعة' : 'No completed sessions for this group')
                          : (isRtl ? '-- اختر الحصة المراد تقييمها --' : '-- Select Session to Evaluate --')}
                  </option>
                  {completedSessions.map((session) => {
                    const sid = session.id || session._id
                    const stitle = session.title || (session.sessionNumber ? `${isRtl ? 'حصة #' : 'Session #'}${session.sessionNumber}` : (isRtl ? 'حصة دراسية' : 'Session'))
                    const sdate = session.date ? ` - ${session.date}` : ''
                    const stime = session.time ? ` (${session.time})` : (session.startTime ? ` (${session.startTime})` : '')
                    return (
                      <option key={sid} value={sid}>
                        [{isRtl ? 'مكتملة' : 'Completed'}] {stitle}{sdate}{stime}
                      </option>
                    )
                  })}
                </select>
                {isLoadingSessions && (
                  <div className="absolute inset-y-0 end-3 flex items-center">
                    <Spinner size="sm" />
                  </div>
                )}
              </div>
              {selectedSession && (
                <div className="text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                  <span>{isRtl ? 'حصة مكتملة - جاهزة لتقييم أداء المعلم' : 'Completed session - ready for teacher evaluation'}</span>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? '4. مستوى تقييم أداء المعلم' : '4. Teacher Performance Level'} *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {RATING_OPTIONS.map((opt) => {
                const isSelected = selectedRating === opt.key
                const IconComponent = opt.icon
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedRating(opt.key)}
                    className={`flex items-center gap-2 p-3 rounded-2xl border text-xs transition-all cursor-pointer ${
                      opt.colorClass
                    } ${isSelected ? opt.activeClass : 'opacity-85 hover:opacity-100'}`}
                  >
                    <IconComponent size={16} className="shrink-0" />
                    <span className="font-bold">{isRtl ? opt.labelAr : opt.labelEn}</span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? '5. ملاحظات وتوجيهات الإدارة للمعلم' : '5. Administration Notes & Directives'} *
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
              rows={4}
              placeholder={
                isRtl
                  ? 'اكتب ملاحظات مفصلة عن تحضير المعلم، طريقة الشرح، التفاعل الصفي، وإدارة الوقت...'
                  : 'Write comprehensive notes on preparation, explanation quality, student engagement, and time management...'
              }
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0f7a6c] focus:outline-hidden transition-all resize-none"
            />
          </div>
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0f7a6c] hover:bg-[#14a693] shadow-md shadow-[#0f7a6c]/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? <Spinner size="sm" /> : <Star size={16} className="fill-current" />}
              <span>{isRtl ? 'حفظ التقييم' : 'Save Evaluation'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}
