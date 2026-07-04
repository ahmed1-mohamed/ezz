import { useTranslation } from 'react-i18next'

export default function ExplanationLanguageForm({
  langNameAr,
  setLangNameAr,
  langNameEn,
  setLangNameEn,
  onCancel,
  onSubmit,
  isEditing
}) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5 animate-slideDown max-w-4xl mx-auto"
    >
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
        {isEditing
          ? (isRtl ? 'تعديل لغة الشرح' : 'Edit Explanation Language')
          : (isRtl ? 'إضافة لغة شرح جديدة' : 'Add New Explanation Language')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اسم اللغة باللغة العربية' : 'Language Name in Arabic'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={langNameAr}
            onChange={(e) => setLangNameAr(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'مثل: اللغة العربية' : 'e.g. Arabic'}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اسم اللغة باللغة الإنجليزية' : 'Language Name in English'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={langNameEn}
            onChange={(e) => setLangNameEn(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'Arabic :مثل' : 'e.g. Arabic'}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer dark:bg-slate-800 dark:text-slate-300"
        >
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
        >
          {isEditing
            ? (isRtl ? 'حفظ التغييرات' : 'Save Changes')
            : (isRtl ? 'إضافة' : 'Add')}
        </button>
      </div>
    </form>
  )
}
