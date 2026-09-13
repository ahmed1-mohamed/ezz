import TeachersListHeader from './TeachersListHeader'
import TeachersListItem from './TeachersListItem'
import TeachersPagination from './TeachersPagination'

export default function TeachersList({
  teachers = [],
  selectedTeacherId,
  isRtl,
  t,
  searchVal = '',
  onSearchChange,
  committedSearch = '',
  onSearchSubmit,
  onClearSearch,
  statusFilter = 'all',
  onStatusFilterChange,
  statistics = {},
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  isFetching = false,
  onPageChange,
  onSelectTeacher,
  onOpenAddScreen,
  onOpenEditScreen,
  onViewDetails,
  onDelete,
  onToggleStatus
}) {
  const limit = 20
  const effectiveTotal = totalItems > 0 ? totalItems : teachers.length
  const indexOfFirstItem = effectiveTotal > 0 ? (currentPage - 1) * limit : 0
  const indexOfLastItem = effectiveTotal > 0 ? Math.min(indexOfFirstItem + teachers.length, effectiveTotal) : 0

  return (
    <div className="space-y-6">
      <TeachersListHeader
        searchVal={searchVal}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
        onClearSearch={onClearSearch}
        onOpenAddScreen={onOpenAddScreen}
        statusFilter={statusFilter}
        onStatusFilterChange={onStatusFilterChange}
        statistics={statistics}
        isRtl={isRtl}
        t={t}
      />

      {committedSearch && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 rounded-2xl text-xs text-emerald-800 dark:text-emerald-300">
          <span className="font-semibold">
            {isRtl ? `نتائج البحث عن: "${committedSearch}"` : `Search results for: "${committedSearch}"`}
          </span>
          <button
            type="button"
            onClick={onClearSearch}
            className="font-bold underline hover:text-emerald-950 dark:hover:text-emerald-100 cursor-pointer"
          >
            {isRtl ? 'إلغاء البحث' : 'Clear search'}
          </button>
        </div>
      )}

      <div className="space-y-4 relative min-h-[160px]">
        {isFetching && (
          <div className="absolute top-2 end-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-full text-xs font-bold text-[#005953] dark:text-emerald-400 border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#005953] animate-ping" />
              <span>{isRtl ? 'جاري التحديث...' : 'Updating...'}</span>
            </span>
          </div>
        )}

        {teachers.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center text-slate-400 dark:text-slate-500 font-bold space-y-2">
            <p className="text-base font-extrabold text-slate-600 dark:text-slate-300">
              {isRtl ? 'لا يوجد معلمون مطابقون' : 'No teachers found'}
            </p>
            <p className="text-xs text-slate-400">
              {committedSearch
                ? (isRtl ? `لا توجد نتائج مطابقة للبحث "${committedSearch}". جرب البحث بكلمات أخرى.` : `No results matching "${committedSearch}". Try other search terms.`)
                : (isRtl ? 'لم يتم العثور على معلمين مسجلين.' : 'No registered teachers found.')}
            </p>
          </div>
        ) : (
          teachers.map((teacher) => (
            <TeachersListItem
              key={teacher.id || teacher.teacher_id}
              teacher={teacher}
              isSelected={selectedTeacherId === teacher.id || selectedTeacherId === teacher.teacher_id}
              onSelectTeacher={onSelectTeacher}
              onViewDetails={onViewDetails}
              onOpenEditScreen={onOpenEditScreen}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
              isRtl={isRtl}
              t={t}
            />
          ))
        )}
      </div>

      <TeachersPagination
        currentPage={currentPage}
        setCurrentPage={onPageChange}
        totalPages={totalPages}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        totalItems={totalItems || teachers.length}
        isRtl={isRtl}
        t={t}
      />
    </div>
  )
}