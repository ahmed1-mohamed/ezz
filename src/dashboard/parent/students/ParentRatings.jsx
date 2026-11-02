import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, ChevronDown, Calendar, User, GraduationCap, Award, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';
import ParentPagination from '../overview/components/ParentPagination';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 26 }
  }
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

function getRatingMeta(rating, t) {
  const numericRating = Number(rating || 0);
  if (numericRating >= 4.8) {
    return {
      label: t('parent.ratings.labelExcellent', 'ممتاز'),
      badgeClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
    };
  }
  if (numericRating >= 4.0) {
    return {
      label: t('parent.ratings.labelVeryGood', 'جيد جداً'),
      badgeClass: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 border-teal-200 dark:border-teal-800'
    };
  }
  if (numericRating >= 3.0) {
    return {
      label: t('parent.ratings.labelGood', 'جيد'),
      badgeClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800'
    };
  }
  return {
    label: t('parent.ratings.labelAcceptable', 'مقبول'),
    badgeClass: 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
  };
}

export default function ParentRatings() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isLoading, setIsLoading] = useState(true);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [ratingsData, setRatingsData] = useState({
    evaluations: [],
    stats: { average: 0, count: 0, excellent: 0 },
    pagination: { currentPage: 1, limit: 10, numberOfPages: 1 }
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
    return () => { isMounted = false; };
  }, []);
  const fetchRatings = useCallback(async (studentId, page) => {
    setIsLoading(true);
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
        const notes = item.notes || item.comment || '';
        const studentName = item.studentData?.name || item.studentName || item.student || '-';
        const studentImage = item.studentData?.image || null;
        const teacherName = item.teacherData?.name || item.teacherName || item.teacher || '-';
        const teacherImage = item.teacherData?.image || null;
        const sessionTitle = item.sessionData?.title || item.subject || item.title || t('parent.ratings.sessionDefault', 'حصة تفاعلية');
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
          badgeClass: meta.badgeClass
        };
      });
      const totalCount = res?.totalEvaluations ?? evaluations.length;
      const averageRating = res?.averageRating !== undefined ? Number(res.averageRating) : (evaluations.length > 0 ? (evaluations.reduce((acc, e) => acc + e.rating, 0) / evaluations.length) : 0);
      const excellentCount = evaluations.filter(e => e.rating >= 4.5).length;
      setRatingsData({
        evaluations,
        stats: {
          average: averageRating,
          count: totalCount,
          excellent: excellentCount
        },
        pagination: res?.pagination || {
          currentPage: page,
          limit: 10,
          numberOfPages: Math.max(1, Math.ceil(totalCount / 10))
        }
      });
    } catch (err) {
      console.error('Failed to fetch student evaluations', err);
      setRatingsData({
        evaluations: [],
        stats: { average: 0, count: 0, excellent: 0 },
        pagination: { currentPage: 1, limit: 10, numberOfPages: 1 }
      });
    } finally {
      setIsLoading(false);
    }
  }, [t]);
  useEffect(() => {
    fetchRatings(selectedStudent, currentPage);
  }, [fetchRatings, selectedStudent, currentPage]);
  const handleStudentChange = useCallback((e) => {
    setSelectedStudent(e.target.value);
    setCurrentPage(1);
  }, []);
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const hasEvaluations = ratingsData.evaluations.length > 0;
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
            {t('parent.ratings.title', 'تقييمات الطلاب')}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-400 mt-1">
            {t('parent.ratings.subtitle', 'سجل تقييمات وملاحظات المعلمين للأبناء')}
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
              <option value="all">{t('parent.ratings.allStudents', 'جميع الأبناء')}</option>
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
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start flex flex-col items-start">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 mb-1">
              {t('parent.ratings.average', 'متوسط التقييم')}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-bold text-amber-500">
                {Number(ratingsData.stats.average).toFixed(1)}
              </span>
              <span className="text-xs text-slate-400 font-medium">/ 5</span>
            </div>
          </div>
          <div className="text-amber-500 shrink-0">
            <Star size={28} strokeWidth={1.75} className="fill-amber-400/20" />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start flex flex-col items-start">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 mb-1">
              {t('parent.ratings.count', 'إجمالي التقييمات')}
            </span>
            <span className="text-3xl sm:text-4xl font-bold text-[#0f7a6c] dark:text-emerald-400">
              {ratingsData.stats.count}
            </span>
          </div>
          <div className="text-[#0f7a6c] dark:text-emerald-400 shrink-0">
            <BookOpen size={28} strokeWidth={1.75} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start flex flex-col items-start">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 mb-1">
              {t('parent.ratings.excellent', 'تقييمات ممتازة')}
            </span>
            <span className="text-3xl sm:text-4xl font-bold text-emerald-500">
              {ratingsData.stats.excellent}
            </span>
          </div>
          <div className="text-emerald-500 shrink-0">
            <Award size={28} strokeWidth={1.75} />
          </div>
        </div>
      </motion.div>
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-36 bg-white dark:bg-slate-800 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : hasEvaluations ? (
        <div className="space-y-4">
          {ratingsData.evaluations.map((evaluation) => {
            const formattedDate = formatDate(evaluation.sessionDate, isRtl);
            return (
              <motion.div
                variants={itemVariants}
                key={evaluation.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all hover:shadow-md"
              >
                <div className="flex-1 w-full text-start space-y-3 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {evaluation.sessionTitle}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${evaluation.badgeClass}`}>
                      {evaluation.label}
                    </span>
                    {evaluation.sessionStatus === 'completed' && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                        {t('parentDashboard.home.completedStatus', 'مكتملة')}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
                        {evaluation.studentImage ? (
                          <img src={evaluation.studentImage} alt={evaluation.studentName} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span>{t('parent.ratings.student', 'الطالب')}: <strong className="text-slate-700 dark:text-slate-200">{evaluation.studentName}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
                        {evaluation.teacherImage ? (
                          <img src={evaluation.teacherImage} alt={evaluation.teacherName} className="w-full h-full object-cover" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span>{t('parent.ratings.teacher', 'المعلم')}: <strong className="text-slate-700 dark:text-slate-200">{evaluation.teacherName}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                  {evaluation.notes && (
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/80 flex items-start gap-3">
                      <MessageSquare className="w-4 h-4 text-[#0f7a6c] mt-0.5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          {t('parent.reports.teacherNotes', 'ملاحظات المعلم')}:
                        </span>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {evaluation.notes}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="shrink-0 flex md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-s border-slate-100 dark:border-slate-800 pt-4 md:pt-0 md:ps-6 gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className={star <= Math.round(evaluation.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'}
                      />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                      {evaluation.rating}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ 5</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {ratingsData.pagination.numberOfPages > 1 && (
            <ParentPagination
              currentPage={currentPage}
              totalPages={ratingsData.pagination.numberOfPages}
              totalItems={ratingsData.stats.count}
              startIndex={(currentPage - 1) * ratingsData.pagination.limit}
              endIndex={currentPage * ratingsData.pagination.limit}
              itemLabel={t('parent.ratings.evaluationLabel', 'تقييم')}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xs">
          <p className="text-slate-400 text-sm">
            {t('parent.ratings.empty', 'لا توجد تقييمات مسجلة حالياً.')}
          </p>
        </div>
      )}
    </motion.div>
  );
}
