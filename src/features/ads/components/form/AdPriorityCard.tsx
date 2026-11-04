"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export function AdPriorityCard() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const { control, setValue } = useFormContext();

  const priority = useWatch({ control, name: "priority" }) || 1;

  const PRIORITY_OPTIONS = [
    { value: "1", labelAr: "1 (الأعلى)", labelEn: "1 (Highest)" },
    { value: "2", labelAr: "2", labelEn: "2" },
    { value: "3", labelAr: "3", labelEn: "3" },
    { value: "4", labelAr: "4", labelEn: "4" },
    { value: "5", labelAr: "5 (متوسط)", labelEn: "5 (Medium)" },
    { value: "6", labelAr: "6", labelEn: "6" },
    { value: "7", labelAr: "7", labelEn: "7" },
    { value: "8", labelAr: "8", labelEn: "8" },
    { value: "9", labelAr: "9", labelEn: "9" },
    { value: "10", labelAr: "10 (الأدنى)", labelEn: "10 (Lowest)" },
  ];

  return (
    <Card className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          {isAr ? "أولوية الظهور" : "Display Priority"}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
          {isAr
            ? "من 1 (الأعلى) إلى 10 (الأدنى). داخل نفس المكان، يُرتَّب الظهور حسب المالك أولاً ثم الأولوية."
            : "From 1 (Highest) to 10 (Lowest). Within the same location, display is ordered by owner first, then priority."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Select
            value={priority.toString()}
            onValueChange={(val) => setValue("priority", parseInt(val), { shouldDirty: true })}
          >
            <SelectTrigger className="bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg">
              <SelectValue placeholder={isAr ? "1 (الأعلى)" : "1 (Highest)"} />
            </SelectTrigger>
            <SelectContent>
              {PRIORITY_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {isAr ? opt.labelAr : opt.labelEn}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 space-y-2.5">
          <div className="font-bold text-xs sm:text-sm text-teal-900 dark:text-teal-200">
            {isAr ? "ترتيب العرض داخل نفس المكان" : "Display order within the same location"}
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white text-[11px] font-bold shrink-0">
                1
              </span>
              <span>
                <strong className="text-gray-900 dark:text-white">
                  {isAr ? "إعلانات الأدمن" : "Admin ads"}
                </strong>{" "}
                {isAr ? "تظهر أولاً دائماً." : "always appear first."}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-bold shrink-0">
                2
              </span>
              <span>
                <strong className="text-gray-900 dark:text-white">
                  {isAr ? "إعلانات المطوّرين" : "Developer ads"}
                </strong>{" "}
                {isAr ? "بعدها." : "next."}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-600 text-white text-[11px] font-bold shrink-0">
                3
              </span>
              <span>
                {isAr ? "داخل كل مجموعة:" : "Within each group:"}{" "}
                <strong className="text-gray-900 dark:text-white">
                  {isAr ? "الأولوية 1 ← 10." : "Priority 1 → 10."}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
