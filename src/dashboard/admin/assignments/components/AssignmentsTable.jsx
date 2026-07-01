import { memo } from 'react';
import { Eye, Trash2, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STATUS_CONFIG = {
    completed: {
        icon: CheckCircle2,
        iconClass: 'text-emerald-500',
        badgeClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400',
        dotClass: 'bg-emerald-500',
        labelKey: 'statusCompleted',
    },
    late: {
        icon: AlertCircle,
        iconClass: 'text-red-500',
        badgeClass: 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400',
        dotClass: 'bg-red-500',
        labelKey: 'statusLate',
    },
    active: {
        icon: Clock,
        iconClass: 'text-blue-500',
        badgeClass: 'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400',
        dotClass: 'bg-blue-500',
        labelKey: 'statusActive',
    },
};

const getStatusConfig = (status) => STATUS_CONFIG[status] ?? STATUS_CONFIG.active;

const getProgressColor = (status) =>
    status === 'completed' ? 'bg-emerald-500' : 'bg-[#0f7a6c]';

function AssignmentRow({ item, onDelete, t }) {
    const cfg = getStatusConfig(item.status);
    const StatusIcon = cfg.icon;
    const progressPct = item.totalCount > 0
        ? Math.min(100, (item.submittedCount / item.totalCount) * 100)
        : 0;

    return (
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1fr_auto] gap-4 px-6 py-5 items-center text-start text-sm border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div className="flex items-center gap-2.5 font-bold text-slate-800 dark:text-white min-w-0">
                <StatusIcon size={16} className={`${cfg.iconClass} shrink-0`} />
                <span className="truncate">{item.title}</span>
            </div>
            <div className="text-slate-600 dark:text-slate-300 truncate">{item.groupName}</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium truncate">{item.teacher}</div>
            <div className="text-slate-500 dark:text-slate-400 text-xs">{item.deadline}</div>
            <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0 tabular-nums">
                    {item.submittedCount}/{item.totalCount}
                </span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className={`h-full start-0 rounded-full transition-all duration-500 ${getProgressColor(item.status)}`}
                        style={{ width: `${progressPct}%` }}
                    />
                </div>
            </div>
            <div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.badgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass}`} />
                    {t(`adminDashboard.assignments.${cfg.labelKey}`)}
                </span>
            </div>
            <div className="flex items-center justify-end gap-2 w-20">
                <button
                    onClick={() => onDelete(item)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                    title={t('adminDashboard.assignments.delete')}
                >
                    <Trash2 size={15} />
                </button>
                <button
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all border border-slate-100 dark:border-slate-700"
                    title={t('adminDashboard.assignments.viewDetails')}
                >
                    <Eye size={15} />
                </button>
            </div>
        </div>
    );
}

function AssignmentCard({ item, onDelete, t }) {
    const cfg = getStatusConfig(item.status);
    const StatusIcon = cfg.icon;
    const progressPct = item.totalCount > 0
        ? Math.min(100, (item.submittedCount / item.totalCount) * 100)
        : 0;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white text-sm min-w-0">
                    <StatusIcon size={15} className={`${cfg.iconClass} shrink-0`} />
                    <span className="truncate">{item.title}</span>
                </div>
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${cfg.badgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass}`} />
                    {t(`adminDashboard.assignments.${cfg.labelKey}`)}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
                <div>
                    <span className="text-slate-400 dark:text-slate-500">{t('adminDashboard.assignments.colGroup')}: </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.groupName}</span>
                </div>
                <div>
                    <span className="text-slate-400 dark:text-slate-500">{t('adminDashboard.assignments.colTeacher')}: </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.teacher}</span>
                </div>
                <div>
                    <span className="text-slate-400 dark:text-slate-500">{t('adminDashboard.assignments.colDeadline')}: </span>
                    <span className="font-medium">{item.deadline}</span>
                </div>
                <div>
                    <span className="text-slate-400 dark:text-slate-500">{t('adminDashboard.assignments.colSubmissions')}: </span>
                    <span className="font-bold tabular-nums text-slate-700 dark:text-slate-300">{item.submittedCount}/{item.totalCount}</span>
                </div>
            </div>
            <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${getProgressColor(item.status)}`}
                    style={{ width: `${progressPct}%` }}
                />
            </div>
            <div className="flex items-center justify-end gap-2">
                <button
                    onClick={() => onDelete(item)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                    title={t('adminDashboard.assignments.delete')}
                >
                    <Trash2 size={14} />
                </button>
                <button
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all border border-slate-100 dark:border-slate-700"
                    title={t('adminDashboard.assignments.viewDetails')}
                >
                    <Eye size={14} />
                </button>
            </div>
        </div>
    );
}

function AssignmentsTable({ assignments, onDelete }) {
    const { t } = useTranslation();

    if (assignments.length === 0) {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm py-16 text-center text-slate-400 dark:text-slate-500">
                {t('adminDashboard.assignments.noAssignments')}
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden">
            <div className="hidden lg:grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1fr_auto] gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 text-start">
                <div>{t('adminDashboard.assignments.colTitle')}</div>
                <div>{t('adminDashboard.assignments.colGroup')}</div>
                <div>{t('adminDashboard.assignments.colTeacher')}</div>
                <div>{t('adminDashboard.assignments.colDeadline')}</div>
                <div>{t('adminDashboard.assignments.colSubmissions')}</div>
                <div>{t('adminDashboard.assignments.colStatus')}</div>
                <div className="text-end w-20">{t('adminDashboard.assignments.colActions')}</div>
            </div>

            <div className="hidden lg:block divide-y divide-slate-50 dark:divide-slate-800">
                {assignments.map((item) => (
                    <AssignmentRow key={item.id} item={item} onDelete={onDelete} t={t} />
                ))}
            </div>

            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                {assignments.map((item) => (
                    <AssignmentCard key={item.id} item={item} onDelete={onDelete} t={t} />
                ))}
            </div>
        </div>
    );
}

export default memo(AssignmentsTable);
