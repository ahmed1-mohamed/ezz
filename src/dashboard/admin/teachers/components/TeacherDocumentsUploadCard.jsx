import { useState, useRef } from 'react'
import { Upload, FileText, Trash2 } from 'lucide-react'

export default function TeacherDocumentsUploadCard({
  formData,
  onChange,
  isRtl = true
}) {
  const [cvFile, setCvFile] = useState(null)
  const cvInputRef = useRef(null)
  const certInputRef = useRef(null)

  const certificates = Array.isArray(formData.certificates)
    ? formData.certificates.filter(c => (c instanceof File) || (c?.file instanceof File) || (c?.url && !c?.id?.startsWith?.('ach-')))
    : []

  const handleCvChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCvFile(file)
      onChange('cvFile', file)
      onChange('cv', file)
    }
  }

  const handleCertChange = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const currentList = Array.isArray(formData.certificates) ? formData.certificates : []
    onChange('certificates', [...currentList, ...files])
    if (certInputRef.current) certInputRef.current.value = ''
  }

  const handleRemoveCert = (fileToRemove) => {
    const currentList = Array.isArray(formData.certificates) ? formData.certificates : []
    onChange('certificates', currentList.filter(c => c !== fileToRemove))
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'المستندات والمراجعة' : 'Documents & Review'}
      </h2>

      <div className="space-y-5">
         <div>
          {cvFile ? (
            <div className="flex items-center justify-between p-4 bg-[#f8faf9] dark:bg-slate-950/40 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <FileText className="text-[#005953]" size={22} />
                <div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block">
                    {cvFile.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCvFile(null)
                  onChange('cvFile', null)
                  onChange('cv', null)
                  if (cvInputRef.current) cvInputRef.current.value = ''
                }}
                className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors cursor-pointer"
                title={isRtl ? 'حذف' : 'Remove'}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ) : (
            <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 px-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-[#005953] bg-[#f8faf9] dark:bg-slate-950/20 transition-all">
              <div className="flex flex-col items-center justify-center text-center space-y-1.5">
                <div className="p-2.5 rounded-xl text-slate-400 dark:text-slate-500 transition-transform group-hover:scale-110">
                  <Upload size={24} className="text-slate-400" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {isRtl ? 'رفع السيرة الذاتية' : 'Upload CV / Resume'}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {isRtl ? '(PDF, DOC, DOCX حتى 5 MB)' : '(PDF, DOC, DOCX up to 5 MB)'}
                </span>
              </div>
              <input
                ref={cvInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleCvChange}
              />
            </label>
          )}
        </div>

         <div>
          <label className="relative cursor-pointer group flex flex-col items-center justify-center w-full py-8 px-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-[#005953] bg-[#f8faf9] dark:bg-slate-950/20 transition-all">
            <div className="flex flex-col items-center justify-center text-center space-y-1.5">
              <div className="p-2.5 rounded-xl text-slate-400 dark:text-slate-500 transition-transform group-hover:scale-110">
                <Upload size={24} className="text-slate-400" />
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {isRtl ? 'رفع الشهادات والأوراق' : 'Upload Certificates & Documents'}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                {isRtl ? '(PDF, PNG, JPG حتى 5 MB)' : '(PDF, PNG, JPG up to 5 MB)'}
              </span>
            </div>
            <input
              ref={certInputRef}
              type="file"
              multiple
              accept=".pdf,image/*"
              className="hidden"
              onChange={handleCertChange}
            />
          </label>

           {certificates.length > 0 && (
            <div className="mt-3 space-y-2">
              {certificates.map((fileItem, idx) => {
                const name = fileItem?.name || `شهادة #${idx + 1}`
                return (
                  <div key={idx} className="flex items-center justify-between p-3 bg-[#f8faf9] dark:bg-slate-950/40 rounded-xl border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <FileText className="text-[#005953]" size={18} />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate max-w-xs">
                        {name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveCert(fileItem)}
                      className="p-1 text-slate-400 hover:text-rose-500 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}