export default function TeacherSecurityCard({
  formData,
  onChange,
  isRtl = true
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'كلمة المرور *' : 'Password *'}
          </label>
          <input
            type="password"
            value={formData.password || ''}
            onChange={(e) => onChange('password', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="••••••••"
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'تأكيد كلمة المرور *' : 'Confirm Password *'}
          </label>
          <input
            type="password"
            value={formData.confirmPassword || ''}
            onChange={(e) => onChange('confirmPassword', e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="••••••••"
            autoComplete="new-password"
            required
          />
        </div>
      </div>
    </div>
  )
}
