import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
            <div className="absolute rounded-2xl  inset-0 bg-gradient-to-r from-[#0F7A6C] to-[#005F54]" />

            <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px]" />
            <div className="absolute w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl bottom-[-80px] right-[-80px]" />
            <div className="relative z-10 text-center px-4 max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-2xl md:text-4xl font-bold leading-relaxed"
                >
                    هل أنت مستعد لبدء رحلتك نحو النور؟
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white/90 my-6 text-sm md:text-lg leading-loose"
                >
                    انضم إلى آلاف الطلاب اليوم واستفد من خصم 20% على الشهر الأول لجميع
                    البرامج التعليمية.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-6"
                >
                    <button className="px-16 py-3 rounded-full bg-black text-[#005F54] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        انضم الآن وابدأ
                    </button>
                </motion.div>
            </div>
        </div>
    );
}