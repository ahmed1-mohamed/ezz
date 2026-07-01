import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function UsageHistoryTable({ history }) {
    const { t } = useTranslation();

    if (!history || history.length === 0) {
        return (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                {t('adminDashboard.coupons.noUsageHistory')}
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-semibold">
                            {t('adminDashboard.coupons.user')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold">
                            {t('adminDashboard.coupons.codeUsed')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold">
                            {t('adminDashboard.coupons.date')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold">
                            {t('adminDashboard.coupons.savings')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <tr
                            key={item.id || index}
                            className="bg-white dark:bg-slate-900 border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                            <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200">
                                {item.user}
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-[#14a693] font-bold text-xs tracking-wider">
                                    {item.code}
                                </span>
                            </td>
                            <td className="px-6 py-4">{item.date}</td>
                            <td className="px-6 py-4 font-bold text-[#10b981] dark:text-[#34d399]">
                                {item.savings}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default memo(UsageHistoryTable);
