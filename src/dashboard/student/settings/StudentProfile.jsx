import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Clock,
  Star,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  Hash,
  User,
  Shield,
  Award,
  Crown,
  MapPin,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth';
import { profileApi } from '@/shared/services/api/profileApi';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import { triggerGoogleAuth } from '@/shared/services/googleAuthService';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert';
import Spinner from '@/shared/components/Spinner';

export default function StudentProfile() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const { user, updateUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [isGoogleLinked, setIsGoogleLinked] = useState(false);
  const [linkingGoogle, setLinkingGoogle] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        const [profRes, statsRes] = await Promise.allSettled([
          profileApi.fetchProfile(),
          studentPortalApi.fetchDashboardStatistics(),
        ]);

        if (profRes.status === 'fulfilled' && profRes.value?.success) {
          const p = profRes.value.data;
          setProfileData(p);
          setIsGoogleLinked(Boolean(p?.isGoogleLinked || p?.googleId || p?.provider === 'google'));
        } else if (user) {
          setProfileData(user);
          setIsGoogleLinked(Boolean(user?.isGoogleLinked || user?.googleId || user?.provider === 'google'));
        }

        if (statsRes.status === 'fulfilled') {
          setStatsData(statsRes.value);
        }
      } catch (err) {
        console.warn('Could not load profile:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, [user]);

  const handleToggleGoogleLink = async () => {
    try {
      setLinkingGoogle(true);
      if (isGoogleLinked) {
        await studentPortalApi.unlinkGoogleAccount();
        setIsGoogleLinked(false);
        if (updateUser) updateUser({ ...user, isGoogleLinked: false, googleId: null });
        showSuccessToast(isRtl ? 'تم إلغاء ربط حساب Google بنجاح' : 'Google account unlinked successfully');
      } else {
        const googleAuth = await triggerGoogleAuth();
        await studentPortalApi.linkGoogleAccount({
          googleId: googleAuth.googleId
        });
        setIsGoogleLinked(true);
        if (updateUser) updateUser({ ...user, isGoogleLinked: true, googleId: googleAuth.googleId });
        showSuccessToast(isRtl ? 'تم ربط حساب Google بنجاح' : 'Google account linked successfully');
      }
    } catch (err) {
      if (err?.message?.includes('closed') || err?.message?.includes('cancel')) {
        showErrorToast(isRtl ? 'تم إلغاء العملية بواسطة المستخدم' : 'Process cancelled by user');
      } else {
        showErrorToast(isRtl ? 'حدث خطأ أثناء تحديث ربط Google' : 'Failed to update Google linking');
      }
    } finally {
      setLinkingGoogle(false);
    }
  };

  if (loading && !profileData) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const p = profileData || user || {};
  const studentName = typeof p.name === 'object' && p.name !== null
    ? (isRtl ? p.name.ar || p.name.en : p.name.en || p.name.ar)
    : (p.name || (isRtl ? p.nameAr : p.nameEn) || '');

  const joinDate = p.createdAt
    ? new Date(p.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '-';

  const studentId = p.student_id || p.id || p.studentId || '-';
  const email = p.email || '-';
  const phone = p.phone || '-';
  const country = p.country || '';

  const remainingSessions = statsData?.remainingSessions ?? p.sessionsBalance ?? 0;
  const attendanceRate = statsData?.attendanceRate !== undefined ? `${statsData.attendanceRate}%` : (p.attendanceRate ? `${p.attendanceRate}%` : '0%');
  const avgRating = statsData?.averageRating ? Number(statsData.averageRating).toFixed(1) : (p.averageRating ? Number(p.averageRating).toFixed(1) : '5.0');
  const completedAssignments = statsData?.completedAssignments ?? 0;

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Main Header Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-100 dark:border-slate-700/60 text-center sm:text-start">
            {p.image || p.photoUrl ? (
              <img
                src={p.image || p.photoUrl}
                alt=""
                className="w-20 h-20 rounded-3xl object-cover shrink-0 shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#00695C] to-[#0f7a6c] text-white flex items-center justify-center font-extrabold text-3xl shadow-sm shrink-0">
                {studentName ? studentName.trim().charAt(0) : 'ط'}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                {t('studentDashboard.profile.studentRole', 'حساب طالب')}
              </span>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">
                {studentName}
              </h1>
              {country && (
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1">
                  <MapPin size={12} />
                  <span>{country}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60">
              <Calendar size={16} className="text-[#0f7a6c] shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400">{t('studentDashboard.profile.joinDate', 'تاريخ الانضمام')}</p>
                <p className="font-bold">{joinDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 truncate">
              <Mail size={16} className="text-[#0f7a6c] shrink-0" />
              <div className="truncate">
                <p className="text-[10px] text-slate-400">{t('studentDashboard.profile.email', 'البريد الإلكتروني')}</p>
                <p className="font-bold truncate" dir="ltr">{email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60">
              <Phone size={16} className="text-[#0f7a6c] shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400">{t('studentDashboard.profile.phone', 'رقم الهاتف')}</p>
                <p className="font-bold" dir="ltr">{phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60">
              <Hash size={16} className="text-[#0f7a6c] shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400">{t('studentDashboard.profile.studentId', 'رقم الطالب')}</p>
                <p className="font-bold truncate" dir="ltr">{studentId}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: remainingSessions, label: t('studentDashboard.profile.sessionsBalance', 'رصيد الحصص'), icon: BookOpen, color: 'text-teal-600', bg: 'bg-teal-50 dark:bg-teal-900/20' },
            { value: attendanceRate, label: t('studentDashboard.profile.attendance', 'نسبة الحضور'), icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
            { value: avgRating, label: t('studentDashboard.profile.avgRating', 'متوسط التقييم'), icon: Star, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
            { value: completedAssignments, label: t('studentDashboard.profile.completedHomework', 'واجبات مكتملة'), icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`rounded-3xl p-5 text-center shadow-xs ${item.bg}`}>
                <Icon size={20} className={`${item.color} mx-auto mb-2`} />
                <p className="text-2xl font-black text-slate-800 dark:text-slate-100" dir="ltr">{item.value}</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Linked Accounts Section (Google Account Link / Unlink) */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start space-y-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
              {t('studentDashboard.profile.linkedAccounts', 'ربط الحسابات وتأمين الدخول')}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t('studentDashboard.profile.googleDesc', 'اربط حساب Google لتسجيل الدخول السريع والأمان الإضافي')}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xs border border-slate-200 dark:border-slate-700 shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                  <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
                  <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
                  <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {t('studentDashboard.profile.googleAccount', 'حساب Google')}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`w-2 h-2 rounded-full ${isGoogleLinked ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {isGoogleLinked
                      ? t('studentDashboard.profile.googleLinked', 'الحساب مربوط حالياً')
                      : t('studentDashboard.profile.googleNotLinked', 'الحساب غير مربوط')}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleToggleGoogleLink}
              disabled={linkingGoogle}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 self-start sm:self-auto disabled:opacity-50 ${
                isGoogleLinked
                  ? 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 dark:bg-red-950/30 dark:border-red-900/50 dark:text-red-400'
                  : 'bg-[#111111] hover:bg-black text-white dark:bg-slate-700 dark:hover:bg-slate-600 shadow-sm'
              }`}
            >
              <span>
                {linkingGoogle
                  ? t('common.loading', 'جاري المعالجة...')
                  : isGoogleLinked
                  ? t('studentDashboard.profile.unlinkGoogle', 'إلغاء ربط حساب Google')
                  : t('studentDashboard.profile.linkGoogle', 'ربط حساب Google')}
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
