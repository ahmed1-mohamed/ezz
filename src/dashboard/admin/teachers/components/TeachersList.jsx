import { useState, useMemo } from 'react'
import { Plus, Search, Eye, Pencil, Star } from 'lucide-react'
import useDebounce from '@/shared/hooks/useDebounce'

export default function TeachersList({
  teachers,
  selectedTeacherId,
  isRtl,
  t,
  onSelectTeacher,
  onOpenAddScreen,
  onOpenEditScreen,
  onViewDetails
}) {
  const [searchVal, setSearchVal] = useState('')
  const debouncedQuery = useDebounce(searchVal, 300)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  // Filter list based on search
  const filteredTeachers = useMemo(() => {
    if (!debouncedQuery.trim()) return teachers
    const query = debouncedQuery.toLowerCase()
    return teachers.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(query) ||
        teacher.subject.toLowerCase().includes(query) ||
        (teacher.email && teacher.email.toLowerCase().includes(query))
    )
  }, [teachers, debouncedQuery])

  // Pagination slicing
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = useMemo(() => {
    return filteredTeachers.slice(indexOfFirstItem, indexOfLastItem)
  }, [filteredTeachers, indexOfFirstItem, indexOfLastItem])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredTeachers.length / itemsPerPage)
  }, [filteredTeachers])

  return (
    <div className="space-y-6">
      
      {/* Control bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        
        {/* Actions & Text */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenAddScreen}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-650 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.teachers.add', 'إضافة معلم')}</span>
          </button>

          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {t('adminDashboard.teachers.listTitle', 'قائمة المعلمين المسجلين في المنصة')}
          </span>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-450`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('adminDashboard.teachers.searchPlaceholder', 'بحث...')}
            value={searchVal}
            onChange={(e) => { setSearchVal(e.target.value); setCurrentPage(1) }}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm placeholder-slate-400`}
          />
        </div>

      </div>

      {/* Teachers vertical list */}
      <div className="space-y-4">
        {currentItems.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-10 text-center text-slate-400 dark:text-slate-500 font-bold">
            {isRtl ? 'لا يوجد معلمون يطابقون بحثك' : 'No teachers found matching your search'}
          </div>
        ) : (
          currentItems.map((teacher) => {
            const initial = teacher.name.trim().charAt(0)
            const isSelected = selectedTeacherId === teacher.id
            const isSuspended = teacher.status !== 'Active'

            return (
              <div
                key={teacher.id}
                onClick={() => onSelectTeacher(teacher.id)}
                className={`bg-white dark:bg-slate-900 rounded-3xl border p-5 shadow-soft hover:shadow-md transition-all cursor-pointer ${
                  isSelected
                    ? 'border-brand-500/40 ring-1 ring-brand-500/20'
                    : 'border-slate-100 dark:border-slate-800/80'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
                  
                  {/* Left part: Avatar, Name, and Status */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center text-xl font-bold">
                      {initial}
                    </div>
                    
                    <div className="space-y-1 text-start">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800 dark:text-white">
                          {teacher.name}
                        </span>
                        
                        {/* Status Badge */}
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isSuspended
                            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
                        }`}>
                          <span className={`w-1 h-1 rounded-full me-1.5 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
                          {isSuspended 
                            ? t('adminDashboard.teachers.suspended', 'موقوف') 
                            : t('adminDashboard.teachers.active', 'نشط')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
                        {teacher.subject}
                      </p>
                    </div>
                  </div>

                  {/* Middle part: stats row */}
                  <div className="grid grid-cols-4 gap-4 sm:gap-8 text-center bg-slate-50/50 dark:bg-slate-950/25 p-3 rounded-2xl border border-slate-100/50 dark:border-slate-850/50 flex-1 max-w-lg w-full">
                    <div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                        {t('adminDashboard.teachers.groups', 'المجموعات')}
                      </p>
                      <p className="text-sm font-extrabold text-slate-700 dark:text-slate-200 mt-0.5">
                        {teacher.groupsCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                        {t('adminDashboard.teachers.sessions', 'الحصص')}
                      </p>
                      <p className="text-sm font-extrabold text-slate-700 dark:text-slate-200 mt-0.5">
                        {teacher.totalSessions}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                        {t('adminDashboard.teachers.earnings', 'الأرباح')}
                      </p>
                      <p className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 truncate max-w-[80px]" title={`${teacher.totalEarnings} ر.س`}>
                        {teacher.totalEarnings}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                        {t('adminDashboard.teachers.rating', 'التقييم')}
                      </p>
                      <p className="text-sm font-extrabold text-amber-500 mt-0.5 flex items-center justify-center gap-0.5">
                        <span>{teacher.rating}</span>
                        <Star size={11} fill="currentColor" className="text-amber-500" />
                      </p>
                    </div>
                  </div>

                  {/* Right part: Actions */}
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    
                    {/* View details click */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (onViewDetails) {
                          onViewDetails(teacher)
                        } else {
                          onSelectTeacher(teacher.id)
                        }
                      }}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-450 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-350 transition-colors cursor-pointer"
                    >
                      <Eye size={14} />
                      <span>{t('adminDashboard.teachers.viewDetails', 'عرض التفاصيل')}</span>
                    </button>

                    {/* Quick Edit */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onOpenEditScreen(teacher)
                      }}
                      className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <Pencil size={12} />
                      <span>{isRtl ? 'تعديل' : 'Edit'}</span>
                    </button>

                  </div>

                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft">
          <div className="text-xs text-slate-400 dark:text-slate-500 font-bold">
            {t('adminDashboard.managers.pagination.showing', 'عرض')}{' '}
            <span className="font-extrabold text-slate-700 dark:text-slate-200">
              {indexOfFirstItem + 1}
            </span>{' '}
            {t('adminDashboard.managers.pagination.to', 'إلى')}{' '}
            <span className="font-extrabold text-slate-700 dark:text-slate-200">
              {Math.min(indexOfLastItem, filteredTeachers.length)}
            </span>{' '}
            {t('adminDashboard.managers.pagination.of', 'من أصل')}{' '}
            <span className="font-extrabold text-slate-700 dark:text-slate-200">
              {filteredTeachers.length}
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
                className={`h-8 w-8 flex items-center justify-center rounded-xl text-xs font-black transition-all ${
                  currentPage === p
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
      )}

    </div>
  )
}
