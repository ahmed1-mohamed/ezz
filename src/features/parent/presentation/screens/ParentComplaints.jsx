import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Star, CheckCircle2, ChevronDown, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParentComplaints() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [submissionType, setSubmissionType] = useState('complaint'); // 'complaint' or 'suggestion'
  const [selectedChild, setSelectedChild] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [details, setDetails] = useState('');

  const teachers = [
    { id: 't1', name: 'الشيخ أحمد منصور', nameEn: 'Sheikh Ahmed Mansour', avatar: 'أ' },
    { id: 't2', name: 'الشيخ محمد علي', nameEn: 'Sheikh Mohamed Ali', avatar: 'م' },
  ];

  const pastReports = [
    {
      id: 1,
      title: 'تأخر في بدء الحصة',
      titleEn: 'Delay in starting the class',
      teacher: 'الشيخ أحمد منصور',
      teacherEn: 'Sheikh Ahmed Mansour',
      date: '2024-04-20',
      status: 'قيد المراجعة',
      statusEn: 'Under Review',
      statusColor: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30',
      icon: MessageSquare,
      isSuggestion: false
    },
    {
      id: 2,
      title: 'أداء متميز',
      titleEn: 'Outstanding Performance',
      teacher: 'الأستاذة فاطمة علي',
      teacherEn: 'Ms. Fatima Ali',
      date: '2024-04-15',
      status: 'تم الاستلام',
      statusEn: 'Received',
      statusColor: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30',
      icon: Star,
      isSuggestion: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const currentTypeName = submissionType === 'complaint' ? t('parentDashboard.complaints.complaint') : t('parentDashboard.complaints.suggestion');

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 font-sans"
    >
      
      {/* Header Card */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm text-center border border-slate-100 dark:border-slate-700 transition-all hover:shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {t('parentDashboard.complaints.title')}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          {t('parentDashboard.complaints.subtitle')}
        </p>
      </motion.div>

      {/* Submission Type */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.complaints.submissionType')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSubmissionType('complaint')}
            className={`
              flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all border-2
              ${submissionType === 'complaint' 
                ? 'border-[#0f7a6c] bg-emerald-50/50 dark:bg-emerald-900/20' 
                : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
            `}
          >
            <MessageSquare size={28} className={submissionType === 'complaint' ? 'text-[#0f7a6c] mb-3' : 'text-slate-400 mb-3'} />
            <h3 className={`font-bold ${submissionType === 'complaint' ? 'text-slate-800 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300'}`}>
              {t('parentDashboard.complaints.complaint')}
            </h3>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSubmissionType('suggestion')}
            className={`
              flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all border-2
              ${submissionType === 'suggestion' 
                ? 'border-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/20' 
                : 'border-slate-100 dark:border-slate-700 hover:border-yellow-500/30 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
            `}
          >
            <Star size={28} className={submissionType === 'suggestion' ? 'text-yellow-500 mb-3' : 'text-slate-400 mb-3'} />
            <h3 className={`font-bold ${submissionType === 'suggestion' ? 'text-slate-800 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300'}`}>
              {t('parentDashboard.complaints.suggestion')}
            </h3>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
        
        {/* 1. Select Child */}
        <div className="space-y-2 text-start">
          <label className="font-semibold text-sm text-slate-700 dark:text-slate-300">
            {t('parentDashboard.complaints.selectChild')}
          </label>
          <div className="relative">
            <select 
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg p-3 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow font-medium cursor-pointer"
            >
              <option value="" disabled>{t('parentDashboard.complaints.selectChild')}</option>
              <option value="c1">{t('parentDashboard.home.children.fatima')}</option>
              <option value="c2">{t('parentDashboard.home.children.mohamed')}</option>
            </select>
            <ChevronDown size={18} className="absolute top-1/2 -translate-y-1/2 end-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* 2. Select Group */}
        <div className="space-y-2 text-start">
          <label className="font-semibold text-sm text-slate-700 dark:text-slate-300">
            {t('parentDashboard.complaints.selectGroup')}
          </label>
          <div className="relative">
            <select 
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg p-3 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow font-medium cursor-pointer"
            >
              <option value="" disabled>{t('parentDashboard.complaints.selectGroup')}</option>
              <option value="g1">{isRtl ? 'مجموعة القرآن - المستوى المتقدم' : 'Quran Group - Advanced Level'}</option>
              <option value="g2">{isRtl ? 'مجموعة التجويد - المستوى الأول' : 'Tajweed Group - Level 1'}</option>
            </select>
            <ChevronDown size={18} className="absolute top-1/2 -translate-y-1/2 end-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* 3. Select Teacher */}
        <div className="space-y-3 text-start">
          <label className="font-semibold text-sm text-slate-700 dark:text-slate-300">
            {t('parentDashboard.complaints.selectTeacher')}
          </label>
          <div className="space-y-3">
            {teachers.map((teacher) => {
              const isSelected = selectedTeacher === teacher.id;
              return (
                <div 
                  key={teacher.id}
                  onClick={() => setSelectedTeacher(teacher.id)}
                  className={`
                    flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border-2
                    ${isSelected ? 'border-[#0f7a6c] bg-slate-50 dark:bg-slate-800/50' : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30'}
                  `}
                >
                  <div className="flex items-center gap-3 text-start">
                    <div className="w-8 h-8 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {teacher.avatar}
                    </div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {isRtl ? teacher.name : teacher.nameEn}
                    </span>
                  </div>

                  <div className="ms-4 shrink-0">
                    {isSelected ? (
                      <div className="text-[#0f7a6c]">
                        <CheckCircle2 size={20} className="fill-current text-[#0f7a6c] bg-white rounded-full" />
                      </div>
                    ) : (
                      <div className="w-5" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Details */}
        <div className="space-y-2 text-start">
          <label className="font-semibold text-sm text-slate-700 dark:text-slate-300">
            {t('parentDashboard.complaints.details', { type: currentTypeName })}
          </label>
          <textarea 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={t('parentDashboard.complaints.detailsPlaceholder', { type: currentTypeName })}
            rows={5}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow placeholder:text-slate-400 resize-none font-medium"
          />
        </div>

        {/* Summary */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mt-8 space-y-4 text-start">
          <h3 className="font-bold text-slate-800 dark:text-slate-100">
            {submissionType === 'complaint' ? t('parentDashboard.complaints.complaintSummary') : t('parentDashboard.complaints.suggestionSummary')}
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">{t('parentDashboard.complaints.child')}</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-end">
                {selectedChild === 'c1' ? t('parentDashboard.home.children.fatima') : 
                 selectedChild === 'c2' ? t('parentDashboard.home.children.mohamed') : t('parentDashboard.complaints.notSelected')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">{t('parentDashboard.complaints.group')}</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-end">
                {selectedGroup === 'g1' ? (isRtl ? 'مجموعة القرآن - المستوى المتقدم' : 'Quran Group - Advanced Level') : 
                 selectedGroup === 'g2' ? (isRtl ? 'مجموعة التجويد - المستوى الأول' : 'Tajweed Group - Level 1') : t('parentDashboard.complaints.notSelected')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">{t('parentDashboard.complaints.teacher')}</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-end">
                {selectedTeacher === 't1' ? (isRtl ? 'الشيخ أحمد منصور' : 'Sheikh Ahmed Mansour') : 
                 selectedTeacher === 't2' ? (isRtl ? 'الشيخ محمد علي' : 'Sheikh Mohamed Ali') : t('parentDashboard.complaints.notSelected')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">{t('parentDashboard.complaints.type')}</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-end">
                {currentTypeName}
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] text-white py-4 rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 mt-6"
        >
          <span>{t('parentDashboard.complaints.submit', { type: currentTypeName })}</span>
          <Send size={18} className="rtl:-scale-x-100" />
        </motion.button>
        
      </motion.div>

      {/* Past Reports Section */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.complaints.pastReports')}
        </h2>
        
        <div className="space-y-4">
          {pastReports.map((report) => (
            <div key={report.id} className="border border-slate-100 dark:border-slate-700 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-200 dark:hover:border-slate-600 transition-colors">
              
              <div className="flex flex-col text-start">
                <div className="flex items-center gap-2 mb-1">
                  <report.icon size={16} className={report.isSuggestion ? 'text-yellow-500' : 'text-[#0f7a6c]'} />
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">
                    {isRtl ? report.title : report.titleEn}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {isRtl ? report.teacher : report.teacherEn}
                </p>
                {report.isSuggestion && (
                  <div className="flex items-center gap-1 mt-1.5 text-yellow-400" dir="ltr">
                    {[1,2,3,4,5].map(star => <Star key={star} size={10} className="fill-current" />)}
                  </div>
                )}
                <span className="text-xs text-slate-400 mt-2 block font-medium">{report.date}</span>
              </div>
              
              <div className="shrink-0 mt-2 md:mt-0">
                <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${report.statusColor}`}>
                  {isRtl ? report.status : report.statusEn}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
}
