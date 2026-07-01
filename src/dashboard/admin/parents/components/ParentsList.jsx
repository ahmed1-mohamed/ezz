import { useState, useMemo } from 'react'
import {
  Search,
  Plus,

  Trash2,
  Pencil,
  Eye,
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
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q) ||
        (p.phone || '').includes(q)
    )
  }, [parents, debouncedQuery])

  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentItems = useMemo(() => filtered.slice(indexOfFirst, indexOfLast), [filtered, indexOfFirst, indexOfLast])
  const totalPages = useMemo(() => Math.ceil(filtered.length / itemsPerPage), [filtered])



  return (
    <div className="space-y-8">



      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenAddScreen}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98]"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.parents.add', 'إضافة ولي أمر')}</span>
          </button>
          <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-medium">
            {isRtl
              ? `إجمالي أولياء الأمور ${filtered.length}`
              : `Total ${filtered.length} parents`}
          </span>
        </div>

        <div className="relative w-full md:w-80">
          <div className={`absolute inset-y-0 ${isRtl ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-400`}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('adminDashboard.parents.search', 'بحث...')}
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
                    {isRtl ? 'لا يوجد أولياء أمور يطابقون بحثك' : 'No parents found matching your search'}
                  </td>
                </tr>
              ) : (
                currentItems.map((parent) => {
                  const nameStr = typeof parent.name === 'object' ? (parent.name?.ar || parent.name?.en || '') : (parent.name || '');
                  const initial = nameStr.trim().charAt(0) || 'أ';
                  const statusCfg = parent.active
                    ? { label: isRtl ? 'نشط' : 'Active', badgeClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400', dotClass: 'bg-emerald-500' }
                    : { label: isRtl ? 'غير نشط' : 'Inactive', badgeClass: 'bg-slate-50 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400', dotClass: 'bg-slate-400' };

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
                            title={isRtl ? 'حذف' : 'Delete'}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                          <button
                            onClick={() => onOpenEditScreen(parent)}
                            title={isRtl ? 'تعديل' : 'Edit'}
                            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => onOpenDetails(parent)}
                            title={isRtl ? 'التفاصيل' : 'Details'}
                            className="p-1 text-slate-400 hover:text-brand-600 transition-colors"
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

        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl">
            <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
              {isRtl
                ? `عرض ${indexOfFirst + 1} إلى ${Math.min(indexOfLast, filtered.length)} من ${filtered.length} مشرفين`
                : `Showing ${indexOfFirst + 1} to ${Math.min(indexOfLast, filtered.length)} of ${filtered.length} parents`}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {isRtl ? 'السابق' : 'Prev'}
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`h-9 w-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all ${currentPage === p
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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