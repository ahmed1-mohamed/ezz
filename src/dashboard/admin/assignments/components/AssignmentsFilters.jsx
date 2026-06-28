import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AssignmentsFilters({
  activeTab,
  setActiveTab,
  searchValue,
  setSearchValue,
}) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.assignments.${key}`, key)

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Right Side: Toggle Tabs (Submissions / Assignments) */}
      <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <button
          onClick={() => setActiveTab('submissions')}
          className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'submissions'
              ? 'bg-[#0f7a6c] text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
          }`}
        >
          {p('tabSubmissions', 'التسليمات')}
        </button>
        <button
          onClick={() => setActiveTab('assignments')}
          className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'assignments'
              ? 'bg-[#0f7a6c] text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
          }`}
        >
          {p('tabAssignments', 'الواجبات')}
        </button>
      </div>

      {/* Left/Middle: Search Field */}
      <div className="flex-1 max-w-xs w-full relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={p('searchPlaceholder', 'بحث...')}
          className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl py-2 px-4 ps-10 text-sm placeholder-slate-400 outline-none text-start focus:border-[#0f7a6c]/30 shadow-sm transition-all"
        />
        <Search size={16} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  )
}
