import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsFilterBar({
  activeFilter = 'all',
  onFilterChange,
  searchQuery = '',
  onSearchChange,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const filterTabs = [
    { key: 'all', label: t('teacherGroups.filterAll', 'الكل') },
    { key: 'private', label: t('teacherGroups.filterPrivate', 'خاص') },
    { key: 'public', label: t('teacherGroups.filterPublic', 'جماعي') },
    { key: 'active', label: t('teacherGroups.filterActive', 'نشط') },
  ];
  return (
    <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onFilterChange(tab.key)}
              className={`px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#00594C] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="relative w-full md:w-80 lg:w-96">
        <Search
          size={16}
          className={`absolute top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none ${
            isRtl ? 'right-4' : 'left-4'
          }`}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('teacherGroups.searchPlaceholder', 'ابحث عن مجموعة...')}
          className={`w-full py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 transition-all shadow-2xs ${
            isRtl ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'
          }`}
        />
      </div>
    </section>
  );
});
