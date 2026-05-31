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
                        <h2 className="text-2xl font-bold text-[#00695C]">{t('public.footer.brand')}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {t('public.footer.description')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#00695C]">{t('public.footer.policies')}</h3>
                        <ul className="space-y-3">
                            {policyLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-gray-600 hover:text-[#00695C] transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#00695C]">{t('public.footer.quickLinks')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/curriculums" className="text-gray-600 hover:text-[#00695C] transition-colors">{t('public.nav.curriculums', 'المناهج')}</a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-gray-600 hover:text-[#00695C] transition-colors">{t('public.nav.pricing', 'الأسعار')}</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-600 hover:text-[#00695C] transition-colors">{t('public.nav.aboutUs', 'من نحن')}</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-600 hover:text-[#00695C] transition-colors">{t('public.nav.contactUs', 'تواصل معنا')}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#00695C]">{t('public.contact.title')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-[#735C00]" />
                                <span dir="ltr">info@manaratezz.edu.sa</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-[#735C00]" />
                                <span dir="ltr">+0201012345678</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#735C00]">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span dir="ltr">+0201012345678</span>
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
