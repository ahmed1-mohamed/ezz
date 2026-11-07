import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
   Calendar,
   Users,
  GraduationCap,
   Search,
  RotateCcw,
  History,
  CheckCircle2,
  Clock,
   HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { parentApi } from '@/shared/services/api/parentApi';
import { parentTeacherEvaluationsApi } from '@/shared/services/api/parentTeacherEvaluationsApi';
import ParentPagination from '../overview/components/ParentPagination';
import TeacherCard from './components/teacher_evaluations/TeacherCard';
import TeacherEvaluationModal from './components/teacher_evaluations/TeacherEvaluationModal';
import EvaluationsHistoryList from './components/teacher_evaluations/EvaluationsHistoryList';
import useDebounce from '@/shared/hooks/useDebounce';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 26 },
  },
};

function extractSafeText(val, isRtl = true) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    const localized = isRtl ? (val.ar || val.en) : (val.en || val.ar);
    if (localized && typeof localized === 'string') return localized.trim();
    if (val.name && typeof val.name === 'string') return val.name.trim();
    if (val.title && typeof val.title === 'string') return val.title.trim();
    if (val.text && typeof val.text === 'string') return val.text.trim();
    return '';
  }
  return '';
}

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d);
    }
  } catch {
    return String(dateStr);
  }
  return String(dateStr);
}

function getRatingMeta(rating, t) {
  const numericRating = Number(rating || 0);
  if (numericRating >= 4.8) {
    return {
      label: t('parent.ratings.labelExcellent', 'ممتاز'),
      badgeClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    };
  }
  if (numericRating >= 4.0) {
    return {
      label: t('parent.ratings.labelVeryGood', 'جيد جداً'),
      badgeClass: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 border-teal-200 dark:border-teal-800',
    };
  }
  if (numericRating >= 3.0) {
    return {
      label: t('parent.ratings.labelGood', 'جيد'),
      badgeClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    };
  }
  return {
    label: t('parent.ratings.labelAcceptable', 'مقبول'),
    badgeClass: 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  };
}

