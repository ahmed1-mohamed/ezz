"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

export function AdSchedulingCard() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const { register, watch, setValue, control, formState: { errors } } = useFormContext();

  const status = useWatch({ control, name: "status" }) || "draft";
  const startDateVal = useWatch({ control, name: "startDate" });

  return (
    <Card id="ad-scheduling-card" className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          {isAr ? "الجدولة" : "Scheduling"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300" htmlFor="startDate">
              {isAr ? "تاريخ البدء *" : "Start Date *"}
            </Label>
            <div className="relative">
              <Input
                id="startDate"
                type="date"
                error={!!errors.startDate}
                {...register("startDate", {
                  required: isAr ? "تاريخ البدء مطلوب" : "Start date is required",
                  validate: (val) => {
                    const end = watch("endDate");
                    if (!end) return true;
                    return new Date(val) <= new Date(end) || (isAr ? "يجب أن يكون تاريخ البدء قبل أو يساوي تاريخ الانتهاء" : "Start must be before or equal to end");
                  },
                  deps: ["endDate"]
                })}
                className={`bg-white dark:bg-neutral-800/60 ps-10 h-11 text-xs sm:text-sm rounded-lg ${errors.startDate
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-gray-200 dark:border-neutral-700"
                  }`}
              />
              <Calendar className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <FieldError message={errors.startDate?.message as string | undefined} className="font-medium" />
          </div>

          <div>
            <Label className="flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300" htmlFor="endDate">
              {isAr ? "تاريخ الانتهاء *" : "End Date *"}
            </Label>
            <div className="relative">
              <Input
                id="endDate"
                type="date"
                error={!!errors.endDate}
                {...register("endDate", {
                  required: isAr ? "تاريخ الانتهاء مطلوب" : "End date is required",
                  validate: (val) => {
                    if (!val) return isAr ? "تاريخ الانتهاء مطلوب" : "End date is required";
                    const start = watch("startDate");
                    if (!start) return true;
                    return new Date(start) <= new Date(val) || (isAr ? "يجب أن يكون تاريخ الانتهاء بعد أو يساوي تاريخ البدء" : "End must be after or equal to start");
                  },
                  deps: ["startDate"]
                })}
                className={`bg-white dark:bg-neutral-800/60 ps-10 h-11 text-xs sm:text-sm rounded-lg ${errors.endDate
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-gray-200 dark:border-neutral-700"
                  }`}
                min={startDateVal || undefined}
              />
              <Calendar className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <FieldError message={errors.endDate?.message as string | undefined} className="font-medium" />
          </div>
        </div>

        <div>
          <Label className="flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {isAr ? "الحالة" : "Status"}
          </Label>
          <Select
            value={status}
            onValueChange={(val) => setValue("status", val, { shouldDirty: true })}
          >
            <SelectTrigger className="bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg">
              <SelectValue placeholder={isAr ? "مسودّة" : "Draft"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">{isAr ? "مسودّة" : "Draft"}</SelectItem>
              <SelectItem value="active">{isAr ? "نشط" : "Active"}</SelectItem>
              <SelectItem value="paused">{isAr ? "موقوف مؤقتاً" : "Paused"}</SelectItem>
              <SelectItem value="ended">{isAr ? "منتهي" : "Ended"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
