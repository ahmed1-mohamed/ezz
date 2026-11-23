import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Clock, Calendar, AlertCircle, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import {
  formatDateInputInTimeZone,
  formatClockInputInTimeZone,
} from '@/shared/services/api/adminSessionsApi'

function calculateEndTime(startTimeStr, durationMinutes = 90) {
  if (!startTimeStr) return '18:30'
  const parts = startTimeStr.split(':').map(Number)
  if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return '18:30'
  const totalMins = parts[0] * 60 + parts[1] + (Number(durationMinutes) || 90)
  const endHours = Math.floor(totalMins / 60) % 24
  const endMins = totalMins % 60
  return `${String(endHours).padStart(2, '0')}:${String(endMins).padStart(2, '0')}`
}

function RescheduleForm({ session, onConfirm, onCancel, timeZone, timeZonePlace }) {
  const { t } = useTranslation()
  const getInitialValues = () => {
    const initialStart = formatClockInputInTimeZone(session.startTime, timeZone) || '17:00'
    return {
      date: formatDateInputInTimeZone(session.startTime, timeZone) || session.date || new Date().toISOString().slice(0, 10),
      startTime: initialStart,
      endTime: formatClockInputInTimeZone(session.endTime, timeZone) || calculateEndTime(initialStart, session.durationMinutes || 90),
    }
  }
  const initialValues = getInitialValues()
  const [date, setDate] = useState(initialValues.date)
  const [startTime, setStartTime] = useState(initialValues.startTime)
  const [endTime, setEndTime] = useState(initialValues.endTime)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const handleStartTimeChange = (newStart) => {
    setStartTime(newStart)
    setError('')
    if (newStart) {
      setEndTime(calculateEndTime(newStart, session.durationMinutes || 90))
    }
  }
  const handleSubmit = async (e) => {
    e?.preventDefault?.()
    if (!date) {
      const msg = t('adminDashboard.sessions.errors.dateRequired', 'يرجى اختيار التاريخ')
      setError(msg)
      toast.error(msg)
      return
    }
    if (!startTime) {
      const msg = t('adminDashboard.sessions.errors.startTimeRequired', 'يرجى اختيار وقت البداية')
      setError(msg)
      toast.error(msg)
      return
    }
    if (!endTime) {
      const msg = t('adminDashboard.sessions.errors.endTimeRequired', 'يرجى اختيار وقت النهاية')
      setError(msg)
      toast.error(msg)
      return
    }
    setError('')
    setIsSubmitting(true)
    try {
      await onConfirm({
        date,
        startTime,
        endTime,
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  const groupDisplayName =
    session.groupName ||
    (typeof session.group === 'object' ? session.group?.name : session.group) ||
    session.title ||
    t('adminDashboard.sessions.groupFallback')
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f3f7f6] dark:bg-slate-900/60 rounded-2xl p-4 sm:p-5 space-y-4 border border-brand-100 dark:border-brand-900/30 mt-2 mx-2 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-brand-500" />
          <span>
            {t('adminDashboard.sessions.rescheduleTitle', {
              defaultValue: `Reschedule: {{name}}`,
              name: groupDisplayName,
            })}
          </span>
        </p>
        {session.durationMinutes > 0 && (
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {t('adminDashboard.sessions.durationValue', { minutes: session.durationMinutes })}
          </span>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 rounded-xl text-xs text-red-600 dark:text-red-400 font-bold shadow-xs">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {t('adminDashboard.sessions.inputTimeZone', 'مواعيد الإدخال بتوقيت {{place}}', { place: timeZonePlace || timeZone })}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-300 text-start flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{t('adminDashboard.sessions.chooseNewDate', 'التاريخ')}</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
              setError('')
            }}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all font-medium"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-300 text-start flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{t('adminDashboard.sessions.startTime', 'وقت البداية')}</span>
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => handleStartTimeChange(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all font-medium"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-300 text-start flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{t('adminDashboard.sessions.endTime', 'وقت النهاية')}</span>
          </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value)
              setError('')
            }}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all font-medium"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 disabled:opacity-60 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t('adminDashboard.sessions.saving', 'جاري الحفظ...')}</span>
            </>
          ) : (
            <span>{t('adminDashboard.sessions.confirmReschedule', 'تأكيد الجدولة')}</span>
          )}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          {t('adminDashboard.sessions.cancel', 'إلغاء')}
        </button>
      </div>
    </form>
  )
}

export default function ReschedulePanel({ timeZoneResolved, ...props }) {
  const { t } = useTranslation()
  if (!timeZoneResolved) {
    return (
      <div className="flex items-center gap-2 px-6 py-5 text-sm text-slate-500 dark:text-slate-400">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>{t('adminDashboard.sessions.loadingTimeZone', 'جاري تحديد توقيت الأدمن...')}</span>
      </div>
    )
  }
  return <RescheduleForm {...props} />
}
