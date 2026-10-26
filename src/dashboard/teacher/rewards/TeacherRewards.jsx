import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';
import {
  Gift,
  Award,
  Calendar,
  Sparkles,
} from 'lucide-react';
import TeacherAwardStudentsTab from './components/TeacherAwardStudentsTab.jsx';
import TeacherSuggestedRewardsTab from './components/TeacherSuggestedRewardsTab.jsx';
import SuggestRewardModal from './components/SuggestRewardModal.jsx';

export default function TeacherRewards() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const tabFromUrl = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(
    tabFromUrl === 'suggestions' ? 'suggestions' : 'awards'
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams(tab === 'awards' ? {} : { tab });
  };

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString('en-US'));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US'));
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  const handleSuggestionSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['teacher-suggested-rewards'] });
    handleTabChange('suggestions');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-2">
            <span>{t('teacher.rewardsTitle', 'المكافآت')}</span>
            <span className="text-2xl">🎖️</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {t('teacher.rewardsSubtitle', 'امنح المكافآت للطلاب وتابع أو اقترح مكافآت جديدة للاعتماد')}
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 rounded-3xl p-2.5 sm:p-3 shadow-xs border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-2xl">
          <button
            type="button"
            onClick={() => handleTabChange('awards')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-white dark:bg-slate-900 text-[#00594C] dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award size={16} />
            <span>{t('teacher.awardStudentsTab', 'منح المكافآت للطلاب')}</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('suggestions')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'suggestions'
                ? 'bg-white dark:bg-slate-900 text-[#00594C] dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Gift size={16} />
            <span>{t('teacher.suggestedRewardsTab', 'المكافآت المقترحة')}</span>
            <span className="w-2 h-2 rounded-full bg-[#cca332]" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsSuggestModalOpen(true)}
          className="py-2.5 px-5 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <Sparkles size={16} />
          <span>{t('teacher.suggestNewReward', 'اقترح مكافأة جديدة')}</span>
        </button>
      </div>

      {activeTab === 'awards' ? (
        <TeacherAwardStudentsTab />
      ) : (
        <TeacherSuggestedRewardsTab onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      )}

      <SuggestRewardModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
        onSuccess={handleSuggestionSuccess}
      />
    </div>
  );
}
