import { useTranslation } from "react-i18next"
import { ExternalLink, ChevronLeft, ChevronRight, ShieldCheck, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logoImg from '@/images/programs/NewLogo.webp'
import qrImg from '@/images/footer/whatsapp-qr.webp'

const DISPLAY_PHONE = '+971 50 341 7838'
const WHATSAPP_CHAT_URL = 'https://wa.me/message/W7OPZCRZT6PPE1'
const SUPPORT_EMAIL = 'support@mezzedu.com'
const PHONE_1 = '+971 566126838'
const PHONE_1_CLEAN = '+971566126838'

function LinkedInIcon({ className = "w-5 h-5" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
    )
}

function InstagramIcon({ className = "w-5 h-5" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}

function FacebookIcon({ className = "w-5 h-5" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    )
}

function SnapchatIcon({ className = "w-5 h-5" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12.008 2c-3.714 0-6.07 2.766-6.07 6.136 0 1.077.29 2.428.742 3.33-.518.23-1.223.633-1.494 1.15-.31.594-.257 1.25.138 1.748.473.595 1.266.745 2.052.79.034.254.085.503.155.748-.682.262-1.536.716-1.877 1.353-.35.654-.253 1.38.256 1.905.57.587 1.488.72 2.373.746.545.694 1.597 1.144 3.725 1.144 2.128 0 3.18-.45 3.725-1.144.885-.026 1.803-.159 2.373-.746.509-.525.606-1.251.256-1.905-.341-.637-1.195-1.091-1.877-1.353.07-.245.121-.494.155-.748.786-.045 1.579-.195 2.052-.79.395-.498.448-1.154.138-1.748-.271-.517-.976-.92-1.494-1.15.452-.902.742-2.253.742-3.33C18.078 4.766 15.722 2 12.008 2z" />
        </svg>
    )
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
        </svg>
    )
}

function YouTubeIcon({ className = "w-5 h-5" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    )
}

const SOCIAL_LINKS = [
    {
        name: 'WhatsApp',
        href: WHATSAPP_CHAT_URL,
        icon: WhatsAppIcon,
        colorClass: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/manarat_al_ezz?xtok=MXQ0dXN5Y3A0MnZ2bg==',
        icon: InstagramIcon,
        colorClass: 'hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/manart-alezz-academy-733b17441?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        icon: LinkedInIcon,
        colorClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1EMg1gQnSH/',
        icon: FacebookIcon,
        colorClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
    {
        name: 'Snapchat',
        href: 'https://www.snapchat.com/add/manartalezz?share_id=mPaSsqD80BI&locale=en-GB',
        icon: SnapchatIcon,
        colorClass: 'hover:bg-[#FFFC00] hover:text-slate-900 hover:border-[#FFFC00]',
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com/@manartalezzacademy?si=lXheWloLgemdTFPr',
        icon: YouTubeIcon,
        colorClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    },
]

export default function Footer() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n?.language?.startsWith('ar') ?? true
    const policyLinks = [
        { label: t('public.footer.privacy', 'سياسة الخصوصية'), href: '/privacy' },
        { label: t('public.footer.terms', 'الشروط والأحكام'), href: '/terms' },
        { label: t('public.footer.refund', 'سياسة الاسترجاع'), href: '/refund' },
        { label: t('public.footer.support', 'الدعم الفني'), href: '/support' },
    ]
    const quickLinks = [
        { label: t('public.nav.curriculums', 'المناهج'), href: '/curriculums' },
        { label: t('public.nav.pricing', 'الأسعار'), href: '/pricing' },
        { label: t('public.nav.aboutUs', 'من نحن'), href: '/about' },
        { label: t('public.nav.contactUs', 'تواصل معنا'), href: '/contact' },
    ]
    const Chevron = isRtl ? ChevronLeft : ChevronRight
    return (
        <footer className="relative bg-white text-slate-900 border-t border-slate-200/90 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800/90 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 via-[#735C00] to-emerald-600 opacity-60 dark:opacity-80" />
            <div className="container mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-start items-start">
                    <div className="lg:col-span-4 space-y-5">
                        <div className="flex items-center gap-3">
                            <img
                                src={logoImg}
                                alt="Manarat Al-Ezz Logo"
                                className="w-12 h-12 object-contain drop-shadow-xs"
                                width="48"
                                height="48"
                                loading="lazy"
                            />
                            <div>
                                <h2 className="text-xl sm:text-2xl font-black text-[#00695C] dark:text-emerald-400 leading-tight">
                                    {t('public.footer.brand', 'أكاديمية منارة العز')}
                                </h2>
                                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                                    {t('home.badge', 'أكاديمية تعليمية متكاملة')}
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-sm">
                            {t('public.footer.description', 'نقدم محتوى تعليمي متخصص لغرس القيم وبناء جيل متسلح بالعلم والإيمان، مع متابعة دقيقة لكل طالب.')}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/40 shadow-2xs">
                            <ShieldCheck className="w-4 h-4 text-[#00695C] dark:text-emerald-400 shrink-0" />
                            <span>{isRtl ? 'تعليم موثوق بمعايير معتمدة' : 'Accredited Educational Standards'}</span>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-base font-extrabold text-[#00695C] dark:text-emerald-400 relative inline-block">
                            {t('public.footer.policies', 'السياسات')}
                            <span className="block h-0.5 w-6 bg-[#735C00] dark:bg-amber-400 rounded-full mt-1.5" />
                        </h3>
                        <nav aria-label={t('public.footer.policies', 'السياسات')}>
                            <ul className="space-y-2.5">
                                {policyLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.href}
                                            className="group flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-[#00695C] dark:hover:text-emerald-400 transition-colors"
                                        >
                                            <Chevron className="w-3.5 h-3.5 text-slate-400 opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-base font-extrabold text-[#00695C] dark:text-emerald-400 relative inline-block">
                            {t('public.footer.quickLinks', 'روابط سريعة')}
                            <span className="block h-0.5 w-6 bg-[#735C00] dark:bg-amber-400 rounded-full mt-1.5" />
                        </h3>
                        <nav aria-label={t('public.footer.quickLinks', 'روابط سريعة')}>
                            <ul className="space-y-2.5">
                                {quickLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.href}
                                            className="group flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-[#00695C] dark:hover:text-emerald-400 transition-colors"
                                        >
                                            <Chevron className="w-3.5 h-3.5 text-slate-400 opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-base font-extrabold text-[#00695C] dark:text-emerald-400 relative inline-block">
                            {t('public.contact.title', 'تواصل معنا')}
                            <span className="block h-0.5 w-6 bg-[#735C00] dark:bg-amber-400 rounded-full mt-1.5" />
                        </h3>
                        <div className="space-y-2 pt-0.5">
                            <a
                                href={`mailto:${SUPPORT_EMAIL}`}
                                className="group flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:text-[#00695C] dark:hover:text-emerald-400 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#735C00] dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#735C00] group-hover:text-white transition-all shadow-2xs">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <span className="font-medium text-xs sm:text-sm font-mono dir-ltr">
                                    {SUPPORT_EMAIL}
                                </span>
                            </a>
                            <a
                                href={`tel:${PHONE_1_CLEAN}`}
                                className="group flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:text-[#00695C] dark:hover:text-emerald-400 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#735C00] dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#735C00] group-hover:text-white transition-all shadow-2xs">
                                    <Phone className="w-4 h-4" />
                                </span>
                                <span className="font-bold text-xs sm:text-sm font-mono dir-ltr">
                                    {PHONE_1}
                                </span>
                            </a>
                        
                        </div>
                        <a
                            href={WHATSAPP_CHAT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3.5 p-3 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-white dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-500/25 dark:border-emerald-500/30 hover:border-[#25D366] transition-all duration-300 shadow-2xs hover:shadow-md hover:scale-[1.02]"
                            aria-label={isRtl ? 'تواصل عبر واتساب أو امسح رمز الاستجابة السريعة' : 'Contact via WhatsApp or scan QR code'}
                        >
                            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white p-1 shadow-xs border border-slate-200/80 dark:border-slate-700 shrink-0 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                                <img
                                    src={qrImg}
                                    alt="WhatsApp QR Code"
                                    className="w-full h-full object-contain"
                                    width="72"
                                    height="72"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-transparent transition-colors pointer-events-none" />
                            </div>
                            <div className="flex-1 text-start min-w-0">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#00695C] dark:text-emerald-300 text-[10px] font-extrabold mb-1">
                                    <WhatsAppIcon className="w-3 h-3 text-[#25D366]" />
                                    <span>{isRtl ? 'واتساب للأعمال' : 'WhatsApp Business'}</span>
                                </div>
                                <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-[#00695C] dark:group-hover:text-emerald-400 transition-colors truncate">
                                    {isRtl ? 'امسح الرمز أو انقر للمحادثة' : 'Scan QR or tap to chat'}
                                </p>
                                <p dir="ltr" className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                                    {DISPLAY_PHONE}
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-emerald-100/60 dark:bg-emerald-900/40 text-[#00695C] dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </a>
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2.5">
                                {t('public.footer.socialMedia', isRtl ? 'حساباتنا الرسمية' : 'Official Social Channels')}
                            </p>
                            <div className="grid grid-cols-6 gap-2">
                                {SOCIAL_LINKS.map((social) => {
                                    const IconComponent = social.icon
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            title={social.name}
                                            className={`w-12 h-12 sm:w-12 sm:h-12 rounded-xl bg-slate-100/90 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800 flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-110 active:scale-95 ${social.colorClass}`}
                                        >
                                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200/80 dark:border-slate-800/80 py-5 bg-slate-50/50 dark:bg-slate-900/40">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <p className="text-center sm:text-start">
                        {t('public.footer.copyright', 'جميع الحقوق محفوظة © 2026 أكاديمية منارة العز')}
                    </p>
                    <p className="text-center sm:text-end font-medium text-slate-400 dark:text-slate-500">
                        {isRtl ? 'تُنير العقول، ونرتقي بالمستقبل.' : 'Illuminate Minds. Elevate Futures.'}
                    </p>
                </div>
            </div>
        </footer>
    )
}
