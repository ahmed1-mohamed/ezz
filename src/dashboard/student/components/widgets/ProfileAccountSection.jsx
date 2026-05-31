import { motion } from 'framer-motion';
import { Calendar, User, Shield, CheckCircle, Award, Star, BookOpen, Crown, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const recentAchievements = [
  { titleAr: 'متقن التجويد', titleEn: 'Tajweed Master', dateAr: '13 أبريل 2026', dateEn: 'Apr 13, 2026', emoji: '🏆', bg: 'bg-amber-100 dark:bg-amber-900/30' },
  { titleAr: 'حافظ مميز', titleEn: 'Distinguished Memorizer', dateAr: '6 أبريل 2026', dateEn: 'Apr 6, 2026', emoji: '⭐', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  { titleAr: 'طالب مجتهد', titleEn: 'Diligent Student', dateAr: '1 أبريل 2026', dateEn: 'Apr 1, 2026', emoji: '📖', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
];

export function ProfileAccountSection({ isRtl }) {
  const { t } = useTranslation();

  const accountInfo = [
    { icon: Calendar, transKey: 'joinDate', valueAr: '15 يناير 2024', valueEn: 'January 15, 2024' },
    { icon: User, transKey: 'accountType', valueAr: 'طالب', valueEn: 'Student' },
    { icon: Shield, transKey: 'guardian', valueAr: 'أحمد محمد علي', valueEn: 'Ahmed Mohammed Ali' },
  ];
  return (
    <>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-4 text-end">
          {t('studentDashboard.profile.accountInfo')}
        </h2>
        <div className="space-y-3">
          {accountInfo.map(({ icon: Icon, transKey, valueAr, valueEn }) => (
            <div key={transKey} className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-700 last:border-0">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {transKey === 'accountType' ? t('studentDashboard.profile.student') : (isRtl ? valueAr : valueEn)}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                {t(`studentDashboard.profile.${transKey}`)}
                <div className="w-7 h-7 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <Icon size={13} className="text-slate-500" />
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between py-2">
            <span className="flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">
              <CheckCircle size={12} />
              {t('studentDashboard.profile.activeVerified')}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              {t('studentDashboard.profile.accountStatus')}
              <div className="w-7 h-7 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                <CheckCircle size={13} className="text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between mb-4">
          <Award size={16} className="text-amber-500" />
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200">
            {t('studentDashboard.profile.recentAchievements')}
          </h2>
        </div>
        <div className="space-y-2.5">
          {recentAchievements.map((a) => (
            <div key={a.titleAr} className={`flex items-center justify-between p-3 ${a.bg} rounded-xl`}>
              <span className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? a.dateAr : a.dateEn}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{isRtl ? a.titleAr : a.titleEn}</span>
                <span className="text-xl">{a.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-5 shadow-sm border border-emerald-100 dark:border-slate-700 overflow-hidden relative"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="absolute top-4 start-4">
          <span className="flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {t('studentDashboard.profile.active')}
          </span>
        </div>

        <div className="flex flex-col items-center text-center mb-5">
          <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-3 mt-6">
            <Crown size={24} className="text-amber-500" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">
            {t('studentDashboard.profile.advancedPackage')}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/70 dark:bg-slate-700/50 rounded-xl p-3 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t('studentDashboard.profile.sessionsLeft')}</p>
            <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">30 {t('studentDashboard.profile.session')}</p>
          </div>
          <div className="bg-white/70 dark:bg-slate-700/50 rounded-xl p-3 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t('studentDashboard.profile.renewalDate')}</p>
            <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">{isRtl ? '15 مايو 2026' : 'May 15, 2026'}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-4 py-2 rounded-full">
            <CheckCircle size={13} />
            {t('studentDashboard.profile.subscriptionActive')}
          </span>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
            <RefreshCw size={9} />
            {t('studentDashboard.profile.expiresIn')}
          </p>
        </div>
      </motion.div>
    </>
  );
}
