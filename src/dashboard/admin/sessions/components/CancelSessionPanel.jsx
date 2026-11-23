import { useState } from 'react'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const CANCELLATION_REASONS = [
  'teacher_emergency',
  'technical_difficulties',
  'official_holiday',
  'student_request',
  'administrative',
  'other',
]

export default function CancelSessionPanel({ onConfirm, onCancel }) {
  const { t } = useTranslation()
  const [reason, setReason] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!reason || isSubmitting) return
    setIsSubmitting(true)
    try {
      await onConfirm(reason, notes.trim())
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-red-50/70 dark:bg-red-950/20 rounded-2xl p-4 sm:p-5 space-y-4 border border-red-200 dark:border-red-900/50 mt-2 mx-2"
    >
      <div className="flex items-center gap-2 text-start text-sm font-bold text-red-700 dark:text-red-300">
        <AlertTriangle size={16} />
        <span>{t('adminDashboard.sessions.cancelSessionTitle')}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5 text-start text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>{t('adminDashboard.sessions.cancellationReason')} <span className="text-red-500">*</span></span>
          <select
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            required
            disabled={isSubmitting}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400"
          >
            <option value="">{t('adminDashboard.sessions.selectCancellationReason')}</option>
            {CANCELLATION_REASONS.map((item) => (
              <option key={item} value={item}>
                {t(`adminDashboard.sessions.cancellationReasons.${item}`)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-start text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>{t('adminDashboard.sessions.cancellationNotes')}</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            maxLength={500}
            rows={2}
            disabled={isSubmitting}
            placeholder={t('adminDashboard.sessions.cancellationNotesPlaceholder')}
            className="w-full resize-y bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400"
          />
        </label>
      </div>
      <div className="flex items-center gap-3 justify-start">
        <button
          type="submit"
          disabled={!reason || isSubmitting}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
        >
          {isSubmitting && <Loader2 size={15} className="animate-spin" />}
          {t('adminDashboard.sessions.confirmCancellation')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium"
        >
          {t('adminDashboard.sessions.cancel')}
        </button>
      </div>
    </form>
  )
}
