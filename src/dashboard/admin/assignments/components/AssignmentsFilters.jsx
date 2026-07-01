import { memo } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TABS = [
    { id: 'submissions', labelKey: 'tabSubmissions' },
    { id: 'assignments', labelKey: 'tabAssignments' },
];

function AssignmentsFilters({ activeTab, setActiveTab, searchValue, setSearchValue }) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm self-start">
                {TABS.map(({ id, labelKey }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                            activeTab === id
                                ? 'bg-[#0f7a6c] text-white shadow-sm'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                        }`}
                    >
                        {t(`adminDashboard.assignments.${labelKey}`)}
                    </button>
                ))}
            </div>

            <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search size={15} className="text-slate-400" />
                </div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={t('adminDashboard.assignments.searchPlaceholder')}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl py-2.5 px-4 ps-9 text-sm placeholder-slate-400 outline-none focus:border-[#0f7a6c]/40 shadow-sm transition-all dark:text-white"
                />
            </div>
        </div>
    );
}

export default memo(AssignmentsFilters);
