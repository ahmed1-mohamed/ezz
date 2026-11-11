import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  User,
  Clock,
  Star,
  CheckCircle,
  CheckCircle2,
  FileText,
  AlertCircle,
  MessageSquare,
  Download,
  ExternalLink,
  Video,
  RotateCw,
  Search,
  Filter,
  Award,
  Layers,
  Hourglass,
  Send,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

const TABS_CONFIG = [
  { key: 'ongoing', labelAr: 'الجارية (قيد الانتظار)', labelEn: 'In Progress' },
  { key: 'completed', labelAr: 'المكتملة (تم التسليم)', labelEn: 'Completed' },
  { key: 'overdue', labelAr: 'المتأخرة (فات الموعد)', labelEn: 'Overdue' },
];

function resolveEvaluationStatus(item, isRtl) {
  const raw = item?.evaluationStatus || item?.submission?.evaluationStatus || item?.evalStatus;
  if (typeof raw === 'string' && raw.trim()) {
    const clean = raw.trim().toLowerCase();
    // Check un-evaluated / pending patterns first because "لم يتم التقييم" contains "تم التقييم"
    if (
      clean === 'not_evaluated' ||
      clean.includes('لم يتم التقييم') ||
      clean.includes('غير مقيم') ||
      clean.includes('قيد التقييم') ||
      clean.includes('بانتظار التقييم') ||
      clean.includes('not evaluated') ||
      clean === 'pending' ||
      clean === 'under_review' ||
      clean === 'in_review'
    ) {
      return { isEvaluated: false, label: isRtl ? 'لم يتم التقييم' : 'Not Evaluated' };
    }
    if (
      clean === 'evaluated' ||
      (!clean.includes('لم يتم') && !clean.includes('غير') && clean.includes('تم التقييم')) ||
      clean.includes('مقيم') ||
      clean === 'done' ||
      clean === 'graded'
    ) {
      return { isEvaluated: true, label: isRtl ? 'تم التقييم' : 'Evaluated' };
    }
    return { isEvaluated: Boolean(item?.grade || item?.submission?.grade), label: raw.trim() };
  }
  if (typeof item?.evaluated === 'boolean') {
    return {
      isEvaluated: item.evaluated,
      label: item.evaluated ? (isRtl ? 'تم التقييم' : 'Evaluated') : (isRtl ? 'لم يتم التقييم' : 'Not Evaluated'),
    };
  }
  if (item?.grade !== null && item?.grade !== undefined && item?.grade !== '') {
    return { isEvaluated: true, label: isRtl ? 'تم التقييم' : 'Evaluated' };
  }
  return { isEvaluated: false, label: isRtl ? 'لم يتم التقييم' : 'Not Evaluated' };
}

function isHomeworkSubmittedLate(item) {
  const rawStatus = (item?.status || item?.rawStatus || item?.submissionStatus || item?.submission?.status || '').toString().toLowerCase();
  return (
    rawStatus === 'submitted_late' ||
    rawStatus.includes('متأخر') ||
    rawStatus.includes('late') ||
    Boolean(item?.isSubmittedLate) ||
    Boolean(item?.isLate) ||
    Boolean(item?.submittedLate)
  );
}

