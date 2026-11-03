import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Globe,
  Phone,
  Camera,
  Lock,
  Eye,
  EyeOff,
  Save,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { fetchCountries } from '@/shared/utils/countryUtils.js';
import { triggerGoogleAuth } from '@/shared/services/googleAuthService.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import LanguageAppearancePanel from '@/shared/components/LanguageAppearancePanel.jsx';
import Spinner from '@/shared/components/Spinner.jsx';

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const DEFAULT_DIAL_CODE = '+966';
const MIN_PASSWORD_LENGTH = 6;

function parseDialCodeAndPhone(rawPhone, countryList = []) {
  if (!rawPhone) return { dialCode: DEFAULT_DIAL_CODE, phoneVal: '' };
  const cleaned = String(rawPhone).trim();
  for (const c of countryList) {
    const dial = c.dialCode || c.phoneCode;
    if (dial && cleaned.startsWith(dial)) {
      return {
        dialCode: dial,
        phoneVal: cleaned.slice(dial.length).replace(/^0+/, ''),
      };
    }
  }
  if (cleaned.startsWith('+')) {
    const match = cleaned.match(/^(\+\d{1,4})(.*)$/);
    if (match) {
      return { dialCode: match[1], phoneVal: match[2].replace(/^0+/, '') };
    }
  }
  return { dialCode: DEFAULT_DIAL_CODE, phoneVal: cleaned.replace(/^0+/, '') };
}

