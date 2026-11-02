import { ExternalLink, Eye, Download, Trash2, Pencil, Users, GraduationCap } from 'lucide-react'
import { getFileMeta } from '../utils/curriculumDetailsUtils.js'

export default function CurriculumFileItem({
  file,
  isRtl,
  onPreview,
  onDownload,
  onEdit,
  onToggleVisibility,
  onDelete,
}) {
  const fileName =
    typeof file?.name === 'object'
      ? (isRtl ? file?.name?.ar : file?.name?.en) || file?.name?.ar
      : file?.name

  const meta = getFileMeta(file, isRtl)
  const MetaIcon = meta.icon

  const isVisibleToStudents = file?.showToStudents !== false
  const isVisibleToTeachers = file?.showToTeachers !== false

  const handleToggleStudents = (e) => {
    e.stopPropagation()
    if (onToggleVisibility) {
      onToggleVisibility(file, 'showToStudents')
    }
  }

  const handleToggleTeachers = (e) => {
    e.stopPropagation()
    if (onToggleVisibility) {
      onToggleVisibility(file, 'showToTeachers')
    }
  }

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

        <div className="overflow-hidden min-w-0 text-start space-y-1">
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
            {fileName}
          </p>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-semibold text-slate-400">
              {meta.type}
            </span>

            {/* Student visibility flag badge */}
            <button
              type="button"
              onClick={handleToggleStudents}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
                isVisibleToStudents
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700 hover:bg-slate-200 line-through'
              }`}
              title={
                isRtl
                  ? isVisibleToStudents
                    ? 'يظهر للطلاب (انقر لتغيير الحالة)'
                    : 'مخفي عن الطلاب (انقر لتغيير الحالة)'
                  : isVisibleToStudents
                  ? 'Visible to students (click to toggle)'
                  : 'Hidden from students (click to toggle)'
              }
            >
              <Users size={11} className={isVisibleToStudents ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'} />
              <span>{isRtl ? 'الطلاب' : 'Students'}</span>
            </button>

            {/* Teacher visibility flag badge */}
            <button
              type="button"
              onClick={handleToggleTeachers}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
                isVisibleToTeachers
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-100'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700 hover:bg-slate-200 line-through'
              }`}
              title={
                isRtl
                  ? isVisibleToTeachers
                    ? 'يظهر للمعلمين (انقر لتغيير الحالة)'
                    : 'مخفي عن المعلمين (انقر لتغيير الحالة)'
                  : isVisibleToTeachers
                  ? 'Visible to teachers (click to toggle)'
                  : 'Hidden from teachers (click to toggle)'
              }
            >
              <GraduationCap size={11} className={isVisibleToTeachers ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'} />
              <span>{isRtl ? 'المعلمين' : 'Teachers'}</span>
            </button>
          </div>
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

        {onEdit && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onEdit(file)
            }}
            className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30 rounded-xl transition-all cursor-pointer"
            title={isRtl ? 'تعديل الملف والصلاحيات' : 'Edit file & permissions'}
          >
            <Pencil size={15} />
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
