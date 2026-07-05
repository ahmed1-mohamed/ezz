export default function SecurityPasswordCard({
  formData,
  onChange,
  t
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">

      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <span>{t('adminDashboard.managers.addSupervisorScreen.securityTitle', 'الأمان وكلمة المرور')}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.managers.addSupervisorScreen.confirmPassword', 'تأكيد كلمة المرور')}
          </label>
          <input
            type="password"
            required
            value={formData.confirmPassword || ''}
            onChange={(e) => onChange('confirmPassword', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
            dir="ltr"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {t('adminDashboard.managers.addSupervisorScreen.password', 'كلمه المرور')}
          </label>
          <input
            type="password"
            required
            value={formData.password || ''}
            onChange={(e) => onChange('password', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-800 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
            dir="ltr"
          />
        </div>

      </div>

    </div>
  )
}