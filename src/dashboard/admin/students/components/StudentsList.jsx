import { useState, useMemo } from 'react'
import { Plus, Search, Pencil, Trash2, CheckCircle2, XCircle, Users, Calendar, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import useDebounce from '@/shared/hooks/useDebounce'

export default function StudentsList({
  students,
  isRtl,
  t,
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
  const itemsPerPage = 20

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

  const metrics = useMemo(() => {
    const total = students.length
    const active = students.filter((s) => s.active === true || String(s.active) === 'true').length
    const inactive = students.filter((s) => s.active === false || String(s.active) === 'false').length
    return { total, active, inactive }
  }, [students])

  const effectiveTotalPages = totalPages && totalPages > 0 ? totalPages : 1
  const isPaginationDimmed = effectiveTotalPages <= 1
  const totalCount = filteredStudents.length
  const startIdx = totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0
  const endIdx = totalCount > 0 ? Math.min(currentPage * itemsPerPage, totalCount) : 0

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.totalStudents', 'إجمالي الطلاب')}
            </span>
            <span className="text-3xl font-extrabold text-slate-700 dark:text-slate-205 block">
              {metrics.total}
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-2xl text-slate-700 dark:text-slate-300">
            <Users size={24} />
          </div>
        </div>

        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.activeStudents', 'طالب نشط')}
            </span>
            <span className="text-3xl font-extrabold text-emerald-650 dark:text-emerald-450 block">
              {metrics.active}
            </span>
          </div>
          <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
        </div>

        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.inactiveStudents', 'طالب غير نشط')}
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

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenAddScreen}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.students.addStudent', 'إضافة طالب')}</span>
          </button>

          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {t('adminDashboard.students.registeredList', 'قائمة الطلاب المسجلين في المنصة')}
          </span>
        </div>

        <div className="relative w-full md:w-72">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-450`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('adminDashboard.students.searchPlaceholder', 'بحث بالاسم، الإيميل، الهاتف...')}
            value={searchVal}
            onChange={(e) => { setSearchVal(e.target.value); onPageChange(1) }}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm placeholder-slate-400`}
          />
        </div>

      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-950/20">
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.student', 'الطالب')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.contact', 'معلومات التواصل')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.country', 'الدولة')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.createdAt', 'تاريخ التسجيل')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.status', 'الحالة')}</th>
                <th className="py-4 px-6 text-center">{t('adminDashboard.students.table.actions', 'الإجراءات')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-400 dark:text-slate-500 font-bold">
                    {t('adminDashboard.students.noStudents', 'لا يوجد طلاب يطابقون بحثك')}
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
                    statusText = t('adminDashboard.students.status.active', 'نشط')
                  } else {
                    statusBadgeClass = 'bg-rose-50 text-rose-700 dark:bg-rose-955/15 dark:text-rose-400'
                    statusDotClass = 'bg-rose-600'
                    statusText = t('adminDashboard.students.status.inactive', 'غير نشط')
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
                            title={t('adminDashboard.students.actions.view', 'عرض')}
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => onOpenEditScreen(student)}
                            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-xl transition-all cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                            title={t('adminDashboard.students.actions.edit', 'تعديل البيانات')}
                          >
                            <Pencil size={15} />
                          </button>

                          <button
                            type="button"
                            onClick={() => onDelete(student)}
                            className="p-2 hover:bg-rose-50 dark:hover:bg-rose-955/20 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-xl transition-all cursor-pointer border border-transparent hover:border-rose-100/10"
                            title={t('adminDashboard.students.actions.delete', 'حذف الطالب')}
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

        {/* Pagination — always visible, dimmed when only 1 page */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl transition-opacity duration-300 ${isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''}`}
        >
          <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            {isRtl ? (
              <>
                {t('adminDashboard.students.pagination.showing', 'عرض')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.students.pagination.to', 'إلى')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.students.pagination.of', 'من أصل')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
                {t('adminDashboard.students.pagination.students', 'طلاب')}
              </>
            ) : (
              <>
                {t('adminDashboard.students.pagination.showing', 'Showing')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.students.pagination.to', 'to')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.students.pagination.of', 'of')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
                {t('adminDashboard.students.pagination.students', 'students')}
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1 || isPaginationDimmed}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isRtl ? <ChevronRight size={16} aria-hidden="true" /> : <ChevronLeft size={16} aria-hidden="true" />}
            </button>

            <span className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 min-w-[80px] text-center">
              {currentPage} / {effectiveTotalPages}
            </span>

            <button
              type="button"
              onClick={() => onPageChange(Math.min(currentPage + 1, effectiveTotalPages))}
              disabled={currentPage === effectiveTotalPages || isPaginationDimmed}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isRtl ? <ChevronLeft size={16} aria-hidden="true" /> : <ChevronRight size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}