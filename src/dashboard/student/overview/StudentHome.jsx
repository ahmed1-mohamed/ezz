import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Calendar,
  CheckSquare,
  Award,
  FileText,
  Video,
  Clock,
  User,
  Play,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const statsData = [
  { labelKey: 'remainingSessions', value: '18', icon: Calendar, color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
  { labelKey: 'attendanceRate', value: '96%', icon: CheckSquare, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
  { labelKey: 'completedAssignments', value: '15', icon: FileText, color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
  { labelKey: 'averageRating', value: '4.8', icon: Award, color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
];

const quickAccessData = [
  { labelKey: 'schedule', descKey: 'scheduleDesc', icon: Calendar, path: '/dashboard/student/schedule', iconColor: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', badgeText: null },
  { labelKey: 'assignments', descKey: 'assignmentsDesc', icon: FileText, path: '/dashboard/student/assignments', iconColor: 'text-amber-500', bgColor: 'bg-amber-50 dark:bg-amber-900/20', badgeText: '3' },
  { labelKey: 'achievements', descKey: 'achievementsDesc', icon: Award, path: '/dashboard/student/achievements', iconColor: 'text-yellow-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20', badgeText: '8' },
  { labelKey: 'certificates', descKey: 'certificatesDesc', icon: CheckSquare, path: '/dashboard/student/certificates', iconColor: 'text-emerald-500', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20', badgeText: '4' },
];

const academicProgressData = [
  { subjectKey: 'quran', subSubjectKey: 'tajweed', progress: 75, color: 'bg-emerald-500' },
  { subjectKey: 'arabic', subSubjectKey: 'grammar', progress: 50, color: 'bg-blue-500' },
];

function StatCard({ labelKey, value, icon: Icon, color }) {
  const { t } = useTranslation();
  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="text-start flex-1">
        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t(`studentDashboard.home.stats.${labelKey}`)}</p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={22} />
      </div>
    </motion.div>
  );
}

function NextSessionCard() {
  const { t } = useTranslation();
  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">{t('studentDashboard.home.nextSession.title')}</h2>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-red-500 font-medium">{t('studentDashboard.home.nextSession.badge')}</span>
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">
        {t('studentDashboard.home.nextSession.sessionName')}
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="text-center">
          <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center mx-auto mb-1.5">
            <Clock size={16} className="text-amber-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('studentDashboard.home.nextSession.time')}</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{t('studentDashboard.home.nextSession.timeValue')}</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-1.5">
            <Calendar size={16} className="text-blue-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('studentDashboard.home.nextSession.date')}</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{t('studentDashboard.home.nextSession.today')}</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mx-auto mb-1.5">
            <User size={16} className="text-emerald-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('studentDashboard.home.nextSession.teacher')}</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{t('studentDashboard.home.nextSession.teacherName')}</p>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md shadow-emerald-200/50 dark:shadow-emerald-900/30">
        <Play size={18} />
        <span className="text-sm">{t('studentDashboard.home.nextSession.joinButton')}</span>
      </button>
    </motion.div>
  );
}

function QuickAccessCard({ labelKey, descKey, icon: Icon, iconColor, bgColor, badgeText }) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-slate-800 text-center rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 cursor-pointer transition-shadow hover:shadow-md"
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
        {t(`studentDashboard.home.quickAccess.${labelKey}`)}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
        {t(`studentDashboard.home.quickAccess.${descKey}`)}
      </p>
    </motion.div>
  );
}

function AcademicProgressSection() {
  const { t } = useTranslation();
  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4 text-start">
        {t('studentDashboard.home.progress.title')}
      </h2>
      <div className="space-y-5">
        {academicProgressData.map((item) => (
          <div key={item.subjectKey}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {t(`studentDashboard.home.progress.subjects.${item.subjectKey}`)}
              </span>
              <span className="text-sm font-semibold text-[#0f7a6c] dark:text-emerald-400">
                {item.progress}%
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-start">
              {t(`studentDashboard.home.progress.subjects.${item.subSubjectKey}`)}
            </p>
            <div className="h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function StudentHome() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-5"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {t('studentDashboard.home.greeting')}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {t('studentDashboard.home.greetingSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statsData.map((stat) => (
            <StatCard key={stat.labelKey} {...stat} />
          ))}
        </div>

        <NextSessionCard />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickAccessData.map((card) => (
            <QuickAccessCard key={card.labelKey} {...card} />
          ))}
        </div>

        <AcademicProgressSection />
      </motion.div>
    </div>
  );
}
