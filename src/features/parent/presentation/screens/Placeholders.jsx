import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ transKey }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }}
      className="p-4 md:p-8 max-w-4xl mx-auto font-sans text-start"
    >
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        {t(`parentDashboard.nav.${transKey}`)}
      </h1>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-12 text-center shadow-sm border border-slate-100 dark:border-slate-700">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          {isRtl ? 'جاري العمل على هذه الصفحة...' : 'Work in progress for this page...'}
        </p>
      </div>
    </motion.div>
  );
};

export const ParentChildren = () => <PlaceholderPage transKey="children" />;
export const ParentAttendance = () => <PlaceholderPage transKey="attendance" />;
export const ParentAssignments = () => <PlaceholderPage transKey="assignments" />;
export const ParentReports = () => <PlaceholderPage transKey="reports" />;
export const ParentSchedule = () => <PlaceholderPage transKey="schedule" />;
export const ParentSettings = () => <PlaceholderPage transKey="settings" />;
export const ParentExams = () => <PlaceholderPage transKey="exams" />;
export const ParentNotifications = () => <PlaceholderPage transKey="notifications" />;
export const ParentProfile = () => <PlaceholderPage transKey="profile" />;
