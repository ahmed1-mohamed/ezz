import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ChevronDown, Sun, Moon, Settings as SettingsIcon, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../../i18n.js';
import { useAuth } from '@/shared/context/useAuth.jsx';

export default function ParentSettings() {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useAuth();
    const [profileData, setProfileData] = useState({
        country: 'مصر',
        email: 'ahmed@example.com',
        phone: '+0201012345678',
        fullName: 'أحمد محمد'
    });

    const [passwordData, setPasswordData] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const [isGoogleLinked, setIsGoogleLinked] = useState(false);
    const [isEmailLinked, setIsEmailLinked] = useState(false);

    // Preferences Data
    const [preferences, setPreferences] = useState({
        showPhotos: false,
        showAllChildren: true,
        shareProgress: false,
        saveActivityLog: false
    });

    const togglePreference = (key) => {
        setPreferences({ ...preferences, [key]: !preferences[key] });
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    // Custom Toggle Switch
    const ToggleSwitch = ({ checked, onChange }) => (
        <button
            onClick={onChange}
            className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${checked ? 'bg-[#0f7a6c]' : 'bg-slate-300 dark:bg-slate-600'}`}
        >
            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${checked ? (i18n.language === 'ar' ? '-translate-x-6' : 'translate-x-6') : 'translate-x-0'}`} />
        </button>
    );

    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-start gap-2">
                <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.settings.title')}</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.settings.subtitle')}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-8 text-start">{t('parent.settings.profile')}</h2>

                <div className="flex flex-col md:flex-row items-center justify-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-3xl font-bold shrink-0 relative overflow-hidden">
                        أ
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0">
                        <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-6 py-2 rounded-xl text-sm font-bold transition-colors mb-2">
                            {t('parent.settings.changePhoto')}
                        </button>
                        <span className="text-[10px] text-slate-400">{t('parent.settings.photoLimits')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col items-start w-full">
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.fullName')}</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profileData.fullName}
                            onChange={handleProfileChange}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                        />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.email')}</label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleProfileChange}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                            dir="ltr"
                        />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.country')}</label>
                        <input
                            type="text"
                            name="country"
                            value={profileData.country}
                            onChange={handleProfileChange}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                        />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.phone')}</label>
                        <input
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleProfileChange}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                        />
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100  dark:border-slate-700 mt-6 space-y-4 mx-auto max-w-3xl">

                    <button
                        onClick={() => setIsEmailLinked(!isEmailLinked)}
                        className="w-full flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-xl py-3.5 px-4 transition-all shadow-sm border border-slate-200 dark:border-slate-600"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="font-semibold text-sm">{isEmailLinked ? t('parent.settings.unlinkEmail') : t('parent.settings.linkEmail')}</span>
                    </button>

                    <div className="relative flex items-center py-1">
                        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <button
                        onClick={() => setIsGoogleLinked(!isGoogleLinked)}
                        className="w-full flex items-center justify-center gap-3 bg-[#111111] hover:bg-black dark:bg-[#1a1a1a] dark:hover:bg-black text-white rounded-xl py-3.5 px-4 transition-all shadow-sm border border-slate-800 dark:border-slate-700"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                            <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
                            <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
                            <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
                        </svg>
                        <span className="font-semibold text-sm">{isGoogleLinked ? t('parent.settings.unlinkGoogle') : t('parent.settings.linkGoogle')}</span>
                    </button>
                </div>

                <div className="flex justify-start mt-8">
                    <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto">
                        {t('parent.settings.savePassword')}
                    </button>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">{t('parent.settings.security')}</h2>

                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parent.settings.security')}</h3>

                <div className="space-y-4 mb-6">
                    <div className="flex flex-col items-start w-full">
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.currentPassword')}</label>
                        <input
                            type="password"
                            name="current"
                            value={passwordData.current}
                            onChange={handlePasswordChange}
                            placeholder="••••••••••••••••"
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm text-start"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col items-start w-full order-1 md:order-2">
                            <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.confirmPassword')}</label>
                            <input
                                type="password"
                                name="confirm"
                                value={passwordData.confirm}
                                onChange={handlePasswordChange}
                                placeholder="••••••••••••••••"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm text-start"
                            />
                        </div>
                        <div className="flex flex-col items-start w-full order-2 md:order-1">
                            <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parent.settings.newPassword')}</label>
                            <input
                                type="password"
                                name="new"
                                value={passwordData.new}
                                onChange={handlePasswordChange}
                                placeholder="••••••••••••••••"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm text-start"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-start">
                    <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto">
                        {t('parent.settings.savePassword')}
                    </button>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">{t('parent.settings.language')}</h2>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parent.settings.language')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <button
                        onClick={() => handleLanguageChange('ar')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${i18n.language === 'ar' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                            }`}
                    >
                        <span className="font-bold text-slate-800 dark:text-slate-100">{t('parent.settings.arabic')}</span>
                        <span className="text-[10px] text-slate-500">{t('parent.settings.defaultLang')}</span>
                    </button>

                    <button
                        onClick={() => handleLanguageChange('en')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${i18n.language === 'en' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                            }`}
                    >
                        <span className="font-bold text-slate-800 dark:text-slate-100">{t('parent.settings.english')}</span>
                        <span className="text-[10px] text-slate-500">{t('parent.settings.secondaryLang')}</span>
                    </button>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parent.settings.appearance')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <button
                        onClick={() => setTheme('light')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'light' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                            }`}
                    >
                        <Sun className="w-6 h-6 text-amber-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-100">{t('parent.settings.light')}</span>
                    </button>

                    <button
                        onClick={() => setTheme('dark')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                            }`}
                    >
                        <Moon className="w-6 h-6 text-indigo-400" />
                        <span className="font-bold text-slate-800 dark:text-slate-100">{t('parent.settings.dark')}</span>
                    </button>

                    <button
                        onClick={() => setTheme('auto')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'auto' ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                            }`}
                    >
                        <SettingsIcon className="w-6 h-6 text-slate-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-100">{t('parent.settings.auto')}</span>
                    </button>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parent.settings.displayPreferences')}</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-start">
                            <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parent.settings.showChildrenPhotos')}</span>
                            <span className="text-[10px] text-slate-500">{t('parent.settings.showChildrenPhotosDesc')}</span>
                        </div>
                        <ToggleSwitch checked={preferences.showPhotos} onChange={() => togglePreference('showPhotos')} />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-start">
                            <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parent.settings.showAllChildren')}</span>
                            <span className="text-[10px] text-slate-500">{t('parent.settings.showAllChildrenDesc')}</span>
                        </div>
                        <ToggleSwitch checked={preferences.showAllChildren} onChange={() => togglePreference('showAllChildren')} />
                    </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">{t('parent.settings.privacy')}</h2>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-start">
                            <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parent.settings.shareProgress')}</span>
                            <span className="text-[10px] text-slate-500">{t('parent.settings.shareProgressDesc')}</span>
                        </div>
                        <ToggleSwitch checked={preferences.shareProgress} onChange={() => togglePreference('shareProgress')} />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-start">
                            <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-1">{t('parent.settings.saveActivityLog')}</span>
                            <span className="text-[10px] text-slate-500">{t('parent.settings.saveActivityLogDesc')}</span>
                        </div>
                        <ToggleSwitch checked={preferences.saveActivityLog} onChange={() => togglePreference('saveActivityLog')} />
                    </div>
                </div>

                <div className="flex justify-start">
                    <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto">
                        {t('parent.settings.savePassword')}
                    </button>
                </div>
            </motion.div>

        </motion.div>
    );
}
