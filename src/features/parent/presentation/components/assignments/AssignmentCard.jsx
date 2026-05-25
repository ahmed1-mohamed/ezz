import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function AssignmentCard({ assignment, variants }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const StatusIcon = assignment.icon;

    return (
        <motion.div
            variants={variants}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div className="flex-1 w-full text-center md:text-start">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-800">{assignment.title}</h3>
                    <div className="flex items-center gap-1.5 bg-[#0f7a6c] text-white px-3 py-1 rounded-full text-xs font-bold">
                        <StatusIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{assignment.status}</span>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                        <span className="text-slate-400">{t('parent.assignments.student')}:</span>
                        <span className="text-slate-700">{assignment.student}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-slate-400">{t('parent.assignments.subject')}:</span>
                        <span className="text-slate-700">{assignment.subject}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-slate-400">{t('parent.assignments.teacher')}:</span>
                        <span className="text-slate-700">{assignment.teacher}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-slate-400">{t('parent.assignments.date')}:</span>
                        <span className="text-slate-700">{assignment.date}</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
                <button
                    onClick={() => navigate(`/dashboard/parent/assignments/${assignment.id}`)}
                    className="w-full md:w-auto px-8 py-3 bg-[#0f7a6c] hover:bg-[#0c6156] text-white rounded-xl font-bold transition-all shadow-sm"
                >
                    {t('parent.assignments.viewDetails')}
                </button>
            </div>
        </motion.div>
    );
}
