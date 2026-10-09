import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import { createPortal } from 'react-dom'
import { showErrorToast } from '@/shared/utils/sweetAlert'

export default function AddSessionsModal({
  isOpen,
  onClose,
  student,
  isRtl,
  onAddSessions,
  isLoading = false
}) {
  const [sessionsCount, setSessionsCount] = useState(8)
  const [customInput, setCustomInput] = useState('')

  if (!isOpen || !student) return null

  const studentName = typeof student.name === 'string'
    ? student.name
    : (student.name?.ar || student.name?.en || 'الطالب')

  const rawBal = student.sessionsBalance ?? student.remainingSessions ?? 0
  const currentBalance = typeof rawBal === 'object' && rawBal !== null
    ? (rawBal.remaining !== undefined
        ? Number(rawBal.remaining)
        : Math.max(0, Number(rawBal.total ?? 0) - Number(rawBal.used ?? 0)))
    : Number(rawBal || 0)

  const quickPresets = [4, 8, 12, 16]

  const handleSubmit = (e) => {
    e.preventDefault()
    const count = customInput ? Number(customInput) : Number(sessionsCount)
    if (!count || count <= 0 || isNaN(count)) {
      showErrorToast(isRtl ? 'الرجاء إدخال عدد حصص صحيح!' : 'Please enter a valid sessions count!', isRtl)
      return
    }
    const studentId = student.student_id || student._id || student.id || student.user_id
    onAddSessions(studentId, count)
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 text-[#005953] dark:text-emerald-400 rounded-2xl">
              <Plus size={22} />
            </div>
            <div className="text-start">
              <h3 className="text-lg font-bold text-slate-850 dark:text-white">
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
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-950/30 rounded-2xl flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'رصيد الحصص الحالي' : 'Current Sessions Balance'}
            </span>
            <span className="text-base font-extrabold text-[#005953] dark:text-emerald-400">
              {currentBalance} {isRtl ? 'حصة' : 'sessions'}
            </span>
          </div>

          <div className="space-y-2 text-start">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'اختر عدد الحصص المراد إضافتها' : 'Select sessions to add'}
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {quickPresets.map((preset) => {
                const isSelected = !customInput && sessionsCount === preset
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setSessionsCount(preset)
                      setCustomInput('')
                    }}
                    className={`py-3 rounded-2xl font-bold text-sm transition-all border ${
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

          <div className="space-y-1.5 text-start">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'أو أدخل عدداً مخصصاً' : 'Or enter custom count'}
            </label>
            <input
              type="number"
              min="1"
              max="200"
              value={customInput}
              onChange={(e) => {
                setCustomInput(e.target.value)
              }}
              placeholder={isRtl ? 'مثال: 8' : 'e.g. 8'}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 px-4 text-slate-850 dark:text-white text-sm outline-none focus:border-brand-500/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl font-bold text-sm transition-all shadow-md shadow-brand-500/15 disabled:opacity-50 active:scale-[0.98] cursor-pointer"
            >
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
