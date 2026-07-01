import { Search, Check } from 'lucide-react'

export default function StudentStep2({
  formData,
  handleChange,
  isRtl,
  parentSearch,
  setParentSearch,
  selectedParentName,
  handleParentSelect,
  filteredParents
}) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
          {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'كلمه المرور' : 'Password'}
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder="************************"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder="************************"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <h3 className="text-base font-bold text-slate-855 dark:text-white">
            {isRtl ? 'أضف ولي الأمر' : 'Link Parent'}
          </h3>

        </div>

        <div className="relative w-full">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-450`}>
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder={isRtl ? 'ابحث بالاسم، البريد الإلكتروني، أو رقم الجوال...' : 'Search by name, email or phone...'}
            value={parentSearch}
            onChange={(e) => setParentSearch(e.target.value)}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm`}
          />
        </div>

        <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
          {filteredParents.map((parent) => {
            const isSelected = selectedParentName === parent.name
            return (
              <div
                key={parent.name}
                onClick={() => handleParentSelect(parent.name)}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${isSelected
                  ? 'border-[#005953] bg-emerald-50/10 dark:bg-slate-955/20'
                  : 'border-slate-100 dark:border-slate-855 hover:bg-slate-50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-[#005953] text-white' : 'bg-emerald-50/20 text-brand-700 dark:bg-emerald-500/20'}`}>
                    {parent.initial}
                  </div>
                  <div className="text-start space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                      {parent.name}
                    </h4>
                    <p className="text-[10px] text-slate-450 dark:text-slate-500 font-bold">
                      {parent.email} · {parent.phone}
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <div className="p-1 bg-[#005953] text-white rounded-full">
                    <Check size={14} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => handleParentSelect('')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
          >
            {isRtl ? 'تخطى' : 'Skip'}
          </button>
        </div>
      </div>
    </div>
  )
}