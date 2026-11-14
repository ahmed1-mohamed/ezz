import { memo, useState, useCallback, useMemo, Suspense } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Users,
  GraduationCap,
  Book,
  Award,
  Heart,
  Star,
  Layers,
  Globe,
  Calendar,
  Clock,
  Package,
  CreditCard,
  TrendingUp,
  Gift,
  BookMarked,
  Percent,
  BarChart2,
  Activity,
  MessageSquare,
  MessageSquareWarning,
  Menu,
  X,
  LogOut,
  Languages,
  Settings,
  CalendarCheck,
} from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import PlatformLogoIcon from '@/shared/components/PlatformLogoIcon.jsx'

const NAV_ITEMS = [
  { path: '/dashboard/admin', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/admin/managers', icon: Users, transKey: 'managers', permission: 'users.read' },
  { path: '/dashboard/admin/teachers', icon: GraduationCap, transKey: 'teachers', permission: 'teachers.read' },
  { path: '/dashboard/admin/teacher-evaluations', icon: Star, transKey: 'teacherEvaluations', permissions: ['teacher_evaluations.read', 'teachers.read'] },
  { path: '/dashboard/admin/students', icon: Book, transKey: 'students', permission: 'students.read' },
  { path: '/dashboard/admin/student-levels', icon: Award, transKey: 'studentLevels', permission: 'student_levels.read' },
  { path: '/dashboard/admin/parents', icon: Heart, transKey: 'parents', permission: 'parents.read' },
  { path: '/dashboard/admin/explanation-languages', icon: Languages, transKey: 'explanationLanguages', permission: 'explanation_languages.read' },
  { path: '/dashboard/admin/groups', icon: Layers, transKey: 'groups', permission: 'groups.read' },
   {
    path: '/dashboard/admin/website',
    icon: Globe,
    transKey: 'website',
    permissions: [
      'contact_us.read',
      'elite_teachers.read',
      'featured_students.read',
      'statistics.read',
      'testimonials.read',
    ],
  },
  { path: '/dashboard/admin/sessions', icon: Calendar, transKey: 'sessions', permission: 'sessions.read' },
  { path: '/dashboard/admin/trial-sessions', icon: CalendarCheck, transKey: 'trialSessions', permission: 'trial_sessions.read' },
  { path: '/dashboard/admin/schedule', icon: Clock, transKey: 'studySchedule', permission: 'timetable.read' },
  {
    path: '/dashboard/admin/packages',
    icon: Package,
    transKey: 'packages',
    permissions: ['packages_faqs.read', 'packages.read', 'faqs.read'],
  },
  { path: '/dashboard/admin/payments', icon: CreditCard, transKey: 'payments', permissions: ['packages.subscriptions', 'payments.read'] },
  { path: '/dashboard/admin/earnings', icon: TrendingUp, transKey: 'earnings', permissions: ['earnings.read', 'dashboard.earnings.read'] },
  {
    path: '/dashboard/admin/rewards',
    icon: Gift,
    transKey: 'rewards',
    permissions: ['rewards_suggestions.read', 'rewards.read', 'suggested_rewards.read'],
  },
  { path: '/dashboard/admin/curriculums', icon: BookMarked, transKey: 'curriculums', permission: 'curricula.read' },
  { path: '/dashboard/admin/coupons', icon: Percent, transKey: 'discountCodes', permission: 'coupons.read' },
  { path: '/dashboard/admin/reports', icon: BarChart2, transKey: 'reports', permissions: ['reports.read', 'dashboard.reports.read'] },
  { path: '/dashboard/admin/logs', icon: Activity, transKey: 'activities', permission: 'logs.read' },
  { path: '/dashboard/admin/messages', icon: MessageSquare, transKey: 'messages', permission: 'messages.read' },
  { path: '/dashboard/admin/complaints', icon: MessageSquareWarning, transKey: 'complaints', permission: 'complaints_suggestions.read' },
  { path: '/', icon: Globe, transKey: 'mainWebsite' },
  { path: '/dashboard/admin/settings', icon: Settings, transKey: 'settings' },
]

function getDisplayName(userObj, isRtl) {
  if (!userObj) return ''
  const nameVal = userObj.name
  if (typeof nameVal === 'object' && nameVal !== null) {
    return isRtl
      ? (nameVal.ar || nameVal.en || Object.values(nameVal)[0] || '')
      : (nameVal.en || nameVal.ar || Object.values(nameVal)[0] || '')
  }
  if (userObj.nameAr || userObj.nameEn) {
    return isRtl ? (userObj.nameAr || userObj.nameEn || userObj.name) : (userObj.nameEn || userObj.nameAr || userObj.name)
  }
  if (typeof nameVal === 'string') return nameVal
  return String(nameVal || '')
}

const NavItem = memo(function NavItem({ item, t, onClose, isCollapsed }) {
  return (
    <NavLink
      to={item.path}
      end={item.end}
      onClick={onClose}
      className={({ isActive }) => `
        flex items-center ${isCollapsed ? 'justify-center w-11 h-11 mx-auto' : 'px-4 py-2.5'} rounded-xl transition-all duration-200 group
        ${isActive
          ? 'bg-[#0f7a6c] text-white font-semibold shadow-md shadow-[#0f7a6c]/10'
          : `text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#0f7a6c] dark:hover:text-emerald-400 ${isCollapsed ? '' : 'hover:ps-5'}`}
      `}
      title={isCollapsed ? (item.transKey === 'mainWebsite' ? t('common.mainWebsite', 'الموقع الرئيسي') : t(`adminDashboard.nav.${item.transKey}`)) : undefined}
    >
      <item.icon size={18} className={`${isCollapsed ? '' : 'me-3'} transition-transform group-hover:scale-110 shrink-0`} aria-hidden="true" />
      {!isCollapsed && (
        <span className="text-sm whitespace-nowrap">{item.transKey === 'mainWebsite' ? t('common.mainWebsite', 'الموقع الرئيسي') : t(`adminDashboard.nav.${item.transKey}`)}</span>
      )}
    </NavLink>
  )
})

export default memo(function AdminLayout() {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const handleLogout = useCallback(() => {
    logout()
    navigate('/login')
  }, [logout, navigate])
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), [])
  const toggleSidebar = useCallback(() => setIsSidebarCollapsed(prev => !prev), [])
  const { isSuperAdmin, hasPermission, hasAnyPermission } = useAdminPermissions()
  const accessibleNavItems = useMemo(() => {
    if (isSuperAdmin) return NAV_ITEMS
    return NAV_ITEMS.filter((item) => {
      if (item.superAdminOnly) return false
      if (!item.permission && !item.permissions) return true
      if (item.permission) return hasPermission(item.permission)
      if (item.permissions) return hasAnyPermission(item.permissions)
      return true
    })
  }, [isSuperAdmin, hasPermission, hasAnyPermission])
  const resolvedName = useMemo(() => getDisplayName(user, isRtl), [user, isRtl])
  const userInitial = useMemo(() => resolvedName ? resolvedName.trim().charAt(0) : 'أ', [resolvedName])
  const userAvatar = useMemo(() => {
    const rawImg = user?.image || user?.avatar || user?.photoUrl || user?.photo
    return typeof rawImg === 'string' && rawImg.trim() !== '' ? rawImg.trim() : null
  }, [user])
  const displayRole = useMemo(
    () => user?.role === 'super_admin' ? t('adminDashboard.adminRole', 'مشرف عام') : t('auth.admin', 'مسؤول'),
    [user?.role, t]
  )
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f3f7f6] dark:bg-slate-900 transition-colors duration-300 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="lg:hidden w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMobileMenu}
            className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 transition-colors"
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-2">
            <PlatformLogoIcon size={30} className="shrink-0 drop-shadow-xs" />
            <div className="text-start hidden sm:block">
              <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-sm leading-tight">
                {t('adminDashboard.header.title', 'منارة العز')}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link to="/dashboard/admin/settings" className="flex items-center gap-2 p-1 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
            <div className="text-end">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1 max-w-[90px] sm:max-w-[140px]">
                {resolvedName || t('adminDashboard.adminName', 'أحمد الإداري')}
              </h4>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-medium line-clamp-1">
                {displayRole}
              </p>
            </div>
            <div
              className="w-9 h-9 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-sm shrink-0 overflow-hidden"
            >
              {(() => {
                const rawImg = user?.image || user?.avatar || user?.photoUrl || user?.photo;
                const cleanImg = typeof rawImg === 'string' && rawImg.trim() !== '' ? rawImg.trim() : null;
                return cleanImg ? (
                  <img
                    src={cleanImg}
                    alt={resolvedName || 'User profile'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  userInitial
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
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <aside className={`
        fixed lg:sticky top-0 start-0 h-screen z-40
        ${isSidebarCollapsed ? 'w-60 lg:w-20' : 'w-60'} bg-white dark:bg-slate-950 border-e border-slate-200 dark:border-slate-800
        transition-[width,transform] duration-300 ease-in-out
        flex flex-col shrink-0 overflow-hidden
        ${isMobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
      `}
        aria-label={t('adminDashboard.nav.sidebar', 'قائمة الإدارة')}
      >
        <div className={`p-4 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between gap-3'} border-b border-slate-100 dark:border-slate-900 shrink-0`}>
          {isSidebarCollapsed ? (
            <PlatformLogoIcon size={30} className="shrink-0 drop-shadow-xs" />
          ) : (
            <div className="flex items-center gap-3 overflow-hidden">
              <PlatformLogoIcon size={36} className="shrink-0 drop-shadow-xs" />
              <div className="text-start whitespace-nowrap">
                <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-base leading-tight">
                  {t('adminDashboard.header.title', 'منارة العز')}
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">
                  {t('adminDashboard.header.subtitle', 'لوحة الإدارة')}
                </p>
              </div>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex items-center justify-center h-8 w-8 rounded-lg text-gray-500 hover:text-teal-600 hover:bg-teal-50 dark:text-slate-400 dark:hover:text-teal-400 dark:hover:bg-slate-700 transition-all duration-200 flex-shrink-0"
            title={isSidebarCollapsed ? 'توسيع القائمة' : 'تصغير القائمة'}
            aria-label={isSidebarCollapsed ? 'توسيع القائمة' : 'تصغير القائمة'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-panel-left-close h-5 w-5 transition-transform duration-300 ${isRtl ? (isSidebarCollapsed ? '' : 'rotate-180') : (isSidebarCollapsed ? 'rotate-180' : '')}`}
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
              <path d="m16 15-3-3 3-3"></path>
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thin" aria-label={t('adminDashboard.nav.main', 'التنقل الرئيسي')}>
          {accessibleNavItems.map((item) => (
            <NavItem key={item.path} item={item} t={t} onClose={closeMobileMenu} isCollapsed={isSidebarCollapsed} />
          ))}
        </nav>
        <div className={`p-4 border-t border-slate-100 dark:border-slate-800 shrink-0 space-y-3 bg-white dark:bg-slate-950 ${isSidebarCollapsed ? 'flex flex-col items-center' : ''}`}>
          {isSidebarCollapsed ? (
            <Link
              to="/dashboard/admin/settings"
              onClick={closeMobileMenu}
              className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-xs shrink-0 overflow-hidden hover:scale-105 transition-transform"
              title={resolvedName || t('adminDashboard.adminName', 'أحمد الإداري')}
            >
              {userAvatar ? (
                <img src={userAvatar} alt={resolvedName || 'User profile'} className="w-full h-full object-cover" />
              ) : (
                userInitial
              )}
            </Link>
          ) : (
            <Link
              to="/dashboard/admin/settings"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-xs shrink-0 overflow-hidden">
                {userAvatar ? (
                  <img src={userAvatar} alt={resolvedName || 'User profile'} className="w-full h-full object-cover" />
                ) : (
                  userInitial
                )}
              </div>
              <div className="min-w-0 flex-1 text-start truncate">
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-[#0f7a6c] dark:group-hover:text-emerald-400 transition-colors">
                  {resolvedName || t('adminDashboard.adminName', 'أحمد الإداري')}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate">
                  {displayRole}
                </p>
              </div>
            </Link>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className={`w-full flex items-center justify-center gap-2 ${isSidebarCollapsed ? 'w-11 h-11 p-0' : 'py-2.5 px-4'} rounded-2xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer group`}
            title={isSidebarCollapsed ? t('common.logout', 'تسجيل الخروج') : undefined}
          >
            <LogOut size={16} className="transition-transform group-hover:-translate-x-1 shrink-0" aria-hidden="true" />
            {!isSidebarCollapsed && <span className="whitespace-nowrap">{t('common.logout', 'تسجيل الخروج')}</span>}
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="hidden lg:flex h-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 items-center justify-between px-8 sticky top-0 z-20 shrink-0">
          <div className="text-start">
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.panelTitle', 'لوحة التحكم الرئيسية')}
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {t('adminDashboard.panelSubtitle', 'منارة العز أكاديمي - لوحة الإدارة')}
            </p>
          </div>
        </header>
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
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
  )
})