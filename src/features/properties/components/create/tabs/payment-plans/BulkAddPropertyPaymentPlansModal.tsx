"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Layers, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fetchProjectPaymentDetails } from "@/data/api-client";
import { paymentPlanQueryKey, usePaymentPlansList } from "@/hooks/use-payment-plan-actions";
import { draftFromPlanItems, toPaymentPlanView, type PaymentPlanView } from "@/lib/payment-plans";
import {
  PRESET_PLAN_TEMPLATES,
  PropertyPaymentPlan,
  PresetPlanTemplate,
  getPaymentPeriodLabel,
} from "./payment-plans.types";

interface BulkAddPropertyPaymentPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBulk: (plans: PropertyPaymentPlan[]) => void;
  developerId?: number;
}

const API_PREFIX = "api_";

export function BulkAddPropertyPaymentPlansModal({
  isOpen,
  onClose,
  onAddBulk,
  developerId,
}: BulkAddPropertyPaymentPlansModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const [isAdding, setIsAdding] = useState(false);

  const { data: apiPlans = [], isLoading: apiPlansLoading } = usePaymentPlansList(isOpen);
  const existingPlans = apiPlans.filter(
    (p) => p.paymentPlanId && p.status !== "inactive" && (!developerId || p.developerId === developerId)
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "plan_50_50",
    "plan_60_40",
  ]);

  const allPresetsSelected = PRESET_PLAN_TEMPLATES.every((p) => selectedIds.includes(p.id));

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const existing = selectedIds.filter((id) => id.startsWith(API_PREFIX));
    setSelectedIds(allPresetsSelected ? existing : [...existing, ...PRESET_PLAN_TEMPLATES.map((p) => p.id)]);
  };

  const copyExistingPlan = async (plan: PaymentPlanView, idx: number): Promise<PropertyPaymentPlan> => {
    let items = plan.items;
    if (token && plan.paymentPlanId) {
      try {
        const raw = await queryClient.fetchQuery({
          queryKey: paymentPlanQueryKey(plan.paymentPlanId),
          queryFn: () => fetchProjectPaymentDetails(plan.paymentPlanId!, token),
        });
        items = toPaymentPlanView(raw)?.items ?? items;
      } catch {
      }
    }
    return {
      id: `bulk_api_${Date.now()}_${idx}`,
      name: plan.name,
      description: plan.description || undefined,
      payment_plan_type: plan.paymentPlanType,
      total_cost: plan.totalCost != null && plan.totalCost !== "" ? Number(plan.totalCost) : undefined,
      status: plan.status,
      period_by_years: plan.periodByYears ?? undefined,
      ...(items.length > 0
        ? draftFromPlanItems(items)
        : { down_payment_percentage: 0, installments_count: 1, period: "Monthly", handover_percentage: 0 }),
    };
  };

  const handleConfirm = async () => {
    const selectedTemplates = PRESET_PLAN_TEMPLATES.filter((p) =>
      selectedIds.includes(p.id)
    );

    const newPlans: PropertyPaymentPlan[] = selectedTemplates.map((p, idx) => ({
      id: `bulk_${Date.now()}_${idx}`,
      name: p.name,
      description: p.description,
      down_payment_percentage: p.down_payment_percentage,
      installments_count: p.installments_count,
      period: p.period,
      handover_percentage: p.handover_percentage,
    }));

    const selectedExisting = existingPlans.filter((p) => selectedIds.includes(`${API_PREFIX}${p.paymentPlanId}`));
    setIsAdding(true);
    try {
      const copied = await Promise.all(selectedExisting.map(copyExistingPlan));
      onAddBulk([...newPlans, ...copied]);
      onClose();
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!isAdding) onClose();
      }}
      title={
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          <span>{t("properties.create.paymentPlans.bulkAddTitle")}</span>
        </div>
      }
      description={
        t("properties.create.paymentPlans.bulkAddSubtitle")
      }
      size="xl"
    >
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-neutral-800">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            {t("properties.create.paymentPlans.availableTemplates")} ({PRESET_PLAN_TEMPLATES.length})
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleSelectAll}
            className="text-xs text-teal-600 hover:text-teal-700 h-6 px-1.5"
          >
            {allPresetsSelected
              ? t("common.deselectAll")
              : t("common.selectAll")}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pe-1">
          {PRESET_PLAN_TEMPLATES.map((template: PresetPlanTemplate) => {
            const isSelected = selectedIds.includes(template.id);
            return (
              <div
                key={template.id}
                onClick={() => toggleSelect(template.id)}
                className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs"
                    : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"
                }`}
              >
                <div className="pt-0.5">
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleSelect(template.id)}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {t(template.nameKey)}
                    </h4>
                    {isSelected && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                    {t(template.descriptionKey)}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300">
                    <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                      {t("properties.create.paymentPlans.templateDown", { percent: template.down_payment_percentage })}
                    </span>
                    <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                      {t("properties.create.paymentPlans.templateInstallments", {
                        count: template.installments_count,
                        period: getPaymentPeriodLabel(template.period, t),
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pb-1.5 border-b border-gray-100 dark:border-neutral-800">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            {t("paymentPlansView.existingPlans")} ({existingPlans.length})
          </span>
        </div>

        {apiPlansLoading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
          </div>
        ) : existingPlans.length === 0 ? (
          <p className="py-3 text-center text-xs text-gray-400 dark:text-gray-500">{t("paymentPlansView.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[35vh] overflow-y-auto pe-1">
            {existingPlans.map((plan) => {
              const selectId = `${API_PREFIX}${plan.paymentPlanId}`;
              const isSelected = selectedIds.includes(selectId);
              return (
                <div
                  key={selectId}
                  onClick={() => toggleSelect(selectId)}
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs"
                      : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"
                  }`}
                >
                  <div className="pt-0.5">
                    <Checkbox checked={isSelected} onCheckedChange={() => toggleSelect(selectId)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {plan.name} <span className="text-[10px] font-normal text-gray-400">#{plan.paymentPlanId}</span>
                    </h4>
                    {plan.description && (
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{plan.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300">
                      {plan.paymentPlanType && (
                        <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">{plan.paymentPlanType}</span>
                      )}
                      {plan.totalCost != null && Number(plan.totalCost) > 0 && (
                        <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                          {t("paymentPlansView.totalCost")}: {Number(plan.totalCost).toLocaleString()}
                        </span>
                      )}
                      {plan.periodByYears ? (
                        <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                          {t("paymentPlansView.periodYears", { years: plan.periodByYears })}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800">
          <Button type="button" variant="outline" size="sm" onClick={onClose} disabled={isAdding} className="text-xs h-8">
            {t("common.cancel")}
          </Button>
          <Button
            type="button"
            size="sm"
            disabled={selectedIds.length === 0 || isAdding}
            onClick={handleConfirm}
            className="bg-teal-600 hover:bg-teal-700 text-white text-xs h-8 gap-1.5"
          >
            {isAdding && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            {t("properties.create.paymentPlans.addSelectedPlans")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
