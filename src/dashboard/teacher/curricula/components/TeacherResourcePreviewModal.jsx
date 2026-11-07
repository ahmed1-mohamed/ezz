import React from 'react';
import { createPortal } from 'react-dom';
import { X, BookOpen, Download, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function TeacherResourcePreviewModal({
  resource,
  isOpen,
  onClose,
  onDownload,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!isOpen || !resource || typeof document === 'undefined') return null;
  const resourceName = resolveName(resource.name, isRtl) || resource.title || '-';
  const curriculumName = resolveName(
    typeof resource.curriculum === 'object' ? resource.curriculum?.name : resource.curriculum,
    isRtl
  ) || resource.curriculumName || '-';
  const formatStr = resource.fileFormat || resource.format || 'PDF';
  const sizeStr = resource.fileSize || resource.size || '';
  const pagesCount = resource.pages || resource.pagesCount;
  const url = resource.previewUrl || resource.url || resource.fileUrl || null;
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white dark:bg-slate-900 rounded-[28px] max-w-xl w-full border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col">
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                {resourceName}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                {formatStr} {sizeStr ? `• ${sizeStr}` : ''} {pagesCount ? `• ${pagesCount} ${t('teacherCurricula.pages', 'صفحة')}` : ''}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700/60">
              <span className="font-semibold text-slate-400">{t('teacherCurricula.colLinkedCurriculum', 'المنهج المرتبط')}:</span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{curriculumName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700/60">
              <span className="font-semibold text-slate-400">{t('teacherCurricula.colType', 'النوع')}:</span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{resource.type || t('teacherCurricula.typeBook', 'كتاب')}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold text-slate-400">{t('teacherCurricula.fileFormat', 'صيغة الملف')}:</span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{formatStr}</span>
            </div>
          </div>
          <div className="h-44 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center p-4 bg-slate-50/50 dark:bg-slate-800/20">
            <BookOpen size={36} className="text-slate-300 dark:text-slate-600 mb-2" />
            <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
              {resourceName}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              {t('teacherCurricula.previewNotice', 'المعاينة المباشرة متاحة عبر تنزيل الملف أو فتحه في نافذة جديدة')}
            </p>
          </div>
        </div>
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink size={13} />
              <span>{t('teacherCurricula.openInNewTab', 'فتح في نافذة')}</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => onDownload(resource)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00594C] text-white text-xs font-bold hover:bg-[#00483d] transition-colors cursor-pointer"
          >
            <Download size={13} />
            <span>{t('teacherCurricula.download', 'تنزيل')}</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
});

