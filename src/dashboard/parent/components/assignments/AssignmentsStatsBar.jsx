import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AssignmentsStatsBar({ stats, variants }) {
    const { t } = useTranslation();

    const statCards = [
        { icon: FileText, color: 'text-sky-500', numColor: 'text-sky-600', key: 'totalStat', value: stats.total },
        { icon: CheckCircle2, color: 'text-emerald-500', numColor: 'text-emerald-500', key: 'evaluatedStat', value: stats.evaluated },
        { icon: Clock, color: 'text-amber-500', numColor: 'text-amber-500', key: 'underReviewStat', value: stats.underReview },
        { icon: XCircle, color: 'text-red-500', numColor: 'text-red-500', key: 'notSubmittedStat', value: stats.notSubmitted },
    ];

    return (
        <motion.div variants={variants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statCards.map(({ icon: Icon, color, numColor, key, value }) => (
                <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                    <Icon className={`w-6 h-6 ${color} mb-1`} />
                    <span className="text-xs text-slate-500 font-medium">{t(`parent.assignments.${key}`)}</span>
                    <span className={`text-3xl font-bold ${numColor}`}>{value}</span>
                </div>
            ))}
        </motion.div>
    );
}
