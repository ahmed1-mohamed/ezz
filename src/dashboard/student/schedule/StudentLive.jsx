import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi.js';
import { showErrorToast } from '@/shared/utils/sweetAlert.js';
import Spinner from '@/shared/components/Spinner.jsx';
import { checkCanJoinSession, showSessionJoinAlert } from '@/shared/utils/sessionTiming.js';
import StudentBeforeSessionView from './components/StudentBeforeSessionView.jsx';
import StudentDuringSessionView from './components/StudentDuringSessionView.jsx';

export default function StudentLive() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const initialSession = location.state?.session || null;
  const [session, setSession] = useState(initialSession);
  const [joinData, setJoinData] = useState(null);
  const [stage, setStage] = useState('before');
  const [isLoading, setIsLoading] = useState(!initialSession);
  const [isJoining, setIsJoining] = useState(false);
  useEffect(() => {
    let isMounted = true;
    async function loadNextSession() {
      try {
        if (!initialSession) {
          setIsLoading(true);
        }
        const data = await studentPortalApi.fetchNextSession();
        if (isMounted) {
          if (initialSession) {
            // Keep the session the student clicked; next-session data only fills it in if it's the same one
            const sameId = data && (data.id || data._id) === (initialSession.id || initialSession._id);
            if (sameId) setSession({ ...initialSession, ...data });
          } else if (data && (data.id || data._id || data.title)) {
            setSession(data);
          } else if (!initialSession) {
            setSession(null);
          }
        }
      } catch (err) {
        console.error('Error fetching student next session:', err);
        if (isMounted && !initialSession) {
          setSession(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadNextSession();
    return () => {
      isMounted = false;
    };
  }, [initialSession]);
  async function handleJoinSession(sess) {
    const targetSession = sess || session;
    const sid = targetSession?.id || targetSession?._id;
    if (!sid) {
      setStage('during');
      return;
    }
    try {
      setIsJoining(true);
      const data = await studentPortalApi.joinSession(sid);
      setJoinData(data);
      setStage('during');
    } catch (err) {
      console.error('Error joining session:', err);
      showErrorToast(t('studentDashboard.live.joinError', 'تعذر الاتصال ببيانات الحصة المباشرة، جاري محاولة الدخول المباشر...'));
      setStage('during');
    } finally {
      setIsJoining(false);
    }
  }
  function handleLeaveSession() {
    setStage('before');
    setJoinData(null);
  }
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#edf4f2] dark:bg-slate-950 p-6 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div
      className="min-h-screen bg-[#edf4f2] dark:bg-slate-950 p-4 sm:p-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-6"
      >
        {stage === 'before' ? (
          <StudentBeforeSessionView
            session={session}
            onJoinSession={handleJoinSession}
            isJoining={isJoining}
          />
        ) : (
          <StudentDuringSessionView
            session={session}
            joinData={joinData}
            onLeaveSession={handleLeaveSession}
          />
        )}
      </motion.div>
    </div>
  );
}
