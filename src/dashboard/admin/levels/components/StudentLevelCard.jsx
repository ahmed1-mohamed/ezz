import { useTranslation } from 'react-i18next'
import { GraduationCap, Trash2, Pencil } from 'lucide-react'

export default function StudentLevelCard({
  lvl,
  onEdit,
  onDelete
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-soft transition-all">
      <div className="flex items-center justify-between p-6 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onDelete(lvl)}
              className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-955/20 rounded-lg transition-all cursor-pointer"
              title={isRtl ? 'حذف المستوى الدراسي' : 'Delete level'}
            >
              <Trash2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => onEdit(lvl)}
              className="p-1.5 text-slate-400 hover:text-[#005953] hover:bg-slate-50 dark:hover:bg-slate-850 rounded-lg transition-all cursor-pointer"
              title={isRtl ? 'تعديل البيانات' : 'Edit level metadata'}
            >
              <Pencil size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-end">
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {isRtl ? lvl.name : lvl.nameEn}
            </h3>
          </div>

          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-955/10 rounded-2xl flex items-center justify-center text-amber-600 shrink-0 shadow-sm border border-amber-100/50">
            <GraduationCap size={22} />
          </div>
        </div>
      </div>
    </div>
  )
}
