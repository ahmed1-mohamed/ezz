import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  CheckSquare,
  Award,
  FileText,
  Clock,
  User,
  Play,
  Library,
  Users,
  Star,
  Trophy,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 flex flex-col justify-between gap-3 shadow-xs border border-slate-100 dark:border-slate-800 text-start"
    >
      <div className="flex items-center justify-between">
        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${color}`}>
          <Icon size={20} />
        </div>
      </div>
      <div>
        <p className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white" dir="ltr">
          {value}
        </p>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

function NextSessionCard({ nextSession, isRtl }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!nextSession) {
    return (
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xs border border-slate-100 dark:border-slate-800 text-center"
      >
        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-3.5">
          <Calendar size={26} />
        </div>
        <h3 className="text-base font-bold text-slate-800 dark:text-white">
          {t('studentDashboard.home.nextSession.none', 'لا توجد حصص قادمة حالياً')}
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 max-w-sm mx-auto">
          {t('studentDashboard.home.nextSession.checkSchedule', 'يمكنك الاطلاع على جدولك الأسبوعي لمعرفة مواعيد الحصص')}
        </p>
      </motion.div>
    );
  }

  const sessionTitle = nextSession.title || (nextSession.sessionNumber ? `${t('studentDashboard.home.nextSession.sessionNum', 'الحصة رقم')} ${nextSession.sessionNumber}` : t('studentDashboard.home.nextSession.sessionName', 'حصة دراسية'));
  const groupName = nextSession.group || '';
  const teacherName = typeof nextSession.teacher === 'string'
    ? nextSession.teacher
    : (nextSession.teacher?.name || nextSession.teacherName || t('studentDashboard.home.nextSession.teacherFallback', 'معلم المادة'));

  const dayStr = nextSession.day || '';
  const dateStr = nextSession.date || nextSession.formattedDate || '';
  const displayDate = dayStr && dateStr ? `${dayStr}، ${dateStr}` : (dateStr || dayStr || t('studentDashboard.home.nextSession.today', 'اليوم'));

  const timeStr = nextSession.timeRange || (nextSession.startTime && nextSession.endTime ? `${nextSession.startTime} - ${nextSession.endTime}` : (nextSession.startTime || '-'));
  const durationStr = nextSession.durationTime ? `${nextSession.durationTime} ${t('common.minutes', 'دقيقة')}` : '';

  const canJoinNow = Boolean(nextSession.canJoinNow);
  const statusLabel = nextSession.status || (canJoinNow ? t('studentDashboard.home.nextSession.liveNow', 'جارية الآن') : t('studentDashboard.home.nextSession.statusScheduled', 'مجدولة'));
  const zoomUrl = nextSession.zoom?.joinUrl || nextSession.joinUrl || nextSession.meetingUrl;

  const handleJoin = () => {
    if (zoomUrl) {
      window.open(zoomUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    navigate('/dashboard/student/live', { state: { session: nextSession } });
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 text-start"
    >
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Calendar size={18} />
          </div>
          <h2 className="text-base font-bold text-slate-800 dark:text-white">
            {t('studentDashboard.home.nextSession.title', 'الحصة القادمة')}
          </h2>
        </div>

        {canJoinNow ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t('studentDashboard.home.nextSession.liveNow', 'جارية الآن')}</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800">
            <span>{statusLabel}</span>
          </span>
        )}
      </div>

      <div className="space-y-4">
        {groupName && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-100 dark:border-slate-800">
            <Users size={14} className="text-[#00594C] dark:text-emerald-400" />
            <span>{groupName}</span>
          </div>
        )}

        <h3 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
          {sessionTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <User size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                {t('studentDashboard.home.nextSession.teacher', 'المعلم')}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                {teacherName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Calendar size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                {t('studentDashboard.home.nextSession.date', 'التاريخ')}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                {displayDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                {t('studentDashboard.home.nextSession.time', 'الوقت')}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                {timeStr} {durationStr && <span className="text-xs text-slate-400 font-normal">({durationStr})</span>}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          {canJoinNow ? (
            <button
              type="button"
              onClick={handleJoin}
              className="w-full flex items-center justify-center gap-2 bg-[#00594C] hover:bg-[#00473d] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md shadow-[#00594C]/20 cursor-pointer"
            >
              <Play size={18} />
              <span>{t('studentDashboard.home.nextSession.joinNow', 'الانضمام للحصة الآن')}</span>
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 font-bold py-3.5 px-6 rounded-2xl cursor-not-allowed select-none"
            >
              <Clock size={18} />
              <span>{t('studentDashboard.home.nextSession.notStartedYet', 'الحصة لم تبدأ بعد (مجدولة)')}</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function QuickAccessCard({ label, desc, icon: Icon, iconColor, bgColor, badgeText, path }) {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -2 }}
      onClick={() => path && navigate(path)}
      className="bg-white dark:bg-slate-900 text-center rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 cursor-pointer transition-shadow hover:shadow-md flex flex-col items-center justify-center"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${bgColor} relative`}>
        <Icon size={22} className={iconColor} />
        {badgeText && (
          <span className="absolute -top-1 -end-1 min-w-[20px] h-5 px-1 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
            {badgeText}
          </span>
        )}
      </div>
      <p className="text-sm font-bold text-slate-800 dark:text-white">
        {label}
      </p>
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
        {desc}
      </p>
    </motion.div>
  );
}

