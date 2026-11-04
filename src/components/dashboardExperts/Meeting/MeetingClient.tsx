"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AgoraRTC, {
  IAgoraRTCClient,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { DashboardExpertService } from "@/data/api-client";
import { useToken } from "@/contexts/SessionProviderWrapper";
import { useLanguage } from "@/contexts/LanguageContext";

const AGORA_APP_ID = process.env.NEXT_PUBLIC_AGORA_APP_ID!;

const MIC_CONFIG = {
  AEC: true,
  ANS: true,
  AGC: true,
  encoderConfig: "speech_standard",
} as const;

const CAM_CONFIG = {
  encoderConfig: {
    width: 1280,
    height: 720,
    frameRate: 30,
    bitrateMin: 1000,
    bitrateMax: 3000,
  },
};

// A missing mic or camera shouldn't block joining the session, so each device
// is created on its own and a missing one resolves to null.
const isMissingDevice = (err: any) =>
  err?.code === "DEVICE_NOT_FOUND" || err?.code === "NOT_SUPPORTED";

const createMicTrack = async () => {
  try {
    return await AgoraRTC.createMicrophoneAudioTrack(MIC_CONFIG);
  } catch (err) {
    if (isMissingDevice(err)) return null;
    throw err;
  }
};

const createCamTrack = async () => {
  try {
    return await AgoraRTC.createCameraVideoTrack(CAM_CONFIG);
  } catch (err) {
    if (isMissingDevice(err)) return null;
    throw err;
  }
};

import { RemoteUser } from "./types";
import { MeetingHeader } from "./MeetingHeader";
import { MeetingVideoGrid } from "./MeetingVideoGrid";
import { MeetingControls } from "./MeetingControls";
import { LeaveMeetingDialog } from "./LeaveMeetingDialog";

