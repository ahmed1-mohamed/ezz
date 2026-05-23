import React from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, BookOpen, Video } from "lucide-react";
import { motion } from "framer-motion";


export default React.memo(function PremiumParentsSection() {
    const { t } = useTranslation();

    const cards = [
        {
            title: t('premiumParents.cards.tracking.title'),
            description: t('premiumParents.cards.tracking.description'),
            Icon: ShieldCheck,
        },
        {
            title: t('premiumParents.cards.certified.title'),
            description: t('premiumParents.cards.certified.description'),
            Icon: BookOpen,
        },
        {
            title: t('premiumParents.cards.live.title'),
            description: t('premiumParents.cards.live.description'),
            Icon: Video,
        },
    ];

    return (
        <section
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
                        {t('premiumParents.title')}
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />

                    <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-7">
                        {t('premiumParents.description')}
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
                            style={{ willChange: 'transform, opacity' }}
                            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-500 shadow-md hover:shadow-[0_30px_90px_rgba(15,122,108,0.12)] text-start"
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

                            <div className="absolute bottom-0 start-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
})