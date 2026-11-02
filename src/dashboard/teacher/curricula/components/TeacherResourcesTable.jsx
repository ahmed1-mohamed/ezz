import React from 'react';
import { BookOpen, BookMarked, FileText, Eye, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function getResourceTypeInfo(type, t) {
  const norm = String(type || '').toLowerCase();
  if (norm === 'book' || norm.includes('كتاب') || norm.includes('كتب')) {
    return {
      label: t('teacherCurricula.typeBook', 'كتاب'),
      icon: BookOpen,
      iconClass: 'bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400',
    };
  }
  if (norm === 'reference' || norm.includes('مرجع')) {
    return {
      label: t('teacherCurricula.typeReference', 'مرجع'),
      icon: BookMarked,
      iconClass: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400',
    };
  }
  return {
    label: t('teacherCurricula.typeWorksheet', 'ورقة عمل'),
    icon: FileText,
    iconClass: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400',
  };
}

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function TeacherResourcesTable({
  resources = [],
  onPreview,
  onDownload,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  return (
    <section className="space-y-3" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
          {t('teacherCurricula.resourcesTitle', 'الكتب والمراجع والمواد المساندة')}
        </h3>
        <p className="text-xs text-slate-400 font-semibold mt-0.5">
          {t('teacherCurricula.resourcesSubtitle', 'مصادر معتمدة مرتبطة بمناهج مجموعاتك')}
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden">
        {resources.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-4">
            <BookOpen size={36} className="text-slate-200 dark:text-slate-700 mb-3" />
            <p className="text-sm font-bold text-slate-400">
              {t('teacherCurricula.noResources', 'لا توجد مصادر مرتبطة بمناهجك')}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm" dir={isRtl ? 'rtl' : 'ltr'}>
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 bg-[#fbfdfc] dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-start text-xs font-black text-slate-600 dark:text-slate-300">
                    {t('teacherCurricula.colResourceName', 'اسم المصدر')}
                  </th>
                  <th className="px-6 py-4 text-start text-xs font-black text-slate-600 dark:text-slate-300">
                    {t('teacherCurricula.colType', 'النوع')}
                  </th>
                  <th className="px-6 py-4 text-start text-xs font-black text-slate-600 dark:text-slate-300">
                    {t('teacherCurricula.colLinkedCurriculum', 'المنهج المرتبط')}
                  </th>
                  <th className="px-6 py-4 text-start text-xs font-black text-slate-600 dark:text-slate-300">
                    {t('teacherCurricula.colBenefitingGroups', 'المجموعات المستفيدة')}
                  </th>
                  <th className="px-6 py-4 text-start text-xs font-black text-slate-600 dark:text-slate-300">
                    {t('teacherCurricula.colActions', 'الإجراءات')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {resources.map((resource, idx) => {
                  const typeInfo = getResourceTypeInfo(resource.type, t);
                  const Icon = typeInfo.icon;
                  const resourceName = resolveName(resource.name, isRtl) || resource.title || '-';
                  const curriculumName = resolveName(
                    typeof resource.curriculum === 'object' ? resource.curriculum?.name : resource.curriculum,
                    isRtl
                  ) || resource.curriculumName || '-';
                  const groupsStr = Array.isArray(resource.linkedGroups)
                    ? resource.linkedGroups
                        .map((g) => resolveName(typeof g === 'object' ? g.name : g, isRtl))
                        .filter(Boolean)
                        .join('، ')
                    : (resource.benefitingGroups || '-');
                  const pagesCount = resource.pages || resource.pagesCount;
                  const pagesStr = pagesCount ? `${pagesCount} ${t('teacherCurricula.pages', 'صفحة')} ، ` : '';
                  const sizeStr = resource.fileSize || resource.size || '';
                  const formatStr = resource.fileFormat || resource.format || 'PDF';
                  const metaSubtext = `${pagesStr}${sizeStr} • ${formatStr}`.trim();
                  return (
                    <tr
                      key={resource.id || resource._id || idx}
                      className="hover:bg-[#f8faf9] dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="px-6 py-4.5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${typeInfo.iconClass}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-white block">
                              {resourceName}
                            </span>
                            {metaSubtext && (
                              <span className="text-xs font-semibold text-slate-400">
                                {metaSubtext}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4.5">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {typeInfo.label}
                        </span>
                      </td>
                      <td className="px-6 py-4.5">
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {curriculumName}
                        </span>
                      </td>
                      <td className="px-6 py-4.5">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {groupsStr}
                        </span>
                      </td>
                      <td className="px-6 py-4.5">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onPreview(resource)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            <Eye size={13} />
                            <span>{t('teacherCurricula.preview', 'معاينة')}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => onDownload(resource)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            <Download size={13} />
                            <span>{t('teacherCurricula.download', 'تنزيل')}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
});
