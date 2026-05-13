import { useTranslation } from "react-i18next";
import { ShieldCheck, BookOpen, Video } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
    {
        title: "متابعة دقيقة",
        description:
            "لوحة تحكم شاملة لأولياء الأمور توفر رؤية كاملة عن مستوى الطالب والتقدم في الحفظ والدروس لحظة بلحظة.",
        Icon: ShieldCheck,
    },
    {
        title: "معلمون معتمدون",
        description:
            "نخبة من المعلمين المتميزين الحاصلين على إجازات عالية في القرآن وشهادات مؤهلة في التربية والتعليم.",
        Icon: BookOpen,
    },
    {
        title: "حصص مباشرة",
        description:
            "جلسات تفاعلية حية مباشرة تضمن التركيز والمتابعة المستمرة بين المعلم والطالب بأحدث التقنيات.",
        Icon: Video,
    },
];

export default function PremiumParentsSection() {
    const { i18n } = useTranslation();

    return (
        <section
            dir={i18n.dir()}
            className="relative rounded-3xl border border-[#0F7A6C]/20 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20 shadow-[0_20px_60px_rgba(15,122,108,0.08)]"
        >
            <div className="mx-auto max-w-7xl flex flex-col gap-10 sm:gap-14">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-4xl font-black text-[#0F7A6C]">
                        لماذا يختارنا الأهالى؟
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />

                    <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-7">
                        نقدم تجربة متكاملة بخدمات تعليمية ذكية واحترافية لمتابعة العملية التعليمية بكل وضوح وشفافية.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {cards.map(({ title, description, Icon }, index) => (
                        <motion.article
                            key={title}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-500 shadow-md hover:shadow-[0_30px_90px_rgba(15,122,108,0.12)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0F7A6C]/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

                            <div className="relative z-10 mb-7">
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0F7A6C]/10 transition group-hover:bg-[#0F7A6C] group-hover:scale-110">
                                    <Icon className="w-8 h-8 text-[#0F7A6C] group-hover:text-white transition" />
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-1 flex-col">
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                    {title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-7 text-sm sm:text-base">
                                    {description}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
}