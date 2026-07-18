import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { landingApi } from '@/shared/services/api/landingApi.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import Spinner from '@/shared/components/Spinner.jsx';
import { Loader2 } from 'lucide-react';

export default function ProfileSettingsPanel({ itemVariants, onProfileLoaded }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const { user, updateUser } = useAuth();

    const displayUserName = user?.name
        ? (typeof user.name === 'string'
            ? user.name
            : (user.name.ar || user.name.en || Object.values(user.name)[0] || ''))
        : '';

    const [profileData, setProfileData] = useState({
        email: user?.email || '',
        fullName: displayUserName || '',
        country: '',
        avatar: user?.image || user?.photoUrl || user?.photo || ''
    });

    const [loadingProfile, setLoadingProfile] = useState(true);
    const [savingProfile, setSavingProfile] = useState(false);
    const [apiCountries, setApiCountries] = useState([]);

    const [selectedCountryCode, setSelectedCountryCode] = useState({ code: '+20', flag: '🇪🇬', name: 'Egypt' });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [phoneVal, setPhoneVal] = useState('');



    useEffect(() => {
        const loadProfile = async () => {
            setLoadingProfile(true);
            const [res, countriesRes] = await Promise.all([
                profileApi.fetchProfile(),
                landingApi.fetchCountries().catch(() => [])
            ]);

            const fetchedCountries = Array.isArray(countriesRes) ? countriesRes : (countriesRes?.data || []);
            const sortedCountries = [...fetchedCountries].sort((a, b) => {
                const nameA = (a.name || a.nameEn || '').toLowerCase();
                const nameB = (b.name || b.nameEn || '').toLowerCase();
                return nameA.localeCompare(nameB, 'ar');
            });
            setApiCountries(sortedCountries);

            if (res?.success && res.data) {
                const nameData = res.data.name;
                const parsedName = typeof nameData === 'string'
                    ? nameData
                    : (nameData?.ar || nameData?.en || '');

                let mappedCountry = '';
                if (res.data.country) {
                    const sCountryId = res.data.country?._id || res.data.country?.id || res.data.country;
                    if (typeof sCountryId === 'string' && sCountryId.length !== 24) {
                        const cleanStr = sCountryId.trim();
                        const found = fetchedCountries.find(c => {
                            const cName = (c.name || '').trim();
                            const cNameEn = (c.nameEn || '').trim();
                            const cFlag = (c.flag || '').trim();
                            return (cName && cleanStr.includes(cName)) || (cNameEn && cleanStr.toLowerCase().includes(cNameEn.toLowerCase())) || (cFlag && cleanStr.includes(cFlag));
                        });
                        mappedCountry = found?._id || found?.id || '';
                    } else {
                        mappedCountry = sCountryId || '';
                    }
                }

                setProfileData(prev => ({
                    ...prev,
                    email: res.data.email || '',
                    fullName: parsedName,
                    country: mappedCountry,
                    avatar: res.data.image || res.data.photoUrl || res.data.photo || prev.avatar
                }));

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
                } else if (mappedCountry) {
                    const countryByMapping = fetchedCountries.find(c => (c.id || c._id) === mappedCountry);
                    if (countryByMapping) {
                        setSelectedCountryCode({ code: countryByMapping.phoneCode, flag: countryByMapping.flag, name: countryByMapping.name });
                    }
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
        const val = e.target.value;
        setProfileData({ ...profileData, [e.target.name]: val });
        if (e.target.name === 'country') {
            const matched = apiCountries.find(c => (c.id || c._id) === val);
            if (matched) {
                setSelectedCountryCode({ code: matched.phoneCode, flag: matched.flag, name: matched.name });
            }
        }
    };

    const handleSaveProfile = async () => {
        setSavingProfile(true);
        const fullPhone = phoneVal ? `${selectedCountryCode.code} ${phoneVal.trim()}` : '';
        const payload = {
            name: profileData.fullName,
            country: profileData.country,
            phone: fullPhone
        };
        if (profileData.imageFile) {
            payload.image = profileData.imageFile;
        }

        const res = await profileApi.updateProfile(payload);
        if (res?.success) {
            showSuccessToast('تم تحديث الملف الشخصي بنجاح');
            updateUser({ name: profileData.fullName, image: res.data?.image || profileData.avatar });
            if (onProfileLoaded) {
                onProfileLoaded({ phone: fullPhone, country: profileData.country, image: res.data?.image });
            }
        } else {
            showErrorToast(res?.error || 'حدث خطأ أثناء التحديث');
        }
        setSavingProfile(false);
    };

    const userInitial = profileData.fullName ? profileData.fullName.trim().charAt(0) : 'أ';
    const fileInputRef = useRef(null);

    const handlePhotoClick = () => {
        fileInputRef.current?.click();
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const tempUrl = URL.createObjectURL(file);
            setProfileData(prev => ({
                ...prev,
                avatar: tempUrl,
                imageFile: file
            }));
        }
    };

    if (loadingProfile) {
        return (
            <div className="flex h-[40vh] items-center justify-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <Spinner />
            </div>
        );
    }
    console.log("profileData", profileData);

    return (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-8 text-start">{t('parentSettings.profile')}</h2>

            <div className="flex flex-col md:flex-row items-center justify-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-3xl font-bold shrink-0 relative overflow-hidden shadow-sm">
                    {profileData.avatar ? (
                        <img src={profileData.avatar} alt="Profile Avatar" className="w-full h-full object-cover" />
                    ) : (
                        userInitial
                    )}
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0">
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handlePhotoChange} 
                        accept="image/jpeg, image/png, image/webp" 
                        className="hidden" 
                    />
                    <button 
                        type="button"
                        onClick={handlePhotoClick}
                        className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-6 py-2 rounded-xl text-sm font-bold transition-colors mb-2 cursor-pointer"
                    >
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
                        readOnly
                        disabled
                        className="w-full bg-slate-100 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500 rounded-xl py-3.5 px-4 outline-none text-sm font-medium text-start cursor-not-allowed"
                        dir="ltr"
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2 text-start">{t('parentSettings.country')}</label>
                    <select
                        name="country"
                        required
                        value={profileData.country || ''}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium text-start"
                    >
                        <option value="" disabled>{isRtl ? 'اختر الدولة' : 'Select Country'}</option>
                        {apiCountries.map(c => (
                            <option key={c.id || c._id} value={c.id || c._id}>
                                {c.flag ? `${c.flag} ` : ''}{c.name}
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
                                                setProfileData(prev => ({ ...prev, country: country.id || country._id }));
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
                            onChange={(e) => {
                                const val = e.target.value;
                                if (val.startsWith('+')) {
                                    const normalizedInput = val.replace(/\+/g, '').trim();
                                    const matched = apiCountries
                                        .map(c => ({ ...c, normCode: String(c.phoneCode || c.code || '').replace(/\+/g, '').trim() }))
                                        .filter(c => c.normCode)
                                        .sort((a, b) => b.normCode.length - a.normCode.length)
                                        .find(c => normalizedInput.startsWith(c.normCode));

                                    if (matched) {
                                        setSelectedCountryCode({ code: matched.phoneCode, flag: matched.flag, name: matched.name });
                                        setProfileData(prev => ({ ...prev, country: matched.id || matched._id }));
                                        let remaining = val.substring(1).substring(matched.normCode.length).trim();
                                        setPhoneVal(remaining);
                                        return;
                                    }
                                }
                                setPhoneVal(val);
                            }}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 focus:border-[#0f7a6c]/50 text-slate-600 dark:text-slate-300 rounded-xl py-3.5 px-4 outline-none transition-shadow text-sm"
                            placeholder="01012345678"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-3 block text-start">
                    {isRtl ? 'الحسابات المرتبطة' : 'Linked Accounts'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => setProfileData(prev => ({ ...prev, isGoogleLinked: !prev.isGoogleLinked }))}
                        className="w-full flex items-center justify-center gap-3 bg-[#111111] hover:bg-black dark:bg-[#1a1a1a] dark:hover:bg-black text-white rounded-xl py-3.5 px-4 transition-all shadow-sm border border-slate-800 dark:border-slate-700"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                            <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
                            <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
                            <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
                        </svg>
                        <span className="font-semibold text-sm">
                            {profileData.isGoogleLinked 
                                ? (isRtl ? 'إلغاء ربط جوجل' : 'Unlink Google') 
                                : (isRtl ? 'ربط حساب جوجل' : 'Link Google')}
                        </span>
                    </button>
                </div>
            </div>

            <div className="flex justify-start mt-8">
                <button
                    onClick={handleSaveProfile}
                    disabled={savingProfile}
                    className="bg-[#0f7a6c] hover:bg-[#0c6156] disabled:opacity-70 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm w-full md:w-auto min-w-[160px] flex items-center justify-center gap-2"
                >
                    {savingProfile && <Loader2 className="w-4 h-4 animate-spin" />}
                    {t('parentSettings.saveChanges')}
                </button>
            </div>
        </motion.div>
    );
}
