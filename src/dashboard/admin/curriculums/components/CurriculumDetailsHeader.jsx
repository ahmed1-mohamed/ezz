import { ArrowRight, ArrowLeft, Globe, Plus, Pencil } from 'lucide-react'

export default function CurriculumDetailsHeader({
  curriculumName,
  showOnWebsite,
  isUpdatingVisibility,
  onToggleWebsiteVisibility,
  onAddLevel,
  onEditCurriculum,
  onBack,
  isRtl,
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={onBack}
          className="w-11 h-11 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#00594C] hover:bg-[#00594C]/10 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition-all cursor-pointer shadow-xs shrink-0"
          title={isRtl ? 'الرجوع لقائمة المناهج' : 'Back to Curriculums'}
        >
          {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
        </button>
        <div className="text-start min-w-0">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-0.5">
            {isRtl ? 'لوحة التحكم • إدارة المناهج الدراسية' : 'Dashboard • Curriculums Management'}
          </p>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight truncate">
            {curriculumName}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end md:self-auto flex-wrap">
        <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/70 px-4 py-2.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
            <Globe size={16} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
            <span>{isRtl ? 'عرض في الموقع:' : 'Show on website:'}</span>
          </div>
          <button
            type="button"
            onClick={onToggleWebsiteVisibility}
            disabled={isUpdatingVisibility}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer disabled:opacity-50 ${
              showOnWebsite ? 'bg-[#00594C]' : 'bg-slate-300 dark:bg-slate-700'
            }`}
            title={
              isRtl
                ? showOnWebsite
                  ? 'اضغط لإخفاء المنهج من الموقع'
                  : 'اضغط لإظهار المنهج في الموقع'
                : showOnWebsite
                ? 'Click to hide from website'
                : 'Click to show on website'
            }
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-xs transition-transform ${
                showOnWebsite
                  ? isRtl
                    ? '-translate-x-6'
                    : 'translate-x-6'
                  : isRtl
                  ? '-translate-x-1'
                  : 'translate-x-1'
              }`}
            />
          </button>
          <span
            className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
              showOnWebsite
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
            }`}
          >
            {isUpdatingVisibility
              ? isRtl
                ? '...'
                : '...'
              : showOnWebsite
              ? isRtl
                ? 'ظاهر'
                : 'Visible'
              : isRtl
              ? 'مخفي'
              : 'Hidden'}
          </span>
        </div>

        {onEditCurriculum && (
          <button
            type="button"
            onClick={onEditCurriculum}
            className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <Pencil size={15} />
            <span>{isRtl ? 'تعديل المنهج' : 'Edit Curriculum'}</span>
          </button>
        )}

        <button
          type="button"
          onClick={onAddLevel}
          className="px-4 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00473c] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <Plus size={16} />
          <span>{isRtl ? 'إضافة مستوى' : 'Add Level'}</span>
        </button>
      </div>
    </div>
  )
}
