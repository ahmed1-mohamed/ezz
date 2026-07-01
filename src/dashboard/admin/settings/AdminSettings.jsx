import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProfileSettingsPanel from './components/ProfileSettingsPanel.jsx';
import PasswordSettingsPanel from './components/PasswordSettingsPanel.jsx';
import LanguageAppearancePanel from './components/LanguageAppearancePanel.jsx';
import PrivacyPreferencesPanel from './components/PrivacyPreferencesPanel.jsx';

export default function AdminSettings() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const [profileDataForPassword, setProfileDataForPassword] = useState({ phone: '', country: '' });

    const [preferences, setPreferences] = useState({
        showPhotos: false,
        showAllChildren: true,
        shareProgress: false,
        saveActivityLog: false
    });

    const togglePreference = (key) => {
        setPreferences({ ...preferences, [key]: !preferences[key] });
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
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-start gap-2 text-start w-full">
                <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parentSettings.title')}</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parentSettings.subtitle')}</p>
            </motion.div>

            <ProfileSettingsPanel
                itemVariants={itemVariants}
                onProfileLoaded={(data) => setProfileDataForPassword({ phone: data.phone, country: data.country })}
            />

            <PasswordSettingsPanel
                itemVariants={itemVariants}
                profilePhone={profileDataForPassword.phone}
                profileCountry={profileDataForPassword.country}
            />

            <LanguageAppearancePanel
                itemVariants={itemVariants}
                preferences={preferences}
                togglePreference={togglePreference}
                isRtl={isRtl}
            />

            <PrivacyPreferencesPanel
                itemVariants={itemVariants}
                preferences={preferences}
                togglePreference={togglePreference}
                isRtl={isRtl}
            />

        </motion.div>
    );
}