function formatHomeworkDate(dateStr, isRtl) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return String(dateStr);
  return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const MOCK_ASSIGNMENTS = {
  ongoing: [
    {
      id: '6af3968a9cd79a6b6cee6de5',
      homework: 'حمو',
      title: 'حمو',
      group: 'مجموعة مهارات العلوم المتكاملة',
      subject: 'العلوم المتكاملة',
      teacher: 'معلم المادة',
      submissionStatus: 'في الانتظار',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: null,
      deadline: '2026-11-19',
      dueDate: '2026-11-19',
      media: null,
      document: null,
    },
    {
      id: '6ae7c1746e1b3f47e5e14ffe',
      homework: 'zxdasasds',
      title: 'zxdasasds',
      group: 'مجموعة مهارات العلوم المتكاملة',
      subject: 'العلوم المتكاملة',
      teacher: 'معلم المادة',
      submissionStatus: 'في الانتظار',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: null,
      deadline: '2026-12-04',
      dueDate: '2026-12-04',
      media: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      document: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
  ],
  completed: [
    {
      id: '6af1194a88403111904afebc',
      homework: 'مهمة استكشاف دورة حياة النبات',
      title: 'مهمة استكشاف دورة حياة النبات',
      group: 'مجموعة مهارات العلوم المتكاملة',
      subject: 'العلوم المتكاملة',
      teacher: 'معلم المادة',
      submissionStatus: 'تم التسليم',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: '2026-11-09',
      deadline: '2026-11-16',
      dueDate: '2026-11-16',
      media: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      document: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
      id: '6adb4b2e6236482d0b9e11c3',
      homework: 'تقرير عملي: حساب العجلة والسرعة',
      title: 'تقرير عملي: حساب العجلة والسرعة',
      group: 'أكاديمية الفيزياء الحديثة - الصف الأول الثانوي',
      subject: 'الفيزياء الحديثة',
      teacher: 'معلم المادة',
      submissionStatus: 'تم التسليم',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: '2026-10-23',
      deadline: '2026-10-30',
      dueDate: '2026-10-30',
      media: null,
      document: null,
    },
    {
      id: '6adb4b2e6236482d0b9e11c4',
      homework: 'اختبار الخلية النباتية والحيوانية',
      title: 'اختبار الخلية النباتية والحيوانية',
      group: 'مجموعة الأحياء والعلوم الطبية المبسطة',
      subject: 'الأحياء والعلوم الطبية',
      teacher: 'معلم المادة',
      submissionStatus: 'تم التسليم',
      evaluationStatus: 'تم التقييم',
      grade: 10,
      teacherNotes: 'أحسنتِ يا سارة إجابة ممتازة ودقيقة جداً، بارك الله فيكِ.',
      submittedAt: '2026-10-20',
      deadline: '2026-10-21',
      dueDate: '2026-10-21',
      media: null,
      document: null,
    },
    {
      id: '6adb4b2e6236482d0b9e11c6',
      homework: 'مسائل الطاقة والشغل والقدرة',
      title: 'مسائل الطاقة والشغل والقدرة',
      group: 'أكاديمية الفيزياء الحديثة - الصف الأول الثانوي',
      subject: 'الفيزياء الحديثة',
      teacher: 'معلم المادة',
      submissionStatus: 'تم التسليم متأخراً',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: '2026-10-23',
      deadline: '2026-10-22',
      dueDate: '2026-10-22',
      media: null,
      document: null,
    },
    {
      id: '6ae76aedef591fd2bdc98efe',
      homework: 'واجب الخلية النباتية والحيوانية والأنظمة البيئية',
      title: 'واجب الخلية النباتية والحيوانية والأنظمة البيئية',
      group: 'مجموعة مهارات العلوم المتكاملة',
      subject: 'العلوم المتكاملة',
      teacher: 'معلم المادة',
      submissionStatus: 'تم التسليم متأخراً',
      evaluationStatus: 'تم التقييم',
      grade: 75,
      teacherNotes: 'المستوى العلمي جيد ولكن يرجى الالتزام بموعد التسليم وتفصيل الإجابات المقالية في المرات القادمة.',
      submittedAt: '2026-10-21',
      deadline: '2026-10-20',
      dueDate: '2026-10-20',
      media: null,
      document: null,
    },
  ],
  overdue: [
    {
      id: '6adb4b2e6236482d0b9e11c2',
      homework: 'واجب قوانين نيوتن للحركة وتطبيقاتها',
      title: 'واجب قوانين نيوتن للحركة وتطبيقاتها',
      group: 'أكاديمية الفيزياء الحديثة - الصف الأول الثانوي',
      subject: 'الفيزياء الحديثة',
      teacher: 'معلم المادة',
      submissionStatus: 'فات موعد التسليم',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: null,
      deadline: '2026-10-28',
      dueDate: '2026-10-28',
      media: null,
      document: 'https://manaret-ezz.dramcode.top/files/homework/newton-laws-sheet.pdf',
    },
    {
      id: '6ae76aedef591fd2bdc98f03',
      homework: 'واجب التفاعلات الكيميائية وقوانين حفظ المادة',
      title: 'واجب التفاعلات الكيميائية وقوانين حفظ المادة',
      group: 'مجموعة مهارات العلوم المتكاملة',
      subject: 'العلوم المتكاملة',
      teacher: 'معلم المادة',
      submissionStatus: 'فات موعد التسليم',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: null,
      submittedAt: null,
      deadline: '2026-10-29',
      dueDate: '2026-10-29',
      media: null,
      document: null,
    },
    {
      id: '6adb4b2e6236482d0b9e11c5',
      homework: 'بحث مبسط عن دورة كريبس في التنفس الخلوي',
      title: 'بحث مبسط عن دورة كريبس في التنفس الخلوي',
      group: 'مجموعة الأحياء والعلوم الطبية المبسطة',
      subject: 'الأحياء والعلوم الطبية',
      teacher: 'معلم المادة',
      submissionStatus: 'فات موعد التسليم',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      teacherNotes: 'انتهى موعد تسليم الواجب ولم يتم استلام الحل.',
      submittedAt: null,
      deadline: '2026-10-19',
      dueDate: '2026-10-19',
      media: null,
      document: null,
    },
  ],
};

const DEFAULT_STATISTICS = {
  total: 10,
  pending: 2,
  submitted: 3,
  submitted_late: 2,
  overdue: 3,
  evaluated: 2,
  not_evaluated: 3,
};

function formatApiItem(item, statusKey, isRtl, index = 0) {
  const submissionSt = (item.submissionStatus || item.rawSubmissionStatus || '').toString();
  const rawStatus = (item.status || item.submission?.status || statusKey || submissionSt || '').toString().toLowerCase();

  const isLate =
    statusKey === 'submitted_late' ||
    rawStatus === 'submitted_late' ||
    submissionSt.includes('متأخر') ||
    submissionSt.includes('late') ||
    Boolean(item.isLate) ||
    Boolean(item.submittedLate) ||
    Boolean(item.isSubmittedLate);

  const isOverdue =
    statusKey === 'overdue' ||
    rawStatus === 'overdue' ||
    submissionSt.includes('فات') ||
    submissionSt.includes('overdue');

  const isCompleted =
    statusKey === 'completed' ||
    statusKey === 'submitted' ||
    statusKey === 'submitted_late' ||
    rawStatus === 'submitted' ||
    rawStatus === 'submitted_late' ||
    rawStatus === 'completed' ||
    submissionSt.includes('تسليم') ||
    submissionSt.includes('مسلم') ||
    Boolean(item.submittedAt);

  const evalInfo = resolveEvaluationStatus(item, isRtl);

  const dueFormatted =
    item.formattedDueDate ||
    formatHomeworkDate(item.dueDate || item.deadline, isRtl) ||
    (isRtl ? 'غير محدد' : 'Not specified');

  const submittedFormatted =
    item.formattedSubmittedAt ||
    formatHomeworkDate(item.submittedAt || item.submission?.submittedAt, isRtl) ||
    dueFormatted;

  const titleText = item.homework || item.title || (isRtl ? item.titleAr : item.titleEn) || item.name || (isRtl ? 'واجب دراسي' : 'Assignment');
  const titleEnText = item.titleEn || item.homework || item.title || 'Assignment';

  const groupText =
    typeof item.group === 'string'
      ? item.group
      : typeof item.group === 'object' && item.group?.name
      ? item.group.name
      : item.sessionName || item.sessionNameEn || (isRtl ? 'الحصة الدراسية' : 'Class Session');

  const subjectText =
    typeof item.group === 'object' && item.group?.subject
      ? item.group.subject
      : item.subject || (typeof item.group === 'string' ? item.group : isRtl ? 'مادة دراسية' : 'Subject');

  const subjectEnText =
    typeof item.group === 'object' && item.group?.subjectEn
      ? item.group.subjectEn
      : item.subjectEn || subjectText;

  const teacherText =
    typeof item.teacher === 'object' && item.teacher?.name
      ? item.teacher.name
      : item.teacher || item.teacherName || (isRtl ? 'معلم المادة' : 'Teacher');

  const teacherEnText =
    typeof item.teacher === 'object' && item.teacher?.nameEn
      ? item.teacher.nameEn
      : item.teacherEn || teacherText;

  const rawNotes = item.teacherNotes || item.feedback || item.submission?.teacherNotes || item.submission?.feedback || null;

  return {
    ...item,
    id: item.id || item._id || item.homeworkId || `hw-${statusKey}-${index + 1}`,
    homework: item.homework || titleText,
    title: titleText,
    titleEn: titleEnText,
    group: groupText,
    subject: subjectText,
    subjectEn: subjectEnText,
    teacher: teacherText,
    teacherEn: teacherEnText,
    sessionName: groupText,
    sessionNameEn: groupText,
    deadline: item.deadline || item.dueDate || null,
    dueDate: dueFormatted,
    dueDateEn: dueFormatted,
    submittedAt: item.submittedAt || item.submission?.submittedAt || null,
    submissionDate: submittedFormatted,
    submissionDateEn: submittedFormatted,
    status: isCompleted ? (isLate ? 'submitted_late' : 'completed') : isOverdue ? 'overdue' : 'pending',
    rawStatus: rawStatus || statusKey,
    submissionStatus:
      item.submissionStatus ||
      (isCompleted ? (isLate ? (isRtl ? 'تم التسليم متأخراً' : 'Submitted Late') : isRtl ? 'تم التسليم' : 'Submitted') : isOverdue ? (isRtl ? 'فات موعد التسليم' : 'Overdue') : isRtl ? 'في الانتظار' : 'Pending'),
    isSubmittedLate: isLate,
    isOverdue,
    isCompleted,
    evaluationStatus: evalInfo.label,
    isEvaluated: evalInfo.isEvaluated,
    grade: evalInfo.isEvaluated ? item.grade ?? item.submission?.grade ?? null : null,
    teacherNotes: rawNotes,
    feedback: rawNotes,
    description: item.description || item.desc || '',
    media: item.media || null,
    document: item.document || item.fileUrl || null,
    fileUrl: item.fileUrl || item.document || null,
  };
}

export default function StudentAssignments() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [activeTab, setActiveTab] = useState('ongoing');
  const [evaluationFilter, setEvaluationFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lazy cache for tab data: keeps network requests to the absolute minimum
  const [assignmentsByTab, setAssignmentsByTab] = useState({
    ongoing: null,
    completed: null,
    overdue: null,
  });

  // Track which tabs have already been fetched
  const loadedTabsRef = useRef({
    ongoing: false,
    completed: false,
    overdue: false,
  });

  // Global statistics received from API
  const [statistics, setStatistics] = useState(DEFAULT_STATISTICS);

  // Helper to extract and update statistics if present in response
  const applyStatisticsFromResponse = useCallback((res) => {
    if (res && res.statistics && typeof res.statistics === 'object') {
      setStatistics((prev) => ({
        ...prev,
        ...res.statistics,
      }));
    }
  }, []);

  // Fetch logic for an individual tab on demand
  const loadTabData = useCallback(
    async (tabKey, forceRefresh = false) => {
      // If already loaded and not forced to refresh, return cached data
      if (!forceRefresh && loadedTabsRef.current[tabKey] && assignmentsByTab[tabKey] !== null) {
        return;
      }

      try {
        if (tabKey === 'ongoing') {
          // 1 SINGLE REQUEST for ongoing / pending
          const res = await studentPortalApi.fetchPendingHomework();
          applyStatisticsFromResponse(res);
          const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
          const items =
            raw.length > 0
              ? raw.map((item, idx) => formatApiItem(item, 'pending', isRtl, idx))
              : MOCK_ASSIGNMENTS.ongoing;

          setAssignmentsByTab((prev) => ({ ...prev, ongoing: items }));
          loadedTabsRef.current.ongoing = true;
        } else if (tabKey === 'completed') {
          // Fetch submitted and submitted-late for the completed tab
          const [submittedRes, submittedLateRes] = await Promise.allSettled([
            studentPortalApi.fetchSubmittedHomework(),
            studentPortalApi.fetchSubmittedLateHomework(),
          ]);

          let combined = [];

          if (submittedRes.status === 'fulfilled') {
            applyStatisticsFromResponse(submittedRes.value);
            const raw = Array.isArray(submittedRes.value?.data)
              ? submittedRes.value.data
              : Array.isArray(submittedRes.value)
              ? submittedRes.value
              : [];
            combined.push(...raw.map((item, idx) => formatApiItem(item, 'submitted', isRtl, idx)));
          }

          if (submittedLateRes.status === 'fulfilled') {
            applyStatisticsFromResponse(submittedLateRes.value);
            const raw = Array.isArray(submittedLateRes.value?.data)
              ? submittedLateRes.value.data
              : Array.isArray(submittedLateRes.value)
              ? submittedLateRes.value
              : [];
            raw.forEach((item, idx) => {
              const formatted = formatApiItem(item, 'submitted_late', isRtl, idx);
              if (!combined.some((c) => String(c.id) === String(formatted.id))) {
                combined.push(formatted);
              }
            });
          }

          const finalCompleted = combined.length > 0 ? combined : MOCK_ASSIGNMENTS.completed;
          setAssignmentsByTab((prev) => ({ ...prev, completed: finalCompleted }));
          loadedTabsRef.current.completed = true;
        } else if (tabKey === 'overdue') {
          // 1 SINGLE REQUEST for overdue
          const res = await studentPortalApi.fetchOverdueHomework();
          applyStatisticsFromResponse(res);
          const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
          const items =
            raw.length > 0
              ? raw.map((item, idx) => formatApiItem(item, 'overdue', isRtl, idx))
              : MOCK_ASSIGNMENTS.overdue;

          setAssignmentsByTab((prev) => ({ ...prev, overdue: items }));
          loadedTabsRef.current.overdue = true;
        }
      } catch (err) {
        console.error(`Failed to load ${tabKey} homework:`, err);
        // Fallback to mock data if API is unavailable
        setAssignmentsByTab((prev) => ({
          ...prev,
          [tabKey]: MOCK_ASSIGNMENTS[tabKey] || [],
        }));
        loadedTabsRef.current[tabKey] = true;
      }
    },
    [isRtl, applyStatisticsFromResponse, assignmentsByTab]
  );

  // Initial mount: load ONLY the initial tab (1 single network request)
  useEffect(() => {
    let isMounted = true;
    async function init() {
      setIsLoading(true);
      await loadTabData('ongoing');
      if (isMounted) {
        setIsLoading(false);
      }
    }
    init();
    return () => {
      isMounted = false;
    };
  }, []); // Only runs once on mount!

  // Tab switching handler: loads the requested tab lazily only if not loaded yet
  const handleTabChange = useCallback(
    async (tabKey) => {
      setActiveTab(tabKey);
      if (tabKey !== 'completed') {
        setEvaluationFilter('all');
      }
      if (!loadedTabsRef.current[tabKey]) {
        setIsLoading(true);
        await loadTabData(tabKey);
        setIsLoading(false);
      }
    },
    [loadTabData]
  );

  // Manual refresh button
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadTabData(activeTab, true);
    setIsRefreshing(false);
  };

  // KPI Quick Navigation Filter
  const handleStatCardClick = (targetTab, targetFilter = 'all') => {
    handleTabChange(targetTab);
    if (targetTab === 'completed') {
      setEvaluationFilter(targetFilter);
    }
  };

  const handleOpenDetails = (item) => {
    navigate(`/dashboard/student/assignments/${item.id}`, { state: { homework: item } });
  };

  // Derive counts from statistics API or fallback
  const totalCount = statistics?.total ?? 10;
  const pendingCount = statistics?.pending ?? assignmentsByTab.ongoing?.length ?? 2;
  const submittedLateCount = statistics?.submitted_late ?? 2;
  const completedTotalCount = (statistics?.submitted || 0) + (statistics?.submitted_late || 0) || assignmentsByTab.completed?.length || 5;
  const overdueCount = statistics?.overdue ?? assignmentsByTab.overdue?.length ?? 3;
  const evaluatedCount = statistics?.evaluated ?? 2;
  const notEvaluatedCount = statistics?.not_evaluated ?? 3;

  // Active list items for current tab
  const rawListForActiveTab = assignmentsByTab[activeTab] || MOCK_ASSIGNMENTS[activeTab] || [];

  // Filtered list based on sub-filters and search query
  const displayedList = useMemo(() => {
    let list = rawListForActiveTab;

    // Completed sub-filter
    if (activeTab === 'completed' && evaluationFilter !== 'all') {
      list = list.filter((item) => {
        const evalInfo = resolveEvaluationStatus(item, isRtl);
        if (evaluationFilter === 'evaluated') return evalInfo.isEvaluated;
        if (evaluationFilter === 'not_evaluated') return !evalInfo.isEvaluated;
        if (evaluationFilter === 'late') return isHomeworkSubmittedLate(item);
        return true;
      });
    }

    // Text search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (item) =>
          (item.title && item.title.toLowerCase().includes(q)) ||
          (item.titleEn && item.titleEn.toLowerCase().includes(q)) ||
          (item.homework && item.homework.toLowerCase().includes(q)) ||
          (item.group && item.group.toLowerCase().includes(q)) ||
          (item.teacher && item.teacher.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeTab, rawListForActiveTab, evaluationFilter, searchQuery, isRtl]);

  return (
    <div className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 p-4 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto space-y-5">
        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:px-8 sm:py-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-2xl bg-[#00594C]/10 text-[#00594C] dark:text-[#38a169]">
                <FileText size={22} />
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {t('studentDashboard.assignments.title', 'واجباتي المدرسية')}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {t(
                'studentDashboard.assignments.subtitle',
                'تابع حالة تسليم وتقييم واجباتك أولاً بأول مع ملاحظات المعلمين ورصد الدرجات'
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer disabled:opacity-60"
              title="تحديث البيانات"
            >
              <RotateCw size={14} className={isRefreshing ? 'animate-spin text-[#00594C]' : 'text-slate-500'} />
              <span>{isRefreshing ? (isRtl ? 'جاري التحديث...' : 'Updating...') : isRtl ? 'تحديث' : 'Refresh'}</span>
            </button>
          </div>
        </div>

        {/* Overview KPI Statistics Grid: Clearly Distinguishes Submitted vs Evaluated */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* 1. Total */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                {isRtl ? 'إجمالي الواجبات' : 'Total'}
              </span>
              <span className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <Layers size={14} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{totalCount}</span>
              <span className="text-[11px] text-slate-400">{isRtl ? 'واجب' : 'tasks'}</span>
            </div>
          </div>

          {/* 2. Pending / Ongoing */}
          <div
            onClick={() => handleStatCardClick('ongoing')}
            className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border shadow-xs flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] ${
              activeTab === 'ongoing' ? 'border-[#00594C] ring-2 ring-[#00594C]/10' : 'border-slate-100 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                {isRtl ? 'قيد الانتظار' : 'Pending'}
              </span>
              <span className="p-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <Clock size={14} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-blue-700 dark:text-blue-300">{pendingCount}</span>
              <span className="text-[10px] text-blue-500/80 font-medium">{isRtl ? 'مطلوب حلها' : 'to solve'}</span>
            </div>
          </div>

          {/* 3. Completed (Total Submitted) */}
          <div
            onClick={() => handleStatCardClick('completed', 'all')}
            className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border shadow-xs flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] ${
              activeTab === 'completed' && evaluationFilter === 'all'
                ? 'border-[#00594C] ring-2 ring-[#00594C]/10'
                : 'border-slate-100 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#00594C] dark:text-emerald-400">
                {isRtl ? 'تم التسليم' : 'Submitted'}
              </span>
              <span className="p-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={14} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#00594C] dark:text-emerald-300">{completedTotalCount}</span>
              <span className="text-[10px] text-emerald-600/80 font-medium">{isRtl ? 'مكتمل التسليم' : 'done'}</span>
            </div>
          </div>

          {/* 4. Evaluated (Important distinction!) */}
          <div
            onClick={() => handleStatCardClick('completed', 'evaluated')}
            className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border shadow-xs flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] ${
              activeTab === 'completed' && evaluationFilter === 'evaluated'
                ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                : 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-950/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                <Star size={11} className="fill-emerald-500 text-emerald-500" />
                {isRtl ? 'تم التقييم' : 'Evaluated'}
              </span>
              <span className="p-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                <Award size={14} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">{evaluatedCount}</span>
              <span className="text-[10px] text-emerald-600 font-bold">{isRtl ? 'رُصدت درجاتها' : 'graded'}</span>
            </div>
          </div>

          {/* 5. Not Evaluated / Pending Teacher Review (Important distinction!) */}
          <div
            onClick={() => handleStatCardClick('completed', 'not_evaluated')}
            className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border shadow-xs flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] ${
              activeTab === 'completed' && evaluationFilter === 'not_evaluated'
                ? 'border-amber-500 ring-2 ring-amber-500/20'
                : 'border-amber-100 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-950/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                <Hourglass size={11} className="text-amber-500" />
                {isRtl ? 'بانتظار التقييم' : 'Pending Eval'}
              </span>
              <span className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400">
                <Clock size={14} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-amber-700 dark:text-amber-400">{notEvaluatedCount}</span>
              <span className="text-[10px] text-amber-600 font-bold">{isRtl ? 'قيد المراجعة' : 'under review'}</span>
            </div>
          </div>

          {/* 6. Overdue (Late but can still be submitted!) */}
          <div
            onClick={() => handleStatCardClick('overdue')}
            className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border shadow-xs flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] ${
              activeTab === 'overdue' ? 'border-[#EB3D3D] ring-2 ring-[#EB3D3D]/10' : 'border-slate-100 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-red-600 dark:text-red-400">
                {isRtl ? 'فات موعدها' : 'Overdue'}
              </span>
              <span className="p-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400">
                <AlertCircle size={14} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-red-600 dark:text-red-400">{overdueCount}</span>
              <span className="text-[10px] text-amber-600 font-bold">{isRtl ? 'متاح تسليمها' : 'can submit'}</span>
            </div>
          </div>
        </div>

        {/* Main Controls Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
          {/* Main 3 Tabs */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {TABS_CONFIG.map((tab) => {
              const isSelected = activeTab === tab.key;
              const count =
                tab.key === 'ongoing'
                  ? pendingCount
                  : tab.key === 'completed'
                  ? completedTotalCount
                  : overdueCount;

              const isOverdueTab = tab.key === 'overdue';

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`py-3 sm:py-3.5 px-2 sm:px-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? isOverdueTab
                        ? 'bg-[#EB3D3D] text-white shadow-sm'
                        : 'bg-[#00594C] text-white shadow-sm'
                      : 'bg-[#E8EEEC] dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#dfe7e5]'
                  }`}
                >
                  <span>{isRtl ? tab.labelAr : tab.labelEn}</span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-white/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-filters & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            {/* Completed Sub-filter Chips */}
            {activeTab === 'completed' ? (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Filter size={12} />
                  <span>{isRtl ? 'حالة التقييم:' : 'Evaluation:'}</span>
                </span>

                <button
                  type="button"
                  onClick={() => setEvaluationFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    evaluationFilter === 'all'
                      ? 'bg-[#00594C] text-white shadow-xs'
                      : 'bg-[#F1F5F9] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{isRtl ? 'الكل' : 'All'}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      evaluationFilter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  >
                    {completedTotalCount}
                  </span>
                </button>

                {/* Filter Evaluated */}
                <button
                  type="button"
                  onClick={() => setEvaluationFilter('evaluated')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    evaluationFilter === 'evaluated'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100/80 border border-emerald-200/80 dark:border-emerald-800/50'
                  }`}
                >
                  <CheckCircle size={12} className={evaluationFilter === 'evaluated' ? 'text-white' : 'text-emerald-600'} />
                  <span>{isRtl ? 'تم التقييم' : 'Evaluated'}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      evaluationFilter === 'evaluated' ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-900/60'
                    }`}
                  >
                    {evaluatedCount}
                  </span>
                </button>

                {/* Filter Not Evaluated */}
                <button
                  type="button"
                  onClick={() => setEvaluationFilter('not_evaluated')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    evaluationFilter === 'not_evaluated'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 hover:bg-amber-100/80 border border-amber-200/80 dark:border-amber-800/50'
                  }`}
                >
                  <Clock size={12} className={evaluationFilter === 'not_evaluated' ? 'text-white' : 'text-amber-600'} />
                  <span>{isRtl ? 'بانتظار التقييم' : 'Not Evaluated'}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      evaluationFilter === 'not_evaluated' ? 'bg-white/20 text-white' : 'bg-amber-100 dark:bg-amber-900/60'
                    }`}
                  >
                    {notEvaluatedCount}
                  </span>
                </button>

                {/* Filter Submitted Late */}
                {submittedLateCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setEvaluationFilter('late')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      evaluationFilter === 'late'
                        ? 'bg-orange-600 text-white shadow-xs'
                        : 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 hover:bg-orange-100/80 border border-orange-200/80 dark:border-orange-800/50'
                    }`}
                  >
                    <AlertCircle size={12} className={evaluationFilter === 'late' ? 'text-white' : 'text-orange-600'} />
                    <span>{isRtl ? 'تسليم متأخر' : 'Submitted Late'}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        evaluationFilter === 'late' ? 'bg-white/20 text-white' : 'bg-orange-100 dark:bg-orange-900/60'
                      }`}
                    >
                      {submittedLateCount}
                    </span>
                  </button>
                )}
              </div>
            ) : (
              <div className="text-xs text-slate-500 font-medium">
                {activeTab === 'ongoing' && (
                  <span>{isRtl ? 'الواجبات الجارية المطلوب إنجازها وتسليمها قبل انتهاء الموعد' : 'Assignments you need to solve before deadline'}</span>
                )}
                {activeTab === 'overdue' && (
                  <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{isRtl ? 'يمكنك تسليم الواجبات المتأخرة الآن بصورة طبيعية، وستصل للمعلم موثقة كـ (تسليم متأخر).' : 'You can submit overdue assignments normally; they will be received as late submissions.'}</span>
                  </span>
                )}
              </div>
            )}

            {/* Quick Search Input */}
            <div className="relative min-w-[220px]">
              <Search size={14} className="absolute top-1/2 -translate-y-1/2 text-slate-400 start-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? 'بحث في الواجبات أو المجموعات...' : 'Search assignments...'}
                className="w-full text-xs font-medium ps-8 pe-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#00594C]/20"
              />
            </div>
          </div>
        </div>

        {/* Assignment List Content */}
        {isLoading ? (
          <div className="flex h-64 items-center justify-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <Spinner />
          </div>
        ) : displayedList.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 space-y-3">
            <FileText size={40} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
              {searchQuery.trim()
                ? isRtl
                  ? 'لا توجد واجبات تطابق نتيجة البحث'
                  : 'No assignments match your search'
                : isRtl
                ? 'لا توجد واجبات في هذا القسم حالياً'
                : 'No assignments in this section currently'}
            </h3>
            {searchQuery.trim() && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#00594C] dark:text-[#38a169] font-bold hover:underline"
              >
                {isRtl ? 'إعادة ضبط البحث' : 'Clear search'}
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {displayedList.map((item) => {
                const title = item.homework || item.title;
                const group = item.group;
                const teacher = item.teacher;
                const isOverdue = item.isOverdue || activeTab === 'overdue';
                const isCompleted = item.isCompleted || activeTab === 'completed';
                const isOngoing = !isCompleted && !isOverdue;
                const isLateSubmitted = item.isSubmittedLate;
                const evalInfo = resolveEvaluationStatus(item, isRtl);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 text-start hover:shadow-md transition-shadow"
                  >
                    {/* Top Row: Title, Group, Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Left Side: Title & Group */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100">
                            {title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2.5 flex-wrap text-xs">
                          <span className="bg-[#E3EFFC] dark:bg-blue-950/50 text-[#2563EB] dark:text-blue-400 font-bold px-3 py-0.5 rounded-full">
                            {group}
                          </span>

                          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                            <User size={13} className="text-slate-400 shrink-0" />
                            <span>{teacher}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Submission & Evaluation Status Badges */}
                      <div className="flex flex-wrap items-center gap-2 sm:justify-end shrink-0">
                        {/* 1. Submission Status Badge */}
                        <span
                          className={`text-xs font-bold px-3.5 py-1.5 rounded-full border ${
                            isCompleted
                              ? isLateSubmitted
                                ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50'
                                : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50'
                              : isOverdue
                              ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/50'
                              : 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50'
                          }`}
                        >
                          {item.submissionStatus ||
                            (isCompleted
                              ? isLateSubmitted
                                ? isRtl ? 'تم التسليم متأخراً' : 'Submitted Late'
                                : isRtl ? 'تم التسليم' : 'Submitted'
                              : isOverdue
                              ? isRtl ? 'فات موعد التسليم' : 'Overdue'
                              : isRtl ? 'في الانتظار' : 'Pending')}
                        </span>

                        {/* 2. Evaluation Status Badge (ONLY shown when completed/submitted) */}
                        {isCompleted && (
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-bold px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 ${
                                evalInfo.isEvaluated
                                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                                  : 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700/60'
                              }`}
                            >
                              {evalInfo.isEvaluated ? (
                                <CheckCircle size={13} className="text-white shrink-0" />
                              ) : (
                                <Clock size={13} className="text-amber-600 dark:text-amber-400 shrink-0" />
                              )}
                              <span>
                                {evalInfo.isEvaluated
                                  ? isRtl ? 'تم التقييم' : 'Evaluated'
                                  : isRtl ? 'لم يتم التقييم' : 'Not Evaluated'}
                              </span>
                            </span>

                            {/* Grade display if evaluated */}
                            {evalInfo.isEvaluated && item.grade !== null && item.grade !== undefined && (
                              <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/50 text-xs font-black font-mono">
                                <Star size={13} className="fill-amber-500 text-amber-500" />
                                <span>{item.grade}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Middle Section: Informational Banner & Teacher Notes */}
                    {isCompleted && !evalInfo.isEvaluated && (
                      <div className="bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-3 sm:px-4 border border-amber-200/60 dark:border-amber-800/40 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-300 font-medium">
                        <Clock size={15} className="shrink-0 text-amber-600 dark:text-amber-400" />
                        <span>
                          {isRtl
                            ? 'تم استلام تسليمك للواجب بنجاح، وهو قيد المراجعة والتقييم من قِبل المعلم حالياً.'
                            : 'Your homework submission was received successfully and is currently awaiting teacher review and grading.'}
                        </span>
                      </div>
                    )}

                    {/* Overdue Submission Available Notice */}
                    {isOverdue && !isCompleted && (
                      <div className="bg-amber-50/80 dark:bg-amber-950/20 rounded-2xl p-3 sm:px-4 border border-amber-200/60 dark:border-amber-800/40 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-300 font-medium">
                        <AlertCircle size={15} className="shrink-0 text-amber-600 dark:text-amber-400" />
                        <span>
                          {isRtl
                            ? 'يمكنك تسليم هذا الواجب الآن وسيصل إلى المعلم كـ (تسليم متأخر).'
                            : 'You can submit this assignment now; it will reach the teacher as a late submission.'}
                        </span>
                      </div>
                    )}

                    {/* Teacher Notes Box: Crucial feedback for students */}
                    {item.teacherNotes && (
                      <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3.5 sm:px-4 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                        <MessageSquare size={16} className="text-[#00594C] dark:text-emerald-400 mt-0.5 shrink-0" />
                        <div className="text-xs space-y-1">
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            {isRtl ? 'ملاحظات المعلم وتقييمه:' : 'Teacher Notes & Feedback:'}
                          </span>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                            {item.teacherNotes}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Dates & Attachments Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                      {/* Dates */}
                      <div className="flex items-center gap-4 flex-wrap">
                        {/* Deadline Date */}
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-slate-400 shrink-0" />
                          <span className="font-medium">
                            {isRtl ? 'الموعد النهائي:' : 'Deadline:'}
                          </span>
                          <span className="font-bold text-slate-700 dark:text-slate-300">
                            {formatHomeworkDate(item.deadline || item.dueDate, isRtl) || (isRtl ? 'غير محدد' : 'N/A')}
                          </span>
                        </span>

                        {/* Submitted Date if available */}
                        {isCompleted && item.submittedAt && (
                          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 size={13} className="shrink-0" />
                            <span className="font-medium">
                              {isRtl ? 'تاريخ التسليم:' : 'Submitted on:'}
                            </span>
                            <span className="font-bold">
                              {formatHomeworkDate(item.submittedAt, isRtl)}
                            </span>
                          </span>
                        )}

                        {/* Overdue alert if missed */}
                        {isOverdue && !isCompleted && (
                          <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
                            <AlertCircle size={13} className="shrink-0" />
                            <span>{isRtl ? 'متأخر • متاح التسليم الآن' : 'Overdue • Late submission open'}</span>
                          </span>
                        )}
                      </div>

                      {/* Attachments / Media Links */}
                      {(item.document || item.media) && (
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.document && (
                            <a
                              href={item.document}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors border border-slate-200/80 dark:border-slate-700"
                            >
                              <FileText size={12} className="text-red-500" />
                              <span>{isRtl ? 'ملف الواجب' : 'Document PDF'}</span>
                              <Download size={11} className="text-slate-400" />
                            </a>
                          )}

                          {item.media && (
                            <a
                              href={item.media}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors border border-slate-200/80 dark:border-slate-700"
                            >
                              <Video size={12} className="text-blue-500" />
                              <span>{isRtl ? 'فيديو مرفق' : 'Video Media'}</span>
                              <ExternalLink size={11} className="text-slate-400" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => handleOpenDetails(item)}
                        className={`w-full py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 ${
                          isOngoing
                            ? 'bg-[#00594C] hover:bg-[#004742] text-white shadow-[#00594C]/10'
                            : isOverdue
                            ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/10'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {isOverdue && <Send size={15} className={isRtl ? 'rotate-180' : ''} />}
                        <span>
                          {isOngoing
                            ? isRtl ? 'عرض التفاصيل والتسليم' : 'View Details & Submit'
                            : isOverdue
                            ? isRtl ? 'تسليم الواجب الآن (متأخر)' : 'Submit Homework (Late)'
                            : isCompleted
                            ? isRtl ? 'عرض تفاصيل الواجب والتقييم' : 'View Details & Evaluation'
                            : isRtl ? 'عرض تفاصيل الواجب' : 'View Assignment Details'}
                        </span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
