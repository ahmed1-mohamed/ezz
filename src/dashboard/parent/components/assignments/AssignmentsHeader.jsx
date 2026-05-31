import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AssignmentsHeader({ selectedStudent, onStudentChange, variants }) {
    const { t } = useTranslation();

    return (
        <motion.div variants={variants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start">
                <h1 className="text-2xl font-extrabold text-slate-800">{t('parent.assignments.title')}</h1>
                <p className="text-sm text-slate-500 mt-1">{t('parent.assignments.subtitle')}</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                <label className="text-xs text-slate-500 font-medium text-center md:text-start w-full">
                    {t('parent.schedule.selectStudent')}
                </label>
                <div className="relative w-full">
                    <select
                        value={selectedStudent}
                        onChange={(e) => onStudentChange(e.target.value)}
                        className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                    >
                        <option value="all">{t('parent.assignments.student1Name')}</option>
                        <option value="c2">{t('parent.assignments.student2Name')}</option>
                        <option value="c3">{t('parent.assignments.student3Name')}</option>
                    </select>
                    <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