export default function ParentRatings() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [activeTab, setActiveTab] = useState('teachers');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 350);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTeacherForEval, setSelectedTeacherForEval] = useState(null);
  const [isEvalModalOpen, setIsEvalModalOpen] = useState(false);
  const {
    data: teachersData,
    isLoading: isLoadingTeachers,
    isError: isErrorTeachers,
    refetch: refetchTeachers,
  } = useQuery({
    queryKey: ['parent-children-teachers', debouncedSearch],
    queryFn: () => parentTeacherEvaluationsApi.fetchChildrenTeachers({
      search: debouncedSearch.trim() || undefined,
    }),
  });
  const teachersList = useMemo(() => {
    if (!teachersData) return [];
    if (Array.isArray(teachersData.data)) return teachersData.data;
    if (Array.isArray(teachersData)) return teachersData;
    return [];
  }, [teachersData]);
  const teacherStats = useMemo(() => {
    const total = teachersList.length;
    const evaluated = teachersList.filter((tc) => tc?.isEvaluatedThisWeek).length;
    const pending = Math.max(0, total - evaluated);
    return { total, evaluated, pending };
  }, [teachersList]);
  const filteredTeachers = useMemo(() => {
    let result = teachersList;
    if (statusFilter === 'evaluated') {
      result = result.filter((tc) => tc?.isEvaluatedThisWeek);
    } else if (statusFilter === 'pending') {
      result = result.filter((tc) => !tc?.isEvaluatedThisWeek);
    }
    return result;
  }, [teachersList, statusFilter]);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('all');
  const [currentStudentPage, setCurrentStudentPage] = useState(1);
  const [isLoadingStudents, setIsLoadingStudents] = useState(true);
  const [studentRatingsData, setStudentRatingsData] = useState({
    evaluations: [],
    stats: { average: 0, count: 0, excellent: 0 },
    pagination: { currentPage: 1, limit: 10, numberOfPages: 1 },
  });
  useEffect(() => {
    let isMounted = true;
    const loadStudents = async () => {
      try {
        const res = await parentApi.fetchChildren();
        if (isMounted && res?.success && Array.isArray(res.data)) {
          setStudentsList(res.data);
        }
      } catch (err) {
        console.error('Failed to load students for ratings', err);
      }
    };
    loadStudents();
    return () => {
      isMounted = false;
    };
  }, []);
  const fetchStudentRatings = useCallback(async (studentId, page) => {
    setIsLoadingStudents(true);
    try {
      const params = { page, limit: 10 };
      if (studentId && studentId !== 'all') {
        params.studentId = studentId;
      }
      const res = await parentApi.fetchStudentEvaluations(params);
      const rawList = res?.success && Array.isArray(res.data) ? res.data : [];
      const evaluations = rawList.map((item, idx) => {
        const id = item.id || item._id || `eval-${idx}`;
        const rating = Number(item.rating ?? item.score ?? 5);
        const notes = extractSafeText(item.notes || item.comment, isRtl);
        const studentName = extractSafeText(item.studentData?.name || item.studentName || item.student, isRtl) || '-';
        const studentImage = typeof item.studentData?.image === 'string' && item.studentData.image.trim() ? item.studentData.image : null;
        const teacherName = extractSafeText(item.teacherData?.name || item.teacherName || item.teacher, isRtl) || '-';
        const teacherImage = typeof item.teacherData?.image === 'string' && item.teacherData.image.trim() ? item.teacherData.image : null;
        const sessionTitle = extractSafeText(item.sessionData?.title || item.subject || item.title, isRtl) || t('parent.ratings.sessionDefault', 'حصة تفاعلية');
        const sessionDate = item.sessionData?.date || item.date || item.createdAt?.slice(0, 10) || '-';
        const sessionStatus = item.sessionData?.status || 'completed';
        const meta = getRatingMeta(rating, t);
        return {
          id,
          rating,
          notes,
          studentName,
          studentImage,
          teacherName,
          teacherImage,
          sessionTitle,
          sessionDate,
          sessionStatus,
          label: meta.label,
          badgeClass: meta.badgeClass,
        };
      });
      const totalCount = res?.totalEvaluations ?? evaluations.length;
      const averageRating = res?.averageRating !== undefined
        ? Number(res.averageRating)
        : (evaluations.length > 0 ? evaluations.reduce((acc, e) => acc + e.rating, 0) / evaluations.length : 0);
      const excellentCount = evaluations.filter((e) => e.rating >= 4.5).length;
      setStudentRatingsData({
        evaluations,
        stats: {
          average: averageRating,
          count: totalCount,
          excellent: excellentCount,
        },
        pagination: res?.pagination || {
          currentPage: page,
          limit: 10,
          numberOfPages: Math.max(1, Math.ceil(totalCount / 10)),
        },
      });
    } catch (err) {
      console.error('Failed to fetch student evaluations', err);
      setStudentRatingsData({
        evaluations: [],
        stats: { average: 0, count: 0, excellent: 0 },
        pagination: { currentPage: 1, limit: 10, numberOfPages: 1 },
      });
    } finally {
      setIsLoadingStudents(false);
    }
  }, [t, isRtl]);
  useEffect(() => {
    if (activeTab === 'students') {
      fetchStudentRatings(selectedStudent, currentStudentPage);
    }
  }, [activeTab, fetchStudentRatings, selectedStudent, currentStudentPage]);
  const handleOpenEvaluateModal = (teacher) => {
    setSelectedTeacherForEval(teacher);
    setIsEvalModalOpen(true);
  };
  const handleCloseEvaluateModal = () => {
    setIsEvalModalOpen(false);
    setSelectedTeacherForEval(null);
  };
  const handleEvaluationSuccess = () => {
    refetchTeachers();
  };
  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    setCurrentStudentPage(1);
  };
  const handleStudentPageChange = (page) => {
    setCurrentStudentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-2 md:p-8 max-w-7xl mx-auto space-y-6 font-sans min-h-screen relative transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-4 shadow-sm border border-slate-200 dark:border-slate-800"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center shrink-0">
              <Star className="w-7 h-7 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                  {t('parentTeacherEval.hubBadge', 'منظومة التقييمات')}
                </span>
                {teacherStats.pending > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{teacherStats.pending} {t('parentTeacherEval.pendingThisWeekCount', 'معلم بانتظار التقييم')}</span>
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                {t('parentTeacherEval.pageTitle', 'تقييم المعلمين')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
                {t(
                  'parentTeacherEval.pageSubtitle',
                  'شارك في تقييم أداء معلمي أبنائك أسبوعياً واستعرض سجل تقييماتك وملاحظات المعلمين للأبناء'
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 self-start lg:self-center">
            <button
              type="button"
              onClick={() => setActiveTab('teachers')}
              className={`flex items-center gap-2 px-2 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shrink-0 ${
                activeTab === 'teachers'
                  ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{t('parentTeacherEval.tabTeachers', 'معلمو الأبناء')}</span>
              {teacherStats.total > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  activeTab === 'teachers' ? 'bg-[#0f7a6c]/10 text-[#0f7a6c]' : 'bg-slate-200 dark:bg-slate-700'
                }`}>
                  {teacherStats.total}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shrink-0 ${
                activeTab === 'history'
                  ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <History className="w-4 h-4" />
              <span>{t('parentTeacherEval.tabHistory', 'سجل تقييماتي للمعلمين')}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('students')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shrink-0 ${
                activeTab === 'students'
                  ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t('parentTeacherEval.tabStudents', 'تقييمات الأبناء')}</span>
            </button>
          </div>
        </div>
        {activeTab === 'teachers' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-200/60 dark:border-slate-700">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 font-medium block">
                  {t('parentTeacherEval.statTotalTeachers', 'إجمالي معلمي الأبناء')}
                </span>
                <span className="text-lg font-black text-slate-900 dark:text-white mt-0.5 block">
                  {teacherStats.total} {t('parentTeacherEval.teachersUnit', 'معلمين')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-200/60 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 font-medium block">
                  {t('parentTeacherEval.statEvaluatedThisWeek', 'تم تقييمهم هذا الأسبوع')}
                </span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                  {teacherStats.evaluated} {t('parentTeacherEval.teachersUnit', 'معلمين')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-200/60 dark:border-slate-700">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 font-medium block">
                  {t('parentTeacherEval.statPendingThisWeek', 'بانتظار التقييم الأسبوعي')}
                </span>
                <span className="text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5 block">
                  {teacherStats.pending} {t('parentTeacherEval.teachersUnit', 'معلمين')}
                </span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      {activeTab === 'teachers' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('parentTeacherEval.searchTeacherPlaceholder', 'بحث باسم المعلم أو التخصص أو الابن...')}
                className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30 focus:border-[#0f7a6c]"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    statusFilter === 'all'
                      ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t('parentTeacherEval.filterAll', 'الكل')} ({teacherStats.total})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('pending')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    statusFilter === 'pending'
                      ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t('parentTeacherEval.filterPending', 'بانتظار التقييم')} ({teacherStats.pending})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('evaluated')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    statusFilter === 'evaluated'
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t('parentTeacherEval.filterEvaluated', 'تم التقييم')} ({teacherStats.evaluated})
                </button>
              </div>
              {(searchQuery || statusFilter !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('all');
                  }}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title={t('parentTeacherEval.resetFilters', 'إعادة ضبط')}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          {isLoadingTeachers ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((sk) => (
                <div
                  key={sk}
                  className="h-80 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 animate-pulse space-y-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                      <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                    </div>
                  </div>
                  <div className="h-16 bg-slate-100 dark:bg-slate-800/60 rounded-2xl" />
                  <div className="h-14 bg-slate-100 dark:bg-slate-800/60 rounded-2xl" />
                </div>
              ))}
            </div>
          ) : isErrorTeachers ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500 flex items-center justify-center mx-auto">
                <HelpCircle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  {t('parentTeacherEval.loadErrorTeachersTitle', 'تعذر تحميل قائمة معلمي الأبناء')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  {t('parentTeacherEval.loadErrorTeachersSubtitle', 'يرجى التحقق من اتصال الإنترنت وإعادة المحاولة')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => refetchTeachers()}
                className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t('parentTeacherEval.retryBtn', 'إعادة المحاولة')}</span>
              </button>
            </div>
          ) : filteredTeachers.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
                {t('parentTeacherEval.noTeachersFoundTitle', 'لا يوجد معلمون مطابقون')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto">
                {t('parentTeacherEval.noTeachersFoundSubtitle', 'لم يتم العثور على أي معلم مطابق لمعايير البحث أو التصفية')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map((tc) => (
                <TeacherCard
                  key={tc.teacherId || tc.id}
                  teacher={tc}
                  onEvaluate={handleOpenEvaluateModal}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {activeTab === 'history' && <EvaluationsHistoryList />}
      {activeTab === 'students' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {t('parent.ratings.studentTitle', 'تقييمات وملاحظات الأبناء')}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {t('parent.ratings.studentSubtitle', 'متابعة تقييمات المعلمين التفصيلية لكل حصة يدرسها الأبناء')}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1.5 w-full sm:w-72">
              <label className="text-xs text-slate-500 dark:text-slate-400 font-medium text-start w-full">
                {t('parent.schedule.selectStudent', 'اختر الابن')}
              </label>
              <div className="relative w-full">
                <select
                  value={selectedStudent}
                  onChange={handleStudentChange}
                  className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl py-2.5 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-xs sm:text-sm font-bold"
                >
                  <option value="all">{t('parent.ratings.allStudents', 'جميع الأبناء')}</option>
                  {studentsList.map((s) => {
                    const id = s.student_id || s.user_id || s.id || s._id;
                    const name = extractSafeText(s.name, isRtl) || '-';
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 end-3.5 pointer-events-none" />
              </div>
            </div>
          </div>
          {isLoadingStudents ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((sk) => (
                <div key={sk} className="h-40 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse p-6" />
              ))}
            </div>
          ) : studentRatingsData.evaluations.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
                {t('parent.ratings.noEvaluations', 'لا توجد تقييمات للأبناء مسجلة حالياً')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto">
                {t('parent.ratings.noEvaluationsHint', 'يقوم المعلم بإضافة التقييم مباشرة بعد نهاية كل حصة تدريسية')}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentRatingsData.evaluations.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-[#0f7a6c] dark:text-emerald-400">
                          {ev.studentImage ? (
                            <img src={ev.studentImage} alt={ev.studentName} className="w-full h-full object-cover rounded-xl" />
                          ) : (
                            <span>{ev.studentName.charAt(0) || 'S'}</span>
                          )}
                        </div>
                        <div>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white block">
                            {ev.studentName}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {t('teacherLive.teacherPrefix', 'المعلم')}: {ev.teacherName}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 text-xs font-black">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{ev.rating} / 5</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0f7a6c]" />
                      <span>{ev.sessionTitle} • {formatDate(ev.sessionDate, isRtl)}</span>
                    </div>
                    {Boolean(ev.notes) && (
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                        "{ev.notes}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {studentRatingsData.pagination.numberOfPages > 1 && (
                <ParentPagination
                  currentPage={currentStudentPage}
                  numberOfPages={studentRatingsData.pagination.numberOfPages}
                  onPageChange={handleStudentPageChange}
                />
              )}
            </div>
          )}
        </div>
      )}
      <TeacherEvaluationModal
        isOpen={isEvalModalOpen}
        teacher={selectedTeacherForEval}
        onClose={handleCloseEvaluateModal}
        onSuccess={handleEvaluationSuccess}
      />
    </motion.div>
  );
}
