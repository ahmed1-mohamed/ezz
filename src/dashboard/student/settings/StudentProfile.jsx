import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi.js';
import { currenciesApi, parseExchangeRateData } from '@/shared/services/api/currenciesApi.js';
import { fetchCountries, getCountryName } from '@/shared/utils/countryUtils.js';
import { setCookie } from '@/shared/utils/cookieUtils.js';
import api from '@/shared/services/api/axiosConfig.js';
import { triggerGoogleAuth } from '@/shared/services/googleAuthService.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';
import Spinner from '@/shared/components/Spinner.jsx';
import LanguageAppearancePanel from '@/shared/components/LanguageAppearancePanel.jsx';
import StudentProfileHeader from './components/StudentProfileHeader.jsx';
import StudentSessionBalanceCard from './components/StudentSessionBalanceCard.jsx';
import StudentSubscriptionCard from './components/StudentSubscriptionCard.jsx';
import StudentParentCard from './components/StudentParentCard.jsx';
import StudentEditProfileForm from './components/StudentEditProfileForm.jsx';
import StudentLinkedAccountsCard from './components/StudentLinkedAccountsCard.jsx';
import StudentPasswordCard from './components/StudentPasswordCard.jsx';

function calculateAge(birthDate) {
  if (!birthDate) return null;
  const dob = new Date(birthDate);
  if (Number.isNaN(dob.getTime())) return null;
  const diffMs = Date.now() - dob.getTime();
  const ageDate = new Date(diffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function parseCountryDialCodeAndPhone(rawPhone, countryList = []) {
  if (!rawPhone) return { dialCode: '+966', phoneVal: '' };
  const cleaned = String(rawPhone).trim();
  for (const c of countryList) {
    const dial = c.dialCode || c.code;
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
  return { dialCode: '+966', phoneVal: cleaned.replace(/^0+/, '') };
}

function resolveStudentCountry(rawCountry, dialCode, countriesList = []) {
  if (!Array.isArray(countriesList) || countriesList.length === 0) return '';
  if (typeof rawCountry === 'object' && rawCountry !== null) {
    const objId = rawCountry.id || rawCountry._id;
    if (objId) {
      const match = countriesList.find((c) => (c.id || c._id) === objId);
      if (match) return match.id || match._id;
    }
    const objName = rawCountry.name || rawCountry.nameAr || rawCountry.nameEn || '';
    if (objName) {
      const match = countriesList.find((c) => {
        const cn = (c.name || '').trim();
        const ce = (c.nameEn || '').trim().toLowerCase();
        const cf = (c.flag || '').trim();
        return (cn && (objName.includes(cn) || cn.includes(objName))) ||
          (ce && (objName.toLowerCase().includes(ce) || ce.includes(objName.toLowerCase()))) ||
          (cf && objName.includes(cf));
      });
      if (match) return match.id || match._id;
    }
  }
  const cleanStr = String(rawCountry || '').trim();
  if (cleanStr) {
    const directMatch = countriesList.find((c) => (c.id || c._id) === cleanStr);
    if (directMatch) return directMatch.id || directMatch._id;
    const codeMatch = countriesList.find((c) => (c.code || '').toUpperCase() === cleanStr.toUpperCase());
    if (codeMatch) return codeMatch.id || codeMatch._id;
    const nameMatch = countriesList.find((c) => {
      const cn = (c.name || '').trim();
      const ce = (c.nameEn || '').trim().toLowerCase();
      const cf = (c.flag || '').trim();
      return (cn && (cleanStr.includes(cn) || cn.includes(cleanStr))) ||
        (ce && (cleanStr.toLowerCase().includes(ce) || ce.includes(cleanStr.toLowerCase()))) ||
        (cf && cleanStr.includes(cf));
    });
    if (nameMatch) return nameMatch.id || nameMatch._id;
  }
  if (dialCode) {
    const cleanDial = String(dialCode).trim();
    const dialMatch = countriesList.find((c) => (c.dialCode || c.phoneCode || c.code) === cleanDial);
    if (dialMatch) return dialMatch.id || dialMatch._id;
  }
  return '';
}

export default function StudentProfile() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [currencyInfo, setCurrencyInfo] = useState({ symbol: '$', exchangeRate: 1 });
  const [countriesList, setCountriesList] = useState([]);
  const [isGoogleLinked, setIsGoogleLinked] = useState(false);
  const [isLinkingGoogle, setIsLinkingGoogle] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    phone: '',
    countryDialCode: '+966',
    country: '',
    birthDate: '',
    imageFile: null,
  });
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [profRes, statsRes, countriesRes, currencyRes, evalRes] = await Promise.allSettled([
          profileApi.fetchProfile(),
          studentPortalApi.fetchDashboardStatistics(),
          fetchCountries(),
          currenciesApi.fetchExchangeRate(),
          studentPortalApi.fetchEvaluations({ limit: 1 }),
        ]);
        let activeProfile = user || {};
        if (profRes.status === 'fulfilled' && profRes.value?.success) {
          activeProfile = profRes.value.data || user || {};
          setProfileData(activeProfile);
          setIsGoogleLinked(Boolean(activeProfile?.isGoogleLinked || activeProfile?.googleId || activeProfile?.provider === 'google'));
        } else if (user) {
          setProfileData(user);
          setIsGoogleLinked(Boolean(user?.isGoogleLinked || user?.googleId || user?.provider === 'google'));
        }
        if (statsRes.status === 'fulfilled') {
          const statsValue = statsRes.value || {};
          // Merge evaluations total count into statsData if not already present
          if (evalRes.status === 'fulfilled' && !statsValue.totalEvaluations) {
            const evalData = evalRes.value;
            const evalTotal =
              evalData?.pagination?.total ??
              evalData?.pagination?.totalItems ??
              evalData?.total ??
              evalData?.data?.length ??
              null;
            if (evalTotal !== null) statsValue.totalEvaluations = evalTotal;
          }
          setStatsData(statsValue);
        } else if (evalRes.status === 'fulfilled') {
          // Stats failed but evaluations succeeded — still extract count
          const evalData = evalRes.value;
          const evalTotal =
            evalData?.pagination?.total ??
            evalData?.pagination?.totalItems ??
            evalData?.total ??
            evalData?.data?.length ??
            null;
          if (evalTotal !== null) setStatsData({ totalEvaluations: evalTotal });
        }
        if (currencyRes.status === 'fulfilled') {
          const parsed = parseExchangeRateData(currencyRes.value);
          setCurrencyInfo(parsed);
        }
        const loadedCountries = countriesRes.status === 'fulfilled' ? countriesRes.value : [];
        setCountriesList(loadedCountries);
        const nameAr = typeof activeProfile.name === 'object' && activeProfile.name !== null
          ? activeProfile.name.ar || ''
          : activeProfile.nameAr || activeProfile.name || '';
        const nameEn = typeof activeProfile.name === 'object' && activeProfile.name !== null
          ? activeProfile.name.en || ''
          : activeProfile.nameEn || '';
        const parsed = parseCountryDialCodeAndPhone(activeProfile.phone, loadedCountries);
        const rawDob = activeProfile.birthDate || activeProfile.dateOfBirth || '';
        const formattedDob = rawDob ? String(rawDob).slice(0, 10) : '';
        const resolvedCountryId = resolveStudentCountry(
          activeProfile.country || activeProfile.countryAr || activeProfile.countryEn || activeProfile.countryCode,
          parsed.dialCode,
          loadedCountries
        );
        setFormData({
          name: nameAr,
          nameEn: nameEn,
          phone: parsed.phoneVal,
          countryDialCode: parsed.dialCode,
          country: resolvedCountryId,
          birthDate: formattedDob,
          imageFile: null,
        });
      } catch (err) {
        console.error('Error loading student profile data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [user]);
  const p = profileData || user || {};
  const age = useMemo(() => {
    if (p.age !== undefined && p.age !== null) return p.age;
    const dateStr = formData.birthDate || p.birthDate || p.dateOfBirth;
    return calculateAge(dateStr);
  }, [p.age, p.birthDate, p.dateOfBirth, formData.birthDate]);
  const countryName = useMemo(() => {
    const cIdOrName = formData.country || p.country;
    if (!cIdOrName) return '';
    const match = countriesList.find((c) =>
      (c.id || c._id) === cIdOrName ||
      c.name === cIdOrName ||
      c.nameEn === cIdOrName ||
      (c.code && c.code.toUpperCase() === String(cIdOrName).toUpperCase())
    );
    if (match) {
      const name = getCountryName(match, isRtl);
      return match.flag ? `${match.flag} ${name}` : name;
    }
    return typeof cIdOrName === 'object' ? getCountryName(cIdOrName, isRtl) : String(cIdOrName);
  }, [formData.country, p.country, countriesList, isRtl]);
  const birthDateFormatted = useMemo(() => {
    const raw = formData.birthDate || p.birthDate || p.dateOfBirth;
    if (!raw) return '';
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return String(raw);
    return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [formData.birthDate, p.birthDate, p.dateOfBirth, isRtl]);
  const academicLevel = useMemo(() => {
    return p.level || p.grade || p.studentLevel || t('teacherCurricula.intermediate', 'متوسط');
  }, [p.level, p.grade, p.studentLevel, t]);
  const attendanceRate = statsData?.attendanceRate !== undefined ? `${statsData.attendanceRate}%` : p.attendanceRate !== undefined ? `${p.attendanceRate}%` : '94%';
  const averageRating = statsData?.averageRating ? Number(statsData.averageRating).toFixed(1) : p.averageRating ? Number(p.averageRating).toFixed(1) : '4.9';
  const totalEvaluations = profileData?.totalEvaluations ?? p.evaluationsCount ?? p.totalReviews ?? p.ratingsCount ?? 0;
  const sessionBalanceData = useMemo(() => {
    if (p.sessionsBalance || p.sessionBalance) {
      return p.sessionsBalance || p.sessionBalance;
    }
    const rem = statsData?.remainingSessions ?? 14;
    return {
      remaining: rem,
      used: 28,
      total: 42,
      manualAddedThisMonth: 0,
    };
  }, [p.sessionsBalance, p.sessionBalance, statsData?.remainingSessions]);
  const subscriptionData = useMemo(() => {
    if (p.lastSubscription) return p.lastSubscription;
    if (p.subscription) return p.subscription;
    return {
      name: isRtl ? 'باقة التميز المتكاملة' : 'Integrated Excellence Package',
      price: 450,
      sessionsCount: 16,
      subscribedAt: '2026-10-01',
      expiresAt: '2026-12-01',
    };
  }, [p.lastSubscription, p.subscription, isRtl]);
  const parentData = useMemo(() => {
    if (p.parent) return p.parent;
    if (p.guardian) return p.guardian;
    return {
      name: isRtl ? 'أحمد محمد علي' : 'Ahmed Mohammed Ali',
      phone: '+966 50 123 4567',
      email: 'parent@example.com',
    };
  }, [p.parent, p.guardian, isRtl]);
  function handleFormChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }
  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imageFile: file }));
      const tempUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, image: tempUrl, photoUrl: tempUrl }));
    }
  }
  async function handleSaveProfile(e) {
    e.preventDefault();
    try {
      setIsSavingProfile(true);
      const cleanPhone = String(formData.phone || '').trim().replace(/^0+/, '');
      const fullPhone = `${formData.countryDialCode}${cleanPhone}`;
      const payload = {
        nameAr: formData.name.trim(),
        nameEn: formData.nameEn.trim(),
        phone: fullPhone,
        country: formData.country,
        birthDate: formData.birthDate,
      };
      if (formData.imageFile) {
        payload.image = formData.imageFile;
      }
      const res = await profileApi.updateProfile(payload);
      if (res?.success) {
        showSuccessToast(t('studentDashboard.profile.profileUpdatedSuccess', 'تم تحديث البيانات الشخصية بنجاح'));
        const updated = res.data || {};
        setProfileData((prev) => ({
          ...prev,
          ...updated,
          name: {
            ar: formData.name.trim(),
            en: formData.nameEn.trim(),
          },
          country: formData.country,
          phone: fullPhone,
          birthDate: formData.birthDate,
        }));
        if (updateUser) {
          updateUser({
            ...user,
            name: {
              ar: formData.name.trim(),
              en: formData.nameEn.trim(),
            },
            country: formData.country,
            phone: fullPhone,
            image: updated.image || profileData?.image,
          });
        }
      } else {
        showErrorToast(res?.error || t('studentDashboard.profile.profileUpdateFailed', 'تعذر تحديث البيانات الشخصية'));
      }
    } catch (err) {
      console.error(err);
      showErrorToast(t('studentDashboard.profile.profileUpdateFailed', 'تعذر تحديث البيانات الشخصية'));
    } finally {
      setIsSavingProfile(false);
    }
  }
  async function handleToggleGoogleLink() {
    try {
      setIsLinkingGoogle(true);
      if (isGoogleLinked) {
        await studentPortalApi.unlinkGoogleAccount();
        setIsGoogleLinked(false);
        if (updateUser) updateUser({ ...user, isGoogleLinked: false, googleId: null });
        showSuccessToast(isRtl ? 'تم إلغاء ربط حساب Google بنجاح' : 'Google account unlinked successfully');
      } else {
        const googleAuth = await triggerGoogleAuth();
        await studentPortalApi.linkGoogleAccount({
          googleId: googleAuth.googleId,
        });
        setIsGoogleLinked(true);
        if (updateUser) updateUser({ ...user, isGoogleLinked: true, googleId: googleAuth.googleId });
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
  }
  async function handleSavePassword({ currentPassword, newPassword, confirmPassword, clearFields }) {
    if (!newPassword) {
      showErrorToast(t('studentDashboard.profile.fillRequired', 'يرجى إدخال كلمة المرور الجديدة'));
      return;
    }
    if (newPassword.length < 6) {
      showErrorToast(t('studentDashboard.profile.reqMinLength', 'يجب أن لا تقل كلمة المرور عن 6 أحرف'));
      return;
    }
    if (newPassword !== confirmPassword) {
      showErrorToast(t('studentDashboard.profile.passwordsDoNotMatch', 'كلمة المرور وتأكيدها غير متطابقين'));
      return;
    }
    try {
      setIsChangingPassword(true);
      const res = await profileApi.changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      });
      if (res?.success) {
        const resData = res.data?.data || res.data;
        const newAccessToken =
          resData?.token ||
          resData?.accessToken ||
          resData?.access_token ||
          res.data?.token ||
          res.data?.accessToken ||
          res.data?.access_token;
        const newRefreshToken =
          resData?.refreshToken ||
          resData?.refresh_token ||
          res.data?.refreshToken ||
          res.data?.refresh_token;
        if (newAccessToken) {
          setCookie('access_token', newAccessToken, 7);
          try {
            localStorage.setItem('access_token', newAccessToken);
          } catch (e) {
            void e;
          }
          if (api?.defaults?.headers?.common) {
            api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          }
        }
        if (newRefreshToken) {
          setCookie('refresh_token', newRefreshToken, 7);
          try {
            localStorage.setItem('refresh_token', newRefreshToken);
          } catch (e) {
            void e;
          }
        }
        showSuccessToast(t('studentDashboard.profile.passwordUpdatedSuccess', 'تم تحديث كلمة المرور بنجاح'));
        if (clearFields) clearFields();
      } else {
        showErrorToast(res?.error || t('common.errorOccurred', 'حدث خطأ أثناء تحديث كلمة المرور'));
      }
    } catch (err) {
      console.error(err);
      showErrorToast(t('common.errorOccurred', 'تعذر تحديث كلمة المرور'));
    } finally {
      setIsChangingPassword(false);
    }
  }
  if (loading && !profileData) {
    return (
      <div className="min-h-screen bg-[#edf4f2] dark:bg-slate-950 p-4 sm:p-6 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#edf4f2] dark:bg-slate-950 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-6"
      >
        <StudentProfileHeader
          student={p}
          age={age}
          countryName={countryName}
          birthDateFormatted={birthDateFormatted}
          attendanceRate={attendanceRate}
          averageRating={averageRating}
          totalEvaluations={totalEvaluations}
          academicLevel={academicLevel}
          onImageChange={handleImageChange}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <StudentSessionBalanceCard sessionBalance={sessionBalanceData} />
          <StudentSubscriptionCard subscription={subscriptionData} currencyInfo={currencyInfo} />
        </div>
        <StudentParentCard parent={parentData} />
        <StudentEditProfileForm
          formData={formData}
          onFormChange={handleFormChange}
          countryCodes={countriesList}
          countries={countriesList}
          academicLevel={academicLevel}
          email={p.email || '-'}
          onSubmit={handleSaveProfile}
          isSaving={isSavingProfile}
        />
        <StudentLinkedAccountsCard
          isGoogleLinked={isGoogleLinked}
          isLinkingGoogle={isLinkingGoogle}
          onToggleGoogleLink={handleToggleGoogleLink}
        />
        <StudentPasswordCard
          onSavePassword={handleSavePassword}
          isChangingPassword={isChangingPassword}
        />
        <LanguageAppearancePanel />
      </motion.div>
    </div>
  );
}
