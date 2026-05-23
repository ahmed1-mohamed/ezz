import { useTranslation } from "react-i18next"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    const { t } = useTranslation()
    const policyLinks = [
        { label: t('public.footer.privacy'), href: '#' },
        { label: t('public.footer.terms'), href: '#' },
        { label: t('public.footer.refund'), href: '#' },
        { label: t('public.footer.support'), href: '#' },
    ]
    const quickLinks = [
        { label: t('public.nav.aboutUs'), href: '/about' },
        { label: t('public.nav.courses'), href: '/courses' },
        { label: t('public.nav.contactUs'), href: '/contact' },
    ]

    return (
        <footer className="bg-white text-slate-900">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-accent-teal">{t('public.footer.brand')}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {t('public.footer.description')}
                        </p>
                        <div className="flex gap-3 justify-start">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-accent-teal flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full border border-accent-teal flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-accent-teal flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37a4 4 0 1 1-4.05-4 4 4 0 0 1 4.05 4z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-accent-teal">{t('public.footer.policies')}</h3>
                        <ul className="space-y-3">
                            {policyLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-gray-600 hover:text-accent-teal transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-accent-teal">{t('public.footer.quickLinks')}</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-gray-600 hover:text-accent-teal transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-accent-teal">{t('public.contact.title')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-gold-dark" />
                                <span>{t('public.contact.address')}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-gold-dark" />
                                <span dir="ltr">{t('public.contact.phone')}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-gold-dark" />
                                <span>{t('public.contact.email')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200 py-4">
                <p className="text-center text-gray-500 text-sm">
                    {t('public.footer.copyright')}
                </p>
            </div>
        </footer>
    )
}
