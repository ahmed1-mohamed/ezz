import React, { useState } from 'react';
import { Lock, KeyRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function StudentPasswordCard({
  onSavePassword,
  isChangingPassword = false,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    onSavePassword({
      currentPassword,
      newPassword,
      confirmPassword,
      clearFields: () => {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      },
    });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5 text-start"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
        <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
          <Lock size={17} />
        </div>
        <div>
          <h3 className="text-base font-black">
            {t('studentDashboard.profile.changePasswordTitle', 'الأمان وتغيير كلمة المرور')}
          </h3>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">
            {t('studentDashboard.settings.security.subtitle', 'حافظ على أمان حسابك بتعيين كلمة مرور قوية')}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
            {t('studentDashboard.profile.currentPassword', 'كلمة المرور الحالية')}
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold"
            placeholder="••••••••"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
              {t('studentDashboard.profile.newPassword', 'كلمة المرور الجديدة')} *
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold"
              placeholder="••••••••"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
              {t('studentDashboard.profile.confirmPassword', 'تأكيد كلمة المرور')} *
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>
      <div className="pt-1 flex justify-start">
        <button
          type="submit"
          disabled={isChangingPassword}
          className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 active:scale-[0.98] text-white dark:bg-slate-700 dark:hover:bg-slate-600 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-xs cursor-pointer disabled:opacity-50"
        >
          <KeyRound size={15} />
          <span>{isChangingPassword ? t('studentDashboard.profile.saving', 'جاري الحفظ...') : t('studentDashboard.profile.updatePasswordBtn', 'تحديث كلمة المرور')}</span>
        </button>
      </div>
    </form>
  );
});

