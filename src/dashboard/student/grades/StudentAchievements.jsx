import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

function RewardCard({ reward, isRtl, index }) {
  const teacherName = reward.teacher?.name || '-';
  const assignedDate = reward.assignedAt
    ? new Date(reward.assignedAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';
  const bgColor = reward.backgroundColor || '#0f7a6c';
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1, transition: { delay: index * 0.05, duration: 0.35, ease: 'easeOut' } },
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 flex flex-col text-start"
    >
      <div
        className="h-32 flex items-center justify-center relative overflow-hidden"
        style={{
          background: bgColor.startsWith('#')
            ? `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)`
            : bgColor,
        }}
      >
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-3xl shadow-md text-white">
          {reward.icon && (reward.icon.startsWith('http') || reward.icon.startsWith('/')) ? (
            <img src={reward.icon} alt="" className="w-10 h-10 object-contain" />
          ) : (
            <span>{reward.icon || '🏆'}</span>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1.5">
          {reward.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {reward.description}
        </p>
        <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 truncate">
            {reward.teacher?.image ? (
              <img src={reward.teacher.image} alt="" className="w-5 h-5 rounded-full object-cover shrink-0" />
            ) : (
              <User size={13} className="shrink-0" />
            )}
            <span className="truncate font-medium text-slate-600 dark:text-slate-300">{teacherName}</span>
          </div>
          {assignedDate && (
            <span className="text-[11px] shrink-0" dir="ltr">
              {assignedDate}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentAchievements() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [loading, setLoading] = useState(true);
  const [rewards, setRewards] = useState([]);
  useEffect(() => {
    async function loadRewards() {
      try {
        setLoading(true);
        const res = await studentPortalApi.fetchRewards();
        const raw = res?.data || res || [];
        setRewards(Array.isArray(raw) ? raw : []);
      } catch (err) {
        console.warn('Could not load student rewards:', err);
      } finally {
        setLoading(false);
      }
    }
    loadRewards();
  }, []);
  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-500">
              <Award size={28} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {t('studentDashboard.rewards.title', 'سجل الإنجازات والأوسمة')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t('studentDashboard.rewards.subtitle', 'الأوسمة والشهادات التقديرية الممنوحة لك من المعلمين')}
              </p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-3 text-center self-start sm:self-auto">
            <span className="text-xs text-slate-400">{t('studentDashboard.rewards.total', 'إجمالي الأوسمة')}</span>
            <p className="text-2xl font-black text-amber-500 mt-0.5">{rewards.length}</p>
          </div>
        </div>
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Spinner />
          </div>
        ) : rewards.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-700 space-y-3">
            <Award size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
              {t('studentDashboard.rewards.empty', 'لا توجد أوسمة ممنوحة حتى الآن')}
            </h3>
            <p className="text-xs text-slate-400">
              {t('studentDashboard.rewards.keepUp', 'استمر في الاجتهاد وحضور الحصص للحصول على الأوسمة التقديرية')}
            </p>
          </div>
        ) : (
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {rewards.map((reward, i) => (
              <RewardCard key={reward.id || i} reward={reward} isRtl={isRtl} index={i} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
