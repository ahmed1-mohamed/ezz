import { Search, Check } from 'lucide-react'

export default function StudentStep2({
  formData,
  handleChange,
  isRtl,
  parentSearch,
  setParentSearch,
  selectedParentId,
  selectedParentName,
  handleParentSelect,
  filteredParents = []
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
              {isRtl ? 'كلمة المرور *' : 'Password *'}
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder="************************"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'تأكيد كلمة المرور *' : 'Confirm Password *'}
            </label>
            <input
              type="password"
              required
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
            {isRtl ? 'ربط ولي الأمر *' : 'Link Parent *'}
          </h3>
          {selectedParentName && (
            <span className="text-xs font-bold text-[#005953] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-xl">
              {selectedParentName}
            </span>
          )}
        </div>

        <div className="relative w-full">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-400`}>
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder={isRtl ? 'ابحث عن ولي الأمر بالاسم، البريد، أو الهاتف...' : 'Search by name, email or phone...'}
            value={parentSearch}
            onChange={(e) => setParentSearch(e.target.value)}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${
              isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'
            } outline-none transition-all text-sm`}
          />
        </div>

        <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
          {filteredParents.length === 0 ? (
            <div className="p-6 text-center text-slate-400 dark:text-slate-500 font-bold text-xs">
              {isRtl ? 'لا يوجد أولياء أمور مسجلين يطابقون البحث' : 'No parents match search'}
            </div>
          ) : (
            filteredParents.map((parent) => {
              const pid = parent.id || parent._id
              const isSelected = selectedParentId === pid || formData.parent === pid
              return (
                <div
                  key={pid}
                  onClick={() => handleParentSelect(pid, parent.name)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#005953] bg-emerald-50/20 dark:bg-slate-955/40 ring-1 ring-[#005953]'
                      : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        isSelected
                          ? 'bg-[#005953] text-white'
                          : 'bg-emerald-50 dark:bg-emerald-950/20 text-[#005953] dark:text-emerald-400'
                      }`}
                    >
                      {parent.initial || '?'}
                    </div>
                    <div className="text-start space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                        {parent.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                        {parent.email || ''} {parent.phone ? `· ${parent.phone}` : ''}
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
            })
          )}
        </div>
      </div>
    </div>
  )
}