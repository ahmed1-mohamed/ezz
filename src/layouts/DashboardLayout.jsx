import { useState, useMemo } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  BookOpen,
  Calendar,
  BarChart2,
  Globe,
  LogOut,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { roleNavigation } from '@/shared/constants/navigation.js';

function getIconForPath(path) {
  if (path.includes('courses')) return BookOpen;
  if (path.includes('schedule')) return Calendar;
  if (path.includes('reports')) return BarChart2;
  return Home;
}

export default function DashboardLayout({ title, role, links, children }) {
  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language?.startsWith('ar') ?? true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const resolvedRole = role || t('auth.manager', 'مدير النظام');
  const navItems = useMemo(() => {
    const rawList = links || roleNavigation.Manager || [];
    return rawList.map((item) => ({
      path: item.path,
      label: t(item.label, item.label),
      icon: getIconForPath(item.path),
    }));
  }, [links, t]);
  const userName = useMemo(() => {
    if (!user) return resolvedRole;
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || resolvedRole;
    }
    return user.name || user.fullName || resolvedRole;
  }, [user, isRtl, resolvedRole]);
  const userInitial = userName ? userName.trim().charAt(0) : 'م';
  return (
    <div
      className="flex min-h-screen bg-[#f3f7f6] dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <aside
        className={`fixed lg:sticky top-0 h-screen z-50 w-64 bg-white dark:bg-slate-950 border-e border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : isRtl
            ? 'translate-x-full lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-5 sm:p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 shrink-0">
            <Link to="/dashboard/manager" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c] text-white flex items-center justify-center shadow-xs shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div className="text-start">
                <h1 className="text-base font-extrabold text-[#0f7a6c] dark:text-emerald-400 leading-tight">
                  {t('appName', 'منارة العز')}
                </h1>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">{resolvedRole}</p>
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
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200
                  ${
                    isActive
                      ? 'bg-[#0f7a6c] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-[#0f7a6c] dark:hover:text-emerald-400 font-medium'
                  }
                `}
              >
                <item.icon size={18} className="shrink-0 transition-transform group-hover:scale-110" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-[#0f7a6c] dark:hover:text-emerald-400 transition-all duration-200 group"
            >
              <Globe size={18} className="shrink-0 transition-transform group-hover:scale-110" />
              <span className="truncate">{t('common.mainWebsite', 'الموقع الرئيسي')}</span>
            </Link>
          </nav>
          <div className="p-4 space-y-3 shrink-0 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-xs shrink-0 overflow-hidden">
                {user?.image ? (
                  <img src={user.image} alt={userName} className="w-full h-full object-cover" />
                ) : (
                  <span>{userInitial}</span>
                )}
              </div>
              <div className="min-w-0 flex-1 text-start truncate">
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-[#0f7a6c] dark:group-hover:text-emerald-400 transition-colors">
                  {userName}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate">
                  {resolvedRole}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer group"
            >
              <LogOut size={16} className="transition-transform group-hover:-translate-x-1 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{t('common.logout', 'تسجيل الخروج')}</span>
            </button>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Menu size={20} />
            </button>
            <div className="text-start">
              <h1 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-white leading-tight">
                {title || t('dashboard.overview', 'نظرة عامة')}
              </h1>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium hidden sm:block">
                {t('appName', 'منارة العز')} · {resolvedRole}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center font-bold text-xs overflow-hidden shadow-xs shrink-0">
              {user?.image ? (
                <img src={user.image} alt={userName} className="w-full h-full object-cover" />
              ) : (
                userInitial
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}