import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, Mail, MessageCircle, Phone } from 'lucide-react'

export default function ContactForm() {
    const { t } = useTranslation()

    return (
        <section className="max-w-5xl mx-auto mb-24 px-4 sm:px-6 lg:px-8">
            
            {/* Top Banner */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 sm:p-10 mb-8 shadow-sm border border-slate-100 text-center space-y-3"
            >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {t('contact.banner.title', 'تواصل معنا للتسجيل والاشتراك')}
                </h2>
                <p className="text-slate-500 font-medium text-base sm:text-lg">
                    {t('contact.banner.desc', 'امنح أطفالك فرصة للتعلم والتطور من خلال دوراتنا التعليمية المصممة لتنمية المهارات وبناء الثقة بطريقة ممتعة وآمنة.')}
                </p>
            </motion.div>

            {/* Form Box */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-lg border border-slate-100/50"
            >
                <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Name */}
                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.name', 'الاسم الكامل')}
                            </label>
                            <input 
                                type="text" 
                                placeholder={t('contact.form.namePlaceholder', 'أدخل اسمك هنا')} 
                                className="w-full bg-[#F5F5F2] border-none text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-shadow"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.email', 'البريد الإلكتروني')}
                            </label>
                            <input 
                                type="email" 
                                placeholder={t('contact.form.emailPlaceholder', 'example@mail.com')} 
                                className="w-full bg-[#F5F5F2] border-none text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-shadow text-start"
                            />
                        </div>

                        {/* Subject */}
                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.subject', 'موضوع الرسالة')}
                            </label>
                            <input 
                                type="text" 
                                placeholder={t('contact.form.subjectPlaceholder', 'أدخل الموضوع')} 
                                className="w-full bg-[#F5F5F2] border-none text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-shadow"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.phone', 'رقم الهاتف')}
                            </label>
                            <input 
                                type="tel" 
                                placeholder={t('contact.form.phonePlaceholder', '+0201012345678')} 
                                className="w-full bg-[#F5F5F2] border-none text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-shadow text-start"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 text-start">
                        <label className="block text-sm font-bold text-slate-700 px-1">
                            {t('contact.form.message', 'رسالتك')}
                        </label>
                        <textarea 
                            rows="6"
                            placeholder={t('contact.form.messagePlaceholder', 'كيف يمكننا مساعدتك اليوم؟')} 
                            className="w-full bg-[#F5F5F2] border-none text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-5 transition-shadow resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button 
                            type="submit"
                            className="bg-[#00695C] hover:bg-[#005247] text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 ease-out shadow-md hover:shadow-lg text-lg active:scale-95 hover:-translate-y-1 flex items-center gap-3 cursor-pointer"
                        >
                            <Send className="w-5 h-5 ltr:rotate-180" />
                            {t('contact.form.submit', 'إرسال الرسالة')}
                        </button>
                    </div>
                </form>

                {/* Contact Info Footer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-100">
                    <div className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                        <div className="bg-[#FECD31]/20 w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#FECD31]/30">
                            <Mail className="w-5 h-5 text-[#735C00]" />
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-slate-900">{t('contact.info.emailTitle', 'البريد الإلكتروني')}</h4>
                            <p className="text-sm text-slate-500 font-medium">info@manaratezz.edu.sa</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1 border-y md:border-y-0 md:border-x border-slate-100 py-6 md:py-0">
                        <div className="bg-[#E6F0ED] w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#E6F0ED]/80">
                            <MessageCircle className="w-5 h-5 text-[#00695C]" />
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-slate-900">{t('contact.info.whatsappTitle', 'واتساب')}</h4>
                            <p className="text-sm text-slate-500 font-medium">+0201012345678</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                        <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-slate-200">
                            <Phone className="w-5 h-5 text-slate-600" />
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-slate-900">{t('contact.info.phoneTitle', 'اتصل بنا')}</h4>
                            <p className="text-sm text-slate-500 font-medium">+0201012345678</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}
