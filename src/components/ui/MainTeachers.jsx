import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const teachers = [
    {
        id: 1,
        name: "د. أحمد المنصوري",
        title: "مجاز بالقراءات العشر",
        image: "../../images/النخبة/1.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "د. محمد إبراهيم",
        title: "مجاز بالقراءات العشر",
        image: "../../images/النخبة/2.jpg",
        rating: 5,
    },
    {
        id: 3,
        name: "د. علي حسن",
        title: "مجاز بالقراءات العشر",
        image: "../../images/النخبة/3.jpg",
        rating: 5,
    },
    {
        id: 4,
        name: "د. محمود سالم",
        title: "مجاز بالقراءات العشر",
        image: "../../images/النخبة/4.jpg",
        rating: 5,
    },
]

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

export default function TeachersSection() {

    return (
        <section className="bg-accent-lightMint py-20 px-4">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-accent-darkGray mb-3">
                        نخبة من معلمينا
                    </h2>
                    <p className="text-accent-mediumGray text-lg">
                        نفخر بكوادرنا التعليمية المؤهلة والمتميزة
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center text-center"
                        >

                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-accent-lightTeal"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover p-1 shadow-md"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-accent-darkGray mb-1">
                                {teacher.name}
                            </h3>
                            <p className="text-sm text-accent-mediumGray mb-2">
                                {teacher.title}
                            </p>

                            <StarRating rating={teacher.rating} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}