import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import StatCard from '../components/StatCard';
import SubscriptionRenewal from '../components/SubscriptionRenewal';
import {
  Users,
  CheckCircle2,
  Calendar,
  Star,
  Clock,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import ChildDetailsView from '../components/child_details/ChildDetailsView';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ParentDashboard() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [dashboardStats, setDashboardStats] = useState(null);
  const [childrenList, setChildrenList] = useState([]);
  const [schedulesList, setSchedulesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedChildId = searchParams.get('childId');
  const setSelectedChildId = (id) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (id) newParams.set('childId', id);
      else newParams.delete('childId');
      return newParams;
    });
  };

  useEffect(() => {
    let isMounted = true;
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        const [statsRes, childrenRes, schedulesRes] = await Promise.all([
          parentApi.fetchDashboardStats(),
          parentApi.fetchChildren(),
          parentApi.fetchSchedules()
        ]);

        if (isMounted) {
          if (statsRes?.success && statsRes.data) {
            setDashboardStats(statsRes.data);
          }
          if (childrenRes?.success && Array.isArray(childrenRes.data)) {
            setChildrenList(childrenRes.data);
            if (childrenRes.data.length > 0) {
              const firstChild = childrenRes.data[0];
              setSelectedStudent((prev) => prev || (firstChild.id || firstChild._id || firstChild.student_id));
            }
          }
          if (schedulesRes?.success && Array.isArray(schedulesRes.data)) {
            setSchedulesList(schedulesRes.data);
          }
        }
      } catch (err) {
        console.error('Failed to load parent dashboard data:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadDashboardData();
    return () => { isMounted = false; };
  }, []);

  const stats = useMemo(() => {
    const totalKids = childrenList.length || dashboardStats?.childrenCount || dashboardStats?.totalChildren || 0;
    const attRate = dashboardStats?.attendanceRate ?? (childrenList.length > 0
      ? Math.round(childrenList.reduce((acc, c) => acc + (Number(c.attendanceRate) || 0), 0) / childrenList.length)
      : 0);
    const completedAssignments = dashboardStats?.completedAssignments || (dashboardStats?.pendingAssignments !== undefined ? `${dashboardStats.pendingAssignments} ${t('parentDashboard.home.pending', 'معلق')}` : '-');
    const avgRating = dashboardStats?.averageRating || (childrenList.length > 0
      ? (childrenList.reduce((acc, c) => acc + (Number(c.averageRating) || 0), 0) / childrenList.length || 0).toFixed(1)
      : '-');

    return [
      {
        id: 1,
        label: t('parentDashboard.home.totalChildren', 'إجمالي الأبناء'),
        value: String(totalKids),
        icon: Users,
        color: 'text-[#0f7a6c]',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
      },
      {
        id: 2,
        label: t('parentDashboard.home.attendanceRate', 'نسبة الحضور'),
        value: typeof attRate === 'number' ? `${attRate}%` : String(attRate),
        subtext: t('parentDashboard.home.attendanceSubtext', 'معدل عام'),
        subtextColor: 'text-emerald-500',
        icon: CheckCircle2,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
      },
      {
        id: 3,
        label: t('parentDashboard.home.completedAssignments', 'الواجبات المنجزة'),
        value: String(completedAssignments),
        icon: Calendar,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
      },
      {
        id: 4,
        label: t('parentDashboard.home.averageRating', 'متوسط التقييم'),
        value: String(avgRating),
        icon: Star,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
      },
    ];
  }, [dashboardStats, childrenList, t]);

  const formattedChildren = useMemo(() => {
    return childrenList.map((child, idx) => {
      const id = child.id || child._id || child.student_id || `child-${idx}`;
      const name = typeof child.name === 'object' && child.name !== null
        ? (isRtl ? (child.name.ar || child.name.en) : (child.name.en || child.name.ar))
        : (child.name || '-');
      const subject = typeof child.subject === 'object' && child.subject !== null
        ? (isRtl ? child.subject.ar : child.subject.en)
        : (child.subject || child.level || child.levelName || '');
      const totalClasses = Number(child.totalClasses || child.sessionsTotal || child.sessionsBalance || 12);
      const usedClasses = Number(child.usedClasses || child.sessionsUsed || 0);
      const remainingClasses = child.remainingClasses !== undefined
        ? Number(child.remainingClasses)
        : Math.max(0, totalClasses - usedClasses);

      return {
        ...child,
        id,
        name,
        subject,
        remainingClasses,
        totalClasses: totalClasses > 0 ? totalClasses : 1,
        statusColor: remainingClasses > 5 ? 'bg-emerald-500' : remainingClasses > 0 ? 'bg-yellow-500' : 'bg-red-500'
      };
    });
  }, [childrenList, isRtl]);

  const upcomingClasses = useMemo(() => {
    return schedulesList.slice(0, 5).map((item, idx) => {
      const title = item.title || item.className || item.subject || t('parentDashboard.home.classesData.title1', 'حصة دراسية');
      const student = item.studentName || item.student || '-';
      const teacher = item.teacherName || item.teacher || '-';
      const time = item.time || (item.startTime ? `${item.startTime} - ${item.endTime || ''}` : `${t('parentDashboard.home.classesData.today', 'اليوم')} - 09:00 AM`);
      const isLive = item.isLive || item.status === 'live' || item.status === 'ongoing';

      return {
        id: item.id || item._id || `cls-${idx}`,
        title,
        student,
        teacher,
        time,
        isLive,
        actionType: isLive ? 'join' : 'apologize',
        timer: item.timer || null
      };
    });
  }, [schedulesList, t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  if (selectedChildId) {
    return (
      <div className="p-4 md:p-8 max-w-7xl mx-auto font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
        <ChildDetailsView
          childId={selectedChildId}
          onBack={() => setSelectedChildId(null)}
        />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 font-sans"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div variants={itemVariants} key={stat.id} className="h-full">
            <StatCard {...stat} layout="dashboard" />
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.home.trackChildren', 'متابعة الأبناء')}
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map(n => <div key={n} className="h-44 bg-white dark:bg-slate-800 rounded-2xl animate-pulse" />)}
          </div>
        ) : formattedChildren.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-700">
            <p className="text-slate-400 text-sm">{t('parentDashboard.home.noChildren', 'لا يوجد أبناء مسجلين حالياً')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formattedChildren.map((child) => (
              <div key={child.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md hover:border-slate-200 dark:hover:border-slate-600">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full shrink-0 ${child.statusColor}`} />
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{child.name}</h3>
                      {child.subject && <p className="text-sm text-slate-500 dark:text-slate-400">{child.subject}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-slate-500 dark:text-slate-400">{t('parentDashboard.home.remainingClasses', 'الحصص المتبقية')}</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      <span className="text-slate-900 dark:text-white text-base">{child.remainingClasses}</span> / {child.totalClasses}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden flex" dir="ltr">
                    <div
                      className={`${child.statusColor} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${Math.min(100, (child.remainingClasses / child.totalClasses) * 100)}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedChildId(child.id)}
                  className="block text-center w-full py-3 bg-emerald-50 text-[#0f7a6c] hover:bg-[#0f7a6c] hover:text-white dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-[#0f7a6c] dark:hover:text-white rounded-xl font-bold transition-colors"
                >
                  {t('parentDashboard.home.showDetails', 'عرض التفاصيل')}
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {upcomingClasses.length > 0 && (
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {t('parentDashboard.home.upcomingClasses', 'الحصص القادمة')}
          </h2>

          <div className="space-y-4">
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-md">
                <div className="flex flex-col flex-grow w-full md:w-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{cls.title}</h3>
                    {cls.isLive && (
                      <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-medium animate-pulse shrink-0">
                        {t('parentDashboard.home.liveNow', 'مباشر الآن')}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 space-y-1.5">
                    <p className="flex gap-2"><span>{t('parentDashboard.home.student', 'الطالب')}:</span> <span className="text-slate-700 dark:text-slate-300 font-medium">{cls.student}</span></p>
                    <p className="flex gap-2"><span>{t('parentDashboard.home.teacher', 'المعلم')}:</span> <span className="text-slate-700 dark:text-slate-300 font-medium">{cls.teacher}</span></p>
                    <p className="flex items-center gap-1.5 mt-1 text-slate-600 dark:text-slate-400">
                      <Clock size={14} className="shrink-0" />
                      <span>{cls.time}</span>
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-auto shrink-0 flex flex-col items-center mt-2 md:mt-0">
                  {cls.actionType === 'join' ? (
                    <button className="w-full md:w-48 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                      {t('parentDashboard.home.liveStreamNow', 'انضم للبث المباشر')}
                    </button>
                  ) : (
                    <div className="flex flex-col items-center w-full md:w-48 space-y-1.5">
                      <button className="w-full py-2.5 border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors text-sm">
                        {t('parentDashboard.home.cancelClass', 'إلغاء الحصة')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {formattedChildren.length > 0 && (
        <motion.div variants={itemVariants} className="space-y-4 pb-10">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {t('parentDashboard.home.subscriptionSummary', 'ملخص الاشتراك')}
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="w-full lg:w-1/3">
                <div className="w-full max-w-xs space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block">
                    {t('parentDashboard.home.selectStudent', 'اختر الابن')}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedStudent}
                      onChange={(e) => setSelectedStudent(e.target.value)}
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl p-3 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer font-medium"
                    >
                      {formattedChildren.map((child) => (
                        <option key={child.id} value={child.id}>
                          {child.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute top-1/2 -translate-y-1/2 end-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-center sm:text-start flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('parentDashboard.home.currentPackage', 'الباقة الحالية')}</p>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-100">
                    {formattedChildren.find(c => c.id === selectedStudent)?.packageName || t('parentDashboard.home.activePackage', 'باقة نشطة')}
                  </p>
                </div>

                <div className="h-px w-full sm:h-12 sm:w-px bg-slate-200 dark:bg-slate-700 hidden sm:block mx-2" />

                <div className="text-center sm:text-start flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('parentDashboard.home.totalRemainingClasses', 'الحصص المتبقية')}</p>
                  <p className="font-bold text-slate-800 dark:text-slate-100">
                    <span className="text-2xl text-[#0f7a6c] dark:text-emerald-400 me-1">
                      {formattedChildren.find(c => c.id === selectedStudent)?.remainingClasses ?? 0}
                    </span>
                    <span className="text-base">{t('parentDashboard.home.classes', 'حصة')}</span>
                  </p>
                </div>

                <div className="w-full sm:w-auto mt-4 sm:mt-0 shrink-0">
                  <button
                    onClick={() => setSelectedChildId(selectedStudent)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                  >
                    {t('parentDashboard.home.renewSubscription', 'تجديد الاشتراك')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <SubscriptionRenewal className="pb-10" />
      </motion.div>
    </motion.div>
  );
}