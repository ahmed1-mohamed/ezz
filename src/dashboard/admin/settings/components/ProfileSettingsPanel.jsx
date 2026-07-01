import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { landingApi } from '@/shared/services/api/landingApi.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import Spinner from '@/shared/components/Spinner.jsx';

export default function ProfileSettingsPanel({ itemVariants, onProfileLoaded }) {
    const { t } = useTranslation();
    const { user } = useAuth();

    const displayUserName = user?.name
        ? (typeof user.name === 'string'
            ? user.name
            : (user.name.ar || user.name.en || Object.values(user.name)[0] || ''))
        : '';

    const [profileData, setProfileData] = useState({
        username: user?.username || '',
        email: user?.email || '',
        fullName: displayUserName || '',
        country: 'مصر'
    });

    const [loadingProfile, setLoadingProfile] = useState(true);
    const [savingProfile, setSavingProfile] = useState(false);
    const [apiCountries, setApiCountries] = useState([]);

    const [selectedCountryCode, setSelectedCountryCode] = useState({ code: '+20', flag: '🇪🇬', name: 'Egypt' });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [phoneVal, setPhoneVal] = useState('');

    const [isGoogleLinked, setIsGoogleLinked] = useState(false);
    const [isEmailLinked, setIsEmailLinked] = useState(false);

    useEffect(() => {
        const loadProfile = async () => {
            setLoadingProfile(true);
            const [res, countriesRes] = await Promise.all([
                profileApi.fetchProfile(),
                landingApi.fetchCountries().catch(() => [])
            ]);

            const fetchedCountries = Array.isArray(countriesRes) ? countriesRes : (countriesRes?.data || []);
            setApiCountries(fetchedCountries);

            if (res?.success && res.data) {
                const nameData = res.data.name;
                const parsedName = typeof nameData === 'string'
                    ? nameData
                    : (nameData?.ar || nameData?.en || '');

                let mappedCountry = '';
                if (res.data.country) {
                    if (typeof res.data.country === 'object') {
                        mappedCountry = res.data.country.id || res.data.country._id;
                    } else if (typeof res.data.country === 'string') {
                        mappedCountry = res.data.country;
                        if (!mappedCountry.match(/^[0-9a-fA-F]{24}$/)) {
                            const c = fetchedCountries.find(c => c.name === mappedCountry || c.nameEn === mappedCountry);
                            if (c) mappedCountry = c.id || c._id;
                        }
                    }
                }

                setProfileData({
                    username: res.data.username || user?.username || '',
                    email: res.data.email || '',
                    fullName: parsedName,
                    country: mappedCountry
                });

                const phoneData = res.data.phone || '';

                const sortedCountries = [...fetchedCountries].filter(c => c.phoneCode).sort((a, b) => b.phoneCode.length - a.phoneCode.length);
                let matchedPrefix = '+20';
                let matchedCountry = null;

                for (const c of sortedCountries) {
                    if (phoneData.startsWith(c.phoneCode)) {
                        matchedPrefix = c.phoneCode;
                        matchedCountry = c;
                        break;
                    }
                }

                let phoneValueOnly = phoneData;
                if (phoneData.includes(' ')) {
                    phoneValueOnly = phoneData.split(' ').slice(1).join(' ');
                } else if (matchedCountry) {
                    phoneValueOnly = phoneData.substring(matchedPrefix.length).trim();
                }

                setPhoneVal(phoneValueOnly);

                if (matchedCountry) {
                    setSelectedCountryCode({ code: matchedCountry.phoneCode, flag: matchedCountry.flag, name: matchedCountry.name });
                }

                if (onProfileLoaded) {
                    onProfileLoaded({ phone: phoneData, country: mappedCountry });
                }
            }
            setLoadingProfile(false);
        };
        loadProfile();
    }, []);

    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = async () => {
        setSavingProfile(true);
        const fullPhone = phoneVal ? `${selectedCountryCode.code} ${phoneVal.trim()}` : '';
        const res = await profileApi.updateProfile({
            name: profileData.fullName,
            email: profileData.email,
            username: profileData.username,
            country: profileData.country,
            phone: fullPhone
        });
        if (res?.success) {
            showSuccessToast('تم تحديث الملف الشخصي بنجاح');
        } else {
            showErrorToast(res?.error || 'حدث خطأ أثناء التحديث');
        }
        setSavingProfile(false);
    };

    const userInitial = profileData.fullName ? profileData.fullName.trim().charAt(0) : 'أ';

    return (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-8 text-start">{t('parentSettings.profile')}</h2>

            <div className="flex flex-col md:flex-row items-center justify-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-3xl font-bold shrink-0 relative overflow-hidden">
                    {userInitial}
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0">
                    <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-6 py-2 rounded-xl text-sm font-bold transition-colors mb-2">
                        {t('parentSettings.changePhoto')}
                    </button>
                    <span className="text-[10px] text-slate-400">{t('parentSettings.photoLimit')}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-start w-full">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.fullName')}</label>
                    <input
                        type="text"
                        name="fullName"
                        value={profileData.fullName}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.email')}</label>
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
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">اسم المستخدم (Username)</label>
                    <input
                        type="text"
                        name="username"
                        value={profileData.username}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                        dir="ltr"
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.country')}</label>
                    <select
                        name="country"
                        value={profileData.country}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                    >
                        <option value="">اختر الدولة</option>
                        {apiCountries.map(c => (
                            <option key={c.id || c._id} value={c.id || c._id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.phone')}</label>
                    <div className="flex gap-3 w-full" dir="ltr">
                        <div className="relative shrink-0">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="h-12 flex items-center justify-center gap-2 px-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 rounded-xl transition-all text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer"
                            >
                                <span>{selectedCountryCode.flag}</span>
                                <span>({selectedCountryCode.code})</span>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 z-10 w-44 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden animate-fadeIn">
                                    {apiCountries.map((country) => (
                                        <button
                                            key={country.id || country._id}
                                            type="button"
                                            onClick={() => {
                                                setSelectedCountryCode({ code: country.phoneCode, flag: country.flag, name: country.name });
                                                setIsDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-colors text-left"
                                        >
                                            <span>{country.flag}</span>
                                            <span className="font-semibold">{country.phoneCode}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input
                            type="tel"
                            value={phoneVal}
                            onChange={(e) => setPhoneVal(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 focus:border-[#0f7a6c]/50 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 outline-none transition-shadow text-sm"
                            placeholder="01012345678"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-700 mt-6 space-y-4 mx-auto max-w-3xl">
                <button
                    onClick={() => setIsEmailLinked(!isEmailLinked)}
                    className="w-full flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-xl py-3.5 px-4 transition-all shadow-sm border border-slate-200 dark:border-slate-600"
                >
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold text-sm">{isEmailLinked ? t('parentSettings.unlinkEmail') : t('parentSettings.linkEmail')}</span>
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
                    <span className="font-semibold text-sm">{isGoogleLinked ? t('parentSettings.unlinkGoogle') : t('parentSettings.linkGoogle')}</span>
                </button>
            </div>

            <div className="flex justify-start mt-8">
                <button
                    onClick={handleSaveProfile}
                    disabled={savingProfile}
                    className="bg-[#0f7a6c] hover:bg-[#0c6156] disabled:opacity-70 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto flex items-center justify-center gap-2"
                >
                    {savingProfile && <Spinner className="w-4 h-4" />}
                    {t('parentSettings.saveChanges')}
                </button>
            </div>
        </motion.div>
    );
}
