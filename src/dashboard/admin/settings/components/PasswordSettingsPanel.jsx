import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import Spinner from '@/shared/components/Spinner.jsx';

export default function PasswordSettingsPanel({ itemVariants, profilePhone, profileCountry }) {
    const { t } = useTranslation();

    const [passwordData, setPasswordData] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const [savingPassword, setSavingPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const handleUpdatePassword = async () => {
        if (!passwordData.new) {
            showErrorToast('كلمة المرور الجديدة مطلوبة');
            return;
        }
        if (passwordData.new !== passwordData.confirm) {
            showErrorToast('كلمتا المرور غير متطابقتين');
            return;
        }

        setSavingPassword(true);

        const phone = profilePhone || '';
        const country = profileCountry || '';

        let res;
        if (passwordData.current) {
            res = await profileApi.changePassword({
                currentPassword: passwordData.current,
                password: passwordData.new,
                confirmPassword: passwordData.confirm,
                phone: phone,
                country: country
            });
        } else {
            res = await profileApi.createPassword({
                password: passwordData.new,
                confirmPassword: passwordData.confirm,
                phone: phone,
                country: country
            });
        }

        if (res?.success) {
            showSuccessToast('تم تحديث كلمة المرور بنجاح');
            setPasswordData({ current: '', new: '', confirm: '' });
        } else {
            showErrorToast(res?.error || 'حدث خطأ أثناء تحديث كلمة المرور');
        }
        setSavingPassword(false);
    };

    return (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">{t('parentSettings.security')}</h2>

            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-start text-sm">{t('parentSettings.security')}</h3>

            <div className="space-y-4 mb-6">
                <div className="flex flex-col items-start w-full">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.currentPassword')}</label>
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
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.confirmPassword')}</label>
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
                        <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.newPassword')}</label>
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
                <button
                    onClick={handleUpdatePassword}
                    disabled={savingPassword}
                    className="bg-[#0f7a6c] hover:bg-[#0c6156] disabled:opacity-70 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto min-w-[160px] flex items-center justify-center gap-2"
                >
                    {savingPassword && <Spinner className="w-4 h-4" />}
                    {t('parentSettings.updatePassword')}
                </button>
            </div>
        </motion.div>
    );
}
