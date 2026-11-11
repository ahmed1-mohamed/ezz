import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Calendar, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
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
  const [rawPagination, setRawPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 10;
  const fetchEvaluations = async (currentPage) => {
    try {
      setLoading(true);
      const res = await studentPortalApi.fetchEvaluations({ page: currentPage, limit });
      const payload = res?.data?.data ? res.data : (res || {});
      const items = Array.isArray(payload.data) ? payload.data : (Array.isArray(payload) ? payload : (Array.isArray(res?.data) ? res.data : []));
      setEvaluations(items);
      const pag = payload.pagination || res?.pagination || {};
      setRawPagination(pag);
    } catch (err) {
      console.warn('Could not load student evaluations:', err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvaluations(page);
  }, [page]);
  const totalItems = rawPagination.totalItems ?? rawPagination.totalCount ?? rawPagination.total ?? evaluations.length;
  const totalPages = Math.max(1, rawPagination.totalPages ?? rawPagination.numberOfPages ?? rawPagination.pages ?? Math.ceil(totalItems / limit));
  const avgRating = useMemo(() => {
    if (!evaluations.length) return '5.0';
    const sum = evaluations.reduce((acc, curr) => acc + (Number(curr.rating) || 0), 0);
    return (sum / evaluations.length).toFixed(1);
  }, [evaluations]);
  const startIndex = totalItems > 0 ? (page - 1) * limit + 1 : 0;
  const endIndex = totalItems > 0 ? Math.min(page * limit, totalItems) : 0;
  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-950/40 rounded-2xl flex items-center justify-center text-amber-500 shrink-0">
              <Star size={28} className="fill-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
                {t('studentDashboard.evaluations.title', 'سجل التقييمات')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-semibold mt-1">
                {t('studentDashboard.evaluations.subtitle', 'تقييمات وملاحظات المعلمين على أدائك في الحصص الدراسية')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-center shadow-xs">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">{t('studentDashboard.evaluations.avgRating', 'متوسط التقييم')}</p>
              <div className="flex items-center gap-1.5 justify-center mt-1">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="text-xl font-black text-slate-800 dark:text-white">{avgRating}</span>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-center shadow-xs">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">{t('studentDashboard.evaluations.totalEvaluations', 'إجمالي التقييمات')}</p>
              <p className="text-xl font-black text-[#00695C] dark:text-emerald-400 mt-1">{totalItems}</p>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Spinner />
          </div>
        ) : evaluations.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-700 space-y-3 shadow-xs">
            <Award size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
              {t('studentDashboard.evaluations.empty', 'لا توجد تقييمات مسجلة حتى الآن')}
            </h3>
          </div>
        ) : (
          <div className="space-y-4">
            {evaluations.map((item, idx) => {
              const teacher = item.teacherData || (typeof item.teacher === 'object' ? item.teacher : { name: item.teacher }) || {};
              const session = item.sessionData || (typeof item.session === 'object' ? item.session : { title: item.title }) || {};
              const formattedDate = item.createdAt
                ? new Date(item.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : (item.date || session.date || '-');
              return (
                <motion.div
                  key={item.id || item._id || idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-700 text-start space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-3">
                      {teacher.image ? (
                        <img
                          src={teacher.image}
                          alt=""
                          className="w-11 h-11 rounded-2xl object-cover shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-2xl bg-[#00695C]/10 dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400 font-bold flex items-center justify-center text-sm shrink-0">
                          {teacher.name ? teacher.name.trim().charAt(0) : 'م'}
                        </div>
                      )}
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                          {teacher.name || t('studentDashboard.evaluations.teacher', 'المعلم')}
                        </h3>
                        {session.title && (
                          <p className="text-xs text-[#00695C] dark:text-emerald-400 font-semibold mt-0.5">
                            {session.title}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <StarDisplay rating={item.rating} />
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800" dir="ltr">
                        <Calendar size={13} />
                        <span>{formattedDate}</span>
                      </div>
                    </div>
                  </div>
                  {item.notes && (
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                      <MessageSquareQuote size={20} className="text-[#00695C] dark:text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {item.notes}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
            {totalPages > 1 && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <p className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500">
                  {isRtl ? (
                    <>عرض <span className="text-slate-700 dark:text-slate-200 font-bold">{startIndex}</span> - <span className="text-slate-700 dark:text-slate-200 font-bold">{endIndex}</span> من أصل <span className="text-slate-700 dark:text-slate-200 font-bold">{totalItems}</span> تقييم</>
                  ) : (
                    <>Showing <span className="text-slate-700 dark:text-slate-200 font-bold">{startIndex}</span> - <span className="text-slate-700 dark:text-slate-200 font-bold">{endIndex}</span> of <span className="text-slate-700 dark:text-slate-200 font-bold">{totalItems}</span> evaluations</>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-label="Previous Page"
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <ArrowPrev size={16} />
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((pNum) => pNum === 1 || pNum === totalPages || Math.abs(pNum - page) <= 1)
                      .map((pNum, index, arr) => {
                        const prevNum = arr[index - 1];
                        const showEllipsis = prevNum && pNum - prevNum > 1;
                        const isActive = page === pNum;
                        return (
                          <div key={pNum} className="flex items-center gap-1">
                            {showEllipsis && (
                              <span className="px-2 text-xs font-bold text-slate-400">...</span>
                            )}
                            <button
                              type="button"
                              onClick={() => setPage(pNum)}
                              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#00695C] text-white shadow-xs'
                                  : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {pNum}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                  <button
                    type="button"
                    disabled={page >= totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    aria-label="Next Page"
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <ArrowNext size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
