"use client";

import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { AlertCircle, Loader2 } from "lucide-react";
import { useDeveloperPackages } from "@/hooks/use-dashboardAdminSubscriptions";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DEVELOPER_PACKAGE_FIELD_MAP,
  DeveloperPackageFormValues,
  getDeveloperPackageSchema,
} from "./schemas";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddDeveloperPackageModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const { createPackageMutation } = useDeveloperPackages();
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm<DeveloperPackageFormValues>({
    resolver: zodResolver(getDeveloperPackageSchema(t)),
    defaultValues: {
      code: "",
      name: "",
      price_dollars: 0,
      credits: 1,
      is_active: true,
    },
  });

  const submitHandler = async (data: DeveloperPackageFormValues) => {
    try {
      const payload = {
        code: data.code.trim(),
        name: data.name.trim(),
        price_cents: Math.round(data.price_dollars * 100),
        credits: data.credits,
        is_active: data.is_active,
        currency: "AED",
      };

      await createPackageMutation.mutateAsync(payload);

      toast.success(t("subscriptions.packageModal.createSuccess"), {
        description: t("subscriptions.packageModal.createSuccessDesc", { name: data.name }),
      });

      reset();
      onSuccess?.();
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: DEVELOPER_PACKAGE_FIELD_MAP,
        fallbackMessage: t("subscriptions.packageModal.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const handleClose = () => {
    if (!createPackageMutation.isPending) {
      reset();
      onClose();
    }
  };

  const isLoading = createPackageMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] rounded-2xl">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-lg font-semibold">
            {t("subscriptions.actions.addDeveloperPackage")}
          </DialogTitle>
        </DialogHeader>

        <form noValidate onSubmit={handleSubmit(submitHandler)} className="space-y-5 mt-2">
          <FormErrorAlert message={errors.root?.server?.message} />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("subscriptions.packageModal.code")} *</Label>
              <Input
                placeholder={t("subscriptions.packageModal.codePlaceholder")}
                dir="ltr"
                disabled={isLoading}
                error={!!errors.code}
                aria-invalid={!!errors.code}
                {...register("code")}
              />
              <FieldError message={errors.code?.message} />
            </div>

            <div className="space-y-2">
              <Label>{t("subscriptions.packageModal.name")} *</Label>
              <Input
                placeholder={t("subscriptions.packageModal.namePlaceholder")}
                disabled={isLoading}
                error={!!errors.name}
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              <FieldError message={errors.name?.message} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("subscriptions.addonModal.priceLabel", { currency: "AED" })} *</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                inputMode="decimal"
                dir="ltr"
                placeholder="0.00"
                disabled={isLoading}
                error={!!errors.price_dollars}
                aria-invalid={!!errors.price_dollars}
                {...register("price_dollars", { valueAsNumber: true })}
              />
              <p className="text-xs text-muted-foreground">
                {t("subscriptions.packageModal.priceHint")}
              </p>
              <FieldError message={errors.price_dollars?.message} />
            </div>

            <div className="space-y-2">
              <Label>{t("subscriptions.common.credits")} *</Label>
              <Input
                type="number"
                min="1"
                step="1"
                dir="ltr"
                placeholder="1"
                disabled={isLoading}
                error={!!errors.credits}
                aria-invalid={!!errors.credits}
                {...register("credits", { valueAsNumber: true })}
              />
              <p className="text-xs text-muted-foreground">
                {t("subscriptions.packageModal.creditsHint")}
              </p>
              <FieldError message={errors.credits?.message} />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Controller
              name="is_active"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isLoading}
                />
              )}
            />
            <span className="text-sm font-medium">{t("common.active")}</span>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 space-y-1">
            <div className="flex gap-2 items-start">
              <AlertCircle className="w-4 h-4 mt-0.5" />
              <div className="space-y-1">
                <p>• {t("subscriptions.packageModal.pricePerCredit", { value: t("common.na") })}</p>
                <p>
                  • {t("subscriptions.packageModal.creditsUsageInfo")}
                </p>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:justify-end pt-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              {t("common.close")}
            </Button>
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 me-2 animate-spin" />
                  {t("subscriptions.addCustomerPlanModal.creating")}
                </>
              ) : (
                t("subscriptions.common.createPackage")
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
