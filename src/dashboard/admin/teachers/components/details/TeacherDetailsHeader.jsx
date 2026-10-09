import { ArrowRight, ArrowLeft, Pencil, Trash2, DollarSign, KeyRound } from 'lucide-react'

export default function TeacherDetailsHeader({
  teacher,
  isRtl,
  onCancel,
  onEdit,
  onOpenHourlyRateModal,
  onOpenPasswordModal,
  onDelete
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

      <div className="flex flex-wrap items-center gap-2">
        {onOpenHourlyRateModal && (
          <button
            type="button"
            onClick={onOpenHourlyRateModal}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-teal-50 hover:bg-teal-100 text-[#005953] dark:bg-emerald-950/30 dark:text-emerald-400 rounded-2xl text-xs font-bold transition-all cursor-pointer border border-teal-100 dark:border-transparent"
          >
            <DollarSign size={14} />
            <span>{isRtl ? 'سعر الساعة' : 'Hourly Rate'}</span>
          </button>
        )}

        {onOpenPasswordModal && (
          <button
            type="button"
            onClick={onOpenPasswordModal}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 rounded-2xl text-xs font-bold transition-all cursor-pointer border border-indigo-100 dark:border-transparent"
          >
            <KeyRound size={14} />
            <span>{isRtl ? 'كلمة المرور' : 'Password'}</span>
          </button>
        )}

        {onEdit && (
          <button
            type="button"
            onClick={() => onEdit(teacher)}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-xs font-bold transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer"
          >
            <Pencil size={14} />
            <span>{isRtl ? 'تعديل البيانات' : 'Edit Profile'}</span>
          </button>
        )}

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(teacher)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 rounded-2xl text-xs font-bold transition-all cursor-pointer"
          >
            <Trash2 size={14} />
            <span>{isRtl ? 'حذف' : 'Delete'}</span>
          </button>
        )}
      </div>
    </div>
  )
}