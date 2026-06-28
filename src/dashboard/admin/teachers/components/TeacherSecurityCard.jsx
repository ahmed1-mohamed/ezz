import { useState } from 'react'

export default function TeacherSecurityCard({
  formData,
  onChange,
  isRtl,
  isEdit = true
}) {
  // Local states are only used in Edit mode
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordUpdate = (e) => {
    e.preventDefault()
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert(isRtl ? 'الرجاء ملء جميع حقول كلمة المرور' : 'Please fill all password fields')
      return
    }
    if (newPassword !== confirmPassword) {
      alert(isRtl ? 'كلمة المرور الجديدة غير متطابقة!' : 'New passwords do not match!')
      return
    }
    alert(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  // Edit Mode Layout
  if (isEdit) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
        <div>
          <h3 className="text-base font-bold text-slate-855 dark:text-white">
            {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
          </h3>
          <p className="text-xs font-bold text-slate-450 dark:text-slate-500 mt-1">
            {isRtl ? 'تغيير كلمة المرور' : 'Change Password'}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder="************************"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'كلمه المرور الجديدة' : 'New Password'}
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                placeholder="************************"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                placeholder="************************"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={handlePasswordUpdate}
              className="px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white font-bold text-sm rounded-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-[#005953]/15"
            >
              {isRtl ? 'تحديث كلمة المرور' : 'Update Password'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Add Mode Layout (from mockup)
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      
      {/* Header */}
      <div>
        <h3 className="text-base font-bold text-slate-855 dark:text-white">
          {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
        </h3>
      </div>

      {/* Row: Password & Confirm Password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'كلمه المرور' : 'Password'}
          </label>
          <input
            type="password"
            value={formData.password || ''}
            onChange={(e) => onChange('password', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
            placeholder="************************"
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
          </label>
          <input
            type="password"
            value={formData.confirmPassword || ''}
            onChange={(e) => onChange('confirmPassword', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
            placeholder="************************"
            required
          />
        </div>

      </div>

    </div>
  )
}
