import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherSessionsFilterBar({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const tabs = [
    { key: 'all', label: t('teacherSessions.all', 'الكل') },
    { key: 'scheduled', label: t('teacherSessions.scheduled', 'مجدولة') },
    { key: 'live', label: t('teacherSessions.live', 'مباشرة الآن') },
    { key: 'completed', label: t('teacherSessions.completed', 'مكتملة') },
    { key: 'cancelled', label: t('teacherSessions.cancelled', 'ملغاة') },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab.key
                ? 'bg-[#00594C] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative w-full md:w-72">
        <Search
          size={16}
          className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${
            isRtl ? 'right-3.5' : 'left-3.5'
          }`}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('teacherSessions.searchPlaceholder', 'ابحث باسم الحصة أو المجموعة...')}
          className={`w-full py-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 ${
            isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
          }`}
        />
      </div>
    </div>
  );
});
