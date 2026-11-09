import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import {
  X,
  CalendarPlus,
  Users,
  GraduationCap,
  Calendar,
  Clock,
  Check,
  AlertCircle,
  Search,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import { getApiErrorText } from '@/shared/utils/errorHandler'
import Spinner from '@/shared/components/Spinner'

const SESSION_TYPES = [
  {
    key: 'extra',
    labelAr: 'إضافية',
    labelEn: 'Extra',
    descAr: 'حصة إضافية لشرح مواضيع أو مراجعة',
    descEn: 'Extra session for review or extra topics',
    color: 'emerald',
  },
  {
    key: 'makeup',
    labelAr: 'تعويضية',
    labelEn: 'Makeup',
    descAr: 'حصة تعويضية عن حصة سابقة ملغاة',
    descEn: 'Makeup session for a previously cancelled session',
    color: 'amber',
  },
  {
    key: 'regular',
    labelAr: 'عادية',
    labelEn: 'Regular',
    descAr: 'حصة دراسية اعتيادية ضمن الجدول',
    descEn: 'Standard academic session within curriculum',
    color: 'blue',
  },
  {
    key: 'trial',
    labelAr: 'تجريبية',
    labelEn: 'Trial',
    descAr: 'حصة تجريبية لتقييم أو تجربة طالب',
    descEn: 'Trial session for assessment or new students',
    color: 'purple',
  },
]

function getLocalizedValue(val, isRtl) {
  if (!val) return ''
  if (typeof val === 'string') return val
  if (typeof val === 'object') {
    return (isRtl ? val.ar || val.en : val.en || val.ar) || ''
  }
  return String(val)
}

function calculateDurationMinutes(start, end) {
  if (!start || !end) return 0
  const [startH, startM] = start.split(':').map(Number)
  const [endH, endM] = end.split(':').map(Number)
  if (Number.isNaN(startH) || Number.isNaN(startM) || Number.isNaN(endH) || Number.isNaN(endM)) return 0
  const startTotal = startH * 60 + startM
  const endTotal = endH * 60 + endM
  return endTotal > startTotal ? endTotal - startTotal : 0
}

function getDayLabel(dateStr, isRtl) {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    if (Number.isNaN(d.getTime())) return ''
    return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', { weekday: 'long' })
  } catch {
    return ''
  }
}

