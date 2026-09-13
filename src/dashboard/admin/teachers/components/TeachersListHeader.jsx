import { Plus, Search, CheckCircle2, Ban, Users, X } from 'lucide-react'

export default function TeachersListHeader({
  searchVal,
  onSearchChange,
  onSearchSubmit,
  onClearSearch,
  onOpenAddScreen,
  statusFilter = 'all',
  onStatusFilterChange,
  statistics = {},
  isRtl,
  t
}) {
  return (
    <div className="space-y-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onOpenAddScreen}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-sm font-semibold transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.teachers.add', 'إضافة معلم')}</span>
          </button>

          <span className="text-sm font-bold text-slate-500 dark:text-slate-400 hidden sm:inline">
            {t('adminDashboard.teachers.listTitle', 'قائمة المعلمين المسجلين في المنصة')}
          </span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (onSearchSubmit) onSearchSubmit()
          }}
          className="flex items-center gap-2 w-full md:w-auto min-w-[280px] max-w-md"
        >
          <div className="relative flex-1">
            <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder={t('adminDashboard.teachers.searchPlaceholder', 'بحث باسم المعلم أو البريد أو التخصص...')}
              value={searchVal}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  if (onSearchSubmit) onSearchSubmit()
                }
              }}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 ps-9 pe-8 outline-none transition-all text-sm placeholder-slate-400"
            />
            {searchVal ? (
              <button
                type="button"
                onClick={onClearSearch}
                aria-label={isRtl ? 'مسح البحث' : 'Clear search'}
                title={isRtl ? 'مسح البحث' : 'Clear search'}
                className="absolute inset-y-0 end-2.5 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X size={15} />
              </button>
            ) : null}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-sm font-semibold transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] shrink-0 cursor-pointer"
          >
            <Search size={15} />
            <span>{isRtl ? 'بحث' : 'Search'}</span>
          </button>
        </form>
      </div>

      {/* Filter Tabs */}
      {onStatusFilterChange && (
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 overflow-x-auto">
          <button
            type="button"
            onClick={() => onStatusFilterChange('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              statusFilter === 'all'
                ? 'bg-[#005953] text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750'
            }`}
          >
            <Users size={14} />
            <span>{isRtl ? 'الكل' : 'All'}</span>
            <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${statusFilter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
              {statistics.total ?? 0}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onStatusFilterChange('active')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              statusFilter === 'active'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
            }`}
          >
            <CheckCircle2 size={14} />
            <span>{isRtl ? 'النشطون' : 'Active'}</span>
            <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${statusFilter === 'active' ? 'bg-white/20 text-white' : 'bg-emerald-200/60 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300'}`}>
              {statistics.active ?? 0}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onStatusFilterChange('stopped')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              statusFilter === 'stopped'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400'
            }`}
          >
            <Ban size={14} />
            <span>{isRtl ? 'الموقوفون' : 'Stopped'}</span>
            <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${statusFilter === 'stopped' ? 'bg-white/20 text-white' : 'bg-rose-200/60 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300'}`}>
              {statistics.stopped ?? 0}
            </span>
          </button>
        </div>
      )}
    </div>
  )
}