export default function ParentSettings() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const { user, updateUser } = useAuth();
  const fileInputRef = useRef(null);

  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [isLinkingGoogle, setIsLinkingGoogle] = useState(false);
  const [isGoogleLinked, setIsGoogleLinked] = useState(false);

  const [apiCountries, setApiCountries] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState(DEFAULT_DIAL_CODE);
  const [phoneWithoutCode, setPhoneWithoutCode] = useState('');

  const [profileForm, setProfileForm] = useState({
    nameAr: '',
    nameEn: '',
    email: '',
    country: '',
    avatar: '',
    imageFile: null,
  });

  const [passwordForm, setPasswordForm] = useState({
    current: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadProfileData() {
      try {
        setIsLoadingProfile(true);
        const [profRes, countriesRes] = await Promise.allSettled([
          profileApi.fetchProfile(),
          fetchCountries(),
        ]);
        const loadedCountries = countriesRes.status === 'fulfilled' && Array.isArray(countriesRes.value)
          ? countriesRes.value
          : [];
        if (isMounted) {
          setApiCountries(loadedCountries);
        }
        let activeProfile = user || {};
        if (profRes.status === 'fulfilled' && profRes.value?.success) {
          activeProfile = profRes.value.data || user || {};
        }
        if (isMounted) {
          const rawName = activeProfile.name;
          const parsedAr = typeof rawName === 'object' && rawName !== null
            ? (rawName.ar || '')
            : (activeProfile.nameAr || rawName || '');
          const parsedEn = typeof rawName === 'object' && rawName !== null
            ? (rawName.en || '')
            : (activeProfile.nameEn || '');
          const parsedPhone = parseDialCodeAndPhone(activeProfile.phone, loadedCountries);
          setSelectedDialCode(parsedPhone.dialCode);
          setPhoneWithoutCode(parsedPhone.phoneVal);
          setProfileForm({
            nameAr: parsedAr,
            nameEn: parsedEn,
            email: activeProfile.email || '',
            country: activeProfile.country || activeProfile.countryId || '',
            avatar: activeProfile.image || activeProfile.avatar || activeProfile.photoUrl || '',
            imageFile: null,
          });
          setIsGoogleLinked(Boolean(activeProfile.isGoogleLinked || activeProfile.googleId || activeProfile.provider === 'google'));
        }
      } catch (err) {
        console.error('Error loading parent profile:', err);
      } finally {
        if (isMounted) {
          setIsLoadingProfile(false);
        }
      }
    }
    loadProfileData();
    return () => {
      isMounted = false;
    };
  }, [user]);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      showErrorToast(isRtl ? 'حجم الصورة يجب ألا يتجاوز 5 ميجابايت' : 'Image size must not exceed 5MB');
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setProfileForm((prev) => ({
      ...prev,
      avatar: previewUrl,
      imageFile: file,
    }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const primaryName = (profileForm.nameAr || profileForm.nameEn || '').trim();
    if (!primaryName) {
      showErrorToast(isRtl ? 'يرجى إدخال اسم ولي الأمر' : 'Please enter parent name');
      return;
    }
    try {
      setIsSavingProfile(true);
      const cleanPhone = String(phoneWithoutCode || '').trim().replace(/^0+/, '');
      const fullPhone = cleanPhone ? `${selectedDialCode}${cleanPhone}` : '';
      const payload = {
        name: primaryName,
        nameAr: profileForm.nameAr.trim() || primaryName,
        nameEn: profileForm.nameEn.trim() || primaryName,
        phone: fullPhone,
        country: profileForm.country,
      };
      if (profileForm.imageFile) {
        payload.image = profileForm.imageFile;
      }
      const res = await profileApi.updateProfile(payload);
      if (res?.success) {
        showSuccessToast(t('common.successMessage', 'تم حفظ التعديلات بنجاح!'));
        const updated = res.data || {};
        const savedImage = updated.image || profileForm.avatar;
        if (updateUser) {
          updateUser({
            ...user,
            name: {
              ar: payload.nameAr,
              en: payload.nameEn,
            },
            nameAr: payload.nameAr,
            nameEn: payload.nameEn,
            image: savedImage,
            phone: fullPhone,
            country: profileForm.country,
          });
        }
      } else {
        showErrorToast(res?.error || t('common.errorMessage', 'حدث خطأ أثناء حفظ التعديلات'));
      }
    } catch (err) {
      console.error('Error saving parent profile:', err);
      showErrorToast(t('common.errorMessage', 'حدث خطأ أثناء حفظ التعديلات'));
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (!passwordForm.newPassword) {
      showErrorToast(isRtl ? 'يرجى إدخال كلمة المرور الجديدة' : 'Please enter new password');
      return;
    }
    if (passwordForm.newPassword.length < MIN_PASSWORD_LENGTH) {
      showErrorToast(isRtl ? 'كلمة المرور يجب ألا تقل عن 6 أحرف' : 'Password must be at least 6 characters');
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showErrorToast(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
      return;
    }
    try {
      setIsSavingPassword(true);
      const res = await profileApi.changePassword({
        currentPassword: passwordForm.current,
        password: passwordForm.newPassword,
        confirmPassword: passwordForm.confirmPassword,
      });
      if (res?.success) {
        showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!');
        setPasswordForm({
          current: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        showErrorToast(res?.error || (isRtl ? 'تعذر تحديث كلمة المرور' : 'Failed to update password'));
      }
    } catch (err) {
      console.error('Error changing password:', err);
      showErrorToast(isRtl ? 'حدث خطأ أثناء تغيير كلمة المرور' : 'Error changing password');
    } finally {
      setIsSavingPassword(false);
    }
  };

  const handleToggleGoogleLink = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setIsLinkingGoogle(true);
      if (isGoogleLinked) {
        await profileApi.unlinkGoogleAccount();
        setIsGoogleLinked(false);
        if (updateUser) {
          updateUser({ ...user, isGoogleLinked: false, googleId: null });
        }
        showSuccessToast(isRtl ? 'تم إلغاء ربط حساب Google بنجاح' : 'Google account unlinked successfully');
      } else {
        const googleAuth = await triggerGoogleAuth();
        await profileApi.linkGoogleAccount({
          googleId: googleAuth.googleId,
        });
        setIsGoogleLinked(true);
        if (updateUser) {
          updateUser({ ...user, isGoogleLinked: true, googleId: googleAuth.googleId });
        }
        showSuccessToast(isRtl ? 'تم ربط حساب Google بنجاح' : 'Google account linked successfully');
      }
    } catch (err) {
      if (err?.message?.includes('closed') || err?.message?.includes('cancel')) {
        showErrorToast(isRtl ? 'تم إلغاء العملية بواسطة المستخدم' : 'Process cancelled by user');
      } else {
        showErrorToast(isRtl ? 'حدث خطأ أثناء تحديث ربط Google' : 'Failed to update Google link');
      }
    } finally {
      setIsLinkingGoogle(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  if (isLoadingProfile) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const displayName = profileForm.nameAr || profileForm.nameEn || t('parentDashboard.user.name', 'ولي الأمر');
  const avatarLetter = (displayName.charAt(0) || 'أ').toUpperCase();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Header Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4 text-start">
          <div className="w-14 h-14 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <User className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-800 dark:text-white">
                {t('parentSettings.title', 'الملف الشخصي والإعدادات')}
              </h1>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400 border border-[#0f7a6c]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('parentDashboard.user.role', 'ولي أمر')}</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('parentSettings.subtitle', 'إدارة وتحديث معلومات حسابك وتفاصيل التواصل وكلمة المرور')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Personal Profile Form Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800"
      >
        <h2 className="text-lg font-black text-slate-800 dark:text-white mb-6 text-start flex items-center gap-2">
          <User className="w-5 h-5 text-[#0f7a6c]" />
          <span>{t('parentSettings.profile', 'البيانات الشخصية')}</span>
        </h2>

        {/* Avatar Upload Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 mb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="relative group">
            <div className="w-24 h-24 rounded-3xl bg-[#0f7a6c] text-white flex items-center justify-center text-3xl font-black shadow-md overflow-hidden border-4 border-white dark:border-slate-800 shrink-0">
              {profileForm.avatar ? (
                <img
                  src={profileForm.avatar}
                  alt={displayName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{avatarLetter}</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-1.5 -end-1.5 w-8 h-8 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
              title={t('parentSettings.changePhoto', 'تغيير الصورة')}
            >
              <Camera className="w-4 h-4" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-start space-y-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{t('parentSettings.changePhoto', 'تغيير الصورة الشخصية')}</span>
              </button>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              {t('parentSettings.photoLimit', 'الحد الأقصى 5 ميجابايت (JPG أو PNG أو WebP)')}
            </p>
          </div>
        </div>

        {/* Profile Form Fields */}
        <form onSubmit={handleSaveProfile} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
            {/* Arabic Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {isRtl ? 'الاسم باللغة العربية' : 'Full Name (Arabic)'}
              </label>
              <input
                type="text"
                value={profileForm.nameAr}
                onChange={(e) => setProfileForm({ ...profileForm, nameAr: e.target.value })}
                placeholder="أحمد محمد"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all"
              />
            </div>

            {/* English Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {isRtl ? 'الاسم باللغة الإنجليزية' : 'Full Name (English)'}
              </label>
              <input
                type="text"
                dir="ltr"
                value={profileForm.nameEn}
                onChange={(e) => setProfileForm({ ...profileForm, nameEn: e.target.value })}
                placeholder="Ahmed Mohamed"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all text-start"
              />
            </div>

            {/* Email (Read Only) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('parentSettings.email', 'البريد الإلكتروني')}
              </label>
              <div className="relative">
                <input
                  type="email"
                  dir="ltr"
                  value={profileForm.email}
                  disabled
                  className="w-full px-4 py-3 ps-10 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed text-start"
                />
                <Mail className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Country Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('parentSettings.country', 'الدولة')}
              </label>
              <div className="relative">
                <select
                  value={profileForm.country}
                  onChange={(e) => setProfileForm({ ...profileForm, country: e.target.value })}
                  className="w-full px-4 py-3 ps-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all cursor-pointer"
                >
                  <option value="">{t('common.selectCountry', 'اختر الدولة...')}</option>
                  {apiCountries.map((c) => (
                    <option key={c.id || c._id} value={c.id || c._id || c.name}>
                      {c.flag ? `${c.flag} ` : ''}
                      {isRtl ? c.name : c.nameEn || c.name}
                    </option>
                  ))}
                </select>
                <Globe className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Phone Number with Dial Code */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('parentSettings.phone', 'رقم الهاتف')}
              </label>
              <div className="flex items-center gap-2" dir="ltr">
                <select
                  value={selectedDialCode}
                  onChange={(e) => setSelectedDialCode(e.target.value)}
                  className="px-3 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all cursor-pointer shrink-0"
                >
                  {apiCountries.map((c) => (
                    <option key={c.id || c._id} value={c.dialCode || DEFAULT_DIAL_CODE}>
                      {c.dialCode || DEFAULT_DIAL_CODE} {c.flag ? c.flag : ''}
                    </option>
                  ))}
                </select>

                <div className="relative flex-1">
                  <input
                    type="tel"
                    dir="ltr"
                    value={phoneWithoutCode}
                    onChange={(e) => setPhoneWithoutCode(e.target.value)}
                    placeholder="1012345678"
                    className="w-full px-4 py-3 ps-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all text-start"
                  />
                  <Phone className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Linked Google Account Section */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-start">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-xs shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                    <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
                    <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
                    <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                    {t('parentSettings.linkedAccounts', 'حساب Google')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {isGoogleLinked
                      ? (isRtl ? 'حساب Google متصل حالياً بحسابك' : 'Google account is currently linked')
                      : (isRtl ? 'اربط حساب Google لتسجيل الدخول السريع' : 'Link Google account for one-click login')}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleToggleGoogleLink}
                disabled={isLinkingGoogle}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer ${
                  isGoogleLinked
                    ? 'bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900'
                    : 'bg-[#111] hover:bg-black text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                }`}
              >
                {isGoogleLinked ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{isLinkingGoogle ? '...' : t('parentSettings.unlinkGoogle', 'إلغاء ربط Google')}</span>
                  </>
                ) : (
                  <span>{isLinkingGoogle ? '...' : t('parentSettings.linkGoogle', 'ربط حساب Google')}</span>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSavingProfile}
              className="px-8 py-3 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSavingProfile ? (isRtl ? 'جاري الحفظ...' : 'Saving...') : t('parentSettings.saveChanges', 'حفظ التغييرات')}</span>
            </button>
          </div>
        </form>
      </motion.div>

      {/* Security & Password Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800"
      >
        <h2 className="text-lg font-black text-slate-800 dark:text-white mb-2 text-start flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#0f7a6c]" />
          <span>{t('parentSettings.security', 'الأمان وكلمة المرور')}</span>
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 text-start">
          {isRtl ? 'تحديث كلمة المرور الحالية لحماية وتأمين حسابك' : 'Update your password to keep your account safe'}
        </p>

        <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-3xl text-start">
          {/* Current Password */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {t('parentSettings.currentPassword', 'كلمة المرور الحالية')}
            </label>
            <div className="relative">
              <input
                type={showCurrentPass ? 'text' : 'password'}
                dir="ltr"
                value={passwordForm.current}
                onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 pe-11 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all text-start"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPass(!showCurrentPass)}
                className="absolute top-1/2 -translate-y-1/2 end-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                {showCurrentPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* New Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('parentSettings.newPassword', 'كلمة المرور الجديدة')}
              </label>
              <div className="relative">
                <input
                  type={showNewPass ? 'text' : 'password'}
                  dir="ltr"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 pe-11 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all text-start"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="absolute top-1/2 -translate-y-1/2 end-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('parentSettings.confirmPassword', 'تأكيد كلمة المرور')}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPass ? 'text' : 'password'}
                  dir="ltr"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 pe-11 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all text-start"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute top-1/2 -translate-y-1/2 end-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {showConfirmPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSavingPassword}
              className="px-8 py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{isSavingPassword ? (isRtl ? 'جاري التحديث...' : 'Updating...') : t('parentSettings.updatePassword', 'تحديث كلمة المرور')}</span>
            </button>
          </div>
        </form>
      </motion.div>

      {/* Language & Appearance Preferences Panel */}
      <LanguageAppearancePanel itemVariants={itemVariants} />
    </motion.div>
  );
}
