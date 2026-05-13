 import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import program1 from "../../images/برامجنا/2.jpg";
import program2 from "../../images/برامجنا/1.jpg";
import program3 from "../../images/برامجنا/3.jpg";

const programs = [
    {
        image: program3,
        title: "البرنامج المتكامل",
        description:
            "برنامج شامل يجمع بين تعليم القرآن واللغة العربية في مسار متكامل لبناء جيل يعتز بهويته الإسلامية.",
        tags: ["8 أشهر", "جميع المستويات", "شهادة مزدوجة"],
        features: ["منهج شامل ومتكامل", "متابعة دقيقة للتقدم", "خصم خاص للبرنامج"],
        badge: "أفضل قيمة",
    },
    {
        image: program2,
        title: "برنامج اللغة العربية",
        description:
            "تعلم اللغة العربية من البداية بطريقة سهلة ومبسطة مع تطبيقات عملية مباشرة.",
        tags: ["10 حصص", "مبتدئ - متوسط", "شهادة إتمام"],
        features: ["دروس تفاعلية مباشرة", "تطبيق عملي مستمر", "تأسيس لغوي شامل"],
        badge: "مميز",
    },
    {
        image: program1,
        title: "برنامج تحفيظ القرآن الكريم",
        description:
            "منهجية متدرجة للحفظ مع التركيز على مخارج الحروف وأحكام التجويد، مع خطط مخصصة لكل طالب حسب قدراته.",
        tags: ["12 حصة", "جميع المستويات", "إجازة معتمدة"],
        features: ["خطة حفظ فردية", "جلسات تصحيح تلاوة", "مراجعة دورية"],
        badge: "الأكثر طلبًا",
    },
];

export default function EducationalPrograms() {
    const { i18n } = useTranslation();

    return (
        <section
            dir={i18n.dir()}
            className="relative bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[#0F7A6C]/10 blur-[120px]" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F7A6C]">
                        برامجنا التعليمية
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />

                    <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-7 sm:leading-8">
                        صممنا برامجنا التعليمية بعناية لتناسب جميع المستويات بأسلوب حديث تفاعلي
                        يدمج بين الفهم العميق والتطبيق العملي.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {programs.map((program, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200 shadow-md  transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
                        >
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold text-[#0F7A6C] shadow-md">
                                    {program.badge}
                                </span>
                            </div>

                            <div className="p-5 sm:p-6 flex flex-col">

                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0F7A6C] transition">
                                    {program.title}
                                </h3>

                                <p className="mt-3 sm:mt-4 text-slate-600 leading-7 sm:leading-8 text-xs sm:text-sm">
                                    {program.description}
                                </p>

                                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                                    {program.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:border-[#0F7A6C] hover:text-[#0F7A6C] transition"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
                                    {program.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-5 w-5 rounded-full bg-[#0F7A6C] flex items-center justify-center shadow-sm">
                                                <Check className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-xs sm:text-sm text-slate-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="mt-6 sm:mt-8 relative overflow-hidden rounded-2xl bg-[#0F7A6C] py-2.5 sm:py-3.5 font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:bg-[#005F54] hover:shadow-lg active:scale-[0.98]">
                                    سجل الآن
                                </button>

                            </div>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
}