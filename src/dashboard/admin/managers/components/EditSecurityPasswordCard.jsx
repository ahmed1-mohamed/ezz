import { useState } from 'react'
import { showErrorToast } from '@/shared/utils/sweetAlert'

export default function EditSecurityPasswordCard({
  isRtl,
  t,
  onUpdatePassword
}) {
  const [passwordState, setPasswordState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (key, value) => {
    setPasswordState((prev) => ({ ...prev, [key]: value }))
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if (!passwordState.currentPassword || !passwordState.newPassword || !passwordState.confirmPassword) {
      showErrorToast(isRtl ? 'الرجاء ملء جميع الحقول!' : 'Please fill all fields!', isRtl)
      return
    }
    if (passwordState.newPassword !== passwordState.confirmPassword) {
      showErrorToast(isRtl ? 'كلمات المرور الجديدة غير متطابقة!' : 'New passwords do not match!', isRtl)
      return
    }
    if (passwordState.newPassword.length < 6) {
      showErrorToast(isRtl ? 'يجب أن تكون كلمة المرور الجديدة 6 أحرف على الأقل!' : 'New password must be at least 6 characters!', isRtl)
      return
    }

    onUpdatePassword(passwordState.newPassword)
    setPasswordState({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">

      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <span>{t('adminDashboard.managers.addSupervisorScreen.securityTitle', 'الأمان وكلمة المرور')}</span>
      </h3>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
          {isRtl ? 'تغيير كلمة المرور' : 'Change Password'}
        </h4>

        {/* Current Password Field */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
          </label>
          <input
            type="password"
            value={passwordState.currentPassword}
            onChange={(e) => handleChange('currentPassword', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="••••••••••••••••••••"
            dir="ltr"
          />
        </div>

        {/* New Password & Confirm Password Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Confirm New Password */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
            </label>
            <input
              type="password"
              value={passwordState.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
              placeholder="••••••••••••••••••••"
              dir="ltr"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'كلمه المرور الجديدة' : 'New Password'}
            </label>
            <input
              type="password"
              value={passwordState.newPassword}
              onChange={(e) => handleChange('newPassword', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
              placeholder="••••••••••••••••••••"
              dir="ltr"
            />
          </div>

        </div>

        {/* Action Button: Update Password */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={handleUpdate}
            className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-2xl text-sm transition-all shadow-md shadow-brand-500/10 active:scale-95 cursor-pointer"
          >
            {isRtl ? 'تحديث كلمة المرور' : 'Update Password'}
          </button>
        </div>

      </div>

    </div>
  )
}
