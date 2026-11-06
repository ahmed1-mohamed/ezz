import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  X,
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
  CreditCard,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';
import { parentPackagesApi } from '@/shared/services/api/parentPackagesApi.js';

function resolveModalIcon(iconName) {
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

function formatPriceString(priceValue) {
  const num = Number(priceValue);
  if (isNaN(num)) return String(priceValue || '0');
  return num.toLocaleString('en-US');
}

export default function ParentPackageDetailsModal({
  isOpen,
  packageItem,
  onClose,
  onSubscribe,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [details, setDetails] = useState(packageItem);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  useEffect(() => {
    let isMounted = true;
    async function loadFullDetails() {
      if (!packageItem?.id) return;
      try {
        setIsLoadingDetails(true);
        const res = await parentPackagesApi.fetchPackageDetails(packageItem.id);
        if (isMounted && res) {
          setDetails((prev) => ({ ...prev, ...res }));
        }
      } catch (err) {
        console.warn('Failed to fetch full package details:', err);
      } finally {
        if (isMounted) {
          setIsLoadingDetails(false);
        }
      }
    }
    setDetails(packageItem);
    if (packageItem?.id) {
      loadFullDetails();
    }
    return () => {
      isMounted = false;
    };
  }, [packageItem]);
  if (!isOpen || !packageItem) return null;
  const activeData = details || packageItem;
  const isFamily = activeData?.type === 'family' || String(activeData?.typeText || '').includes('عائل');
  const countryName = activeData?.country?.name || '';
  const countryFlag = activeData?.country?.flag || '';
  const currencyLabel = t('parentPackages.currency', 'ج.م');
  const featuresList = Array.isArray(activeData?.features) ? activeData.features : [];
  const familyTiers = Array.isArray(activeData?.familyTiers) ? activeData.familyTiers : null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                isFamily
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  : 'bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20'
              }`}
            >
              {React.createElement(resolveModalIcon(activeData?.icon), { className: 'w-7 h-7' })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black ${
                    isFamily
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                  }`}
                >
                  {isFamily ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
                  <span>{activeData?.typeText || (isFamily ? 'باقة عائلية' : 'باقة فردية')}</span>
                </span>
                {countryFlag && (
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    {countryFlag} {countryName}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                {activeData?.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 font-semibold block">
                {t('parentPackages.subscriptionFee', 'قيمة الاشتراك الشهري')}
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-black text-[#0f7a6c] dark:text-emerald-400">
                  {formatPriceString(activeData?.price)}
                </span>
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  {currencyLabel} / {t('parentPackages.monthly', 'شهرياً')}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <Calendar className="w-4 h-4 text-[#0f7a6c] dark:text-emerald-400" />
                <span>{activeData?.sessionsCount || 8} {t('parentPackages.sessionsUnit', 'حصص')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <Clock className="w-4 h-4 text-[#0f7a6c] dark:text-emerald-400" />
                <span>{activeData?.sessionDuration || 60} {t('parentPackages.minutesUnit', 'دقيقة')}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t('parentPackages.packageType', 'نوع الباقة')}:</span>
              <span className="font-extrabold text-slate-800 dark:text-slate-200">
                {activeData?.typeText || (isFamily ? 'عائلية' : 'فردية')}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t('parentPackages.maxMembers', 'الحد الأقصى للمشتركين')}:</span>
              <span className="font-extrabold text-slate-800 dark:text-slate-200">
                {activeData?.maxMembers || 1} {t('parentPackages.membersUnit', 'أفراد')}
              </span>
            </div>
            {activeData?.language && (
              <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between sm:col-span-2">
                <span className="text-slate-400 font-medium">{t('parentPackages.explanationLanguage', 'لغة الشرح والتعليم')}:</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  {activeData.language}
                </span>
              </div>
            )}
          </div>
          {isFamily && familyTiers && familyTiers.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                <span>{t('parentPackages.familyTiersTitle', 'شرائح الاشتراك العائلي حسب عدد الأفراد')}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {familyTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 flex items-center justify-between text-xs"
                  >
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {tier.membersCount || tier.members || idx + 2} {t('parentPackages.membersUnit', 'أفراد')}
                    </span>
                    <span className="font-black text-amber-700 dark:text-amber-400">
                      {formatPriceString(tier.price)} {currencyLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0f7a6c] dark:text-emerald-400" />
              <span>{t('parentPackages.allFeaturesTitle', 'كافة المزايا والخدمات المشمولة بالباقة')}</span>
            </h4>
            <div className="space-y-2.5">
              {featuresList.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {t('parentPackages.close', 'إغلاق')}
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSubscribe?.(activeData);
            }}
            className="px-7 py-3 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white font-extrabold text-xs shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
          >
            <CreditCard className="w-4 h-4" />
            <span>{t('parentPackages.proceedToSubscribe', 'متابعة للاشتراك والدفع')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
