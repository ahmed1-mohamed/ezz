export default function TeachersPagination({
  currentPage,
  setCurrentPage,
  totalPages,
  indexOfFirstItem,
  indexOfLastItem,
  totalItems,
  isRtl,
  t
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft">
      <div className="text-xs text-slate-400 dark:text-slate-500 font-bold">
        {t('adminDashboard.managers.pagination.showing', 'عرض')}{' '}
        <span className="font-extrabold text-slate-700 dark:text-slate-200">
          {indexOfFirstItem + 1}
        </span>{' '}
        {t('adminDashboard.managers.pagination.to', 'إلى')}{' '}
        <span className="font-extrabold text-slate-700 dark:text-slate-200">
          {Math.min(indexOfLastItem, totalItems)}
        </span>{' '}
        {t('adminDashboard.managers.pagination.of', 'من أصل')}{' '}
        <span className="font-extrabold text-slate-700 dark:text-slate-200">
          {totalItems}
        </span>{' '}
        {isRtl ? 'معلم' : 'teachers'}
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {t('adminDashboard.managers.pagination.previous', 'السابق')}
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setCurrentPage(p)}
            className={`h-8 w-8 flex items-center justify-center rounded-xl text-xs font-black transition-all ${currentPage === p
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {t('adminDashboard.managers.pagination.next', 'التالي')}
        </button>
      </div>
    </div>
  )
}