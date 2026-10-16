import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function TeacherSecurityCard({
  formData,
  onChange,
  isRtl = true,
  isEdit = false,
  teacher = null,
  userId = null
}) {
  const [isUpdating, setIsUpdating] = useState(false)

  const isEditMode = isEdit || Boolean(teacher?.id || teacher?.teacher_id || teacher?.user_id || teacher?._id || teacher?.user)

  const targetUserId =
    userId ||
    (typeof teacher?.user === 'string' && teacher.user) ||
    teacher?.user?._id ||
    teacher?.user?.id ||
    teacher?.user_id ||
    (typeof teacher?.userId === 'string' && teacher.userId) ||
    teacher?.userId?._id ||
    teacher?.userId?.id ||
    teacher?.userRef ||
    teacher?.teacher_id ||
    teacher?.id

  const handleUpdatePassword = async () => {
    const pw = (formData.password || '').trim()
    const cpw = (formData.confirmPassword || '').trim()

    if (!pw || !cpw) {
      toast.error(isRtl ? 'الرجاء إدخال كلمة المرور وتأكيدها' : 'Please enter and confirm password')
      return
    }
    if (pw.length < 6) {
      toast.error(isRtl ? 'كلمة المرور يجب أن لا تقل عن 6 أحرف' : 'Password must be at least 6 characters')
      return
    }
    if (pw !== cpw) {
      toast.error(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
      return
    }

    if (!targetUserId) {
      toast.error(isRtl ? 'تعذر تحديد معرّف المستخدم' : 'Could not resolve user ID')
      return
    }

    setIsUpdating(true)
    try {
      await teachersApi.changeTeacherPassword(targetUserId, {
        password: pw,
        confirmPassword: cpw,
        phone: formData.phone,
        email: formData.email,
        country: formData.country
      })
      toast.success(isRtl ? 'تم تحديث كلمة المرور بنجاح' : 'Password updated successfully')
      onChange('password', '')
      onChange('confirmPassword', '')
    } catch (err) {
      const msg = err.response?.data?.message
      const errorText = Array.isArray(msg)
        ? msg.join(' - ')
        : (msg || (isRtl ? 'حدث خطأ أثناء تغيير كلمة المرور' : 'Failed to update password'))
      toast.error(errorText)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
          </h2>
          {isEditMode && (
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1">
              {isRtl ? 'تحديث كلمة المرور بحساب المعلم' : 'Update teacher account password'}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'كلمه المرور' : 'Password'}
          </label>
          <input
            type="password"
            value={formData.password || ''}
            onChange={(e) => onChange('password', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="************************"
            required={!isEditMode}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
          </label>
          <input
            type="password"
            value={formData.confirmPassword || ''}
            onChange={(e) => onChange('confirmPassword', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="************************"
            required={!isEditMode && Boolean(formData.password)}
          />
        </div>
      </div>

      {isEditMode && (
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={handleUpdatePassword}
            disabled={isUpdating}
            className="px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
            {isUpdating
              ? (isRtl ? 'جاري تحديث كلمة المرور...' : 'Updating...')
              : (isRtl ? 'تحديث كلمة المرور' : 'Update Password')}
          </button>
        </div>
      )}
    </div>
  )
}