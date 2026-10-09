import { FileText, Pencil, Eye, Trash2, Plus } from 'lucide-react'

export default function TeacherDetailsCertificatesCard({
  teacher,
  isRtl = true,
  onAddCertificate,
  onEditCertificate,
  onDeleteCertificate
}) {
  const rawCertificates = Array.isArray(teacher?.certificates)
    ? teacher.certificates.filter(c => typeof c === 'object' && c !== null && !c?.id?.startsWith?.('ach-'))
    : []

  // Sample items matching the screenshot if none present
  const certificates = rawCertificates.length > 0 ? rawCertificates : [
    { id: '1', name: 'شهادة التخرج', size: '2.4 MB' },
    { id: '2', name: 'شهادة تقدير', size: '2.4 MB' }
  ]

  const handleView = (cert) => {
    if (cert?.url) {
      window.open(cert.url, '_blank')
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'الشهادات و الاوراق' : 'Certificates & Documents'}
        </h2>
        {onAddCertificate && (
          <button
            type="button"
            onClick={onAddCertificate}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#005953]/10 hover:bg-[#005953] text-[#005953] hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            <Plus size={14} />
            <span>{isRtl ? 'إضافة شهادة' : 'Add Certificate'}</span>
          </button>
        )}
      </div>

      <div className="space-y-3.5">
        {certificates.map((cert, index) => {
          const title = cert.name || (isRtl ? `شهادة #${index + 1}` : `Certificate #${index + 1}`)
          const size = cert.size || '2.4 MB'

          return (
            <div
              key={cert.id || index}
              className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between"
            >
               <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 block">
                    {title}
                  </h4>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {isRtl ? `الحجم: ${size}` : `Size: ${size}`}
                  </span>
                </div>
              </div>

               <div className="flex items-center gap-2">
                 <button
                  type="button"
                  onClick={() => onEditCertificate && onEditCertificate(cert)}
                  className="w-9 h-9 rounded-full bg-teal-50 hover:bg-teal-100 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center transition-colors cursor-pointer"
                  title={isRtl ? 'تعديل الشهادة' : 'Edit Certificate'}
                >
                  <Pencil size={15} />
                </button>

                 <button
                  type="button"
                  onClick={() => handleView(cert)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  title={isRtl ? 'عرض الشهادة' : 'View Certificate'}
                >
                  <Eye size={15} />
                </button>

                 <button
                  type="button"
                  onClick={() => onDeleteCertificate && onDeleteCertificate(cert)}
                  className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 dark:bg-rose-950/40 dark:text-rose-400 flex items-center justify-center transition-colors cursor-pointer"
                  title={isRtl ? 'حذف الشهادة' : 'Delete Certificate'}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
