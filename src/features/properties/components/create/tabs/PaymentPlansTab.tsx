"use client";

import { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus, Layers, Edit2, Trash2 } from "lucide-react";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import SeoSection from "../SeoSection";
import { PropertyPaymentPlan, getPaymentPeriodLabel } from "./payment-plans/payment-plans.types";
import { AddPropertyPaymentPlanModal } from "./payment-plans/AddPropertyPaymentPlanModal";
import { BulkAddPropertyPaymentPlansModal } from "./payment-plans/BulkAddPropertyPaymentPlansModal";

interface PaymentPlansTabProps {
  register: UseFormRegister<PropertiesInput>;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
  plans?: PropertyPaymentPlan[];
  setPlans?: React.Dispatch<React.SetStateAction<PropertyPaymentPlan[]>>;
  errors?: FieldErrors<PropertiesInput>;
}

export default function PaymentPlansTab({
  register,
  setValue,
  watch,
  plans: externalPlans,
  setPlans: externalSetPlans,
  errors,
}: PaymentPlansTabProps) {
  const { t } = useLanguage();

  const [internalPlans, setInternalPlans] = useState<PropertyPaymentPlan[]>([]);
  const plans = externalPlans ?? internalPlans;
  const setPlans = externalSetPlans ?? setInternalPlans;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PropertyPaymentPlan | null>(null);

  const handleSavePlan = (plan: PropertyPaymentPlan) => {
    let next: PropertyPaymentPlan[];
    if (editingPlan) {
      next = plans.map((p) => (p.id === plan.id ? plan : p));
      setEditingPlan(null);
    } else {
      next = [...plans, plan];
    }
    setPlans(next);
    setValue?.("payment_plans", next as any, { shouldDirty: true });
  };

  const handleAddBulkPlans = (newPlans: PropertyPaymentPlan[]) => {
    const next = [...plans, ...newPlans];
    setPlans(next);
    setValue?.("payment_plans", next as any, { shouldDirty: true });
  };

  const handleEditPlan = (plan: PropertyPaymentPlan) => {
    setEditingPlan(plan);
    setIsAddModalOpen(true);
  };

  const handleDeletePlan = (id: string) => {
    const next = plans.filter((p) => p.id !== id);
    setPlans(next);
    setValue?.("payment_plans", next as any, { shouldDirty: true });
  };

  const handleOpenAddModal = () => {
    setEditingPlan(null);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-3.5">
      {/* ── Payment Plans Card ─────────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-4 sm:p-5 space-y-3.5 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.paymentPlans.title")}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
            {t("properties.create.paymentPlans.subtitle")}
          </p>
        </div>

        {/* Empty state or Plans list */}
        {plans.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500">
            {t("properties.create.paymentPlans.noPlans")}
          </div>
        ) : (
          <div className="space-y-2">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {plan.name}
                    </h4>
                    <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-medium">
                      {t("properties.create.paymentPlans.downBadge", { percent: plan.down_payment_percentage })}
                    </span>
                  </div>
                  {plan.description && (
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {plan.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-400 pt-0.5">
                    <span>{t("properties.create.paymentPlans.installmentsCountLabel", { count: plan.installments_count })}</span>
                    <span>•</span>
                    <span>{t("properties.create.paymentPlans.periodLabel", { period: getPaymentPeriodLabel(plan.period, t) })}</span>
                    {plan.handover_percentage !== undefined && plan.handover_percentage > 0 && (
                      <>
                        <span>•</span>
                        <span>{t("properties.create.paymentPlans.handoverLabel", { percent: plan.handover_percentage })}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditPlan(plan)}
                    className="h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeletePlan(plan.id)}
                    className="h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action buttons: + Add plan, Bulk add */}
        <div className="flex items-center gap-2 pt-0.5">
          <Button
            type="button"
            variant="outline"
            onClick={handleOpenAddModal}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium"
          >
            <Plus className="h-3.5 w-3.5" />
            {t("properties.create.paymentPlans.addPlan")}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setIsBulkModalOpen(true)}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium"
          >
            <Layers className="h-3.5 w-3.5" />
            {t("properties.create.paymentPlans.bulkAdd")}
          </Button>
        </div>
      </div>

      {/* ── Search Engine Optimization (SEO) Section ───────────────────── */}
      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />

      {/* ── Modals ──────────────────────────────────────────────────────── */}
      <AddPropertyPaymentPlanModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingPlan(null);
        }}
        onSave={handleSavePlan}
        initialData={editingPlan}
      />

      <BulkAddPropertyPaymentPlansModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        onAddBulk={handleAddBulkPlans}
      />
    </div>
  );
}
