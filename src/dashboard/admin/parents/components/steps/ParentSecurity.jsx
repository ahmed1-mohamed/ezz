import { Eye, EyeOff } from 'lucide-react'

export default function ParentSecurity({
  formData,
  handleChange,
  isRtl,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
        {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
          </label>
          <div className="relative" dir="ltr">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              placeholder="••••••••••••••••••••"
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {isRtl ? 'كلمة المرور' : 'Password'}
          </label>
          <div className="relative" dir="ltr">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="••••••••••••••••••••"
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
