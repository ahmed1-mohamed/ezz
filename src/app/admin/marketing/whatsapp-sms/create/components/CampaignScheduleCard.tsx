import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Calendar } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";
import { getTodayInputDate } from "../../../utils/campaign-validation";

interface CampaignScheduleCardProps {
  scheduleType: "immediate" | "scheduled";
  setScheduleType: (type: "immediate" | "scheduled") => void;
  scheduleDate: string;
  setScheduleDate: (val: string) => void;
  scheduleTime: string;
  setScheduleTime: (val: string) => void;
  isRTL: boolean;
  error?: string;
}

export const CampaignScheduleCard = React.memo(({
  scheduleType,
  setScheduleType,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  isRTL,
  error,
}: CampaignScheduleCardProps) => {
  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
          {isRTL ? "توقيت الإرسال" : "Send timing"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setScheduleType("immediate")}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-start ${scheduleType === "immediate"
                ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/20"
                : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
              }`}
          >
            <div
              className={`p-2 rounded-lg ${scheduleType === "immediate"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 dark:bg-neutral-800 text-gray-500"
                }`}
            >
              <Clock className="h-5 w-5" />
            </div>
            <span
              className={`text-sm font-bold ${scheduleType === "immediate"
                  ? "text-teal-700 dark:text-teal-400"
                  : "text-gray-700 dark:text-gray-300"
                }`}
            >
              {isRTL ? "فوري" : "Immediate"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setScheduleType("scheduled")}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-start ${scheduleType === "scheduled"
                ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/20"
                : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
              }`}
          >
            <div
              className={`p-2 rounded-lg ${scheduleType === "scheduled"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 dark:bg-neutral-800 text-gray-500"
                }`}
            >
              <Calendar className="h-5 w-5" />
            </div>
            <span
              className={`text-sm font-bold ${scheduleType === "scheduled"
                  ? "text-teal-700 dark:text-teal-400"
                  : "text-gray-700 dark:text-gray-300"
                }`}
            >
              {isRTL ? "مجدول" : "Scheduled"}
            </span>
          </button>
        </div>

        {scheduleType === "scheduled" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                {isRTL ? "التاريخ" : "Date"}
              </label>
              <Input
                type="date"
                required={scheduleType === "scheduled"}
                value={scheduleDate}
                min={getTodayInputDate()}
                onChange={(e) => setScheduleDate(e.target.value)}
                error={!!error}
                aria-invalid={!!error}
                className={`bg-white dark:bg-neutral-950 focus:border-teal-500 focus:ring-teal-500 w-full ${error ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={error} />
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                {isRTL ? "الوقت" : "Time"}
              </label>
              <select
                required={scheduleType === "scheduled"}
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                aria-invalid={!!error}
                className={`bg-white border ${error ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} dark:bg-neutral-950 focus:border-teal-500 focus:ring-teal-500 rounded-lg text-sm p-2 w-full h-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500`}
              >
                <option value="">{isRTL ? "اختر الساعة" : "Select hour"}</option>
                {Array.from({ length: 24 }).map((_, i) => {
                  const value = `${String(i).padStart(2, '0')}:00`;
                  const suffix = i >= 12 ? (isRTL ? "م" : "PM") : (isRTL ? "ص" : "AM");
                  const displayHour = i % 12 === 0 ? 12 : i % 12;
                  const label = `${String(displayHour).padStart(2, '0')}:00 ${suffix}`;
                  return (
                    <option key={i} value={value}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

CampaignScheduleCard.displayName = "CampaignScheduleCard";