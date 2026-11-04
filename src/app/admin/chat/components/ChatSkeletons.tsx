"use client";

export function ChatContactListSkeleton() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-800/70 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-3.5 flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-gray-200 dark:bg-gray-800 flex-shrink-0" />
          <div className="flex-1 min-w-0 space-y-2 py-0.5">
            <div className="flex items-center justify-between gap-2">
              <div className="h-3.5 bg-gray-200 dark:bg-gray-800 rounded w-24" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-10" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-36" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ChatMessageListSkeleton() {
  return (
    <div className="flex-1 p-4 sm:p-6 space-y-6 animate-pulse overflow-hidden bg-gray-50/50 dark:bg-gray-950/60">
      <div className="flex justify-center">
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded-full w-20" />
      </div>

      <div className="flex justify-start">
        <div className="space-y-1.5 max-w-[75%] sm:max-w-md">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-16 px-1" />
          <div className="h-14 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-es-xs w-48 sm:w-64" />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="space-y-1.5 max-w-[75%] sm:max-w-md flex flex-col items-end">
          <div className="h-16 bg-teal-200/50 dark:bg-teal-950/50 rounded-2xl rounded-ee-xs w-56 sm:w-72" />
          <div className="h-2.5 bg-gray-200 dark:bg-gray-800 rounded w-12" />
        </div>
      </div>

      <div className="flex justify-start">
        <div className="space-y-1.5 max-w-[75%] sm:max-w-md">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-20 px-1" />
          <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-es-xs w-36 sm:w-52" />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="space-y-1.5 max-w-[75%] sm:max-w-md flex flex-col items-end">
          <div className="h-32 bg-teal-200/50 dark:bg-teal-950/50 rounded-2xl rounded-ee-xs w-60 sm:w-80" />
          <div className="h-2.5 bg-gray-200 dark:bg-gray-800 rounded w-14" />
        </div>
      </div>
    </div>
  );
}