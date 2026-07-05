import { useState } from 'react'
import { Upload, FileText, Trash2 } from 'lucide-react'

export default function TeacherDocumentsUploadCard({
  onChange,
  isRtl
}) {
  const [cvFile, setCvFile] = useState(null)
  const [certFile, setCertFile] = useState(null)

  const handleCvChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCvFile(file)
      onChange('cvFile', file.name)
    }
  }

  const handleCertChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCertFile(file)
      onChange('certFile', file.name)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">

      <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3">
        {isRtl ? 'المستندات والمراجعة' : 'Documents & Review'}
      </h3>

      <div className="space-y-6">

        <div>
          <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
            {isRtl ? 'السيرة الذاتية' : 'Resume / CV'}
          </span>

          {cvFile ? (
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-150 dark:border-slate-850">
              <div className="flex items-center gap-3">
                <FileText className="text-brand-500" size={20} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {cvFile.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCvFile(null)
                  onChange('cvFile', null)
                }}
                className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ) : (
            <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white dark:bg-slate-950/20 transition-all">
              <div className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 shadow-sm transition-transform group-hover:scale-110">
                  <Upload size={20} />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {isRtl ? 'رفع السيرة الذاتية' : 'Upload CV / Resume'}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  {isRtl ? 'حتى 5 MB (PDF, DOC, DOCX)' : 'Up to 5 MB (PDF, DOC, DOCX)'}
                </span>
              </div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleCvChange}
              />
            </label>
          )}
        </div>

        <div>
          <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
            {isRtl ? 'الشهادات والأوراق' : 'Certificates & Documents'}
          </span>

          {certFile ? (
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-955/40 rounded-2xl border border-slate-150 dark:border-slate-850">
              <div className="flex items-center gap-3">
                <FileText className="text-brand-500" size={20} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {certFile.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCertFile(null)
                  onChange('certFile', null)
                }}
                className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ) : (
            <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white dark:bg-slate-955/20 transition-all">
              <div className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 shadow-sm transition-transform group-hover:scale-110">
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
                onChange={handleCertChange}
              />
            </label>
          )}
        </div>

      </div>

    </div>
  )
}