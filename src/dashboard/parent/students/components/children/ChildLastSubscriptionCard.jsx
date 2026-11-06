import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  Calendar,
  Layers,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(d);
    }
  } catch {
    return String(dateStr);
  }
  return String(dateStr);
}

function calculateDaysRemaining(expiresAt) {
  if (!expiresAt) return null;
  try {
    const expiryDate = new Date(expiresAt).getTime();
    const now = Date.now();
    const diffDays = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
    return diffDays;
  } catch {
    return null;
  }
}

export default function ChildLastSubscriptionCard({ lastSubscription }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!lastSubscription || typeof lastSubscription !== 'object') {
    return null;
  }
  const packageName = lastSubscription.name || t('parent.packages.defaultPackage', 'باقة دراسية');
  const price = lastSubscription.price !== undefined ? Number(lastSubscription.price) : null;
  const sessionsCount = Number(lastSubscription.sessionsCount || 0);
  const subscribedAtFormatted = formatDate(lastSubscription.subscribedAt, isRtl);
  const expiresAtFormatted = formatDate(lastSubscription.expiresAt, isRtl);
  const daysRemaining = calculateDaysRemaining(lastSubscription.expiresAt);
  const isExpiringSoon = daysRemaining !== null && daysRemaining <= 7 && daysRemaining >= 0;
  const isExpired = daysRemaining !== null && daysRemaining < 0;
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                {t('parentDashboard.home.subscriptionDetails', 'تفاصيل آخر اشتراك')}
              </span>
              {daysRemaining !== null && (
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black border ${
                    isExpired
                      ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-900/40'
                      : isExpiringSoon
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/60'
                      : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60'
                  }`}
                >
                  {isExpired ? (
                    <>
                      <AlertCircle className="w-3 h-3 text-rose-500" />
                      <span>{t('parent.packages.expired', 'منتهية')}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>{t('parent.packages.active', 'سارية')} ({daysRemaining} {t('parent.packages.daysLeft', 'يوم متبقي')})</span>
                    </>
                  )}
                </span>
              )}
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {packageName}
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate('/dashboard/parent/packages')}
          className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-black shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>{t('parent.packages.manageSubscriptions', 'تجديد أو ترقية الباقة')}</span>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {price !== null && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="text-slate-400 text-xs font-semibold block mb-1">
              {t('parent.packages.priceLabel', 'قيمة الاشتراك')}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-slate-900 dark:text-white">
                {price}
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {t('parent.packages.currencyEGP', 'ج.م / ر.س')}
              </span>
            </div>
          </div>
        )}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <span className="text-slate-400 text-xs font-semibold block mb-1">
            {t('parent.packages.sessionsCountLabel', 'عدد الحصص المشتراة')}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-[#0f7a6c] dark:text-emerald-400">
              {sessionsCount}
            </span>
            <span className="text-xs text-slate-500 font-bold">
              {t('parent.childrenList.classes', 'حصة')}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <span className="text-slate-400 text-xs font-semibold block mb-1 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#0f7a6c]" />
            <span>{t('parent.packages.subscribedAt', 'تاريخ الاشتراك')}</span>
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate" title={subscribedAtFormatted}>
            {subscribedAtFormatted}
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <span className="text-slate-400 text-xs font-semibold block mb-1 flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-500" />
            <span>{t('parent.packages.expiresAt', 'تاريخ الانتهاء')}</span>
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate" title={expiresAtFormatted}>
            {expiresAtFormatted}
          </span>
        </div>
      </div>
    </div>
  );
}

