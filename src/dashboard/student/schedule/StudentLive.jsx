import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi.js';
import { showErrorToast } from '@/shared/utils/sweetAlert.js';
import Swal from 'sweetalert2';
import Spinner from '@/shared/components/Spinner.jsx';
import StudentBeforeSessionView from './components/StudentBeforeSessionView.jsx';
import StudentDuringSessionView from './components/StudentDuringSessionView.jsx';

export default function StudentLive() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const initialSession = location.state?.session || null;

  const [stage, setStage] = useState(() => {
    const urlStage = searchParams.get('stage');
    if (urlStage === 'during') return 'during';
    try {
      const stored = sessionStorage.getItem('student_live_stage');
      if (stored === 'during') return 'during';
    } catch (err) { void err; }
    return 'before';
  });

  const [session, setSession] = useState(() => {
    if (initialSession) return initialSession;
    try {
      const stored = sessionStorage.getItem('student_live_session');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && (parsed.id || parsed._id)) return parsed;
      }
    } catch (err) { void err; }
    const sid = searchParams.get('sessionId') || searchParams.get('session');
    if (sid) return { id: sid, _id: sid };
    return null;
  });

  const [joinData, setJoinData] = useState(() => {
    try {
      const stored = sessionStorage.getItem('student_live_joindata');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && (parsed.meetingId || parsed.joinUrl || parsed.sdkSignature)) return parsed;
      }
    } catch (err) { void err; }
    return null;
  });

  const [isLoading, setIsLoading] = useState(() => {
    if (stage === 'during' && (session || joinData)) return false;
    return !initialSession && !session;
  });

  const [isJoining, setIsJoining] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // If student is already active in a live session, skip fetching next session
    // to prevent unwanted requests and avoid overwriting current live state
    if (stage === 'during') {
      setIsLoading(false);
      return;
    }

    async function loadNextSession() {
      try {
        if (!initialSession && !session) {
          setIsLoading(true);
        }
        const data = await studentPortalApi.fetchNextSession();
        if (isMounted) {
          if (initialSession) {
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
        if (isMounted && !initialSession && !session) {
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
  }, [initialSession, stage]);

  async function handleJoinSession(sess) {
    const targetSession = sess || session;
    const sid = targetSession?.id || targetSession?._id;
    if (!sid) {
      setStage('during');
      try {
        sessionStorage.setItem('student_live_stage', 'during');
      } catch (err) { void err; }
      return;
    }
    try {
      setIsJoining(true);
      const data = await studentPortalApi.joinSession(sid);
      if (data && data.canJoinNow === false) {
        showErrorToast(data.message || t('teacherLive.cannotJoinNow', 'الحصة غير متاحة للانضمام الآن'));
        return;
      }
      setJoinData(data);
      setSession(targetSession);
      setStage('during');
      try {
        sessionStorage.setItem('student_live_session', JSON.stringify(targetSession));
        sessionStorage.setItem('student_live_joindata', JSON.stringify(data));
        sessionStorage.setItem('student_live_stage', 'during');
      } catch (err) { void err; }
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('stage', 'during');
      nextParams.set('sessionId', sid);
      setSearchParams(nextParams, { replace: true });
    } catch (err) {
      console.error('Error joining session:', err);
      const serverMessage =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        t('teacherLive.cannotJoinNow', 'لا يمكنك الانضمام الآن، يمكنك الدخول قبل موعد الحصة بـ 5 دقائق وحتى 30 دقيقة بعد انتهائها');
      const finalMsg = Array.isArray(serverMessage) ? serverMessage.join(', ') : serverMessage;
      Swal.fire({
        icon: 'warning',
        title: isRtl ? 'موعد الحصة المباشرة' : 'Live Session Notice',
        text: finalMsg,
        confirmButtonText: isRtl ? 'حسناً' : 'OK',
        confirmButtonColor: '#00594C',
      });
    } finally {
      setIsJoining(false);
    }
  }

  function handleLeaveSession() {
    setStage('before');
    setJoinData(null);
    try {
      sessionStorage.removeItem('student_live_session');
      sessionStorage.removeItem('student_live_joindata');
      sessionStorage.removeItem('student_live_stage');
    } catch (err) { void err; }
    setSearchParams({}, { replace: true });
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
            onRefreshJoinData={() => handleJoinSession(session)}
            isRefreshing={isJoining}
          />
        )}
      </motion.div>
    </div>
  );
}
