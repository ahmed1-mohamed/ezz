import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  CheckSquare,
  Award,
  FileText,
  Clock,
  User,
  Play,
  Library,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="text-start flex-1">
        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={22} />
      </div>
    </motion.div>
  );
}

function NextSessionCard({ nextSession, isRtl }) {
  const { t } = useTranslation();

  if (!nextSession) {
    return (
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center py-8">
        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
          <Calendar size={22} />
        </div>
        <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
          {t('studentDashboard.home.nextSession.none', 'لا توجد حصص قادمة حالياً')}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {t('studentDashboard.home.nextSession.checkSchedule', 'يمكنك الاطلاع على جدولك الأسبوعي لمعرفة مواعيد الحصص')}
        </p>
      </motion.div>
    );
  }

  const title = nextSession.title || nextSession.name || t('studentDashboard.home.nextSession.sessionName', 'حصة دراسية');
  const teacherName = nextSession.teacher?.name || nextSession.teacherName || t('studentDashboard.home.nextSession.teacherName', 'معلم المادة');
  const time = nextSession.timeRange || nextSession.time || (nextSession.startTime ? new Date(nextSession.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-');
  const date = nextSession.formattedDate || nextSession.date || t('studentDashboard.home.nextSession.today', 'اليوم');
  const zoomUrl = nextSession.zoom?.joinUrl || nextSession.joinUrl || nextSession.meetingUrl;

  const handleJoin = () => {
    if (zoomUrl) {
      window.open(zoomUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">{t('studentDashboard.home.nextSession.title', 'الحصة القادمة')}</h2>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-red-500 font-medium">{t('studentDashboard.home.nextSession.badge', 'مباشر')}</span>
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4 text-start">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="text-center">
          <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center mx-auto mb-1.5">
            <Clock size={16} className="text-amber-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('studentDashboard.home.nextSession.time', 'الوقت')}</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{time}</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-1.5">
            <Calendar size={16} className="text-blue-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('studentDashboard.home.nextSession.date', 'التاريخ')}</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{date}</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mx-auto mb-1.5">
            <User size={16} className="text-emerald-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('studentDashboard.home.nextSession.teacher', 'المعلم')}</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate px-1">{teacherName}</p>
        </div>
      </div>
      <button
        onClick={handleJoin}
        disabled={!zoomUrl && !nextSession.canJoinNow}
        className="w-full flex items-center justify-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md shadow-emerald-200/50 dark:shadow-emerald-900/30 cursor-pointer disabled:opacity-60"
      >
        <Play size={18} />
        <span className="text-sm">{t('studentDashboard.home.nextSession.joinButton', 'الانضمام للحصة')}</span>
      </button>
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
      className="bg-white dark:bg-slate-800 text-center rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 cursor-pointer transition-shadow hover:shadow-md flex flex-col items-center justify-center"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${bgColor} relative`}>
        <Icon size={22} className={iconColor} />
        {badgeText && (
          <span className="absolute -top-1 -end-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {badgeText}
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {label}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
        {desc}
      </p>
    </motion.div>
  );
}

function AcademicProgressSection({ progressItems }) {
  const { t } = useTranslation();
  const list = Array.isArray(progressItems) && progressItems.length > 0
    ? progressItems
    : [
        { subjectName: t('studentDashboard.home.progress.quran', 'القرآن الكريم'), subText: t('studentDashboard.home.progress.tajweed', 'التجويد والتلاوة'), progress: 85, color: 'bg-emerald-500' },
        { subjectName: t('studentDashboard.home.progress.arabic', 'اللغة العربية'), subText: t('studentDashboard.home.progress.grammar', 'القواعد والنحو'), progress: 70, color: 'bg-blue-500' },
      ];

  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 text-start">
          {t('studentDashboard.home.progress.title', 'التقدم الأكاديمي')}
        </h2>
        <TrendingUp size={18} className="text-[#0f7a6c] dark:text-emerald-400" />
      </div>
      <div className="space-y-5">
        {list.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {item.subjectName || item.name}
              </span>
              <span className="text-sm font-semibold text-[#0f7a6c] dark:text-emerald-400">
                {item.progress ?? item.completionRate ?? 0}%
              </span>
            </div>
            {item.subText && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-start">
                {item.subText}
              </p>
            )}
            <div className="h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.progress ?? item.completionRate ?? 0}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                className={`h-full rounded-full ${item.color || 'bg-[#0f7a6c]'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function StudentHome() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadStats = async () => {
      try {
        setLoading(true);
        const data = await studentPortalApi.fetchDashboardStatistics();
        if (isMounted) {
          setStats(data);
        }
      } catch (err) {
        console.warn('Could not load student dashboard statistics, using fallbacks:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadStats();
    return () => { isMounted = false; };
  }, []);

  const studentName = (() => {
    if (!user) return '';
    if (typeof user.name === 'object' && user.name !== null) {
      return isRtl ? (user.name.ar || user.name.en || '') : (user.name.en || user.name.ar || '');
    }
    return user.name || '';
  })();

  const remainingSessions = stats?.remainingSessions ?? stats?.sessionsBalance ?? stats?.sessionsCount ?? 0;
  const attendanceRate = stats?.attendanceRate !== undefined ? `${stats.attendanceRate}%` : '0%';
  const completedAssignments = stats?.completedAssignments ?? stats?.submittedAssignments ?? stats?.assignmentsCount ?? 0;
  const averageRating = stats?.averageRating ? Number(stats.averageRating).toFixed(1) : '5.0';

  const statsList = [
    { label: t('studentDashboard.home.stats.remainingSessions', 'الحصص المتبقية'), value: remainingSessions, icon: Calendar, color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { label: t('studentDashboard.home.stats.attendanceRate', 'نسبة الحضور'), value: attendanceRate, icon: CheckSquare, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { label: t('studentDashboard.home.stats.completedAssignments', 'الواجبات المكتملة'), value: completedAssignments, icon: FileText, color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { label: t('studentDashboard.home.stats.averageRating', 'متوسط التقييم'), value: averageRating, icon: Award, color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
  ];

  const quickAccessList = [
    { label: t('studentDashboard.home.quickAccess.schedule', 'الجدول الدراسي'), desc: t('studentDashboard.home.quickAccess.scheduleDesc', 'مواعيد الحصص الأسبوعية'), icon: Calendar, path: '/dashboard/student/schedule', iconColor: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: t('studentDashboard.home.quickAccess.assignments', 'الواجبات'), desc: t('studentDashboard.home.quickAccess.assignmentsDesc', 'تسليم ومتابعة الواجبات'), icon: FileText, path: '/dashboard/student/assignments', iconColor: 'text-amber-500', bgColor: 'bg-amber-50 dark:bg-amber-900/20', badgeText: stats?.pendingAssignments ? String(stats.pendingAssignments) : null },
    { label: t('studentDashboard.home.quickAccess.achievements', 'الإنجازات'), desc: t('studentDashboard.home.quickAccess.achievementsDesc', 'الأوسمة والشهادات'), icon: Award, path: '/dashboard/student/achievements', iconColor: 'text-yellow-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { label: t('studentDashboard.home.quickAccess.materials', 'المواد التعليمية'), desc: t('studentDashboard.home.quickAccess.materialsDesc', 'ملفات وكتب المناهج'), icon: Library, path: '/dashboard/student/materials', iconColor: 'text-emerald-500', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20' },
  ];

  if (loading && !stats) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-5"
      >
        <motion.div variants={itemVariants} className="text-start">
          <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {t('studentDashboard.home.greeting', 'مرحباً بك')} {studentName ? `، ${studentName}` : ''}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {t('studentDashboard.home.greetingSubtitle', 'إليك نظرة عامة على نشاطك وجدولك التعليمي اليوم')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statsList.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        <NextSessionCard nextSession={stats?.nextSession} isRtl={isRtl} />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickAccessList.map((card, idx) => (
            <QuickAccessCard key={idx} {...card} />
          ))}
        </div>

        <AcademicProgressSection progressItems={stats?.progress || stats?.academicProgress} />
      </motion.div>
    </div>
  );
}
