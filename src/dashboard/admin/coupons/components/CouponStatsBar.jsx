import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function CouponStatsBar({ total, active, expired, used }) {
    const { t } = useTranslation();

    const stats = [
        {
            key: 'total',
            label: t('adminDashboard.coupons.totalCodes'),
            value: total,
            valueClass: 'text-[#0f7a6c] dark:text-[#14a693]',
        },
        {
            key: 'active',
            label: t('adminDashboard.coupons.activeCodes'),
            value: active,
            valueClass: 'text-[#10b981] dark:text-[#34d399]',
        },
        {
            key: 'expired',
            label: t('adminDashboard.coupons.expiredCodes'),
            value: expired,
            valueClass: 'text-slate-400 dark:text-slate-500',
        },
        {
            key: 'used',
            label: t('adminDashboard.coupons.usedCodes', 'الأكواد المستخدمة'),
            value: used ?? 0,
            valueClass: 'text-amber-500 dark:text-amber-400',
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div
                    key={stat.key}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        {stat.label}
                    </span>
                    <span className={`text-2xl font-bold mt-2 ${stat.valueClass}`}>
                        {stat.value}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default memo(CouponStatsBar);
