import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { managersApi } from '@/shared/services/api/managersApi.js';
import { SYSTEM_PERMISSIONS } from '@/dashboard/admin/managers/constants';
import ProfileSettingsPanel from './components/ProfileSettingsPanel.jsx';
import PasswordSettingsPanel from './components/PasswordSettingsPanel.jsx';
import LanguageAppearancePanel from '@/shared/components/LanguageAppearancePanel.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { extractPermissionKeys } from '@/shared/hooks/useAdminPermissions.js';
import { CheckCircle, Shield, XCircle } from 'lucide-react';

export default function AdminSettings() {
    const { t, i18n } = useTranslation();
    const { user } = useAuth();
    const isRtl = i18n.language === 'ar';
    const normalizedRole = String(user?.role || '').toLowerCase();
    const isSuperAdmin = normalizedRole === 'super_admin' || normalizedRole === 'superadmin';
    const isAdmin = !isSuperAdmin;
    const [adminPermissions, setAdminPermissions] = useState(null);
    const [loadingPermissions, setLoadingPermissions] = useState(false);
    useEffect(() => {
        if (isAdmin && !isSuperAdmin) {
            const loadPermissions = async () => {
                setLoadingPermissions(true);
                try {
                    const [res, profileRes] = await Promise.allSettled([
                        managersApi.fetchPermissions(),
                        profileApi.fetchProfile()
                    ]);
                    const rawData = res.status === 'fulfilled' ? (res.value?.data || res.value || []) : [];
                    const allPermissions = Array.isArray(rawData) ? rawData : (Array.isArray(rawData?.data) ? rawData.data : []);
                    const profileData = profileRes.status === 'fulfilled' ? (profileRes.value?.data || profileRes.value) : null;
                    if (profileData?.permission && typeof profileData.permission === 'object' && (profileData.permission.keys || profileData.permission.permissions || profileData.permission.name)) {
                        setAdminPermissions(profileData.permission);
                    } else if (profileData?.permissions && (Array.isArray(profileData.permissions) || typeof profileData.permissions === 'object')) {
                        setAdminPermissions({
                            name: profileData.permission?.name || profileData.name || 'Admin',
                            permissions: profileData.permissions,
                            keys: profileData.keys || profileData.permissions
                        });
                    } else {
                        const userPermissionId = profileData?.permissionId ||
                            profileData?.permission?.id ||
                            profileData?.permission?._id ||
                            (typeof profileData?.permission === 'string' ? profileData.permission : null) ||
                            user?.permissionId ||
                            user?.permission?.id ||
                            user?.permission?._id ||
                            (typeof user?.permission === 'string' ? user.permission : null);
                        if (userPermissionId) {
                            let matched = allPermissions.find(p => String(p.id || p._id) === String(userPermissionId));
                            if (!matched || !matched.keys) {
                                try {
                                    const singleRes = await managersApi.fetchPermissionById(userPermissionId);
                                    const singleData = singleRes?.data || singleRes;
                                    if (singleData && (singleData.keys || singleData.name || singleData.permissions)) {
                                        matched = singleData;
                                    }
                                } catch (e) {
                                    console.warn('Could not fetch single permission details:', e);
                                }
                            }
                            if (matched) {
                                setAdminPermissions(matched);
                            }
                        } else if (user?.permission && typeof user.permission === 'object') {
                            setAdminPermissions(user.permission);
                        } else if (user?.permissions) {
                            setAdminPermissions({
                                name: user.role || 'Admin',
                                permissions: user.permissions,
                                keys: user.permissions
                            });
                        } else if (Array.isArray(allPermissions) && allPermissions.length === 1) {
                            setAdminPermissions(allPermissions[0]);
                        }
                    }
                } catch (err) {
                    console.error('Failed to load admin permissions:', err);
                }
                setLoadingPermissions(false);
            };
            loadPermissions();
        }
    }, [isAdmin, isSuperAdmin, user?.id, user?.permission, user?.permissionId, user?.permissions, user?.role]);
    const handleProfileLoaded = (profileInfo) => {
        if (profileInfo?.permission && typeof profileInfo.permission === 'object') {
            setAdminPermissions(profileInfo.permission);
        } else if (profileInfo?.permissions) {
            setAdminPermissions({
                name: profileInfo.permission?.name || profileInfo.role || 'Admin',
                permissions: profileInfo.permissions,
                keys: profileInfo.permissions
            });
        }
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
    const renderPermissionsPanel = () => {
        if (isSuperAdmin) return null;
        if (!isAdmin) return null;
        const permissionName = adminPermissions
            ? (typeof adminPermissions.name === 'object'
                ? (isRtl ? adminPermissions.name.ar || adminPermissions.name.en : adminPermissions.name.en || adminPermissions.name.ar)
                : adminPermissions.name)
            : (typeof user?.permission?.name === 'object'
                ? (isRtl ? user.permission.name.ar || user.permission.name.en : user.permission.name.en || user.permission.name.ar)
                : (user?.permission?.name || (isRtl ? 'مشرف / مسؤول' : 'Admin / Supervisor')));
        const grantedKeys = extractPermissionKeys(adminPermissions || user?.permissions || user?.permission);
        const isActionGranted = (action) =>
            grantedKeys.has('*') ||
            grantedKeys.has(action.key) ||
            (action.aliases && action.aliases.some(a => grantedKeys.has(a)));
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
                ) : !adminPermissions && grantedKeys.size === 0 ? (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
                        {isRtl ? 'لا توجد صلاحيات محددة' : 'No permissions assigned'}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {SYSTEM_PERMISSIONS.map((module) => {
                            const hasAnyGranted = module.actions.some(a => isActionGranted(a));
                            const hasAnyDenied = module.actions.some(a => !isActionGranted(a));
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
                                            const isGranted = isActionGranted(action);
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
                onProfileLoaded={handleProfileLoaded}
            />
            <PasswordSettingsPanel
                itemVariants={itemVariants}
            />
            <LanguageAppearancePanel
                itemVariants={itemVariants}
            />
            {renderPermissionsPanel()}
        </motion.div>
    );
}
