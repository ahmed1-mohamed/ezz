import { useState, useMemo } from 'react'
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  CheckCircle2,
  XCircle,
  Users,
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight,
  Star,
  Layers,
  UserCheck
} from 'lucide-react'
import useDebounce from '@/shared/hooks/useDebounce'

export default function StudentsList({
  students = [],
  statistics = { total: 0, active: 0, stopped: 0 },
  activeStatus = 'all',
  onStatusChange,
  isRtl,
  t,
  onOpenAddScreen,
  onOpenEditScreen,
  onDelete,
  currentPage = 1,
  totalPages = 1,
  totalCount = 0,
  onPageChange,
  onOpenSessions,
  onOpenAddSessions
}) {
  const [searchVal, setSearchVal] = useState('')
  const debouncedQuery = useDebounce(searchVal, 300)
  const itemsPerPage = 10

  const filteredStudents = useMemo(() => {
    if (!debouncedQuery.trim()) return students
    const query = debouncedQuery.toLowerCase()
    return students.filter((student) => {
      const studentName = typeof student.name === 'string'
        ? student.name
        : (student.name?.ar || student.name?.en || '')
      const rawParent = student.parent?.name || student.parentName || ''
      const parentName = typeof rawParent === 'string'
        ? rawParent
        : (typeof rawParent === 'object' && rawParent !== null ? (rawParent.ar || rawParent.en || '') : '')
      const rawCountry = student.country || ''
      const countryStr = typeof rawCountry === 'string'
        ? rawCountry
        : (typeof rawCountry === 'object' && rawCountry !== null ? (rawCountry.name || rawCountry.code || '') : '')
      const emailStr = String(student.email || '').toLowerCase()
      const phoneStr = String(student.phone || '')

      return (
        studentName.toLowerCase().includes(query) ||
        emailStr.includes(query) ||
        phoneStr.includes(query) ||
        countryStr.toLowerCase().includes(query) ||
        parentName.toLowerCase().includes(query)
      )
    })
  }, [students, debouncedQuery])

  const effectiveTotalPages = totalPages && totalPages > 0 ? totalPages : 1
  const isPaginationDimmed = effectiveTotalPages <= 1
  const effectiveTotalCount = totalCount > 0 ? totalCount : filteredStudents.length
  const startIdx = effectiveTotalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0
  const endIdx = effectiveTotalCount > 0 ? Math.min(currentPage * itemsPerPage, effectiveTotalCount) : 0

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
       <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div
          onClick={() => onStatusChange && onStatusChange('all')}
          className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border transition-all cursor-pointer shadow-soft hover:-translate-y-1 ${
            activeStatus === 'all'
              ? 'border-[#005953] ring-2 ring-[#005953]/20 dark:border-emerald-500'
              : 'border-slate-100 dark:border-slate-800/60 hover:border-slate-300'
          }`}
        >
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.totalStudents', 'إجمالي الطلاب')}
            </span>
            <span className="text-3xl font-extrabold text-slate-800 dark:text-white block">
              {statistics.total ?? students.length}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              {activeStatus === 'all' ? (isRtl ? '● المعروض حالياً' : '● Currently selected') : (isRtl ? 'انقر للتصفية' : 'Click to filter')}
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-2xl text-slate-700 dark:text-slate-300">
            <Users size={24} />
          </div>
        </div>

         <div
          onClick={() => onStatusChange && onStatusChange('active')}
          className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border transition-all cursor-pointer shadow-soft hover:-translate-y-1 ${
            activeStatus === 'active'
              ? 'border-emerald-600 ring-2 ring-emerald-600/20 dark:border-emerald-400'
              : 'border-slate-100 dark:border-slate-800/60 hover:border-emerald-300'
          }`}
        >
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.activeStudents', 'طالب نشط')}
            </span>
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block">
              {statistics.active ?? 0}
            </span>
            <span className="text-[11px] font-semibold text-emerald-600/80 dark:text-emerald-400/80">
              {activeStatus === 'active' ? (isRtl ? '● المعروض حالياً' : '● Currently selected') : (isRtl ? 'انقر للتصفية' : 'Click to filter')}
            </span>
          </div>
          <div className="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
        </div>

         <div
          onClick={() => onStatusChange && onStatusChange('stopped')}
          className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border transition-all cursor-pointer shadow-soft hover:-translate-y-1 ${
            activeStatus === 'stopped'
              ? 'border-rose-600 ring-2 ring-rose-600/20 dark:border-rose-400'
              : 'border-slate-100 dark:border-slate-800/60 hover:border-rose-300'
          }`}
        >
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.inactiveStudents', 'طالب متوقف')}
            </span>
            <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 block">
              {statistics.stopped ?? 0}
            </span>
            <span className="text-[11px] font-semibold text-rose-600/80 dark:text-rose-400/80">
              {activeStatus === 'stopped' ? (isRtl ? '● المعروض حالياً' : '● Currently selected') : (isRtl ? 'انقر للتصفية' : 'Click to filter')}
            </span>
          </div>
          <div className="p-3.5 bg-rose-50/70 dark:bg-rose-955/20 rounded-2xl text-rose-600 dark:text-rose-400">
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

        <div className="relative w-full md:w-80">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-400`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('adminDashboard.students.searchPlaceholder', 'بحث بالاسم، الإيميل، الهاتف، ولي الأمر...')}
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value)
              onPageChange(1)
            }}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${
              isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'
            } outline-none transition-all text-sm placeholder-slate-400`}
          />
        </div>
      </div>

       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-950/20">
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.student', 'الطالب والمستوى')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.parent', 'ولي الأمر')}</th>
                <th className="py-4 px-6 text-center">{t('adminDashboard.students.table.sessionsBalance', 'رصيد الحصص')}</th>
                <th className="py-4 px-6 text-center">{t('adminDashboard.students.table.performance', 'التقييم والحضور')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.country', 'الدولة والتواصل')}</th>
                <th className="py-4 px-6 text-start">{t('adminDashboard.students.table.status', 'الحالة')}</th>
                <th className="py-4 px-6 text-center">{t('adminDashboard.students.table.actions', 'الإجراءات')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 dark:text-slate-500 font-bold">
                    {t('adminDashboard.students.noStudents', 'لا يوجد طلاب يطابقون بحثك')}
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student, index) => {
                  const studentId = student.student_id || student._id || student.id || student.user_id
                  const displayName = typeof student.name === 'string'
                    ? student.name
                    : (student.name?.ar || student.name?.en || '-')
                  const initial = (displayName === '-' ? '?' : displayName).trim().charAt(0)
                  const imgUrl = student.image || student.profileImage

                  // Safely extract level name as string
                  const rawLevel = student.studentLevel?.name || student.levelName || student.level || ''
                  const levelName = typeof rawLevel === 'object' && rawLevel !== null
                    ? (rawLevel.ar || rawLevel.en || '')
                    : String(rawLevel || '')

                  // Safely extract parent name as string
                  const rawParent = student.parent?.name || student.parentName || '-'
                  const parentName = typeof rawParent === 'object' && rawParent !== null
                    ? (rawParent.ar || rawParent.en || '-')
                    : String(rawParent || '-')
                  const parentPhone = student.parent?.phone || student.parentPhone || ''

                  // Safely extract sessions balance as number (handles backend object { total, used, manualAddedThisMonth, lastManualAddMonth })
                  const rawBalance = student.sessionsBalance ?? student.remainingSessions ?? 0
                  const balance = typeof rawBalance === 'object' && rawBalance !== null
                    ? (rawBalance.remaining !== undefined
                        ? Number(rawBalance.remaining)
                        : Math.max(0, Number(rawBalance.total ?? 0) - Number(rawBalance.used ?? 0)))
                    : Number(rawBalance || 0)

                  // Safely extract country as string
                  const rawCountry = student.country || '-'
                  const countryDisplay = typeof rawCountry === 'object' && rawCountry !== null
                    ? (rawCountry.name?.ar || rawCountry.name?.en || rawCountry.name || rawCountry.code || '-')
                    : String(rawCountry || '-')

                  const rating = student.averageRating !== undefined && student.averageRating !== null
                    ? Number(student.averageRating).toFixed(1)
                    : null
                  const attendance = student.attendanceRate !== undefined && student.attendanceRate !== null
                    ? `${Number(student.attendanceRate).toFixed(0)}%`
                    : null

                  const isActive = student.active === true || String(student.active) === 'true'
                  const statusBadgeClass = isActive
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-955/15 dark:text-emerald-400'
                    : 'bg-rose-50 text-rose-700 dark:bg-rose-955/15 dark:text-rose-400'
                  const statusDotClass = isActive ? 'bg-emerald-600' : 'bg-rose-600'
                  const statusText = isActive
                    ? t('adminDashboard.students.status.active', 'نشط')
                    : t('adminDashboard.students.status.inactive', 'متوقف')

                  return (
                    <tr
                      key={studentId || `student-${index}`}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-950/10 transition-colors"
                    >
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
                            <span
                              onClick={() => onOpenSessions && onOpenSessions(student)}
                              className="font-bold text-slate-800 dark:text-white block hover:text-[#005953] transition-colors cursor-pointer"
                            >
                              {displayName}
                            </span>
                            {levelName && (
                              <span className="inline-block text-[11px] font-semibold text-[#005953] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
                                {levelName}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                       <td className="py-4.5 px-6 text-start">
                        <div className="space-y-0.5">
                          <span className="font-bold text-xs text-slate-700 dark:text-slate-200 block">
                            {parentName}
                          </span>
                          {parentPhone && (
                            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block" dir="ltr">
                              {parentPhone}
                            </span>
                          )}
                        </div>
                      </td>

                       <td className="py-4.5 px-6 text-center">
                        <div className="inline-flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-xl text-xs font-extrabold ${
                            balance > 0
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                              : 'bg-rose-50 text-rose-700 dark:bg-rose-955/20 dark:text-rose-400'
                          }`}>
                            {balance} {isRtl ? 'حصة' : 'sessions'}
                          </span>
                          {onOpenAddSessions && (
                            <button
                              type="button"
                              onClick={() => onOpenAddSessions(student)}
                              className="p-1.5 rounded-lg bg-[#005953]/10 hover:bg-[#005953] text-[#005953] hover:text-white transition-all cursor-pointer"
                              title={isRtl ? 'إضافة حصص' : 'Add Sessions'}
                            >
                              <Plus size={14} />
                            </button>
                          )}
                        </div>
                      </td>

                       <td className="py-4.5 px-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                          {rating && (
                            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                              <Star size={14} className="fill-amber-400 text-amber-400" />
                              <span>{rating}</span>
                            </div>
                          )}
                          {attendance && (
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                              {attendance}
                            </span>
                          )}
                          {!rating && !attendance && (
                            <span className="text-xs text-slate-400">-</span>
                          )}
                        </div>
                      </td>

                       <td className="py-4.5 px-6 text-start">
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                            {countryDisplay}
                          </span>
                          {student.phone && (
                            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block" dir="ltr">
                              {student.phone}
                            </span>
                          )}
                        </div>
                      </td>

                       <td className="py-4.5 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${statusBadgeClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${statusDotClass}`} />
                          {statusText}
                        </span>
                      </td>

                       <td className="py-4.5 px-6">
                        <div className="flex items-center justify-center gap-1.5">
                           <button
                            type="button"
                            onClick={() => onOpenSessions && onOpenSessions(student)}
                            className="p-2 bg-slate-50 hover:bg-brand-50 text-slate-500 hover:text-brand-600 rounded-xl transition-colors dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-brand-500/20 dark:hover:text-brand-400 cursor-pointer"
                            title={t('adminDashboard.students.actions.view', 'عرض الملف')}
                          >
                            <Eye size={16} />
                          </button>

                           {onOpenAddSessions && (
                            <button
                              type="button"
                              onClick={() => onOpenAddSessions(student)}
                              className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 dark:text-emerald-400 rounded-xl transition-colors cursor-pointer"
                              title={isRtl ? 'إضافة حصص' : 'Add Sessions'}
                            >
                              <Layers size={16} />
                            </button>
                          )}

                           <button
                            type="button"
                            onClick={() => onOpenEditScreen(student)}
                            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-xl transition-all cursor-pointer"
                            title={t('adminDashboard.students.actions.edit', 'تعديل البيانات')}
                          >
                            <Pencil size={15} />
                          </button>

                           <button
                            type="button"
                            onClick={() => onDelete(student)}
                            className="p-2 hover:bg-rose-50 dark:hover:bg-rose-955/20 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-xl transition-all cursor-pointer"
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

         <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl transition-opacity duration-300 ${
            isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''
          }`}
        >
          <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            {isRtl ? (
              <>
                {t('adminDashboard.students.pagination.showing', 'عرض')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.students.pagination.to', 'إلى')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.students.pagination.of', 'من أصل')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{effectiveTotalCount}</span>{' '}
                {t('adminDashboard.students.pagination.students', 'طلاب')}
              </>
            ) : (
              <>
                {t('adminDashboard.students.pagination.showing', 'Showing')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.students.pagination.to', 'to')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.students.pagination.of', 'of')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{effectiveTotalCount}</span>{' '}
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