export default function StudentHome() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadDashboard = async () => {
      try {
        setLoading(true);
        const res = await studentPortalApi.fetchDashboardStatistics();
        if (isMounted) {
          const payload = res?.data || res || {};
          setDashboardData(payload);
        }
      } catch (err) {
        console.warn('Could not load student dashboard statistics, using fallbacks:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadDashboard();
    return () => { isMounted = false; };
  }, []);

  const studentName = useMemo(() => {
    if (!user) return '';
    const resolveName = (val) => {
      if (!val) return '';
      if (typeof val === 'string') return val;
      if (typeof val === 'object') return (isRtl ? val.ar || val.en : val.en || val.ar) || '';
      return String(val);
    };
    return (
      resolveName(user.name) ||
      resolveName(user.nameAr) ||
      resolveName(user.nameEn) ||
      resolveName(user.fullName) ||
      resolveName(user.student?.name) ||
      ''
    );
  }, [user, isRtl]);

  const rawStats = dashboardData?.statistics || dashboardData || {};
  const nextSession = dashboardData?.nextSession || null;

  const remainingSessions = rawStats?.remainingSessions ?? rawStats?.sessionsBalance ?? 0;
  const attendanceRate = rawStats?.attendanceRate !== undefined ? `${rawStats.attendanceRate}%` : '0%';
  const averageRating = rawStats?.averageRating ? Number(rawStats.averageRating).toFixed(1) : '5.0';
  const pendingHomeworks = rawStats?.pendingHomeworks ?? rawStats?.pendingAssignments ?? 0;
  const rewardsCount = rawStats?.rewardsCount ?? 0;
  const totalLearningHours = rawStats?.totalLearningHours !== undefined ? `${rawStats.totalLearningHours}` : '0';

  const statsList = [
    {
      label: t('studentDashboard.home.stats.remainingSessions', 'الحصص المتبقية'),
      value: remainingSessions,
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400',
    },
    {
      label: t('studentDashboard.home.stats.attendanceRate', 'نسبة الحضور'),
      value: attendanceRate,
      icon: CheckSquare,
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
    },
    {
      label: t('studentDashboard.home.stats.averageRating', 'متوسط التقييم'),
      value: averageRating,
      icon: Star,
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
    },
    {
      label: t('studentDashboard.home.stats.pendingHomeworks', 'واجبات قيد التسليم'),
      value: pendingHomeworks,
      icon: FileText,
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400',
    },
    {
      label: t('studentDashboard.home.stats.rewardsCount', 'المكافآت والجوائز'),
      value: rewardsCount,
      icon: Trophy,
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400',
    },
    {
      label: t('studentDashboard.home.stats.totalLearningHours', 'ساعات التعلّم'),
      value: totalLearningHours,
      icon: Clock,
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400',
    },
  ];

  const quickAccessList = [
    {
      label: t('studentDashboard.home.quickAccess.schedule', 'الجدول الدراسي'),
      desc: t('studentDashboard.home.quickAccess.scheduleDesc', 'مواعيد الحصص الأسبوعية'),
      icon: Calendar,
      path: '/dashboard/student/schedule',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      label: t('studentDashboard.home.quickAccess.assignments', 'الواجبات'),
      desc: t('studentDashboard.home.quickAccess.assignmentsDesc', 'تسليم ومتابعة الواجبات'),
      icon: FileText,
      path: '/dashboard/student/assignments',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      badgeText: pendingHomeworks > 0 ? String(pendingHomeworks) : null,
    },
    {
      label: t('studentDashboard.home.quickAccess.achievements', 'الإنجازات'),
      desc: t('studentDashboard.home.quickAccess.achievementsDesc', 'الأوسمة والشهادات'),
      icon: Award,
      path: '/dashboard/student/achievements',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      badgeText: rewardsCount > 0 ? String(rewardsCount) : null,
    },
    {
      label: t('studentDashboard.home.quickAccess.materials', 'المواد التعليمية'),
      desc: t('studentDashboard.home.quickAccess.materialsDesc', 'ملفات وكتب المناهج'),
      icon: Library,
      path: '/dashboard/student/materials',
      iconColor: 'text-[#00594C] dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    },
  ];

  if (loading && !dashboardData) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 text-start" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-6"
      >
        <motion.div variants={itemVariants} className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
            {t('studentDashboard.home.greeting', 'مرحباً بعودتك')}{studentName ? `، ${studentName}` : ''}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-semibold mt-1">
            {t('studentDashboard.home.greetingSubtitle', 'إليك نظرة عامة على نشاطك وجدولك التعليمي اليوم')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {statsList.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        <NextSessionCard nextSession={nextSession} isRtl={isRtl} />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {quickAccessList.map((card, idx) => (
            <QuickAccessCard key={idx} {...card} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
