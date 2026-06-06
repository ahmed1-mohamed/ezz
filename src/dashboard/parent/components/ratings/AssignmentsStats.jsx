/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function AssignmentsStats({ data, variants }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    if (!data) return null;

    return (
        <motion.div variants={variants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-6">{t('parent.ratingsComponents.assignmentsStats')}</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-sky-50 rounded-xl p-5 flex flex-col items-center justify-center border border-sky-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.totalAssignments')}</span>
                    <span className="text-3xl font-bold text-sky-600">{data.total}</span>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center justify-center border border-emerald-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.completed')}</span>
                    <span className="text-3xl font-bold text-emerald-500">{data.completed}</span>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 flex flex-col items-center justify-center border border-amber-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.pending')}</span>
                    <span className="text-3xl font-bold text-amber-500">{data.pending}</span>
                </div>
                <div className="bg-red-50 rounded-xl p-5 flex flex-col items-center justify-center border border-red-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.completionRate')}</span>
                    <span className="text-3xl font-bold text-amber-600">{data.completionRate}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-slate-100 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-3">{t('parent.ratingsComponents.submissionStatus')}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-6 text-sm">
                                <span className="text-slate-500 w-16">{t('parent.ratingsComponents.onTime')}</span>
                                <span className="font-bold text-emerald-500">{data.delivery.onTime}</span>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                                <span className="text-slate-500 w-16">{t('parent.ratingsComponents.late')}</span>
                                <span className="font-bold text-red-500">{data.delivery.late}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-100 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-3">{t('parent.ratingsComponents.currentMonth')}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-6 text-sm">
                                <span className="text-slate-500 w-12">{t('parent.ratingsComponents.completed')}</span>
                                <span className="font-bold text-slate-700">{data.currentMonth.completed} {t('parent.ratingsComponents.from')} {data.currentMonth.total}</span>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                                <span className="text-slate-500 w-12">{t('parent.ratingsComponents.rate')}</span>
                                <span className="font-bold text-emerald-500">{data.currentMonth.rate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
