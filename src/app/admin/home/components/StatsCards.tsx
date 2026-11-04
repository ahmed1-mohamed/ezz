import { memo } from "react";
import { type StatsCard } from "../types";

export const StatsCards = memo(function StatsCards({ stats }: { stats: StatsCard[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-4"
        >
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">{card.title}</span>
            <card.icon className="h-4 w-4 text-gray-300 flex-shrink-0" />
          </div>
          <div className="text-2xl font-bold text-gray-900 leading-tight">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
});