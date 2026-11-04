import { ICameraVideoTrack } from "agora-rtc-sdk-ng";
import { User, Maximize2, Minimize2 } from "lucide-react";
import { RemoteUser } from "./types";
import { RemoteVideoTile } from "./RemoteVideoTile";
import { LocalVideoPreview } from "./LocalVideoPreview";

interface MeetingVideoGridProps {
  remoteUsers: RemoteUser[];
  localVideoTrack: ICameraVideoTrack | null;
  isVideoOn: boolean;
  isPiP: boolean;
  onTogglePiP: () => void;
}

export function MeetingVideoGrid({
  remoteUsers,
  localVideoTrack,
  isVideoOn,
  isPiP,
  onTogglePiP,
}: MeetingVideoGridProps) {
  const primaryRemoteUser = remoteUsers[0];

  return (
    <div className="flex-1 relative p-4 flex gap-4 overflow-hidden">
      <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-900 relative">
        {primaryRemoteUser ? (
          <RemoteVideoTile user={primaryRemoteUser} />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-3">
            <User className="w-16 h-16" />
            <p className="text-sm">Waiting for the consultant to join…</p>
          </div>
        )}
      </div>

      <div
        className={`transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 ${
          isPiP
            ? "absolute bottom-8 right-8 w-44 h-32 cursor-pointer z-20"
            : "w-56 h-44 flex-shrink-0"
        }`}
        onClick={() => isPiP && onTogglePiP()}
      >
        <LocalVideoPreview track={localVideoTrack} isVideoOn={isVideoOn} />
      </div>

      <button
        onClick={onTogglePiP}
        className="absolute top-6 right-6 p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white transition z-10"
        title={isPiP ? "Expand local video" : "Minimise local video"}
      >
        {isPiP ? (
          <Maximize2 className="w-4 h-4" />
        ) : (
          <Minimize2 className="w-4 h-4" />
        )}
      </button>

      {remoteUsers.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {remoteUsers.slice(1).map((u) => (
            <div
              key={u.uid}
              className="w-28 h-20 rounded-xl overflow-hidden border border-zinc-700 shadow-lg"
            >
              <RemoteVideoTile user={u} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
