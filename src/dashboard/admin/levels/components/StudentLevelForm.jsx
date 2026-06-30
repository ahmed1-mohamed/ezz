import { useTranslation } from 'react-i18next'

export default function StudentLevelForm({
  levelName,
  setLevelName,
  levelDescription,
  setLevelDescription,
  onCancel,
  onSubmit,
  isEditing
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5 animate-slideDown max-w-4xl mx-auto"
    >
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        {isEditing
          ? (isRtl ? 'تعديل المستوى الدراسي' : 'Edit Academic Level')
          : (isRtl ? 'إضافة مستوى دراسي للطلاب جديد' : 'Add New Academic Level')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اسم المستوى' : 'Level Name'}
          </label>
          <input
            type="text"
            required
            value={levelName}
            onChange={(e) => setLevelName(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'مثل: المستوى الأول' : 'e.g. Level One'}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الوصف' : 'Description'}
          </label>
          <input
            type="text"
            value={levelDescription}
            onChange={(e) => setLevelDescription(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder={isRtl ? 'وصف مختصر للمستوى' : 'Brief description of the level'}
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
