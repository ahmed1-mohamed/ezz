import { useState, useMemo } from 'react'
import { Plus, Search, Pencil, Trash2, BookOpen, GraduationCap, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import useDebounce from '@/shared/hooks/useDebounce'

export default function StudentsList({
  students,
  isRtl,
  onOpenAddScreen,
  onOpenEditScreen,
  onOpenSessions,
  onDelete
}) {
  const [searchVal, setSearchVal] = useState('')
  const debouncedQuery = useDebounce(searchVal, 300)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  // Filter list based on search
  const filteredStudents = useMemo(() => {
    if (!debouncedQuery.trim()) return students
    const query = debouncedQuery.toLowerCase()
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        (student.nameEn && student.nameEn.toLowerCase().includes(query)) ||
        (student.parentName && student.parentName.toLowerCase().includes(query)) ||
        (student.groupName && student.groupName.toLowerCase().includes(query))
    )
  }, [students, debouncedQuery])

  // Pagination slicing
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = useMemo(() => {
    return filteredStudents.slice(indexOfFirstItem, indexOfLastItem)
  }, [filteredStudents, indexOfFirstItem, indexOfLastItem])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredStudents.length / itemsPerPage)
  }, [filteredStudents])

  // Calculate metrics dynamically based on total students list
  const metrics = useMemo(() => {
    const total = students.length
    const active = students.filter((s) => s.subscriptionStatus === 'Active').length
    const expiring = students.filter((s) => s.subscriptionStatus === 'Expiring').length
    const expired = students.filter((s) => s.subscriptionStatus === 'Expired').length
    return { total, active, expiring, expired }
  }, [students])

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Metrics Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Total Students */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'إجمالي الطلاب' : 'Total Students'}
            </span>
            <span className="text-3xl font-extrabold text-slate-700 dark:text-slate-205 block">
              {metrics.total}
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-2xl text-slate-700 dark:text-slate-300">
            <GraduationCap size={24} />
          </div>
        </div>

        {/* Active Subscription */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'اشتراك فعال' : 'Active Subscription'}
            </span>
            <span className="text-3xl font-extrabold text-emerald-650 dark:text-emerald-450 block">
              {metrics.active}
            </span>
          </div>
          <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
        </div>

        {/* Expiring Soon */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'ينتهي قريباً' : 'Expiring Soon'}
            </span>
            <span className="text-3xl font-extrabold text-amber-500 dark:text-amber-400 block">
              {metrics.expiring}
            </span>
          </div>
          <div className="p-3.5 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl text-amber-500 dark:text-amber-400">
            <AlertTriangle size={24} />
          </div>
        </div>

        {/* Expired Subscription */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'اشتراك منتهي' : 'Expired Subscription'}
            </span>
            <span className="text-3xl font-extrabold text-rose-650 dark:text-rose-450 block">
              {metrics.expired}
            </span>
          </div>
          <div className="p-3.5 bg-rose-50/50 dark:bg-rose-955/20 rounded-2xl text-rose-600 dark:text-rose-400">
            <XCircle size={24} />
          </div>
        </div>

      </div>

      {/* 2. Control bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        
        {/* Actions & Text */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenAddScreen}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={18} />
            <span>{isRtl ? 'إضافة طالب' : 'Add Student'}</span>
          </button>

          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'قائمة الطلاب المسجلين في المنصة' : 'Registered Students List'}
          </span>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-450`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={isRtl ? 'بحث...' : 'Search...'}
            value={searchVal}
            onChange={(e) => { setSearchVal(e.target.value); setCurrentPage(1) }}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm placeholder-slate-400`}
          />
        </div>

      </div>

      {/* 3. Students Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-950/20">
                <th className="py-4 px-6 text-start">{isRtl ? 'الطلاب' : 'Student'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'المستوى' : 'Level'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'المجموعة' : 'Group'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'ولي الأمر' : 'Parent'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'الحصص المتبقية' : 'Remaining Sessions'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'الاشتراك' : 'Subscription'}</th>
                <th className="py-4 px-6 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-400 dark:text-slate-500 font-bold">
                    {isRtl ? 'لا يوجد طلاب يطابقون بحثك' : 'No students found matching your search'}
                  </td>
                </tr>
              ) : (
                currentItems.map((student) => {
                  const initial = student.name.trim().charAt(0)
                  
                  // Level Badge Colors
                  let levelBadgeClass
                  if (student.level === 'مبتدئ' || student.level === 'Beginner') {
                    levelBadgeClass = 'bg-amber-50 text-amber-700 dark:bg-amber-955/20 dark:text-amber-400'
                  } else if (student.level === 'متوسط' || student.level === 'Intermediate') {
                    levelBadgeClass = 'bg-blue-50 text-blue-700 dark:bg-blue-955/20 dark:text-blue-400'
                  } else {
                    levelBadgeClass = 'bg-emerald-50 text-emerald-700 dark:bg-emerald-955/20 dark:text-emerald-400'
                  }

                  // Subscription Badge Colors
                  let statusBadgeClass
                  let statusDotClass
                  let statusText
                  if (student.subscriptionStatus === 'Active') {
                    statusBadgeClass = 'bg-emerald-50 text-emerald-700 dark:bg-emerald-955/15 dark:text-emerald-400'
                    statusDotClass = 'bg-emerald-600'
                    statusText = isRtl ? 'فعال' : 'Active'
                  } else if (student.subscriptionStatus === 'Expiring') {
                    statusBadgeClass = 'bg-amber-50 text-amber-700 dark:bg-amber-955/15 dark:text-amber-400'
                    statusDotClass = 'bg-amber-500'
                    statusText = isRtl ? 'ينتهي قريباً' : 'Expiring'
                  } else {
                    statusBadgeClass = 'bg-rose-50 text-rose-700 dark:bg-rose-955/15 dark:text-rose-400'
                    statusDotClass = 'bg-rose-600'
                    statusText = isRtl ? 'منتهي' : 'Expired'
                  }

                  // Progress Bar percentage
                  const progressPct = Math.min(100, Math.max(0, (student.remainingSessions / (student.totalSessions || 12)) * 100))

                  return (
                    <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/10 transition-colors">
                      
                      {/* 1. Student Avatar & Name */}
                      <td className="py-4.5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center font-bold text-base shrink-0">
                            {student.profileImage ? (
                              <img src={student.profileImage} alt="" className="w-full h-full object-cover rounded-xl" />
                            ) : (
                              initial
                            )}
                          </div>
                          <div className="space-y-0.5 text-start">
                            <span className="font-bold text-slate-800 dark:text-white block hover:text-[#005953] transition-colors">
                              {student.name}
                            </span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold block">
                              {isRtl ? `العمر: ${student.age} سنة` : `Age: ${student.age} years`}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* 2. Level */}
                      <td className="py-4.5 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-bold ${levelBadgeClass}`}>
                          {student.level}
                        </span>
                      </td>

                      {/* 3. Group */}
                      <td className="py-4.5 px-6 text-start">
                        <span className="font-bold text-slate-600 dark:text-slate-350">
                          {student.groupName || '-'}
                        </span>
                      </td>

                      {/* 4. Parent */}
                      <td className="py-4.5 px-6 text-start">
                        <span className="font-bold text-slate-605 dark:text-slate-350">
                          {student.parentName || '-'}
                        </span>
                      </td>

                      {/* 5. Remaining Sessions Progress Bar */}
                      <td className="py-4.5 px-6">
                        <div className="flex items-center gap-3" dir="ltr">
                          <span className="text-xs font-black text-slate-700 dark:text-slate-205 w-4 text-right">
                            {student.remainingSessions}
                          </span>
                          <div className="w-20 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
                            <div
                              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* 6. Subscription */}
                      <td className="py-4.5 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${statusBadgeClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${statusDotClass}`} />
                          {statusText}
                        </span>
                      </td>

                      {/* 7. Action buttons */}
                      <td className="py-4.5 px-6">
                        <div className="flex items-center justify-center gap-2">
                          
                          {/* Edit */}
                          <button
                            type="button"
                            onClick={() => onOpenEditScreen(student)}
                            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-xl transition-all cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                            title={isRtl ? 'تعديل البيانات' : 'Edit details'}
                          >
                            <Pencil size={15} />
                          </button>

                          {/* View Log/Sessions */}
                          <button
                            type="button"
                            onClick={() => onOpenSessions(student)}
                            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-[#005953] rounded-xl transition-all cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                            title={isRtl ? 'عرض الحصص والمراجعة' : 'View session log'}
                          >
                            <BookOpen size={15} />
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(isRtl ? 'هل أنت متأكد من حذف هذا الطالب؟' : 'Are you sure you want to delete this student?')) {
                                onDelete(student.id)
                              }
                            }}
                            className="p-2 hover:bg-rose-50 dark:hover:bg-rose-955/20 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-xl transition-all cursor-pointer border border-transparent hover:border-rose-100/10"
                            title={isRtl ? 'حذف الطالب' : 'Delete student'}
                          >
                            <Trash2 size={15} />
                          </button>

                        </div>
                      </td>

                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* 4. Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/60">
            <div className="text-xs text-slate-400 dark:text-slate-500 font-bold">
              {isRtl ? 'عرض' : 'Showing'}{' '}
              <span className="font-extrabold text-slate-700 dark:text-slate-200">
                {indexOfFirstItem + 1}
              </span>{' '}
              {isRtl ? 'إلى' : 'to'}{' '}
              <span className="font-extrabold text-slate-700 dark:text-slate-200">
                {Math.min(indexOfLastItem, filteredStudents.length)}
              </span>{' '}
              {isRtl ? 'من أصل' : 'of'}{' '}
              <span className="font-extrabold text-slate-700 dark:text-slate-200">
                {filteredStudents.length}
              </span>{' '}
              {isRtl ? 'طلاب' : 'students'}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                {isRtl ? 'السابق' : 'Previous'}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`h-8 w-8 flex items-center justify-center rounded-xl text-xs font-black transition-all ${
                    currentPage === p
                      ? 'bg-[#005953] text-white shadow-md shadow-[#005953]/20'
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
                {isRtl ? 'التالي' : 'Next'}
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
