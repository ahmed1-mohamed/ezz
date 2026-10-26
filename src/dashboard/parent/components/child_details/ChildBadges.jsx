import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Star, Medal, Award } from 'lucide-react';
import { parentApi } from '@/shared/services/api/parentApi';

const DEFAULT_ICONS = [Trophy, Star, Medal, Award];

export default function ChildBadges({ childId, initialBadges }) {
  const { t, i18n } = useTranslation();
  const [badges, setBadges] = useState(initialBadges || []);
  const [isLoading, setIsLoading] = useState(!initialBadges);
  const [prevInitialBadges, setPrevInitialBadges] = useState(initialBadges);

  if (prevInitialBadges !== initialBadges) {
    setPrevInitialBadges(initialBadges);
    if (initialBadges && initialBadges.length > 0) {
      setBadges(initialBadges);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (initialBadges && initialBadges.length > 0) return;

    let isMounted = true;
    Promise.resolve().then(async () => {
      if (!isMounted) return;
      setIsLoading(true);
      const res = await parentApi.fetchBadges(childId);
      if (isMounted) {
        if (res?.success && Array.isArray(res.data)) {
          setBadges(res.data);
        } else {
          setBadges([]);
        }
        setIsLoading(false);
      }
    });

    return () => { isMounted = false; };
  }, [childId, initialBadges]);

  const getBadgeTitle = (badge) => {
    if (!badge) return '';
    if (typeof badge.title === 'string') return badge.title;
    if (typeof badge.name === 'string') return badge.name;
    if (typeof badge.name === 'object' && badge.name !== null) {
      return i18n.language.startsWith('ar') ? (badge.name.ar || badge.name.en) : (badge.name.en || badge.name.ar);
    }
    return '';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6">
        {t('parentDashboard.childrenDetails.badgesTitle', 'الأوسمة والجوائز')}
      </h3>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-24 rounded-xl bg-slate-100 dark:bg-slate-700/50 animate-pulse" />
          ))}
        </div>
      ) : badges.length === 0 ? (
        <div className="text-center py-6 text-slate-500 dark:text-slate-400 text-sm">
          {t('parentDashboard.childrenDetails.noBadges', 'لا توجد أوسمة مكتسبة حتى الآن')}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge, idx) => {
            const Icon = DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
            const title = getBadgeTitle(badge);
            const emoji = badge.emoji || badge.icon;
            const isEmoji = typeof emoji === 'string' && emoji.length <= 4;

            return (
              <div
                key={badge.id || badge._id || idx}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-amber-100 dark:border-slate-700 bg-amber-50/60 dark:bg-amber-900/10 text-center"
              >
                {isEmoji ? (
                  <span className="text-3xl mb-2">{emoji}</span>
                ) : (
                  <Icon className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-2" />
                )}
                <span className="text-sm font-bold text-amber-700 dark:text-amber-300">
                  {title}
                </span>
                {badge.description && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {typeof badge.description === 'object'
                      ? (i18n.language.startsWith('ar') ? badge.description.ar : badge.description.en)
                      : badge.description}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
