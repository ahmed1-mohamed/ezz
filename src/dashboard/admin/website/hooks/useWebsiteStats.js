import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';

export default function useWebsiteStats(showNotification) {
  const { t } = useTranslation();
  
  const [stats, setStats] = useState({
    classes: 320,
    teachers: 85,
    students: 1250
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await landingApi.fetchPrivateStatistics();
        const statsData = res?.data || res;
        if (statsData) {
          setStats({
            classes: statsData.classes ?? 320,
            teachers: statsData.teachers ?? 85,
            students: statsData.students ?? 1250
          });
        }
      } catch (err) {
        console.warn('Failed to fetch private statistics, loading from localStorage:', err);
        const savedStats = localStorage.getItem('website_stats');
        if (savedStats) {
          try {
            setStats(JSON.parse(savedStats));
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
    loadStats();
  }, []);

  const handleStatChange = (field, val) => {
    const numericVal = parseInt(val, 10);
    setStats((prev) => ({
      ...prev,
      [field]: isNaN(numericVal) ? 0 : numericVal
    }));
  };

  const handleSaveStats = async () => {
    try {
      const payload = {
        students: parseInt(stats.students, 10) || 0,
        teachers: parseInt(stats.teachers, 10) || 0,
        classes: parseInt(stats.classes, 10) || 0
      };
      await landingApi.updatePrivateStatistics(payload);
      localStorage.setItem('website_stats', JSON.stringify(stats));
      showNotification(t('adminDashboard.website.statsSaved', 'تم حفظ الأرقام الإحصائية بنجاح!'));
    } catch (err) {
      console.warn('Failed to update statistics via API, saving to localStorage:', err);
      localStorage.setItem('website_stats', JSON.stringify(stats));
      showNotification(t('adminDashboard.website.statsSavedLocally', 'تم حفظ الأرقام الإحصائية محلياً!'));
    }
  };

  const handleCancelStats = async () => {
    try {
      const res = await landingApi.fetchPrivateStatistics();
      const statsData = res?.data || res;
      if (statsData) {
        setStats({
          classes: statsData.classes ?? 320,
          teachers: statsData.teachers ?? 85,
          students: statsData.students ?? 1250
        });
      }
    } catch (err) {
      const savedStats = localStorage.getItem('website_stats');
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      } else {
        setStats({ classes: 320, teachers: 85, students: 1250 });
      }
    }
    showNotification(t('adminDashboard.website.statsReverted', 'تم إلغاء التغييرات الإحصائية'), 'info');
  };

  return {
    stats,
    handleStatChange,
    handleSaveStats,
    handleCancelStats
  };
}
