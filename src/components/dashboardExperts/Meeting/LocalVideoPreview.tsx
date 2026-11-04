import { useEffect, useRef } from "react";
import { User } from "lucide-react";
import { ICameraVideoTrack } from "agora-rtc-sdk-ng";

export function LocalVideoPreview({
  track,
  isVideoOn,
}: {
  track: ICameraVideoTrack | null;
  isVideoOn: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (track && containerRef.current && isVideoOn)
      track.play(containerRef.current);
    return () => {
      track?.stop();
    };
  }, [track, isVideoOn]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-zinc-800 rounded-xl overflow-hidden relative flex items-center justify-center"
    >
      {!isVideoOn && (
        <div className="flex flex-col items-center gap-2 text-zinc-400">
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <span className="text-xs">You (camera off)</span>
        </div>
      )}
      <span className="absolute bottom-2 left-2 text-xs text-white/70 bg-black/40 px-2 py-0.5 rounded-full">
        You
      </span>
    </div>
  );
}