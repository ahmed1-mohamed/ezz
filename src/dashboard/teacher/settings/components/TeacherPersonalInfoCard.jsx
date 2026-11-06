import { useState } from 'react';
import { Mail, Globe, Phone, Save } from 'lucide-react';
import { profileApi } from '@/shared/services/api/profileApi';
import { triggerGoogleAuth } from '@/shared/services/googleAuthService';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert';

export default function TeacherPersonalInfoCard({
  t,
  isRtl,
  profileForm,
  setProfileForm,
  apiCountries,
  selectedDialCode,
  setSelectedDialCode,
  phoneWithoutCode,
  setPhoneWithoutCode,
  savingProfile,
  onSave,
}) {
  const [isGoogleLinked, setIsGoogleLinked] = useState(
    Boolean(profileForm.isGoogleLinked || profileForm.googleId || profileForm.provider === 'google')
  );
  const [linkingGoogle, setLinkingGoogle] = useState(false);
  const handleToggleGoogleLink = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setLinkingGoogle(true);
      if (isGoogleLinked) {
        await profileApi.unlinkGoogleAccount();
        setIsGoogleLinked(false);
        setProfileForm({ ...profileForm, isGoogleLinked: false, googleId: null });
        showSuccessToast(isRtl ? 'تم إلغاء ربط حساب Google بنجاح' : 'Google account unlinked successfully');
      } else {
        const googleAuth = await triggerGoogleAuth();
        await profileApi.linkGoogleAccount({
          googleId: googleAuth.googleId
        });
        setIsGoogleLinked(true);
        setProfileForm({ ...profileForm, isGoogleLinked: true, googleId: googleAuth.googleId });
        showSuccessToast(isRtl ? 'تم ربط حساب Google بنجاح' : 'Google account linked successfully');
      }
    } catch (err) {
      if (err?.message?.includes('closed') || err?.message?.includes('cancel')) {
        showErrorToast(isRtl ? 'تم إلغاء العملية بواسطة المستخدم' : 'Process cancelled by user');
      } else {
        showErrorToast(isRtl ? 'حدث خطأ أثناء تحديث ربط Google' : 'Failed to update Google link');
      }
    } finally {
      setLinkingGoogle(false);
    }
  };
  return (
    <form
      onSubmit={onSave}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.nameAr', 'الاسم باللغة العربية')}
          </label>
          <input
            type="text"
            value={profileForm.nameAr}
            onChange={(e) => setProfileForm({ ...profileForm, nameAr: e.target.value })}
            placeholder="أحمد محمد"
            className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.nameEn', 'الاسم باللغة الإنجليزية')}
          </label>
          <input
            type="text"
            dir="ltr"
            value={profileForm.nameEn}
            onChange={(e) => setProfileForm({ ...profileForm, nameEn: e.target.value })}
            placeholder="Ahmed Mohamed"
            className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.email', 'البريد الإلكتروني')}
          </label>
          <div className="relative">
            <input
              type="email"
              dir="ltr"
              value={profileForm.email}
              disabled
              className="w-full px-4 py-2.5 ps-10 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed text-start"
            />
            <Mail
              size={16}
              className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.country', 'الدولة')}
          </label>
          <div className="relative">
            <select
              value={profileForm.country}
              onChange={(e) => setProfileForm({ ...profileForm, country: e.target.value })}
              className="w-full px-4 py-2.5 ps-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all cursor-pointer"
            >
              <option value="">{t('common.selectCountry', 'اختر الدولة...')}</option>
              {apiCountries.map((c) => (
                <option key={c.id || c._id} value={c.id || c._id}>
                  {c.flag ? `${c.flag} ` : ''}
                  {isRtl ? c.name : c.nameEn || c.name}
                </option>
              ))}
            </select>
            <Globe
              size={16}
              className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
            />
          </div>
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.phone', 'رقم الهاتف')}
          </label>
          <div className="flex items-center gap-2" dir="ltr">
            <select
              value={selectedDialCode}
              onChange={(e) => setSelectedDialCode(e.target.value)}
              className="px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all cursor-pointer shrink-0"
            >
              {apiCountries.map((c) => (
                <option key={c.id || c._id} value={c.dialCode || '+966'}>
                  {c.dialCode || '+966'} {c.flag ? c.flag : ''}
                </option>
              ))}
            </select>
            <div className="relative flex-1">
              <input
                type="tel"
                value={phoneWithoutCode}
                onChange={(e) => setPhoneWithoutCode(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="501234567"
                className="w-full px-4 py-2.5 ps-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-mono text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start"
              />
              <Phone
                size={15}
                className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-start">
        <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
          {t('teacherProfilePage.linkedAccounts', 'ربط الحسابات وتأمين الدخول')}
        </p>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-xs border border-slate-200 dark:border-slate-600 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
                <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
                <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                {t('teacherProfilePage.googleAccount', 'حساب Google')}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isGoogleLinked ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isGoogleLinked
                    ? t('teacherProfilePage.googleLinked', 'الحساب مربوط حالياً')
                    : t('teacherProfilePage.googleNotLinked', 'الحساب غير مربوط')}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleToggleGoogleLink}
            disabled={linkingGoogle}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50 ${
              isGoogleLinked
                ? 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 dark:bg-red-950/30 dark:border-red-900/40 dark:text-red-400'
                : 'bg-[#111111] hover:bg-black text-white dark:bg-slate-700 dark:hover:bg-slate-600 shadow-xs'
            }`}
          >
            {linkingGoogle
              ? t('common.loading', 'جاري المعالجة...')
              : isGoogleLinked
              ? t('teacherProfilePage.unlinkGoogle', 'إلغاء ربط Google')
              : t('teacherProfilePage.linkGoogle', 'ربط حساب Google')}
          </button>
        </div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
        <button
          type="submit"
          disabled={savingProfile}
          className="px-6 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
        >
          <Save size={16} />
          <span>
            {savingProfile
              ? t('teacherProfilePage.saving', 'جاري الحفظ...')
              : t('teacherProfilePage.saveChanges', 'حفظ التعديلات')}
          </span>
        </button>
      </div>
    </form>
  );
}
