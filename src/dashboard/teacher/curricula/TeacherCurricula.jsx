import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { teacherCurriculaApi } from '@/shared/services/api/teacherCurriculaApi.js';
import TeacherCurriculaHeader from './components/TeacherCurriculaHeader.jsx';
import TeacherCurriculaStatsGrid from './components/TeacherCurriculaStatsGrid.jsx';
import TeacherActiveCurriculumDetail from './components/TeacherActiveCurriculumDetail.jsx';
import TeacherCurriculumSidebarCard from './components/TeacherCurriculumSidebarCard.jsx';
import TeacherResourcesTable from './components/TeacherResourcesTable.jsx';
import TeacherCurriculumPlanModal from './components/TeacherCurriculumPlanModal.jsx';
import TeacherResourcePreviewModal from './components/TeacherResourcePreviewModal.jsx';

export default function TeacherCurricula() {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [selectedCurriculumId, setSelectedCurriculumId] = useState(null);
  const [planModalCurriculum, setPlanModalCurriculum] = useState(null);
  const [previewModalResource, setPreviewModalResource] = useState(null);
  const teacherName = useMemo(() => {
    if (!user) return t('teacher.teacherFallback', 'معلم');
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || t('teacher.teacherFallback', 'معلم');
    }
    return String(user.name || '') || t('teacher.teacherFallback', 'معلم');
  }, [user, isRtl, t]);
  const userInitial = useMemo(() => {
    const name = String(teacherName || '').trim();
    return name.charAt(0) || 'أ';
  }, [teacherName]);
  const { data: responseData, isLoading } = useQuery({
    queryKey: ['teacherCurricula'],
    queryFn: () => teacherCurriculaApi.fetchCurricula(),
    staleTime: 60 * 1000,
  });
  const rawCurricula = useMemo(() => {
    let list = [];
    if (Array.isArray(responseData?.data)) list = responseData.data;
    else if (Array.isArray(responseData?.curricula)) list = responseData.curricula;
    else if (Array.isArray(responseData)) list = responseData;
    return list;
  }, [responseData]);
  const allResources = useMemo(() => {
    const res = rawCurricula.flatMap((cur) =>
      (Array.isArray(cur.levels) ? cur.levels : []).flatMap((level) =>
        (Array.isArray(level.units) ? level.units : []).flatMap((unit) =>
          (Array.isArray(unit.files) ? unit.files : []).map((file) => ({
            ...file,
            id: file.fileId || file.id || file._id,
            curriculum: cur.name,
            levelName: level.name,
            unitName: unit.name,
            linkedGroups: cur.groups || [],
          }))
        )
      )
    );
    const topLevel = Array.isArray(responseData?.resources) ? responseData.resources : [];
    const unique = new Map();
    [...res, ...topLevel].forEach((resource, index) => {
      const key = resource.fileId || resource.id || resource._id || resource.url || `${resource.name || 'resource'}-${index}`;
      if (!unique.has(String(key))) unique.set(String(key), resource);
    });
    return [...unique.values()];
  }, [rawCurricula, responseData]);
  const statistics = useMemo(() => {
    const stats = responseData?.statistics || responseData?.stats || {};
    const groupIds = new Set(rawCurricula.flatMap((curriculum) =>
      (Array.isArray(curriculum.groups) ? curriculum.groups : []).map((group) => group.id || group._id).filter(Boolean)
    ));
    const booksCount = allResources.filter((resource) => String(resource.type || '').toLowerCase() === 'book').length;
    return {
      total: stats.total ?? rawCurricula.length,
      books: stats.books ?? stats.booksCount ?? booksCount,
      support: stats.supportMaterials ?? stats.support ?? allResources.length - booksCount,
      linkedGroups: stats.linkedGroups ?? groupIds.size,
    };
  }, [responseData, rawCurricula, allResources]);
  const activeCurriculum = useMemo(() => {
    if (rawCurricula.length === 0) return null;
    if (selectedCurriculumId) {
      const found = rawCurricula.find((c) => (c.id || c._id) === selectedCurriculumId);
      if (found) return found;
    }
    return rawCurricula[0];
  }, [rawCurricula, selectedCurriculumId]);
  const sideCurricula = useMemo(() => {
    if (!activeCurriculum) return rawCurricula;
    return rawCurricula.filter((c) => (c.id || c._id) !== (activeCurriculum.id || activeCurriculum._id));
  }, [rawCurricula, activeCurriculum]);
  function handleSelectCurriculum(curriculum) {
    setSelectedCurriculumId(curriculum.id || curriculum._id);
  }
  function handleOpenPlan(curriculum) {
    setPlanModalCurriculum(curriculum);
  }
  function handleClosePlan() {
    setPlanModalCurriculum(null);
  }
  function handlePreviewResource(resource) {
    setPreviewModalResource(resource);
  }
  function handleClosePreview() {
    setPreviewModalResource(null);
  }
  function handleDownloadResource(resource) {
    const downloadUrl = resource.downloadUrl || resource.url || resource.fileUrl;
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
      return;
    }
    alert(t('teacherCurricula.downloadStarted', 'جاري بدء تحميل الملف...'));
  }
  return (
    <div className="min-h-screen bg-[#edf4f2] dark:bg-slate-950 p-4 sm:p-6 space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherCurriculaHeader
        userInitial={userInitial}
        notificationsCount={3}
      />
      <TeacherCurriculaStatsGrid
        totalCurricula={statistics.total}
        booksCount={statistics.books}
        supportMaterials={statistics.support}
        linkedGroups={statistics.linkedGroups}
      />
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="w-10 h-10 rounded-full border-4 border-[#00594C]/30 border-t-[#00594C] animate-spin" />
        </div>
      )}
      {!isLoading && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
              {t('teacherCurricula.assignedTitle', 'المناهج المعيّنة لك')}
            </h2>
            {sideCurricula.length > 0 && (
              <p className="text-xs font-semibold text-slate-400">
                {t('teacherCurricula.selectToBrowseNotice', 'اختر منهجاً لاستعراض وحداته ومصادره المرتبطة')}
              </p>
            )}
          </div>
          {rawCurricula.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col items-center justify-center py-14 text-center px-4">
              <p className="text-sm font-bold text-slate-400">
                {t('teacherCurricula.noCurricula', 'لا توجد مناهج مطابقة للبحث')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              <div className="lg:col-span-7 xl:col-span-8 order-1">
                <TeacherActiveCurriculumDetail
                  curriculum={activeCurriculum}
                  onOpenPlan={handleOpenPlan}
                />
              </div>
              <div className="lg:col-span-5 xl:col-span-4 order-2 space-y-4">
                {sideCurricula.map((curriculum) => {
                  const cid = curriculum.id || curriculum._id;
                  return (
                    <TeacherCurriculumSidebarCard
                      key={cid}
                      curriculum={curriculum}
                      onSelect={handleSelectCurriculum}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}
      {!isLoading && (
        <TeacherResourcesTable
          resources={allResources}
          onPreview={handlePreviewResource}
          onDownload={handleDownloadResource}
        />
      )}
      <TeacherCurriculumPlanModal
        curriculum={planModalCurriculum}
        isOpen={Boolean(planModalCurriculum)}
        onClose={handleClosePlan}
      />
      <TeacherResourcePreviewModal
        resource={previewModalResource}
        isOpen={Boolean(previewModalResource)}
        onClose={handleClosePreview}
        onDownload={handleDownloadResource}
      />
    </div>
  );
}
