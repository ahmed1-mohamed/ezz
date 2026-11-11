import {
  Search,
  RotateCcw,
  X,
  Sparkles,
  Clock,
  CheckCircle2,
  XCircle,
  CheckCheck,
} from 'lucide-react'

export default function TrialSessionsFilters({
  activeStatus,
  setActiveStatus,
  searchValue,
  setSearchValue,
  onClearSearch,
  onRefresh,
  isFetching = false,
  isRtl = true,
  stats = {},
  mode = 'platform',
}) {
  const statusOptions = mode === 'website' ? [
    { key: 'all', label: isRtl ? 'الكل' : 'All', count: stats.total, icon: Sparkles },
    { key: 'pending', label: isRtl ? 'بانتظار الإجراء' : 'Pending', count: stats.pending, icon: Clock, activeClass: 'bg-amber-600 text-white' },
    { key: 'accepted', label: isRtl ? 'مقبول ومربوط' : 'Accepted', count: stats.accepted, icon: CheckCircle2, activeClass: 'bg-emerald-600 text-white' },
    { key: 'rejected', label: isRtl ? 'مرفوض' : 'Rejected', count: stats.rejected, icon: XCircle, activeClass: 'bg-rose-600 text-white' },
  ] : [
    { key: 'all', label: isRtl ? 'الكل' : 'All', count: stats.total, icon: Sparkles },
    { key: 'pending', label: isRtl ? 'بانتظار التسكين' : 'Pending', count: stats.pending, icon: Clock, activeClass: 'bg-amber-600 text-white' },
    { key: 'assigned', label: isRtl ? 'تم التسكين' : 'Assigned', count: stats.assigned, icon: CheckCircle2, activeClass: 'bg-emerald-600 text-white' },
    { key: 'completed', label: isRtl ? 'مكتملة' : 'Completed', count: stats.completed, icon: CheckCheck, activeClass: 'bg-teal-600 text-white' },
    { key: 'cancelled', label: isRtl ? 'ملغاة' : 'Cancelled', count: stats.cancelled, icon: XCircle, activeClass: 'bg-rose-600 text-white' },
  ]
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 text-start" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:max-w-lg relative">
          <div className={`absolute inset-y-0 ${isRtl ? 'right-3.5' : 'left-3.5'} flex items-center pointer-events-none text-slate-400`}>
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={
              isRtl
                ? 'ابحث باسم الطالب، ولي الأمر، أو المنهج الدراسي...'
                : 'Search by student, parent, or curriculum...'
            }
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 ${
              isRtl ? 'pr-10 pl-9' : 'pl-10 pr-9'
            } text-sm placeholder-slate-400 outline-none transition-all shadow-sm`}
          />
          {searchValue && (
            <button
              type="button"
              onClick={onClearSearch}
              className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer`}
            >
              <X size={15} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
          {onRefresh && (
            <button
              type="button"
              onClick={onRefresh}
              disabled={isFetching}
              title={isRtl ? 'تحديث البيانات' : 'Refresh'}
              className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer disabled:opacity-50 active:scale-95 shadow-sm"
            >
              <RotateCcw size={16} className={isFetching ? 'animate-spin text-[#005953]' : ''} />
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100 dark:border-slate-800/60">
        {statusOptions.map((opt) => {
          const Icon = opt.icon
          const isActive = activeStatus === opt.key
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveStatus(opt.key)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? opt.activeClass || 'bg-[#005953] text-white shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon size={14} />
              <span>{opt.label}</span>
              {opt.count !== undefined && opt.count !== null && (
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
