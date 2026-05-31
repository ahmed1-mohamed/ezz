import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className="relative z-20 w-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-2xl">

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F7A6C] to-[#005F54]" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-30 text-center px-4 max-w-2xl"
            >
                <motion.h1
                    variants={item}
                    className="text-white text-2xl md:text-4xl font-bold leading-relaxed"
                >
                    {t('heroSection.title')}
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-white/90 my-6 text-sm md:text-lg leading-loose"
                >
                    {t('heroSection.description')}
                </motion.p>

                <motion.div variants={item} className="mt-6">
                    <button className="relative  px-16 py-3 rounded-full bg-black text-white font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">

                        <span className="relative z-10">{t('heroSection.cta')}</span>

                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute top-0 start-[-120%] w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent 
      transition-all duration-700 ease-out 
      group-hover:start-[120%] opacity-0 group-hover:opacity-100" />
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            <style jsx>{`
        @keyframes shine {
          0% {
            start: -100%;
          }
          100% {
            start: 100%;
          }
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}</style>
        </div>
    );
}