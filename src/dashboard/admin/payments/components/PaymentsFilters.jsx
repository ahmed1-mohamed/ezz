import { Search, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function PaymentsFilters({
  activePeriod,
  setActivePeriod,
  activeStatus,
  setActiveStatus,
  searchValue,
  setSearchValue,
  onExport,
}) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.payments.${key}`, key)

  const periods = [
    { key: 'weekly', label: p('periodWeekly') },
    { key: 'monthly', label: p('periodMonthly') },
    { key: 'annual', label: p('periodAnnual') },
  ]

  const statuses = [
    { key: 'all', label: p('statusAll') },
    { key: 'paid', label: p('statusPaid') },
    { key: 'pending', label: p('statusPending') },
    { key: 'failed', label: p('statusFailed') },
  ]

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Right Side: Period Toggles */}
      <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        {periods.map((period) => (
          <button
            key={period.key}
            onClick={() => setActivePeriod(period.key)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePeriod === period.key
                ? 'bg-[#0f7a6c] text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Middle: Search Field (fully direction-responsive) */}
      <div className="flex-1 max-w-md w-full relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={p('searchPlaceholder')}
          aria-label={p('searchPlaceholder')}
          className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl py-2 px-4 ps-10 text-sm placeholder-slate-400 outline-none text-start focus:border-[#0f7a6c]/30 shadow-sm transition-all"
        />
        <Search size={16} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Left Side: Status Filtering Tabs & Export Button */}
      <div className="flex items-center gap-3">
        {/* Status Tabs */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          {statuses.map((status) => (
            <button
              key={status.key}
              onClick={() => setActiveStatus(status.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeStatus === status.key
                  ? 'bg-[#0f7a6c] text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>

        {/* Export CSV Button */}
        <button
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm"
        >
          <Download size={14} />
          {p('exportCsv')}
        </button>
      </div>
    </div>
  )
}
