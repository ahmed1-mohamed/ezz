import { useState, useCallback } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home,
  Users,
  Video,
  FilePlus,
  FileCheck,
  Star,
  Award,
  Calendar,
  History,
  DollarSign,
  CreditCard,
  MessageSquare,
  User,
  BookOpen,
  LogOut,
  Menu,
  X,
  Globe,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { setLanguage } from '@/i18n.js';

export default function TeacherLayout() {
  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith('ar') ?? true;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const teacherName = (() => {
    if (!user) return t('teacher.teacherFallback', 'معلم');
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || t('teacher.teacherFallback', 'معلم');
    }
    return user.name || t('teacher.teacherFallback', 'معلم');
  })();

  const teacherInitial = teacherName ? teacherName.trim().charAt(0) : 'م';

  const handleLanguageToggle = useCallback(() => {
    const nextLang = isRtl ? 'en' : 'ar';
    setLanguage(nextLang);
  }, [isRtl]);

  const navItems = [
    {
      path: '/dashboard/teacher',
      icon: Home,
      label: t('teacher.navHome', 'الرئيسية'),
      end: true,
    },
    {
      path: '/dashboard/teacher/groups',
      icon: Users,
      label: t('teacher.navGroups', 'مجموعاتي'),
    },
    {
      path: '/dashboard/teacher/live',
      icon: Video,
      label: t('teacher.navLive', 'الحصة المباشرة'),
    },
    {
      path: '/dashboard/teacher/assignments/create',
      icon: FilePlus,
      label: t('teacher.navCreateHomework', 'إنشاء الواجبات'),
    },
    {
      path: '/dashboard/teacher/assignments/submissions',
      icon: FileCheck,
      label: t('teacher.navSubmissions', 'تسليمات الواجبات'),
    },
    {
      path: '/dashboard/teacher/evaluations',
      icon: Star,
      label: t('teacher.navEvaluations', 'التقييمات'),
    },
    {
      path: '/dashboard/teacher/rewards',
      icon: Award,
      label: t('teacher.navRewards', 'المكافآت'),
    },
    {
      path: '/dashboard/teacher/schedule',
      icon: Calendar,
      label: t('teacher.navSchedule', 'الجدول الأسبوعي'),
    },
    {
      path: '/dashboard/teacher/sessions',
      icon: History,
      label: t('teacher.navSessions', 'سجل الجلسات'),
    },
    {
      path: '/dashboard/teacher/earnings',
      icon: DollarSign,
      label: t('teacher.navEarnings', 'الأرباح'),
    },
    {
      path: '/dashboard/teacher/withdrawals',
      icon: CreditCard,
      label: t('teacher.navWithdrawals', 'طلبات السحب'),
    },
    {
      path: '/dashboard/teacher/complaints',
      icon: MessageSquare,
      label: t('teacher.navComplaints', 'الشكاوى والمقترحات'),
    },
    {
      path: '/dashboard/teacher/profile',
      icon: User,
      label: t('teacher.navProfile', 'الملف الشخصي'),
    },
    {
      path: '/',
      icon: Globe,
      label: t('admin.mainWebsite', 'الموقع الرئيسي'),
    },
  ];

  return (
    <div
      className="flex min-h-screen bg-[#edf4f2] dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 h-screen z-50 w-64 bg-white dark:bg-slate-900 border-e border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : isRtl
            ? 'translate-x-full lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
            <Link to="/dashboard/teacher" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#00594C] text-white flex items-center justify-center shadow-xs shrink-0">
                <BookOpen size={22} />
              </div>
              <div className="text-start">
                <h1 className="text-lg font-black text-[#00594C] dark:text-emerald-400 leading-tight">
                  {t('appName', 'منارة العز')}
                </h1>
                <p className="text-xs text-slate-400 font-bold">{t('teacher.platformTitle', 'منصة المعلم')}</p>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-1.5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200
                  ${
                    isActive
                      ? 'bg-[#00594C] text-white shadow-xs'
                      : 'text-[#00594C] dark:text-emerald-400 hover:bg-[#edf4f2] dark:hover:bg-slate-800/60'
                  }
                `}
              >
                <item.icon size={18} className="shrink-0" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="p-4 space-y-3 shrink-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleLanguageToggle}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <Globe size={15} />
              <span>{isRtl ? 'English' : 'العربية'}</span>
            </button>

            <Link
              to="/dashboard/teacher/profile"
              className="flex items-center justify-start gap-3 px-1 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 rounded-full bg-[#00594C] text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0 overflow-hidden">
                {user?.image ? (
                  <img src={user.image} alt={teacherName} className="w-full h-full object-cover" />
                ) : (
                  teacherInitial
                )}
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 truncate">
                {teacherName}
              </span>
            </Link>

            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-[#ea3838] hover:bg-[#d62828] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <LogOut size={16} />
              <span>{t('common.logout', 'تسجيل الخروج')}</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Menu size={20} />
            </button>
            <span className="text-sm font-black text-[#00594C] dark:text-emerald-400">
              {t('appName', 'منارة العز')} · {t('teacher.platformTitle', 'منصة المعلم')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLanguageToggle}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold"
            >
              <Globe size={16} />
            </button>

            <Link
              to="/dashboard/teacher/profile"
              className="w-8 h-8 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-xs overflow-hidden shadow-xs shrink-0"
            >
              {user?.image ? (
                <img src={user.image} alt={teacherName} className="w-full h-full object-cover" />
              ) : (
                teacherInitial
              )}
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
