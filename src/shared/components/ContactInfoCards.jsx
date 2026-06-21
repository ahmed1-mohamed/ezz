import { useTranslation } from 'react-i18next'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export default function ContactInfoCards({ contactInfo }) {
    const { t } = useTranslation()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-100">
            <a href={`mailto:${contactInfo?.email || 'info@manaratezz.edu.sa'}`} className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="bg-[#FECD31]/20 w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#FECD31]/30">
                    <Mail className="w-5 h-5 text-[#735C00]" />
                </div>
                <div className="text-start">
                    <h4 className="font-bold text-slate-900">{t('contact.info.emailTitle', 'البريد الإلكتروني')}</h4>
                    <p className="text-sm text-slate-500 font-medium">{contactInfo?.email || 'info@manaratezz.edu.sa'}</p>
                </div>
            </a>

            <a href={`https://wa.me/${(contactInfo?.whatsapp || '+0201012345678').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1 border-y md:border-y-0 md:border-x border-slate-100 py-6 md:py-0">
                <div className="bg-[#E6F0ED] w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#E6F0ED]/80">
                    <MessageCircle className="w-5 h-5 text-[#00695C]" />
                </div>
                <div className="text-start">
                    <h4 className="font-bold text-slate-900">{t('contact.info.whatsappTitle', 'واتساب')}</h4>
                    <p className="text-sm text-slate-500 font-medium">{contactInfo?.whatsapp || '+0201012345678'}</p>
                </div>
            </a>

            <a href={`tel:${contactInfo?.phone || '+0201012345678'}`} className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-slate-200">
                    <Phone className="w-5 h-5 text-slate-600" />
                </div>
                <div className="text-start">
                    <h4 className="font-bold text-slate-900">{t('contact.info.phoneTitle', 'اتصل بنا')}</h4>
                    <p className="text-sm text-slate-500 font-medium">{contactInfo?.phone || '+0201012345678'}</p>
                </div>
            </a>
        </div>
    )
}
