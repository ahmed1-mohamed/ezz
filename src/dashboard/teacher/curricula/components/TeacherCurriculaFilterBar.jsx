import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherCurriculaFilterBar({
  searchQuery = '',
  onSearchChange,
  selectedGroup = '',
  onGroupChange,
  selectedLevel = '',
  onLevelChange,
  activeTab = 'all',
  onTabChange,
  groups = [],
  tabCounts = {},
  curriculaCount = 0,
  resourcesCount = 0,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const tabs = [
    { key: 'all', label: t('teacherCurricula.tabAll', 'الكل'), count: tabCounts.all ?? 0 },
    { key: 'curricula', label: t('teacherCurricula.tabCurricula', 'مناهج'), count: tabCounts.curricula ?? 0 },
    { key: 'books', label: t('teacherCurricula.tabBooks', 'كتب'), count: tabCounts.books ?? 0 },
    { key: 'references', label: t('teacherCurricula.tabReferences', 'مراجع'), count: tabCounts.references ?? 0 },
    { key: 'support', label: t('teacherCurricula.tabSupport', 'مواد مساندة'), count: tabCounts.support ?? 0 },
  ];
  const levels = [
    { value: '', label: t('teacherCurricula.allLevels', 'جميع المستويات') },
    { value: 'beginner', label: t('teacherCurricula.beginner', 'مبتدئ') },
    { value: 'intermediate', label: t('teacherCurricula.intermediate', 'متوسط') },
    { value: 'advanced', label: t('teacherCurricula.advanced', 'متقدم') },
  ];
  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-[28px] p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6 space-y-1.5 text-start">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300">
            {t('teacherCurricula.searchLabel', 'البحث في المناهج والمصادر')}
          </label>
          <div className="relative">
            <Search size={16} className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('teacherCurricula.searchPlaceholder', 'ابحث باسم المنهج أو الكتاب أو الدرس...')}
              className="w-full ps-10 pe-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:border-[#00594C] transition-colors"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-1.5 text-start">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300">
            {t('teacherCurricula.groupLabel', 'المجموعة الدراسية')}
          </label>
          <div className="relative">
            <select
              value={selectedGroup}
              onChange={(e) => onGroupChange(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:border-[#00594C] transition-colors cursor-pointer"
            >
              <option value="">{t('teacherCurricula.allGroups', 'جميع المجموعات')}</option>
              {groups.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div className="md:col-span-3 space-y-1.5 text-start">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300">
            {t('teacherCurricula.levelLabel', 'المستوى')}
          </label>
          <div className="relative">
            <select
              value={selectedLevel}
              onChange={(e) => onLevelChange(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:border-[#00594C] transition-colors cursor-pointer"
            >
              {levels.map((lv) => (
                <option key={lv.value} value={lv.value}>{lv.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
        <p className="text-xs font-semibold text-slate-400 order-2 sm:order-1">
          {curriculaCount} {t('teacherCurricula.curriculaCountLabel', 'مناهج و')}
          {resourcesCount} {t('teacherCurricula.resourcesAvailableLabel', 'مصدراً تعليمياً متاحًا لك')}
        </p>
        <div className="flex flex-wrap gap-2 order-1 sm:order-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onTabChange(tab.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#00594C] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                <span>({tab.count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
});
