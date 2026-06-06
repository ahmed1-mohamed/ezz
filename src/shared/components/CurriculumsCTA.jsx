import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CurriculumsCTA() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] bg-[#FDE047] p-10 sm:p-14 shadow-sm mt-12 flex items-center"
        >
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-start">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#735C00]">
                        {t('curriculum.cta.title', 'هل أنت مستعد لبدء رحلتك؟')}
                    </h2>
                    <p className="text-lg text-[#9B7B16] font-medium">
                        {t('curriculum.cta.desc', 'انضم إلى أكثر من ٥٠٠ طالب يستمتعون بتجربة تعليمية فريدة.')}
                    </p>
                    <div className="pt-2">
                        <button 
                            onClick={() => navigate('/contact')}
                            className="bg-[#00695C] hover:bg-[#004D40] text-white px-8 py-3 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-md w-full sm:w-auto"
                        >
                            {t('curriculum.cta.btn', 'سجل الآن مجاناً')}
                        </button>
                    </div>
                </div>
            </div>
            {/* Background Icon */}
            <div className="absolute left-[-2rem] bottom-[-4rem] opacity-[0.15] pointer-events-none md:left-4 md:bottom-[-2rem]">
                <GraduationCap className="w-64 h-64 text-[#735C00] transform -rotate-12" />
            </div>
        </motion.div>
    )
}
