import { useState, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Video, Clock, CheckCircle2, Radio } from 'lucide-react';
import BeforeSessionTab from './components/BeforeSessionTab';
import DuringSessionTab from './components/DuringSessionTab';
import AfterSessionTab from './components/AfterSessionTab';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi.js';

const STAGES = [
  { id: 'before', labelKey: 'teacherLive.stageBefore', defaultLabel: 'قبل الجلسة', icon: Clock },
  { id: 'during', labelKey: 'teacherLive.stageDuring', defaultLabel: 'أثناء الجلسة', icon: Radio },
  { id: 'after', labelKey: 'teacherLive.stageAfter', defaultLabel: 'بعد الجلسة', icon: CheckCircle2 },
];

export default function TeacherLive() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const { sessionId: paramSessionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeStage, setActiveStage] = useState(() => {
    if (paramSessionId || location.pathname.includes('/live/room')) {
      return 'during';
    }
    const urlStage = searchParams.get('stage');
    if (urlStage === 'during' || urlStage === 'after') {
      return urlStage;
    }
    try {
      const storedStage = sessionStorage.getItem('teacher_live_stage');
      const storedSession = sessionStorage.getItem('teacher_live_session');
      if (storedStage === 'during' && storedSession) {
        return 'during';
      }
      if (storedStage === 'after') {
        return 'after';
      }
    } catch {}
    return 'before';
  });

  const [currentLiveSession, setCurrentLiveSession] = useState(() => {
    const sid = paramSessionId || searchParams.get('sessionId') || searchParams.get('session');
    try {
      const stored = sessionStorage.getItem('teacher_live_session');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && (parsed.id || parsed._id)) {
          if (!sid || String(parsed.id) === String(sid) || String(parsed._id) === String(sid)) {
            return parsed;
          }
        }
      }
    } catch {}
    if (sid) {
      return { id: sid, _id: sid };
    }
    return null;
  });

  // If we restored session by ID on reload, fetch its full details once if title is missing
  useEffect(() => {
    const sid = currentLiveSession?.id || currentLiveSession?._id;
    if (sid && !currentLiveSession?.title && activeStage === 'during') {
      teacherSessionsApi.fetchSessionDetails(sid).then((details) => {
        if (details) {
          const merged = { ...currentLiveSession, ...details };
          setCurrentLiveSession(merged);
          try {
            sessionStorage.setItem('teacher_live_session', JSON.stringify(merged));
          } catch {}
        }
      }).catch((err) => {
        console.warn('[TeacherLive] Could not refresh session details:', err);
      });
    }
  }, [currentLiveSession, activeStage]);

  // Synchronize route when in during stage so refresh preserves live room
  useEffect(() => {
    if (activeStage === 'during') {
      const sid = currentLiveSession?.id || currentLiveSession?._id || paramSessionId;
      if (sid && !location.pathname.includes('/live/room')) {
        navigate(`/dashboard/teacher/live/room/${sid}`, { replace: true });
      }
    }
  }, [activeStage, currentLiveSession, paramSessionId, location.pathname, navigate]);

  useEffect(() => {
    if (location.pathname.includes('/live/room')) {
      setActiveStage('during');
      return;
    }
    const stage = searchParams.get('stage');
    if (stage === 'after') {
      setActiveStage('after');
      return;
    }
    if (stage === 'before' || (!stage && location.pathname === '/dashboard/teacher/live')) {
      const storedStage = sessionStorage.getItem('teacher_live_stage');
      if (storedStage !== 'during') {
        setActiveStage('before');
      }
    }
  }, [location.pathname, searchParams]);

  const handleStartSession = (session, joinData = null) => {
    const sid = session?.id || session?._id;
    const merged = joinData ? { ...session, ...joinData } : session;
    setCurrentLiveSession(merged);
    setActiveStage('during');
    try {
      sessionStorage.setItem('teacher_live_session', JSON.stringify(merged));
      if (joinData) {
        sessionStorage.setItem('teacher_live_joindata', JSON.stringify(joinData));
      }
      sessionStorage.setItem('teacher_live_stage', 'during');
    } catch {}
    if (sid) {
      navigate(`/dashboard/teacher/live/room/${sid}`, { replace: true });
    } else {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('stage', 'during');
      setSearchParams(nextParams, { replace: true });
    }
  };

  const handleEndSession = () => {
    setActiveStage('after');
    try {
      sessionStorage.removeItem('teacher_live_session');
      sessionStorage.removeItem('teacher_live_joindata');
      sessionStorage.setItem('teacher_live_stage', 'after');
    } catch {}
    navigate('/dashboard/teacher/live?stage=after', { replace: true });
  };

  const handleBackToBefore = () => {
    setActiveStage('before');
    try {
      sessionStorage.removeItem('teacher_live_session');
      sessionStorage.removeItem('teacher_live_joindata');
      sessionStorage.setItem('teacher_live_stage', 'before');
    } catch {}
    setCurrentLiveSession(null);
    navigate('/dashboard/teacher/live', { replace: true });
  };

  const handleSelectStage = (stageId) => {
    if (stageId === 'during') {
      return;
    }
    if (stageId === 'before') {
      handleBackToBefore();
      return;
    }
    setActiveStage(stageId);
    try {
      sessionStorage.setItem('teacher_live_stage', stageId);
    } catch {}
    navigate(`/dashboard/teacher/live?stage=${stageId}`, { replace: true });
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
              const isDuring = stage.id === 'during';
              return (
                <button
                  type="button"
                  key={stage.id}
                  onClick={isDuring ? undefined : () => handleSelectStage(stage.id)}
                  disabled={isDuring}
                  title={
                    isDuring
                      ? t('teacherLive.duringLockedHint', 'لا يمكن الدخول من هنا، يتم الدخول فقط عبر زر بدء الجلسة')
                      : undefined
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                      : isDuring
                      ? 'text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed select-none'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer'
                  }`}
                >
                  <StageIcon className={`w-4 h-4 ${isActive && isDuring ? 'animate-pulse text-red-500' : ''}`} />
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
