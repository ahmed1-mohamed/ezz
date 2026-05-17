import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, Award, Gem, CheckCircle2, XCircle } from 'lucide-react'

export default function Pricing() {
    const { t } = useTranslation()

    const plans = [
        {
            id: 'basic',
            name: t('pricing.basic.name', 'الباقة الأساسية'),
            price: '50',
            icon: BookOpen,
            popular: false,
            features: [
                { text: t('pricing.basic.f1', '4 حصص شهرياً (حصة أسبوعياً)'), active: true },
                { text: t('pricing.basic.f2', '30 دقيقة للحصة الواحدة'), active: true },
                { text: t('pricing.basic.f3', 'تحفيظ وتصحيح تلاوة'), active: true },
                { text: t('pricing.basic.f4', 'تقارير أداء شهرية'), active: false },
            ]
        },
        {
            id: 'advanced',
            name: t('pricing.advanced.name', 'الباقة المتقدمة'),
            price: '90',
            icon: Award,
            popular: true,
            features: [
                { text: t('pricing.advanced.f1', '8 حصص شهرياً (حصتين أسبوعياً)'), active: true },
                { text: t('pricing.advanced.f2', '45 دقيقة للحصة الواحدة'), active: true },
                { text: t('pricing.advanced.f3', 'تفسير مبسط وقصص الأنبياء'), active: true },
                { text: t('pricing.advanced.f4', 'تقارير أداء شهرية مفصلة'), active: true },
            ]
        },
        {
            id: 'elite',
            name: t('pricing.elite.name', 'باقة النخبة'),
            price: '130',
            icon: Gem,
            popular: false,
            features: [
                { text: t('pricing.elite.f1', '12 حصة شهرياً (3 حصص أسبوعياً)'), active: true },
                { text: t('pricing.elite.f2', '60 دقيقة للحصة الواحدة'), active: true },
                { text: t('pricing.elite.f3', 'متابعة خاصة مع شيخ مجاز'), active: true },
                { text: t('pricing.elite.f4', 'دورة تجويد مكثفة مجانية'), active: true },
            ]
        }
    ]

    const faqs = [
        {
            q: t('pricing.faq.q1', 'هل يمكنني تغيير الباقة لاحقاً؟'),
            a: t('pricing.faq.a1', 'نعم بالتأكيد، يمكنك الترقية أو تغيير باقتك في أي وقت من خلال لوحة التحكم الخاصة بك، وسيتم تعديل الرسوم بدءاً من الشهر التالي.')
        },
        {
            q: t('pricing.faq.q2', 'ماذا يحدث إذا فاتني موعد الحصة؟'),
            a: t('pricing.faq.a2', 'نوفر إمكانية تعويض حصة واحدة شهرياً في حال تم الاعتذار قبل الموعد بـ 24 ساعة على الأقل لتنسيق موعد بديل مع المعلم.')
        },
        {
            q: t('pricing.faq.q3', 'هل توجد خصومات للإخوة؟'),
            a: t('pricing.faq.a3', 'نعم، نقدم خصماً بنسبة 15% للطفل الثاني و 25% للطفل الثالث وما فوق عند التسجيل في نفس الباقة.')
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    }

    return (
        <div className="min-h-screen bg-[#EEF4F2]/50 py-16 sm:py-24 overflow-hidden font-sans">
            
             <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00695C] leading-tight">
                    {t('pricing.header.title', 'استثمر في رحلة طفلك الروحية')}
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                    {t('pricing.header.subtitle', 'خطط مرنة مصممة لتناسب احتياجات كل عائلة، مع نخبة من المعلمين المعتمدين في بيئة تعليمية آمنة وملهمة.')}
                </p>
            </motion.div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                >
                    {plans.map((plan) => (
                        <motion.div 
                            variants={itemVariants}
                            key={plan.id}
                            className={`relative bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 group ${
                                plan.popular 
                                ? 'border-2 border-[#735C00] shadow-[0_10px_40px_rgba(115,92,0,0.12)] lg:scale-[1.05] z-10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(115,92,0,0.15)]' 
                                : 'shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 bg-[#735C00] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md">
                                    {t('pricing.popular', 'الأكثر طلباً')}
                                </div>
                            )}
                            
                            <div className="bg-[#E6F0ED] w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <plan.icon className="w-10 h-10 text-[#00695C]" />
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{plan.name}</h3>
                            
                            <div className="flex items-baseline justify-center gap-1.5 mb-10">
                                <span className="text-5xl sm:text-6xl font-black text-[#00695C]">${plan.price}</span>
                                <span className="text-slate-500 font-medium text-base">{t('pricing.monthly', '/شهرياً')}</span>
                            </div>

                            <ul className="space-y-5 w-full mb-10 flex-1 text-start px-2">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        {feat.active ? (
                                            <CheckCircle2 className="w-6 h-6 text-[#00695C] shrink-0" />
                                        ) : (
                                            <XCircle className="w-6 h-6 text-slate-300 shrink-0" />
                                        )}
                                        <span className={`text-base sm:text-lg font-medium ${feat.active ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                                            {feat.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                                plan.popular 
                                ? 'bg-[#00695C] text-white hover:bg-[#005247] shadow-lg shadow-[#00695C]/25' 
                                : 'bg-[#F1F5F9] text-slate-700 hover:bg-[#E2E8F0]'
                            }`}>
                                {t('pricing.btn', 'ابدأ الآن')}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 mb-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-extrabold text-[#00695C] text-center mb-12"
                >
                    {t('pricing.faq.title', 'الأسئلة الشائعة')}
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {faqs.map((faq, idx) => (
                        <motion.div 
                            variants={itemVariants}
                            key={idx} 
                            className="bg-white rounded-[1.5rem] p-6 sm:p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{faq.q}</h3>
                            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    )
}
