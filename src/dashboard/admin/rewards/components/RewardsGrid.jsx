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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {rewards.map((reward) => (
        <div
          key={reward.id || reward._id}
          className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col group"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0"
              style={{ backgroundColor: reward.backgroundColor || '#f3f4f6' }}
            >
              {reward.icon || '🎁'}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base">
                {typeof reward.name === 'object' ? (isRtl ? reward.name.ar : reward.name.en) : reward.name}
              </h3>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
            {typeof reward.description === 'object' ? (isRtl ? reward.description.ar : reward.description.en) : reward.description}
          </p>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
            {onView && (
              <button
                onClick={() => onView(reward)}
                className="p-2 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
                title={isRtl ? 'عرض' : 'View'}
              >
                <Eye size={16} />
              </button>
            )}
            <button
              onClick={() => onEdit(reward)}
              className="p-2 bg-brand-50 text-brand-600 rounded-xl hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 transition-colors"
              title={isRtl ? 'تعديل' : 'Edit'}
            >
              <Edit3 size={16} />
            </button>
            <button
              onClick={() => onDelete(reward)}
              className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 transition-colors"
              title={isRtl ? 'حذف' : 'Delete'}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
