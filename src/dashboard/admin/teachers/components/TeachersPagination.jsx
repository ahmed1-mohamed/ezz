import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TeachersPagination({
  currentPage = 1,
  setCurrentPage,
  totalPages = 1,
  indexOfFirstItem = 0,
  indexOfLastItem = 0,
  totalItems = 0,
  isRtl,
  t
}) {
  const isSinglePage = totalPages <= 1

  // Generate page numbers with smart ellipsis
  const getPageNumbers = () => {
    if (totalPages <= 1) return [1]
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const pages = []
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i)
      pages.push('...')
      pages.push(totalPages)
    } else if (currentPage >= totalPages - 3) {
      pages.push(1)
      pages.push('...')
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
      pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft
  const NextIcon = isRtl ? ChevronLeft : ChevronRight

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft select-none">
      <div className="text-xs text-slate-400 dark:text-slate-500 font-bold">
        {t('adminDashboard.managers.pagination.showing', 'عرض')}{' '}
        <span className="font-extrabold text-slate-700 dark:text-slate-200">
          {totalItems > 0 ? indexOfFirstItem + 1 : 0}
        </span>{' '}
        {t('adminDashboard.managers.pagination.to', 'إلى')}{' '}
        <span className="font-extrabold text-slate-700 dark:text-slate-200">
          {totalItems > 0 ? Math.min(indexOfLastItem, totalItems) : 0}
        </span>{' '}
        {t('adminDashboard.managers.pagination.of', 'من أصل')}{' '}
        <span className="font-extrabold text-slate-700 dark:text-slate-200">
          {totalItems}
        </span>{' '}
        {isRtl ? 'معلم' : 'teachers'}
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={isSinglePage || currentPage === 1}
          aria-label={t('adminDashboard.managers.pagination.previous', 'الصفحة السابقة')}
          title={t('adminDashboard.managers.pagination.previous', 'الصفحة السابقة')}
          className="h-8 w-8 flex items-center justify-center rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <PrevIcon size={16} />
        </button>

        {getPageNumbers().map((p, idx) => {
          if (p === '...') {
            return (
              <span key={`dots-${idx}`} className="px-2 text-slate-400 text-xs font-bold">
                ...
              </span>
            )
          }

          const isActive = currentPage === p
          const isDisabled = isSinglePage

          return (
            <button
              key={p}
              type="button"
              disabled={isDisabled}
              onClick={() => !isDisabled && setCurrentPage(p)}
              className={`h-8 w-8 flex items-center justify-center rounded-xl text-xs font-black transition-all ${
                isDisabled
                  ? isActive
                    ? 'bg-[#005953] text-white cursor-not-allowed opacity-50 shadow-sm'
                    : 'border border-slate-100 dark:border-slate-800 text-slate-400 cursor-not-allowed opacity-40'
                  : isActive
                  ? 'bg-[#005953] text-white shadow-md shadow-[#005953]/25 ring-2 ring-[#005953]/20 cursor-pointer'
                  : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer'
              }`}
            >
              {p}
            </button>
          )
        })}

        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={isSinglePage || currentPage === totalPages}
          aria-label={t('adminDashboard.managers.pagination.next', 'الصفحة التالية')}
          title={t('adminDashboard.managers.pagination.next', 'الصفحة التالية')}
          className="h-8 w-8 flex items-center justify-center rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <NextIcon size={16} />
        </button>
      </div>
    </div>
  )
}