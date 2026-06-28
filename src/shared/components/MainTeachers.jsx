import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import teacher1 from "../../images/elite/1.webp"
import teacher2 from "../../images/elite/2.webp"
import teacher3 from "../../images/elite/3.webp"
import teacher4 from "../../images/elite/4.webp"

const teachersData = [
    {
        id: 1,
        nameKey: "teachers.list.1.name",
        titleKey: "teachers.list.1.title",
        image: teacher1,
        rating: 5,
    },
    {
        id: 2,
        nameKey: "teachers.list.2.name",
        titleKey: "teachers.list.2.title",
        image: teacher2,
        rating: 5,
    },
    {
        id: 3,
        nameKey: "teachers.list.3.name",
        titleKey: "teachers.list.3.title",
        image: teacher3,
        rating: 5,
    },
    {
        id: 4,
        nameKey: "teachers.list.4.name",
        titleKey: "teachers.list.4.title",
        image: teacher4,
        rating: 5,
    },
]

const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
        return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `https://manaret-ezz.dramcode.top/${cleanPath}`;
}

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5 justify-center" dir="ltr">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-4 h-4 transition-colors duration-300 ${index < rating ? "text-gold-darker" : "text-gray-300"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function TeachersSection({ eliteTeachers }) {
    const { t } = useTranslation()
    const displayTeachers = eliteTeachers && eliteTeachers.length > 0 ? eliteTeachers : teachersData;

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 start-0 w-[500px] h-[500px] bg-[#0F7A6C]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#1B1B1B] mb-5">
                        {t("teachers.title", "نخبة من معلمينا")}
                    </h2>
                    <div className="mx-auto mt-4 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />
                    <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
                        {t("teachers.desc", "نفخر بكوادرنا التعليمية المؤهلة والمتميزة، من ذوي الخبرة الواسعة في مجالاتهم")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayTeachers.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="flex flex-col items-center text-center bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(15,122,108,0.1)] hover:border-[#0F7A6C]/20 transition-all duration-300"
                        >

                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0F7A6C]/20 to-[#17B89C]/20 blur-md"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                <img
                                    src={getImageUrl(teacher.image)}
                                    alt={teacher.nameKey ? t(teacher.nameKey) : teacher.name}
                                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-[0_10px_25px_rgba(15,122,108,0.2)] relative z-10"
                                />
                            </div>

                            <h3 className="text-xl font-extrabold text-slate-800 mb-2">
                                {teacher.nameKey ? t(teacher.nameKey, 'اسم المعلم') : teacher.name}
                            </h3>
                            <p className="text-sm font-medium text-[#0F7A6C] mb-4">
                                {teacher.titleKey ? t(teacher.titleKey, 'التخصص') : (teacher.title || t('teachers.defaultTitle', 'معلم متميز'))}
                            </p>

                            <div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100 mt-auto">
                                <StarRating rating={teacher.rating || 5} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}