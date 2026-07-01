import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const STAT_CONFIG = [
    { key: 'totalAssignments', dataKey: 'totalAssignments', color: 'text-slate-700 dark:text-slate-300' },
    { key: 'activeAssignments', dataKey: 'activeCount', color: 'text-blue-600 dark:text-blue-400' },
    { key: 'completedAssignments', dataKey: 'completedCount', color: 'text-emerald-600 dark:text-emerald-400' },
    { key: 'lateAssignments', dataKey: 'lateCount', color: 'text-red-600 dark:text-red-400' },
];

function AssignmentsStats({ stats }) {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STAT_CONFIG.map(({ key, dataKey, color }) => (
                <div
                    key={key}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800/60 shadow-sm flex flex-col items-center justify-center text-center"
                >
                    <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
                        {t(`adminDashboard.assignments.${key}`)}
                    </span>
                    <span className={`text-3xl font-extrabold mt-2 ${color}`}>
                        {stats[dataKey] ?? 0}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default memo(AssignmentsStats);
