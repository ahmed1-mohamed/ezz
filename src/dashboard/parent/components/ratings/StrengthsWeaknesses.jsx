import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';

export default function StrengthsWeaknesses({ data, variants }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    if (!data) return null;

    return (
        <motion.div variants={variants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-emerald-500">
                <h2 className="text-lg font-bold text-emerald-600 mb-6">{t('parent.ratingsComponents.strengths')}</h2>
                <div className="space-y-4">
                    {data.strengths.map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span className="font-bold text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-amber-400">
                <h2 className="text-lg font-bold text-amber-500 mb-6">{t('parent.ratingsComponents.needsImprovement')}</h2>
                <div className="space-y-4">
                    {data.weaknesses.map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                            <span className="font-bold text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
}
