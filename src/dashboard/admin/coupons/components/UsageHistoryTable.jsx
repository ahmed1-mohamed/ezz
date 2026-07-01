import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function UsageHistoryTable({ history }) {
    const { t } = useTranslation();
    const tWithFallback = (key, fallback) => {
        const trans = t(`adminDashboard.coupons.${key}`);
        return trans === `adminDashboard.coupons.${key}` ? fallback : trans;
    };

    if (!history || history.length === 0) {
        return (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                {tWithFallback('noUsageHistory', 'لا يوجد سجل استخدام حتى الآن')}
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('user', 'المستخدم')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('codeUsed', 'الكود المستخدم')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('date', 'التاريخ')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('savings', 'الوفر')}</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
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
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
