import { useMemo } from 'react'
import {
  Search,
  Plus,
  Shield,
  CheckCircle2,
  Ban,
  Trash2,
  BookOpen,
  Pencil,
  Lock,
} from 'lucide-react'

export default function ManagersList({
  supervisors,
  statistics,
  searchVal,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  currentPage,
  onPageChange,
  totalPages,
  isRtl,
  t,
  onToggleStatus,
  onDelete,
  onOpenAddScreen,
  onOpenEditScreen,
  onOpenRolePermissions
}) {
  const itemsPerPage = 5

  // Calculations for Metric Cards (based on statistics from API or supervisors list length)
  const metrics = useMemo(() => {
    if (statistics) {
      return {
        total: statistics.total ?? 0,
        active: statistics.active ?? 0,
        suspended: statistics.stopped ?? 0
      }
    }
    const total = supervisors.length
    const active = supervisors.filter((s) => s.status === 'Active' || s.active).length
    const suspended = supervisors.filter((s) => s.status === 'Suspended' || !s.active).length
    return { total, active, suspended }
  }, [supervisors, statistics])

  const currentItems = supervisors

  const totalCount = useMemo(() => {
    if (statistics) {
      if (statusFilter === 'active') return statistics.active ?? 0
      if (statusFilter === 'stopped') return statistics.stopped ?? 0
      return statistics.total ?? 0
    }
    return supervisors.length
  }, [supervisors.length, statistics, statusFilter])

  const startIdx = totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0
  const endIdx = totalCount > 0 ? Math.min(currentPage * itemsPerPage, totalCount) : 0

  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Supervisors Card */}
        <div
          onClick={() => onStatusFilterChange('all')}
          className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-soft border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${statusFilter === 'all'
              ? 'border-brand-500 ring-2 ring-brand-500/10 -translate-y-1'
              : 'border-slate-100 dark:border-slate-800/60'
            }`}
        >
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
        <div
          onClick={() => onStatusFilterChange('active')}
          className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-soft border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${statusFilter === 'active'
              ? 'border-emerald-500 ring-2 ring-emerald-500/10 -translate-y-1'
              : 'border-slate-100 dark:border-slate-800/60'
            }`}
        >
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
        <div
          onClick={() => onStatusFilterChange('stopped')}
          className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-soft border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${statusFilter === 'stopped'
              ? 'border-rose-500 ring-2 ring-rose-500/10 -translate-y-1'
              : 'border-slate-100 dark:border-slate-800/60'
            }`}
        >
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
            {t('adminDashboard.managers.totalInPlatform', { count: totalCount }, `إجمالي ${totalCount} مشرف في المنصة`)}
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
            value={searchVal}
            onChange={(e) => onSearchChange(e.target.value)}
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
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.managers.name', 'الاسم')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.managers.role', 'الصلاحيات')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.managers.email', 'البريد الإلكتروني')}</th>
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
                currentItems.map((supervisor, index) => {
                  const sName = typeof supervisor.name === 'object' ? (supervisor.name.ar || supervisor.name.en || '') : (supervisor.name || '');
                  const initial = sName.trim().charAt(0) || 'م';
                  const avatarUrl = supervisor.image || supervisor.photoUrl;
                  
                  let displayRole = isRtl ? 'لا يوجد' : 'None';
                  if (supervisor.role) {
                    displayRole = typeof supervisor.role === 'object' ? (isRtl ? supervisor.role.ar || supervisor.role.en : supervisor.role.en || supervisor.role.ar) : supervisor.role;
                  } else if (supervisor.permissionName) {
                    displayRole = typeof supervisor.permissionName === 'object' ? (isRtl ? supervisor.permissionName.ar || supervisor.permissionName.en : supervisor.permissionName.en || supervisor.permissionName.ar) : supervisor.permissionName;
                  } else if (supervisor.permission) {
                    const permName = typeof supervisor.permission === 'object' ? supervisor.permission.name : supervisor.permission;
                    displayRole = typeof permName === 'object' ? (isRtl ? permName.ar || permName.en : permName.en || permName.ar) : permName;
                  }

                  const isActive = supervisor.user?.active !== undefined ? !!supervisor.user.active : (supervisor.active !== undefined ? !!supervisor.active : supervisor.status === 'Active');

                  return (
                    <tr
                      key={supervisor.admin_id || supervisor.id || supervisor._id || index}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors"
                    >
                      {/* Name with Avatar */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3 justify-start">
                          {avatarUrl ? (
                            <img
                              src={avatarUrl}
                              alt={sName}
                              className="h-9 w-9 shrink-0 rounded-full object-cover shadow-sm border border-slate-100 dark:border-slate-800"
                            />
                          ) : (
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 font-bold text-sm">
                              {initial}
                            </div>
                          )}
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {sName}
                          </span>
                        </div>
                      </td>

                      {/* Role (الصلاحيات) - Styled Pill */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-4 py-1.5 rounded-full bg-brand-50/70 text-brand-600 dark:bg-brand-950/30 dark:text-brand-400 text-xs font-semibold">
                          {displayRole}
                        </span>
                      </td>

                      {/* Email (labeled under 'البريد الإلكتروني' header) */}
                      <td className="px-6 py-4 whitespace-nowrap text-slate-700 dark:text-slate-300 text-start font-medium">
                        {supervisor.email}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          onClick={() => onToggleStatus(supervisor)}
                          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer select-none ${isActive
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 hover:bg-emerald-100'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-200'
                            }`}
                        >
                          <span className={`me-1.5 h-1.5 w-1.5 rounded-full ${isActive ? 'bg-emerald-600' : 'bg-slate-400'}`} />
                          {isActive
                            ? t('adminDashboard.managers.statusActive', 'نشط')
                            : t('adminDashboard.managers.statusSuspended', 'غير نشط')}
                        </span>
                      </td>

                      {/* Actions (Trash, Book/Details, Edit/Pencil) in RTL Sequence */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-4">

                          {/* Trash Icon */}
                          <button
                            onClick={() => onDelete(supervisor)}
                            title={isRtl ? 'حذف المشرف' : 'Delete Supervisor'}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>

                          {/* Open Book Icon (Details / Permissions screen trigger) */}
                          <button
                            onClick={() => onOpenRolePermissions(supervisor)}
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
              {isRtl ? (
                <>عرض <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span> إلى <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span> من أصل <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span> مشرف</>
              ) : (
                <>Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span> to <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span> of <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span> supervisors</>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {t('adminDashboard.managers.pagination.previous', 'السابق')}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  className={`h-9 w-9 flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all ${currentPage === p
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
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
