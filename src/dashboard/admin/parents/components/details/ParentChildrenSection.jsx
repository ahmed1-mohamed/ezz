import { useState } from 'react'
import { Users, Plus, Eye } from 'lucide-react'
import AddChildModal from './AddChildModal'

export default function ParentChildrenSection({
  childrenList = [],
  isRtl = true,
  onAddChild,
  onViewChildDetails,
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const displayList = (Array.isArray(childrenList) ? childrenList : []).map((child) => {
    const displayName = typeof child.name === 'object' && child.name !== null
      ? (isRtl ? child.name.ar || child.name.en : child.name.en || child.name.ar)
      : (child.name || '-')
    const initial = (displayName === '-' ? '?' : displayName).trim().charAt(0) || '?'
    const rawLevel = child.studentLevel?.name || child.levelName || child.level || child.studentLevel || ''
    const levelName = typeof rawLevel === 'object' && rawLevel !== null
      ? (isRtl ? rawLevel.ar || rawLevel.en : rawLevel.en || rawLevel.ar)
      : String(rawLevel || '')
    const email = child.email || child.user?.email || ''
    const phone = child.phone || child.user?.phone || ''
    const rawCountry = child.country || ''
    const countryName = typeof rawCountry === 'object' && rawCountry !== null
      ? (isRtl ? rawCountry.name?.ar || rawCountry.name?.en : rawCountry.name?.en || rawCountry.name?.ar) || rawCountry.code || ''
      : String(rawCountry || '')
    const isActive = child.active === true || String(child.active) === 'true'
    return {
      id: child.student_id || child.id || child._id,
      name: displayName,
      initial,
      image: child.image || child.profileImage || null,
      levelName,
      email,
      phone,
      countryName,
      isActive,
    }
  })
  const existingIds = displayList.map((child) => child.id)
  return (
    <div className="space-y-3" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-500/20 dark:text-emerald-400">
            <Users size={18} />
          </div>
          <span className="text-sm font-bold text-slate-800 dark:text-white">
            {isRtl ? `الأبناء المرتبطون (${displayList.length})` : `Linked Children (${displayList.length})`}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-[#00594C] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
        >
          <Plus size={15} />
          <span>{isRtl ? 'إضافة ابن' : 'Add Child'}</span>
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800/80 shadow-soft">
        <div className="text-start mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'متابعة الأبناء' : 'Children Follow-up'}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
            {isRtl ? 'جميع الأبناء المسجلين لولي الأمر والبيانات الأساسية الخاصة بهم' : 'All children enrolled under this parent with their basic details'}
          </p>
        </div>
        {displayList.length === 0 ? (
          <div className="py-12 text-center text-slate-400 dark:text-slate-500 font-bold text-sm">
            {isRtl ? 'لا يوجد أبناء مرتبطون بولي الأمر حالياً' : 'No children are linked to this parent yet'}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
            <table className="w-full text-start border-collapse text-xs sm:text-sm">
              <thead className="bg-slate-50/75 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 text-start">{isRtl ? 'الطالب' : 'Student'}</th>
                  <th className="py-3.5 px-4 text-start">{isRtl ? 'المستوى الدراسي' : 'Academic Level'}</th>
                  <th className="py-3.5 px-4 text-start">{isRtl ? 'البريد الإلكتروني' : 'Email'}</th>
                  <th className="py-3.5 px-4 text-start">{isRtl ? 'رقم الهاتف' : 'Phone'}</th>
                  <th className="py-3.5 px-4 text-start">{isRtl ? 'الحالة' : 'Status'}</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {displayList.map((child) => (
                  <tr
                    key={child.id}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 text-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 overflow-hidden">
                          {child.image ? (
                            <img src={child.image} alt={child.name} className="w-full h-full object-cover" />
                          ) : (
                            child.initial
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-slate-800 dark:text-white truncate">
                            {child.name}
                          </p>
                          {child.countryName && (
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                              {child.countryName}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-start">
                      {child.levelName ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#00594C] dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                          {child.levelName}
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-start">
                      <span className="text-slate-600 dark:text-slate-300 font-medium" dir="ltr">
                        {child.email || '-'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-start">
                      <span className="text-slate-600 dark:text-slate-300 font-medium" dir="ltr">
                        {child.phone || '-'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-start">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                          child.isActive
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                            : 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            child.isActive ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                        <span>{child.isActive ? (isRtl ? 'نشط' : 'Active') : (isRtl ? 'متوقف' : 'Inactive')}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center">
                      <button
                        type="button"
                        onClick={() => onViewChildDetails && onViewChildDetails(child)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00594C] hover:bg-[#004742] text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <Eye size={13} />
                        <span>{isRtl ? 'التفاصيل' : 'Details'}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AddChildModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        isRtl={isRtl}
        onAddChild={onAddChild}
        existingChildIds={existingIds}
      />
    </div>
  )
}
