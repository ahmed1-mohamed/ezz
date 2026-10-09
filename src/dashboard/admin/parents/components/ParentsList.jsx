import { useState, useMemo } from 'react'
import {
  Search,
  Plus,
  Trash2,
  Pencil,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import useDebounce from '@/shared/hooks/useDebounce'

export default function ParentsList({
  parents,
  pagination,
  isRtl,
  t,
  onOpenAddScreen,
  onOpenEditScreen,
  onOpenDetails,
  onDelete,
}) {
  const [searchVal, setSearchVal] = useState('')
  const debouncedQuery = useDebounce(searchVal, 300)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = pagination?.limit || 10

  const filtered = useMemo(() => {
    if (!debouncedQuery.trim()) return parents
    const q = debouncedQuery.toLowerCase()
    return parents.filter(
      (p) => {
        const nameStr = typeof p.name === 'object' ? (p.name?.ar || p.name?.en || '') : (p.name || '')
        return (
          nameStr.toLowerCase().includes(q) ||
          (p.email || '').toLowerCase().includes(q) ||
          (p.phone || '').includes(q) ||
          (p.country || '').includes(q)
        )
      }
    )
  }, [parents, debouncedQuery])

  const totalCount = filtered.length
  const totalPages = Math.max(1, Math.ceil(totalCount / itemsPerPage))
  const isPaginationDimmed = totalPages <= 1

  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentItems = useMemo(() => filtered.slice(indexOfFirst, indexOfLast), [filtered, indexOfFirst, indexOfLast])

  const startIdx = totalCount > 0 ? indexOfFirst + 1 : 0
  const endIdx = totalCount > 0 ? Math.min(indexOfLast, totalCount) : 0

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenAddScreen}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.parents.add', 'إضافة ولي أمر')}</span>
          </button>
          <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-medium">
            {t('adminDashboard.parents.totalCountLabel', {
              defaultValue: isRtl ? `إجمالي أولياء الأمور ${filtered.length}` : `Total ${filtered.length} parents`,
              count: filtered.length
            })}
          </span>
        </div>

        <div className="relative w-full md:w-80">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-400`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('adminDashboard.parents.search', 'بحث بالاسم، البريد، أو الهاتف...')}
            value={searchVal}
            onChange={(e) => { setSearchVal(e.target.value); setCurrentPage(1) }}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm placeholder-slate-400`}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-50/75 text-slate-500 dark:bg-slate-950/40 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.parents.parentName', 'ولي الأمر')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.parents.contact', 'معلومات التواصل')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.parents.status', 'الحالة')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.parents.joined', 'تاريخ الانضمام')}</th>
                <th className="px-6 py-4 font-semibold text-start">{t('adminDashboard.parents.actions', 'الإجراءات')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-slate-400 dark:text-slate-500 font-medium">
                    {t('adminDashboard.parents.noParents', 'لا يوجد أولياء أمور يطابقون بحثك')}
                  </td>
                </tr>
              ) : (
                currentItems.map((parent) => {
                  const nameStr = typeof parent.name === 'object' ? (parent.name?.ar || parent.name?.en || '') : (parent.name || '');
                  const initial = nameStr.trim().charAt(0) || 'أ';
                  const statusCfg = parent.active
                    ? { label: t('adminDashboard.parents.statusActive', 'نشط'), badgeClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400', dotClass: 'bg-emerald-500' }
                    : { label: t('adminDashboard.parents.statusInactive', 'غير نشط'), badgeClass: 'bg-slate-50 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400', dotClass: 'bg-slate-400' };

                  return (
                    <tr key={parent.parent_id || parent._id || parent.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3 justify-start">
                          {parent.image ? (
                            <img src={parent.image} alt={nameStr} className="h-9 w-9 shrink-0 rounded-full object-cover shadow-sm border border-slate-100 dark:border-slate-800" />
                          ) : (
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 font-bold text-sm">
                              {initial}
                            </div>
                          )}
                          <div className="text-start">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">{nameStr}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">{parent.email}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-start">
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-700 dark:text-slate-300" dir="ltr">
                            {parent.phone}
                          </span>
                          <span className="text-xs text-slate-500">
                            {parent.country}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-start">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold ${statusCfg.badgeClass}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${statusCfg.dotClass}`} />
                          {statusCfg.label}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-start">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {parent.createdAt ? new Date(parent.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '-'}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-start">
                        <div className="flex flex-row-reverse items-center justify-end gap-4">
                          <button
                            onClick={() => onDelete(parent)}
                            title={t('adminDashboard.parents.delete', 'حذف')}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                          >
                            <Trash2 size={16} />
                          </button>
                          <button
                            onClick={() => onOpenEditScreen(parent)}
                            title={t('adminDashboard.parents.edit', 'تعديل')}
                            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => onOpenDetails(parent)}
                            title={t('adminDashboard.parents.details', 'التفاصيل')}
                            className="p-1 text-slate-400 hover:text-brand-600 transition-colors cursor-pointer"
                          >
                            <Eye size={16} />
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
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl transition-opacity duration-300 ${isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''}`}
        >
          <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            {isRtl ? (
              <>
                {t('adminDashboard.parents.pagination.showing', 'عرض')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.parents.pagination.to', 'إلى')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.parents.pagination.of', 'من أصل')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
                {t('adminDashboard.parents.pagination.parents', 'أولياء أمور')}
              </>
            ) : (
              <>
                {t('adminDashboard.parents.pagination.showing', 'Showing')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.parents.pagination.to', 'to')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.parents.pagination.of', 'of')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
                {t('adminDashboard.parents.pagination.parents', 'parents')}
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1 || isPaginationDimmed}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isRtl ? <ChevronRight size={16} aria-hidden="true" /> : <ChevronLeft size={16} aria-hidden="true" />}
            </button>

            <span className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 min-w-[80px] text-center">
              {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages || isPaginationDimmed}
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