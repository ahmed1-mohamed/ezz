import { Badge } from "@/components/ui/badge";

interface MeetingHeaderProps {
  connectionState: string;
  participantCount: number;
}

export function MeetingHeader({
  connectionState,
  participantCount,
}: MeetingHeaderProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-zinc-900/80 backdrop-blur border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <Badge
          variant="outline"
          className={`text-xs capitalize border-0 ${
            connectionState === "CONNECTED"
              ? "bg-green-900/40 text-green-400"
              : "bg-yellow-900/40 text-yellow-400"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 inline-block" />
          {connectionState === "CONNECTED" ? "Live" : connectionState}
        </Badge>
      </div>
      <span className="text-xs text-zinc-500">
        {participantCount} participant{participantCount !== 1 ? "s" : ""} connected
      </span>
    </div>
  );
}
