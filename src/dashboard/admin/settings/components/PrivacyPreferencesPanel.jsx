import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ToggleSwitch from './ToggleSwitch.jsx';

export default function PrivacyPreferencesPanel({ itemVariants, preferences, togglePreference, isRtl }) {
    const { t } = useTranslation();

    return (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">{t('parentSettings.privacy')}</h2>

            <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-start">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parentSettings.shareProgress')}</span>
                        <span className="text-[10px] text-slate-500">{t('parentSettings.shareProgressDesc')}</span>
                    </div>
                    <ToggleSwitch checked={preferences.shareProgress} onChange={() => togglePreference('shareProgress')} isRtl={isRtl} />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-start">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parentSettings.saveActivityLog')}</span>
                        <span className="text-[10px] text-slate-500">{t('parentSettings.saveActivityLogDesc')}</span>
                    </div>
                    <ToggleSwitch checked={preferences.saveActivityLog} onChange={() => togglePreference('saveActivityLog')} isRtl={isRtl} />
                </div>
            </div>

            <div className="flex justify-start">
                <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto">
                    {t('parentSettings.saveChanges')}
                </button>
            </div>
        </motion.div>
    );
}
