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
import { Loader2 } from "lucide-react";
import { useFeatures } from "@/hooks/use-dashboardAdminSubscriptions";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { BADGE_FIELD_MAP, BadgeFormValues, getBadgeSchema } from "./schemas";

const APPLIES_TO_VALUES = ["developer", "agent", "property"] as const;

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  badgeData?: any;
}

export default function UpdateBadgeModal({ open, onClose, onSuccess, badgeData }: Props) {
  const { updateBadgeMutation } = useFeatures();
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
  } = useForm<BadgeFormValues>({
    resolver: zodResolver(getBadgeSchema(t)),
    defaultValues: {
      name: "",
      applies_to: "developer",
      monthly_price_credits: 0,
      max_entities: 1,
      priority_boost: 0,
      is_active: true,
      has_placement: false,
      placement_platform: "web",
      placement_location: "",
      placement_format: "icon",
    },
  });

  const hasPlacement = watch("has_placement");

  useEffect(() => {
    if (open && badgeData) {
      const hasPlac = !!badgeData.placement;
      reset({
        name: badgeData.name || "",
        applies_to: APPLIES_TO_VALUES.find((value) => value === String(badgeData.applies_to ?? "").toLowerCase()) ?? "developer",
        monthly_price_credits: Number(badgeData.monthly_price_credits || badgeData.price_credits) || 0,
        max_entities: Number(badgeData.max_entities) || 1,
        priority_boost: Number(badgeData.priority_boost) || 0,
        is_active: badgeData.is_active !== undefined ? !!badgeData.is_active : true,
        has_placement: hasPlac,
        placement_platform: (hasPlac && badgeData.placement.platform) || "web",
        placement_location: (hasPlac && badgeData.placement.location) || "",
        placement_format: (hasPlac && badgeData.placement.format) || "icon",
      });
    }
  }, [open, badgeData, reset]);

  const submitHandler = async (data: BadgeFormValues) => {
    try {
      const payload: any = {
        name: data.name.trim(),
        applies_to: data.applies_to,
        monthly_price_credits: data.monthly_price_credits,
        max_entities: data.max_entities,
        priority_boost: data.priority_boost,
        is_active: data.is_active,
      };

      if (data.has_placement) {
        payload.placement = {
          platform: data.placement_platform,
          location: data.placement_location.trim(),
          format: data.placement_format,
        };
      }

      const id = badgeData.id || badgeData.badge_id;
      await updateBadgeMutation.mutateAsync({ id, data: payload });

      toast.success(t("subscriptions.badgeModal.updateSuccess"), {
        description: t("subscriptions.badgeModal.updateSuccessDesc", { name: data.name }),
      });

      reset();
      onSuccess?.();
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: BADGE_FIELD_MAP,
        fallbackMessage: t("subscriptions.badgeModal.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const handleClose = () => {
    if (!updateBadgeMutation.isPending) {
      reset();
      onClose();
    }
  };

  const isLoading = updateBadgeMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-lg font-semibold">
            {t("subscriptions.badgeModal.updateTitle")}
          </DialogTitle>
        </DialogHeader>

        <form noValidate onSubmit={handleSubmit(submitHandler)} className="space-y-6 mt-4">
          <FormErrorAlert message={errors.root?.server?.message} />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("common.name")} *</Label>
              <Input
                placeholder={t("subscriptions.badgeModal.namePlaceholder")}
                disabled={isLoading}
                error={!!errors.name}
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              <FieldError message={errors.name?.message} />
            </div>

            <div className="space-y-2">
              <Label>{t("subscriptions.badgeModal.appliesTo")} *</Label>
              <Controller
                name="applies_to"
                control={control}
                render={({ field }) => (
                  <Select
                    disabled={isLoading}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger ref={field.ref} error={!!errors.applies_to} aria-invalid={!!errors.applies_to}>
                      <SelectValue placeholder={t("subscriptions.common.selectType")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">{t("subscriptions.badgeModal.developer")}</SelectItem>
                      <SelectItem value="agent">{t("subscriptions.badgeModal.agent")}</SelectItem>
                      <SelectItem value="property">{t("subscriptions.badgeModal.property")}</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.applies_to?.message} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>{t("subscriptions.badgeModal.monthlyPrice")} *</Label>
              <Input
                type="number"
                min="0"
                dir="ltr"
                disabled={isLoading}
                error={!!errors.monthly_price_credits}
                aria-invalid={!!errors.monthly_price_credits}
                {...register("monthly_price_credits", { valueAsNumber: true })}
              />
              <FieldError message={errors.monthly_price_credits?.message} />
            </div>

            <div className="space-y-2">
              <Label>{t("subscriptions.badgeModal.maxEntities")} *</Label>
              <Input
                type="number"
                min="1"
                step="1"
                dir="ltr"
                disabled={isLoading}
                error={!!errors.max_entities}
                aria-invalid={!!errors.max_entities}
                {...register("max_entities", { valueAsNumber: true })}
              />
              <FieldError message={errors.max_entities?.message} />
            </div>

            <div className="space-y-2">
              <Label>{t("subscriptions.badgeModal.priorityBoost")}</Label>
              <Input
                type="number"
                min="0"
                step="1"
                dir="ltr"
                disabled={isLoading}
                error={!!errors.priority_boost}
                aria-invalid={!!errors.priority_boost}
                {...register("priority_boost", { valueAsNumber: true })}
              />
              <FieldError message={errors.priority_boost?.message} />
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
            <span className="text-sm font-medium">{t("subscriptions.badgeModal.activeConfiguration")}</span>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <Controller
                name="has_placement"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                )}
              />
              <span className="text-sm font-medium">{t("subscriptions.badgeModal.includePlacement")}</span>
            </div>

            {hasPlacement && (
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="space-y-2">
                  <Label>{t("subscriptions.badgeModal.platform")}</Label>
                  <Controller
                    name="placement_platform"
                    control={control}
                    render={({ field }) => (
                      <Select
                        disabled={isLoading}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger ref={field.ref} className="bg-white" error={!!errors.placement_platform} aria-invalid={!!errors.placement_platform}>
                          <SelectValue placeholder={t("subscriptions.badgeModal.platform")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">{t("subscriptions.badgeModal.web")}</SelectItem>
                          <SelectItem value="mobile">{t("subscriptions.badgeModal.mobile")}</SelectItem>
                          <SelectItem value="both">{t("subscriptions.badgeModal.both")}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError message={errors.placement_platform?.message} />
                </div>

                <div className="space-y-2">
                  <Label>{t("subscriptions.badgeModal.location")} *</Label>
                  <Input
                    placeholder={t("subscriptions.badgeModal.locationPlaceholder")}
                    className="bg-white"
                    disabled={isLoading}
                    error={!!errors.placement_location}
                    aria-invalid={!!errors.placement_location}
                    {...register("placement_location")}
                  />
                  <FieldError message={errors.placement_location?.message} />
                </div>

                <div className="space-y-2">
                  <Label>{t("subscriptions.badgeModal.format")}</Label>
                  <Controller
                    name="placement_format"
                    control={control}
                    render={({ field }) => (
                      <Select
                        disabled={isLoading}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger ref={field.ref} className="bg-white" error={!!errors.placement_format} aria-invalid={!!errors.placement_format}>
                          <SelectValue placeholder={t("subscriptions.badgeModal.format")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="icon">{t("subscriptions.badgeModal.icon")}</SelectItem>
                          <SelectItem value="text">{t("subscriptions.badgeModal.text")}</SelectItem>
                          <SelectItem value="ribbon">{t("subscriptions.badgeModal.ribbon")}</SelectItem>
                          <SelectItem value="badge">{t("subscriptions.badgeModal.badge")}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError message={errors.placement_format?.message} />
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="gap-2 sm:justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 me-2 animate-spin" />
                  {t("common.updating")}
                </>
              ) : (
                t("subscriptions.badgeModal.updateFeature")
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
