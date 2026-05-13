import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

const teachers = [
    {
        id: 1,
        name: "د. أحمد المنصوري",
        title: "مجاز بالقراءات العشر",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "د. خالد الشامسي",
        title: "مجاز بالقراءات العشر",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "د. يوسف الحربي",
        title: "مجاز بالقراءات العشر",
        image:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "د. محمد القحطاني",
        title: "مجاز بالقراءات العشر",
        image:
            "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function Teachers() {
    const { i18n } = useTranslation();
    return (
        <section dir={i18n.dir()} className="w-full py-20 bg-gradient-to-b from-accent-mint via-white to-accent-paleMint overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-brand-500/10 text-brand-500 text-sm font-semibold mb-4">
                        فريقنا التعليمي
                    </span>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        نخبة من معلمينا
                    </h2>

                    <p className="mt-5 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        نفخر بكوادرنا التعليمية المؤهلة والمتميزة
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-secondary-teal blur-2xl opacity-25 group-hover:opacity-50 transition duration-500" />

                                <div className="rounded-full p-2 border-4 border-white shadow-[0_10px_40px_rgba(15,122,108,0.25)] bg-white">
                                    <img
                                        src={teacher.image}
                                        alt={teacher.name}
                                        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <span className="absolute top-3 right-2 w-3 h-3 bg-secondary-teal rounded-full animate-bounce" />
                                <span className="absolute bottom-4 left-2 w-2 h-2 bg-brand-500 rounded-full animate-ping" />
                            </div>

                            <div className="mt-5">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                    {teacher.name}
                                </h3>

                                <p className="mt-2 text-sm md:text-base text-gray-600">
                                    {teacher.title}
                                </p>

                                <div className="flex items-center justify-center gap-1 mt-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}