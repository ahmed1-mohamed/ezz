import { useState, useEffect } from 'react'
import { X, DollarSign, Loader2, Check } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function UpdateHourlyRateModal({
  isOpen,
  onClose,
  teacher,
  isRtl,
  onSuccess
}) {
  const [hourlyRate, setHourlyRate] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (teacher) {
      setHourlyRate(teacher.hourlyRate !== undefined ? String(teacher.hourlyRate) : '0')
    }
  }, [teacher, isOpen])

  if (!isOpen || !teacher) return null

  const teacherId = teacher.teacher_id || teacher.id

  const handleSubmit = async (e) => {
    e.preventDefault()
    const rateNumber = Math.max(0, Number(hourlyRate) || 0)

    try {
      setIsSubmitting(true)
      await teachersApi.updateTeacherHourlyRate(teacherId, rateNumber)
      toast.success(
        isRtl
          ? `تم تحديث سعر الساعة بنجاح إلى ${rateNumber} ر.س`
          : `Hourly rate updated successfully to ${rateNumber} SAR`
      )
      if (onSuccess) onSuccess(rateNumber)
      onClose()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تحديث سعر الساعة' : 'Failed to update hourly rate'))
      toast.error(errorText)
      console.error('Failed to update hourly rate:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transform transition-all text-start"
        onClick={(e) => e.stopPropagation()}
      >
         <div className="bg-[#005953] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <DollarSign size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold">
                {isRtl ? 'تعديل سعر ساعة المعلم' : 'Update Teacher Hourly Rate'}
              </h3>
              <p className="text-xs text-emerald-100 font-medium">
                {teacher.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

         <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'سعر الساعة الجديد (ر.س / ساعة)' : 'New Hourly Rate (SAR / hr)'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="1"
                required
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                placeholder="90"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-[#005953] transition-all"
              />
              <span className="absolute end-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                {isRtl ? 'ر.س' : 'SAR'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              {isRtl
                ? `سعر الساعة الحالي: ${teacher.hourlyRate ?? 0} ر.س`
                : `Current rate: ${teacher.hourlyRate ?? 0} SAR`}
            </p>
          </div>

           <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-xl text-xs font-bold shadow-md shadow-[#005953]/20 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>{isRtl ? 'جاري الحفظ...' : 'Saving...'}</span>
                </>
              ) : (
                <>
                  <Check size={15} />
                  <span>{isRtl ? 'حفظ السعر' : 'Save Rate'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
