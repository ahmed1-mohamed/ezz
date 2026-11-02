import { ArrowRight, ArrowLeft, Save, Loader2 } from 'lucide-react'

export default function ParentDetailsHeader({
  parentName,
  isRtl,
  isSaving,
  onSave,
  onCancel,
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

      <button
        type="button"
        onClick={onSave}
        disabled={isSaving}
        className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#00594C] hover:bg-[#004742] text-white text-sm font-bold rounded-2xl transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
  )
}
