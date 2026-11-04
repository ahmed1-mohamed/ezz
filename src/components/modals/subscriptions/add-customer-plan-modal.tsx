"use client";

import { useState } from "react";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AdminSubscriptionsService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  CUSTOMER_PLAN_DEFAULTS,
  CustomerPlanFormValues,
  getCustomerPlanSchema,
  isValidFeatureLimit,
} from "./schemas";

interface AddCustomerPlanModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddCustomerPlanModal({
  open,
  onClose,
  onSuccess,
}: AddCustomerPlanModalProps) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const [selectedFeatures, setSelectedFeatures] = useState<{ feature_id: number; feature_code: string; limit: number | null }[]>([]);
  const [limitErrors, setLimitErrors] = useState<Record<string, string>>({});
  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm<CustomerPlanFormValues>({
    resolver: zodResolver(getCustomerPlanSchema(t)),
    defaultValues: CUSTOMER_PLAN_DEFAULTS,
  });
  const { data: featuresQuery, isLoading: loadingFeatures } = useQuery({
    queryKey: ["dashboard", "subscriptionFeatures"],
    queryFn: () => AdminSubscriptionsService.getSubscriptionFeatures(),
    enabled: open,
  });
  const featuresResponse = featuresQuery;
  let availableFeatures: any[] = [];
  if (featuresResponse) {
    const body = (featuresResponse as any).data !== undefined ? (featuresResponse as any).data : featuresResponse;
    if (Array.isArray(body)) {
      availableFeatures = body;
    } else if (body && typeof body === "object") {
      if (Array.isArray(body.data)) {
        availableFeatures = body.data;
      } else if (body.data && Array.isArray(body.data.data)) {
        availableFeatures = body.data.data;
      } else {
        const topLevelArrays = Object.values(body).filter(Array.isArray);
        if (topLevelArrays.length > 0) {
          availableFeatures = topLevelArrays[0] as any[];
        }
      }
    }
  }
  const mutation = useMutation({
    mutationFn: (data: any) => AdminSubscriptionsService.createCustomerPlan(data),
    onSuccess: () => {
      toast.success(t("subscriptions.customerPlans.addSuccess"));
      queryClient.invalidateQueries({ queryKey: ["subscriptions", "customerPlans"] });
      if (onSuccess) {
        onSuccess();
      }
      resetAndClose();
    },
  });
  const resetAndClose = () => {
    reset();
    setSelectedFeatures([]);
    setLimitErrors({});
    onClose();
  };
  const handleClose = () => {
    if (mutation.isPending) return;
    resetAndClose();
  };
  const clearLimitError = (featureCode: string) => {
    setLimitErrors((prev) => {
      if (!prev[featureCode]) return prev;
      const next = { ...prev };
      delete next[featureCode];
      return next;
    });
  };
  const toggleFeature = (featureId: number, featureCode: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedFeatures([...selectedFeatures, { feature_id: featureId, feature_code: featureCode, limit: null }]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((f) => f.feature_code !== featureCode));
      clearLimitError(featureCode);
    }
  };
  const updateFeatureLimit = (featureCode: string, limitVal: string) => {
    setSelectedFeatures(
      selectedFeatures.map((f) =>
        f.feature_code === featureCode ? { ...f, limit: limitVal ? Number(limitVal) : null } : f
      )
    );
    clearLimitError(featureCode);
  };
  const validateFeatureLimits = () => {
    const nextErrors: Record<string, string> = {};
    selectedFeatures.forEach((f) => {
      if (!isValidFeatureLimit(f.limit)) {
        nextErrors[f.feature_code] = t("subscriptions.validation.limitInvalid");
      }
    });
    setLimitErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };
  const onSubmit = async (formData: CustomerPlanFormValues, event?: React.BaseSyntheticEvent) => {
    if (!validateFeatureLimits()) {
      scrollToFirstInvalidField(event?.target ?? null);
      return;
    }
    const featuresObj: Record<string, any> = {};
    selectedFeatures.forEach((f) => {
      featuresObj[f.feature_code] = f.limit !== null ? f.limit : -1;
    });
    const apiData = {
      code: formData.code,
      name: formData.name,
      description: formData.description || "",
      price: Number(formData.price),
      currency: formData.currency || "USD",
      interval: formData.interval,
      is_active: formData.is_active === "true" ? 1 : 0,
      sort_order: Number(formData.sort_order) || 1,
      features: featuresObj,
    };
    try {
      await mutation.mutateAsync(apiData);
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fallbackMessage: t("subscriptions.customerPlans.addFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };
  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      title={t("subscriptions.addCustomerPlanModal.title")}
      size="lg"
    >
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, () => validateFeatureLimits())}
        className="space-y-4 max-h-[75vh] overflow-y-auto px-1 pb-2"
      >
        <FormErrorAlert message={errors.root?.server?.message} />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.planCode")} <span className="text-red-500">*</span></Label>
            <Input
              placeholder={t("subscriptions.addCustomerPlanModal.planCodePlaceholder")}
              dir="ltr"
              error={!!errors.code}
              aria-invalid={!!errors.code}
              {...register("code")}
            />
            <FieldError message={errors.code?.message} />
          </div>
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.planName")} <span className="text-red-500">*</span></Label>
            <Input
              placeholder={t("subscriptions.addCustomerPlanModal.planNamePlaceholder")}
              error={!!errors.name}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            <FieldError message={errors.name?.message} />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label>{t("subscriptions.addCustomerPlanModal.description")}</Label>
          <Input
            placeholder={t("subscriptions.addCustomerPlanModal.descriptionPlaceholder")}
            error={!!errors.description}
            aria-invalid={!!errors.description}
            {...register("description")}
          />
          <FieldError message={errors.description?.message} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.price")} <span className="text-red-500">*</span></Label>
            <Input
              type="number"
              step="0.01"
              min="0"
              inputMode="decimal"
              dir="ltr"
              error={!!errors.price}
              aria-invalid={!!errors.price}
              {...register("price", { valueAsNumber: true })}
            />
            <FieldError message={errors.price?.message} />
          </div>
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.currency")} <span className="text-red-500">*</span></Label>
            <Input
              placeholder={t("subscriptions.addCustomerPlanModal.currencyPlaceholder")}
              maxLength={3}
              dir="ltr"
              error={!!errors.currency}
              aria-invalid={!!errors.currency}
              {...register("currency")}
            />
            <FieldError message={errors.currency?.message} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.interval")}</Label>
            <select
              {...register("interval")}
              aria-invalid={!!errors.interval || undefined}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="month">{t("subscriptions.addCustomerPlanModal.month")}</option>
              <option value="year">{t("subscriptions.addCustomerPlanModal.year")}</option>
            </select>
            <FieldError message={errors.interval?.message} />
          </div>
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.activeStatus")}</Label>
            <select
              {...register("is_active")}
              aria-invalid={!!errors.is_active || undefined}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="true">{t("subscriptions.addCustomerPlanModal.active")}</option>
              <option value="false">{t("subscriptions.addCustomerPlanModal.inactive")}</option>
            </select>
            <FieldError message={errors.is_active?.message} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>{t("subscriptions.addCustomerPlanModal.sortOrder")}</Label>
            <Input
              type="number"
              min="0"
              step="1"
              dir="ltr"
              error={!!errors.sort_order}
              aria-invalid={!!errors.sort_order}
              {...register("sort_order", { valueAsNumber: true })}
            />
            <FieldError message={errors.sort_order?.message} />
          </div>
        </div>
        <div className="space-y-3 mt-6 border-t pt-4">
          <Label className="text-base font-semibold">{t("subscriptions.addCustomerPlanModal.includedFeatures")}</Label>
          {loadingFeatures ? (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" /> {t("subscriptions.addCustomerPlanModal.loadingFeatures")}
            </div>
          ) : availableFeatures.length === 0 ? (
            <p className="text-sm text-gray-500 italic">{t("subscriptions.addCustomerPlanModal.noFeatures")}</p>
          ) : (
            <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100 max-h-60 overflow-y-auto">
              {availableFeatures.map((feature: any) => {
                const fId = feature.feature_id || feature.badge_id || feature.id;
                const fName = feature.feature_name || feature.name || feature.code;
                const fCode = feature.code || feature.badge_code || feature.feature_name || feature.name || fId.toString();
                const isSelected = selectedFeatures.some((f) => f.feature_code === fCode);
                const selectedData = selectedFeatures.find((f) => f.feature_code === fCode);
                return (
                  <div key={fId} className={`flex flex-col gap-2 p-3 rounded-lg border ${isSelected ? "border-teal-200 bg-teal-50/30" : "border-gray-200 bg-white"}`}>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="flex h-5 items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600 cursor-pointer"
                          checked={isSelected}
                          onChange={(e) => toggleFeature(fId, fCode, e.target.checked)}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-black">{fName}</span>
                        <span className="text-xs text-black">{feature.description || feature.applies_to}</span>
                      </div>
                    </label>
                    {isSelected && (
                      <div className="ms-7 ps-1">
                        <div className="flex items-center gap-2">
                          <Label className="text-xs">{t("subscriptions.addCustomerPlanModal.limit")}</Label>
                          <Input
                            type="number"
                            min="0"
                            step="1"
                            dir="ltr"
                            className="h-7 w-24 text-xs font-semibold text-black bg-white"
                            placeholder={t("subscriptions.addCustomerPlanModal.limitPlaceholder")}
                            value={selectedData?.limit ?? ""}
                            onChange={(e) => updateFeatureLimit(fCode, e.target.value)}
                            error={!!limitErrors[fCode]}
                            aria-invalid={!!limitErrors[fCode]}
                          />
                        </div>
                        <FieldError message={limitErrors[fCode]} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex gap-2 justify-end pt-4 sticky bottom-0 bg-white border-t mt-4 py-2">
          <Button type="button" variant="outline" onClick={handleClose} disabled={mutation.isPending}>
            {t("subscriptions.addCustomerPlanModal.cancel")}
          </Button>
          <Button type="submit" disabled={mutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white">
            {mutation.isPending && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {mutation.isPending ? t("subscriptions.addCustomerPlanModal.creating") : t("subscriptions.addCustomerPlanModal.createPlan")}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
