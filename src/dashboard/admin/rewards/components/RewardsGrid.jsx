import { Edit3, Trash2, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function RewardsGrid({ rewards, onEdit, onDelete, onView }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  if (!rewards || rewards.length === 0) {
    return (
      <div className="py-12 bg-white dark:bg-slate-900 rounded-3xl text-center text-slate-400">
        {isRtl ? 'لا توجد مكافآت حالياً' : 'No rewards found'}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {rewards.map((reward) => (
        <div
          key={reward.id || reward._id}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-slate-200 dark:hover:border-slate-700/60 transition-all duration-300 relative group"
        >
          <div
            className="h-28 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundColor: reward.backgroundColor || '#f3f4f6' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-md transform group-hover:rotate-12 transition-transform duration-300">
              {reward.icon || '🎁'}
            </div>
          </div>

          <div className="p-5 flex flex-col items-center text-center flex-1 bg-white dark:bg-slate-900 relative z-10">
            <h4 className="font-bold text-slate-800 dark:text-white text-sm group-hover:text-[#0f7a6c] dark:group-hover:text-emerald-400 transition-colors">
              {typeof reward.name === 'object' ? (isRtl ? reward.name.ar : reward.name.en) : reward.name}
            </h4>

            <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 flex-1 line-clamp-3">
              {typeof reward.description === 'object' ? (isRtl ? reward.description.ar : reward.description.en) : reward.description}
            </p>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-800/20 px-4 py-3 flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity relative z-10">
            {onView && (
              <button
                onClick={() => onView(reward)}
                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-white transition-all shadow-sm hover:shadow"
                title={isRtl ? 'عرض' : 'View'}
              >
                <Eye size={18} />
              </button>
            )}
            <button
              onClick={() => onEdit(reward)}
              className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-all shadow-sm hover:shadow"
              title={isRtl ? 'تعديل' : 'Edit'}
            >
              <Edit3 size={18} />
            </button>
            <button
              onClick={() => onDelete(reward)}
              className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/30 transition-all shadow-sm hover:shadow"
              title={isRtl ? 'حذف' : 'Delete'}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}