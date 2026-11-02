import React from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function StudentLinkedAccountsCard({
  isGoogleLinked,
  isLinkingGoogle,
  onToggleGoogleLink,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5 text-start"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
        <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
          <Shield size={17} />
        </div>
        <div>
          <h3 className="text-base font-black">
            {t('studentDashboard.profile.linkedAccounts', 'ربط الحسابات وتأمين الدخول')}
          </h3>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">
            {t('studentDashboard.profile.googleDesc', 'اربط حساب Google لتسجيل الدخول السريع والأمان الإضافي')}
          </p>
        </div>
      </div>
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-xs border border-slate-200 dark:border-slate-700 shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
              <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
              <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-black text-slate-800 dark:text-white">
              {t('studentDashboard.profile.googleAccount', 'حساب Google')}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-2 h-2 rounded-full ${isGoogleLinked ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {isGoogleLinked
                  ? t('studentDashboard.profile.googleLinked', 'الحساب مربوط حالياً')
                  : t('studentDashboard.profile.googleNotLinked', 'الحساب غير مربوط')}
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleGoogleLink}
          disabled={isLinkingGoogle}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 self-start sm:self-auto disabled:opacity-50 ${
            isGoogleLinked
              ? 'bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-400'
              : 'bg-[#111111] hover:bg-black text-white dark:bg-slate-700 dark:hover:bg-slate-600 shadow-xs'
          }`}
        >
          <span>
            {isLinkingGoogle
              ? t('common.loading', 'جاري المعالجة...')
              : isGoogleLinked
              ? t('studentDashboard.profile.unlinkGoogle', 'إلغاء ربط حساب Google')
              : t('studentDashboard.profile.linkGoogle', 'ربط حساب Google')}
          </span>
        </button>
      </div>
    </div>
  );
});

