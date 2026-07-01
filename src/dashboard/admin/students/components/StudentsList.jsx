import { useState, useMemo } from 'react'
import { Plus, Search, Pencil, Trash2, CheckCircle2, XCircle, Users, Calendar, Eye } from 'lucide-react'
import useDebounce from '@/shared/hooks/useDebounce'

export default function StudentsList({
  students,
  isRtl,
  onOpenAddScreen,
  onOpenEditScreen,
  onDelete,
  currentPage,
  totalPages,
  onPageChange,
  onOpenSessions
}) {
  const [searchVal, setSearchVal] = useState('')
  const debouncedQuery = useDebounce(searchVal, 300)

  // Filter list based on search
  const filteredStudents = useMemo(() => {
    if (!debouncedQuery.trim()) return students
    const query = debouncedQuery.toLowerCase()
    return students.filter(
      (student) => {
        const studentName = typeof student.name === 'string' ? student.name : (student.name?.ar || student.name?.en || '');
        return (studentName.toLowerCase().includes(query)) ||
          (student.email && student.email.toLowerCase().includes(query)) ||
          (student.phone && student.phone.includes(query)) ||
          (student.country && student.country.includes(query))
      }
    )
  }, [students, debouncedQuery])

  const currentItems = filteredStudents

  // Calculate metrics dynamically based on total students list
  const metrics = useMemo(() => {
    const total = students.length
    const active = students.filter((s) => s.active === true || String(s.active) === 'true').length
    const inactive = students.filter((s) => s.active === false || String(s.active) === 'false').length
    return { total, active, inactive }
  }, [students])

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* 1. Metrics Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

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
            <Users size={24} />
          </div>
        </div>

        {/* Active Students */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'طالب نشط' : 'Active Students'}
            </span>
            <span className="text-3xl font-extrabold text-emerald-650 dark:text-emerald-450 block">
              {metrics.active}
            </span>
          </div>
          <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
        </div>

        {/* Inactive Students */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'طالب غير نشط' : 'Inactive Students'}
            </span>
            <span className="text-3xl font-extrabold text-rose-650 dark:text-rose-450 block">
              {metrics.inactive}
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
            placeholder={isRtl ? 'بحث بالاسم، الإيميل، الهاتف...' : 'Search...'}
            value={searchVal}
            onChange={(e) => { setSearchVal(e.target.value); onPageChange(1) }}
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
                <th className="py-4 px-6 text-start">{isRtl ? 'الطالب' : 'Student'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'معلومات التواصل' : 'Contact Info'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'الدولة' : 'Country'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'تاريخ التسجيل' : 'Created At'}</th>
                <th className="py-4 px-6 text-start">{isRtl ? 'الحالة' : 'Status'}</th>
                <th className="py-4 px-6 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-400 dark:text-slate-500 font-bold">
                    {isRtl ? 'لا يوجد طلاب يطابقون بحثك' : 'No students found matching your search'}
                  </td>
                </tr>
              ) : (
                currentItems.map((student, index) => {
                  const studentId = student._id || student.id || student.userId || student.studentId;
                  const displayName = typeof student.name === 'string' ? student.name : (student.name?.ar || student.name?.en || '-');
                  const initial = (displayName === '-' ? '?' : displayName).trim().charAt(0)
                  const imgUrl = student.image || student.profileImage;

                  let statusBadgeClass
                  let statusDotClass
                  let statusText

                  if (student.active === true || String(student.active) === 'true') {
                    statusBadgeClass = 'bg-emerald-50 text-emerald-700 dark:bg-emerald-955/15 dark:text-emerald-400'
                    statusDotClass = 'bg-emerald-600'
                    statusText = isRtl ? 'نشط' : 'Active'
                  } else {
                    statusBadgeClass = 'bg-rose-50 text-rose-700 dark:bg-rose-955/15 dark:text-rose-400'
                    statusDotClass = 'bg-rose-600'
                    statusText = isRtl ? 'غير نشط' : 'Inactive'
                  }

                  const createdDate = student.createdAt ? new Date(student.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }) : '-';

                  return (
                    <tr key={studentId || `student-${index}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/10 transition-colors">

                      <td className="py-4.5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center font-bold text-base shrink-0 overflow-hidden">
                            {imgUrl ? (
                              <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-xl" />
                            ) : (
                              initial
                            )}
                          </div>
                          <div className="space-y-0.5 text-start">
                            <span className="font-bold text-slate-800 dark:text-white block hover:text-[#005953] transition-colors">
                              {displayName}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4.5 px-6">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block" dir="ltr" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                            {student.phone || '-'}
                          </span>
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 block">
                            {student.email || '-'}
                          </span>
                        </div>
                      </td>

                      <td className="py-4.5 px-6 text-start">
                        <span className="font-bold text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700 text-xs">
                          {student.country || '-'}
                        </span>
                      </td>

                      <td className="py-4.5 px-6 text-start">
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Calendar size={14} />
                          <span className="text-xs font-bold">
                            {createdDate}
                          </span>
                        </div>
                      </td>

                      <td className="py-4.5 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${statusBadgeClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${statusDotClass}`} />
                          {statusText}
                        </span>
                      </td>

                      <td className="py-4.5 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => onOpenSessions(student)}
                            className="p-2 bg-slate-50 hover:bg-brand-50 text-slate-500 hover:text-brand-600 rounded-xl transition-colors dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-brand-500/20 dark:hover:text-brand-400"
                            title={isRtl ? 'عرض' : 'View'}
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => onOpenEditScreen(student)}
                            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-xl transition-all cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                            title={isRtl ? 'تعديل البيانات' : 'Edit details'}
                          >
                            <Pencil size={15} />
                          </button>

                          <button
                            type="button"
                            onClick={() => onDelete(student)}
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
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                {isRtl ? 'السابق' : 'Previous'}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  className={`h-8 w-8 flex items-center justify-center rounded-xl text-xs font-black transition-all ${currentPage === p
                    ? 'bg-[#005953] text-white shadow-md shadow-[#005953]/20'
                    : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
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