import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Award, Users, ChevronDown, Book, Star } from 'lucide-react'
import api from '@/shared/services/api/axiosConfig'
import { useQuery } from '@tanstack/react-query'

export default React.memo(function CurriculumUnits() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    // 1. Fetch All Curricula
    const { data: curriculaData, isLoading: isCurriculaLoading } = useQuery({
        queryKey: ['public-curricula'],
        queryFn: async () => {
            const res = await api.get('/api/v1/curricula/public');
            const items = res.data?.data || [];
            return items.map(item => item.data || item);
        }
    });

    const curricula = curriculaData || [];
    const [activeTabId, setActiveTabId] = useState(null);
    const [openLevel, setOpenLevel] = useState(null);
    const [showAllLevels, setShowAllLevels] = useState(false);

    // Set first tab as active by default
    useEffect(() => {
        if (curricula.length > 0 && !activeTabId) {
            setActiveTabId(curricula[0].id || curricula[0]._id);
        }
    }, [curricula, activeTabId]);

    // 2. Fetch Selected Curriculum Details
    const { data: activeCurriculumData, isLoading: isDetailsLoading } = useQuery({
        queryKey: ['public-curriculum-details', activeTabId],
        queryFn: async () => {
            if (!activeTabId) return null;
            const res = await api.get(`/api/v1/curricula/public/${activeTabId}`);

            let curr = res.data?.data || res.data;
            // If the detail endpoint returns an array with one element (like the list endpoint), extract it
            if (Array.isArray(curr)) {
                curr = curr[0]?.data || curr[0] || {};
            } else if (curr?.data) {
                curr = curr.data;
            }

            return curr;
        },
        enabled: !!activeTabId
    });

    const currentData = activeCurriculumData || curricula.find(c => (c.id || c._id) === activeTabId);

    return (
        <section className="py-12 sm:py-20 relative z-10">
            {/* Background Decorative Gradients */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-[#00695C]/5 text-[#00695C] border border-[#00695C]/10 px-6 py-2 rounded-full font-bold text-sm"
                    >
                        <Star className="w-4 h-4" />
                        {t('curriculumUnits.badgeCount', 'رحلة المعرفة والإيمان')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
                    >
                        {t('curriculumUnits.mainTitle', 'اختر منهجك التعليمي')}
                    </motion.h2>
                </div>

                {/* Premium Tabs */}
                {isCurriculaLoading ? (
                    <div className="flex justify-center gap-4 mb-16">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-16 w-48 bg-white shadow-sm rounded-full animate-pulse border border-slate-100" />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {curricula.map((curr) => {
                            const id = curr.id || curr._id;
                            const isActive = activeTabId === id;
                            const name = typeof curr.name === 'object' ? (isRtl ? curr.name.ar : curr.name.en) || curr.name.ar : curr.name;

                            return (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    key={id}
                                    onClick={() => {
                                        setActiveTabId(id);
                                        setOpenLevel(null);
                                    }}
                                    className={`relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden ${isActive
                                        ? 'bg-[#00695C] text-white shadow-lg shadow-[#00695C]/30 border border-[#00695C]'
                                        : 'bg-white/80 backdrop-blur-md border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 bg-[#00695C] z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <div className="relative z-10 flex items-center gap-3">
                                        <BookOpen className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#00695C]'}`} />
                                        <span>{name}</span>
                                    </div>
                                </motion.button>
                            )
                        })}
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {activeTabId && currentData && (
                        <motion.div
                            key={activeTabId}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="space-y-16"
                        >
                            {/* Premium Hero Card for Curriculum Details */}
                            <div className="bg-white rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl shadow-[#00695C]/5 border border-slate-100 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00695C]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                                {/* Image Section */}
                                {currentData.image && (
                                    <div className="w-full lg:w-2/5 relative z-10">
                                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg border border-slate-100 group">
                                            <div className="absolute inset-0 bg-[#00695C]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
                                            <img
                                                src={currentData.image}
                                                alt="Curriculum Cover"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-lg z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="bg-[#00695C]/10 p-2 rounded-xl text-[#00695C]">
                                                    <Award className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 font-bold mb-0.5">{isRtl ? 'منهج معتمد' : 'Certified Curriculum'}</p>
                                                    <p className="text-sm font-extrabold text-slate-900">{isRtl ? 'جودة تعليمية عالية' : 'High Educational Quality'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Content Section */}
                                <div className="w-full lg:w-3/5 relative z-10 text-start space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-bold border border-amber-100">
                                            <Star className="w-4 h-4" />
                                            {isRtl ? 'نظرة عامة على المنهج' : 'Curriculum Overview'}
                                        </div>
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2]">
                                            {typeof currentData.name === 'object' ? (isRtl ? currentData.name?.ar : currentData.name?.en) || currentData.name?.ar : currentData.name}
                                        </h3>
                                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                                            {typeof currentData.description === 'object' ? (isRtl ? currentData.description?.ar : currentData.description?.en) || currentData.description?.ar : currentData.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                                        {/* Features */}
                                        {(() => {
                                            const features = typeof currentData.features === 'object' && !Array.isArray(currentData.features)
                                                ? (isRtl ? currentData.features.ar : currentData.features.en) || currentData.features.ar || []
                                                : (currentData.features || []);

                                            return features.map((feat, idx) => (
                                                <div key={`f-${idx}`} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all duration-300">
                                                    <div className="bg-[#00695C] text-white p-2.5 rounded-xl shrink-0 mt-0.5">
                                                        <Users className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-extrabold text-slate-800 leading-snug">{feat}</h4>
                                                        <p className="text-sm text-slate-500 font-medium mt-1">{isRtl ? 'ميزة تفاعلية' : 'Interactive Feature'}</p>
                                                    </div>
                                                </div>
                                            ));
                                        })()}

                                        {/* Benefits */}
                                        {(() => {
                                            const benefits = typeof currentData.benefitsAfterGraduation === 'object' && !Array.isArray(currentData.benefitsAfterGraduation)
                                                ? (isRtl ? currentData.benefitsAfterGraduation.ar : currentData.benefitsAfterGraduation.en) || currentData.benefitsAfterGraduation.ar || []
                                                : (currentData.benefitsAfterGraduation || []);

                                            return benefits.map((ben, idx) => (
                                                <div key={`b-${idx}`} className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/50 hover:bg-white border border-transparent hover:border-amber-100 hover:shadow-sm transition-all duration-300">
                                                    <div className="bg-amber-500 text-white p-2.5 rounded-xl shrink-0 mt-0.5">
                                                        <Award className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-extrabold text-slate-800 leading-snug">{ben}</h4>
                                                        <p className="text-sm text-amber-600/80 font-medium mt-1">{isRtl ? 'استفادة بعد التخرج' : 'Graduation Benefit'}</p>
                                                    </div>
                                                </div>
                                            ));
                                        })()}
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Levels Accordion */}
                            {(() => {
                                const levels = currentData.levels || [];
                                if (levels.length === 0) return null;

                                const visibleLevels = showAllLevels ? levels : levels.slice(0, 4);
                                const hasMoreLevels = levels.length > 4;

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="w-full bg-[#EEF4F2] rounded-[2.5rem] p-6 sm:p-10 shadow-inner border border-slate-200/50"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                                {isRtl ? 'المستويات والوحدات الدراسية' : 'Study Levels & Units'}
                                            </h2>
                                            <div className="bg-[#E2EBE8] text-slate-700 px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 border border-slate-300/30">
                                                <BookOpen className="w-4 h-4 text-[#00695C]" />
                                                {levels.length} {isRtl ? 'مستويات' : 'Levels'}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <AnimatePresence initial={false}>
                                                {visibleLevels.map((level, index) => {
                                                    const levelId = level.level_id || level._id || level.id || index;
                                                    const isOpen = openLevel === levelId;
                                                    const levelName = typeof level.name === 'object' ? (isRtl ? level.name?.ar : level.name?.en) || level.name?.ar : level.name;
                                                    const units = level.units || [];

                                                    return (
                                                        <motion.div
                                                            key={levelId}
                                                            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
                                                        >
                                                            <button
                                                                onClick={() => setOpenLevel(isOpen ? null : levelId)}
                                                                className="w-full flex items-center justify-between p-5 sm:p-6 bg-white hover:bg-slate-50/50 transition-colors"
                                                            >
                                                                <div className="flex items-center gap-5 text-start">
                                                                    <div className="bg-[#FFFDF5] text-[#9B7B16] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100/50">
                                                                        <Book className="w-6 h-6" />
                                                                    </div>
                                                                    <div>
                                                                        <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                                                                            {levelName}
                                                                        </h3>
                                                                        <p className="text-[#00695C] text-sm font-bold mt-1">
                                                                            {units.length} {isRtl ? 'وحدات دراسية' : 'Units'}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`p-3 rounded-full transition-colors ${isOpen ? 'bg-[#00695C]/10 text-[#00695C]' : 'bg-slate-100 text-slate-400'}`}>
                                                                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                                                        <ChevronDown className="w-5 h-5" />
                                                                    </motion.div>
                                                                </div>
                                                            </button>

                                                            <AnimatePresence>
                                                                {isOpen && (
                                                                    <motion.div
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="bg-white border-t border-slate-50"
                                                                    >
                                                                        <div className="p-6 pt-2 space-y-3">
                                                                            {units.length === 0 ? (
                                                                                <div className="text-center py-4 text-slate-400 font-medium">
                                                                                    {isRtl ? 'لا توجد وحدات مضافة بعد' : 'No units added yet'}
                                                                                </div>
                                                                            ) : (
                                                                                units.map((unit, uIdx) => {
                                                                                    const unitName = typeof unit.name === 'object' ? (isRtl ? unit.name?.ar : unit.name?.en) || unit.name?.ar : unit.name;
                                                                                    return (
                                                                                        <div key={unit.unit_id || unit._id || uIdx} className="flex items-center justify-between bg-[#F9FBFB] p-4 rounded-2xl hover:bg-[#EEF4F2] transition-all duration-300 border border-slate-100 hover:border-[#00695C]/20 group">
                                                                                            <div className="flex items-center gap-4">
                                                                                                <div className="bg-[#82C3B8] text-white w-8 h-8 flex items-center justify-center rounded-xl text-sm font-bold shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                                                                                    {uIdx + 1}
                                                                                                </div>
                                                                                                <span className="text-slate-700 font-bold text-sm sm:text-base group-hover:text-[#00695C] transition-colors">
                                                                                                    {unitName}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            )}
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </motion.div>
                                                    )
                                                })}
                                            </AnimatePresence>
                                        </div>

                                        {hasMoreLevels && (
                                            <div className="mt-8 flex justify-center">
                                                <button
                                                    onClick={() => setShowAllLevels(!showAllLevels)}
                                                    className="flex items-center gap-2 text-[#00695C] hover:text-[#004D40] bg-white font-bold py-3 px-8 rounded-full shadow-sm hover:shadow-md border border-[#00695C]/10 transition-all hover:-translate-y-0.5"
                                                >
                                                    <span>
                                                        {showAllLevels
                                                            ? (isRtl ? 'عرض أقل' : 'Show Less')
                                                            : (isRtl ? 'عرض المزيد من المستويات' : 'Show More Levels')}
                                                    </span>
                                                    <motion.div animate={{ rotate: showAllLevels ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                                        <ChevronDown className="w-5 h-5" />
                                                    </motion.div>
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
})
