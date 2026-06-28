import { FileText, Trash2, Upload } from 'lucide-react'

export default function StudentStep3({
  formData,
  handleChange,
  isRtl,
  cvFileName,
  setCvFileName,
  certFileName,
  setCertFileName
}) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
          {isRtl ? 'بيانات صفحه العرض' : 'Display Page Data'}
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'عدد الطلاب' : 'Students Count'}
              </label>
              <input
                type="number"
                value={formData.studentsCount}
                onChange={(e) => handleChange('studentsCount', e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                placeholder={isRtl ? 'عدد الطلاب' : 'e.g. 45'}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
              </label>
              <input
                type="number"
                value={formData.experienceYears}
                onChange={(e) => handleChange('experienceYears', e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                placeholder={isRtl ? 'سنوات الخبرة' : 'e.g. 8'}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'اجمالي الحصص' : 'Total Sessions'}
            </label>
            <input
              type="number"
              value={formData.totalSessions}
              onChange={(e) => handleChange('totalSessions', e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'عدد الحصص' : 'e.g. 12'}
            />
          </div>
        </div>
      </div>

      {/* 2. Documents Upload Dropzones */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
          {isRtl ? 'المستندات والمراجعة' : 'Documents & Review'}
        </h3>

        <div className="space-y-6">
          {/* CV Dropzone */}
          <div className="space-y-2">
            {cvFileName ? (
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-955/40 rounded-2xl border border-slate-150">
                <div className="flex items-center gap-3">
                  <FileText className="text-brand-500" size={20} />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-205">{cvFileName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCvFileName(null)}
                  className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ) : (
              <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 rounded-2xl border border-dashed border-slate-250 dark:border-slate-800 hover:border-brand-500 bg-white dark:bg-slate-955/20 transition-all">
                <div className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-450 shadow-sm transition-transform group-hover:scale-110">
                    <Upload size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {isRtl ? 'رفع السيرة الذاتية' : 'Upload Resume / CV'}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'حتى 5 MB (PDF, DOC, DOCX)' : 'Up to 5 MB (PDF, DOC, DOCX)'}
                  </span>
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => e.target.files[0] && setCvFileName(e.target.files[0].name)}
                />
              </label>
            )}
          </div>

          {/* Certificates Dropzone */}
          <div className="space-y-2">
            {certFileName ? (
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-955/40 rounded-2xl border border-slate-150">
                <div className="flex items-center gap-3">
                  <FileText className="text-brand-500" size={20} />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-205">{certFileName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCertFileName(null)}
                  className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ) : (
              <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 rounded-2xl border border-dashed border-slate-250 dark:border-slate-800 hover:border-brand-500 bg-white dark:bg-slate-955/20 transition-all">
                <div className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-450 shadow-sm transition-transform group-hover:scale-110">
                    <Upload size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {isRtl ? 'رفع الشهادات والأوراق' : 'Upload Certificates & Documents'}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'حتى 5 MB (PDF, PNG, JPG)' : 'Up to 5 MB (PDF, PNG, JPG)'}
                  </span>
                </div>
                <input
                  type="file"
                  accept=".pdf,image/*"
                  className="hidden"
                  onChange={(e) => e.target.files[0] && setCertFileName(e.target.files[0].name)}
                />
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
