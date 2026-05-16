import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TestimonialsSection() {
    const { t, i18n } = useTranslation();

    const testimonials = t('testimonials.items', { returnObjects: true });

    return (
        <section className="relative overflow-hidden bg-[#EEF5F3] py-24">
            <div className="relative max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-[#1B1B1B]">
                        {t('testimonials.title')}
                    </h2>

                    <p className="mt-5 text-[#6B7280] text-lg">
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => {
                        // Use provided image or fallback to a professional avatar placeholder
                        const avatarImage = item.image || `https://i.pravatar.cc/150?img=${(index * 5) + 11}`;

                        return (
                            <motion.div
                                key={index}
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
                                    <div className="absolute top-6 start-6 text-[#0F7A6C] text-7xl font-black opacity-40">
                                        "
                                    </div>

                                    <p className="relative z-10 text-[#555] text-md leading-9 mt-6 text-start">
                                        {item.text}
                                    </p>

                                    <div className="flex items-center gap-4 mt-10 justify-start">
                                        <div className="relative shrink-0">
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#17B89C] blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
                                            <img
                                                src={avatarImage}
                                                alt={item.name}
                                                className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="relative z-10 text-start">
                                            <h3 className="font-extrabold text-[#222] text-lg">
                                                {item.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                                        <div className="absolute -top-20 start-[-120px] rotate-12 w-40 h-[400px] bg-white/30 blur-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}