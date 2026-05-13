import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";

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
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            dir="rtl"
            className="relative bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
        >
            <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[#0F7A6C]/10 blur-[120px]" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-black text-[#0F7A6C] tracking-tight">
                        برامجنا التعليمية
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />

                    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-8">
                        صممنا برامجنا التعليمية بعناية لتناسب جميع المستويات بأسلوب حديث تفاعلي
                        يدمج بين الفهم العميق والتطبيق العملي.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {programs.map((program, index) => (
                        <article
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-4 py-1 text-sm font-bold text-[#0F7A6C] shadow-md">
                                    {program.badge}
                                </span>
                            </div>

                            <div className="p-7 flex flex-col">

                                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#0F7A6C] transition">
                                    {program.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-8 text-sm sm:text-base">
                                    {program.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {program.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-slate-50 border border-slate-200 px-4 py-1 text-xs text-slate-600 hover:border-[#0F7A6C] hover:text-[#0F7A6C] transition"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 space-y-3">
                                    {program.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-5 w-5 rounded-full bg-[#0F7A6C] flex items-center justify-center shadow-sm">
                                                <Check className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-sm text-slate-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="mt-8 relative overflow-hidden rounded-2xl bg-[#0F7A6C] py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#005F54] hover:shadow-lg active:scale-[0.98]">
                                    <span className="relative z-10">سجل الآن</span>
                                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                </button>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}