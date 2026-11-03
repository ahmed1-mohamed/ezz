import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ChildHeader from './ChildHeader';
import ChildStatsRow from './ChildStatsRow';
import ChildRecentEvaluations from './ChildRecentEvaluations';
import ChildTimeline from './ChildTimeline';
import TeacherEvaluationView from './TeacherEvaluationView';
import ChildGroupsList from '../../students/components/children/ChildGroupsList';
import ChildSessionsBalanceCard from '../../students/components/children/ChildSessionsBalanceCard';
import ChildLastSubscriptionCard from '../../students/components/children/ChildLastSubscriptionCard';
import ChildHomeworkStatsCard from '../../students/components/children/ChildHomeworkStatsCard';
import ChildRewardsSection from '../../students/components/children/ChildRewardsSection';
import ChildTransactionsLog from '../../students/components/children/ChildTransactionsLog';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ChildDetailsView({ childId, onBack }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [child, setChild] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  useEffect(() => {
    let isMounted = true;
    const loadChild = async () => {
      setIsLoading(true);
      try {
        const res = await parentApi.fetchChildById(childId);
        if (isMounted) {
          if (res?.success && res.data) {
            setChild(res.data);
          } else {
            setChild(null);
          }
        }
      } catch (err) {
        console.error('Failed to load child details:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    if (childId) {
      loadChild();
    }
    return () => { isMounted = false; };
  }, [childId]);
  const showEvaluation = location.state?.view === 'evaluation';
  const setShowEvaluation = (show) => {
    if (show) {
      navigate({ pathname: location.pathname, search: location.search }, { state: { ...location.state, view: 'evaluation' }, replace: true });
    } else {
      const newState = { ...location.state };
      delete newState.view;
      navigate({ pathname: location.pathname, search: location.search }, { state: newState, replace: true });
    }
  };
  const getChildDisplayName = () => {
    if (!child) return childId || '-';
    if (typeof child.name === 'object' && child.name !== null) {
      return isRtl ? (child.name.ar || child.name.en) : (child.name.en || child.name.ar);
    }
    return child.name || '-';
  };
  const childName = getChildDisplayName();
  const rawSubject = typeof child?.subject === 'object' && child?.subject !== null
    ? (isRtl ? child.subject.ar : child.subject.en)
    : (typeof child?.level === 'object' && child?.level !== null
      ? (isRtl ? child.level.ar : child.level.en)
      : (child?.subject || child?.studentLevel || child?.level || ''));
  const childSubject = typeof rawSubject === 'object' && rawSubject !== null
    ? (rawSubject.ar || rawSubject.en || rawSubject.name || '')
    : String(rawSubject || '');
  const joinDate = child?.createdAt
    ? new Date(child.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB')
    : String(child?.joinDate || '-');
  const avatarChar = childName.charAt(0) || 'ط';
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
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
        <div className="h-40 bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(n => <div key={n} className="h-24 bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse" />)}
        </div>
      </div>
    );
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#0f7a6c] hover:text-[#0c6156] transition-colors font-bold text-sm bg-[#0f7a6c]/10 px-4 py-2 rounded-xl cursor-pointer"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('parent.childDetails.back', 'رجوع')}</span>
        </button>
      </div>
      <motion.div variants={itemVariants}>
        <ChildHeader
          name={childName}
          subject={childSubject}
          joinDate={joinDate}
          avatarChar={avatarChar}
          onEvaluateClick={() => setShowEvaluation(true)}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ChildStatsRow child={child} />
      </motion.div>
      {child?.lastSubscription && (
        <motion.div variants={itemVariants}>
          <ChildLastSubscriptionCard lastSubscription={child.lastSubscription} />
        </motion.div>
      )}
      {(child?.totalHomework !== undefined || child?.completedHomework !== undefined) && (
        <motion.div variants={itemVariants}>
          <ChildHomeworkStatsCard
            totalHomework={child.totalHomework}
            completedHomework={child.completedHomework}
            pendingHomework={child.pendingHomework}
            studentId={childId}
          />
        </motion.div>
      )}
      {Array.isArray(child?.groups) && child.groups.length > 0 && (
        <motion.div variants={itemVariants}>
          <ChildGroupsList groups={child.groups} />
        </motion.div>
      )}
      {child?.sessionsBalance && (
        <motion.div variants={itemVariants}>
          <ChildSessionsBalanceCard sessionsBalance={child.sessionsBalance} />
        </motion.div>
      )}
      {Array.isArray(child?.rewards) && child.rewards.length > 0 && (
        <motion.div variants={itemVariants}>
          <ChildRewardsSection rewards={child.rewards} />
        </motion.div>
      )}
      {Array.isArray(child?.sessionTransactions) && child.sessionTransactions.length > 0 && (
        <motion.div variants={itemVariants}>
          <ChildTransactionsLog transactions={child.sessionTransactions} />
        </motion.div>
      )}
      <motion.div variants={itemVariants}>
        <ChildRecentEvaluations childId={childId} initialEvaluations={child?.evaluations} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ChildTimeline childId={childId} initialEvents={child?.timeline || child?.sessions} />
      </motion.div>
    </motion.div>
  );
}
