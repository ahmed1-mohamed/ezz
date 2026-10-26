import { Mail, Globe, Phone, Save } from 'lucide-react';

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
              className="w-32 px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all cursor-pointer"
            >
              {apiCountries
                .filter((c) => c.dialCode || c.phoneCode)
                .map((c) => {
                  const code = c.dialCode || c.phoneCode;
                  return (
                    <option key={c.id || c._id} value={code}>
                      {c.flag || ''} {code}
                    </option>
                  );
                })}
            </select>

            <div className="relative flex-1">
              <input
                type="tel"
                value={phoneWithoutCode}
                onChange={(e) => setPhoneWithoutCode(e.target.value)}
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


