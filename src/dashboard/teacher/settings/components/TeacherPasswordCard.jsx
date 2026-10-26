import { Eye, EyeOff, Lock } from 'lucide-react';

export default function TeacherPasswordCard({
  t,
  passwordForm,
  setPasswordForm,
  showCurrentPass,
  setShowCurrentPass,
  showNewPass,
  setShowNewPass,
  showConfirmPass,
  setShowConfirmPass,
  savingPassword,
  onSavePassword,
}) {
  return (
    <form
      onSubmit={onSavePassword}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
    >
      <div className="max-w-xl space-y-5 text-start">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.currentPassword', 'كلمة المرور الحالية')}
          </label>
          <div className="relative">
            <input
              type={showCurrentPass ? 'text' : 'password'}
              dir="ltr"
              value={passwordForm.current}
              onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 pe-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start font-mono"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPass(!showCurrentPass)}
              className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              {showCurrentPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.newPassword', 'كلمة المرور الجديدة')}
          </label>
          <div className="relative">
            <input
              type={showNewPass ? 'text' : 'password'}
              dir="ltr"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 pe-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start font-mono"
            />
            <button
              type="button"
              onClick={() => setShowNewPass(!showNewPass)}
              className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.confirmPassword', 'تأكيد كلمة المرور الجديدة')}
          </label>
          <div className="relative">
            <input
              type={showConfirmPass ? 'text' : 'password'}
              dir="ltr"
              value={passwordForm.confirmPassword}
              onChange={(e) =>
                setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
              }
              placeholder="••••••••"
              className="w-full px-4 py-2.5 pe-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start font-mono"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              {showConfirmPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 max-w-xl text-start space-y-2">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
          {t('teacherProfilePage.passwordRequirements', 'شروط كلمة المرور القوية:')}
        </span>
        <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
          <li>{t('teacherProfilePage.req1', 'أن لا تقل عن 6 أحرف وأرقام.')}</li>
          <li>{t('teacherProfilePage.req2', 'يفضل احتواؤها على أحرف كبيرة وصغيرة وأرقام ورموز.')}</li>
          <li>{t('teacherProfilePage.req3', 'تجنب استخدام بيانات شخصية يسهل تخمينها.')}</li>
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
        <button
          type="submit"
          disabled={savingPassword}
          className="px-6 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
        >
          <Lock size={16} />
          <span>
            {savingPassword
              ? t('teacherProfilePage.saving', 'جاري التحديث...')
              : t('teacherProfilePage.changePassword', 'تحديث كلمة المرور')}
          </span>
        </button>
      </div>
    </form>
  );
}


