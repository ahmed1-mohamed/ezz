import { useEffect, useRef } from "react";
import { User } from "lucide-react";
import { RemoteUser } from "./types";

export function RemoteVideoTile({ user }: { user: RemoteUser }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user.videoTrack && containerRef.current)
      user.videoTrack.play(containerRef.current);
    return () => {
      user.videoTrack?.stop();
    };
  }, [user.videoTrack, user.uid]);

  return (
    <div className="w-full h-full bg-zinc-900 rounded-xl overflow-hidden relative">
      <div ref={containerRef} className="w-full h-full" />
      {!user.hasVideo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-400">
          <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center">
            <User className="w-10 h-10" />
          </div>
          <span className="text-sm">Camera off</span>
        </div>
      )}
    </div>
  );
}