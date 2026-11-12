import { useState } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  CheckCircle2,
  Check,
  Loader2,
  BookOpen,
  Calendar,
} from 'lucide-react'
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

export default function AcceptWebsiteTrialModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onSuccess,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  if (!isOpen || !trialSession || typeof document === 'undefined') return null
  const trialId = trialSession?.id || trialSession?._id
  const applicantName = trialSession?.name || trialSession?.studentName || '-'
  const applicantAge = trialSession?.studentAge || trialSession?.age
  const applicantCurriculum = resolveText(
    trialSession?.curriculum?.name || trialSession?.curriculumName || trialSession?.curriculum,
    isRtl
  )
  const applicantEmail = trialSession?.email || '-'
  const applicantPhone = trialSession?.phone || '-'
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')
    try {
      await adminTrialSessionsApi.updateWebsiteTrialSession(trialId, {
        status: 'accepted',
      })
      toast.success(isRtl ? 'تم قبول طلب الحصة التجريبية بنجاح' : 'Trial session request accepted successfully')
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || (isRtl ? 'فشل قبول الطلب' : 'Failed to accept request')
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
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-emerald-50/60 dark:bg-emerald-950/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {isRtl ? 'قبول طلب الحصة التجريبية' : 'Accept Trial Session'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isRtl ? 'تأكيد قبول طلب الحصة الوارد من الموقع' : 'Confirm accepting this website request'}
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
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-sm text-slate-800 dark:text-white">
                {applicantName}
              </span>
              {applicantAge && (
                <span className="text-slate-400 font-bold">
                  {applicantAge} {isRtl ? 'سنوات' : 'yrs'}
                </span>
              )}
            </div>
            {applicantCurriculum && (
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-bold">
                <BookOpen size={14} className="text-[#005953] dark:text-emerald-400" />
                <span>{applicantCurriculum}</span>
              </div>
            )}
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 grid grid-cols-2 gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              {applicantPhone && applicantPhone !== '-' && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'الهاتف:' : 'Phone:'}</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300" dir="ltr">{applicantPhone}</span>
                </div>
              )}
              {applicantEmail && applicantEmail !== '-' && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'البريد:' : 'Email:'}</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300 truncate block">{applicantEmail}</span>
                </div>
              )}
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <p className="font-medium leading-relaxed">
              {isRtl
                ? 'هل أنت متأكد من رغبتك في قبول طلب الحصة التجريبية؟ سيتم تحديث حالة الطلب إلى «مقبول» مباشرة.'
                : 'Are you sure you want to accept this trial session request? The status will be updated to "Accepted".'}
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
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isRtl ? 'جاري القبول...' : 'Accepting...'}</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>{isRtl ? 'تأكيد القبول' : 'Confirm Accept'}</span>
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
