import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Library,
  FileText,
  Link2,
  Download,
  ExternalLink,
  BookOpen,
  User,
  FolderOpen,
  Search,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

export default function StudentMaterials() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [activeTab, setActiveTab] = useState('attachments'); 
  const [loading, setLoading] = useState(true);
  const [attachmentsData, setAttachmentsData] = useState([]);
  const [curriculaData, setCurriculaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCurricula, setExpandedCurricula] = useState({});
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [attRes, currRes] = await Promise.allSettled([
          studentPortalApi.fetchCurriculaAttachments(),
          studentPortalApi.fetchCurricula(),
        ]);
        if (attRes.status === 'fulfilled') {
          const rawAtt = attRes.value?.data || attRes.value || [];
          setAttachmentsData(Array.isArray(rawAtt) ? rawAtt : []);
        }
        if (currRes.status === 'fulfilled') {
          const rawCurr = currRes.value?.data || currRes.value || [];
          setCurriculaData(Array.isArray(rawCurr) ? rawCurr : []);
        }
      } catch (err) {
        console.warn('Could not load materials data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);
  const handleOpenItem = (url, type) => {
    if (!url) return;
    if (type === 'link') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  const toggleCurriculum = (id) => {
    setExpandedCurricula((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-[#0f7a6c] dark:text-emerald-400">
              <Library size={28} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {t('studentDashboard.materials.title', 'المواد والمناهج التعليمية')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t('studentDashboard.materials.subtitle', 'ملفات وكتب ومرفقات المناهج الدراسية الخاصة بمجموعاتك')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('attachments')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'attachments'
                  ? 'bg-[#0f7a6c] text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {t('studentDashboard.materials.tabAttachments', 'المرفقات والملفات')}
            </button>
            <button
              onClick={() => setActiveTab('curricula')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'curricula'
                  ? 'bg-[#0f7a6c] text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {t('studentDashboard.materials.tabCurricula', 'المناهج والوحدات')}
            </button>
          </div>
        </div>
        <div className="relative max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('studentDashboard.materials.search', 'بحث في المرفقات والمناهج...')}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 ps-10 pe-4 text-xs sm:text-sm text-slate-800 dark:text-white outline-none focus:border-[#0f7a6c] shadow-xs"
          />
          <Search size={16} className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400" />
        </div>
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Spinner />
          </div>
        ) : activeTab === 'attachments' ? (
          attachmentsData.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-700 space-y-3">
              <FolderOpen size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
                {t('studentDashboard.materials.noAttachments', 'لا توجد مرفقات متاحة حالياً')}
              </h3>
            </div>
          ) : (
            <div className="space-y-6">
              {attachmentsData.map((groupItem, gIdx) => {
                const attachments = (groupItem.attachments || []).filter((att) => {
                  if (!searchTerm.trim()) return true;
                  const term = searchTerm.toLowerCase();
                  return (
                    att.name?.toLowerCase().includes(term) ||
                    att.unitName?.toLowerCase().includes(term) ||
                    groupItem.curriculumName?.toLowerCase().includes(term)
                  );
                });
                if (attachments.length === 0 && searchTerm.trim()) return null;
                return (
                  <div
                    key={groupItem.groupId || gIdx}
                    className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden text-start"
                  >
                    <div className="p-5 sm:p-6 bg-slate-50/60 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-400">
                          {groupItem.groupName}
                        </span>
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                          {groupItem.curriculumName}
                        </h2>
                      </div>
                      {groupItem.teacher && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <User size={13} className="text-slate-400" />
                          <span>{t('studentDashboard.materials.teacher', 'المعلم')}: {groupItem.teacher}</span>
                        </div>
                      )}
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                      {attachments.map((att) => {
                        const isLink = att.type === 'link';
                        return (
                          <div
                            key={att.id}
                            className="p-5 flex items-center justify-between gap-4 hover:bg-slate-50/40 dark:hover:bg-slate-700/20 transition-colors"
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div
                                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                                  isLink
                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'bg-emerald-50 text-[#0f7a6c] dark:bg-emerald-900/30 dark:text-emerald-400'
                                }`}
                              >
                                {isLink ? <Link2 size={20} /> : <FileText size={20} />}
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                                  {att.name}
                                </h3>
                                {att.unitName && (
                                  <p className="text-xs text-slate-400 mt-0.5 truncate">
                                    {att.unitName}
                                  </p>
                                )}
                              </div>
                            </div>
                            <button
                              onClick={() => handleOpenItem(att.url, att.type)}
                              className="px-4 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-95 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 shrink-0 cursor-pointer"
                            >
                              {isLink ? (
                                <>
                                  <ExternalLink size={13} />
                                  <span>{t('studentDashboard.materials.openLink', 'فتح الرابط')}</span>
                                </>
                              ) : (
                                <>
                                  <Download size={13} />
                                  <span>{t('studentDashboard.materials.download', 'تحميل')}</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          curriculaData.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-700 space-y-3">
              <BookOpen size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
                {t('studentDashboard.materials.noCurricula', 'لا توجد مناهج دراسية متاحة حالياً')}
              </h3>
            </div>
          ) : (
            <div className="space-y-6">
              {curriculaData.map((currItem, cIdx) => {
                const curriculum = currItem.curriculum || {};
                const isExpanded = expandedCurricula[curriculum.id || cIdx];
                return (
                  <div
                    key={currItem.groupId || cIdx}
                    className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden text-start"
                  >
                    <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="flex items-start sm:items-center gap-4 min-w-0">
                        {curriculum.image ? (
                          <img
                            src={curriculum.image}
                            alt=""
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shrink-0"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 dark:bg-emerald-900/30 text-[#0f7a6c] dark:text-emerald-400 rounded-2xl flex items-center justify-center shrink-0">
                            <BookOpen size={32} />
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-xl">
                            {currItem.groupName}
                          </span>
                          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mt-1.5">
                            {curriculum.name}
                          </h2>
                          {curriculum.description && (
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                              {curriculum.description}
                            </p>
                          )}
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            {curriculum.language && (
                              <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-100 dark:border-slate-700">
                                {curriculum.language}
                              </span>
                            )}
                            {curriculum.studentLevel && (
                              <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-0.5 rounded-full">
                                {curriculum.studentLevel}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCurriculum(curriculum.id || cIdx)}
                        className="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer self-end md:self-auto"
                      >
                        <span>{isExpanded ? t('studentDashboard.materials.hideUnits', 'إخفاء الوحدات') : t('studentDashboard.materials.viewUnits', 'عرض الوحدات والملفات')}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                    <AnimatePresence>
                      {isExpanded && Array.isArray(curriculum.levels) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-slate-100 dark:border-slate-700 p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-900/30 space-y-6"
                        >
                          {curriculum.levels.map((lvl) => (
                            <div key={lvl.levelId} className="space-y-4">
                              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#0f7a6c]" />
                                <span>{lvl.name}</span>
                              </h3>
                              {Array.isArray(lvl.units) && (
                                <div className="space-y-3 ps-4">
                                  {lvl.units.map((unit) => (
                                    <div
                                      key={unit.unitId}
                                      className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 space-y-3"
                                    >
                                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">
                                        {unit.name}
                                      </h4>
                                      {Array.isArray(unit.files) && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                          {unit.files.map((file) => {
                                            const isLink = file.type === 'link';
                                            return (
                                              <div
                                                key={file.fileId}
                                                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 gap-2"
                                              >
                                                <div className="flex items-center gap-2 truncate">
                                                  {isLink ? (
                                                    <Link2 size={14} className="text-blue-500 shrink-0" />
                                                  ) : (
                                                    <FileText size={14} className="text-[#0f7a6c] shrink-0" />
                                                  )}
                                                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">
                                                    {file.name}
                                                  </span>
                                                </div>
                                                <button
                                                  onClick={() => handleOpenItem(file.url, file.type)}
                                                  className="text-[11px] font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline shrink-0 cursor-pointer"
                                                >
                                                  {isLink ? t('studentDashboard.materials.open', 'فتح') : t('studentDashboard.materials.download', 'تحميل')}
                                                </button>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
