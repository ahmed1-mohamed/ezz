import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";

// 👇 استيراد الصور من الجهاز
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
            className="relative bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#0F7A6C]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative mx-auto max-w-8xl">

                {/* Header */}
                <div ref={titleRef} className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F7A6C]">
                        برامجنا التعليمية
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-[#D4AF37]" />

                    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-8">
                        صممنا برامجنا التعليمية بعناية لتناسب جميع المستويات والأعمار بأساليب حديثة وتفاعلية.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {programs.map((program, index) => (
                        <article
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-[#0F7A6C] px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                                    {program.badge}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-7">

                                <h3 className="text-2xl font-extrabold text-[#0F172A]">
                                    {program.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-8">
                                    {program.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {program.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="mt-8 flex flex-col gap-4">
                                    {program.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0F7A6C]">
                                                <Check className="h-3.5 w-3.5 text-white" />
                                            </div>
                                            <span className="text-sm text-slate-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <button className="mt-8 rounded-2xl bg-[#0F7A6C] py-3.5 font-bold text-white transition hover:bg-[#005F54]">
                                    سجل الآن
                                </button>

                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}