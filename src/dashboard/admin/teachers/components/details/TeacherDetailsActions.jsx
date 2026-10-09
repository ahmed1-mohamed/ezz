import { MessageSquare, Ban, CheckCircle2, Pencil, Trash2, DollarSign, KeyRound } from 'lucide-react'

export default function TeacherDetailsActions({
  teacher,
  isRtl,
  onToggleStatus,
  onOpenMessageModal,
  onEdit,
  onOpenHourlyRateModal,
  onOpenPasswordModal,
  onDelete
}) {
  const isSuspended = !teacher?.active

  return (
    <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
      {onOpenMessageModal && (
        <button
          type="button"
          onClick={onOpenMessageModal}
          className="flex-1 min-w-[140px] py-3 px-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
        >
          <MessageSquare size={16} />
          <span>{isRtl ? 'إرسال رسالة' : 'Send Message'}</span>
        </button>
      )}

      {onOpenHourlyRateModal && (
        <button
          type="button"
          onClick={onOpenHourlyRateModal}
          className="flex-1 min-w-[140px] py-3 px-4 bg-teal-50 hover:bg-teal-100 text-[#005953] dark:bg-emerald-950/30 dark:text-emerald-400 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm border border-teal-200 dark:border-transparent"
        >
          <DollarSign size={16} />
          <span>{isRtl ? 'تعديل سعر الساعة' : 'Hourly Rate'}</span>
        </button>
      )}

      {onOpenPasswordModal && (
        <button
          type="button"
          onClick={onOpenPasswordModal}
          className="flex-1 min-w-[140px] py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm border border-indigo-200 dark:border-transparent"
        >
          <KeyRound size={16} />
          <span>{isRtl ? 'تغيير كلمة المرور' : 'Change Password'}</span>
        </button>
      )}

      {onEdit && (
        <button
          type="button"
          onClick={() => onEdit(teacher)}
          className="flex-1 min-w-[130px] py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
        >
          <Pencil size={15} />
          <span>{isRtl ? 'تعديل البيانات' : 'Edit Profile'}</span>
        </button>
      )}

      {onToggleStatus && (
        <button
          type="button"
          onClick={() => onToggleStatus(teacher.id)}
          className={`flex-1 min-w-[140px] py-3 px-4 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm ${
            isSuspended
              ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200 dark:border-transparent'
              : 'bg-amber-50 hover:bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-transparent'
          }`}
        >
          {isSuspended ? (
            <>
              <CheckCircle2 size={16} />
              <span>{isRtl ? 'تفعيل الحساب' : 'Activate'}</span>
            </>
          ) : (
            <>
              <Ban size={16} />
              <span>{isRtl ? 'إيقاف الحساب' : 'Suspend'}</span>
            </>
          )}
        </button>
      )}

      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(teacher)}
          className="py-3 px-5 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-200 dark:border-transparent"
        >
          <Trash2 size={15} />
          <span>{isRtl ? 'حذف' : 'Delete'}</span>
        </button>
      )}
    </div>
  )
}