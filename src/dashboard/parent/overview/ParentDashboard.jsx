import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { parentApi } from '@/shared/services/api/parentApi';
import ChildDetailsView from '../components/child_details/ChildDetailsView';
import ParentDashboardStatsGrid from './components/ParentDashboardStatsGrid';
import ParentTrackChildrenSection from './components/ParentTrackChildrenSection';
import ParentUpcomingSessionsSection from './components/ParentUpcomingSessionsSection';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 26 }
  }
};

export default function ParentDashboard() {
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [dashboardData, setDashboardData] = useState({
    statistics: null,
    children: [],
    upcomingSessions: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedChildId = searchParams.get('childId');
  const handleSelectChild = useCallback((id) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (id) next.set('childId', id);
      else next.delete('childId');
      return next;
    });
  }, [setSearchParams]);
  const handleClearSelectedChild = useCallback(() => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.delete('childId');
      return next;
    });
  }, [setSearchParams]);
  useEffect(() => {
    let isMounted = true;
    const loadDashboard = async () => {
      setIsLoading(true);
      try {
        const res = await parentApi.fetchDashboard();
        if (isMounted && res?.success && res.data) {
          const raw = res.data;
          setDashboardData({
            statistics: raw.statistics || null,
            children: Array.isArray(raw.children) ? raw.children : [],
            upcomingSessions: Array.isArray(raw.upcomingSessions) ? raw.upcomingSessions : []
          });
        }
      } catch (err) {
        console.error('Failed to load parent dashboard:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadDashboard();
    return () => { isMounted = false; };
  }, []);
  if (selectedChildId) {
    return (
      <div className="p-4 md:p-8 max-w-7xl mx-auto font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
        <ChildDetailsView
          childId={selectedChildId}
          onBack={handleClearSelectedChild}
        />
      </div>
    );
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-10 font-sans"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div variants={itemVariants}>
        <ParentDashboardStatsGrid statistics={dashboardData.statistics} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ParentTrackChildrenSection
          children={dashboardData.children}
          isLoading={isLoading}
          onSelectChild={handleSelectChild}
        />
      </motion.div>
      <motion.div variants={itemVariants} className="pb-12">
        <ParentUpcomingSessionsSection
          sessions={dashboardData.upcomingSessions}
          isLoading={isLoading}
        />
      </motion.div>
    </motion.div>
  );
}
