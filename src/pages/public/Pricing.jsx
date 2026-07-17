import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { BookOpen, Award, Gem, CheckCircle2, XCircle } from 'lucide-react'
import { fetchPackagesAndFaqs } from '@/store/landingSlice'

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Pricing() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { packagesData } = useSelector((state) => state.landing)

    useEffect(() => {
        dispatch(fetchPackagesAndFaqs(i18n.language))
    }, [dispatch, i18n.language])

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

    const renderIcon = (icon, index) => {
        if (!icon) {
            const fallbacks = [BookOpen, Award, Gem];
            const FallbackIcon = fallbacks[index % 3];
            return <FallbackIcon className="w-10 h-10 text-[#00695C]" />;
        }
        if (typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('data:'))) {
            const getImageUrl = (imagePath) => {
                if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
                    return imagePath;
                }
                const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
                return `https://manaret-ezz.dramcode.top/${cleanPath}`;
            }
            return <img src={getImageUrl(icon)} className="w-10 h-10 object-contain rounded-full shadow-sm" alt="" />;
        }
        if (typeof icon === 'function' || typeof icon === 'object') {
            const IconComp = icon;
            return <IconComp className="w-10 h-10 text-[#00695C]" />;
        }
        const fallbacks = [BookOpen, Award, Gem];
        const FallbackIcon = fallbacks[index % 3];
        return <FallbackIcon className="w-10 h-10 text-[#00695C]" />;
    }

    const apiPackages = packagesData?.packages?.data;
    const displayPlans = apiPackages && apiPackages.length > 0
        ? apiPackages.map((pkg, index) => ({
            id: pkg.id,
            name: pkg.name,
            price: pkg.price,
            icon: pkg.icon,
            popular: index === 1,
            features: pkg.features ? pkg.features.map(f => ({ text: f, active: true })) : []
        }))
        : plans;

    const apiFaqs = packagesData?.faqs?.data;
    const displayFaqs = apiFaqs && apiFaqs.length > 0
        ? apiFaqs.map(faq => ({
            q: faq.question,
            a: faq.answer
        }))
        : faqs;

    return (
        <div className="min-h-screen bg-[#EEF4F2]/50 py-16 sm:py-24 overflow-hidden font-sans">
            
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {displayPlans.map((plan, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            key={plan.id}
                            className={`relative bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full ${
                                plan.popular 
                                ? 'shadow-lg z-10' 
                                : 'shadow-sm'
                            }`}
                        >
                            
                            <div className="bg-[#E6F0ED] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                {renderIcon(plan.icon, index)}
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{plan.name}</h2>
                            
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

                            <button 
                                aria-label={`${t('pricing.btn', 'ابدأ الآن')} - ${plan.name}`}
                                className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 bg-[#00695C] text-white hover:bg-[#005247]"
                            >
                                {t('pricing.btn', 'ابدأ الآن')}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 mb-10 w-full">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-extrabold text-[#00695C] text-center mb-12"
                >
                    {t('pricing.faq.title', 'الأسئلة الشائعة')}
                </motion.h2>

                <div className="space-y-4">
                    {displayFaqs.map((faq, idx) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            key={idx} 
                            className="bg-white rounded-[1.5rem] p-6 sm:p-8 shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{faq.q}</h3>
                            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    )
}
