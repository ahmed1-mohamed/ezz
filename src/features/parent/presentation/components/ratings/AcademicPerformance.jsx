import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function AcademicPerformance({ data, variants }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    if (!data) return null;

    return (
        <motion.div variants={variants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-6">{t('parent.ratingsComponents.academicPerformance')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-sky-50 rounded-xl p-5 flex flex-col items-center justify-center border border-sky-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.overallAverage')}</span>
                    <span className="text-3xl font-bold text-sky-600">{data.overallAverage}</span>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center justify-center border border-emerald-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.currentMonth')}</span>
                    <span className="text-3xl font-bold text-emerald-500">{data.currentMonthAverage}</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 flex flex-col items-center justify-center border border-slate-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.lastMonth')}</span>
                    <span className="text-3xl font-bold text-slate-700">{data.lastMonthAverage}</span>
                </div>
            </div>

            <div className="space-y-4">
                {data.subjects.map((subject, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 border border-slate-100 rounded-xl bg-white hover:bg-slate-50 transition-colors gap-4">
                        <div className={`font-bold text-slate-800 w-full sm:w-1/3 text-center ${isRtl ? 'sm:text-end' : 'sm:text-start'}`}>
                            {subject.name}
                        </div>

                        <div className="flex items-center justify-center gap-8 w-full sm:w-1/3">
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] text-slate-500 font-medium">{t('parent.ratingsComponents.average')}</span>
                                <span className="font-bold text-emerald-500 text-lg">{subject.average}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] text-slate-500 font-medium">{t('parent.ratingsComponents.lastRating')}</span>
                                <span className="font-bold text-slate-800 text-lg">{subject.lastRating}</span>
                            </div>
                        </div>

                        <div className={`w-full sm:w-1/3 flex justify-center ${isRtl ? 'sm:justify-start' : 'sm:justify-end'}`}>
                            {subject.trend === 'up' ? (
                                <div className={`flex items-center gap-1 text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <span className="text-xs font-bold">{t('parent.ratingsComponents.improved')}</span>
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                            ) : (
                                <div className={`flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1 rounded-full ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <span className="text-xs font-bold">{t('parent.ratingsComponents.declined')}</span>
                                    <TrendingDown className="w-4 h-4" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
