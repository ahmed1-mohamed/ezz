import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ChildHeader from './ChildHeader';
import ChildStatsRow from './ChildStatsRow';
import ChildBadges from './ChildBadges';
import ChildRecentEvaluations from './ChildRecentEvaluations';
import ChildTimeline from './ChildTimeline';
import TeacherEvaluationView from './TeacherEvaluationView';
import SubscriptionRenewal from '../SubscriptionRenewal';

export default function ChildDetailsView({ childId, onBack }) {
  const { t, i18n } = useTranslation();
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const showEvaluation = location.state?.view === 'evaluation';
  const setShowEvaluation = (show) => {
    if (show) {
      navigate('.', { state: { ...location.state, view: 'evaluation' }, replace: true });
    } else {
      const newState = { ...location.state };
      delete newState.view;
      navigate('.', { state: newState, replace: true });
    }
  };

  // In a real app, fetch child details based on childId
  const childInfo = {
    name: i18n.language.startsWith('ar') ? 'محمد أحمد' : 'Mohamed Ahmed',
    subject: t('parent.mockData.subjects.holyQuran'),
    joinDate: '15-01-2025',
    avatarChar: i18n.language.startsWith('ar') ? 'م' : 'M'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  if (showEvaluation) {
    return <TeacherEvaluationView onBack={() => setShowEvaluation(false)} />;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#0f7a6c] hover:text-[#0c6156] transition-colors font-bold text-sm bg-[#0f7a6c]/10 px-4 py-2 rounded-xl"
        >
          <ArrowRight className={`w-4 h-4 ${i18n.language.startsWith('ar') ? '' : 'rotate-180'}`} />
          {t('parent.childDetails.back')}
        </button>
      </div>

      <motion.div variants={itemVariants}>
        <ChildHeader 
          name={childInfo.name} 
          subject={childInfo.subject} 
          joinDate={childInfo.joinDate} 
          avatarChar={childInfo.avatarChar} 
          onEvaluateClick={() => setShowEvaluation(true)}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ChildStatsRow />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ChildBadges />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ChildRecentEvaluations />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ChildTimeline />
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 mt-8">{t('parentDashboard.childrenDetails.subscriptionSummaryTitle')}</h3>
        <SubscriptionRenewal />
      </motion.div>
    </motion.div>
  );
}
