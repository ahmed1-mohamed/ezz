import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Award, Users, ChevronDown, Book, Star } from 'lucide-react'
import api from '@/shared/services/api/axiosConfig'
import { useQuery } from '@tanstack/react-query'

export default React.memo(function CurriculumUnits() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const tabRefs = useRef({})
    const { data: curriculaData, isLoading: isCurriculaLoading } = useQuery({
        queryKey: ['public-curricula', i18n.language],
        queryFn: async () => {
            const res = await api.get('/api/v1/curricula/public');
            const items = res.data?.data || [];
            return items.map(item => item.data || item);
        },
        staleTime: 5 * 60 * 1000
    });
    const curricula = useMemo(() => curriculaData || [], [curriculaData]);
    const [selectedTabId, setSelectedTabId] = useState(null);
    const activeTabId = useMemo(() => {
        if (selectedTabId && curricula.some(c => (c.id || c._id) === selectedTabId)) {
            return selectedTabId;
        }
        return curricula[0]?.id || curricula[0]?._id || null;
    }, [selectedTabId, curricula]);
    const setActiveTabId = setSelectedTabId;
    useEffect(() => {
        if (activeTabId && tabRefs.current[activeTabId]) {
            tabRefs.current[activeTabId].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [activeTabId]);
    const [openLevel, setOpenLevel] = useState(null);
    const [showAllLevels, setShowAllLevels] = useState(false);
    const { data: activeCurriculumData } = useQuery({
        queryKey: ['public-curriculum-details', activeTabId, i18n.language],
        queryFn: async () => {
            if (!activeTabId) return null;
            const res = await api.get(`/api/v1/curricula/public/${activeTabId}`);
            let curr = res.data?.data || res.data;
            if (Array.isArray(curr)) {
                curr = curr[0]?.data || curr[0] || {};
            } else if (curr?.data) {
                curr = curr.data;
            }
            return curr;
        },
        enabled: !!activeTabId,
        staleTime: 5 * 60 * 1000
    });
    const currentData = activeCurriculumData || curricula.find(c => (c.id || c._id) === activeTabId);
    return (
        <section className="py-8 sm:py-16 md:py-20 relative z-10">
            <div className="absolute top-0 inset-x-0 h-48 sm:h-64 bg-gradient-to-b from-slate-100/50 to-transparent dark:from-slate-900/40 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#00695C]/5 dark:bg-[#00695C]/20 text-[#00695C] dark:text-emerald-400 border border-[#00695C]/10 dark:border-emerald-500/20 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm"
                    >
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {t('curriculumUnits.badgeCount', 'رحلة المعرفة والإيمان')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug"
                    >
                        {t('curriculumUnits.mainTitle', 'اختر منهجك التعليمي')}
                    </motion.h2>
                </div>
                {isCurriculaLoading ? (
                    <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-12">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-10 sm:h-14 w-32 sm:w-44 bg-white dark:bg-slate-900 shadow-sm rounded-full animate-pulse border border-slate-100 dark:border-slate-800 shrink-0" />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 sm:pb-4 justify-start sm:justify-center px-1 mb-6 sm:mb-12 max-w-full">
                        {curricula.map((curr) => {
                            const id = curr.id || curr._id;
                            const isActive = activeTabId === id;
                            const name = typeof curr.name === 'object' ? (isRtl ? curr.name.ar : curr.name.en) || curr.name.ar : curr.name;
                            return (
                                <motion.button
                                    ref={(el) => {
                                        if (el) tabRefs.current[id] = el;
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    key={id}
                                    onClick={() => {
                                        setActiveTabId(id);
                                        setOpenLevel(null);
                                    }}
                                    className={`relative shrink-0 flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3.5 rounded-full font-bold text-xs sm:text-base md:text-lg transition-all duration-300 overflow-hidden cursor-pointer whitespace-nowrap ${isActive
                                        ? 'bg-[#00695C] text-white shadow-lg shadow-[#00695C]/30 border border-[#00695C]'
                                        : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 bg-[#00695C] z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <div className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap">
                                        <BookOpen className={`w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 ${isActive ? 'text-white' : 'text-[#00695C] dark:text-emerald-400'}`} />
                                        <span className="whitespace-nowrap">{name}</span>
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
                            className="space-y-6 sm:space-y-10 lg:space-y-14"
                        >
                            <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-4 sm:p-8 md:p-12 shadow-2xl shadow-[#00695C]/5 dark:shadow-black/20 border border-slate-100 dark:border-slate-800 relative overflow-hidden flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-14 items-center">
                                <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00695C]/5 dark:from-[#00695C]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/5 dark:from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                                {currentData.image && (
                                    <div className="w-full lg:w-2/5 relative z-10">
                                        <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-slate-800/40 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] max-h-52 sm:max-h-80 lg:max-h-none shadow-md border border-slate-100 dark:border-slate-800 group">
                                            <div className="absolute inset-0 bg-[#00695C]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
                                            <img
                                                src={currentData.image}
                                                alt="Curriculum Cover"
                                                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute bottom-2 inset-x-2 sm:bottom-4 sm:inset-x-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3.5 flex items-center gap-2 sm:gap-3 shadow-lg border border-transparent dark:border-slate-800 z-20">
                                                <div className="bg-[#00695C]/10 dark:bg-[#00695C]/30 p-1 sm:p-2 rounded-lg sm:rounded-xl text-[#00695C] dark:text-emerald-400 shrink-0">
                                                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold mb-0.5">{isRtl ? 'منهج معتمد' : 'Certified Curriculum'}</p>
                                                    <p className="text-[11px] sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">{isRtl ? 'جودة تعليمية عالية' : 'High Educational Quality'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className={`w-full ${currentData.image ? 'lg:w-3/5' : 'lg:w-full max-w-4xl mx-auto'} relative z-10 text-start space-y-4 sm:space-y-6 lg:space-y-8`}>
                                    <div className="space-y-2 sm:space-y-4">
                                        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold border border-amber-200/60 dark:border-amber-900/40 shadow-2xs">
                                            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            {isRtl ? 'نظرة عامة على المنهج' : 'Curriculum Overview'}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-[1.25]">
                                            {typeof currentData.name === 'object' ? (isRtl ? currentData.name?.ar : currentData.name?.en) || currentData.name?.ar : currentData.name}
                                        </h3>
                                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                            {typeof currentData.description === 'object' ? (isRtl ? currentData.description?.ar : currentData.description?.en) || currentData.description?.ar : currentData.description}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800">
                                        {(() => {
                                            const features = typeof currentData.features === 'object' && !Array.isArray(currentData.features)
                                                ? (isRtl ? currentData.features.ar : currentData.features.en) || currentData.features.ar || []
                                                : (currentData.features || []);
                                            return features.map((feat, idx) => (
                                                <div key={`f-${idx}`} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 hover:border-[#00695C]/20 dark:hover:border-slate-700 hover:shadow-2xs transition-all duration-300">
                                                    <div className="bg-[#00695C] text-white p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0 mt-0.5 shadow-2xs">
                                                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-snug">{feat}</h4>
                                                        <p className="text-[10px] sm:text-xs text-[#00695C] dark:text-emerald-400 font-bold mt-0.5 sm:mt-1">{isRtl ? 'ميزة تفاعلية' : 'Interactive Feature'}</p>
                                                    </div>
                                                </div>
                                            ));
                                        })()}
                                        {(() => {
                                            const benefits = typeof currentData.benefitsAfterGraduation === 'object' && !Array.isArray(currentData.benefitsAfterGraduation)
                                                ? (isRtl ? currentData.benefitsAfterGraduation.ar : currentData.benefitsAfterGraduation.en) || currentData.benefitsAfterGraduation.ar || []
                                                : (currentData.benefitsAfterGraduation || []);
                                            return benefits.map((ben, idx) => (
                                                <div key={`b-${idx}`} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 hover:bg-white dark:hover:bg-amber-950/40 border border-amber-100/70 dark:border-amber-900/30 hover:border-amber-200 dark:hover:border-amber-800/40 hover:shadow-2xs transition-all duration-300">
                                                    <div className="bg-amber-500 text-white p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0 mt-0.5 shadow-2xs">
                                                        <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-snug">{ben}</h4>
                                                        <p className="text-[10px] sm:text-xs text-amber-700/80 dark:text-amber-400 font-bold mt-0.5 sm:mt-1">{isRtl ? 'استفادة بعد التخرج' : 'Graduation Benefit'}</p>
                                                    </div>
                                                </div>
                                            ));
                                        })()}
                                    </div>
                                </div>
                            </div>
                            {(() => {
                                const levels = currentData.levels || [];
                                if (levels.length === 0) return null;
                                const visibleLevels = showAllLevels ? levels : levels.slice(0, 4);
                                const hasMoreLevels = levels.length > 4;
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="w-full bg-gradient-to-b from-slate-50/80 to-[#f0f8f5] dark:from-slate-900 dark:to-slate-900/80 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-10 shadow-xs border border-slate-200/70 dark:border-slate-800"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                                                {isRtl ? 'المستويات والوحدات الدراسية' : 'Study Levels & Units'}
                                            </h2>
                                            <div className="bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 border border-emerald-200/40 dark:border-emerald-800 shadow-2xs self-start sm:self-auto">
                                                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00594C] dark:text-emerald-400" />
                                                <span>{levels.length} {isRtl ? 'مستويات' : 'Levels'}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <AnimatePresence initial={false}>
                                                {visibleLevels.map((level, index) => {
                                                    const levelId = level.level_id || level._id || level.id || index;
                                                    const isOpen = openLevel === levelId;
                                                    const levelName = typeof level.name === 'object' ? (isRtl ? level.name?.ar : level.name?.en) || level.name?.ar : level.name;
                                                    const units = level.units || [];
                                                    return (
                                                        <motion.div
                                                            key={levelId}
                                                            className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-[2rem] overflow-hidden shadow-2xs hover:shadow-xs transition-all duration-300 border border-slate-100 dark:border-slate-800"
                                                        >
                                                            <button
                                                                onClick={() => setOpenLevel(isOpen ? null : levelId)}
                                                                className="w-full flex items-center justify-between p-3.5 sm:p-5 md:p-6 bg-white dark:bg-slate-900 hover:bg-slate-50/50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                                                            >
                                                                <div className="flex items-center gap-3 sm:gap-5 text-start">
                                                                    <div className="bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 border border-amber-200/60 dark:border-amber-900/40 shadow-2xs">
                                                                        <Book className="w-5 h-5 sm:w-6 sm:h-6" />
                                                                    </div>
                                                                    <div>
                                                                        <h3 className="font-black text-slate-900 dark:text-white text-sm sm:text-base md:text-xl">
                                                                            {levelName}
                                                                        </h3>
                                                                        <p className="text-[#00594C] dark:text-emerald-400 text-xs sm:text-sm font-bold mt-0.5 sm:mt-1">
                                                                            {units.length} {isRtl ? 'وحدات دراسية' : 'Units'}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-colors ${isOpen ? 'bg-[#00594C]/10 dark:bg-[#00594C]/30 text-[#00594C] dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                                                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                                                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
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
                                                                        className="bg-slate-50/50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
                                                                    >
                                                                        <div className="p-3.5 sm:p-6 pt-2 sm:pt-3 space-y-2 sm:space-y-3">
                                                                            {units.length === 0 ? (
                                                                                <div className="text-center py-4 text-slate-400 font-medium text-sm">
                                                                                    {isRtl ? 'لا توجد وحدات مضافة بعد' : 'No units added yet'}
                                                                                </div>
                                                                            ) : (
                                                                                units.map((unit, uIdx) => {
                                                                                    const unitName = typeof unit.name === 'object' ? (isRtl ? unit.name?.ar : unit.name?.en) || unit.name?.ar : unit.name;
                                                                                    return (
                                                                                        <div key={unit.unit_id || unit._id || uIdx} className="flex items-center justify-between bg-white dark:bg-slate-800/60 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-[#EEF4F2]/50 dark:hover:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-[#00695C]/20 dark:hover:border-emerald-500/30 group shadow-2xs">
                                                                                            <div className="flex items-center gap-4">
                                                                                                <div className="bg-[#00695C] text-white w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg sm:rounded-xl text-xs sm:text-sm font-black shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                                                                                                    {uIdx + 1}
                                                                                                </div>
                                                                                                <span className="text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm md:text-base group-hover:text-[#00695C] dark:group-hover:text-emerald-400 transition-colors">
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
                                            <div className="mt-6 sm:mt-8 flex justify-center">
                                                <button
                                                    onClick={() => setShowAllLevels(!showAllLevels)}
                                                    className="flex items-center gap-2 text-[#00695C] dark:text-emerald-400 hover:text-[#004D40] dark:hover:text-emerald-300 bg-white dark:bg-slate-800 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-2xs hover:shadow-xs border border-[#00695C]/10 dark:border-emerald-500/20 text-xs sm:text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
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

