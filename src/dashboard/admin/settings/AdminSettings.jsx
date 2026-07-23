import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { managersApi } from '@/shared/services/api/managersApi.js';
import { SYSTEM_PERMISSIONS } from '@/dashboard/admin/managers/constants';
import ProfileSettingsPanel from './components/ProfileSettingsPanel.jsx';
import PasswordSettingsPanel from './components/PasswordSettingsPanel.jsx';
import LanguageAppearancePanel from './components/LanguageAppearancePanel.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { CheckCircle, Shield, XCircle } from 'lucide-react';

export default function AdminSettings() {
    const { t, i18n } = useTranslation();
    const { user } = useAuth();
    const isRtl = i18n.language === 'ar';
    const isAdmin = user?.role === 'Admin';

    const [profileDataForPassword, setProfileDataForPassword] = useState({ phone: '', country: '' });
    const [adminPermissions, setAdminPermissions] = useState(null);
    const [loadingPermissions, setLoadingPermissions] = useState(false);

    useEffect(() => {
        if (isAdmin && user?.id) {
            const loadPermissions = async () => {
                setLoadingPermissions(true);
                try {
                    const res = await managersApi.fetchPermissions();
                    const allPermissions = res?.data || res || [];
                    const profileRes = await profileApi.fetchProfile();
                    const profileData = profileRes?.data;
                    const userPermissionId = profileData?.permissionId || profileData?.permission?.id || profileData?.permission;
                    if (userPermissionId && Array.isArray(allPermissions)) {
                        const matched = allPermissions.find(p => (p.id || p._id) === userPermissionId);
                        if (matched) {
                            setAdminPermissions(matched);
                        }
                    }
                } catch (err) {
                    console.error('Failed to load admin permissions:', err);
                }
                setLoadingPermissions(false);
            };
            loadPermissions();
        }
    }, [isAdmin, user?.id]);

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

    const renderPermissionsPanel = () => {
        if (!isAdmin) return null;

        const permissionName = adminPermissions
            ? (typeof adminPermissions.name === 'object'
                ? (isRtl ? adminPermissions.name.ar || adminPermissions.name.en : adminPermissions.name.en || adminPermissions.name.ar)
                : adminPermissions.name)
            : '';

        const grantedKeys = new Set();
        if (adminPermissions?.permissions && typeof adminPermissions.permissions === 'object') {
            Object.values(adminPermissions.permissions).forEach(val => {
                if (Array.isArray(val)) {
                    val.forEach(k => grantedKeys.add(k));
                }
            });
        }

        return (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0f7a6c]/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#0f7a6c]" />
                    </div>
                    <div className="text-start">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                            {isRtl ? 'الصلاحيات' : 'Permissions'}
                        </h2>
                        {permissionName && (
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                {isRtl ? `الدور: ${permissionName}` : `Role: ${permissionName}`}
                            </p>
                        )}
                    </div>
                </div>

                {loadingPermissions ? (
                    <div className="flex items-center justify-center py-12">
                        <div className="w-8 h-8 border-3 border-[#0f7a6c] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : !adminPermissions ? (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
                        {isRtl ? 'لا توجد صلاحيات محددة' : 'No permissions assigned'}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {SYSTEM_PERMISSIONS.map((module) => {
                            const hasAnyGranted = module.actions.some(a => grantedKeys.has(a.key));
                            const hasAnyDenied = module.actions.some(a => !grantedKeys.has(a.key));

                            return (
                                <div key={module.module} className="rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900/50">
                                        <span className="font-bold text-sm text-slate-700 dark:text-slate-200">
                                            {isRtl ? module.titleAr : module.titleEn}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            {hasAnyGranted && !hasAnyDenied && (
                                                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
                                                    {isRtl ? 'كامل' : 'Full'}
                                                </span>
                                            )}
                                            {hasAnyGranted && hasAnyDenied && (
                                                <span className="text-[10px] bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full font-semibold">
                                                    {isRtl ? 'جزئي' : 'Partial'}
                                                </span>
                                            )}
                                            {!hasAnyGranted && (
                                                <span className="text-[10px] bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full font-semibold">
                                                    {isRtl ? 'محظور' : 'Denied'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 space-y-2">
                                        {module.actions.map((action) => {
                                            const isGranted = grantedKeys.has(action.key);
                                            return (
                                                <div key={action.key} className="flex items-center gap-2.5">
                                                    {isGranted ? (
                                                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                                    ) : (
                                                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                                                    )}
                                                    <span className={`text-xs ${isGranted ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500 line-through'}`}>
                                                        {isRtl ? action.labelAr : action.labelEn}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </motion.div>
        );
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
            />

            {renderPermissionsPanel()}

        </motion.div>
    );
}
