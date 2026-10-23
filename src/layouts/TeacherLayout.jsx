import { useState } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home,
  Users,
  Video,
  FilePlus,
  FileCheck,
  Star,
  Award,
  History,
  DollarSign,
  CreditCard,
  MessageSquare,
  User,
  BookOpen,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';

export default function TeacherLayout() {
  const { user, logout } = useAuth();
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const teacherName = (() => {
    if (!user) return 'أ. محمد العتيبي';
    if (typeof user.name === 'object' && user.name !== null) {
      return user.name.ar || user.name.en || 'أ. محمد العتيبي';
    }
    return user.name || 'أ. محمد العتيبي';
  })();

  const teacherInitial = teacherName ? teacherName.replace(/^أ\.\s*/, '').charAt(0) : 'م';

  const navItems = [
    {
      path: '/dashboard/teacher',
      icon: Home,
      label: 'الرئيسية',
      end: true,
    },
    {
      path: '/dashboard/teacher/groups',
      icon: Users,
      label: 'مجموعاتي',
    },
    {
      path: '/dashboard/teacher/live',
      icon: Video,
      label: 'الحصة المباشرة',
    },
    {
      path: '/dashboard/teacher/assignments/create',
      icon: FilePlus,
      label: 'إنشاء الواجبات',
    },
    {
      path: '/dashboard/teacher/assignments/submissions',
      icon: FileCheck,
      label: 'تسليمات الواجبات',
    },
    {
      path: '/dashboard/teacher/evaluations',
      icon: Star,
      label: 'التقييمات',
    },
    {
      path: '/dashboard/teacher/rewards',
      icon: Award,
      label: 'المكافآت',
    },
    {
      path: '/dashboard/teacher/schedule',
      icon: History,
      label: 'سجل الجلسات',
    },
    {
      path: '/dashboard/teacher/earnings',
      icon: DollarSign,
      label: 'الأرباح',
    },
    {
      path: '/dashboard/teacher/withdrawals',
      icon: CreditCard,
      label: 'طلبات السحب',
    },
    {
      path: '/dashboard/teacher/complaints',
      icon: MessageSquare,
      label: 'الشكاوي و المقترحات',
    },
    {
      path: '/dashboard/teacher/profile',
      icon: User,
      label: 'الملف الشخصي',
    },
  ];

  return (
    <div
      className="flex min-h-screen bg-[#edf4f2] dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ── Sidebar (منارة العز - منصة المعلم) ── */}
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
          {/* Logo / Header */}
          <div className="p-6 flex items-center justify-between">
            <Link to="/dashboard/teacher" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#00594C] text-white flex items-center justify-center shadow-xs shrink-0">
                <BookOpen size={22} />
              </div>
              <div className="text-start">
                <h1 className="text-lg font-black text-[#00594C] dark:text-emerald-400 leading-tight">
                  منارة العز
                </h1>
                <p className="text-xs text-slate-400 font-bold">منصة المعلم</p>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
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

          {/* Teacher Profile & Logout at Bottom */}
          <div className="p-4 space-y-3 shrink-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-end gap-3 px-1">
              <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 truncate">
                {teacherName}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#00594C] text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0">
                {teacherInitial}
              </div>
            </div>

            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#ea3838] hover:bg-[#d62828] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <LogOut size={16} />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main Canvas ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header Bar (Screen < lg) */}
        <header className="lg:hidden sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Menu size={20} />
            </button>
            <span className="text-sm font-black text-[#00594C] dark:text-emerald-400">
              منارة العز · منصة المعلم
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-xs">
            {teacherInitial}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
