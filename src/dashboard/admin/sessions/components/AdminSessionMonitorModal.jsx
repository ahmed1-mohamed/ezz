import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Maximize2,
  Minimize2,
  Video,
  Radio,
  Clock,
  Users,
  ExternalLink,
  ShieldAlert,
  GraduationCap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import ZoomMeetingPlayer from '@/shared/components/ZoomMeetingPlayer'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi'

export default function AdminSessionMonitorModal({ session, isOpen, onClose }) {
  const { i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true
  const [monitorData, setMonitorData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const modalContainerRef = useRef(null)
  const formatElapsed = useCallback((totalSecs) => {
    const hrs = Math.floor(totalSecs / 3600)
    const mins = Math.floor((totalSecs % 3600) / 60)
    const secs = totalSecs % 60
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])
  const executeToggleFullscreen = useCallback(() => {
    if (!modalContainerRef.current) return
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }, [])
  useEffect(() => {
    if (!isOpen || !session?.id) return
    let isCancelled = false
    const loadMonitorPayload = async () => {
      setIsLoading(true)
      setFetchError(null)
      try {
        const res = await adminSessionsApi.fetchMonitorJoinData(session.id)
        if (isCancelled) return
        if (res.success && res.data) {
          setMonitorData(res.data)
        } else {
          setFetchError(res.message || 'Waiting for live monitor connection')
        }
      } catch (err) {
        if (!isCancelled) setFetchError(err.message || 'Waiting for live monitor connection')
      } finally {
        if (!isCancelled) setIsLoading(false)
      }
    }
    loadMonitorPayload()
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1)
    }, 1000)
    return () => {
      isCancelled = true
      clearInterval(timer)
      setMonitorData(null)
      setElapsedSeconds(0)
    }
  }, [isOpen, session?.id])
  if (!isOpen || !session || typeof document === 'undefined') return null
  const resolvedJoinUrl =
    (typeof monitorData === 'string' && monitorData.startsWith('http') ? monitorData : null) ||
    monitorData?.joinUrl ||
    monitorData?.join_url ||
    monitorData?.url ||
    monitorData?.link ||
    monitorData?.startUrl ||
    monitorData?.start_url ||
    monitorData?.zoomJoinUrl ||
    monitorData?.data?.joinUrl ||
    monitorData?.data?.join_url ||
    monitorData?.data?.url ||
    session?.zoomJoinUrl ||
    session?.joinUrl ||
    ''
  const resolvedMeetingId =
    monitorData?.meetingNumber ||
    monitorData?.meetingId ||
    monitorData?.meeting_id ||
    monitorData?.data?.meetingNumber ||
    monitorData?.data?.meetingId ||
    session?.zoomMeetingId ||
    ''
  const resolvedPasscode =
    monitorData?.password ||
    monitorData?.passcode ||
    monitorData?.pwd ||
    monitorData?.data?.password ||
    monitorData?.data?.passcode ||
    session?.zoomPasscode ||
    ''
  const resolvedSdkSignature =
    monitorData?.signature ||
    monitorData?.sdkSignature ||
    monitorData?.sdk_signature ||
    monitorData?.data?.signature ||
    ''
  const resolvedZak =
    monitorData?.zak ||
    monitorData?.zakToken ||
    monitorData?.zak_token ||
    monitorData?.data?.zak ||
    ''
  const hasInteractiveZoom = Boolean(resolvedMeetingId || resolvedJoinUrl)
  const handleJoinSession = () => {
    if (resolvedJoinUrl) {
      window.open(resolvedJoinUrl, '_blank', 'noopener,noreferrer')
      return
    }
    if (resolvedMeetingId) {
      const directZoom = `https://zoom.us/j/${resolvedMeetingId}${resolvedPasscode ? `?pwd=${resolvedPasscode}` : ''}`
      window.open(directZoom, '_blank', 'noopener,noreferrer')
      return
    }
    adminSessionsApi.fetchMonitorJoinData(session.id).then((res) => {
      const url =
        (typeof res.data === 'string' && res.data.startsWith('http') ? res.data : null) ||
        res.data?.joinUrl ||
        res.data?.join_url ||
        res.data?.url ||
        res.data?.startUrl
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    })
  }
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        ref={modalContainerRef}
        className={`relative w-full bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isFullscreen ? 'h-full max-h-none rounded-none' : 'max-w-6xl max-h-[92vh] h-[85vh]'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950 text-white shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500" />
            </span>
            <div className="min-w-0 text-start">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white truncate">
                  {isRtl ? 'مراقبة وإشراف الحصة المباشرة' : 'Live Session Supervision'}
                </h2>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-black">
                  <Radio size={12} className="animate-pulse" />
                  <span>{isRtl ? 'مباشر الآن' : 'LIVE'}</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-1">
                <span className="font-bold text-emerald-400">{session.groupName || (isRtl ? 'مجموعة دراسية' : 'Study Group')}</span>
                {session.title && <span className="text-slate-400">• {session.title}</span>}
                {session.teacher && (
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    <GraduationCap size={13} className="text-amber-400" />
                    <span>{session.teacher}</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-slate-400 font-mono">
                  <Clock size={12} />
                  <span>{formatElapsed(elapsedSeconds)}</span>
                </span>
                {session.studentsCount > 0 && (
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <Users size={12} />
                    <span>{session.studentsCount} {isRtl ? 'طلاب' : 'Students'}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleJoinSession}
              title={isRtl ? 'انضمام للحصة' : 'Join Session'}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black transition-all shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-500/40 active:scale-95 cursor-pointer"
            >
              <Video size={16} />
              <span>{isRtl ? 'انضمام' : 'Join'}</span>
              <ExternalLink size={13} />
            </button>
            <button
              type="button"
              onClick={executeToggleFullscreen}
              title={isFullscreen ? (isRtl ? 'إنهاء وضع ملء الشاشة' : 'Exit Fullscreen') : (isRtl ? 'ملء الشاشة' : 'Fullscreen')}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              type="button"
              onClick={onClose}
              title={isRtl ? 'إغلاق المراقبة' : 'Close Monitor'}
              className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/60 text-slate-300 hover:text-rose-300 transition-colors border border-slate-800"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-slate-950 relative flex flex-col items-center justify-center overflow-hidden">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3 text-slate-300">
              <Spinner size="lg" />
              <p className="text-sm font-semibold animate-pulse">
                {isRtl ? 'جاري الاتصال بنظام المراقبة المباشرة...' : 'Connecting to live supervision stream...'}
              </p>
            </div>
          ) : hasInteractiveZoom ? (
            <ZoomMeetingPlayer
              meetingId={resolvedMeetingId}
              passcode={resolvedPasscode}
              role={0}
              sdkSignature={resolvedSdkSignature}
              zakToken={resolvedZak}
              joinUrl={resolvedJoinUrl}
              userName={isRtl ? 'إدارة منارة العز (مراقبة)' : 'Manarat Al-Ezz Supervisor'}
              sessionTitle={session.title || session.groupName || (isRtl ? 'حصة دراسية' : 'Session')}
              className="w-full h-full"
            />
          ) : (
            <div className="max-w-xl mx-auto p-8 text-center text-slate-200 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                <ShieldAlert size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white">
                  {isRtl ? 'مراقبة الحصة المباشرة' : 'Live Session Monitoring'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {isRtl
                    ? 'جاري تجهيز نقطة اتصال المراقبة التلقائية (GET /api/v1/sessions/private/:id/monitor-join). يمكنك الضغط على زر انضمام أعلاه أو أدناه للدخول فوراً.'
                    : 'The automated monitor endpoint (GET /api/v1/sessions/private/:id/monitor-join) is connecting. You can click the Join button above or below to join directly.'}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-start space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'المجموعة:' : 'Group:'}</span>
                  <span className="font-bold text-white">{session.groupName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'المعلم:' : 'Teacher:'}</span>
                  <span className="font-bold text-amber-300">{session.teacher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'معرّف الحصة:' : 'Session ID:'}</span>
                  <span className="font-mono text-slate-300">{session.id}</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleJoinSession}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl hover:shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer"
                >
                  <Video size={16} />
                  <span>{isRtl ? 'انضمام (Join)' : 'Join Session'}</span>
                  <ExternalLink size={14} />
                </button>
              </div>
              {fetchError && (
                <div className="text-xs text-slate-500 font-mono">
                  {fetchError}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-300">
              {isRtl ? 'وضع إشراف الإدارة (دور المراقب)' : 'Admin Supervisory Mode (Observer)'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleJoinSession}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Video size={13} />
              <span>{isRtl ? 'انضمام مباشر للحصة' : 'Direct Join'}</span>
              <ExternalLink size={12} />
            </button>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span>GET /api/v1/sessions/private/{session.id}/monitor-join</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

