import { BookOpen, FileText, ExternalLink, Download, Plus, Pencil, Trash2 } from 'lucide-react'

export default function TeacherDetailsSpecializationsAndCertificates({
  teacher,
  isRtl,
  onAddCertificate,
  onEditCertificate,
  onDeleteCertificate
}) {
  const specializations = Array.isArray(teacher?.specializations) ? teacher.specializations : []
  const certificates = Array.isArray(teacher?.certificates) ? teacher.certificates : []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-start">
       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
        <h3 className="text-base font-bold text-slate-850 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 flex items-center gap-2">
          <BookOpen className="text-[#005953] dark:text-emerald-400" size={18} />
          <span>
            {isRtl ? 'المناهج والتخصصات المرتبطة' : 'Associated Curricula & Specializations'} ({specializations.length})
          </span>
        </h3>

        <div className="space-y-3">
          {specializations.length === 0 ? (
            <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs font-semibold">
              {isRtl ? 'لا توجد تخصصات أو مناهج مرتبطة حالياً.' : 'No curricula or specializations associated yet.'}
            </div>
          ) : (
            specializations.map((spec, sIdx) => {
              const specName = typeof spec === 'string' ? spec : (spec?.name || '')
              const specImage = typeof spec === 'object' ? (spec?.image || spec?.icon) : null
              const specDesc = typeof spec === 'object' ? (spec?.description || spec?.bio) : null

              return (
                <div
                  key={spec?.id || spec?._id || specName || sIdx}
                  className="flex items-center gap-4 p-3.5 bg-slate-50/70 dark:bg-slate-950/30 rounded-2xl border border-slate-100 dark:border-slate-850/60"
                >
                  {specImage ? (
                    <img
                      src={specImage}
                      alt={specName}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-850"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <BookOpen size={20} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-extrabold text-slate-800 dark:text-white truncate">
                      {specName}
                    </h4>
                    {specDesc && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 line-clamp-2 mt-0.5">
                        {specDesc}
                      </p>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3 gap-3">
          <h3 className="text-base font-bold text-slate-850 dark:text-white flex items-center gap-2">
            <FileText className="text-amber-500" size={18} />
            <span>
              {isRtl ? 'الإجازات والشهادات المعتمدة' : 'Certificates & Accreditations'} ({certificates.length})
            </span>
          </h3>

          {onAddCertificate && (
            <button
              type="button"
              onClick={onAddCertificate}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#005953] hover:bg-[#004742] text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Plus size={14} />
              <span>{isRtl ? 'إضافة شهادة' : 'Add Certificate'}</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          {certificates.length === 0 ? (
            <div className="text-center py-8 space-y-3">
              <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
                {isRtl ? 'لا توجد إجازات أو شهادات مرفوعة بعد.' : 'No certificates uploaded yet.'}
              </p>
              {onAddCertificate && (
                <button
                  type="button"
                  onClick={onAddCertificate}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <Plus size={14} />
                  <span>{isRtl ? 'إضافة أول شهادة' : 'Upload first certificate'}</span>
                </button>
              )}
            </div>
          ) : (
            certificates.map((cert, index) => {
              const certName = typeof cert === 'string' ? cert : (cert?.name || `شهادة #${index + 1}`)
              const certFile = typeof cert === 'object' && cert !== null ? (cert.file || cert.url || cert.image) : (typeof cert === 'string' ? cert : null)
              const isPdf = typeof certFile === 'string' && certFile.toLowerCase().endsWith('.pdf')

              return (
                <div
                  key={cert?.id || cert?._id || index}
                  className="flex items-center justify-between p-3.5 bg-slate-50/70 dark:bg-slate-950/30 rounded-2xl border border-slate-100 dark:border-slate-850/60 gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
                      <FileText size={18} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                        {certName}
                      </h4>
                      {certFile && typeof certFile === 'string' && (
                        <span className="text-[10px] text-slate-400 font-semibold uppercase">
                          {isPdf ? 'PDF Document' : 'Image File'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {certFile && typeof certFile === 'string' && (
                      <>
                        <a
                          href={certFile}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-slate-500 hover:text-[#005953] dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          title={isRtl ? 'عرض الشهادة' : 'View Certificate'}
                        >
                          <ExternalLink size={15} />
                        </a>
                        <a
                          href={certFile}
                          download
                          className="p-1.5 text-slate-500 hover:text-[#005953] dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          title={isRtl ? 'تحميل' : 'Download'}
                        >
                          <Download size={15} />
                        </a>
                      </>
                    )}

                    {onEditCertificate && (
                      <button
                        type="button"
                        onClick={() => onEditCertificate(cert)}
                        className="p-1.5 text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title={isRtl ? 'تعديل أو استبدال الشهادة' : 'Edit or replace certificate'}
                      >
                        <Pencil size={15} />
                      </button>
                    )}

                    {onDeleteCertificate && (
                      <button
                        type="button"
                        onClick={() => onDeleteCertificate(cert)}
                        className="p-1.5 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title={isRtl ? 'حذف الشهادة' : 'Delete certificate'}
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
