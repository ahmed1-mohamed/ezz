import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ParentPagination from './ParentPagination';

export default React.memo(function ParentTrackChildrenSection({
  children = [],
  isLoading = false,
  onSelectChild,
}) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const totalItems = children?.length || 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentChildren = useMemo(() => {
    return (children || []).slice(startIndex, endIndex);
  }, [children, startIndex, endIndex]);
  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.home.trackChildren', 'متابعة الأبناء')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-44 bg-white dark:bg-slate-800 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.home.trackChildren', 'متابعة الأبناء')}
        </h2>
        {totalItems > pageSize && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            {totalItems} {t('parentDashboard.pagination.children', 'أبناء')}
          </span>
        )}
      </div>
      {totalItems === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center border border-slate-100 dark:border-slate-800">
          <p className="text-slate-400 text-sm">
            {t('parentDashboard.home.noChildren', 'لا يوجد أبناء مسجلين حالياً')}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentChildren.map((child, idx) => {
              const childId = child.student_id || child.user_id || child.id || `child-${idx}`;
              const totalSessions = child.sessionsBalance?.total ?? (child.totalClasses || 24);
              const remainingSessions = child.sessionsBalance?.remaining ?? (child.remainingClasses ?? 3);
              const safeTotal = totalSessions > 0 ? totalSessions : 1;
              const pct = Math.min(100, Math.max(5, Math.round((remainingSessions / safeTotal) * 100)));
              const groupSubtitle = Array.isArray(child.groups) && child.groups.length > 0
                ? (child.groups.length > 1
                    ? `${child.groups[0]} (+${child.groups.length - 1})`
                    : child.groups[0])
                : (child.subject || child.studentLevel || t('parentDashboard.home.children.subject1', 'القرآن واللغة العربية'));
              const dotColor =
                remainingSessions <= 3
                  ? 'bg-[#e63946]'
                  : remainingSessions <= 8
                  ? 'bg-amber-500'
                  : 'bg-emerald-500';
              const barColor =
                remainingSessions <= 3
                  ? 'bg-[#e63946]'
                  : remainingSessions <= 8
                  ? 'bg-amber-500'
                  : 'bg-[#0f7a6c]';
              return (
                <div
                  key={childId}
                  className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-start min-w-0 flex-1 pe-2">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 truncate">
                          {child.name}
                        </h3>
                        <p className="text-xs text-slate-400 dark:text-slate-400 mt-1 truncate" title={groupSubtitle}>
                          {groupSubtitle}
                        </p>
                      </div>
                      <div className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 ${dotColor}`} />
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 dark:text-slate-400">
                          {t('parentDashboard.home.remainingClasses', 'الحصص المتبقية')}
                        </span>
                        <span className="font-bold text-slate-700 dark:text-slate-200">
                          {remainingSessions} / {totalSessions}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden flex" dir="rtl">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectChild(childId)}
                    className="w-full py-3 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-2xl font-bold text-sm transition-colors text-center active:scale-98"
                  >
                    {t('parentDashboard.home.showDetails', 'عرض التفاصيل')}
                  </button>
                </div>
              );
            })}
          </div>
          {totalPages > 1 && (
            <ParentPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              startIndex={startIndex}
              endIndex={endIndex}
              itemLabel={t('parentDashboard.pagination.children', 'أبناء')}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
});
