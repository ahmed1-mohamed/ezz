import { motion } from 'framer-motion';
import { Sun, Moon, Settings as SettingsIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../../../i18n.js';
import { useAuth } from '@/shared/context/useAuth.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';

export default function LanguageAppearancePanel({ itemVariants, preferences, togglePreference, isRtl }) {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useAuth();

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">{t('parentSettings.languageDisplay')}</h2>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parentSettings.languageDisplay')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => handleLanguageChange('ar')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${i18n.language === 'ar' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'}`}
                >
                    <span className="font-bold text-slate-800 dark:text-slate-100">{t('parentSettings.arabic')}</span>
                    <span className="text-[10px] text-slate-500">{t('parentSettings.defaultLang')}</span>
                </button>

                <button
                    onClick={() => handleLanguageChange('en')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${i18n.language === 'en' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'}`}
                >
                    <span className="font-bold text-slate-800 dark:text-slate-100">{t('parentSettings.english')}</span>
                    <span className="text-[10px] text-slate-500">{t('parentSettings.secondaryLang')}</span>
                </button>
            </div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parentSettings.appearance')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                    onClick={() => setTheme('light')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'light' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'}`}
                >
                    <Sun className="w-6 h-6 text-amber-500" />
                    <span className="font-bold text-slate-800 dark:text-slate-100">{t('parentSettings.light')}</span>
                </button>

                <button
                    onClick={() => setTheme('dark')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'}`}
                >
                    <Moon className="w-6 h-6 text-indigo-400" />
                    <span className="font-bold text-slate-800 dark:text-slate-100">{t('parentSettings.dark')}</span>
                </button>

                <button
                    onClick={() => setTheme('auto')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'auto' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'}`}
                >
                    <SettingsIcon className="w-6 h-6 text-slate-500" />
                    <span className="font-bold text-slate-800 dark:text-slate-100">{t('parentSettings.auto')}</span>
                </button>
            </div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parentSettings.displayPreferences')}</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-start">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parentSettings.showChildrenPhotos')}</span>
                        <span className="text-[10px] text-slate-500">{t('parentSettings.showChildrenPhotosDesc')}</span>
                    </div>
                    <ToggleSwitch checked={preferences.showPhotos} onChange={() => togglePreference('showPhotos')} isRtl={isRtl} />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-start">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parentSettings.showAllChildren')}</span>
                        <span className="text-[10px] text-slate-500">{t('parentSettings.showAllChildrenDesc')}</span>
                    </div>
                    <ToggleSwitch checked={preferences.showAllChildren} onChange={() => togglePreference('showAllChildren')} isRtl={isRtl} />
                </div>
            </div>
        </motion.div>
    );
}
