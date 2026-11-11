import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Clock,
  Star,
  CheckCircle,
  FileText,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

const TABS_CONFIG = [
  { key: 'ongoing', labelAr: 'الجارية', labelEn: 'Ongoing', defaultCount: 3 },
  { key: 'completed', labelAr: 'المكتملة', labelEn: 'Completed', defaultCount: 3 },
  { key: 'overdue', labelAr: 'المتأخرة', labelEn: 'Overdue', defaultCount: 1 },
];

function resolveEvaluationStatus(item, isRtl) {
  const raw = item?.evaluationStatus || item?.submission?.evaluationStatus || item?.evalStatus;
  if (typeof raw === 'string' && raw.trim()) {
    const clean = raw.trim().toLowerCase();
    if (clean === 'evaluated' || clean.includes('تم التقييم') || clean.includes('مقيم') || clean === 'done') {
      return { isEvaluated: true, label: isRtl ? 'تم التقييم' : 'Evaluated' };
    }
    if (clean === 'not_evaluated' || clean.includes('لم يتم التقييم') || clean.includes('غير مقيم') || clean === 'pending') {
      return { isEvaluated: false, label: isRtl ? 'لم يتم التقييم' : 'Not Evaluated' };
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
  const rawStatus = (item?.status || item?.rawStatus || item?.submission?.status || '').toString().toLowerCase();
  return rawStatus === 'submitted_late' ||
    Boolean(item?.isSubmittedLate) ||
    Boolean(item?.isLate) ||
    Boolean(item?.submittedLate) ||
    rawStatus.includes('late');
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
      id: 1,
      title: 'واجب أحكام النون الساكنة والتنوين',
      titleEn: 'Noon Sakinah & Tanween Rules Homework',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التجويد - سورة البقرة',
      sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
      dueDate: '17 أبريل 2026',
      dueDateEn: '17 April 2026',
      status: 'pending',
      rawStatus: 'pending',
      statusLabelAr: 'قيد التنفيذ',
      statusLabelEn: 'In Progress',
      description: 'حل تدريبات كتاب أحكام التلاوة ص 45 وتطبيق أحكام الإظهار والإدغام على الآيات المقررة مع تسجيل مقطع صوتي قصير.',
      fileUrl: null,
    },
    {
      id: 2,
      title: 'حفظ الآيات (1-15) من سورة مريم',
      titleEn: 'Memorize Verses (1-15) from Surah Maryam',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة الحفظ والمراجعة',
      sessionNameEn: 'Memorization & Review Session',
      dueDate: '20 أبريل 2026',
      dueDateEn: '20 April 2026',
      status: 'pending',
      rawStatus: 'pending',
      statusLabelAr: 'قيد التنفيذ',
      statusLabelEn: 'In Progress',
      description: 'حفظ الآيات حفظاً متقناً مع تطبيق أحكام المد ومراعاة مخارج الحروف.',
      fileUrl: null,
    },
    {
      id: 3,
      title: 'إعراب قصيدة نهج البردة',
      titleEn: 'Parsing of Nahj Al-Burdah Poem',
      subject: 'اللغة العربية',
      subjectEn: 'Arabic Language',
      teacher: 'الدكتور محمد الأمين',
      teacherEn: 'Dr. Mohammed Al-Amin',
      sessionName: 'حصة النحو والصرف',
      sessionNameEn: 'Grammar & Morphology Session',
      dueDate: '22 أبريل 2026',
      dueDateEn: '22 April 2026',
      status: 'pending',
      rawStatus: 'pending',
      statusLabelAr: 'قيد التنفيذ',
      statusLabelEn: 'In Progress',
      description: 'إعراب الأبيات الخمسة الأولى إعراباً كاملاً مفصلاً وتسليمه ملف PDF أو صورة واضحة.',
      fileUrl: null,
    },
  ],
  completed: [
    {
      id: 4,
      title: 'واجب أحكام النون الساكنة والتنوين',
      titleEn: 'Noon Sakinah & Tanween Rules Homework',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التجويد - سورة البقرة',
      sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
      submissionDate: '17 أبريل 2026',
      submissionDateEn: '17 April 2026',
      status: 'submitted',
      rawStatus: 'submitted',
      isSubmittedLate: false,
      statusLabelAr: 'مكتملة',
      statusLabelEn: 'Completed',
      evaluationStatus: 'تم التقييم',
      grade: '9/10',
      feedback: 'أحسنت يا بطل، إجابات متميزة مع مراعاة مراجعة حكم الإخفاء في السؤال الثالث.',
      description: 'حل تدريبات كتاب أحكام التلاوة ص 45 وتطبيق أحكام الإظهار والإدغام.',
      fileUrl: null,
    },
    {
      id: 5,
      title: 'تسميع سورة الكهف كاملة',
      titleEn: 'Recitation of Surah Al-Kahf',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التلاوة والتسميع',
      sessionNameEn: 'Recitation Session',
      submissionDate: '14 أبريل 2026',
      submissionDateEn: '14 April 2026',
      status: 'submitted_late',
      rawStatus: 'submitted_late',
      isSubmittedLate: true,
      statusLabelAr: 'متسلم متأخر',
      statusLabelEn: 'Submitted Late',
      evaluationStatus: 'تم التقييم',
      grade: '10/10',
      feedback: 'ما شاء الله تبارك الله، تلاوة متقنة وصوت رائع.',
      description: 'تسميع السورة مع مراعاة أحكام الوقف والابتداء.',
      fileUrl: null,
    },
    {
      id: 6,
      title: 'مراجعة تدريبات علم البديع',
      titleEn: 'Review of Rhetorical Devices Exercises',
      subject: 'اللغة العربية',
      subjectEn: 'Arabic Language',
      teacher: 'الدكتور محمد الأمين',
      teacherEn: 'Dr. Mohammed Al-Amin',
      sessionName: 'حصة البلاغة',
      sessionNameEn: 'Rhetoric Session',
      submissionDate: '10 أبريل 2026',
      submissionDateEn: '10 April 2026',
      status: 'submitted',
      rawStatus: 'submitted',
      isSubmittedLate: false,
      statusLabelAr: 'مكتملة',
      statusLabelEn: 'Completed',
      evaluationStatus: 'لم يتم التقييم',
      grade: null,
      feedback: null,
      description: 'استخراج المحسنات البديعية من النص الشعري.',
      fileUrl: null,
    },
  ],
  overdue: [
    {
      id: 7,
      title: 'واجب أحكام النون الساكنة والتنوين',
      titleEn: 'Noon Sakinah & Tanween Rules Homework',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التجويد - سورة البقرة',
      sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
      dueDate: '17 أبريل 2026',
      dueDateEn: '17 April 2026',
      lateTextAr: 'متأخر 5 أيام',
      lateTextEn: '5 days overdue',
      status: 'overdue',
      rawStatus: 'overdue',
      statusLabelAr: 'متأخر',
      statusLabelEn: 'Overdue',
      description: 'يرجى سرعة تسليم هذا الواجب لتفادي خصم درجات التأخير من التقييم النهائي.',
      fileUrl: null,
    },
  ],
};

