"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus, Layers, Edit2, Trash2 } from "lucide-react";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { PropertyPaymentPlan } from "@/features/properties/components/create/tabs/payment-plans/payment-plans.types";
import { AddPropertyPaymentPlanModal } from "@/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal";
import { BulkAddPropertyPaymentPlansModal } from "@/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal";

interface ProjectPaymentPlansFormProps {
  form: UseFormReturn<CreateProjectInput>;
  plans?: PropertyPaymentPlan[];
  setPlans?: React.Dispatch<React.SetStateAction<PropertyPaymentPlan[]>>;
}

export function ProjectPaymentPlansForm({
  form,
  plans: externalPlans,
  setPlans: externalSetPlans,
}: ProjectPaymentPlansFormProps) {
  const { register, watch, setValue } = form;
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const [internalPlans, setInternalPlans] = useState<PropertyPaymentPlan[]>([]);
  const plans = externalPlans ?? internalPlans;
  const setPlans = externalSetPlans ?? setInternalPlans;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PropertyPaymentPlan | null>(null);

  const handleSavePlan = (plan: PropertyPaymentPlan) => {
    if (editingPlan) {
      setPlans((prev) => prev.map((p) => (p.id === plan.id ? plan : p)));
      setEditingPlan(null);
    } else {
      setPlans((prev) => [...prev, plan]);
    }
  };

  const handleAddBulkPlans = (newPlans: PropertyPaymentPlan[]) => {
    setPlans((prev) => [...prev, ...newPlans]);
  };

  const handleEditPlan = (plan: PropertyPaymentPlan) => {
    setEditingPlan(plan);
    setIsAddModalOpen(true);
  };

  const handleDeletePlan = (id: string) => {
    setPlans((prev) => prev.filter((p) => p.id !== id));
  };

  const handleOpenAddModal = () => {
    setEditingPlan(null);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "خطط السداد" : (t("properties.create.paymentPlans.title"))}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
            {isAr
              ? "خطط السداد اختيارية وتظهر في صفحة المشروع. أضف خطة أو أكثر: الاسم، الوصف، الدفعة الأولى، عدد الأقساط ومدتها."
              : (t("properties.create.paymentPlans.subtitle"))}
          </p>
        </div>

        {plans.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500">
            {isAr ? "لا توجد خطط سداد بعد." : (t("properties.create.paymentPlans.noPlans"))}
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
                      {t("projects.create.paymentPlans.downPayment", { percent: plan.down_payment_percentage })}
                    </span>
                  </div>
                  {plan.description && (
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {plan.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-400 pt-0.5">
                    <span>{t("projects.create.paymentPlans.installments", { count: plan.installments_count })}</span>
                    <span>•</span>
                    <span>{t("projects.create.paymentPlans.period", { period: plan.period })}</span>
                    {plan.handover_percentage !== undefined && plan.handover_percentage > 0 && (
                      <>
                        <span>•</span>
                        <span>{t("projects.create.paymentPlans.handover", { percent: plan.handover_percentage })}</span>
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
                    className="h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeletePlan(plan.id)}
                    className="h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 pt-0.5">
          <Button
            type="button"
            variant="outline"
            onClick={handleOpenAddModal}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs"
          >
            <Plus className="h-3.5 w-3.5" />
            {isAr ? "إضافة خطة" : (t("properties.create.paymentPlans.addPlan"))}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setIsBulkModalOpen(true)}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs"
          >
            <Layers className="h-3.5 w-3.5" />
            {isAr ? "إضافة مجمعة" : (t("properties.create.paymentPlans.bulkAdd"))}
          </Button>
        </div>
      </div>

      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="my-property"
        compact={true}
      />

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
        developerId={Number(watch("developer_id")) || undefined}
      />
    </div>
  );
}
