import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function TeacherDetailsHeader({
  teacher,
  isRtl,
  onCancel,
  onEdit
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
          title={isRtl ? 'العودة للقائمة' : 'Back to list'}
        >
          <BackArrow size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <span>{isRtl ? 'تفاصيل المعلم' : 'Teacher Details'}</span>
            <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
              {teacher?.name}
            </span>
          </h1>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onEdit(teacher)}
        className="px-5 py-2.5 bg-brand-500 hover:bg-brand-655 text-white rounded-2xl text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
      >
        {isRtl ? 'تعديل البيانات' : 'Edit Profile'}
      </button>
    </div>
  )
}