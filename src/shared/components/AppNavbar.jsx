import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Globe, Menu, X } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button.jsx'
import Container from './Container.jsx'
import { setLanguage } from '../../i18n.js'
import { publicNavigation } from '@/shared/constants/publicNavigation.js'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
export default function AppNavbar() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault()
            const hero = document.getElementById('hero-section')
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' })
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } else {
            e.preventDefault()
            navigate('/', { state: { scrollToHero: true } })
        }
    }

    const { user, logout } = useAuth()
    const hasToken = !!localStorage.getItem('access_token')
    const isAuthenticated = user && hasToken

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLanguageToggle = (e) => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar'
        setLanguage(newLang)

        const btn = e.currentTarget
        if (btn) {
            btn.style.transition = 'transform 0.6s ease'
            btn.style.transform = 'rotate(360deg)'
            setTimeout(() => {
                btn.style.transition = 'none'
                btn.style.transform = 'rotate(0deg)'
            }, 600)
        }
    }

    const navItems = publicNavigation.map((item) => ({
        label: item.labelKey,
        to: item.path,
    }))

    return (
        <motion.header
            ref={navRef}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
                : 'bg-white shadow-sm border-b border-slate-100/50'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-14 sm:h-16 relative">
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex-shrink-0 text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
                    >
                        {t('appName', 'منارة العز')}
                    </Link>

                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <button
                            onClick={handleLanguageToggle}
                            className="inline-flex items-center justify-center h-9 w-9 xl:h-10 xl:w-10 rounded-full hover:bg-brand-500/10 text-brand-500 transition-all duration-200 hover:scale-105"
                            title={t('language.toggle', 'تغيير اللغة')}
                            aria-label="Toggle language"
                        >
                            <Globe size={20} strokeWidth={1.5} />
                        </button>

                        <nav className="flex items-center gap-1" aria-label={t('public.nav.main', 'الملاحة الرئيسية')}>
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                            ? 'text-white bg-gradient-to-r from-brand-500 to-brand-700 shadow-md'
                                            : 'text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 hover:scale-105'
                                        }`
                                    }
                                >
                                    {t(item.label)}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/login">
                                    <Button
                                        variant="ghost"
                                        className="text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 transition-all duration-200"
                                    >
                                        {t('public.login', 'تسجيل الدخول')}
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 xl:px-6 py-2.5 xl:py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
                                    >
                                        {t('public.joinUs', 'انضم إلينا')}
                                    </motion.button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    onClick={logout}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-semibold"
                                >
                                    {t('public.logout', 'تسجيل الخروج')}
                                </Button>
                                <Link to={getRedirectPath(user?.role)}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 xl:px-6 py-2.5 xl:py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
                                    >
                                        {t('public.dashboard', 'لوحة التحكم')}
                                    </motion.button>
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={handleLanguageToggle}
                            className="inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-brand-500/10 text-brand-500 transition-all duration-200 hover:scale-105"
                            title={t('language.toggle', 'تغيير اللغة')}
                            aria-label="Toggle language"
                        >
                            <Globe size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-slate-700 hover:bg-brand-500/10 hover:text-brand-500 transition-all duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute left-4 right-4 top-16 z-[999] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 p-6 flex flex-col space-y-4 lg:hidden"
                        >
                            <nav className="flex flex-col space-y-2" aria-label={t('public.nav.mobile', 'قائمة الجوال')}>
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${isActive
                                                ? 'text-white bg-gradient-to-r from-brand-500 to-brand-700 shadow-md'
                                                : 'text-slate-700 hover:text-brand-500 hover:bg-brand-500/5'
                                            }`
                                        }
                                    >
                                        {t(item.label)}
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/60">
                                {!isAuthenticated ? (
                                    <>
                                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button
                                                variant="ghost"
                                                className="w-full text-slate-700 hover:text-brand-500 hover:bg-brand-500/5"
                                            >
                                                {t('public.login', 'تسجيل الدخول')}
                                            </Button>
                                        </Link>
                                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-center animate-none"
                                            >
                                                {t('public.joinUs', 'انضم إلينا')}
                                            </motion.button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="ghost"
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 font-semibold"
                                        >
                                            {t('public.logout', 'تسجيل الخروج')}
                                        </Button>
                                        <Link to={getRedirectPath(user?.role)} onClick={() => setIsMobileMenuOpen(false)}>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-center animate-none"
                                            >
                                                {t('public.dashboard', 'لوحة التحكم')}
                                            </motion.button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.header>
    )
}
