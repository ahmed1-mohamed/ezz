import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Video, Clock, CheckCircle2, Radio } from 'lucide-react';
import BeforeSessionTab from './components/BeforeSessionTab';
import DuringSessionTab from './components/DuringSessionTab';
import AfterSessionTab from './components/AfterSessionTab';

const STAGES = [
  { id: 'before', labelKey: 'teacherLive.stageBefore', defaultLabel: 'قبل الجلسة', icon: Clock },
  { id: 'during', labelKey: 'teacherLive.stageDuring', defaultLabel: 'أثناء الجلسة', icon: Radio },
  { id: 'after', labelKey: 'teacherLive.stageAfter', defaultLabel: 'بعد الجلسة', icon: CheckCircle2 },
];

export default function TeacherLive() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [activeStage, setActiveStage] = useState('before');
  const [currentLiveSession, setCurrentLiveSession] = useState(null);

  const handleStartSession = (session) => {
    setCurrentLiveSession(session);
    setActiveStage('during');
  };

  const handleEndSession = () => {
    setActiveStage('after');
  };

  const handleBackToBefore = () => {
    setActiveStage('before');
  };

  return (
    <div className="space-y-6 pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                {t('teacherLive.pageTitle', 'الحصص المباشرة')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {t('teacherLive.pageSubtitle', 'إدارة ومتابعة الحصص المباشرة قبل وأثناء وبعد انتهاء الجلسة وتقييم الطلاب')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            {STAGES.map((stage) => {
              const StageIcon = stage.icon;
              const isActive = activeStage === stage.id;
              return (
                <button
                  type="button"
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <StageIcon className={`w-4 h-4 ${isActive && stage.id === 'during' ? 'animate-pulse text-red-500' : ''}`} />
                  <span>{t(stage.labelKey, stage.defaultLabel)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {activeStage === 'before' && (
        <BeforeSessionTab onStartSession={handleStartSession} />
      )}

      {activeStage === 'during' && (
        <DuringSessionTab
          session={currentLiveSession}
          onEndSession={handleEndSession}
          onBackToBefore={handleBackToBefore}
        />
      )}

      {activeStage === 'after' && (
        <AfterSessionTab />
      )}
    </div>
  );
}
