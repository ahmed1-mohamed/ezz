import React from 'react'
import {
  Search,
  Download,
  Loader2,
  X,
  RotateCcw,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Filter,
  Package,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function PaymentsFilters({
  activeStatus,
  setActiveStatus,
  packageTypeFilter,
  setPackageTypeFilter,
  searchValue,
  setSearchValue,
  onClearSearch,
  onExport,
  isExporting = false,
  onRefresh,
  isFetching = false,
  stats = {},
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const paidCount = stats.paid?.count ?? 0
  const pendingCount = stats.pending?.count ?? 0
  const expiredCount = stats.expired?.count ?? 0
  const totalCount = paidCount + pendingCount + expiredCount

  const statusOptions = [
    { key: 'all', label: isRtl ? 'الكل' : 'All', count: totalCount, icon: null },
    { key: 'paid', label: isRtl ? 'مدفوعة' : 'Paid', count: paidCount, icon: CheckCircle2, activeClass: 'bg-emerald-600 text-white' },
    { key: 'pending', label: isRtl ? 'معلقة' : 'Pending', count: pendingCount, icon: Clock3, activeClass: 'bg-amber-600 text-white' },
    { key: 'expired', label: isRtl ? 'منتهية' : 'Expired', count: expiredCount, icon: AlertCircle, activeClass: 'bg-rose-600 text-white' },
  ]

  const typeOptions = [
    { key: 'all', label: isRtl ? 'كافة الباقات' : 'All Types' },
    { key: 'individual', label: isRtl ? 'باقات فردية' : 'Individual' },
    { key: 'family', label: isRtl ? 'باقات عائلية' : 'Family' },
  ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4 text-start">
      {/* Top Row: Search + Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="w-full md:max-w-lg relative">
          <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={
              isRtl
                ? 'بحث باسم ولي الأمر، الطالب، الباقة، أو رقم العملية...'
                : 'Search by parent, student, package, or transaction ID...'
            }
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 ps-9 pe-9 text-sm placeholder-slate-400 outline-none transition-all shadow-sm"
          />
          {searchValue && (
            <button
              type="button"
              onClick={onClearSearch}
              className="absolute inset-y-0 end-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Right Action Buttons */}
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

          <button
            type="button"
            onClick={onExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#005953] dark:text-emerald-400 border border-[#005953]/20 rounded-2xl text-xs font-bold transition-all shadow-sm disabled:opacity-50 cursor-pointer active:scale-95"
          >
            {isExporting ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
            <span>{isRtl ? 'تصدير CSV' : 'Export CSV'}</span>
          </button>
        </div>
      </div>

      {/* Bottom Row: Status Filter Tabs + Package Type Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
        {/* Status Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {statusOptions.map((opt) => {
            const Icon = opt.icon
            const isActive = activeStatus === opt.key
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setActiveStatus(opt.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? opt.activeClass || 'bg-[#005953] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750'
                }`}
              >
                {Icon && <Icon size={13} />}
                <span>{opt.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Package Type Pills */}
        <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
          {typeOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setPackageTypeFilter(opt.key)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                packageTypeFilter === opt.key
                  ? 'bg-white dark:bg-slate-900 text-[#005953] dark:text-emerald-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
