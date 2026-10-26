import { Award, Plus, Trash2 } from 'lucide-react'

export default function CurriculumBenefitsCard({
  benefitsAr = [''],
  benefitsEn = [''],
  onBenefitArChange,
  onAddBenefitAr,
  onRemoveBenefitAr,
  onBenefitEnChange,
  onAddBenefitEn,
  onRemoveBenefitEn,
  isRtl = true
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs space-y-6 text-start">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Award size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {isRtl ? 'المخرجات والاستفادة بعد التخرج' : 'Benefits & Outcomes After Graduation'}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {isRtl ? 'المهارات والشهادات التي يكتسبها الطالب عند إتمام المنهج (مطلوب عنصر واحد على الأقل)' : 'Skills, mastery, and certifications earned upon completion (at least 1 required)'}
            </p>
          </div>
        </div>

        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50 px-2.5 py-1 rounded-full">
          {isRtl ? 'مطلوب فائدة واحدة كحد أدنى' : 'Min 1 benefit required'}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {isRtl ? 'الفوائد والمخرجات (بالعربية)' : 'Benefits (Arabic)'}
            </h4>
            <span className="text-[11px] font-bold text-slate-400">
              {benefitsAr.length} {isRtl ? 'عناصر' : 'items'}
            </span>
          </div>

          <div className="space-y-2.5">
            {benefitsAr.map((benefit, idx) => (
              <div key={`ben-ar-${idx}`} className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-black text-slate-500 dark:text-slate-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => onBenefitArChange(idx, e.target.value)}
                  placeholder={isRtl ? 'مثال: إتقان أحكام التلاوة والحصول على إجازة' : 'Benefit description in Arabic...'}
                  className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 rounded-xl py-2.5 px-3.5 outline-none transition-all text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => onRemoveBenefitAr(idx)}
                  disabled={benefitsAr.length === 1 && idx === 0}
                  className="p-2.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400 cursor-pointer"
                  title={isRtl ? 'حذف العنصر' : 'Remove item'}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onAddBenefitAr}
            className="w-full py-2.5 px-4 rounded-xl border border-dashed border-[#00594C]/40 text-[#00594C] dark:text-emerald-400 hover:bg-[#00594C]/5 dark:hover:bg-emerald-950/30 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus size={15} />
            <span>{isRtl ? 'إضافة فائدة بالعربية' : 'Add Arabic Benefit'}</span>
          </button>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {isRtl ? 'الفوائد والمخرجات (بالإنجليزية)' : 'Benefits (English)'}
            </h4>
            <span className="text-[11px] font-bold text-slate-400">
              {benefitsEn.length} {isRtl ? 'عناصر' : 'items'}
            </span>
          </div>

          <div className="space-y-2.5">
            {benefitsEn.map((benefit, idx) => (
              <div key={`ben-en-${idx}`} className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-black text-slate-500 dark:text-slate-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => onBenefitEnChange(idx, e.target.value)}
                  placeholder="e.g. Mastery of reading with certification..."
                  className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 rounded-xl py-2.5 px-3.5 outline-none transition-all text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => onRemoveBenefitEn(idx)}
                  disabled={benefitsEn.length === 1 && idx === 0}
                  className="p-2.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400 cursor-pointer"
                  title={isRtl ? 'حذف العنصر' : 'Remove item'}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onAddBenefitEn}
            className="w-full py-2.5 px-4 rounded-xl border border-dashed border-[#00594C]/40 text-[#00594C] dark:text-emerald-400 hover:bg-[#00594C]/5 dark:hover:bg-emerald-950/30 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus size={15} />
            <span>{isRtl ? 'إضافة فائدة بالإنجليزية' : 'Add English Benefit'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
