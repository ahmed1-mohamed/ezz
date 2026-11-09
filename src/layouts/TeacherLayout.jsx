import { useState, Suspense } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
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
  Receipt,
  MessageSquare,
  User,
  BookOpen,
  Library,
  LogOut,
  Menu,
  X,
  Globe,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';

export default function TeacherLayout() {
  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isRtl = i18n.language?.startsWith('ar') ?? true;
  const isLiveRoom = location.pathname.includes('/live/room') || (location.pathname.includes('/teacher/live') && location.search.includes('stage=during'));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const teacherName = (() => {
    if (!user) return t('teacher.teacherFallback', 'معلم');
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || t('teacher.teacherFallback', 'معلم');
    }
    return user.name || t('teacher.teacherFallback', 'معلم');
  })();
  const teacherInitial = teacherName ? teacherName.trim().charAt(0) : 'م';
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
      path: '/dashboard/teacher/curricula',
      icon: Library,
      label: t('teacher.navCurricula', 'المناهج والمصادر'),
    },
    {
      path: '/dashboard/teacher/payouts',
      icon: Receipt,
      label: t('teacher.navPayouts', 'إثباتات الدفع'),
    },
    {
      path: '/dashboard/teacher/payment-methods',
      icon: CreditCard,
      label: t('teacher.navPaymentMethods', 'طرق الدفع'),
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
      label: t('common.mainWebsite', 'الموقع الرئيسي'),
    },
  ];
  return (
    <div
      className="flex min-h-screen bg-[#f3f7f6] dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <aside
        className={`fixed lg:sticky top-0 start-0 h-screen z-50 w-64 bg-white dark:bg-slate-950 border-e border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : isRtl
            ? 'translate-x-full lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-5 sm:p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 shrink-0">
            <Link to="/dashboard/teacher" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c] text-white flex items-center justify-center shadow-xs shrink-0">
                <BookOpen size={20} />
              </div>
              <div className="text-start">
                <h1 className="text-base font-extrabold text-[#0f7a6c] dark:text-emerald-400 leading-tight">
                  {t('appName', 'منارة العز')}
                </h1>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">{t('teacher.platformTitle', 'منصة المعلم')}</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thin">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 group
                  ${
                    isActive
                      ? 'bg-[#0f7a6c] text-white font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-[#0f7a6c] dark:hover:text-emerald-400 font-medium'
                  }
                `}
              >
                <item.icon size={18} className="shrink-0 transition-transform group-hover:scale-110" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="p-4 space-y-3 shrink-0 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <Link
              to="/dashboard/teacher/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-xs shrink-0 overflow-hidden">
                {user?.image ? (
                  <img src={user.image} alt={teacherName} className="w-full h-full object-cover" />
                ) : (
                  <span>{teacherInitial}</span>
                )}
              </div>
              <div className="min-w-0 flex-1 text-start truncate">
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-[#0f7a6c] dark:group-hover:text-emerald-400 transition-colors">
                  {teacherName}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate">
                  {t('teacher.teacherFallback', 'معلم')}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer group"
            >
              <LogOut size={16} className="transition-transform group-hover:-translate-x-1 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{t('common.logout', 'تسجيل الخروج')}</span>
            </button>
          </div>
        </div>
      </aside>
      <div className={`flex-1 flex flex-col min-w-0 ${isLiveRoom ? 'h-screen max-h-screen overflow-hidden' : ''}`}>
        <header className="lg:hidden sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Menu size={20} />
            </button>
            <span className="text-sm font-black text-[#0f7a6c] dark:text-emerald-400">
              {t('appName', 'منارة العز')} · {t('teacher.platformTitle', 'منصة المعلم')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/dashboard/teacher/profile"
              className="w-8 h-8 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center font-bold text-xs overflow-hidden shadow-xs shrink-0"
            >
              {user?.image ? (
                <img src={user.image} alt={teacherName} className="w-full h-full object-cover" />
              ) : (
                teacherInitial
              )}
            </Link>
          </div>
        </header>
        <main className={`flex-1 overflow-x-hidden ${isLiveRoom ? 'p-2 sm:p-3 overflow-y-hidden max-h-screen flex flex-col min-h-0' : 'p-4 sm:p-6 lg:p-8'}`}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-24 min-h-[400px]">
                <div className="w-8 h-8 rounded-full border-2 border-[#0f7a6c] border-t-transparent animate-spin" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
