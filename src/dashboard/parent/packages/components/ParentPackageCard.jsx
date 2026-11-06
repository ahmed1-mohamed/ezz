import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Star,
  Award,
  Crown,
  Sparkles,
  BookOpen,
  Layers,
  Users,
  User,
  Clock,
  Calendar,
  Globe,
  Check,
  ChevronLeft,
  ChevronRight,
  Info,
} from 'lucide-react';

function resolvePackageIcon(iconName) {
  const norm = String(iconName || '').toLowerCase().trim();
  if (norm.includes('star') || norm.includes('نجم')) return Star;
  if (norm.includes('crown') || norm.includes('تاج')) return Crown;
  if (norm.includes('award') || norm.includes('جائز')) return Award;
  if (norm.includes('spark') || norm.includes('مميز')) return Sparkles;
  if (norm.includes('book') || norm.includes('كتاب')) return BookOpen;
  if (norm.includes('user') || norm.includes('فرد')) return User;
  if (norm.includes('group') || norm.includes('عائل')) return Users;
  return Layers;
}

function formatPriceNumber(priceValue) {
  const num = Number(priceValue);
  if (isNaN(num)) return String(priceValue || '0');
  return num.toLocaleString('en-US');
}

const ParentPackageCard = memo(function ParentPackageCard({
  packageItem,
  onViewDetails,
  onSubscribe,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const isFamily = packageItem?.type === 'family' || String(packageItem?.typeText || '').includes('عائل');
  const IconComponent = resolvePackageIcon(packageItem?.icon);
  const countryName = packageItem?.country?.name || '';
  const countryFlag = packageItem?.country?.flag || '';
  const currencyLabel = t('parentPackages.currency', 'ج.م');
  const sessionsCount = packageItem?.sessionsCount || 8;
  const sessionDuration = packageItem?.sessionDuration || 60;
  const featuresList = Array.isArray(packageItem?.features) ? packageItem.features : [];
  const previewFeatures = featuresList.slice(0, 4);
  const remainingFeaturesCount = Math.max(0, featuresList.length - 4);
  return (
    <div
      className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border bg-white dark:bg-slate-900 ${isFamily
          ? 'border-amber-200/80 dark:border-amber-800/60 shadow-amber-500/5'
          : 'border-slate-200/90 dark:border-slate-800 shadow-slate-900/5'
        }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div
            className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${isFamily
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20'
              }`}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wide ${isFamily
                  ? 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                  : 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                }`}
            >
              {isFamily ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
              <span>{packageItem?.typeText || (isFamily ? 'باقة عائلية' : 'باقة فردية')}</span>
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl mt-1 leading-snug">
              {packageItem?.name || t('parentPackages.package', 'الباقة')}
            </h3>
          </div>
        </div>
        {countryFlag && (
          <span
            className="text-2xl p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-xs"
            title={countryName}
          >
            {countryFlag}
          </span>
        )}
      </div>
      <div className="py-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-5 flex items-baseline justify-between">
        <div>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold block">
            {t('parentPackages.subscriptionFee', 'قيمة الاشتراك')}
          </span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {formatPriceNumber(packageItem?.price)}
            </span>
            <span className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-400">
              {currencyLabel}
            </span>
          </div>
        </div>
        <div className="text-end">
          <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold block">
            {t('parentPackages.billingCycle', 'دورة التجديد')}
          </span>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5 inline-block">
            {t('parentPackages.monthly', 'شهرياً')}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs">
        <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
          <Calendar className="w-4 h-4 text-[#0f7a6c] dark:text-emerald-400 shrink-0" />
          <div className="min-w-0">
            <span className="text-slate-400 text-[10px] block font-medium">
              {t('parentPackages.sessionsCount', 'عدد الحصص')}
            </span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200 truncate block">
              {sessionsCount} {t('parentPackages.sessionsUnit', 'حصص شهرياً')}
            </span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-[#0f7a6c] dark:text-emerald-400 shrink-0" />
          <div className="min-w-0">
            <span className="text-slate-400 text-[10px] block font-medium">
              {t('parentPackages.sessionDuration', 'مدة الحصة')}
            </span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200 truncate block">
              {sessionDuration} {t('parentPackages.minutesUnit', 'دقيقة')}
            </span>
          </div>
        </div>
        {packageItem?.language && (
          <div className="col-span-2 p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="text-slate-600 dark:text-slate-300 font-semibold truncate">
              {t('parentPackages.explanationLanguage', 'لغة الشرح')}:{' '}
              <strong className="text-slate-900 dark:text-white font-bold">{packageItem.language}</strong>
            </span>
          </div>
        )}
      </div>
      <div className="space-y-2 mb-6 flex-1">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-1">
          {t('parentPackages.packageFeatures', 'مزايا الباقة:')}
        </span>
        {previewFeatures.map((feat, index) => (
          <div key={index} className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span className="line-clamp-2 leading-relaxed">{feat}</span>
          </div>
        ))}
        {remainingFeaturesCount > 0 && (
          <button
            type="button"
            onClick={() => onViewDetails?.(packageItem)}
            className="text-[11px] font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>+{remainingFeaturesCount} {t('parentPackages.moreFeatures', 'مزايا إضافية')}</span>
            {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>
        )}
      </div>
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={() => onViewDetails?.(packageItem)}
          className="flex-1 py-3 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          title={t('parentPackages.viewDetails', 'تفاصيل الباقة')}
        >
          <Info className="w-3.5 h-3.5" />
          <span>{t('parentPackages.detailsButton', 'التفاصيل')}</span>
        </button>
        <button
          type="button"
          onClick={() => onSubscribe?.(packageItem)}
          className={`flex-[2] py-3 px-4 rounded-2xl text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ${isFamily
              ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'
              : 'bg-[#0f7a6c] hover:bg-[#0c6156] shadow-[#0f7a6c]/20'
            }`}
        >
          <span>{t('parentPackages.subscribeNow', 'اشتراك الآن')}</span>
          {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
});

ParentPackageCard.displayName = 'ParentPackageCard';
export default ParentPackageCard;
