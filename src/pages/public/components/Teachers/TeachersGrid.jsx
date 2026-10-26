import { AnimatePresence } from 'framer-motion'
import { AlertCircle, RefreshCw } from 'lucide-react'
import TeacherCard from './TeacherCard'
import TeacherSkeleton from './TeacherSkeleton'

export default function TeachersGrid({
  isError = false,
  isLoading = false,
  filteredTeachers = [],
  paginatedTeachers = [],
  onRetry,
  onResetFilters,
  hasActiveFilters = false,
  t
}) {
  if (isError) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-[32px] border border-red-100 dark:border-red-900/40 shadow-sm p-8 space-y-4">
        <div className="inline-flex p-3 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <p className="text-red-600 dark:text-red-400 font-bold text-lg">
          {t('common.errorLoading', 'حدث خطأ أثناء تحميل بيانات المعلمين')}
        </p>
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold rounded-xl transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>{t('common.retry', 'إعادة المحاولة')}</span>
        </button>
      </div>
    )
  }

  if (isLoading && filteredTeachers.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-8">
        {Array.from({ length: 8 }).map((_, idx) => (
          <TeacherSkeleton key={idx} />
        ))}
      </div>
    )
  }

  if (filteredTeachers.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-8">
        <AnimatePresence mode="popLayout">
          {paginatedTeachers.map((teacher, idx) => (
            <TeacherCard
              key={teacher.teacher_id || teacher.id || idx}
              teacher={teacher}
              t={t}
              index={idx}
            />
          ))}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
      <p className="text-[#00695C] dark:text-emerald-400 font-bold text-xl">
        {t('teacher.noResults', 'لا يوجد معلمين يطابقون بحثك.')}
      </p>
      {hasActiveFilters && (
        <button
          onClick={onResetFilters}
          className="text-sm font-bold text-[#8B6B15] dark:text-amber-400 underline hover:text-[#5c4a00] dark:hover:text-amber-300 cursor-pointer"
        >
          {t('teacher.clearFilter', 'مسح التصفية')}
        </button>
      )}
    </div>
  )
}
