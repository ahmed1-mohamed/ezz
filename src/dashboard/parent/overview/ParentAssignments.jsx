import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, FileText, ChevronDown, User, GraduationCap, Users, Calendar, Award, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { parentApi } from '@/shared/services/api/parentApi';
import ParentPagination from './components/ParentPagination';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
};

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(d);
    }
  } catch {
    return dateStr;
  }
  return dateStr;
}

const filterTabs = [
  { id: 'all', labelKey: 'all', defaultLabel: 'جميع الواجبات' },
  { id: 'pending', labelKey: 'pending', defaultLabel: 'قيد الانتظار' },
  { id: 'submitted', labelKey: 'submitted', defaultLabel: 'تم التسليم' },
  { id: 'submitted-late', labelKey: 'submittedLate', defaultLabel: 'تم التسليم متأخراً' },
  { id: 'overdue', labelKey: 'overdue', defaultLabel: 'متأخر' }
];

export default function ParentAssignments() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [cachedStatistics, setCachedStatistics] = useState(null);
  const [homeworkData, setHomeworkData] = useState({
    list: [],
    statistics: null,
    pagination: { currentPage: 1, limit: 20, numberOfPages: 1 }
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
        console.error('Failed to load students for homework', err);
      }
    };
    loadStudents();
    return () => { isMounted = false; };
  }, []);
  const loadHomework = useCallback(async (filter, studentId, page) => {
    setIsLoading(true);
    try {
      const params = { page, limit: 10 };
      if (studentId && studentId !== 'all') {
        params.student = studentId;
      }
      const res = await parentApi.fetchHomeworkList(filter, params);
      const rawList = res?.success && Array.isArray(res.data) ? res.data : [];
      if (res?.statistics) {
        setCachedStatistics(res.statistics);
      }
      setHomeworkData((prev) => ({
        list: rawList,
        statistics: res?.statistics || prev.statistics,
        pagination: res?.pagination || {
          currentPage: page,
          limit: 10,
          numberOfPages: 1
        }
      }));
    } catch (err) {
      console.error('Failed to load homework list', err);
      setHomeworkData((prev) => ({
        list: [],
        statistics: prev.statistics,
        pagination: { currentPage: 1, limit: 10, numberOfPages: 1 }
      }));
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    Promise.resolve().then(() => {
      loadHomework(activeFilter, selectedStudent, currentPage);
    });
  }, [loadHomework, activeFilter, selectedStudent, currentPage]);
  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  }, []);
  const handleStudentChange = useCallback((e) => {
    setSelectedStudent(e.target.value);
    setCurrentPage(1);
  }, []);
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const stats = useMemo(() => {
    const api = homeworkData.statistics || cachedStatistics;
    if (api) {
      return {
        total: Number(api.total ?? 0),
        submitted: Number(api.submitted ?? 0),
        evaluated: Number(api.evaluated ?? 0),
        overdue: Number(api.overdue ?? 0),
        pending: Number(api.pending ?? 0),
        submittedLate: Number(api.submitted_late ?? 0),
        notEvaluated: Number(api.not_evaluated ?? 0)
      };
    }
    // fallback: count from current page list
    const list = homeworkData.list || [];
    return {
      total: list.length,
      submitted: list.filter(item => {
        const s = String(item.submissionStatus || '');
        return s.includes('تم التسليم') && !s.includes('متأخر');
      }).length,
      evaluated: list.filter(item => {
        const e = String(item.evaluationStatus || '');
        return e.includes('تم التقييم') && !e.includes('لم');
      }).length,
      overdue: list.filter(item => {
        const s = String(item.submissionStatus || '').toLowerCase();
        return s.includes('متأخر') || s.includes('overdue');
      }).length,
      pending: list.filter(item => {
        const s = String(item.submissionStatus || '');
        return s.includes('انتظار') || s.includes('pending');
      }).length,
      submittedLate: list.filter(item => {
        const s = String(item.submissionStatus || '');
        return s.includes('متأخر') && s.includes('تم التسليم');
      }).length,
      notEvaluated: list.filter(item => {
        const e = String(item.evaluationStatus || '');
        return e.includes('لم يتم');
      }).length
    };
  }, [homeworkData.statistics, cachedStatistics, homeworkData.list]);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans min-h-screen relative"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-start">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {t('parent.assignments.title', 'واجبات الطلاب')}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-400 mt-1">
            {t('parent.assignments.subtitle', 'متابعة الواجبات المدرسية وحالة التسليم والتقييمات')}
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
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
            >
              <option value="all">{t('parent.assignments.allStudents', 'جميع الأبناء')}</option>
              {studentsList.map((s) => {
                const id = s.student_id || s.user_id || s.id || s._id;
                const name = typeof s.name === 'object' ? (isRtl ? (s.name.ar || s.name.en) : (s.name.en || s.name.ar)) : s.name;
                return <option key={id} value={id}>{name}</option>;
              })}
            </select>
            <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleFilterChange(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                isActive
                  ? 'bg-[#0f7a6c] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-slate-100 dark:border-slate-800'
              }`}
            >
              {t(`parent.assignments.filter_${tab.id}`, tab.defaultLabel)}
            </button>
          );
        })}
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.assignments.totalStat', 'إجمالي الواجبات')}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
              {stats.total}
            </span>
          </div>
          <div className="text-sky-500 shrink-0">
            <FileText size={26} strokeWidth={1.75} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.assignments.submittedStat', 'تم التسليم')}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-500">
              {stats.submitted}
            </span>
          </div>
          <div className="text-emerald-500 shrink-0">
            <CheckCircle2 size={26} strokeWidth={1.75} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.assignments.evaluatedStat', 'تم التقييم')}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#0f7a6c] dark:text-emerald-400">
              {stats.evaluated}
            </span>
          </div>
          <div className="text-[#0f7a6c] dark:text-emerald-400 shrink-0">
            <Award size={26} strokeWidth={1.75} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.assignments.overdueStat', 'متأخر')}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-red-500">
              {stats.overdue}
            </span>
          </div>
          <div className="text-red-500 shrink-0">
            <Clock size={26} strokeWidth={1.75} />
          </div>
        </div>
      </motion.div>
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-36 bg-white dark:bg-slate-800 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : homeworkData.list.length > 0 ? (
        <div className="space-y-4">
          {homeworkData.list.map((item, idx) => {
            const id = item.id || item._id || `hw-${idx}`;
            const title = item.homework || item.title || t('parent.assignments.defaultTitle', 'واجب دراسي');
            const studentName = item.student || item.studentName || '-';
            const groupName = item.group || item.groupName || item.subject || '-';
            const teacherName = item.teacher || item.teacherName || '-';
            const submissionStatus = item.submissionStatus || 'قيد الانتظار';
            const evaluationStatus = item.evaluationStatus || 'قيد التقييم';
            const rawGrade = item.grade !== null && item.grade !== undefined ? Number(item.grade) : null;
            const submittedDate = formatDate(item.submittedAt, isRtl);
            const deadlineDate = formatDate(item.deadline, isRtl);
            const isSubmitted = submissionStatus.includes('تم التسليم');
            const isLate = submissionStatus.includes('متأخر');
            const isEvaluated = Boolean(isSubmitted && item.isEvaluated !== false && item.evaluated !== false && !evaluationStatus.includes('غير') && !evaluationStatus.includes('لم يتم') && !evaluationStatus.includes('قيد') && (evaluationStatus.includes('تم التقييم') || item.evaluationStatus === 'evaluated' || item.isEvaluated === true || item.evaluated === true || Boolean(item.evaluatedAt) || (rawGrade !== null && rawGrade > 0 && (item.teacherNotes || item.feedback))));
            const grade = isEvaluated ? rawGrade : null;
            return (
              <motion.div
                variants={itemVariants}
                key={id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-md"
              >
                <div className="flex-1 w-full text-start space-y-3 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {title}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      isSubmitted && !isLate
                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                        : isLate
                        ? 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400 border-red-200 dark:border-red-800'
                        : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                    }`}>
                      {submissionStatus}
                    </span>
                    {evaluationStatus && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                        {evaluationStatus}
                      </span>
                    )}
                    {grade !== null && (
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500 text-white shadow-xs">
                        {grade}%
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                      <span>{t('parent.assignments.group', 'المجموعة')}: <strong className="text-slate-700 dark:text-slate-200">{groupName}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                      <span>{t('parent.assignments.student', 'الطالب')}: <strong className="text-slate-700 dark:text-slate-200">{studentName}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                      <span>{t('parent.assignments.teacher', 'المعلم')}: <strong className="text-slate-700 dark:text-slate-200">{teacherName}</strong></span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
                    {item.submittedAt && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{t('parent.assignments.submittedAt', 'تاريخ التسليم')}: {submittedDate}</span>
                      </div>
                    )}
                    {item.deadline && (
                      <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{t('parent.assignments.deadline', 'الموعد النهائي')}: {deadlineDate}</span>
                      </div>
                    )}
                  </div>
                  {item.teacherNotes && (
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-3.5 border border-slate-100 dark:border-slate-800/80 flex items-start gap-2.5">
                      <MessageSquare className="w-4 h-4 text-[#0f7a6c] mt-0.5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                          {t('parent.reports.teacherNotes', 'ملاحظات المعلم')}:
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {item.teacherNotes}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="shrink-0 flex items-center justify-end w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => navigate(`/dashboard/parent/assignments/${id}`)}
                    className="w-full md:w-auto px-7 py-3 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-2xl font-bold text-sm transition-all shadow-xs active:scale-95 text-center"
                  >
                    {t('parent.assignments.viewDetails', 'عرض التفاصيل')}
                  </button>
                </div>
              </motion.div>
            );
          })}
          {homeworkData.pagination.numberOfPages > 1 && (
            <ParentPagination
              currentPage={currentPage}
              totalPages={homeworkData.pagination.numberOfPages}
              totalItems={homeworkData.list.length}
              startIndex={(currentPage - 1) * homeworkData.pagination.limit}
              endIndex={currentPage * homeworkData.pagination.limit}
              itemLabel={t('parent.assignments.homeworkLabel', 'واجب')}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xs">
          <p className="text-slate-400 text-sm">
            {t('parent.assignments.empty', 'لا توجد واجبات مسجلة في هذا القسم.')}
          </p>
        </div>
      )}
    </motion.div>
  );
}
