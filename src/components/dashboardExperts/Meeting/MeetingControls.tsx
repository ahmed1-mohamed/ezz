import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  CircleStop,
  Circle,
} from "lucide-react";

interface MeetingControlsProps {
  isRecording: boolean;
  isMicOn: boolean;
  isVideoOn: boolean;
  onToggleRecording: () => void;
  onToggleMic: () => void;
  onToggleVideo: () => void;
  onLeaveCall: () => void;
}

export function MeetingControls({
  isRecording,
  isMicOn,
  isVideoOn,
  onToggleRecording,
  onToggleMic,
  onToggleVideo,
  onLeaveCall,
}: MeetingControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 px-6 py-5 bg-zinc-900/80 backdrop-blur border-t border-zinc-800">
      <button
        onClick={onToggleRecording}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isRecording
            ? "bg-red-600 hover:bg-red-500 text-white animate-pulse"
            : "bg-zinc-700 hover:bg-zinc-600 text-white"
        }`}
        title={isRecording ? "Stop recording" : "Start recording"}
      >
        {isRecording ? (
          <CircleStop className="w-5 h-5" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </button>

      <button
        onClick={onToggleMic}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isMicOn
            ? "bg-zinc-700 hover:bg-zinc-600 text-white"
            : "bg-red-600 hover:bg-red-500 text-white"
        }`}
        title={isMicOn ? "Mute" : "Unmute"}
      >
        {isMicOn ? (
          <Mic className="w-5 h-5" />
        ) : (
          <MicOff className="w-5 h-5" />
        )}
      </button>

      <button
        onClick={onToggleVideo}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isVideoOn
            ? "bg-zinc-700 hover:bg-zinc-600 text-white"
            : "bg-red-600 hover:bg-red-500 text-white"
        }`}
        title={isVideoOn ? "Turn off camera" : "Turn on camera"}
      >
        {isVideoOn ? (
          <Video className="w-5 h-5" />
        ) : (
          <VideoOff className="w-5 h-5" />
        )}
      </button>

      <button
        onClick={onLeaveCall}
        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center transition-all shadow-lg shadow-red-900/30"
        title="Leave call"
      >
        <PhoneOff className="w-6 h-6" />
      </button>
    </div>
  );
}
