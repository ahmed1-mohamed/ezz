import { useState } from 'react'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

export default function ParentSecuritySection({
  isRtl = true,
  onUpdatePassword,
  isUpdatingPassword = false,
}) {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onUpdatePassword) {
      onUpdatePassword(
        { newPassword, confirmPassword },
        () => {
          setNewPassword('')
          setConfirmPassword('')
        }
      )
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800/80 shadow-soft space-y-6"
    >
      <div className="text-start">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
          {isRtl ? 'تغيير كلمة المرور' : 'Change Password'}
        </p>
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="order-2 md:order-1 text-start">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
              {isRtl ? 'كلمه المرور الجديدة' : 'New Password'}
            </label>
            <div className="relative" dir="ltr">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••••••••••••••"
                className="w-full bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 text-start">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
              {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
            </label>
            <div className="relative" dir="ltr">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••••••••••"
                className="w-full bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isUpdatingPassword}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#00594C] hover:bg-[#004742] text-white font-bold rounded-2xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUpdatingPassword ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>{isRtl ? 'جاري التحديث...' : 'Updating...'}</span>
              </>
            ) : (
              <span>{isRtl ? 'تحديث كلمة المرور' : 'Update Password'}</span>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}
