import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PackageCard from './PackageCard';

const SubscriptionRenewal = memo(({ className = "", currentPackageName, remainingClasses }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const packages = useMemo(() => [
    {
      id: 'beginners',
      title: t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.title'),
      priceDisplay: t('parentDashboard.childrenDetails.subscriptionRenewal.usdPerMonth', { price: 50 }),
      features: [
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.0'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.1'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.2'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.3')
      ]
    },
    {
      id: 'special',
      title: t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.title'),
      priceDisplay: t('parentDashboard.childrenDetails.subscriptionRenewal.usdPerMonth', { price: 90 }),
      features: [
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.0'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.1'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.2'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.3')
      ]
    },
    {
      id: 'elite',
      title: t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.title'),
      priceDisplay: t('parentDashboard.childrenDetails.subscriptionRenewal.usdPerMonth', { price: 130 }),
      features: [
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.0'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.1'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.2'),
        t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.3')
      ]
    }
  ], [t]);

  const currentBenefits = useMemo(() => [
    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.0'),
    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.1'),
    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.2'),
    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.3')
  ], [t]);

  return (
    <div className={`space-y-6 pt-6 border-t border-slate-100 dark:border-slate-700 ${className}`}>

      <div className="flex flex-col sm:flex-row sm:items-center bg-white sm:justify-between gap-4 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="text-start">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {t('parentDashboard.childrenDetails.subscriptionRenewal.title')}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t('parentDashboard.childrenDetails.subscriptionRenewal.subtitle')}
          </p>
        </div>

        <button 
          onClick={() => navigate('/dashboard/parent/checkout')}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#d4a373] hover:bg-[#c39262] text-white rounded-xl font-bold transition-all shadow-sm text-sm flex items-center justify-center gap-2 active:translate-y-0.5"
        >
          <svg className="w-4 h-4 shrink-0 transform -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3z" />
          </svg>
          <span>{t('parentDashboard.childrenDetails.subscriptionRenewal.renewCurrentBtn')}</span>
        </button>
      </div>

      <div className="space-y-3 text-start">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.childrenDetails.subscriptionRenewal.currentPackage')}
        </h3>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border-2 border-[#d4a373] dark:border-[#d4a373]/80 flex flex-col-reverse lg:flex-row justify-between items-stretch gap-6">

          <div className="flex flex-col items-start justify-center lg:border-e lg:border-slate-200 lg:dark:border-slate-700 lg:pe-6 shrink-0">
            <span className="text-2xl font-extrabold text-[#d4a373] dark:text-[#e5b383] block">
              {t('parentDashboard.childrenDetails.subscriptionRenewal.egpPerMonth', { price: 800 })}
            </span>
          </div>

          <div className="space-y-4 flex-1">
            <div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {currentPackageName || t('parentDashboard.home.advancedPackage')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.expiresOn', { date: '13-05-2026' })}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.benefitsTitle')}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:border-s lg:border-slate-200 lg:dark:border-slate-700 lg:ps-6 shrink-0">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-w-[150px]">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wide">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.remainingClassesLabel')}
              </span>
              <span className="text-xl font-bold text-[#0f7a6c] dark:text-[#3ab795] mt-0.5">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.remainingClassesVal', { count: remainingClasses || 29 })}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="space-y-4 text-start">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.childrenDetails.subscriptionRenewal.availablePackages')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              priceDisplay={pkg.priceDisplay}
              features={pkg.features}
              buttonText={t('parentDashboard.childrenDetails.subscriptionRenewal.subscribeNow')}
            />
          ))}
        </div>
      </div>

      <div className="bg-amber-50/100 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/20 rounded-2xl p-6 text-start">
        <h4 className="text-sm font-bold  mb-1">
          {t('parentDashboard.childrenDetails.subscriptionRenewal.importantNoteTitle')}
        </h4>
        <p className="text-xs leading-relaxed font-medium">
          {t('parentDashboard.childrenDetails.subscriptionRenewal.importantNoteText')}
        </p>
      </div>

    </div>
  );
});

SubscriptionRenewal.displayName = 'SubscriptionRenewal';
export default SubscriptionRenewal;