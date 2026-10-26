import { Globe, Eye, EyeOff } from 'lucide-react'

export default function CurriculumPublishingCard({
  showOnWebsite = true,
  onToggleWebsiteVisibility,
  isRtl = true
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4 text-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Globe size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {isRtl ? 'حالة النشر والعرض' : 'Publishing & Visibility'}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {isRtl ? 'إمكانية ظهور المنهج لزوار الموقع' : 'Public website visibility control'}
            </p>
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
            showOnWebsite
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
          }`}
        >
          {showOnWebsite ? <Eye size={13} /> : <EyeOff size={13} />}
          <span>{showOnWebsite ? (isRtl ? 'ظاهر للزوار' : 'Published') : (isRtl ? 'مخفي حالياً' : 'Hidden')}</span>
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {isRtl ? 'عرض المنهج في الموقع الإلكتروني' : 'Show curriculum on website'}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {isRtl
              ? 'عند التفعيل، سيتمكن أولياء الأمور والطلاب من استعراض المنهج والتسجيل به'
              : 'When enabled, public visitors and students can browse and enroll'}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggleWebsiteVisibility}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none cursor-pointer shrink-0 ${
            showOnWebsite ? 'bg-[#00594C]' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
              showOnWebsite
                ? (isRtl ? '-translate-x-6' : 'translate-x-6')
                : (isRtl ? '-translate-x-1' : 'translate-x-1')
            }`}
          />
        </button>
      </div>
    </div>
  )
}
