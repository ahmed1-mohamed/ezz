import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sun, Moon, Settings as SettingsIcon, Mail, Lock, User, Globe, Bell, BookOpen, Save } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../../i18n.js';
import { useAuth } from '@/shared/context/useAuth.jsx';

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
        className="flex items-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-[0.98] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-sm"
      >
        <Save size={15} />
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
              {isRtl ? 'الإعدادات' : 'Settings'}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {isRtl ? 'إدارة معلومات حسابك وتفضيلاتك الشخصية' : 'Manage your account info and personal preferences'}
            </p>
          </div>
          {savedBanner && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full"
            >
              {isRtl ? '✓ تم الحفظ' : '✓ Saved'}
            </motion.span>
          )}
        </div>
      </SectionCard>

      <SectionCard>
        <SectionTitle icon={User} label={isRtl ? 'الملف الشخصي' : 'Profile'} />

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
              {isRtl ? 'تغيير الصورة' : 'Change Photo'}
            </button>
            <span className="text-[10px] text-slate-400">{isRtl ? 'الحد الأقصى 5 ميجابايت. JPG أو PNG' : 'Max 5MB. JPG or PNG'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <FieldInput
            label={isRtl ? 'الاسم الكامل' : 'Full Name'}
            name="fullName"
            value={profile.fullName}
            onChange={handleProfileChange}
          />
          <FieldInput
            label={isRtl ? 'البريد الإلكتروني' : 'Email Address'}
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            dir="ltr"
          />
          <FieldInput
            label={isRtl ? 'رقم الهاتف' : 'Phone Number'}
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            dir="ltr"
          />
          <FieldInput
            label={isRtl ? 'المستوى الدراسي' : 'Study Level'}
            name="grade"
            value={profile.grade}
            onChange={handleProfileChange}
          />
        </div>

        <div className="pt-5 border-t border-slate-100 dark:border-slate-700 space-y-3">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">
            {isRtl ? 'ربط الحسابات' : 'Linked Accounts'}
          </p>
          <button
            onClick={() => setIsEmailLinked(!isEmailLinked)}
            className="w-full flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-xl py-3.5 px-4 transition-all border border-slate-200 dark:border-slate-600"
          >
            <Mail size={18} />
            <span className="font-semibold text-sm">
              {isEmailLinked
                ? (isRtl ? 'إلغاء ربط البريد الإلكتروني' : 'Unlink Email')
                : (isRtl ? 'المتابعة باستخدام Email' : 'Continue with Email')}
            </span>
          </button>
          <button
            onClick={() => setIsGoogleLinked(!isGoogleLinked)}
            className="w-full flex items-center justify-center gap-3 bg-[#111111] hover:bg-black dark:bg-[#1a1a1a] text-white rounded-xl py-3.5 px-4 transition-all border border-slate-800"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.3C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M12 23C14.97 23 17.46 22.02 19.3 20.34L15.73 17.57C14.74 18.24 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.16V16.99C4.01 20.67 7.7 23 12 23Z" fill="#34A853" />
              <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.16C1.4 8.53 0.96 10.22 0.96 12C0.96 13.78 1.4 15.47 2.16 16.99L5.84 14.14Z" fill="#FBBC05" />
              <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.38 3.82C17.45 2.02 14.96 0.95 12 0.95C7.7 0.95 4.01 3.33 2.16 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335" />
            </svg>
            <span className="font-semibold text-sm">
              {isGoogleLinked
                ? (isRtl ? 'إلغاء ربط Google' : 'Unlink Google')
                : (isRtl ? 'المتابعة باستخدام Google' : 'Continue with Google')}
            </span>
          </button>
        </div>

        <SaveButton
          label={isRtl ? 'حفظ التغييرات' : 'Save Changes'}
          onClick={() => persistAll({ profile, isGoogleLinked, isEmailLinked })}
        />
      </SectionCard>

      <SectionCard>
        <SectionTitle icon={Lock} label={isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'} />

        <div className="space-y-4 mb-2">
          <FieldInput
            label={isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
            type="password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FieldInput
              label={isRtl ? 'كلمة المرور الجديدة' : 'New Password'}
              type="password"
              name="newPass"
              value={password.newPass}
              onChange={handlePasswordChange}
            />
            <FieldInput
              label={isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
              type="password"
              name="confirm"
              value={password.confirm}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <SaveButton label={isRtl ? 'تحديث كلمة المرور' : 'Update Password'} onClick={() => { }} />
      </SectionCard>

      <SectionCard>
        <SectionTitle icon={Globe} label={isRtl ? 'اللغة والمظهر' : 'Language & Appearance'} />

        <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
          {isRtl ? 'اللغة المفضلة' : 'Preferred Language'}
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-7">
          {[
            { code: 'ar', labelAr: 'العربية', labelEn: 'Arabic', descAr: 'اللغة الافتراضية', descEn: 'Default Language' },
            { code: 'en', labelAr: 'English', labelEn: 'English', descAr: 'لغة ثانوية', descEn: 'Secondary Language' },
          ].map(({ code, labelAr, labelEn, descAr, descEn }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${i18n.language === code
                ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                }`}
            >
              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">{isRtl ? labelAr : labelEn}</span>
              <span className="text-[10px] text-slate-400">{isRtl ? descAr : descEn}</span>
            </button>
          ))}
        </div>

        <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
          {isRtl ? 'المظهر' : 'Appearance'}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { key: 'light', icon: Sun, iconClass: 'text-amber-500', labelAr: 'فاتح', labelEn: 'Light' },
            { key: 'dark', icon: Moon, iconClass: 'text-indigo-400', labelAr: 'داكن', labelEn: 'Dark' },
            { key: 'auto', icon: SettingsIcon, iconClass: 'text-slate-500', labelAr: 'تلقائي', labelEn: 'Auto' },
          ].map(({ key, icon: Icon, iconClass, labelAr, labelEn }) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === key
                ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                : 'border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                }`}
            >
              <Icon className={`w-5 h-5 ${iconClass}`} />
              <span className="font-bold text-slate-800 dark:text-slate-100 text-xs">{isRtl ? labelAr : labelEn}</span>
            </button>
          ))}
        </div>
      </SectionCard>

      <SectionCard>
        <SectionTitle icon={BookOpen} label={isRtl ? 'تفضيلات الطالب' : 'Student Preferences'} />

        <div className="space-y-3 mb-2">
          <PreferenceRow
            label={isRtl ? 'عرض الإنجازات والأوسمة' : 'Show Achievements & Badges'}
            desc={isRtl ? 'عرض إنجازاتك في صفحتك الشخصية' : 'Show your achievements on your profile'}
            checked={preferences.showAchievements}
            onChange={() => togglePreference('showAchievements')}
            isRtl={isRtl}
          />
          <PreferenceRow
            label={isRtl ? 'مشاركة التقدم مع المعلم' : 'Share Progress with Teacher'}
            desc={isRtl ? 'السماح للمعلم برؤية مستوى تقدمك الكامل' : 'Allow teacher to view your full learning progress'}
            checked={preferences.shareProgressWithTeacher}
            onChange={() => togglePreference('shareProgressWithTeacher')}
            isRtl={isRtl}
          />
          <PreferenceRow
            label={isRtl ? 'تذكيرات الحصص' : 'Session Reminders'}
            desc={isRtl ? 'استقبال تنبيهات قبل موعد الحصة' : 'Receive notifications before each session'}
            checked={preferences.receiveReminders}
            onChange={() => togglePreference('receiveReminders')}
            isRtl={isRtl}
          />
          <PreferenceRow
            label={isRtl ? 'حفظ سجل النشاط' : 'Save Activity Log'}
            desc={isRtl ? 'الاحتفاظ بسجل كامل لنشاطك في المنصة' : 'Keep a full log of your activity on the platform'}
            checked={preferences.saveActivityLog}
            onChange={() => togglePreference('saveActivityLog')}
            isRtl={isRtl}
          />
        </div>

        <SaveButton
          label={isRtl ? 'حفظ التفضيلات' : 'Save Preferences'}
          onClick={() => persistAll({ preferences })}
        />
      </SectionCard>
    </motion.div>
  );
}
