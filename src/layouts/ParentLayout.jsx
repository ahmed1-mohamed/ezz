import { useState, Suspense } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Users,
  Calendar,
  CheckSquare,
  Star,
  BookOpen,
  MessageSquare,
  Globe,
  User,
  CalendarX,
  Layers,
  Receipt,
  Menu,
  X,
  LogOut,
  Sun,
  Moon,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth';
import { setLanguage } from '@/i18n';

const navItems = [
  { path: '/dashboard/parent', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/parent/children', icon: Users, transKey: 'children' },
  { path: '/dashboard/parent/packages', icon: Layers, transKey: 'packages' },
  { path: '/dashboard/parent/subscriptions', icon: Receipt, transKey: 'subscriptions' },
  { path: '/dashboard/parent/schedule', icon: Calendar, transKey: 'schedule' },
  { path: '/dashboard/parent/attendance', icon: CheckSquare, transKey: 'attendance' },
  { path: '/dashboard/parent/ratings', icon: Star, transKey: 'ratings' },
  { path: '/dashboard/parent/assignments', icon: BookOpen, transKey: 'assignments' },
  { path: '/dashboard/parent/excuses', icon: CalendarX, transKey: 'excuses' },
  { path: '/dashboard/parent/complaints', icon: MessageSquare, transKey: 'complaints' },
  { path: '/', icon: Globe, transKey: 'website' },
  { path: '/dashboard/parent/settings', icon: User, transKey: 'profile' },
];

export default function ParentLayout() {
  const { user, logout, theme, toggleTheme } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const isDarkMode = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const handleLanguageToggle = () => setLanguage(isRtl ? 'en' : 'ar');
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key);
    setIsMobileMenuOpen(false);
  }
  const displayName = (() => {
    if (!user) return t('parentDashboard.user.name', 'ولي أمر');
    if (typeof user.name === 'object' && user.name !== null) {
      return isRtl ? (user.name.ar || user.name.en || '') : (user.name.en || user.name.ar || '');
    }
    if (user.nameAr || user.nameEn) {
      return isRtl ? (user.nameAr || user.nameEn || user.name) : (user.nameEn || user.nameAr || user.name);
    }
    return user.name || t('parentDashboard.user.name', 'ولي أمر');
  })();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f3f7f6] dark:bg-slate-900 transition-colors duration-300 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="lg:hidden w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="text-start hidden sm:block">
            <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-sm leading-tight">{t('parentDashboard.header.title', 'منارة العز')}</h2>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
          >
            {isDarkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-[#0f7a6c]" />}
          </button>
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="p-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-bold text-xs"
            title={t('language.toggle', 'تغيير اللغة')}
          >
            <Globe size={17} />
          </button>
          <Link to="/dashboard/parent/settings" className="flex items-center gap-2.5 p-1 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
            <div className="text-end">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1 max-w-[90px] sm:max-w-[140px]">
                {displayName}
              </h4>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">
                {t('parentDashboard.user.role', 'ولي أمر')}
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-sm shrink-0 overflow-hidden">
              {(() => {
                const rawImg = user?.image || user?.avatar || user?.photoUrl || user?.photo;
                const cleanImg = typeof rawImg === 'string' && rawImg.trim() !== '' ? rawImg.trim() : null;
                return cleanImg ? (
                  <img src={cleanImg} alt={displayName} className="w-full h-full object-cover" />
                ) : (
                  (displayName?.charAt(0) || 'P').toUpperCase()
                );
              })()}
            </div>
          </Link>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <aside className={`
        fixed lg:sticky top-0 start-0 h-screen z-40
        w-60 bg-white dark:bg-slate-900 border-e border-slate-200 dark:border-slate-800
        transition-transform duration-300 ease-in-out
        flex flex-col shrink-0
        ${isMobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
      `}>
        <div className="p-6 text-center border-b border-slate-100 dark:border-slate-800 shrink-0">
          <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-lg mb-1">{t('parentDashboard.header.title', 'منارة العز')}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs">{t('parentDashboard.header.subtitle', 'منصة ولي الأمر')}</p>
        </div>
        <div className="p-4 shrink-0">
          <Link to="/dashboard/parent" className="bg-[#0f7a6c] text-white rounded-xl p-3 flex items-center gap-3 shadow-md cursor-pointer hover:bg-[#0c6156] transition-transform hover:scale-[1.02] active:scale-95 block">
            {(() => {
              const rawImg = user?.image || user?.avatar || user?.photoUrl || user?.photo;
              const cleanImg = typeof rawImg === 'string' && rawImg.trim() !== '' ? rawImg.trim() : null;
              return cleanImg ? (
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <img src={cleanImg} alt={displayName} className="w-full h-full object-cover" />
                </div>
              ) : null;
            })()}
            <div className="flex flex-col items-start min-w-0 flex-1">
              <h3 className="font-semibold text-sm truncate w-full text-start">{displayName}</h3>
              <p className="text-[11px] opacity-80 mt-0.5">{t('parentDashboard.user.role', 'ولي أمر')}</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `
                flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group
                ${isActive
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 font-bold border-s-4 border-[#0f7a6c] dark:border-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#0f7a6c] dark:hover:text-emerald-400 hover:ps-5'}
              `}
            >
              <item.icon size={18} className="me-3 transition-transform group-hover:scale-110" />
              <span className="text-sm">{t(`parentDashboard.nav.${item.transKey}`)}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800 space-y-3 shrink-0">
          <div className="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-xs"
              title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
            >
              {isDarkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-[#0f7a6c]" />}
              <span>{isDarkMode ? t('theme.light', 'نهاري') : t('theme.dark', 'ليلي')}</span>
            </button>
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
              title={t('language.toggle', 'تغيير اللغة')}
            >
              <Globe size={15} />
              <span>{isRtl ? 'EN' : 'عربي'}</span>
            </button>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center px-4 py-2.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white rounded-lg transition-all font-medium group cursor-pointer"
          >
            <LogOut size={18} className="me-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">{t('dashboard.logout', 'تسجيل الخروج')}</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden min-h-screen relative">
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
  );
}
