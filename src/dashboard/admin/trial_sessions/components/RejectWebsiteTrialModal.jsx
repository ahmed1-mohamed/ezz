import { useState } from 'react'
import { createPortal } from 'react-dom'
import { X, AlertTriangle, Loader2, Ban } from 'lucide-react'
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

export default function RejectWebsiteTrialModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onSuccess,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  if (!isOpen || !trialSession || typeof document === 'undefined') return null
  const trialId = trialSession.id || trialSession._id
  const applicantName = trialSession.name || trialSession.studentName || '-'
  const applicantCurriculum = resolveText(
    trialSession.curriculum?.name || trialSession.curriculumName || trialSession.curriculum,
    isRtl
  )
  const handleConfirmReject = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')
    try {
      await adminTrialSessionsApi.updateWebsiteTrialSession(trialId, {
        status: 'rejected',
      })
      toast.success(isRtl ? 'تم رفض طلب الحصة التجريبية بنجاح' : 'Trial session request rejected')
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || (isRtl ? 'فشل رفض الطلب' : 'Failed to reject request')
      const formatted = Array.isArray(msg) ? msg.join(', ') : msg
      setErrorMsg(formatted)
      toast.error(formatted)
    } finally {
      setIsSubmitting(false)
    }
  }
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose()
      }}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scale-up text-start"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-rose-50/60 dark:bg-rose-950/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {isRtl ? 'رفض طلب الحصة التجريبية' : 'Reject Trial Session'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isRtl ? 'تأكيد رفض طلب الحصة الوارد من الموقع' : 'Confirm rejection for this request'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleConfirmReject} className="p-5 space-y-4">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-800 dark:text-white">
              {applicantName}
            </div>
            {applicantCurriculum && (
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {isRtl ? 'المنهج: ' : 'Curriculum: '} {applicantCurriculum}
              </div>
            )}
          </div>
          <div className="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-xs text-rose-800 dark:text-rose-300 flex items-start gap-2.5">
            <Ban className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <p className="font-medium leading-relaxed">
              {isRtl
                ? 'هل أنت متأكد من رغبتك في رفض طلب الحصة التجريبية هذا؟ سيتم تحديث حالة الطلب إلى «مرفوض».'
                : 'Are you sure you want to reject this trial session request? The status will be updated to "Rejected".'}
            </p>
          </div>
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold">
              {errorMsg}
            </div>
          )}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-40"
            >
              {isRtl ? 'تراجع' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isRtl ? 'جاري الرفض...' : 'Rejecting...'}</span>
                </>
              ) : (
                <>
                  <Ban className="w-4 h-4" />
                  <span>{isRtl ? 'تأكيد الرفض' : 'Confirm Rejection'}</span>
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
