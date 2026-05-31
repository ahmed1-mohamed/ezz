import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ProgressAchievements({ data, variants }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    if (!data) return null;

    return (
        <motion.div variants={variants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-6 relative inline-block">
                {t('parent.ratingsComponents.progressAchievements')}
                <span className="absolute -bottom-2 start-0 w-1/2 h-1 bg-slate-800 rounded-full"></span>
            </h2>

            <div className="space-y-4">
                <div className="bg-sky-50 rounded-xl p-5 border border-sky-100 flex flex-col sm:flex-row justify-between items-center text-center sm:text-start gap-2">
                    <span className="text-xs text-slate-500 font-medium">{t('parent.ratingsComponents.currentMemorization')}</span>
                    <span className="font-bold text-slate-800 text-lg">{data.currentMemorization}</span>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 flex flex-col sm:flex-row justify-between items-center text-center sm:text-start gap-2">
                    <span className="text-xs text-amber-600/70 font-medium">{t('parent.ratingsComponents.nextGoal')}</span>
                    <span className="font-bold text-slate-800 text-lg">{data.nextGoal}</span>
                </div>

                <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 flex flex-col sm:flex-row justify-between items-start gap-4">
                    <span className="text-xs text-emerald-600/70 font-medium mt-1">{t('parent.ratingsComponents.achievements')}</span>
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                        {data.achievements.map((item, index) => (
                            <div key={index} className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span className="font-bold text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
