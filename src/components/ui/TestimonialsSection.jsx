import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "خالد الراشد",
        text: "الجودة التقنية عالية جدًا لم نواجه أي مشاكل في الاتصال، والمعلمون صبورون جداً ويشرحون بأسلوب تدريس حديث ومبتكر.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "أم لين",
        text: "النظام والمتابعة الدقيقة أكثر ما أعجبني، أستطيع متابعة ابنتي في كل حصة من خلال هاتفي مباشرة، تجربة ممتازة.",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "أبو سيف",
        text: "لم أتوقع ابنتي تحب دروس القرآن بهذا الشكل، المعلمون لديهم أسلوب تربوي رائع يجعل الطفل يحب الحفظ والتعلم.",
        image:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-[#EEF5F3] py-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0F7A6C]/5 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-[#1B1B1B]">
                        آراء أولياء الأمور
                    </h2>

                    <p className="mt-5 text-[#6B7280] text-lg">
                        قصص نجاح من عائلة منارة العز
                    </p>
                </motion.div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                            }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 rounded-[32px] bg-[#0F7A6C] blur-2xl opacity-10 group-hover:opacity-100 transition duration-500" />

                            <div className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-10 shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-white overflow-hidden min-h-[280px] flex flex-col justify-between">
                                <div className="absolute top-6 left-6 text-[#0F7A6C] text-7xl font-black">
                                    "
                                </div>

                                <p className="relative z-10 text-[#555] text-md leading-9  mt-6">
                                    {item.text}
                                </p>

                                <div className="flex items-center justify-start gap-4 mt-10">
                                    <div className="relative z-10 text-right">
                                        <h3 className="font-extrabold text-[#222] text-lg">
                                            {item.name}
                                        </h3>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#17B89C] blur-md opacity-60 group-hover:opacity-100 transition duration-500" />

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    </div>
                                </div>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                                    <div className="absolute -top-20 left-[-120px] rotate-12 w-40 h-[400px] bg-white/30 blur-2xl" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}