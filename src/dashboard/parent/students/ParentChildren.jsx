import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BookOpen,
  TrendingUp,
  Award,
  Star,
  Calendar,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { parentApi } from '@/shared/services/api/parentApi';
import ChildHeroCard from './components/children/ChildHeroCard';
import ChildGroupsList from './components/children/ChildGroupsList';
import ChildSessionsBalanceCard from './components/children/ChildSessionsBalanceCard';
import ChildLastSubscriptionCard from './components/children/ChildLastSubscriptionCard';
import ChildHomeworkStatsCard from './components/children/ChildHomeworkStatsCard';
import ChildRewardsSection from './components/children/ChildRewardsSection';
import ChildTransactionsLog from './components/children/ChildTransactionsLog';

export default function ParentChildren() {
  const { studentId: paramStudentId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryStudentId = searchParams.get('id') || searchParams.get('studentId') || '';
  const initialStudentId = paramStudentId || queryStudentId || '';
  const [activeStudentId, setActiveStudentId] = useState(initialStudentId);
  const [allChildren, setAllChildren] = useState([]);
  const [currentChild, setCurrentChild] = useState(null);
  const [childEvaluations, setChildEvaluations] = useState([]);
  const [isEvaluationsLoading, setIsEvaluationsLoading] = useState(false);
  const handleSelectChild = (newId) => {
    setActiveStudentId(newId);
    if (paramStudentId) {
      navigate(`/dashboard/parent/children/${newId}`);
    } else {
      setSearchParams({ id: newId });
    }
  };
  const handleBack = () => {
    navigate('/dashboard/parent/children');
  };
  useEffect(() => {
    let isMounted = true;
    const loadAllChildren = async () => {
      try {
        const res = await parentApi.fetchStudents();
        if (isMounted && res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setAllChildren(res.data);
          const firstId = res.data[0]?.student_id || res.data[0]?.id || res.data[0]?.user_id;
          setActiveStudentId((current) => current || firstId);
        }
      } catch (err) {
        console.error('Failed to load all children list:', err);
      }
    };
    loadAllChildren();
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    if (!activeStudentId) return;
    let isMounted = true;
    const loadChildData = async () => {
      try {
        const res = await parentApi.fetchStudentById(activeStudentId);
        if (isMounted && res?.success && res.data) {
          setCurrentChild(res.data);
        } else if (isMounted && allChildren.length > 0) {
          const matched = allChildren.find((c) => String(c.student_id) === String(activeStudentId) || String(c.id) === String(activeStudentId) || String(c.user_id) === String(activeStudentId));
          if (matched) setCurrentChild(matched);
        }
      } catch (err) {
        console.error('Failed to load child by id:', err);
      }
    };
    loadChildData();
    return () => {
      isMounted = false;
    };
  }, [activeStudentId, allChildren]);
  useEffect(() => {
    if (!activeStudentId) return;
    let isMounted = true;
    const loadEvaluations = async () => {
      setIsEvaluationsLoading(true);
      try {
        const res = await parentApi.fetchStudentEvaluations({ student: activeStudentId });
        if (isMounted && res?.success && Array.isArray(res.data)) {
          setChildEvaluations(res.data);
        }
      } catch (err) {
        console.error('Failed to load child evaluations:', err);
      } finally {
        if (isMounted) setIsEvaluationsLoading(false);
      }
    };
    loadEvaluations();
    return () => {
      isMounted = false;
    };
  }, [activeStudentId]);
  const sessionsBalance = currentChild?.sessionsBalance || {
    total: currentChild?.totalClasses || 1,
    used: currentChild?.usedClasses || 0,
    remaining: currentChild?.remainingClasses || 0,
  };
  const attendanceRate = Number(currentChild?.attendanceRate ?? 0);
  const averageRating = Number(currentChild?.averageRating ?? 0).toFixed(1);
  const totalEvaluations = Number(currentChild?.totalEvaluations ?? 0);
  const groupsList = Array.isArray(currentChild?.groups) ? currentChild.groups : [];
  return (
    <div
      className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-8 font-sans min-h-screen"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <ChildHeroCard
        child={currentChild}
        allChildren={allChildren}
        onSelectChild={handleSelectChild}
        onBack={handleBack}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-1">
              {t('parentDashboard.childrenDetails.totalClasses', 'رصيد الحصص')}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-800 dark:text-white">
                {sessionsBalance.remaining}
              </span>
              <span className="text-xs text-slate-400">
                / {sessionsBalance.total} {t('parent.childrenList.remaining', 'متبقية')}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-1">
              {t('parentDashboard.childrenDetails.attendanceRate', 'معدل الحضور')}
            </p>
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl font-black ${
                attendanceRate >= 80 ? 'text-emerald-600 dark:text-emerald-400' : attendanceRate >= 50 ? 'text-amber-500' : 'text-rose-500'
              }`}>
                {attendanceRate}%
              </span>
              <span className="text-[10px] text-slate-400 font-bold">
                {attendanceRate >= 80 ? (isRtl ? 'ممتاز' : 'Excellent') : (isRtl ? 'مستقر' : 'Normal')}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-1">
              {t('parentDashboard.childrenDetails.averageRating', 'متوسط التقييم')}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-amber-500">
                {averageRating}
              </span>
              <span className="text-xs text-slate-400">/ 5</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
            <Star className="w-6 h-6 fill-amber-500" />
          </div>
        </div>
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-1">
              {t('parent.childrenList.evaluationsCount', 'إجمالي التقييمات')}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-800 dark:text-white">
                {totalEvaluations}
              </span>
              <span className="text-xs text-slate-400">
                {t('parent.childrenList.classes', 'تقييم')}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
        </div>
      </div>
      {currentChild?.lastSubscription && (
        <ChildLastSubscriptionCard lastSubscription={currentChild.lastSubscription} />
      )}
      {(currentChild?.totalHomework !== undefined || currentChild?.completedHomework !== undefined) && (
        <ChildHomeworkStatsCard
          totalHomework={currentChild.totalHomework}
          completedHomework={currentChild.completedHomework}
          pendingHomework={currentChild.pendingHomework}
          studentId={activeStudentId}
        />
      )}
      <ChildGroupsList groups={groupsList} />
      <ChildSessionsBalanceCard sessionsBalance={sessionsBalance} />
      {Array.isArray(currentChild?.rewards) && currentChild.rewards.length > 0 && (
        <ChildRewardsSection rewards={currentChild.rewards} />
      )}
      {Array.isArray(currentChild?.sessionTransactions) && currentChild.sessionTransactions.length > 0 && (
        <ChildTransactionsLog transactions={currentChild.sessionTransactions} />
      )}
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>{t('parent.childrenList.evaluationsTitle', 'تقييمات المعلمين الأخيرة للابن')}</span>
          </h2>
          <button
            type="button"
            onClick={() => navigate(`/dashboard/parent/ratings?studentId=${activeStudentId}`)}
            className="text-xs text-[#0f7a6c] dark:text-emerald-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>{t('common.viewAll', 'عرض الكل')}</span>
            {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
        </div>
        {isEvaluationsLoading ? (
          <div className="space-y-3">
            {[1, 2].map((n) => (
              <div key={n} className="h-20 rounded-2xl bg-slate-50 dark:bg-slate-800 animate-pulse" />
            ))}
          </div>
        ) : childEvaluations.length === 0 ? (
          <div className="py-8 text-center text-slate-400 dark:text-slate-500 text-sm">
            {t('parent.childrenList.noEvaluations', 'لا توجد تقييمات مسجلة حتى الآن لهذا الابن')}
          </div>
        ) : (
          <div className="space-y-3">
            {childEvaluations.slice(0, 5).map((evalItem, eIdx) => {
              const evalRating = Number(evalItem?.rating ?? evalItem?.score ?? 5);
              const teacherRaw = evalItem?.teacher?.name || evalItem?.teacherName || evalItem?.teacher;
              const teacherName = typeof teacherRaw === 'object' && teacherRaw !== null
                ? (teacherRaw.name || teacherRaw.fullName || (isRtl ? 'المعلم' : 'Teacher'))
                : String(teacherRaw || (isRtl ? 'المعلم' : 'Teacher'));
              const evalDate = evalItem?.createdAt
                ? new Date(evalItem.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                : String(evalItem?.date || '-');
              const rawNotes = evalItem?.notes || evalItem?.feedback || evalItem?.title || '';
              const safeNotes = typeof rawNotes === 'object' && rawNotes !== null
                ? (rawNotes.ar || rawNotes.en || rawNotes.name || '')
                : String(rawNotes || '');
              return (
                <div
                  key={evalItem?.id || eIdx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/30 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-800 dark:text-white">
                        {teacherName}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {evalDate}
                      </span>
                    </div>
                    {safeNotes && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {safeNotes}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 shrink-0 self-start sm:self-auto">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= evalRating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-4 text-center sm:text-start">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-800 dark:text-white">
              {t('parent.childrenList.attendanceTitle', 'تقرير الحضور والغياب')}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {t('parent.childrenList.viewFullAttendance', 'يمكنك الاطلاع على الجدول الكامل لأيام الحضور والغياب الشهرية')}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/dashboard/parent/attendance?studentId=${activeStudentId}`)}
          className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
        >
          <span>{t('parent.childrenList.attendanceRecord', 'عرض سجل الحضور الكامل')}</span>
        </button>
      </div>
    </div>
  );
}