export default function StudentAssignments() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [activeTab, setActiveTab] = useState('ongoing');
  const [assignmentsByTab, setAssignmentsByTab] = useState(MOCK_ASSIGNMENTS);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    async function loadHomeworkData() {
      setIsLoading(true);
      try {
        const [pendingRes, submittedRes, submittedLateRes, overdueRes] = await Promise.allSettled([
          studentPortalApi.fetchPendingHomework(),
          studentPortalApi.fetchSubmittedHomework(),
          studentPortalApi.fetchSubmittedLateHomework(),
          studentPortalApi.fetchOverdueHomework(),
        ]);
        if (!isMounted) return;
        const formatApiItems = (result, defaultList, statusKey) => {
          if (result.status === 'fulfilled') {
            const raw = result.value?.data || result.value;
            if (Array.isArray(raw) && raw.length > 0) {
              return raw.map((item, index) => {
                const rawStatus = (item.status || item.submission?.status || statusKey || '').toString().toLowerCase();
                const isLate = statusKey === 'submitted_late' || rawStatus === 'submitted_late' || Boolean(item.isLate) || Boolean(item.submittedLate);
                const isOverdue = statusKey === 'overdue' || rawStatus === 'overdue';
                const isCompleted = statusKey === 'completed' || statusKey === 'submitted_late' || rawStatus === 'submitted' || rawStatus === 'submitted_late';
                const rawEval = item.evaluationStatus || item.submission?.evaluationStatus || item.evalStatus;
                let evalLabel = '';
                if (typeof rawEval === 'string' && rawEval.trim()) {
                  const clean = rawEval.trim().toLowerCase();
                  if (clean === 'evaluated' || clean.includes('تم التقييم') || clean.includes('مقيم') || clean === 'done') {
                    evalLabel = 'تم التقييم';
                  } else if (clean === 'not_evaluated' || clean.includes('لم يتم التقييم') || clean.includes('غير مقيم') || clean === 'pending') {
                    evalLabel = 'لم يتم التقييم';
                  } else {
                    evalLabel = rawEval.trim();
                  }
                } else if (typeof item.evaluated === 'boolean') {
                  evalLabel = item.evaluated ? 'تم التقييم' : 'لم يتم التقييم';
                } else if (item.grade !== null && item.grade !== undefined && item.grade !== '') {
                  evalLabel = 'تم التقييم';
                } else if (isCompleted) {
                  evalLabel = 'لم يتم التقييم';
                }
                const dueFormatted = item.formattedDueDate || formatHomeworkDate(item.dueDate || item.deadline, isRtl) || (isRtl ? '17 أبريل 2026' : '17 April 2026');
                const submittedFormatted = formatHomeworkDate(item.submittedAt || item.submission?.submittedAt, isRtl) || (isRtl ? '17 أبريل 2026' : '17 April 2026');
                return {
                  id: item.id || item._id || index + 1,
                  title: item.title || (isRtl ? item.titleAr : item.titleEn) || item.name || 'واجب مدرسي',
                  titleEn: item.titleEn || item.title || 'Homework',
                  subject: item.group?.subject || item.subject || 'القرآن الكريم',
                  subjectEn: item.group?.subjectEn || item.subjectEn || 'Holy Quran',
                  teacher: item.teacher?.name || item.teacherName || 'الشيخ أحمد السيد',
                  teacherEn: item.teacher?.name || item.teacherName || 'Sheikh Ahmed Al-Sayed',
                  sessionName: item.group?.name || 'حصة التجويد - سورة البقرة',
                  sessionNameEn: item.group?.name || 'Tajweed Session - Surah Al-Baqarah',
                  dueDate: dueFormatted,
                  dueDateEn: dueFormatted,
                  submissionDate: submittedFormatted,
                  submissionDateEn: submittedFormatted,
                  lateTextAr: item.lateDays ? `متأخر ${item.lateDays} أيام` : 'متأخر 5 أيام',
                  lateTextEn: item.lateDays ? `${item.lateDays} days overdue` : '5 days overdue',
                  status: isCompleted ? (isLate ? 'submitted_late' : 'completed') : (isOverdue ? 'overdue' : 'pending'),
                  rawStatus: rawStatus || statusKey,
                  isSubmittedLate: isLate,
                  evaluationStatus: evalLabel,
                  statusLabelAr: isCompleted ? (isLate ? 'متسلم متأخر' : 'مكتملة') : (isOverdue ? 'متأخر' : 'قيد التنفيذ'),
                  statusLabelEn: isCompleted ? (isLate ? 'Submitted Late' : 'Completed') : (isOverdue ? 'Overdue' : 'In Progress'),
                  grade: item.grade || item.submission?.grade || null,
                  feedback: item.feedback || item.submission?.feedback || null,
                  description: item.description || item.desc || '',
                  fileUrl: item.fileUrl || null,
                };
              });
            }
          }
          return defaultList;
        };
        const pendingItems = formatApiItems(pendingRes, MOCK_ASSIGNMENTS.ongoing, 'pending');
        const submittedItems = formatApiItems(submittedRes, [], 'completed');
        const submittedLateItems = formatApiItems(submittedLateRes, [], 'submitted_late');
        const combinedCompleted = [...submittedItems];
        submittedLateItems.forEach((lateItem) => {
          if (!combinedCompleted.some((c) => String(c.id) === String(lateItem.id))) {
            combinedCompleted.push(lateItem);
          }
        });
        const overdueItems = formatApiItems(overdueRes, MOCK_ASSIGNMENTS.overdue, 'overdue');
        if (!isMounted) return;
        setAssignmentsByTab({
          ongoing: pendingItems,
          completed: combinedCompleted.length > 0 ? combinedCompleted : MOCK_ASSIGNMENTS.completed,
          overdue: overdueItems,
        });
      } catch {
        if (!isMounted) return;
        setAssignmentsByTab(MOCK_ASSIGNMENTS);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadHomeworkData();
    return () => {
      isMounted = false;
    };
  }, [isRtl]);
  function handleTabChange(tabKey) {
    setActiveTab(tabKey);
  }
  function handleOpenDetails(item) {
    navigate(`/dashboard/student/assignments/${item.id}`, { state: { homework: item } });
  }
  const currentList = assignmentsByTab[activeTab] || [];
  const ongoingCount = assignmentsByTab.ongoing?.length ?? 3;
  const completedCount = assignmentsByTab.completed?.length ?? 3;
  const overdueCount = assignmentsByTab.overdue?.length ?? 1;
  const getTabCount = (tabKey) => {
    if (tabKey === 'ongoing') return ongoingCount;
    if (tabKey === 'completed') return completedCount;
    return overdueCount;
  };
  return (
    <>
      <div className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 p-4 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:px-8 sm:py-6 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {t('studentDashboard.assignments.title', 'الواجبات')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1 font-medium">
              {t('studentDashboard.assignments.subtitle', 'تابع واجباتك وقم بتسليمها في الوقت المحدد')}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {TABS_CONFIG.map((tab) => {
                const isSelected = activeTab === tab.key;
                const count = getTabCount(tab.key);
                const tabLabel = tab.key === 'ongoing'
                  ? t('studentDashboard.assignments.ongoing', 'الجارية')
                  : tab.key === 'completed'
                  ? t('studentDashboard.assignments.completedTab', 'المكتملة')
                  : t('studentDashboard.assignments.overdueTab', 'المتأخرة');
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
                    <span>{tabLabel}</span>
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
          </div>
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <Spinner />
            </div>
          ) : currentList.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 space-y-3">
              <FileText size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
                {t('studentDashboard.assignments.empty', 'لا توجد واجبات في هذا القسم')}
              </h3>
            </div>
          ) : (
            <div className="space-y-4">
              {currentList.map((item) => {
                const title = isRtl ? item.title : (item.titleEn || item.title);
                const teacher = isRtl ? item.teacher : (item.teacherEn || item.teacher);
                const subject = isRtl ? item.subject : (item.subjectEn || item.subject);
                const sessionName = isRtl ? item.sessionName : (item.sessionNameEn || item.sessionName);
                const isOverdue = item.status === 'overdue' || item.rawStatus === 'overdue';
                const isCompleted = item.status === 'completed' || item.status === 'submitted' || item.status === 'submitted_late' || item.rawStatus === 'submitted' || item.rawStatus === 'submitted_late';
                const isOngoing = !isCompleted && !isOverdue;
                const isLateSubmitted = isHomeworkSubmittedLate(item);
                const evalInfo = resolveEvaluationStatus(item, isRtl);
                const statusBadgeLabel = isCompleted
                  ? (isLateSubmitted ? (isRtl ? 'متسلم متأخر' : 'Submitted Late') : t('studentDashboard.assignments.completed', 'مكتملة'))
                  : isOverdue
                  ? t('studentDashboard.assignments.overdue', 'متأخر')
                  : t('studentDashboard.assignments.inProgress', 'قيد التنفيذ');
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5 text-start"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                          {title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          <span className="bg-[#E3EFFC] text-[#2563EB] text-xs font-bold px-3 py-0.5 rounded-full">
                            {subject}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <User size={14} className="text-slate-400 shrink-0" />
                            <span>{teacher}</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-medium">
                          {sessionName}
                        </p>
                        <div className="flex items-center gap-3 text-xs mt-1.5 text-slate-400 dark:text-slate-500 flex-wrap">
                          {isOverdue && item.lateTextAr && (
                            <span className="text-[#EF4444] font-bold flex items-center gap-1">
                              <Clock size={13} className="shrink-0" />
                              <span>{isRtl ? item.lateTextAr : item.lateTextEn}</span>
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="shrink-0" />
                            <span>
                              {isCompleted
                                ? `${t('studentDashboard.assignments.submittedDateLabel', 'تم التسليم :')} ${isRtl ? item.submissionDate : item.submissionDateEn}`
                                : `${t('studentDashboard.assignments.dueDateLabel', 'تاريخ التسليم :')} ${isRtl ? item.dueDate : item.dueDateEn}`}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end shrink-0 gap-2">
                        <div className="flex items-center gap-2 flex-wrap justify-end">
                          <span
                            className={`text-xs font-bold px-4 py-1.5 rounded-full ${
                              isCompleted
                                ? isLateSubmitted
                                  ? 'bg-[#FEF3C7] text-[#D97706]'
                                  : 'bg-[#D1FAE5] text-[#059669]'
                                : isOverdue
                                ? 'bg-[#FEE2E2] text-[#EF4444]'
                                : 'bg-[#FEF3C7] text-[#D97706]'
                            }`}
                          >
                            {statusBadgeLabel}
                          </span>
                          {isCompleted && (
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1 ${
                                evalInfo.isEvaluated
                                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50'
                                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <CheckCircle size={12} className={evalInfo.isEvaluated ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'} />
                              <span>{evalInfo.label}</span>
                            </span>
                          )}
                        </div>
                        {isCompleted && evalInfo.isEvaluated && item.grade && (
                          <div className="flex items-center gap-1 mt-1 text-sm font-bold text-slate-800 dark:text-slate-100">
                            <span className="font-mono">{item.grade}</span>
                            <Star size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleOpenDetails(item)}
                        className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
                          isOngoing
                            ? 'bg-[#00594C] hover:bg-[#004742] text-white'
                            : isOverdue
                            ? 'bg-[#EB3D3D] hover:bg-[#DC2626] text-white'
                            : 'bg-[#F1F5F9] dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {isCompleted ? t('studentDashboard.assignments.viewDetails', 'عرض التفاصيل') : t('studentDashboard.assignments.viewSubmit', 'عرض التفاصيل والتسليم')}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
