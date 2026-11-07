import { useState } from 'react'
import { createPortal } from 'react-dom'
import { X, AlertTriangle, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { adminTrialSessionsApi } from '@/shared/services/api/adminTrialSessionsApi'

function resolveText(val, isRtl = true) {
  if (!val) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'object') {
    return (isRtl ? (val.ar || val.en) : (val.en || val.ar)) || val.name || ''
  }
  return String(val)
}

export default function CancelTrialSessionModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onSuccess,
}) {
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  if (!isOpen || !trialSession || typeof document === 'undefined') return null
  const trialId = trialSession.id || trialSession._id
  const studentName = trialSession.studentName || trialSession.student?.name || (isRtl ? 'الطالب' : 'Student')
  const curriculumName = resolveText(trialSession.curriculum?.name || trialSession.curriculumName, isRtl)
  const handleConfirmCancel = async () => {
    setIsSubmitting(true)
    try {
      await adminTrialSessionsApi.cancelTrialSession(trialId, {
        reason: reason.trim() || undefined,
      })
      toast.success(isRtl ? 'تم إلغاء/رفض طلب الحصة التجريبية بنجاح' : 'Trial session cancelled successfully')
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message
      toast.error(typeof msg === 'string' ? msg : (isRtl ? 'فشل إلغاء الحصة التجريبية' : 'Failed to cancel trial session'))
    } finally {
      setIsSubmitting(false)
    }
  }
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-gray-100 dark:border-dark-border overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-dark-border bg-rose-50/50 dark:bg-rose-950/20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {isRtl ? 'إلغاء / رفض الحصة التجريبية' : 'Cancel Trial Session'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-dark-muted">
                {isRtl ? 'تأكيد رفض هذا الطلب' : 'Confirm cancellation for this request'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div className="p-3.5 bg-gray-50 dark:bg-dark-bg/60 rounded-xl border border-gray-100 dark:border-dark-border space-y-1.5">
            <div className="text-sm font-semibold text-gray-800 dark:text-white">
              {studentName}
            </div>
            {curriculumName && (
              <div className="text-xs text-gray-500 dark:text-dark-muted">
                {isRtl ? 'المنهج: ' : 'Curriculum: '} {curriculumName}
              </div>
            )}
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
              {isRtl ? 'سبب الإلغاء أو الملاحظات (اختياري)' : 'Cancellation Reason (Optional)'}
            </label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={isRtl ? 'اكتب سبب الإلغاء ليظهر في السجل...' : 'Enter reason for cancellation...'}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-dark-muted leading-relaxed">
            {isRtl
              ? 'هل أنت متأكد من رغبتك في إلغاء طلب الحصة التجريبية؟ ستتغير حالة الطلب إلى ملغي.'
              : 'Are you sure you want to cancel this trial session request? The status will be set to cancelled.'}
          </p>
        </div>
        <div className="flex items-center justify-end gap-2.5 p-4 bg-gray-50/50 dark:bg-dark-bg/30 border-t border-gray-100 dark:border-dark-border">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
          >
            {isRtl ? 'تراجع' : 'Back'}
          </button>
          <button
            type="button"
            onClick={handleConfirmCancel}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl text-white bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{isRtl ? 'جاري الإلغاء...' : 'Cancelling...'}</span>
              </>
            ) : (
              <span>{isRtl ? 'تأكيد الإلغاء' : 'Confirm Cancel'}</span>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
