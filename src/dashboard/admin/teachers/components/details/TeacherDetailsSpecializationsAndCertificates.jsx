import { BookOpen, FileText, ExternalLink, Download } from 'lucide-react'

export default function TeacherDetailsSpecializationsAndCertificates({ teacher, isRtl }) {
  const specializations = teacher?.specializations || []
  const certificates = teacher?.certificates || []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-start">
      {/* Specializations / Curricula */}
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
            specializations.map((spec) => (
              <div
                key={spec.id || spec._id || spec.name}
                className="flex items-center gap-4 p-3.5 bg-slate-50/70 dark:bg-slate-950/30 rounded-2xl border border-slate-100 dark:border-slate-850/60"
              >
                {spec.image ? (
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-800"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-extrabold text-slate-800 dark:text-white truncate">
                    {spec.name}
                  </h4>
                  {spec.description && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 line-clamp-2 mt-0.5">
                      {spec.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Certificates & Accreditations */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
        <h3 className="text-base font-bold text-slate-850 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 flex items-center gap-2">
          <FileText className="text-amber-500" size={18} />
          <span>
            {isRtl ? 'الإجازات والشهادات المعتمدة' : 'Certificates & Accreditations'} ({certificates.length})
          </span>
        </h3>

        <div className="space-y-3">
          {certificates.length === 0 ? (
            <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs font-semibold">
              {isRtl ? 'لا توجد إجازات أو شهادات مرفوعة بعد.' : 'No certificates uploaded yet.'}
            </div>
          ) : (
            certificates.map((cert, index) => {
              const certName = typeof cert === 'string' ? cert : (cert.name || `شهادة #${index + 1}`)
              const certFile = typeof cert === 'object' ? cert.file : null
              const isPdf = certFile && certFile.toLowerCase().endsWith('.pdf')

              return (
                <div
                  key={cert.id || index}
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
                      {certFile && (
                        <span className="text-[10px] text-slate-400 font-semibold uppercase">
                          {isPdf ? 'PDF Document' : 'Image File'}
                        </span>
                      )}
                    </div>
                  </div>

                  {certFile && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={certFile}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-500 hover:text-[#005953] dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                        title={isRtl ? 'فتح الشهادة' : 'Open Certificate'}
                      >
                        <ExternalLink size={15} />
                      </a>
                      <a
                        href={certFile}
                        download
                        className="p-2 text-slate-500 hover:text-[#005953] dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                        title={isRtl ? 'تحميل الشهادة' : 'Download Certificate'}
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
