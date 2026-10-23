import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Clock, Calendar, AlertCircle, Loader2 } from 'lucide-react'

function parseDateForInput(val) {
  if (!val) return new Date().toISOString().split('T')[0]
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) return val
  const d = new Date(val)
  if (!isNaN(d.getTime())) {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${day}`
  }
  return new Date().toISOString().split('T')[0]
}

function parseTimeForInput(val, fallback = '17:00') {
  if (!val) return fallback
  if (typeof val === 'string' && val.includes('T')) {
    const d = new Date(val)
    if (!isNaN(d.getTime())) {
      const h = String(d.getHours()).padStart(2, '0')
      const m = String(d.getMinutes()).padStart(2, '0')
      return `${h}:${m}`
    }
  }
  const match = String(val).match(/(\d{2}:\d{2})/)
  if (match) return match[1]
  return fallback
}

function calculateEndTime(startTimeStr, durationMinutes = 90) {
  if (!startTimeStr) return '18:30'
  const parts = startTimeStr.split(':').map(Number)
  if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return '18:30'
  const totalMins = parts[0] * 60 + parts[1] + (Number(durationMinutes) || 90)
  const endHours = Math.floor(totalMins / 60) % 24
  const endMins = totalMins % 60
  return `${String(endHours).padStart(2, '0')}:${String(endMins).padStart(2, '0')}`
}

export default function ReschedulePanel({ session, onConfirm, onCancel }) {
  const { t } = useTranslation()

  const initialDate = parseDateForInput(session.date || session.startTime)
  const initialStart = parseTimeForInput(session.startTime, '17:00')
  const initialEnd = parseTimeForInput(
    session.endTime,
    calculateEndTime(initialStart, session.durationMinutes || 90)
  )

  const [date, setDate] = useState(initialDate)
  const [startTime, setStartTime] = useState(initialStart)
  const [endTime, setEndTime] = useState(initialEnd)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleStartTimeChange = (newStart) => {
    setStartTime(newStart)
    setError('')
    // Automatically suggest end time based on session duration
    if (newStart) {
      setEndTime(calculateEndTime(newStart, session.durationMinutes || 90))
    }
  }

  const handleSubmit = async (e) => {
    e?.preventDefault?.()
    if (!date) {
      setError(t('adminDashboard.sessions.errors.dateRequired', 'يرجى اختيار التاريخ'))
      return
    }
    if (!startTime) {
      setError(t('adminDashboard.sessions.errors.startTimeRequired', 'يرجى اختيار وقت البداية'))
      return
    }
    if (!endTime) {
      setError(t('adminDashboard.sessions.errors.endTimeRequired', 'يرجى اختيار وقت النهاية'))
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
    'المجموعة'

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
              defaultValue: `إعادة جدولة: {{name}}`,
              name: groupDisplayName,
            })}
          </span>
        </p>
        {session.durationMinutes > 0 && (
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            (المدة: {session.durationMinutes} دقيقة)
          </span>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 p-2.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-xl text-xs text-red-600 dark:text-red-400 font-semibold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* 1. Date */}
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

        {/* 2. Start Time */}
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

        {/* 3. End Time */}
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
