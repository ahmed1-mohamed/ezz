import { useState } from 'react'
import { X, Plus, Loader2 } from 'lucide-react'
import { createPortal } from 'react-dom'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import { MAX_SESSIONS_PER_OPERATION, MAX_MANUAL_SESSIONS_PER_MONTH, getRemainingSessions, getMonthlyManualRemaining } from '../utils/studentUtils'

export default function AddSessionsModal({
  isOpen,
  onClose,
  student,
  isRtl,
  onAddSessions,
  isLoading = false
}) {
  const monthlyRemaining = getMonthlyManualRemaining(student?.sessionsBalance)
  const maxAllowed = Math.min(MAX_SESSIONS_PER_OPERATION, monthlyRemaining)
  const [sessionsCount, setSessionsCount] = useState(Math.min(1, maxAllowed))
  const [reason, setReason] = useState('')

  if (!isOpen || !student) return null

  const studentName = typeof student.name === 'string'
    ? student.name
    : (student.name?.ar || student.name?.en || 'الطالب')

  const currentBalance = getRemainingSessions(student.sessionsBalance)
  const manualAddedThisMonth = MAX_MANUAL_SESSIONS_PER_MONTH - monthlyRemaining
  const presets = Array.from({ length: MAX_SESSIONS_PER_OPERATION }, (_, i) => i + 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const count = Number(sessionsCount)
    if (!Number.isInteger(count) || count < 1 || count > maxAllowed) {
      showErrorToast(
        isRtl
          ? `عدد الحصص يجب أن يكون بين 1 و ${maxAllowed}`
          : `Sessions count must be between 1 and ${maxAllowed}`,
        isRtl
      )
      return
    }
    onAddSessions(student.student_id, count, reason.trim())
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={isLoading ? undefined : onClose}
    >
      <div
        className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 text-[#005953] dark:text-emerald-400 rounded-2xl">
              <Plus size={22} />
            </div>
            <div className="text-start">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                {isRtl ? 'إضافة حصص للطالب' : 'Add Sessions to Student'}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                {studentName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-950/30 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {isRtl ? 'رصيد الحصص الحالي' : 'Current Sessions Balance'}
              </span>
              <span className="text-base font-extrabold text-[#005953] dark:text-emerald-400">
                {currentBalance} {isRtl ? 'حصة' : 'sessions'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {isRtl ? 'المضاف يدوياً هذا الشهر' : 'Manually added this month'}
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {manualAddedThisMonth} / {MAX_MANUAL_SESSIONS_PER_MONTH}
              </span>
            </div>
          </div>

          <div className="space-y-2 text-start">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl
                ? `اختر عدد الحصص (المتاح هذا الشهر: ${monthlyRemaining} من ${MAX_MANUAL_SESSIONS_PER_MONTH})`
                : `Select sessions to add (available this month: ${monthlyRemaining} of ${MAX_MANUAL_SESSIONS_PER_MONTH})`}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {presets.map((preset) => {
                const isSelected = sessionsCount === preset
                const isDisabled = preset > maxAllowed
                return (
                  <button
                    key={preset}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => setSessionsCount(preset)}
                    aria-pressed={isSelected}
                    className={`py-3 rounded-2xl font-bold text-sm transition-all border disabled:opacity-40 disabled:cursor-not-allowed ${
                      isSelected
                        ? 'bg-[#005953] text-white border-[#005953] shadow-md shadow-brand-500/10'
                        : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500/40'
                    }`}
                  >
                    +{preset}
                  </button>
                )
              })}
            </div>
          </div>

          {maxAllowed === 0 && (
            <p className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 text-xs font-bold text-start">
              {isRtl
                ? 'تم بلوغ الحد الأقصى للحصص المضافة يدوياً لهذا الطالب خلال هذا الشهر'
                : 'The monthly limit of manually added sessions has been reached for this student'}
            </p>
          )}

          <div className="space-y-1.5 text-start">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'سبب الإضافة (اختياري)' : 'Reason (optional)'}
            </label>
            <input
              type="text"
              value={reason}
              maxLength={200}
              onChange={(e) => setReason(e.target.value)}
              placeholder={isRtl ? 'مثال: تعويض حصة' : 'e.g. make-up session'}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 px-4 text-slate-800 dark:text-white text-sm outline-none focus:border-brand-500/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading || maxAllowed === 0}
              className="flex-1 py-3.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl font-bold text-sm transition-all shadow-md shadow-brand-500/15 disabled:opacity-50 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? (isRtl ? 'جاري الإضافة...' : 'Adding...') : (isRtl ? 'تأكيد وإضافة الحصص' : 'Confirm & Add Sessions')}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold text-sm transition-all"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}
