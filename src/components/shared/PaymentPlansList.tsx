"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPaymentPlanItemTypeLabel, type PaymentPlanView } from "@/lib/payment-plans";

interface PaymentPlansListProps {
  plans: PaymentPlanView[];
  currency?: string;
  renderActions?: (plan: PaymentPlanView) => ReactNode;
}

export function PaymentPlansList({ plans, currency, renderActions }: PaymentPlansListProps) {
  const { t } = useLanguage();

  if (plans.length === 0) {
    return (
      <div className="text-center py-10 text-sm text-gray-500 dark:text-gray-400">
        {t("paymentPlansView.empty")}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {plans.map((plan) => {
        const totalPercentage = plan.items.reduce((sum, item) => sum + item.percentage, 0);
        return (
          <div
            key={plan.id}
            className="rounded-lg border border-gray-200 dark:border-neutral-800 p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 break-words">
                  {plan.name}
                </h4>
                {plan.description && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 break-words">
                    {plan.description}
                  </p>
                )}
              </div>
              {renderActions && <div className="flex shrink-0 gap-1">{renderActions(plan)}</div>}
            </div>

            {plan.totalCost !== null && plan.totalCost !== undefined && Number(plan.totalCost) > 0 && (
              <div className="mt-4 rounded-lg bg-gray-50 dark:bg-neutral-800/60 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {plan.totalCost} {currency}
                </p>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{t("paymentPlansView.totalCost")}</p>
              </div>
            )}

            {plan.items.length > 0 && (
              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t("paymentPlansView.schedule")}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t("paymentPlansView.total", { percentage: Number(totalPercentage.toFixed(2)) })}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800 flex">
                  {plan.items.map((item, index) => (
                    <div
                      key={item.id}
                      className={index % 2 === 0 ? "bg-teal-600" : "bg-teal-300 dark:bg-teal-700"}
                      style={{ width: `${Math.min(100, Math.max(0, item.percentage))}%` }}
                    />
                  ))}
                </div>
                <ul className="mt-3 divide-y divide-gray-100 dark:divide-neutral-800">
                  {plan.items.map((item) => (
                    <li key={item.id} className="flex items-center justify-between gap-3 py-2 text-sm">
                      <span className="text-gray-700 dark:text-gray-300">
                        {getPaymentPlanItemTypeLabel(item.type, t)}
                        {item.intervals > 1 && (
                          <span className="ms-2 text-xs text-gray-500 dark:text-gray-400">
                            {t("paymentPlansView.payments", { count: item.intervals })}
                          </span>
                        )}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{item.percentage}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
