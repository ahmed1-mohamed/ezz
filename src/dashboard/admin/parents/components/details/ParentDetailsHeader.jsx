import { ArrowRight, ArrowLeft, Save, Loader2, Ban, CheckCircle2 } from 'lucide-react'

export default function ParentDetailsHeader({
  parentName,
  isRtl = true,
  isSaving = false,
  isSuspended = false,
  isSuspending = false,
  onSave,
  onCancel,
  onToggleSuspend,
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all hover:scale-105 cursor-pointer shadow-xs"
          title={isRtl ? 'رجوع' : 'Back'}
        >
          <BackArrow size={20} />
        </button>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white flex flex-wrap items-center gap-x-2">
            <span>{isRtl ? 'أولياء الأمور' : 'Parents'}</span>
            <span className="text-slate-300 dark:text-slate-600 text-base sm:text-lg">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-semibold text-base sm:text-lg">
              {parentName}
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={onToggleSuspend}
          disabled={isSuspending}
          className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border cursor-pointer active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed ${
            isSuspended
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400'
              : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/20 dark:border-rose-900/30 dark:text-rose-400'
          }`}
        >
          {isSuspending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>{isRtl ? 'جاري التحميل...' : 'Loading...'}</span>
            </>
          ) : isSuspended ? (
            <>
              <CheckCircle2 size={16} />
              <span>{isRtl ? 'إلغاء تعليق الحساب' : 'Cancel Suspension'}</span>
            </>
          ) : (
            <>
              <Ban size={16} />
              <span>{isRtl ? 'تعليق الحساب' : 'Suspend Account'}</span>
            </>
          )}
        </button>
        <button
          type="button"
          onClick={onSave}
          disabled={isSaving}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#00594C] hover:bg-[#004742] text-white text-xs sm:text-sm font-bold rounded-2xl transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSaving ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>{isRtl ? 'جاري الحفظ...' : 'Saving...'}</span>
            </>
          ) : (
            <>
              <Save size={15} />
              <span>{isRtl ? 'حفظ التعديلات' : 'Save Changes'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
