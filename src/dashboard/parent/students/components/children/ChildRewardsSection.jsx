import { useTranslation } from 'react-i18next';
import {
  Award,
  Sparkles,
  User,
  ShieldCheck,
} from 'lucide-react';

export default function ChildRewardsSection({ rewards = [] }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const rewardsList = Array.isArray(rewards) ? rewards : [];
  if (rewardsList.length === 0) {
    return null;
  }
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span>{t('parent.childrenList.rewardsTitle', 'أوسمة ومكافآت الابن')}</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {t('parent.childrenList.rewardsSubtitle', 'الأوسمة التشجيعية وشهادات التميز الممنوحة من معلمي المنصة')}
            </p>
          </div>
        </div>
        <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
          {rewardsList.length} {t('parent.childrenList.rewardsCount', 'أوسمة')}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rewardsList.map((reward, idx) => {
          const rewardId = reward.id || idx;
          const icon = reward.icon || '🏆';
          const name = reward.name || t('parent.childrenList.defaultRewardName', 'وسام تميز');
          const description = reward.description || '';
          const teacher = reward.teacher || '';
          return (
            <div
              key={rewardId}
              className="p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between gap-3 text-start"
            >
              <div className="space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-xs flex items-center justify-center text-2xl shrink-0">
                  {icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug line-clamp-1" title={name}>
                    {name}
                  </h4>
                  {description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed" title={description}>
                      {description}
                    </p>
                  )}
                </div>
              </div>
              {teacher && (
                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 font-semibold truncate">
                  <User className="w-3 h-3 text-[#0f7a6c] shrink-0" />
                  <span className="text-slate-400 shrink-0">{t('teacherLive.teacherPrefix', 'المعلم')}:</span>
                  <span className="truncate">{teacher}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

