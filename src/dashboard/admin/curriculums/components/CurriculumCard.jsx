import { useTranslation } from 'react-i18next'
import { Trash2, Pencil, Eye } from 'lucide-react'

export default function CurriculumCard({ curriculum, onEdit, onDelete, onView }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const name = typeof curriculum.name === 'object'
    ? (isRtl ? curriculum.name.ar : curriculum.name.en) || curriculum.name.ar || curriculum.name.en
    : curriculum.name;

  const description = typeof curriculum.description === 'object'
    ? (isRtl ? curriculum.description.ar : curriculum.description.en) || curriculum.description.ar || curriculum.description.en
    : curriculum.description;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 flex flex-col h-full overflow-hidden group">

      <div className="p-6 flex-1 flex flex-col items-center text-center">
        {/* Elegant Image Container */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 rounded-[20px] overflow-hidden flex items-center justify-center shrink-0">
          {curriculum.image && curriculum.image.trim() !== '' ? (
            <img
              src={curriculum.image}
              alt={name || 'Curriculum'}
              className="w-full h-full shadow-sm shadow-slate-200 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-[#0f7a6c]/20 dark:text-[#0f7a6c] text-3xl font-bold shadow-sm shadow-slate-200 group-hover:scale-110 transition-transform duration-500 uppercase">
              {name ? name.charAt(0) : '?'}
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-1 w-full">
          {name}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 w-full">
          {description || (isRtl ? 'لا يوجد وصف' : 'No description')}
        </p>
      </div>

      {/* Action Buttons (Icons Only) */}
      <div className="p-4 border-t border-slate-50 dark:border-slate-800/50 flex items-center justify-center gap-2 bg-slate-50/50 dark:bg-slate-900/50">
        <button
          type="button"
          onClick={() => onView(curriculum)}
          className="p-3 text-slate-400 hover:text-[#0f7a6c] hover:bg-[#0f7a6c]/10 rounded-xl transition-all"
          title={isRtl ? 'عرض' : 'View'}
        >
          <Eye size={20} />
        </button>
        <button
          type="button"
          onClick={() => onEdit(curriculum)}
          className="p-3 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl transition-all"
          title={isRtl ? 'تعديل' : 'Edit'}
        >
          <Pencil size={20} />
        </button>
        <button
          type="button"
          onClick={() => onDelete(curriculum)}
          className="p-3 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-all"
          title={isRtl ? 'حذف' : 'Delete'}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}
