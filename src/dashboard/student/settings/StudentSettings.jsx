import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sun, Moon, Settings as SettingsIcon, Mail, Lock, User, Globe, BookOpen, Save } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../../i18n.js';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi.js';
import { triggerGoogleAuth } from '@/shared/services/googleAuthService.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';

const STORAGE_KEY = 'studentSettings';

const defaultProfile = {
  fullName: 'محمد أحمد',
  email: 'student@eduplatform.com',
  phone: '+0201012345678',
  grade: 'المستوى الأول',
};

const defaultPassword = { current: '', newPass: '', confirm: '' };

const defaultPreferences = {
  showAchievements: true,
  shareProgressWithTeacher: true,
  receiveReminders: true,
  saveActivityLog: false,
};

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveToStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function ToggleSwitch({ checked, onChange, isRtl }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors shrink-0 ${checked ? 'bg-[#0f7a6c]' : 'bg-slate-300 dark:bg-slate-600'}`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${checked
          ? isRtl ? '-translate-x-6' : 'translate-x-6'
          : 'translate-x-0'
          }`}
      />
    </button>
  );
}

function SectionCard({ children, className = '' }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}
      className={`bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center shrink-0">
        <Icon size={16} className="text-[#0f7a6c] dark:text-emerald-400" />
      </div>
      <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">{label}</h2>
    </div>
  );
}

function FieldInput({ label, type = 'text', name, value, onChange, dir }) {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        dir={dir}
        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow text-sm font-medium"
      />
    </div>
  );
}

function SaveButton({ label, onClick }) {
  return (
    <div className="flex justify-start mt-6">
      <button
        type="button"
        onClick={onClick}
        className="flex items-center justify-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-[0.98] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-sm h-auto"
      >
        <Save size={15} className="shrink-0" />
        {label}
      </button>
    </div>
  );
}

function PreferenceRow({ label, desc, checked, onChange, isRtl }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700 gap-4">
      <div className="text-start flex-1 min-w-0">
        <span className="font-bold text-slate-800 dark:text-slate-100 text-sm block mb-0.5 truncate">{label}</span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight">{desc}</span>
      </div>
      <ToggleSwitch checked={checked} onChange={onChange} isRtl={isRtl} />
    </div>
  );
}

export default function StudentSettings() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useAuth();
  const isRtl = i18n.language.startsWith('ar');
  const saved = loadFromStorage();
  const [profile, setProfile] = useState(saved?.profile ?? defaultProfile);
  const [password, setPassword] = useState(defaultPassword);
  const [isGoogleLinked, setIsGoogleLinked] = useState(saved?.isGoogleLinked ?? false);
  const [linkingGoogle, setLinkingGoogle] = useState(false);
  const [isEmailLinked, setIsEmailLinked] = useState(saved?.isEmailLinked ?? false);
  const [preferences, setPreferences] = useState(saved?.preferences ?? defaultPreferences);
  const [savedBanner, setSavedBanner] = useState(false);
  const persistAll = (patch = {}) => {
    const data = {
      profile,
      isGoogleLinked,
      isEmailLinked,
      preferences,
      ...patch,
    };
    saveToStorage(data);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 2000);
  };
  const handleProfileChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePasswordChange = (e) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleToggleGoogleLink = async () => {
    try {
      setLinkingGoogle(true);
      if (isGoogleLinked) {
        await studentPortalApi.unlinkGoogleAccount();
        setIsGoogleLinked(false);
        showSuccessToast(isRtl ? 'تم إلغاء ربط حساب Google بنجاح' : 'Google account unlinked successfully');
      } else {
        const googleAuth = await triggerGoogleAuth();
        await studentPortalApi.linkGoogleAccount({
          googleId: googleAuth.googleId
        });
        setIsGoogleLinked(true);
        showSuccessToast(isRtl ? 'تم ربط حساب Google بنجاح' : 'Google account linked successfully');
      }
    } catch (err) {
      if (err?.message?.includes('closed') || err?.message?.includes('cancel')) {
        showErrorToast(isRtl ? 'تم إلغاء العملية بواسطة المستخدم' : 'Process cancelled by user');
      } else {
        showErrorToast(isRtl ? 'حدث خطأ أثناء تحديث ربط Google' : 'Failed to update Google link');
      }
    } finally {
      setLinkingGoogle(false);
    }
  };
  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-5 font-sans bg-transparent min-h-screen"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <SectionCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
              {t('studentDashboard.settings.title', 'الإعدادات')}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('studentDashboard.settings.subtitle', 'إدارة معلومات حسابك وتفضيلاتك الشخصية')}
            </p>
          </div>
          {savedBanner && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full"
            >
              {t('studentDashboard.settings.saved', '✓ تم الحفظ')}
            </motion.span>
          )}
        </div>
      </SectionCard>
      <SectionCard>
        <SectionTitle icon={User} label={t('studentDashboard.settings.profile.title', 'الملف الشخصي')} />
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-3xl font-bold shadow-md">
              م
            </div>
            <button className="absolute bottom-0 end-0 w-7 h-7 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center shadow-sm">
              <Camera size={13} className="text-slate-600 dark:text-slate-300" />
            </button>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <button className="bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-5 py-2 rounded-xl text-sm font-bold transition-colors">
              {t('studentDashboard.settings.profile.changePhoto', 'تغيير الصورة')}
            </button>
            <span className="text-[10px] text-slate-400">
              {t('studentDashboard.settings.profile.photoLimit', 'الحد الأقصى 5 ميجابايت. JPG أو PNG')}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <FieldInput
            label={t('studentDashboard.settings.profile.fullName', 'الاسم الكامل')}
            name="fullName"
            value={profile.fullName}
            onChange={handleProfileChange}
          />
          <FieldInput
            label={t('studentDashboard.settings.profile.emailAddress', 'البريد الإلكتروني')}
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            dir="ltr"
          />
          <FieldInput
            label={t('studentDashboard.settings.profile.phoneNumber', 'رقم الهاتف')}
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            dir="ltr"
          />
          <FieldInput
            label={t('studentDashboard.settings.profile.studyLevel', 'المستوى الدراسي')}
            name="grade"
            value={profile.grade}
            onChange={handleProfileChange}
          />
        </div>
        <div className="pt-5 border-t border-slate-100 dark:border-slate-700 space-y-3">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">
            {t('studentDashboard.settings.profile.linkedAccounts', 'ربط الحسابات')}
          </p>
          <button
            onClick={() => setIsEmailLinked(!isEmailLinked)}
            className="w-full flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-xl py-3.5 px-4 transition-all border border-slate-200 dark:border-slate-600"
          >
            <Mail size={18} />
            <span className="font-semibold text-sm">
              {isEmailLinked
                ? t('studentDashboard.settings.profile.unlinkEmail', 'إلغاء ربط البريد الإلكتروني')
                : t('studentDashboard.settings.profile.continueEmail', 'المتابعة باستخدام البريد الإلكتروني')}
            </span>
          </button>
          <button
            onClick={handleToggleGoogleLink}
            disabled={linkingGoogle}
            className="w-full flex items-center justify-center gap-3 bg-[#111111] hover:bg-black dark:bg-[#1a1a1a] text-white rounded-xl py-3.5 px-4 transition-all border border-slate-800"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
              <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
              <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
            </svg>
            <span className="font-semibold text-sm">
              {linkingGoogle
                ? t('common.loading', 'جاري المعالجة...')
                : isGoogleLinked
                ? t('studentDashboard.settings.profile.unlinkGoogle', 'إلغاء ربط Google')
                : t('studentDashboard.settings.profile.continueGoogle', 'المتابعة باستخدام Google')}
            </span>
          </button>
        </div>
        <SaveButton
          label={t('studentDashboard.settings.saveChanges', 'حفظ التغييرات')}
          onClick={() => persistAll({ profile, isGoogleLinked, isEmailLinked })}
        />
      </SectionCard>
      <SectionCard>
        <SectionTitle icon={Lock} label={t('studentDashboard.settings.security.title', 'الأمان وكلمة المرور')} />
        <div className="space-y-4 mb-2">
          <FieldInput
            label={t('studentDashboard.settings.security.currentPassword', 'كلمة المرور الحالية')}
            type="password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FieldInput
              label={t('studentDashboard.settings.security.newPassword', 'كلمة المرور الجديدة')}
              type="password"
              name="newPass"
              value={password.newPass}
              onChange={handlePasswordChange}
            />
            <FieldInput
              label={t('studentDashboard.settings.security.confirmPassword', 'تأكيد كلمة المرور')}
              type="password"
              name="confirm"
              value={password.confirm}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <SaveButton
          label={t('studentDashboard.settings.security.updatePassword', 'تحديث كلمة المرور')}
          onClick={() => {}}
        />
      </SectionCard>
      <SectionCard>
        <SectionTitle icon={Globe} label={t('studentDashboard.settings.appearance.title', 'اللغة والمظهر')} />
        <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
          {t('studentDashboard.settings.appearance.preferredLanguage', 'اللغة المفضلة')}
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-7">
          {[
            {
              code: 'ar',
              label: t('studentDashboard.settings.appearance.arabic', 'العربية'),
              desc: t('studentDashboard.settings.appearance.defaultLang', 'اللغة الافتراضية'),
            },
            {
              code: 'en',
              label: t('studentDashboard.settings.appearance.english', 'English'),
              desc: t('studentDashboard.settings.appearance.secondaryLang', 'Secondary Language'),
            },
          ].map(({ code, label, desc }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                i18n.language.startsWith(code)
                  ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
              }`}
            >
              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">{label}</span>
              <span className="text-[10px] text-slate-400">{desc}</span>
            </button>
          ))}
        </div>
        <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
          {t('studentDashboard.settings.appearance.appearanceTitle', 'المظهر')}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { key: 'light', icon: Sun, iconClass: 'text-amber-500', label: t('studentDashboard.settings.appearance.light', 'فاتح') },
            { key: 'dark', icon: Moon, iconClass: 'text-indigo-400', label: t('studentDashboard.settings.appearance.dark', 'داكن') },
            { key: 'auto', icon: SettingsIcon, iconClass: 'text-slate-500', label: t('studentDashboard.settings.appearance.auto', 'تلقائي') },
          ].map(({ key, icon: Icon, iconClass, label }) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                theme === key
                  ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
              }`}
            >
              <Icon className={`w-5 h-5 ${iconClass}`} />
              <span className="font-bold text-slate-800 dark:text-slate-100 text-xs">{label}</span>
            </button>
          ))}
        </div>
      </SectionCard>
      <SectionCard>
        <SectionTitle icon={BookOpen} label={t('studentDashboard.settings.preferences.title', 'تفضيلات الطالب')} />
        <div className="space-y-3 mb-2">
          <PreferenceRow
            label={t('studentDashboard.settings.preferences.showAchievements', 'عرض الإنجازات والأوسمة')}
            desc={t('studentDashboard.settings.preferences.showAchievementsDesc', 'عرض إنجازاتك في صفحتك الشخصية')}
            checked={preferences.showAchievements}
            onChange={() => togglePreference('showAchievements')}
            isRtl={isRtl}
          />
          <PreferenceRow
            label={t('studentDashboard.settings.preferences.shareProgress', 'مشاركة التقدم مع المعلم')}
            desc={t('studentDashboard.settings.preferences.shareProgressDesc', 'السماح للمعلم برؤية مستوى تقدمك الكامل')}
            checked={preferences.shareProgressWithTeacher}
            onChange={() => togglePreference('shareProgressWithTeacher')}
            isRtl={isRtl}
          />
          <PreferenceRow
            label={t('studentDashboard.settings.preferences.reminders', 'تذكيرات الحصص')}
            desc={t('studentDashboard.settings.preferences.remindersDesc', 'استقبل تنبيهات قبل موعد الحصة')}
            checked={preferences.receiveReminders}
            onChange={() => togglePreference('receiveReminders')}
            isRtl={isRtl}
          />
          <PreferenceRow
            label={t('studentDashboard.settings.preferences.saveLog', 'حفظ سجل النشاط')}
            desc={t('studentDashboard.settings.preferences.saveLogDesc', 'الاحتفاظ بسجل كامل لنشاطك في المنصة')}
            checked={preferences.saveActivityLog}
            onChange={() => togglePreference('saveActivityLog')}
            isRtl={isRtl}
          />
        </div>
        <SaveButton
          label={t('studentDashboard.settings.preferences.savePreferences', 'حفظ التفضيلات')}
          onClick={() => persistAll({ preferences })}
        />
      </SectionCard>
    </motion.div>
  );
}
