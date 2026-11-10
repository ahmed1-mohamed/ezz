import { useState, useMemo, useEffect } from 'react';
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

const DEFAULT_CURRICULA = [
  {
    id: 'cur-1',
    name: 'التجويد الميسر — المستوى الأول',
    level: 'متوسط',
    statusLabel: 'قيد التدريس',
    unitsCount: 4,
    totalLessons: 16,
    completedLessons: 6,
    resourcesCount: 7,
    progress: 38,
    linkedGroups: [
      { id: 'g1', name: 'مجموعة التجويد الأولى' },
      { id: 'g2', name: 'مجموعة التجويد الثانية' },
    ],
    units: [
      {
        name: 'الوحدة الأولى: آداب التلاوة والاستعاذة والبسملة',
        lessonsCount: 3,
        status: 'completed',
      },
      {
        name: 'الوحدة الثانية: أحكام النون الساكنة والتنوين',
        lessonsCount: 4,
        status: 'inProgress',
        currentLessonHint: 'الدرس الحالي: الإظهار الحلقي • التالي: الإدغام بغنة وبغير غنة',
      },
      {
        name: 'الوحدة الثالثة: أحكام الميم الساكنة',
        lessonsCount: 3,
        status: 'notStarted',
      },
      {
        name: 'الوحدة الرابعة: المدود وتطبيقاتها',
        lessonsCount: 6,
        status: 'notStarted',
      },
    ],
  },
  {
    id: 'cur-2',
    name: 'حفظ جزء عم ومراجعته',
    level: 'مبتدئ',
    statusLabel: 'قيد التدريس',
    unitsCount: 6,
    totalLessons: 30,
    completedLessons: 12,
    resourcesCount: 5,
    progress: 40,
    linkedGroups: [
      { id: 'g3', name: 'حلقة الحفظ الأولى' },
      { id: 'g4', name: 'حلقة الحفظ الثانية' },
    ],
    units: [
      { name: 'الوحدة الأولى: سورة النبأ والنازعات', lessonsCount: 5, status: 'completed' },
      { name: 'الوحدة الثانية: سورة عبس والتكوير', lessonsCount: 5, status: 'inProgress' },
      { name: 'الوحدة الثالثة: سورة الانفطار والمطففين', lessonsCount: 5, status: 'notStarted' },
      { name: 'الوحدة الرابعة: سورة الانشقاق والبروج', lessonsCount: 5, status: 'notStarted' },
      { name: 'الوحدة الخامسة: سورة الطارق والأعلى والغاشية', lessonsCount: 5, status: 'notStarted' },
      { name: 'الوحدة السادسة: من الفجر إلى الناس', lessonsCount: 5, status: 'notStarted' },
    ],
  },
  {
    id: 'cur-3',
    name: 'إتقان التلاوة ومخارج الحروف',
    level: 'متقدم',
    statusLabel: 'قيد التدريس',
    unitsCount: 5,
    totalLessons: 20,
    completedLessons: 4,
    resourcesCount: 6,
    progress: 20,
    linkedGroups: [
      { id: 'g5', name: 'حلقة الإتقان' },
      { id: 'g6', name: 'مجموعة التلاوة الخاصة' },
    ],
    units: [
      { name: 'الوحدة الأولى: مخارج الحروف العامة والخاصة', lessonsCount: 4, status: 'completed' },
      { name: 'الوحدة الثانية: صفات الحروف اللازمة', lessonsCount: 4, status: 'notStarted' },
      { name: 'الوحدة الثالثة: صفات الحروف العارضة', lessonsCount: 4, status: 'notStarted' },
      { name: 'الوحدة الرابعة: أحكام الوقف والابتداء', lessonsCount: 4, status: 'notStarted' },
      { name: 'الوحدة الخامسة: تطبيقات عملية على المصحف', lessonsCount: 4, status: 'notStarted' },
    ],
  },
];

const DEFAULT_RESOURCES = [
  {
    id: 'res-1',
    name: 'التجويد الميسر',
    type: 'كتاب',
    pages: 84,
    fileSize: '4.2 م.ب',
    fileFormat: 'PDF',
    curriculum: 'التجويد الميسر',
    linkedGroups: [{ id: 'g1', name: 'مجموعتا التجويد الأولى والثانية' }],
  },
  {
    id: 'res-2',
    name: 'تحفة الأطفال',
    type: 'مرجع',
    pages: 24,
    fileSize: '1.8 م.ب',
    fileFormat: 'PDF',
    curriculum: 'التجويد الميسر',
    linkedGroups: [{ id: 'g1', name: 'مجموعتا التجويد الأولى والثانية' }],
  },
  {
    id: 'res-3',
    name: 'تدريبات أحكام النون الساكنة',
    type: 'ورقة عمل',
    pages: 8,
    fileSize: '640 ك.ب',
    fileFormat: 'PDF',
    curriculum: 'التجويد الميسر',
    linkedGroups: [{ id: 'g1', name: 'مجموعتا التجويد الأولى والثانية' }],
  },
];

export default function TeacherCurricula() {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [selectedCurriculumId, setSelectedCurriculumId] = useState(null);
  const [planModalCurriculum, setPlanModalCurriculum] = useState(null);
  const [previewModalResource, setPreviewModalResource] = useState(null);
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');
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
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }
      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB'));
      }
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);
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
    if (list.length === 0) return DEFAULT_CURRICULA;
    return list;
  }, [responseData]);
  const statistics = useMemo(() => {
    const stats = responseData?.statistics || responseData?.stats || {};
    return {
      total: stats.total ?? rawCurricula.length,
      books: stats.books ?? stats.booksCount ?? 10,
      support: stats.supportMaterials ?? stats.support ?? 8,
      linkedGroups: stats.linkedGroups ?? 6,
    };
  }, [responseData, rawCurricula]);
  const allResources = useMemo(() => {
    const res = [];
    rawCurricula.forEach((cur) => {
      if (Array.isArray(cur.resources)) {
        cur.resources.forEach((r) => res.push({ ...r, curriculum: cur.name }));
      }
    });
    const topLevel = Array.isArray(responseData?.resources) ? responseData.resources : [];
    const merged = [...res, ...topLevel];
    if (merged.length === 0) return DEFAULT_RESOURCES;
    return merged;
  }, [rawCurricula, responseData]);
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
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
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
