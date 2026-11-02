import { Loader2 } from 'lucide-react'

export default function ParentDetailsActions({
  isRtl = true,
  isSuspended = false,
  isSuspending = false,
  onToggleSuspend,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
      <button
        type="button"
        onClick={onToggleSuspend}
        disabled={isSuspending}
        className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-bold transition-all border cursor-pointer active:scale-95 flex items-center justify-center gap-2 ${
          isSuspended
            ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/40 hover:bg-emerald-100'
            : 'bg-[#FFF1F2] dark:bg-rose-950/20 text-[#E11D48] dark:text-rose-400 border-rose-100 dark:border-rose-900/40 hover:bg-rose-100'
        }`}
      >
        {isSuspending ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <span>
            {isSuspended
              ? (isRtl ? 'تفعيل الحساب' : 'Activate Account')
              : (isRtl ? 'تعليق الحساب' : 'Suspend Account')}
          </span>
        )}
      </button>
    </div>
  )
}
