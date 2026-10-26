import { FileText, Languages } from 'lucide-react'

export default function CurriculumBasicInfoCard({
  nameAr = '',
  setNameAr,
  nameEn = '',
  setNameEn,
  descriptionAr = '',
  setDescriptionAr,
  descriptionEn = '',
  setDescriptionEn,
  languageId = '',
  setLanguageId,
  languages = [],
  isRtl = true
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs space-y-6 text-start">
      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="w-9 h-9 rounded-xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <FileText size={18} />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white">
            {isRtl ? 'المعلومات الأساسية للمنهج' : 'Curriculum Basic Information'}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {isRtl ? 'الاسم، الوصف، ولغة التدريس باللغتين العربية والإنجليزية' : 'Bilingual names, descriptions, and language'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            <span>{isRtl ? 'اسم المنهج (بالعربية)' : 'Curriculum Name (Arabic)'}</span>
            <span className="text-rose-500 ms-1">*</span>
          </label>
          <input
            type="text"
            required
            value={nameAr}
            onChange={(e) => setNameAr(e.target.value)}
            placeholder={isRtl ? 'مثال: منهج نور البيان لتعليم القراءة' : 'e.g. Noor Al-Bayan Curriculum'}
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-semibold text-slate-800 dark:text-white placeholder:text-slate-400 shadow-xs"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            <span>{isRtl ? 'اسم المنهج (بالإنجليزية)' : 'Curriculum Name (English)'}</span>
            <span className="text-rose-500 ms-1">*</span>
          </label>
          <input
            type="text"
            required
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            placeholder="e.g. Noor Al-Bayan Curriculum"
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm font-semibold text-slate-800 dark:text-white placeholder:text-slate-400 shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            {isRtl ? 'وصف المنهج (بالعربية)' : 'Description (Arabic)'}
          </label>
          <textarea
            rows={4}
            value={descriptionAr}
            onChange={(e) => setDescriptionAr(e.target.value)}
            placeholder={isRtl ? 'اكتب وصفاً شاملاً يوضح محتوى المنهج وأهدافه...' : 'Comprehensive description in Arabic...'}
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 rounded-2xl p-4 outline-none transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400 resize-none shadow-xs"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            {isRtl ? 'وصف المنهج (بالإنجليزية)' : 'Description (English)'}
          </label>
          <textarea
            rows={4}
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            placeholder="Comprehensive description in English..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 rounded-2xl p-4 outline-none transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400 resize-none shadow-xs"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
          {isRtl ? 'لغة الشرح والتدريس' : 'Explanation Language'}
        </label>
        <div className="relative">
          <select
            value={languageId}
            onChange={(e) => setLanguageId(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-[#00594C] dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all text-sm font-semibold text-slate-800 dark:text-white shadow-xs appearance-none cursor-pointer"
          >
            <option value="" disabled>
              {isRtl ? 'اختر لغة الشرح' : 'Select explanation language'}
            </option>
            {languages.map((lang) => {
              const langId = lang.id || lang._id
              const langName = typeof lang.name === 'object'
                ? (isRtl ? lang.name.ar : lang.name.en) || lang.name.ar || lang.name.en
                : lang.name
              return (
                <option key={langId} value={langId} className="dark:bg-slate-850">
                  {langName}
                </option>
              )
            })}
          </select>
          <Languages size={18} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
