import { useState } from 'react'
import { X, KeyRound, Eye, EyeOff, Loader2, Check } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function ChangeTeacherPasswordModal({
  isOpen,
  onClose,
  teacher,
  isRtl,
  onSuccess
}) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen || !teacher) return null

  const userId = teacher.user_id || teacher.userId || teacher.user?._id || teacher.user?.id || teacher.teacher_id || teacher.id

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!password) {
      toast.error(isRtl ? 'يرجى إدخال كلمة المرور الجديدة' : 'Please enter new password')
      return
    }

    if (password.length < 6) {
      toast.error(isRtl ? 'كلمة المرور يجب أن لا تقل عن 6 أحرف' : 'Password must be at least 6 characters')
      return
    }

    if (password !== confirmPassword) {
      toast.error(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
      return
    }

    try {
      setIsSubmitting(true)
      await teachersApi.changeTeacherPassword(userId, {
        password,
        confirmPassword,
        phone: teacher.phone,
        country: teacher.country
      })
      toast.success(isRtl ? 'تم تغيير كلمة مرور المعلم بنجاح!' : 'Teacher password changed successfully!')
      setPassword('')
      setConfirmPassword('')
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تغيير كلمة المرور' : 'Failed to change password'))
      toast.error(errorText)
      console.error('Failed to change password:', err)
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
              <KeyRound size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold">
                {isRtl ? 'تغيير كلمة المرور للمعلم' : 'Change Teacher Password'}
              </h3>
              <p className="text-xs text-emerald-100 font-medium">
                {teacher.name} ({teacher.email || teacher.phone || 'حساب المعلم'})
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

         <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'كلمة المرور الجديدة' : 'New Password'}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#005953] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute end-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#005953] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute end-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
            {isRtl
              ? 'يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل.'
              : 'Password must be at least 6 characters.'}
          </p>

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
                  <span>{isRtl ? 'جاري التحديث...' : 'Updating...'}</span>
                </>
              ) : (
                <>
                  <Check size={15} />
                  <span>{isRtl ? 'حفظ كلمة المرور' : 'Save Password'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
