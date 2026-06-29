import { MessageSquare, Ban, CheckCircle2 } from 'lucide-react'

export default function TeacherDetailsActions({
  teacher,
  isRtl,
  onToggleStatus,
  onOpenMessageModal
}) {
  const isSuspended = teacher?.status !== 'Active'

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-105 dark:border-slate-800">
      <button
        type="button"
        onClick={onOpenMessageModal}
        className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
      >
        <MessageSquare size={18} />
        <span>{isRtl ? 'إرسال رسالة' : 'Send Message'}</span>
      </button>

      <button
        type="button"
        onClick={() => onToggleStatus(teacher.id)}
        className={`flex-1 py-4 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 ${isSuspended
            ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-200 dark:border-transparent'
            : 'bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-955/20 dark:text-rose-455 border border-rose-200 dark:border-transparent'
          }`}
      >
        {isSuspended ? (
          <>
            <CheckCircle2 size={18} />
            <span>{isRtl ? 'تفعيل الحساب' : 'Activate Account'}</span>
          </>
        ) : (
          <>
            <Ban size={18} />
            <span>{isRtl ? 'تعليق الحساب' : 'Suspend Account'}</span>
          </>
        )}
      </button>
    </div>
  )
}