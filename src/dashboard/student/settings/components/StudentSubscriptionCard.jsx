import React from 'react';
import { CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function formatDate(value, isRtl) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function StudentSubscriptionCard({ subscription }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!subscription) {
    return (
      <div
        className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-7 shadow-xs text-start space-y-4"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
          <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
            <CreditCard size={17} />
          </div>
          <h3 className="text-base font-black">
            {t('studentDashboard.profile.lastSubscriptionTitle', 'آخر اشتراك')}
          </h3>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-center space-y-2">
          <AlertCircle size={28} className="text-slate-300 dark:text-slate-600" />
          <p className="text-xs font-bold text-slate-400">
            {t('studentDashboard.profile.noSubscription', 'لا توجد بيانات اشتراك نشط حالياً')}
          </p>
        </div>
      </div>
    );
  }
  const subName = resolveName(subscription.name, isRtl) || subscription.packageName || t('studentDashboard.profile.package', 'الباقة التعليمية');
  const isExpired = subscription.expiresAt ? new Date(subscription.expiresAt) < new Date() : false;
  const rows = [
    { label: t('studentDashboard.profile.package', 'الباقة'), value: subName },
    { label: t('studentDashboard.profile.price', 'السعر'), value: subscription.price !== undefined ? `${subscription.price} ر.س` : '-' },
    { label: t('studentDashboard.profile.sessionsCount', 'عدد الحصص'), value: subscription.sessionsCount ? `${subscription.sessionsCount} ${t('studentDashboard.profile.sessionsWord', 'حصة')}` : '-' },
    { label: t('studentDashboard.profile.subscribedAt', 'تاريخ الاشتراك'), value: formatDate(subscription.subscribedAt || subscription.createdAt, isRtl) },
    { label: t('studentDashboard.profile.expiresAt', 'تاريخ الانتهاء'), value: formatDate(subscription.expiresAt, isRtl) },
  ];
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-7 shadow-xs text-start space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5 text-slate-800 dark:text-white">
          <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
            <CreditCard size={17} />
          </div>
          <h3 className="text-base font-black">
            {t('studentDashboard.profile.lastSubscriptionTitle', 'آخر اشتراك')}
          </h3>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
            isExpired
              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
              : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
          }`}
        >
          <CheckCircle2 size={12} />
          <span>{isExpired ? t('studentDashboard.profile.statusExpired', 'منتهي') : t('studentDashboard.profile.statusActive', 'ساري')}</span>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {rows.map((row, idx) => (
          <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
            <span className="font-bold text-slate-400 dark:text-slate-500">{row.label}</span>
            <span className="font-black text-slate-700 dark:text-slate-200">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

