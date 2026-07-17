import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function CouponStatsBar({ total, active, expired, used, selectedStatus, onSelectStatus }) {
    const { t } = useTranslation();

    const stats = [
        {
            key: 'all',
            label: t('adminDashboard.coupons.totalCodes', 'إجمالي الأكواد'),
            value: total,
            valueClass: 'text-[#0f7a6c] dark:text-[#14a693]',
            bgActive: 'bg-[#0f7a6c]/10 border-[#0f7a6c]/30 shadow-[#0f7a6c]/20 ring-1 ring-[#0f7a6c]/50',
            bgIdle: 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
        },
        {
            key: 'active',
            label: t('adminDashboard.coupons.activeCodes', 'الأكواد الفعالة'),
            value: active,
            valueClass: 'text-[#10b981] dark:text-[#34d399]',
            bgActive: 'bg-[#10b981]/10 border-[#10b981]/30 shadow-[#10b981]/20 ring-1 ring-[#10b981]/50',
            bgIdle: 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
        },
        {
            key: 'expired',
            label: t('adminDashboard.coupons.expiredCodes', 'الأكواد المنتهية'),
            value: expired,
            valueClass: 'text-slate-500 dark:text-slate-400',
            bgActive: 'bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-600 shadow-slate-500/20 ring-1 ring-slate-400/50',
            bgIdle: 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
        },
        {
            key: 'used',
            label: t('adminDashboard.coupons.usedCodes', 'الأكواد المستخدمة'),
            value: used ?? 0,
            valueClass: 'text-amber-500 dark:text-amber-400',
            bgActive: 'bg-amber-500/10 border-amber-500/30 shadow-amber-500/20 ring-1 ring-amber-500/50',
            bgIdle: 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => {
                const isActive = selectedStatus === stat.key;
                return (
                    <button
                        key={stat.key}
                        onClick={() => onSelectStatus?.(stat.key)}
                        className={`flex flex-col justify-between text-start p-6 rounded-2xl border shadow-sm transition-all duration-200 cursor-pointer ${
                            isActive ? stat.bgActive + ' -translate-y-1' : stat.bgIdle
                        }`}
                    >
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            {stat.label}
                        </span>
                        <span className={`text-2xl font-bold mt-2 ${stat.valueClass}`}>
                            {stat.value}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

export default memo(CouponStatsBar);
