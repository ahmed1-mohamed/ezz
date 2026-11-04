"use client";

import React from "react";
import { Representative } from "../types";
import { RepresentativeCard } from "./RepresentativeCard";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";

interface RepresentativesListProps {
  representatives: Representative[];
  isLoading?: boolean;
}

export function RepresentativesList({
  representatives,
  isLoading,
}: RepresentativesListProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="space-y-3 pt-2">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
        {isRTL ? "ممثلو المبيعات" : "Representatives"}
      </h2>

      {isLoading ? (
        <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-4 animate-pulse">
          <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-48" />
          <div className="grid grid-cols-4 gap-4">
            <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded" />
            <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded" />
            <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded" />
            <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded" />
          </div>
        </div>
      ) : representatives.length === 0 ? (
        <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 text-center shadow-2xs">
          <EmptyState
            type="no_results"
            title={isRTL ? "لا يوجد ممثلو مبيعات" : "No representatives found"}
            message={
              isRTL
                ? "ابدأ بإضافة أعضاء لفريق المبيعات لمتابعة أدائهم هنا."
                : "Add sales team members to track their monthly performance here."
            }
          />
        </div>
      ) : (
        <div className="space-y-3">
          {representatives.map((rep) => (
            <RepresentativeCard key={rep.id} representative={rep} />
          ))}
        </div>
      )}
    </div>
  );
}
