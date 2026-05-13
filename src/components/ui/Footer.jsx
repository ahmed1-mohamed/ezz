import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer dir="rtl">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#1a8a7a]">منارة العز</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            أكاديمية رائدة في مجال التعليم القرآني والتربوي
                            عن بعد. نسعى لنشر نور الوحي في كل بيت عبر
                            تقنيات حديثة ومعايير تعليمية عالمية.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-[#1a8a7a] flex items-center justify-center text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-[#1a8a7a] flex items-center justify-center text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" x2="22" y1="12" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-[#1a8a7a] flex items-center justify-center text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#1a8a7a]">القوانين والسياسات</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    الخصوصية
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    الشروط والأحكام
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    سياسة الاسترجاع
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    الدعم الفني
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#1a8a7a]">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    من نحن
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    الأسئلة الشائعة
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    مدونة المنارة
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-[#1a8a7a] transition-colors">
                                    فرص العمل
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#1a8a7a]">تواصل معنا</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-600">
                                <Mail className="w-5 h-5 text-[#c9a227]" />
                                <span>info@manaratezz.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-5 h-5 text-[#c9a227]" />
                                <span dir="ltr">+0201012345678</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-5 h-5 text-[#c9a227]" />
                                <span>القاهرة , جمهورية مصر العربية</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 py-4">
                <p className="text-center text-gray-500 text-sm">
                    © 2026 منارة العز أكاديمي - جميع الحقوق محفوظة
                </p>
            </div>
        </footer>
    )
}
