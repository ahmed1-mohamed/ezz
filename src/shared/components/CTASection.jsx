import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CTASection({
    titleKey = 'cta.title',
    defaultTitle = 'هل أنت مستعد لبدء رحلتك نحو النور؟',
    descKey = 'cta.desc',
    defaultDesc = 'انضم إلى آلاف الطلاب اليوم واستفد من خصم 20% على الشهر الأول لجميع البرامج التعليمية.',
    btnKey = 'cta.btn',
    defaultBtn = 'انضم الآن و أبدأ',
    className = ''
}) {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#00695C] to-[#004D40] p-10 sm:p-14 text-center text-white shadow-2xl mt-12 ${className}`}
        >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#FEF6E0_0%,transparent_50%)]" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#FEF6E0_0%,transparent_50%)]" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                    {t(titleKey, defaultTitle)}
                </h2>
                <p className="text-lg text-emerald-50/90 font-medium">
                    {t(descKey, defaultDesc)}
                </p>
                <div className="pt-4">
                    <button 
                        onClick={() => navigate('/contact')}
                        className="bg-black hover:bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg w-full sm:w-auto cursor-pointer hover:-translate-y-1"
                    >
                        {t(btnKey, defaultBtn)}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
