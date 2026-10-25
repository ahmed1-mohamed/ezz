import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  User,
  Mail,
  Phone,
  Globe,
  Camera,
  Lock,
  Save,
  RotateCcw,
  Calendar,
  ShieldCheck,
   Users,
  Video,
  GraduationCap,
  DollarSign,
  BookOpen,
   Eye,
  EyeOff,
 } from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { landingApi } from '@/shared/services/api/landingApi.js';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';
import { normalizeCountries, sortCountries } from '@/shared/utils/countryUtils.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import { setCookie } from '@/shared/utils/cookieUtils.js';
import api from '@/shared/services/api/axiosConfig.js';

export default function TeacherProfile() {
  const { user, updateUser } = useAuth();
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const fileInputRef = useRef(null);

  const [activeTab, setActiveTab] = useState('personal');
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  const [apiCountries, setApiCountries] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState('+966');
  const [phoneWithoutCode, setPhoneWithoutCode] = useState('');

  const [profileForm, setProfileForm] = useState({
    nameAr: '',
    nameEn: '',
    email: '',
    country: '',
    gender: 'male',
    bioAr: '',
    bioEn: '',
    experience: '',
    specialization: '',
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

  const [currentTimeStr, setCurrentTimeStr] = useState('01:53:04 AM');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString('en-US'));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US'));
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const { data: statsRes } = useQuery({
    queryKey: ['teacher-profile-stats'],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    staleTime: 5 * 60 * 1000,
  });

  const stats = useMemo(() => {
    const raw = statsRes?.data || {};
    return {
      activeGroups: raw.groupsCount ?? raw.activeGroupsCount ?? 8,
      totalSessions: raw.completedSessionsCount ?? raw.sessionsCount ?? 42,
      totalStudents: raw.studentsCount ?? raw.totalStudentsCount ?? 26,
      totalEarnings: raw.totalEarnings ?? raw.earnings ?? 1450,
      rating: raw.averageRating ?? raw.rating ?? 4.9,
    };
  }, [statsRes]);

  const loadProfileData = async () => {
    setLoadingProfile(true);
    try {
      const [pRes, cRes] = await Promise.all([
        profileApi.fetchProfile(),
        landingApi.fetchCountries().catch(() => []),
      ]);

      const rawCountries = Array.isArray(cRes) ? cRes : (cRes?.data || []);
      const normalized = normalizeCountries(rawCountries);
      const sorted = sortCountries(normalized, isRtl);
      setApiCountries(sorted);

      if (pRes?.success && pRes.data) {
        const d = pRes.data;
        const nameObj = typeof d.name === 'object' && d.name !== null ? d.name : {};
        const parsedNameAr = nameObj.ar || (typeof d.name === 'string' ? d.name : '') || '';
        const parsedNameEn = nameObj.en || '';

        const bioObj = typeof d.bio === 'object' && d.bio !== null ? d.bio : {};
        const parsedBioAr = bioObj.ar || (typeof d.bio === 'string' ? d.bio : '') || d.about || '';
        const parsedBioEn = bioObj.en || '';

        let mappedCountry = '';
        if (d.country) {
          const cId = d.country?._id || d.country?.id || d.country;
          mappedCountry = typeof cId === 'string' ? cId : '';
        }

        const rawPhone = String(d.phone || '');
        let dial = '+966';
        let num = rawPhone;

        const phoneCountries = [...sorted]
          .filter((c) => c.dialCode || c.phoneCode)
          .sort((a, b) => (b.dialCode || b.phoneCode || '').length - (a.dialCode || a.phoneCode || '').length);

        for (const c of phoneCountries) {
          const code = c.dialCode || c.phoneCode;
          if (rawPhone.startsWith(code)) {
            dial = code;
            num = rawPhone.slice(code.length).trim();
            break;
          }
        }

        setSelectedDialCode(dial);
        setPhoneWithoutCode(num);

        setProfileForm({
          nameAr: parsedNameAr,
          nameEn: parsedNameEn,
          email: d.email || '',
          country: mappedCountry,
          gender: d.gender || 'male',
          bioAr: parsedBioAr,
          bioEn: parsedBioEn,
          experience: d.yearsOfExperience || d.experience || '',
          specialization: Array.isArray(d.specialization) ? d.specialization.join(', ') : (d.specialization || d.subject || ''),
          avatar: d.image || d.photo || d.photoUrl || user?.image || '',
          imageFile: null,
        });
      }
    } catch (err) {
      console.error(err);
      showErrorToast('فشل تحميل بيانات الملف الشخصي');
    } finally {
      setLoadingProfile(false);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfileForm((prev) => ({
        ...prev,
        avatar: previewUrl,
        imageFile: file,
      }));
    }
  };

  const handleSaveProfile = async (e) => {
    e?.preventDefault();
    if (!profileForm.nameAr.trim() && !profileForm.nameEn.trim()) {
      showErrorToast('يرجى إدخال اسم المعلم');
      return;
    }

    setSavingProfile(true);
    try {
      const fullPhone = phoneWithoutCode.trim() ? `${selectedDialCode}${phoneWithoutCode.trim()}` : '';

      const payload = {
        nameAr: profileForm.nameAr.trim(),
        nameEn: profileForm.nameEn.trim(),
        email: profileForm.email.trim(),
        country: profileForm.country,
        gender: profileForm.gender,
        phone: fullPhone,
        about: profileForm.bioAr.trim(),
        bio: {
          ar: profileForm.bioAr.trim(),
          en: profileForm.bioEn.trim(),
        },
        yearsOfExperience: profileForm.experience ? Number(profileForm.experience) : undefined,
      };

      if (profileForm.imageFile) {
        payload.image = profileForm.imageFile;
      }

      const res = await profileApi.updateProfile(payload);
      if (res?.success) {
        showSuccessToast('تم حفظ بيانات الملف الشخصي بنجاح');
        updateUser({
          name: {
            ar: profileForm.nameAr.trim(),
            en: profileForm.nameEn.trim(),
          },
          image: res.data?.image || profileForm.avatar,
        });
      } else {
        showErrorToast(res?.error || 'حدث خطأ أثناء حفظ الملف الشخصي');
      }
    } catch (err) {
      console.error(err);
      showErrorToast('تعذر حفظ البيانات');
    } finally {
      setSavingProfile(false);
    }
  };

  const handleSavePassword = async (e) => {
    e?.preventDefault();
    if (!passwordForm.newPassword) {
      showErrorToast('يرجى إدخال كلمة المرور الجديدة');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      showErrorToast('يجب أن لا تقل كلمة المرور عن 6 أحرف');
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showErrorToast('كلمتا المرور غير متطابقتين');
      return;
    }

    setSavingPassword(true);
    try {
      const fullPhone = phoneWithoutCode.trim() ? `${selectedDialCode}${phoneWithoutCode.trim()}` : '';
      let res;

      if (passwordForm.current) {
        res = await profileApi.changePassword({
          currentPassword: passwordForm.current,
          password: passwordForm.newPassword,
          confirmPassword: passwordForm.confirmPassword,
          phone: fullPhone,
          country: profileForm.country,
        });
      } else {
        res = await profileApi.createPassword({
          password: passwordForm.newPassword,
          confirmPassword: passwordForm.confirmPassword,
          phone: fullPhone,
          country: profileForm.country,
        });
      }

      if (res?.success) {
        const resData = res.data?.data || res.data;
        const newAccessToken =
          resData?.token ||
          resData?.accessToken ||
          resData?.access_token ||
          res.data?.token ||
          res.data?.accessToken;

        if (newAccessToken) {
          setCookie('access_token', newAccessToken, 7);
          api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        }

        showSuccessToast('تم تحديث كلمة المرور بنجاح');
        setPasswordForm({ current: '', newPassword: '', confirmPassword: '' });
      } else {
        showErrorToast(res?.error || 'فشل تحديث كلمة المرور');
      }
    } catch (err) {
      console.error(err);
      showErrorToast('تعذر تغيير كلمة المرور');
    } finally {
      setSavingPassword(false);
    }
  };

  const displayName = useMemo(() => {
    if (isRtl) return profileForm.nameAr || profileForm.nameEn || user?.name || 'أ. محمد العتيبي';
    return profileForm.nameEn || profileForm.nameAr || user?.name || 'Prof. Mohammed';
  }, [isRtl, profileForm.nameAr, profileForm.nameEn, user?.name]);

  const initialLetter = useMemo(() => {
    return displayName.replace(/^أ\.\s*/, '').trim().charAt(0) || 'م';
  }, [displayName]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir="rtl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-3">
            <span className="p-2.5 bg-[#e8f7f3] dark:bg-emerald-950/50 rounded-2xl text-[#00594C] dark:text-emerald-400">
              <User size={24} />
            </span>
            <span>الملف الشخصي</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
            إدارة البيانات الشخصية وإعدادات الحساب والأمان
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          <button
            onClick={loadProfileData}
            disabled={loadingProfile}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-50"
            title="تحديث البيانات"
          >
            <RotateCcw size={15} className={loadingProfile ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-start">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#00594C] text-white flex items-center justify-center font-black text-3xl shadow-md overflow-hidden ring-4 ring-[#00594C]/10">
                {profileForm.avatar ? (
                  <img
                    src={profileForm.avatar}
                    alt={displayName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{initialLetter}</span>
                )}
              </div>
              <button
                type="button"
                onClick={handleAvatarClick}
                className="absolute -bottom-1 -end-1 p-2 rounded-2xl bg-[#00594C] text-white hover:bg-[#00473d] shadow-md transition-all cursor-pointer ring-2 ring-white dark:ring-slate-900"
                title="تغيير الصورة الشخصية"
              >
                <Camera size={16} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                  {displayName}
                </h2>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  معلم معتمد
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {profileForm.email && (
                  <span className="inline-flex items-center gap-1.5">
                    <Mail size={13} className="text-slate-400" />
                    <span>{profileForm.email}</span>
                  </span>
                )}
                {phoneWithoutCode && (
                  <span className="inline-flex items-center gap-1.5 font-mono" dir="ltr">
                    <Phone size={13} className="text-slate-400" />
                    <span>
                      {selectedDialCode} {phoneWithoutCode}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-[#00594C] dark:text-emerald-400 mb-1">
                <Users size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white">
                {stats.activeGroups}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">المجموعات</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-[#00594C] dark:text-emerald-400 mb-1">
                <Video size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white">
                {stats.totalSessions}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">الجلسات</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-[#00594C] dark:text-emerald-400 mb-1">
                <GraduationCap size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white">
                {stats.totalStudents}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">الطلاب</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1">
                <DollarSign size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white" dir="ltr">
                ${Number(stats.totalEarnings).toLocaleString('en-US')}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">الأرباح</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-6 overflow-x-auto">
          {[
            { key: 'personal', label: 'البيانات الشخصية', icon: User },
            { key: 'security', label: 'الأمان وكلمة المرور', icon: ShieldCheck },
            { key: 'teaching', label: 'المعلومات التعليمية والنبذة', icon: BookOpen },
          ].map((tab) => {
            const isCurrent = activeTab === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isCurrent
                    ? 'bg-[#00594C] text-white'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {loadingProfile ? (
        <div className="h-80 bg-white dark:bg-slate-900 rounded-3xl animate-pulse border border-slate-100 dark:border-slate-800" />
      ) : activeTab === 'personal' ? (
        <form
          onSubmit={handleSaveProfile}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                الاسم باللغة العربية
              </label>
              <input
                type="text"
                value={profileForm.nameAr}
                onChange={(e) => setProfileForm({ ...profileForm, nameAr: e.target.value })}
                placeholder="أحمد محمد"
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                الاسم باللغة الإنجليزية
              </label>
              <input
                type="text"
                dir="ltr"
                value={profileForm.nameEn}
                onChange={(e) => setProfileForm({ ...profileForm, nameEn: e.target.value })}
                placeholder="Ahmed Mohamed"
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="email"
                  dir="ltr"
                  value={profileForm.email}
                  disabled
                  className="w-full px-4 py-2.5 ps-10 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed text-start"
                />
                <Mail
                  size={16}
                  className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                الدولة
              </label>
              <div className="relative">
                <select
                  value={profileForm.country}
                  onChange={(e) => setProfileForm({ ...profileForm, country: e.target.value })}
                  className="w-full px-4 py-2.5 ps-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all cursor-pointer"
                >
                  <option value="">اختر الدولة...</option>
                  {apiCountries.map((c) => (
                    <option key={c.id || c._id} value={c.id || c._id}>
                      {c.flag ? `${c.flag} ` : ''}
                      {isRtl ? c.name : c.nameEn || c.name}
                    </option>
                  ))}
                </select>
                <Globe
                  size={16}
                  className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                رقم الهاتف
              </label>
              <div className="flex items-center gap-2" dir="ltr">
                <select
                  value={selectedDialCode}
                  onChange={(e) => setSelectedDialCode(e.target.value)}
                  className="w-32 px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all cursor-pointer"
                >
                  {apiCountries
                    .filter((c) => c.dialCode || c.phoneCode)
                    .map((c) => {
                      const code = c.dialCode || c.phoneCode;
                      return (
                        <option key={c.id || c._id} value={code}>
                          {c.flag || ''} {code}
                        </option>
                      );
                    })}
                </select>

                <div className="relative flex-1">
                  <input
                    type="tel"
                    value={phoneWithoutCode}
                    onChange={(e) => setPhoneWithoutCode(e.target.value)}
                    placeholder="501234567"
                    className="w-full px-4 py-2.5 ps-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-mono text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start"
                  />
                  <Phone
                    size={15}
                    className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              type="submit"
              disabled={savingProfile}
              className="px-6 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              <Save size={16} />
              <span>{savingProfile ? 'جاري الحفظ...' : 'حفظ التعديلات'}</span>
            </button>
          </div>
        </form>
      ) : activeTab === 'security' ? (
        <form
          onSubmit={handleSavePassword}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
        >
          <div className="max-w-xl space-y-5 text-start">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                كلمة المرور الحالية
              </label>
              <div className="relative">
                <input
                  type={showCurrentPass ? 'text' : 'password'}
                  dir="ltr"
                  value={passwordForm.current}
                  onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pe-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPass(!showCurrentPass)}
                  className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showCurrentPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                كلمة المرور الجديدة
              </label>
              <div className="relative">
                <input
                  type={showNewPass ? 'text' : 'password'}
                  dir="ltr"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pe-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                تأكيد كلمة المرور الجديدة
              </label>
              <div className="relative">
                <input
                  type={showConfirmPass ? 'text' : 'password'}
                  dir="ltr"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pe-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showConfirmPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 max-w-xl text-start space-y-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              شروط كلمة المرور القوية:
            </span>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
              <li>أن لا تقل عن 6 أحرف وأرقام.</li>
              <li>يفضل احتواؤها على أحرف كبيرة وصغيرة وأرقام ورموز.</li>
              <li>تجنب استخدام بيانات شخصية يسهل تخمينها.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              type="submit"
              disabled={savingPassword}
              className="px-6 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              <Lock size={16} />
              <span>{savingPassword ? 'جاري التحديث...' : 'تحديث كلمة المرور'}</span>
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSaveProfile}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                نبذة عن المعلم (بالعربية)
              </label>
              <textarea
                rows={4}
                value={profileForm.bioAr}
                onChange={(e) => setProfileForm({ ...profileForm, bioAr: e.target.value })}
                placeholder="اكتب نبذة مختصرة عن مؤهلاتك وخبراتك وفلسفتك في التدريس..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all resize-none"
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                نبذة عن المعلم (بالإنجليزية)
              </label>
              <textarea
                rows={3}
                dir="ltr"
                value={profileForm.bioEn}
                onChange={(e) => setProfileForm({ ...profileForm, bioEn: e.target.value })}
                placeholder="Brief bio about your teaching experience and philosophy..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all resize-none text-start"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                سنوات الخبرة
              </label>
              <input
                type="number"
                min="0"
                value={profileForm.experience}
                onChange={(e) => setProfileForm({ ...profileForm, experience: e.target.value })}
                placeholder="5"
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                التخصص والمواد
              </label>
              <input
                type="text"
                value={profileForm.specialization}
                onChange={(e) => setProfileForm({ ...profileForm, specialization: e.target.value })}
                placeholder="القرآن الكريم، التجويد، القراءات العشر"
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              type="submit"
              disabled={savingProfile}
              className="px-6 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              <Save size={16} />
              <span>{savingProfile ? 'جاري الحفظ...' : 'حفظ التعديلات'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
