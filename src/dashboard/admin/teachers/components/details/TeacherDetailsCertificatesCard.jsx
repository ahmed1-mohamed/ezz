import { useState } from 'react'
import { FileText, Pencil, Eye, Trash2, Plus } from 'lucide-react'

function CertificateThumbnail({ fileUrl, title }) {
  const [imageError, setImageError] = useState(false)
  const isImage = Boolean(fileUrl) && !imageError && (
    fileUrl.split('?')[0].toLowerCase().endsWith('.png') ||
    fileUrl.split('?')[0].toLowerCase().endsWith('.jpg') ||
    fileUrl.split('?')[0].toLowerCase().endsWith('.jpeg') ||
    fileUrl.split('?')[0].toLowerCase().endsWith('.webp') ||
    fileUrl.split('?')[0].toLowerCase().endsWith('.svg') ||
    fileUrl.startsWith('data:image/') ||
    fileUrl.startsWith('blob:')
  )

  return (
    <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30 dark:text-rose-400 flex items-center justify-center shrink-0 overflow-hidden">
      {isImage ? (
        <img
          src={fileUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <FileText size={20} />
      )}
    </div>
  )
}

export default function TeacherDetailsCertificatesCard({
  teacher,
  isRtl = true,
  onAddCertificate,
  onEditCertificate,
  onDeleteCertificate
}) {
  const certificates = Array.isArray(teacher?.certificates)
    ? teacher.certificates.filter(c => typeof c === 'object' && c !== null && !c?.id?.startsWith?.('ach-'))
    : []

  const handleView = (cert) => {
    const fileUrl = cert?.url || cert?.file || cert?.image
    if (fileUrl) {
      window.open(fileUrl, '_blank')
    }
  }

  const formatSize = (size) => {
    if (!size) return isRtl ? 'ملف مرفق' : 'Attached file'
    if (typeof size === 'number') {
      return `${(size / (1024 * 1024)).toFixed(1)} MB`
    }
    return String(size)
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

      {certificates.length > 0 ? (
        <div className="space-y-3.5">
          {certificates.map((cert, index) => {
            const title = typeof cert.name === 'object' && cert.name !== null
              ? (isRtl ? (cert.name.ar || cert.name.en) : (cert.name.en || cert.name.ar))
              : (cert.name || (isRtl ? `شهادة #${index + 1}` : `Certificate #${index + 1}`))
            const fileUrl = cert?.url || cert?.file || cert?.image

            return (
              <div
                key={cert.id || cert._id || index}
                className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <CertificateThumbnail fileUrl={fileUrl} title={title} />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 block">
                      {title}
                    </h4>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {isRtl ? `الحجم: ${formatSize(cert.size)}` : `Size: ${formatSize(cert.size)}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {onEditCertificate && (
                    <button
                      type="button"
                      onClick={() => onEditCertificate(cert)}
                      className="w-9 h-9 rounded-full bg-teal-50 hover:bg-teal-100 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center transition-colors cursor-pointer"
                      title={isRtl ? 'تعديل الشهادة' : 'Edit Certificate'}
                    >
                      <Pencil size={15} />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleView(cert)}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                    title={isRtl ? 'عرض الشهادة' : 'View Certificate'}
                  >
                    <Eye size={15} />
                  </button>

                  {onDeleteCertificate && (
                    <button
                      type="button"
                      onClick={() => onDeleteCertificate(cert)}
                      className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 dark:bg-rose-950/40 dark:text-rose-400 flex items-center justify-center transition-colors cursor-pointer"
                      title={isRtl ? 'حذف الشهادة' : 'Delete Certificate'}
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="py-10 text-center text-slate-400 dark:text-slate-500 bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
          <FileText size={32} className="mx-auto opacity-40 text-slate-400" />
          <p className="text-sm font-semibold">
            {isRtl ? 'لا توجد شهادات أو أوراق مضافة حالياً' : 'No certificates or documents added yet'}
          </p>
        </div>
      )}
    </div>
  )
}
