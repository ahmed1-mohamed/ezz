import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function ContactBanner() {
    const { t } = useTranslation()
    
    return (
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
    )
}
