import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function TeacherDetailsSecurityCard({ teacher, isRtl = true }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const userId = teacher?.user_id || teacher?.userId || teacher?.id || teacher?.teacher_id

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    if (!newPassword || newPassword.length < 6) {
      toast.error(isRtl ? 'كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل' : 'New password must be at least 6 characters')
      return
    }
    if (newPassword !== confirmPassword) {
      toast.error(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
      return
    }

    setIsSubmitting(true)
    try {
      await teachersApi.changeTeacherPassword(userId, {
        currentPassword,
        password: newPassword,
        confirmPassword,
        phone: teacher?.phone,
        country: teacher?.country
      })
      toast.success(isRtl ? 'تم تحديث كلمة المرور بنجاح' : 'Password updated successfully')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تغيير كلمة المرور' : 'Failed to update password'))
      toast.error(errorText)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleUpdatePassword} className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
        </h2>
        <p className="text-xs font-bold text-slate-400 mt-1">
          {isRtl ? 'تغيير كلمة المرور' : 'Change Password'}
        </p>
      </div>

      <div className="space-y-4">
         <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="************************"
          />
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'كلمه المرور الجديدة' : 'New Password'}
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
              placeholder="************************"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
              placeholder="************************"
            />
          </div>
        </div>

         <div className="flex justify-start pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2.5 bg-[#005953] hover:bg-[#004742] text-white font-bold text-sm rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting
              ? (isRtl ? 'جاري التحديث...' : 'Updating...')
              : (isRtl ? 'تحديث كلمة المرور' : 'Update Password')}
          </button>
        </div>
      </div>
    </form>
  )
}
