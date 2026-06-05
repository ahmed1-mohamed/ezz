import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function TeacherLevels({ levels, t }) {
    const { i18n } = useTranslation()
    const [openLevel, setOpenLevel] = useState(null)
    const [showAll, setShowAll] = useState(false)

    const toggleLevel = (id) => {
        setOpenLevel(openLevel === id ? null : id)
    }

    if (!levels || levels.length === 0) return null;

    const visibleLevels = showAll ? levels : levels.slice(0, 4);
    const hasMoreLevels = levels.length > 4;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-[#EEF4F2] rounded-3xl p-6 sm:p-8 shadow-sm mt-6"
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {t('teacherProfile.levelsTitle', 'المستويات الدراسية')}
                </h2>
                <div className="bg-[#E2EBE8] text-slate-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    {levels.length} {t('teacherProfile.levelsCount', 'مستويات دراسية')}
                </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
                <AnimatePresence initial={false}>
                    {visibleLevels.map((level) => {
                        const isOpen = openLevel === level.id;
                        return (
                            <motion.div 
                                key={level.id}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleLevel(level.id)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 bg-white hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4 text-start">
                                        <div className="bg-[#FFFDF5] text-[#9B7B16] p-4 rounded-2xl">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                                                {level.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm font-medium mt-1">
                                                {level.unitsCount} {t('teacherProfile.units', 'وحدات')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-slate-400 p-2">
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Accordion Body */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white"
                                        >
                                            <div className="px-5 pb-6 sm:px-6 space-y-3">
                                                {level.modules.map((mod, index) => (
                                                    <div key={index} className="flex items-center justify-between bg-[#F9FBFB] p-4 rounded-2xl hover:bg-[#EEF4F2] transition-colors border border-slate-50 cursor-pointer">
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-[#82C3B8] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold shrink-0">
                                                                {index + 1}
                                                            </div>
                                                            <span className="text-slate-600 font-bold text-sm sm:text-base">
                                                                {mod.title}
                                                            </span>
                                                        </div>
                                                        <div className="text-slate-400">
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Show More / Show Less Button */}
            {hasMoreLevels && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 text-[#00695C] hover:text-[#004D40] font-bold py-2 px-6 rounded-full border border-[#00695C]/20 hover:bg-[#00695C]/5 transition-colors"
                    >
                        <span>
                            {showAll 
                                ? t('teacherProfile.showLess', 'عرض أقل') 
                                : t('teacherProfile.showMore', 'عرض المزيد')}
                        </span>
                        <motion.div
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="w-4 h-4" />
                        </motion.div>
                    </button>
                </div>
            )}
        </motion.div>
    )
}
