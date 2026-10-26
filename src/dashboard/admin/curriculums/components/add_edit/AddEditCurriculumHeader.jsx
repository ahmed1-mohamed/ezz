import { ArrowRight, ArrowLeft, BookOpen, Save, X, Loader2 } from 'lucide-react'

export default function AddEditCurriculumHeader({
  isEdit = false,
  curriculumName = '',
  isRtl = true,
  isSaving = false,
  onCancel,
  onSubmit
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSaving}
          className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#00594C] hover:bg-[#00594C]/10 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition-all cursor-pointer shadow-xs shrink-0 disabled:opacity-50"
          title={isRtl ? 'الرجوع' : 'Back'}
        >
          <BackArrow size={22} />
        </button>

        <div className="text-start min-w-0">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 mb-1">
            <span>{isRtl ? 'لوحة التحكم' : 'Dashboard'}</span>
            <span>•</span>
            <span>{isRtl ? 'المناهج الدراسية' : 'Curriculums'}</span>
            <span>•</span>
            <span className="text-[#00594C] dark:text-emerald-400 font-extrabold">
              {isEdit
                ? (isRtl ? 'تعديل المنهج' : 'Edit Curriculum')
                : (isRtl ? 'إضافة منهج جديد' : 'New Curriculum')}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight">
              {isEdit
                ? (isRtl ? `تعديل منهج: ${curriculumName || ''}` : `Edit: ${curriculumName || ''}`)
                : (isRtl ? 'إضافة منهج دراسي جديد' : 'Create New Curriculum')}
            </h1>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/50 dark:text-emerald-400 border border-[#00594C]/20 dark:border-emerald-800/40">
              <BookOpen size={13} />
              <span>{isEdit ? (isRtl ? 'وضع التعديل' : 'Edit Mode') : (isRtl ? 'منهج جديد' : 'New Curriculum')}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSaving}
          className="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-sm font-bold transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
        >
          <X size={16} />
          <span>{isRtl ? 'إلغاء' : 'Cancel'}</span>
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSaving}
          className="px-6 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00473c] text-white text-sm font-bold shadow-md shadow-[#00594C]/20 transition-all cursor-pointer flex items-center gap-2 active:scale-95 disabled:opacity-60"
        >
          {isSaving ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Save size={16} />
          )}
          <span>
            {isEdit
              ? (isRtl ? 'حفظ التعديلات' : 'Save Changes')
              : (isRtl ? 'حفظ ونشر المنهج' : 'Publish Curriculum')}
          </span>
        </button>
      </div>
    </div>
  )
}