export default function MeetingClient() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const channelName = params?.channel_name as string;

  const clientRef = useRef<IAgoraRTCClient | null>(null);
  const localAudioRef = useRef<IMicrophoneAudioTrack | null>(null);
  const localVideoRef = useRef<ICameraVideoTrack | null>(null);

  const { userId } = useToken();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isPiP, setIsPiP] = useState(false);
  const [remoteUsers, setRemoteUsers] = useState<RemoteUser[]>([]);
  const [connectionState, setConnectionState] = useState<string>("CONNECTING");
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawIntervalRef = useRef<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  // Read the translator through a ref so a language change does not tear down
  // and re-join the call.
  const tRef = useRef(t);
  useEffect(() => {
    tRef.current = t;
  }, [t]);

  useEffect(() => {
    let isCancelled = false;
    // Resources owned by this run. A superseded run (Strict Mode double mount,
    // session finishing loading) must release its own client and mic instead
    // of leaving a second capture and a second player of remote audio behind.
    let client: IAgoraRTCClient | null = null;
    let micTrack: IMicrophoneAudioTrack | null = null;
    let camTrack: ICameraVideoTrack | null = null;

    const release = () => {
      micTrack?.close();
      camTrack?.close();
      client?.removeAllListeners();
      client?.leave().catch(() => { });
      if (localAudioRef.current === micTrack) localAudioRef.current = null;
      if (localVideoRef.current === camTrack) localVideoRef.current = null;
      if (clientRef.current === client) clientRef.current = null;
    };

    // Browsers block audio that starts without a user gesture (e.g. after a
    // page refresh); the SDK resumes playback on the next click.
    AgoraRTC.onAutoplayFailed = () => {
      toast.info(tRef.current("experts.messages.enableCallAudio"));
    };

    // Follow headset plug/unplug so the call does not go silent when the
    // capturing microphone disappears.
    AgoraRTC.onMicrophoneChanged = async (changed) => {
      const track = micTrack;
      if (!track) return;
      try {
        if (changed.state === "ACTIVE") {
          await track.setDevice(changed.device.deviceId);
        } else if (changed.device.label === track.getTrackLabel()) {
          const [fallback] = await AgoraRTC.getMicrophones();
          if (fallback) await track.setDevice(fallback.deviceId);
        }
      } catch { }
    };

    const join = async () => {
      if (!channelName) {
        setError("Invalid meeting link — no channel specified.");
        setLoading(false);
        return;
      }

      if (!AGORA_APP_ID) {
        setError("Video calls are not configured (missing NEXT_PUBLIC_AGORA_APP_ID).");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const res = await DashboardExpertService.agoraCall(channelName);
        const tokenData = res.data?.data;

        if (!tokenData?.token) throw new Error("No token returned from server");
        if (isCancelled) return;

        // The token is issued for this exact channel and uid. Agora treats string
        // uids as user accounts, so numeric ids are joined as integers.
        const { token } = tokenData;
        const meetingChannel = tokenData.channel || channelName;
        const uid = tokenData.uid ?? userId;
        const joinUid =
          uid != null && /^\d+$/.test(String(uid)) ? Number(uid) : uid || null;

        client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
        clientRef.current = client;
        const rtc = client;

        rtc.on("connection-state-change", (cur) => setConnectionState(cur));

        rtc.on("user-published", async (user, mediaType) => {
          try {
            await rtc.subscribe(user, mediaType);
          } catch {
            return;
          }
          setRemoteUsers((prev) => {
            const existing = prev.find((u) => u.uid === user.uid);
            if (existing) {
              return prev.map((u) =>
                u.uid === user.uid
                  ? {
                    ...u,
                    videoTrack:
                      mediaType === "video" ? user.videoTrack : u.videoTrack,
                    audioTrack:
                      mediaType === "audio" ? user.audioTrack : u.audioTrack,
                    hasVideo: mediaType === "video" ? true : u.hasVideo,
                    hasAudio: mediaType === "audio" ? true : u.hasAudio,
                  }
                  : u,
              );
            }
            return [
              ...prev,
              {
                uid: user.uid,
                videoTrack: mediaType === "video" ? user.videoTrack : undefined,
                audioTrack: mediaType === "audio" ? user.audioTrack : undefined,
                hasVideo: mediaType === "video",
                hasAudio: mediaType === "audio",
              },
            ];
          });
          // Remote audio is not rendered into a DOM element like video, so it
          // stays silent until play() is called on the track.
          if (mediaType === "audio") {
            user.audioTrack?.setVolume(100);
            user.audioTrack?.play();
          }
        });

        rtc.on("user-unpublished", (user, mediaType) => {
          if (mediaType === "audio") user.audioTrack?.stop();
          setRemoteUsers((prev) =>
            prev.map((u) =>
              u.uid === user.uid
                ? {
                  ...u,
                  videoTrack:
                    mediaType === "video" ? undefined : u.videoTrack,
                  audioTrack:
                    mediaType === "audio" ? undefined : u.audioTrack,
                  hasVideo: mediaType === "video" ? false : u.hasVideo,
                  hasAudio: mediaType === "audio" ? false : u.hasAudio,
                }
                : u,
            ),
          );
        });

        rtc.on("user-left", (user) => {
          setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid));
          toast.info(tRef.current("experts.messages.participantLeftCall"));
        });

        await rtc.join(AGORA_APP_ID, meetingChannel, token, joinUid);
        if (isCancelled) return release();

        if (rtc.remoteUsers.length > 1) {
          setError("This meeting is full (maximum 2 participants).");
          release();
          return;
        }

        // Users already in the channel are delivered through "user-published"
        // after join, so they need no separate subscription here.

        // Assign to the run-scoped tracks so release() can close them.
        micTrack = await createMicTrack();
        localAudioRef.current = micTrack;
        camTrack = await createCamTrack();
        localVideoRef.current = camTrack;
        if (isCancelled) return release();

        if (!micTrack) toast.warning(t("experts.messages.microphoneNotFound"));
        if (!camTrack) toast.warning(t("experts.messages.cameraNotFound"));

        micTrack?.setEnabled(false);
        camTrack?.setEnabled(false);

        const localTracks = [micTrack, camTrack].filter(
          (track): track is IMicrophoneAudioTrack | ICameraVideoTrack => !!track,
        );
        if (localTracks.length) await client.publish(localTracks);
      } catch (err: any) {
        // Do not leave a half-set-up client or an open microphone behind.
        release();
        if (isCancelled) return;
        if (err?.code === "PERMISSION_DENIED") {
          setError(t("experts.messages.callPermissionDenied"));
        } else {
          // Only a readable backend message is shown; SDK/technical errors fall back to ours.
          setError(
            err?.response
              ? getApiErrorMessage(err, t, t("experts.messages.callStartFailed"))
              : t("experts.messages.callStartFailed"),
          );
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    join();

    return () => {
      isCancelled = true;
      AgoraRTC.onAutoplayFailed = undefined;
      AgoraRTC.onMicrophoneChanged = undefined;
      release();
      // The next run starts with fresh, muted tracks and re-learns remote users.
      setRemoteUsers([]);
      setIsMicOn(false);
      setIsVideoOn(false);
    };
  }, [channelName, userId]);

  const startRecording = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const localVideo = document.createElement("video");
    const remoteVideo = document.createElement("video");
    if (localVideoRef.current) {
      localVideo.srcObject = new MediaStream([
        localVideoRef.current.getMediaStreamTrack(),
      ]);
      localVideo.muted = true;
      localVideo.play();
    }
    if (remoteUsers[0]?.videoTrack) {
      remoteVideo.srcObject = new MediaStream([
        remoteUsers[0].videoTrack.getMediaStreamTrack(),
      ]);
      remoteVideo.play();
    }
    const draw = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (remoteVideo.readyState >= 2)
        ctx.drawImage(remoteVideo, 0, 0, canvas.width, canvas.height);
      if (localVideo.readyState >= 2)
        ctx.drawImage(
          localVideo,
          canvas.width - 320,
          canvas.height - 180,
          300,
          170,
        );
    };
    drawIntervalRef.current = window.setInterval(draw, 33);
    const canvasStream = canvas.captureStream(30);
    const audioContext = new AudioContext();
    const dest = audioContext.createMediaStreamDestination();
    remoteUsers.forEach((u) => {
      if (u.audioTrack) {
        const source = audioContext.createMediaStreamSource(
          new MediaStream([u.audioTrack.getMediaStreamTrack()]),
        );
        source.connect(dest);
      }
    });
    if (localAudioRef.current) {
      const source = audioContext.createMediaStreamSource(
        new MediaStream([localAudioRef.current.getMediaStreamTrack()]),
      );
      source.connect(dest);
    }
    const combined = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...dest.stream.getAudioTracks(),
    ]);
    const recorder = new MediaRecorder(combined, {
      mimeType: "video/webm;codecs=vp8,opus",
    });
    recordedChunksRef.current = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `meeting-${Date.now()}.webm`;
      a.click();
      URL.revokeObjectURL(url);
      // Each recording opens its own audio graph; close it so repeated
      // recordings do not keep tapping the mic and remote audio.
      audioContext.close();
      if (drawIntervalRef.current) clearInterval(drawIntervalRef.current);
    };
    recorder.start();
    mediaRecorderRef.current = recorder;
    setIsRecording(true);
    toast.success(t("experts.messages.recordingStarted"));
  };

  const stopRecording = () => {
    if (drawIntervalRef.current) clearInterval(drawIntervalRef.current);
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    toast.success(t("experts.messages.recordingSaved"));
  };

  // If the device was missing at join time, retry creating it on toggle so a
  // mic/camera plugged in mid-session can still be used.
  const toggleMic = async () => {
    if (!localAudioRef.current) {
      try {
        const micTrack = await createMicTrack();
        if (!micTrack) {
          toast.error(t("experts.messages.deviceStillNotFound"));
          return;
        }
        localAudioRef.current = micTrack;
        await clientRef.current?.publish(micTrack);
        setIsMicOn(true);
      } catch {
        // Device errors carry technical text (e.g. "AgoraRTCError NOT_READABLE"); show ours instead.
        toast.error(t("experts.messages.deviceStillNotFound"));
      }
      return;
    }
    await localAudioRef.current.setEnabled(!isMicOn);
    setIsMicOn((v) => !v);
  };

  const toggleVideo = async () => {
    if (!localVideoRef.current) {
      try {
        const camTrack = await createCamTrack();
        if (!camTrack) {
          toast.error(t("experts.messages.deviceStillNotFound"));
          return;
        }
        localVideoRef.current = camTrack;
        await clientRef.current?.publish(camTrack);
        setIsVideoOn(true);
      } catch {
        // Device errors carry technical text (e.g. "AgoraRTCError NOT_READABLE"); show ours instead.
        toast.error(t("experts.messages.deviceStillNotFound"));
      }
      return;
    }
    await localVideoRef.current.setEnabled(!isVideoOn);
    setIsVideoOn((v) => !v);
  };

  const confirmLeave = () => setShowLeaveDialog(true);

  const leaveCall = async () => {
    setShowLeaveDialog(false);
    localAudioRef.current?.close();
    localVideoRef.current?.close();
    await clientRef.current?.leave();
    router.push("/expert/bookings");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-violet-500" />
        <p className="text-zinc-400 text-sm">Connecting to session…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white gap-4">
        <AlertCircle className="w-10 h-10 text-red-400" />
        <p className="text-red-400 text-sm text-center max-w-sm">{error}</p>
        <Button
          variant="outline"
          onClick={() => router.push("/expert/bookings")}
          className="text-black bg-white"
        >
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white overflow-hidden">
      <canvas ref={canvasRef} width={1280} height={720} className="hidden" />

      <MeetingHeader
        connectionState={connectionState}
        participantCount={remoteUsers.length}
      />

      <div className="flex flex-1 overflow-hidden">
        <MeetingVideoGrid
          remoteUsers={remoteUsers}
          localVideoTrack={localVideoRef.current}
          isVideoOn={isVideoOn}
          isPiP={isPiP}
          onTogglePiP={() => setIsPiP((v) => !v)}
        />
      </div>

      <MeetingControls
        isRecording={isRecording}
        isMicOn={isMicOn}
        isVideoOn={isVideoOn}
        onToggleRecording={isRecording ? stopRecording : startRecording}
        onToggleMic={toggleMic}
        onToggleVideo={toggleVideo}
        onLeaveCall={confirmLeave}
      />

      <LeaveMeetingDialog
        open={showLeaveDialog}
        onOpenChange={setShowLeaveDialog}
        onConfirmLeave={leaveCall}
      />
    </div>
  );
}