export default function CreateSessionModal({
  isOpen,
  onClose,
  onSuccess,
  preselectedGroup = null,
  isRtl: customIsRtl,
}) {
  const { t, i18n } = useTranslation()
  const isRtl = customIsRtl !== undefined ? customIsRtl : i18n.language.startsWith('ar')
  const [activeGroups, setActiveGroups] = useState([])
  const [isLoadingGroups, setIsLoadingGroups] = useState(false)
  const [groupSearch, setGroupSearch] = useState('')
  const [selectedGroupId, setSelectedGroupId] = useState(
    preselectedGroup?.id || preselectedGroup?._id || ''
  )
  const [sessionType, setSessionType] = useState('extra')
  const [isPaid, setIsPaid] = useState(false)
  const [titleAr, setTitleAr] = useState('')
  const [titleEn, setTitleEn] = useState('')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  useEffect(() => {
    if (!isOpen) return
    let isMounted = true
    adminGroupsApi
      .fetchLocalizedActiveGroups({ limit: 100 })
      .then((res) => {
        if (!isMounted) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setActiveGroups(Array.isArray(list) ? list : [])
      })
      .catch((err) => {
        console.warn('Failed to load active groups for session modal:', err)
      })
      .finally(() => {
        if (isMounted) setIsLoadingGroups(false)
      })
    return () => {
      isMounted = false
    }
  }, [isOpen])

  const handleClose = () => {
    if (!preselectedGroup) setSelectedGroupId('')
    setSessionType('extra')
    setIsPaid(false)
    setTitleAr('')
    setTitleEn('')
    setDate('')
    setStartTime('')
    setEndTime('')
    setFormErrors({})
    setIsSubmitting(false)
    setGroupSearch('')
    onClose()
  }
  const filteredGroups = useMemo(() => {
    const q = groupSearch.trim().toLowerCase()
    if (!q) return activeGroups
    return activeGroups.filter((g) => {
      const name = getLocalizedValue(g.name, isRtl).toLowerCase()
      const teacherName = getLocalizedValue(g.teacher?.name || g.teacher?.displayName, isRtl).toLowerCase()
      return name.includes(q) || teacherName.includes(q)
    })
  }, [activeGroups, groupSearch, isRtl])
  const selectedGroup = useMemo(() => {
    if (!selectedGroupId) return preselectedGroup || null
    return (
      activeGroups.find(
        (g) => String(g.id || g._id) === String(selectedGroupId)
      ) || preselectedGroup || null
    )
  }, [selectedGroupId, activeGroups, preselectedGroup])
  const durationMinutes = useMemo(() => {
    return calculateDurationMinutes(startTime, endTime)
  }, [startTime, endTime])
  const dayName = useMemo(() => {
    return getDayLabel(date, isRtl)
  }, [date, isRtl])
  const validateForm = () => {
    const errors = {}
    if (!selectedGroupId) {
      errors.group = isRtl ? 'يرجى اختيار المجموعة الدراسية' : 'Please select a group'
    }
    if (!date) {
      errors.date = isRtl ? 'يرجى تحديد تاريخ الحصة' : 'Please select a date'
    }
    if (!startTime) {
      errors.startTime = isRtl ? 'يرجى تحديد وقت البدء' : 'Please specify start time'
    }
    if (!endTime) {
      errors.endTime = isRtl ? 'يرجى تحديد وقت الانتهاء' : 'Please specify end time'
    } else if (startTime && endTime && startTime >= endTime) {
      errors.endTime = isRtl
        ? 'وقت الانتهاء يجب أن يكون بعد وقت البدء'
        : 'End time must be after start time'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      const payload = {
        group: selectedGroupId,
        date,
        startTime,
        endTime,
        type: sessionType,
        title: {
          ar: titleAr.trim() || undefined,
          en: titleEn.trim() || undefined,
        },
      }
      if (sessionType === 'extra') {
        payload.isPaid = Boolean(isPaid)
      }
      const res = await adminSessionsApi.createExtraSession(payload)
      if (res && res.success) {
        showSuccessToast(
          res.message || (isRtl ? 'تم إنشاء الحصة الدراسية بنجاح' : 'Session created successfully'),
          isRtl
        )
        if (onSuccess) onSuccess(res.data)
        handleClose()
      } else {
        const errMsg = getApiErrorText(
          res?.error || res?.message,
          isRtl ? 'فشل إنشاء الحصة الدراسية' : 'Failed to create session'
        )
        showErrorToast(errMsg, isRtl)
      }
    } catch (err) {
      const errMsg = getApiErrorText(
        err,
        isRtl ? 'حدث خطأ أثناء إنشاء الحصة' : 'An error occurred while creating session'
      )
      showErrorToast(errMsg, isRtl)
    } finally {
      setIsSubmitting(false)
    }
  }
  if (!isOpen) return null
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen min-h-screen z-[999999] flex items-center justify-center p-3 sm:p-5"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#005953]/10 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <CalendarPlus size={22} />
            </div>
            <div className="text-start">
              <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.sessions.createModalTitle', 'إضافة حصة دراسية')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t(
                  'adminDashboard.sessions.createModalSubtitle',
                  'إنشاء حصة عادية أو تعويضية أو إضافية أو تجريبية لمجموعة نشطة'
                )}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1 text-start">
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Users size={15} className="text-[#005953] dark:text-emerald-400" />
                <span>{t('adminDashboard.sessions.selectGroup', 'المجموعة الدراسية (النشطة)')}</span>
                <span className="text-rose-500">*</span>
              </span>
            </label>
            {preselectedGroup ? (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#005953]/10 text-[#005953] dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                      {getLocalizedValue(preselectedGroup.name, isRtl)}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {preselectedGroup.curriculum?.name
                        ? getLocalizedValue(preselectedGroup.curriculum.name, isRtl)
                        : ''}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  {t('common.active', 'نشطة')}
                </span>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={groupSearch}
                    onChange={(e) => setGroupSearch(e.target.value)}
                    placeholder={t('adminDashboard.sessions.searchGroupPlaceholder', 'ابحث باسم المجموعة أو المعلم...')}
                    className="w-full bg-[#f8faf9] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl ps-10 pe-4 py-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all"
                  />
                </div>
                <div className="max-h-40 overflow-y-auto space-y-1.5 p-1 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30">
                  {isLoadingGroups ? (
                    <div className="py-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                      <Spinner size="sm" />
                      <span>{t('common.loading', 'جاري جلب المجموعات النشطة...')}</span>
                    </div>
                  ) : filteredGroups.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-400">
                      {t('adminDashboard.sessions.noActiveGroupsFound', 'لا توجد مجموعات نشطة مطابقة')}
                    </div>
                  ) : (
                    filteredGroups.map((grp) => {
                      const gId = String(grp.id || grp._id)
                      const isSelected = String(selectedGroupId) === gId
                      return (
                        <button
                          key={gId}
                          type="button"
                          onClick={() => {
                            setSelectedGroupId(gId)
                            setFormErrors((prev) => ({ ...prev, group: undefined }))
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl text-start transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#005953] text-white shadow-xs'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                                isSelected
                                  ? 'bg-white/20 text-white'
                                  : 'bg-[#005953]/10 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400'
                              }`}
                            >
                              <Users size={14} />
                            </div>
                            <div className="truncate">
                              <p className="text-xs sm:text-sm font-bold truncate">
                                {getLocalizedValue(grp.name, isRtl)}
                              </p>
                              <p
                                className={`text-[11px] truncate ${
                                  isSelected ? 'text-white/80' : 'text-slate-400'
                                }`}
                              >
                                {grp.teacher?.name
                                  ? getLocalizedValue(grp.teacher.name, isRtl)
                                  : grp.teacher?.displayName || ''}
                              </p>
                            </div>
                          </div>
                          {isSelected && <Check size={16} className="text-white shrink-0" />}
                        </button>
                      )
                    })
                  )}
                </div>
              </div>
            )}
            {formErrors.group && (
              <p className="text-xs text-red-500 font-bold px-1 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>{formErrors.group}</span>
              </p>
            )}
          </div>
          {selectedGroup && (
            <div className="p-4 rounded-2xl bg-[#005953]/5 dark:bg-emerald-950/20 border border-[#005953]/15 dark:border-emerald-800/30 space-y-2.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">
                      {t('adminDashboard.groups.teacher', 'معلم المجموعة (يُربط تلقائياً)')}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-white">
                      {getLocalizedValue(selectedGroup.teacher?.name, isRtl) ||
                        selectedGroup.teacher?.displayName ||
                        (isRtl ? 'غير محدد' : 'Not assigned')}
                    </span>
                  </div>
                </div>
                {selectedGroup.curriculum && (
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <BookOpen size={13} className="text-[#005953] dark:text-emerald-400" />
                    <span>{getLocalizedValue(selectedGroup.curriculum.name, isRtl)}</span>
                  </div>
                )}
              </div>
              {selectedGroup.weeklySchedule && selectedGroup.weeklySchedule.length > 0 && (
                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-slate-400 font-semibold me-1">
                    {t('adminDashboard.groups.schedule', 'المواعيد المعتادة:')}
                  </span>
                  {selectedGroup.weeklySchedule.map((slot, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                    >
                      {slot.day} ({slot.startTime} - {slot.endTime})
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sparkles size={15} className="text-[#005953] dark:text-emerald-400" />
                <span>{t('adminDashboard.sessions.sessionType', 'نوع الحصة')}</span>
                <span className="text-rose-500">*</span>
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SESSION_TYPES.map((tItem) => {
                const isSelected = sessionType === tItem.key
                return (
                  <button
                    key={tItem.key}
                    type="button"
                    onClick={() => setSessionType(tItem.key)}
                    className={`p-3 rounded-2xl text-center border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'border-[#005953] bg-[#005953] text-white shadow-md'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-black">
                      {isRtl ? tItem.labelAr : tItem.labelEn}
                    </span>
                    <span
                      className={`text-[10px] leading-tight ${
                        isSelected ? 'text-white/80' : 'text-slate-400'
                      }`}
                    >
                      {isRtl ? tItem.descAr : tItem.descEn}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          {sessionType === 'extra' && (
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                    {t('adminDashboard.sessions.isPaidQuestion', 'هل الحصة مدفوعة أم مجانية؟')}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {isPaid
                      ? t(
                          'adminDashboard.sessions.paidDesc',
                          'حصة إضافية مدفوعة — سيتم خصمها من رصيد حصص الطلاب المشتركين'
                        )
                      : t(
                          'adminDashboard.sessions.freeDesc',
                          'حصة إضافية مجانية — لن يتم خصم أي رصيد من حصص الطلاب'
                        )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaid(false)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    !isPaid
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {isRtl ? 'مجانية (بدون خصم)' : 'Free (No Deduction)'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsPaid(true)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    isPaid
                      ? 'bg-amber-600 border-amber-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {isRtl ? 'مدفوعة (تخصم من الرصيد)' : 'Paid (Deduct Balance)'}
                </button>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
                {t('adminDashboard.sessions.titleArLabel', 'عنوان الحصة بالعربية (اختياري)')}
              </label>
              <input
                type="text"
                value={titleAr}
                onChange={(e) => setTitleAr(e.target.value)}
                placeholder={isRtl ? 'مثال: مراجعة نهائية على الوحدة الأولى' : 'e.g. Unit 1 Revision'}
                className="w-full bg-[#f8faf9] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
                {t('adminDashboard.sessions.titleEnLabel', 'عنوان الحصة بالإنجليزية (اختياري)')}
              </label>
              <input
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                placeholder="e.g. Final Revision on Unit 1"
                className="w-full bg-[#f8faf9] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5 sm:col-span-1">
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#005953] dark:text-emerald-400" />
                  <span>{t('adminDashboard.sessions.dateLabel', 'التاريخ')}</span>
                  <span className="text-rose-500">*</span>
                </span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value)
                  setFormErrors((prev) => ({ ...prev, date: undefined }))
                }}
                className={`w-full bg-[#f8faf9] dark:bg-slate-800/80 border rounded-2xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all cursor-pointer ${
                  formErrors.date ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
              />
              {dayName && (
                <span className="text-[11px] font-bold text-[#005953] dark:text-emerald-400 px-1 block">
                  {dayName}
                </span>
              )}
              {formErrors.date && (
                <p className="text-[11px] text-red-500 font-bold px-1">{formErrors.date}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#005953] dark:text-emerald-400" />
                  <span>{t('adminDashboard.sessions.startTimeLabel', 'وقت البدء')}</span>
                  <span className="text-rose-500">*</span>
                </span>
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value)
                  setFormErrors((prev) => ({ ...prev, startTime: undefined, endTime: undefined }))
                }}
                className={`w-full bg-[#f8faf9] dark:bg-slate-800/80 border rounded-2xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all cursor-pointer ${
                  formErrors.startTime ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
              />
              {formErrors.startTime && (
                <p className="text-[11px] text-red-500 font-bold px-1">{formErrors.startTime}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#005953] dark:text-emerald-400" />
                  <span>{t('adminDashboard.sessions.endTimeLabel', 'وقت الانتهاء')}</span>
                  <span className="text-rose-500">*</span>
                </span>
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => {
                  setEndTime(e.target.value)
                  setFormErrors((prev) => ({ ...prev, endTime: undefined }))
                }}
                className={`w-full bg-[#f8faf9] dark:bg-slate-800/80 border rounded-2xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all cursor-pointer ${
                  formErrors.endTime ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
              />
              {durationMinutes > 0 && (
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-1 block">
                  {t('adminDashboard.sessions.durationMinutes', 'المدة: {{minutes}} دقيقة', {
                    minutes: durationMinutes,
                  })}
                </span>
              )}
              {formErrors.endTime && (
                <p className="text-[11px] text-red-500 font-bold px-1">{formErrors.endTime}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              {t('common.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#005953] hover:bg-[#004742] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#005953]/20 transition-all disabled:opacity-50 cursor-pointer min-w-[130px]"
            >
              {isSubmitting ? (
                <>
                  <Spinner size="sm" />
                  <span>{t('common.saving', 'جاري الإنشاء...')}</span>
                </>
              ) : (
                <>
                  <CalendarPlus size={16} />
                  <span>{t('adminDashboard.sessions.confirmCreate', 'إنشاء الحصة')}</span>
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
