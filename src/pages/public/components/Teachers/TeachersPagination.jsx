import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TeachersPagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  isRtl = true,
  t
}) {
  if (totalPages <= 1) return null

  const ArrowNext = isRtl ? ChevronLeft : ChevronRight
  const ArrowPrev = isRtl ? ChevronRight : ChevronLeft

  return (
    <div className="flex justify-center items-center gap-2 pt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
        aria-label={t('teacher.previous', 'السابق')}
      >
        <ArrowPrev className="w-5 h-5" />
      </button>

      <div className="flex gap-1">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1
          const isActive = currentPage === pageNum
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 hover:shadow-sm cursor-pointer ${
                isActive
                  ? 'bg-[#00695C] dark:bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {pageNum}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
        aria-label={t('teacher.next', 'التالي')}
      >
        <ArrowNext className="w-5 h-5" />
      </button>
    </div>
  )
}
