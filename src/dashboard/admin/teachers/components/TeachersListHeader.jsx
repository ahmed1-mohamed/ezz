import { Plus, Search } from 'lucide-react'

export default function TeachersListHeader({
  searchVal,
  onSearchChange,
  onOpenAddScreen,
  t
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={onOpenAddScreen}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-650 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
        >
          <Plus size={18} />
          <span>{t('adminDashboard.teachers.add', 'إضافة معلم')}</span>
        </button>

        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
          {t('adminDashboard.teachers.listTitle', 'قائمة المعلمين المسجلين في المنصة')}
        </span>
      </div>

      <div className="relative w-full md:w-72">
        <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-450">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder={t('adminDashboard.teachers.searchPlaceholder', 'بحث...')}
          value={searchVal}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ps-10 pe-4 outline-none transition-all text-sm placeholder-slate-400"
        />
      </div>
    </div>
  )
}