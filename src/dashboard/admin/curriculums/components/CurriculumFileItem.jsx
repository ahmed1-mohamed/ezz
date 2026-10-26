import { ExternalLink, Eye, Download, Trash2 } from 'lucide-react'
import { getFileMeta } from '../utils/curriculumDetailsUtils.js'

export default function CurriculumFileItem({
  file,
  isRtl,
  onPreview,
  onDownload,
  onDelete,
}) {
  const fileName =
    typeof file?.name === 'object'
      ? (isRtl ? file?.name?.ar : file?.name?.en) || file?.name?.ar
      : file?.name

  const meta = getFileMeta(file, isRtl)
  const MetaIcon = meta.icon

  return (
    <div
      className={`bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-3 flex items-center justify-between gap-3 shadow-xs hover:shadow-sm transition-all ${
        meta.isLink && meta.fullUrl
          ? 'cursor-pointer hover:border-blue-300 dark:hover:border-blue-700'
          : ''
      }`}
      onClick={
        meta.isLink && meta.fullUrl
          ? () => window.open(meta.fullUrl, '_blank', 'noopener,noreferrer')
          : undefined
      }
    >
      <div className="flex items-center gap-3 overflow-hidden min-w-0">
        {meta.isImage && meta.fullUrl ? (
          <div
            onClick={(e) => {
              e.stopPropagation()
              onPreview(meta.fullUrl)
            }}
            className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-xs cursor-pointer relative group/thumb flex items-center justify-center"
            title={isRtl ? 'اضغط لعرض الصورة بحجمها الكامل' : 'Click to view full image'}
          >
            <img
              src={meta.fullUrl}
              alt={fileName}
              className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                if (e.currentTarget.nextSibling) {
                  e.currentTarget.nextSibling.style.display = 'flex'
                }
              }}
            />
            <div className={`w-full h-full hidden items-center justify-center ${meta.color}`}>
              <MetaIcon size={20} />
            </div>
          </div>
        ) : (
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${meta.color}`}>
            <MetaIcon size={20} />
          </div>
        )}

        <div className="overflow-hidden min-w-0 text-start">
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
            {fileName}
          </p>
          <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
            {meta.type}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onPreview(meta.fullUrl)
          }}
          className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-xl transition-all cursor-pointer"
          title={
            meta.isLink
              ? isRtl
                ? 'فتح الرابط في تبويب جديد'
                : 'Open link in new tab'
              : isRtl
              ? 'معاينة / فتح في تبويب جديد'
              : 'Preview / Open in new tab'
          }
        >
          {meta.isLink ? <ExternalLink size={15} /> : <Eye size={15} />}
        </button>

        {!meta.isLink && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onDownload(meta.fullUrl, fileName, meta.isLink)
            }}
            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-all cursor-pointer"
            title={isRtl ? 'تحميل الملف' : 'Download File'}
          >
            <Download size={15} />
          </button>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
          title={isRtl ? 'حذف' : 'Delete'}
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  )
}
