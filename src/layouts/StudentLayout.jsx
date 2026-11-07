import { useState, Suspense } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Calendar,
  Video,
  Users,
  FileText,
  Star,
  FileCheck,
  Trophy,
  BookOpen,
  Globe,
  User,
  Menu,
  X,
  Sun,
  Moon,
  LogOut,
} from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth'
import { setLanguage } from '@/i18n.js'

const navItems = [
  { path: '/dashboard/student', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/student/schedule', icon: Calendar, transKey: 'schedule' },
  { path: '/dashboard/student/live', icon: Video, transKey: 'liveSession' },
  { path: '/dashboard/student/teachers', icon: Users, transKey: 'teachers' },
  { path: '/dashboard/student/assignments', icon: FileText, transKey: 'assignments' },
  { path: '/dashboard/student/grades', icon: Star, transKey: 'grades' },
  { path: '/dashboard/student/attendance', icon: FileCheck, transKey: 'attendance' },
  { path: '/dashboard/student/achievements', icon: Trophy, transKey: 'achievements' },
  { path: '/dashboard/student/materials', icon: BookOpen, transKey: 'materials' },
  { path: '/', icon: Globe, transKey: 'website' },
  { path: '/dashboard/student/profile', icon: User, transKey: 'profile' },
]

export default function StudentLayout() {
  const { user, logout, theme, toggleTheme } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const isDarkMode = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const handleLanguageToggle = () => {
    const newLang = isRtl ? 'en' : 'ar'
    setLanguage(newLang)
  }
  const [prevLocationKey, setPrevLocationKey] = useState(location.key)
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key)
    setIsMobileMenuOpen(false)
  }
  const displayName = (() => {
    if (!user) return t('studentDashboard.user.name', isRtl ? 'طالب' : 'Student')
    if (typeof user.name === 'object' && user.name !== null) {
      return isRtl ? (user.name.ar || user.name.en || '') : (user.name.en || user.name.ar || '')
    }
    if (user.nameAr || user.nameEn) {
      return isRtl ? (user.nameAr || user.nameEn || user.name) : (user.nameEn || user.nameAr || user.name)
    }
    return user.name || t('studentDashboard.user.name', isRtl ? 'طالب' : 'Student')
  })()
  const initialLetter = displayName ? displayName.trim().charAt(0) : (isRtl ? 'ط' : 'S')
  const userImage = user?.image || user?.avatar || user?.photoUrl || user?.photo || null
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f3f7f6] dark:bg-slate-900 transition-colors duration-300 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="lg:hidden w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#00594C] flex items-center justify-center text-white shrink-0">
              <BookOpen size={16} />
            </div>
            <div className="text-start">
              <h2 className="text-[#00594C] dark:text-emerald-400 font-bold text-sm leading-tight">
                {t('studentDashboard.header.title', 'منارة العز')}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
          >
            {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-[#00594C]" />}
          </button>
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="flex items-center gap-1 p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer"
            title={t('language.toggle', 'تغيير اللغة')}
          >
            <Globe size={16} />
            <span>{isRtl ? 'EN' : 'عربي'}</span>
          </button>
          <Link to="/dashboard/student/profile" className="flex items-center gap-2 p-1 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
            <div className="text-end hidden sm:block">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1 max-w-[120px]">
                {displayName}
              </h4>
              <p className="text-[10px] text-slate-400 font-medium">
                {t('studentDashboard.user.role', 'طالب')}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
              {userImage ? (
                <img src={userImage} alt={displayName} className="w-full h-full object-cover" />
              ) : (
                <span>{initialLetter}</span>
              )}
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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <aside
        className={`
          fixed lg:sticky top-0 start-0 h-screen z-40
          w-64 sm:w-[260px] bg-white dark:bg-slate-900 border-e border-slate-100 dark:border-slate-800
          transition-transform duration-300 ease-in-out
          flex flex-col justify-between p-4 sm:p-5 shrink-0 overflow-y-auto
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
          ${isMobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
        `}
      >
        <div>
          <div className="flex items-center gap-3 px-1 mb-6 shrink-0">
            <div className="w-11 h-11 rounded-full bg-[#00594C] flex items-center justify-center text-white shrink-0 shadow-xs">
              <BookOpen size={20} />
            </div>
            <div className="text-start">
              <h2 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                {t('studentDashboard.header.title', 'منارة العز')}
              </h2>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {t('studentDashboard.header.subtitle', 'منصة الطالب')}
              </p>
            </div>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3.5 py-2.5 rounded-2xl transition-all duration-150 text-start group cursor-pointer
                  ${isActive
                    ? 'bg-[#00594C] text-white font-bold shadow-xs'
                    : 'text-[#00594C] dark:text-emerald-400 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }
                `}
              >
                <item.icon size={19} className="shrink-0" />
                <span className="text-sm font-medium">{t(`studentDashboard.nav.${item.transKey}`)}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="pt-4 mt-4 shrink-0 space-y-3">
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
              title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
            >
              {isDarkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-[#00594C]" />}
              <span>{isDarkMode ? t('theme.light', 'نهاري') : t('theme.dark', 'ليلي')}</span>
            </button>
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
              title={t('language.toggle', 'تغيير اللغة')}
            >
              <Globe size={15} />
              <span>{isRtl ? 'English' : 'العربية'}</span>
            </button>
          </div>
          <div className="flex items-center gap-3 px-1">
            <div className="w-11 h-11 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0 overflow-hidden">
              {userImage ? (
                <img src={userImage} alt={displayName} className="w-full h-full object-cover" />
              ) : (
                <span>{initialLetter}</span>
              )}
            </div>
            <div className="text-start truncate">
              <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
                {displayName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={logout}
            className="w-full py-3 bg-[#EB3D3D] hover:bg-[#DC2626] text-white font-bold text-sm rounded-2xl shadow-sm transition-all active:scale-[0.98] cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <LogOut size={16} />
            <span>{t('dashboard.logout', 'تسجيل الخروج')}</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden min-h-screen relative">
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-24 min-h-[400px]">
              <div className="w-8 h-8 rounded-full border-2 border-[#00594C] border-t-transparent animate-spin" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
