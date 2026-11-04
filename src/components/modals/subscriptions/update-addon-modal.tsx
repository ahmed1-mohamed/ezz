"use client";

import { useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { Loader2, Info } from "lucide-react";
import { useAddons } from "@/hooks/use-dashboardAdminSubscriptions";
import { applyApiFormErrors } from "@/lib/form-utils";
import { cn } from "@/lib/utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { ADDON_FIELD_MAP, AddonFormValues, getAddonSchema } from "./schemas";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  addonData?: any;
}

export default function UpdateAddonModal({ open, onClose, onSuccess, addonData }: Props) {
  const { updateAddonMutation, addonTypesQuery } = useAddons({ addonsEnabled: false, addonTypesEnabled: open });
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setError,
    getValues,
    formState: { errors },
  } = useForm<AddonFormValues>({
    resolver: zodResolver(getAddonSchema(t)),
    defaultValues: {
      feature_id: "",
      name: "",
      code: "",
      amount: 0,
      price_cents: 0,
      is_active: true,
    },
  });

  const selectedFeatureId = watch("feature_id");
  const addonTypesData = (addonTypesQuery.data as any)?.data;
  const addonTypes = Array.isArray(addonTypesData) ? addonTypesData : (addonTypesData?.data || []);

  const selectedFeature = addonTypes.find((type: any) => String(type.feature_id) === String(selectedFeatureId));

  useEffect(() => {
    if (open && addonData) {
      reset({
        feature_id: String(addonData.feature_id || ""),
        name: addonData.name || "",
        code: addonData.code || "",
        amount: Number(addonData.amount) || 0,
        price_cents: addonData.price_cents ? Number(addonData.price_cents) / 100 : 0,
        is_active: addonData.is_active !== undefined ? !!addonData.is_active : true,
      });
    }
  }, [open, addonData, reset]);

  const submitHandler = async (data: AddonFormValues) => {
    try {
      const payload = {
        name: data.name.trim(),
        code: data.code.trim(),
        amount: data.amount,
        price_cents: Math.round(data.price_cents * 100),
        feature_id: Number(data.feature_id),
        is_active: data.is_active,
        currency: addonData?.currency || "AED"
      };

      const id = addonData?.id || addonData?.addon_id;
      await updateAddonMutation.mutateAsync({ id, data: payload });

      toast.success(t("subscriptions.addonModal.updateSuccess"), {
        description: t("subscriptions.addonModal.updateSuccessDesc", { name: data.name }),
      });

      reset();
      onSuccess?.();
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: ADDON_FIELD_MAP,
        fallbackMessage: t("subscriptions.addonModal.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const handleClose = () => {
    if (!updateAddonMutation.isPending) {
      reset();
      onClose();
    }
  };

  const isLoading = updateAddonMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {t("subscriptions.addonModal.updateTitle")}
          </DialogTitle>
        </DialogHeader>

        <form noValidate onSubmit={handleSubmit(submitHandler)} className="space-y-6 mt-4">
          <FormErrorAlert message={errors.root?.server?.message} />

          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-800">{t("subscriptions.addonModal.type")} <span className="text-red-500">*</span></Label>
            <Controller
              name="feature_id"
              control={control}
              render={({ field }) => (
                <Select
                  disabled={isLoading || addonTypesQuery.isLoading}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    ref={field.ref}
                    className={cn("bg-gray-50 h-11", !errors.feature_id && "border-gray-200")}
                    error={!!errors.feature_id}
                    aria-invalid={!!errors.feature_id}
                  >
                    <SelectValue placeholder={t("subscriptions.common.selectType")} />
                  </SelectTrigger>
                  <SelectContent>
                    {addonTypes.map((type: any) => (
                      <SelectItem key={type.feature_id} value={String(type.feature_id)}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.feature_id?.message} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-800">{t("subscriptions.addonModal.name")} <span className="text-red-500">*</span></Label>
              <Input
                placeholder={t("subscriptions.addonModal.namePlaceholder")}
                className={cn("bg-gray-50 h-11", !errors.name && "border-gray-200")}
                disabled={isLoading}
                error={!!errors.name}
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              <FieldError message={errors.name?.message} />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-800">{t("subscriptions.addonModal.code")} <span className="text-red-500">*</span></Label>
              <Input
                placeholder={t("subscriptions.addonModal.codePlaceholder")}
                className={cn("bg-gray-50 h-11", !errors.code && "border-gray-200")}
                dir="ltr"
                disabled={isLoading}
                error={!!errors.code}
                aria-invalid={!!errors.code}
                {...register("code")}
              />
              <FieldError message={errors.code?.message} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-800">
                {selectedFeature?.unit || t("subscriptions.addonModal.tokens")} <span className="text-red-500">*</span>
              </Label>
              <Input
                type="number"
                min="0"
                dir="ltr"
                className={cn("bg-gray-50 h-11", !errors.amount && "border-gray-200")}
                disabled={isLoading}
                error={!!errors.amount}
                aria-invalid={!!errors.amount}
                {...register("amount", { valueAsNumber: true })}
              />
              <FieldError message={errors.amount?.message} />
              <p className="text-xs text-gray-500 mt-1">{t("subscriptions.addonModal.numberOf", { unit: selectedFeature?.unit || t("subscriptions.addonModal.tokensLower") })}</p>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-800">{t("subscriptions.addonModal.priceLabel", { currency: addonData?.currency || "AED" })} <span className="text-red-500">*</span></Label>
              <Input
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                dir="ltr"
                className={cn("bg-gray-50 h-11", !errors.price_cents && "border-gray-200")}
                disabled={isLoading}
                error={!!errors.price_cents}
                aria-invalid={!!errors.price_cents}
                {...register("price_cents", { valueAsNumber: true })}
              />
              <FieldError message={errors.price_cents?.message} />
              <p className="text-xs text-gray-500 mt-1">{t("subscriptions.addonModal.priceHint")}</p>
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
                  className="data-[state=checked]:bg-purple-500"
                />
              )}
            />
            <span className="text-sm font-medium text-gray-700">{t("common.active")}</span>
          </div>

          {selectedFeature && (
            <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4 mt-6">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{selectedFeature.name}:</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    • {selectedFeature.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2 sm:justify-end pt-6 border-t border-gray-100">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
              className="h-11 px-6 rounded-lg font-medium"
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white h-11 px-6 rounded-lg font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 me-2 animate-spin" />
                  {t("common.updating")}
                </>
              ) : (
                t("subscriptions.common.updatePackage")
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
