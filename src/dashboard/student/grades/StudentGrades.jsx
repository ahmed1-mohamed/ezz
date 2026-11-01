import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, User, Calendar, BookOpen, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

function StarDisplay({ rating, size = 18 }) {
  const numericRating = Number(rating) || 0;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(numericRating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}
        />
      ))}
    </div>
  );
}

export default function StudentGrades() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ArrowPrev = isRtl ? ChevronRight : ChevronLeft;
  const ArrowNext = isRtl ? ChevronLeft : ChevronRight;

  const [loading, setLoading] = useState(true);
  const [evaluations, setEvaluations] = useState([]);
  const [pagination, setPagination] = useState({ currentPage: 1, limit: 10, numberOfPages: 1, totalCount: 0 });
  const [page, setPage] = useState(1);

  const fetchEvaluations = async (currentPage) => {
    try {
      setLoading(true);
      const res = await studentPortalApi.fetchEvaluations({ page: currentPage, limit: 10 });
      const items = res?.data || [];
      setEvaluations(Array.isArray(items) ? items : []);
      if (res?.pagination) {
        setPagination(res.pagination);
      }
    } catch (err) {
      console.warn('Could not load student evaluations:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvaluations(page);
  }, [page]);

  const totalCount = pagination.totalCount || evaluations.length;
  const avgRating = evaluations.length > 0
    ? (evaluations.reduce((acc, curr) => acc + (Number(curr.rating) || 0), 0) / evaluations.length).toFixed(1)
    : '5.0';

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-500">
              <Star size={28} className="fill-amber-400" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {t('studentDashboard.evaluations.title', 'سجل التقييمات')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t('studentDashboard.evaluations.subtitle', 'تقييمات وملاحظات المعلمين على أدائك في الحصص الدراسية')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-center">
              <p className="text-xs text-slate-400">{t('studentDashboard.evaluations.avgRating', 'متوسط التقييم')}</p>
              <div className="flex items-center gap-1.5 justify-center mt-1">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="text-xl font-black text-slate-800 dark:text-slate-100">{avgRating}</span>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-center">
              <p className="text-xs text-slate-400">{t('studentDashboard.evaluations.totalEvaluations', 'إجمالي التقييمات')}</p>
              <p className="text-xl font-black text-[#0f7a6c] dark:text-emerald-400 mt-1">{totalCount}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Spinner />
          </div>
        ) : evaluations.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-700 space-y-3">
            <Award size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
              {t('studentDashboard.evaluations.empty', 'لا توجد تقييمات مسجلة حتى الآن')}
            </h3>
          </div>
        ) : (
          <div className="space-y-4">
            {evaluations.map((item) => {
              const teacher = item.teacherData || {};
              const session = item.sessionData || {};
              const formattedDate = item.createdAt
                ? new Date(item.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : session.date || '-';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-start space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-3">
                      {teacher.image ? (
                        <img
                          src={teacher.image}
                          alt=""
                          className="w-11 h-11 rounded-2xl object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-[#0f7a6c] dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
                          {teacher.name?.trim()?.charAt(0) || 'م'}
                        </div>
                      )}
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          {teacher.name || t('studentDashboard.evaluations.teacher', 'المعلم')}
                        </h3>
                        {session.title && (
                          <p className="text-xs text-[#0f7a6c] dark:text-emerald-400 font-semibold mt-0.5">
                            {session.title}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <StarDisplay rating={item.rating} />
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl" dir="ltr">
                        <Calendar size={13} />
                        <span>{formattedDate}</span>
                      </div>
                    </div>
                  </div>

                  {item.notes && (
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                      <MessageSquareQuote size={20} className="text-[#0f7a6c] dark:text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {item.notes}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Pagination */}
            {pagination.numberOfPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-40 cursor-pointer"
                >
                  <ArrowPrev size={16} />
                </button>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 px-4">
                  {page} / {pagination.numberOfPages}
                </span>
                <button
                  disabled={page >= pagination.numberOfPages}
                  onClick={() => setPage((p) => Math.min(pagination.numberOfPages, p + 1))}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-40 cursor-pointer"
                >
                  <ArrowNext size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
