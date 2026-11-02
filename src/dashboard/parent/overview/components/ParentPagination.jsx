import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default React.memo(function ParentPagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems = 0,
  startIndex = 0,
  endIndex = 0,
  itemLabel = '',
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (totalPages <= 1) return null;
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage, '...', totalPages];
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 md:p-5 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs select-none">
      <div className="text-xs text-slate-400 dark:text-slate-400 font-medium">
        <span>{t('parentDashboard.pagination.showing', 'عرض')} </span>
        <strong className="text-slate-700 dark:text-slate-200">{totalItems > 0 ? startIndex + 1 : 0}</strong>
        <span> {t('parentDashboard.pagination.to', 'إلى')} </span>
        <strong className="text-slate-700 dark:text-slate-200">{Math.min(endIndex, totalItems)}</strong>
        <span> {t('parentDashboard.pagination.of', 'من أصل')} </span>
        <strong className="text-slate-700 dark:text-slate-200">{totalItems}</strong>
        <span> {itemLabel || t('parentDashboard.pagination.sessions', 'حصة')}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label={t('parentDashboard.pagination.previous', 'السابق')}
          className="h-9 w-9 flex items-center justify-center rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <PrevIcon size={16} />
        </button>
        {getPageNumbers().map((num, idx) => {
          if (num === '...') {
            return (
              <span key={`dots-${idx}`} className="w-8 text-center text-slate-400 text-xs">
                ...
              </span>
            );
          }
          const isActive = num === currentPage;
          return (
            <button
              key={num}
              type="button"
              onClick={() => onPageChange(num)}
              className={`h-9 min-w-9 px-2 flex items-center justify-center rounded-xl text-xs font-bold transition-colors ${
                isActive
                  ? 'bg-[#0f7a6c] text-white shadow-xs'
                  : 'border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              {num}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label={t('parentDashboard.pagination.next', 'التالي')}
          className="h-9 w-9 flex items-center justify-center rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <NextIcon size={16} />
        </button>
      </div>
    </div>
  );
});
