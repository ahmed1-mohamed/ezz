"use client";

import React from "react";
import { Target } from "lucide-react";
import { RepTargetRow } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface TargetsCommissionTableProps {
  month: string;
  defaultRow: RepTargetRow | null;
  repRows: RepTargetRow[];
  totalTarget: number;
  totalAchieved: number;
  totalCommission: number;
  isLoading?: boolean;
  onUpdateDefaultTarget: (val: number | "") => void;
  onUpdateDefaultCommRate: (val: number | "") => void;
  onUpdateRepTarget: (repId: string | number, val: number | "") => void;
  onUpdateRepCommRate: (repId: string | number, val: number | "") => void;
}

export function TargetsCommissionTable({
  month,
  defaultRow,
  repRows,
  totalTarget,
  totalAchieved,
  totalCommission,
  isLoading,
  onUpdateDefaultTarget,
  onUpdateDefaultCommRate,
  onUpdateRepTarget,
  onUpdateRepCommRate,
}: TargetsCommissionTableProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-6">
      {/* 1. Card Header */}
      <div className="flex items-center gap-2">
        <Target className="h-4 w-4 text-teal-600 dark:text-teal-400" />
        <span className="font-semibold text-sm text-gray-900 dark:text-white">
          {isRTL
            ? `الأهداف والعمولات لشهر ${month}`
            : `Targets & commission for ${month}`}
        </span>
      </div>

      {/* 2. Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-neutral-800 pb-2">
              <th className={`pb-3 font-semibold ${isRTL ? "text-right" : "text-left"}`}>
                {isRTL ? "المندوب" : "REP"}
              </th>
              <th className="pb-3 text-center font-semibold w-32">
                {isRTL ? "الهدف" : "TARGET"}
              </th>
              <th className="pb-3 text-center font-semibold w-28">
                {isRTL ? "نسبة العمولة %" : "COMM. %"}
              </th>
              <th className="pb-3 text-center font-semibold w-28">
                {isRTL ? "المحقق" : "ACHIEVED"}
              </th>
              <th className="pb-3 text-center font-semibold w-20">
                %
              </th>
              <th className="pb-3 text-end font-semibold w-28">
                {isRTL ? "المكتسب" : "EARNED"}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-neutral-800/80">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="py-8 text-center">
                  <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-48 mx-auto animate-pulse" />
                </td>
              </tr>
            ) : (
              <>
                {/* Default Row */}
                {defaultRow && (
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/40 transition-colors">
                    <td className="py-4">
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white block">
                          {defaultRow.name}
                        </span>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 block mt-0.5">
                          {defaultRow.subtitle}
                        </span>
                      </div>
                    </td>

                    {/* Target Input */}
                    <td className="py-4 text-center">
                      <input
                        type="number"
                        min="0"
                        value={defaultRow.target}
                        onChange={(e) =>
                          onUpdateDefaultTarget(
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                        className="h-8.5 w-28 text-center text-xs bg-white dark:bg-neutral-900 border border-teal-600 dark:border-teal-500 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600 text-gray-900 dark:text-white shadow-2xs mx-auto"
                      />
                    </td>

                    {/* Comm % Input */}
                    <td className="py-4 text-center">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={defaultRow.comm_rate}
                        onChange={(e) =>
                          onUpdateDefaultCommRate(
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                        className="h-8.5 w-24 text-center text-xs bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600 text-gray-900 dark:text-white shadow-2xs mx-auto"
                      />
                    </td>

                    {/* Achieved */}
                    <td className="py-4 text-center text-xs text-gray-400 dark:text-gray-500">
                      —
                    </td>

                    {/* % */}
                    <td className="py-4 text-center text-xs text-gray-400 dark:text-gray-500">
                      —
                    </td>

                    {/* Earned */}
                    <td className="py-4 text-end text-xs text-teal-600 dark:text-teal-400 font-medium">
                      —
                    </td>
                  </tr>
                )}

                {/* Individual Reps */}
                {repRows.map((rep) => (
                  <tr
                    key={rep.rep_id}
                    className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/40 transition-colors"
                  >
                    <td className="py-4">
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white block">
                          {rep.name}
                        </span>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 block mt-0.5">
                          {rep.role}
                        </span>
                      </div>
                    </td>

                    {/* Target Input */}
                    <td className="py-4 text-center">
                      <input
                        type="number"
                        min="0"
                        value={rep.target}
                        onChange={(e) =>
                          onUpdateRepTarget(
                            rep.rep_id!,
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                        className="h-8.5 w-28 text-center text-xs bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600 text-gray-900 dark:text-white shadow-2xs mx-auto"
                      />
                    </td>

                    {/* Comm % Input */}
                    <td className="py-4 text-center">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={rep.comm_rate}
                        onChange={(e) =>
                          onUpdateRepCommRate(
                            rep.rep_id!,
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                        className="h-8.5 w-24 text-center text-xs bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600 text-gray-900 dark:text-white shadow-2xs mx-auto"
                      />
                    </td>

                    {/* Achieved */}
                    <td className="py-4 text-center text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {rep.achieved.toLocaleString()} {rep.currency || "EGP"}
                    </td>

                    {/* % */}
                    <td className="py-4 text-center text-xs text-gray-400 dark:text-gray-500">
                      {rep.percentage != null ? `${rep.percentage}%` : "—"}
                    </td>

                    {/* Earned */}
                    <td className="py-4 text-end text-xs font-bold text-teal-600 dark:text-teal-400">
                      {(rep.earned || 0).toLocaleString()} {rep.currency || "EGP"}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* 3. Footer Summary */}
      <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 space-y-1.5">
        <div className="flex items-center gap-6 text-xs text-gray-600 dark:text-gray-300 font-medium flex-wrap">
          <div>
            <span>{isRTL ? "إجمالي الأهداف: " : "Total target: "}</span>
            <span className="font-bold text-gray-900 dark:text-white">
              {totalTarget.toLocaleString()}
            </span>
          </div>

          <div>
            <span>{isRTL ? "إجمالي المحقق: " : "Total achieved: "}</span>
            <span className="font-bold text-gray-900 dark:text-white">
              {totalAchieved.toLocaleString()}
            </span>
          </div>

          <div>
            <span>{isRTL ? "إجمالي العمولات: " : "Total commission: "}</span>
            <span className="font-bold text-teal-600 dark:text-teal-400">
              {totalCommission.toLocaleString()}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
          {isRTL
            ? "المحقق = قيمة العقود (النشطة / الموقعة / المكتملة) التي أنشأها المندوب هذا الشهر. العمولة = المحقق × نسبة العمولة."
            : "Achieved = value of contracts (active/signed/completed) the rep created this month. Commission = achieved × rate."}
        </p>
      </div>
    </div>
  );
}
