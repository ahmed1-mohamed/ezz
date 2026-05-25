import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ClassesStats({ data, variants }) {
    const { t } = useTranslation();
    if (!data) return null;

    return (
        <motion.div variants={variants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
            <h2 className="text-lg font-bold text-slate-800 mb-6">{t('parent.ratingsComponents.classesStats')}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-sky-50 rounded-xl p-5 flex flex-col items-center justify-center border border-sky-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.totalClasses')}</span>
                    <span className="text-3xl font-bold text-sky-600">{data.total}</span>
                </div>
                <div className="bg-red-50 rounded-xl p-5 flex flex-col items-center justify-center border border-red-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.used')}</span>
                    <span className="text-3xl font-bold text-red-500">{data.used}</span>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center justify-center border border-emerald-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.remaining')}</span>
                    <span className="text-3xl font-bold text-emerald-500">{data.remaining}</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 flex flex-col items-center justify-center border border-slate-100">
                    <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.ratingsComponents.thisMonth')}</span>
                    <span className="text-3xl font-bold text-slate-700">{data.thisMonth}</span>
                </div>
            </div>
        </motion.div>
    );
}
