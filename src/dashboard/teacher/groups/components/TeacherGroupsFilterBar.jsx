import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsFilterBar({
  statusFilter,
  onStatusFilterChange,
  typeFilter,
  onTypeFilterChange,
  searchQuery,
  onSearchChange,
  statusCounts,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const statusTabs = [
    { key: 'all', label: t('teacherGroups.all', 'الكل'), count: statusCounts.all },
    { key: 'active', label: t('teacherGroups.active', 'نشطة'), count: statusCounts.active },
    { key: 'pending', label: t('teacherGroups.pending', 'قيد الانتظار'), count: statusCounts.pending },
    { key: 'stopped', label: t('teacherGroups.stopped', 'موقوفة'), count: statusCounts.stopped },
    { key: 'completed', label: t('teacherGroups.completed', 'مكتملة'), count: statusCounts.completed },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {statusTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onStatusFilterChange(tab.key)}
            className={`px-3.5 py-1.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              statusFilter === tab.key
                ? 'bg-[#00594C] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                statusFilter === tab.key
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <select
          value={typeFilter}
          onChange={(e) => onTypeFilterChange(e.target.value)}
          className="py-2 px-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold focus:outline-none"
        >
          <option value="all">{t('teacher.typeAll', 'جميع الأنواع')}</option>
          <option value="public">{t('teacher.typePublic', 'عامة')}</option>
          <option value="private">{t('teacher.typePrivate', 'خاصة')}</option>
        </select>

        <div className="relative w-full md:w-64">
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
            placeholder={t('teacherGroups.searchPlaceholder', 'ابحث باسم المجموعة أو المنهج...')}
            className={`w-full py-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 ${
              isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
            }`}
          />
        </div>
      </div>
    </div>
  );
});
