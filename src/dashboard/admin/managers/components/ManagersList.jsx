import { useState, useMemo, useEffect } from 'react'
import {
  Search,
  Plus,
  Shield,
  CheckCircle2,
  Ban,
  X,
  Trash2,
  BookOpen,
  Pencil,
  Lock,
} from 'lucide-react'

export default function ManagersList({
  supervisors,
  isRtl,
  t,
  onToggleStatus,
  onDelete,
  onOpenAddScreen,
  onOpenEditScreen,
  onOpenRolePermissions
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Reset page to 1 when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  // Dynamic calculations for Metric Cards (based on whole list)
  const metrics = useMemo(() => {
    const total = supervisors.length
    const active = supervisors.filter((s) => s.status === 'Active').length
    const suspended = supervisors.filter((s) => s.status === 'Suspended').length
    return { total, active, suspended }
  }, [supervisors])

  // Filtered supervisors list based on search query
  const filteredSupervisors = useMemo(() => {
    if (!searchQuery.trim()) return supervisors
    const query = searchQuery.toLowerCase()
    return supervisors.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query) ||
        s.role.toLowerCase().includes(query)
    )
  }, [supervisors, searchQuery])

  // Sliced items for Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = useMemo(() => {
    return filteredSupervisors.slice(indexOfFirstItem, indexOfLastItem)
  }, [filteredSupervisors, indexOfFirstItem, indexOfLastItem])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredSupervisors.length / itemsPerPage)
  }, [filteredSupervisors])

  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Supervisors Card */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800/60 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/30 dark:text-brand-400">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                {t('adminDashboard.managers.total', 'إجمالي المشرفين')}
              </p>
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-800 dark:text-white">
              {metrics.total}
            </span>
          </div>
        </div>

        {/* Active Supervisors Card */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800/60 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                {t('adminDashboard.managers.active', 'مشرف نشط')}
              </p>
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-800 dark:text-white">
              {metrics.active}
            </span>
          </div>
        </div>

        {/* Suspended Supervisors Card */}
        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800/60 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
              <Ban size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                {t('adminDashboard.managers.suspended', 'مشرف موقوف')}
              </p>
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-800 dark:text-white">
              {metrics.suspended}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpenAddScreen()}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98]"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.managers.add', 'إضافة مشرف')}</span>
          </button>

          <button
            onClick={() => {
              if (supervisors.length > 0) {
                onOpenRolePermissions(supervisors[0].role)
              } else {
                onOpenRolePermissions('مشرف عام')
              }
            }}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#d3eee7] dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 hover:bg-brand-100 text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <Lock size={16} />
            <span>{t('adminDashboard.managers.editPermissions', 'تعديل الأذونات')}</span>
          </button>

          <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-medium">
            {t('adminDashboard.managers.totalInPlatform', { count: filteredSupervisors.length }, `إجمالي ${filteredSupervisors.length} مشرف في المنصة`)}
          </span>
        </div>

        {/* Search on the left (RTL) / right (LTR) */}
        <div className="relative w-full md:w-80">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-400`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('adminDashboard.managers.searchPlaceholder', 'بحث...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm placeholder-slate-400`}
          />
        </div>
      </div>

      {/* Supervisors Table Container */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-start text-sm">
            <thead className="bg-slate-50/75 text-slate-500 dark:bg-slate-950/40 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.managers.name', 'اسم المشرف')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.managers.role', 'الصلاحيات')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.managers.email', 'الحصص المتبقية')}</th>
                <th className="px-6 py-4 font-semibold text-center">{t('adminDashboard.managers.status', 'الحالة')}</th>
                <th className="px-6 py-4 font-semibold text-center">{t('adminDashboard.managers.actions', 'الإجراءات')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-slate-400 dark:text-slate-500 font-medium">
                    {isRtl ? 'لا يوجد مشرفين يطابقون بحثك' : 'No supervisors found matching your search'}
                  </td>
                </tr>
              ) : (
                currentItems.map((supervisor) => {
                  const initial = supervisor.name.trim().charAt(0)
                  return (
                    <tr
                      key={supervisor.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors"
                    >
                      {/* Name with Avatar */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 font-bold text-sm">
                            {initial}
                          </div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {supervisor.name}
                          </span>
                        </div>
                      </td>

                      {/* Role (الصلاحيات) - Styled Pill */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-4 py-1.5 rounded-full bg-brand-50/70 text-brand-600 dark:bg-brand-950/30 dark:text-brand-400 text-xs font-semibold">
                          {supervisor.role}
                        </span>
                      </td>

                      {/* Email (labeled under 'الحصص المتبقية' header) */}
                      <td className="px-6 py-4 whitespace-nowrap text-emerald-600 dark:text-emerald-400 font-medium">
                        {supervisor.email}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          onClick={() => onToggleStatus(supervisor.id)}
                          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer select-none ${supervisor.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 hover:bg-emerald-100'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-200'
                            }`}
                        >
                          <span className={`me-1.5 h-1.5 w-1.5 rounded-full ${supervisor.status === 'Active' ? 'bg-emerald-600' : 'bg-slate-400'}`} />
                          {supervisor.status === 'Active'
                            ? t('adminDashboard.managers.statusActive', 'نشط')
                            : t('adminDashboard.managers.statusSuspended', 'غير نشط')}
                        </span>
                      </td>

                      {/* Actions (Trash, Book/Details, Edit/Pencil) in RTL Sequence */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-4">

                          {/* Trash Icon */}
                          <button
                            onClick={() => onDelete(supervisor.id)}
                            title={isRtl ? 'حذف المشرف' : 'Delete Supervisor'}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>

                          {/* Open Book Icon (Details / Permissions screen trigger) */}
                          <button
                            onClick={() => onOpenRolePermissions(supervisor.role)}
                            title={t('adminDashboard.managers.editPermissions', 'تعديل الأذونات')}
                            className="p-1 text-slate-400 hover:text-brand-600 transition-colors"
                          >
                            <BookOpen size={16} />
                          </button>

                          {/* Pencil/Edit Icon */}
                          <button
                            onClick={() => onOpenEditScreen(supervisor)}
                            title={isRtl ? 'تعديل المشرف' : 'Edit Supervisor'}
                            className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                          >
                            <Pencil size={16} />
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

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-850 rounded-b-3xl">
            <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
              {t('adminDashboard.managers.pagination.showing', 'عرض')} <span className="font-semibold text-slate-700 dark:text-slate-200">{indexOfFirstItem + 1}</span> {t('adminDashboard.managers.pagination.to', 'إلى')} <span className="font-semibold text-slate-700 dark:text-slate-200">{Math.min(indexOfLastItem, filteredSupervisors.length)}</span> {t('adminDashboard.managers.pagination.of', 'من أصل')} <span className="font-semibold text-slate-700 dark:text-slate-200">{filteredSupervisors.length}</span> {t('adminDashboard.managers.pagination.supervisors', 'مشرف')}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {t('adminDashboard.managers.pagination.previous', 'السابق')}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`h-9 w-9 flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all ${currentPage === p
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {t('adminDashboard.managers.pagination.next', 'التالي')}
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
