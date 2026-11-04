"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function PropertiesLoadingSkeleton() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-9 w-full sm:w-48" />
        <Skeleton className="h-9 w-full sm:w-36" />
        <Skeleton className="h-9 w-full sm:w-36" />
        <Skeleton className="h-9 w-full sm:w-36" />
      </div>
      <div className="rounded-lg border border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
        <div className="p-4 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-4 w-4 shrink-0" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-20 shrink-0" />
              <Skeleton className="h-4 w-16 shrink-0" />
              <Skeleton className="h-4 w-16 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
