import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { User, ShieldCheck, BookOpen } from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { landingApi } from '@/shared/services/api/landingApi.js';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';
import { normalizeCountries, sortCountries } from '@/shared/utils/countryUtils.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import { setCookie } from '@/shared/utils/cookieUtils.js';
import api from '@/shared/services/api/axiosConfig.js';

import TeacherProfileHeader from './components/TeacherProfileHeader.jsx';
import TeacherPersonalInfoCard from './components/TeacherPersonalInfoCard.jsx';
import TeacherPasswordCard from './components/TeacherPasswordCard.jsx';
import TeacherTeachingInfoCard from './components/TeacherTeachingInfoCard.jsx';

export default function TeacherProfile() {
  const { user, updateUser } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const fileInputRef = useRef(null);

  const [activeTab, setActiveTab] = useState('personal');
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const handleReload = () => {
    setLoadingProfile(true);
    setReloadTrigger((prev) => prev + 1);
  };

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

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-SA-u-ca-islamic-umalqura' : 'en-US-u-ca-islamic-umalqura',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(isRtl ? 'الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ' : "Wednesday, 5 Dhu al-Qi'dah 1447 AH");
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
      activeGroups: raw.groupsCount ?? raw.activeGroupsCount ?? 0,
      totalSessions: raw.completedSessionsCount ?? raw.sessionsCount ?? 0,
      totalStudents: raw.studentsCount ?? raw.totalStudentsCount ?? 0,
      totalEarnings: raw.totalEarnings ?? raw.earnings ?? 0,
      rating: raw.averageRating ?? raw.rating ?? 0,
    };
  }, [statsRes]);

  useEffect(() => {
    let isMounted = true;
    const loadProfileData = async () => {
      try {
        const [pRes, cRes] = await Promise.all([
          profileApi.fetchProfile(),
          landingApi.fetchCountries().catch(() => []),
        ]);

        const rawCountries = Array.isArray(cRes) ? cRes : (cRes?.data || []);
        const normalized = normalizeCountries(rawCountries);
        const sorted = sortCountries(normalized, isRtl);
        if (isMounted) {
          setApiCountries(sorted);
        }

        if (pRes?.success && pRes.data && isMounted) {
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
        if (isMounted) {
          showErrorToast(t('common.errorLoadingProfile', 'فشل تحميل بيانات الملف الشخصي'));
        }
      } finally {
        if (isMounted) {
          setLoadingProfile(false);
        }
      }
    };

    loadProfileData();
    return () => { isMounted = false; };
  }, [isRtl, user, reloadTrigger, t]);

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
      showErrorToast(t('teacherProfilePage.fillRequired', 'يرجى إدخال اسم المعلم'));
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
        showSuccessToast(t('teacherProfilePage.profileUpdated', 'تم حفظ بيانات الملف الشخصي بنجاح'));
        updateUser({
          name: {
            ar: profileForm.nameAr.trim(),
            en: profileForm.nameEn.trim(),
          },
          image: res.data?.image || profileForm.avatar,
        });
      } else {
        showErrorToast(res?.error || t('common.errorOccurred', 'حدث خطأ أثناء حفظ الملف الشخصي'));
      }
    } catch (err) {
      console.error(err);
      showErrorToast(t('common.errorOccurred', 'تعذر حفظ البيانات'));
    } finally {
      setSavingProfile(false);
    }
  };

  const handleSavePassword = async (e) => {
    e?.preventDefault();
    if (!passwordForm.newPassword) {
      showErrorToast(t('teacherProfilePage.fillRequired', 'يرجى إدخال كلمة المرور الجديدة'));
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      showErrorToast(t('teacherProfilePage.req1', 'يجب أن لا تقل كلمة المرور عن 6 أحرف'));
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showErrorToast(t('teacherProfilePage.passwordMismatch', 'كلمتا المرور غير متطابقتين'));
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

        showSuccessToast(t('teacherProfilePage.passwordUpdated', 'تم تحديث كلمة المرور بنجاح'));
        setPasswordForm({ current: '', newPassword: '', confirmPassword: '' });
      } else {
        showErrorToast(res?.error || t('common.errorOccurred', 'فشل تحديث كلمة المرور'));
      }
    } catch (err) {
      console.error(err);
      showErrorToast(t('common.errorOccurred', 'تعذر تغيير كلمة المرور'));
    } finally {
      setSavingPassword(false);
    }
  };

  const displayName = useMemo(() => {
    if (isRtl) return profileForm.nameAr || profileForm.nameEn || user?.name || t('common.teacher', 'معلم');
    return profileForm.nameEn || profileForm.nameAr || user?.name || t('common.teacher', 'Teacher');
  }, [isRtl, profileForm.nameAr, profileForm.nameEn, user?.name, t]);

  const initialLetter = useMemo(() => {
    return displayName.replace(/^أ\.\s*/, '').trim().charAt(0) || 'م';
  }, [displayName]);

  const tabs = useMemo(() => [
    { key: 'personal', label: t('teacherProfilePage.personalInfo', 'البيانات الشخصية'), icon: User },
    { key: 'security', label: t('teacherProfilePage.security', 'الأمان وكلمة المرور'), icon: ShieldCheck },
    { key: 'teaching', label: t('teacherProfilePage.stats', 'المعلومات التعليمية والنبذة'), icon: BookOpen },
  ], [t]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherProfileHeader
        t={t}
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
        loadingProfile={loadingProfile}
        onReload={handleReload}
        displayName={displayName}
        initialLetter={initialLetter}
        avatarUrl={profileForm.avatar}
        onAvatarClick={handleAvatarClick}
        fileInputRef={fileInputRef}
        onAvatarChange={handleAvatarChange}
        email={profileForm.email}
        phoneWithoutCode={phoneWithoutCode}
        selectedDialCode={selectedDialCode}
        stats={stats}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      {loadingProfile ? (
        <div className="h-80 bg-white dark:bg-slate-900 rounded-3xl animate-pulse border border-slate-100 dark:border-slate-800" />
      ) : activeTab === 'personal' ? (
        <TeacherPersonalInfoCard
          t={t}
          isRtl={isRtl}
          profileForm={profileForm}
          setProfileForm={setProfileForm}
          apiCountries={apiCountries}
          selectedDialCode={selectedDialCode}
          setSelectedDialCode={setSelectedDialCode}
          phoneWithoutCode={phoneWithoutCode}
          setPhoneWithoutCode={setPhoneWithoutCode}
          savingProfile={savingProfile}
          onSave={handleSaveProfile}
        />
      ) : activeTab === 'security' ? (
        <TeacherPasswordCard
          t={t}
          passwordForm={passwordForm}
          setPasswordForm={setPasswordForm}
          showCurrentPass={showCurrentPass}
          setShowCurrentPass={setShowCurrentPass}
          showNewPass={showNewPass}
          setShowNewPass={setShowNewPass}
          showConfirmPass={showConfirmPass}
          setShowConfirmPass={setShowConfirmPass}
          savingPassword={savingPassword}
          onSavePassword={handleSavePassword}
        />
      ) : (
        <TeacherTeachingInfoCard
          t={t}
          profileForm={profileForm}
          setProfileForm={setProfileForm}
          savingProfile={savingProfile}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}
