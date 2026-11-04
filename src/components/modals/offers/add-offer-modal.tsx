"use client";

import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "@/components/ui/modal";
import { Button, Input } from "@/components/ui";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AdminOffersService } from "@/data/api-client";
import { DashboardAdminService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const isValidDate = (val: string) => DATE_PATTERN.test(val) && !isNaN(new Date(val).getTime());

const getOfferSchema = (t: (key: string, values?: Record<string, string | number>) => string) =>
  z
    .object({
      name: z
        .string()
        .trim()
        .min(1, t("offers.validation.titleRequired"))
        .max(128, t("offers.validation.titleMax")),
      entity_type: z.enum(["DEVELOPERS", "PROJECTS", "PROPERTIES"], {
        message: t("offers.validation.entityTypeRequired"),
      }),
      entity_id: z
        .string()
        .min(1, t("offers.validation.entityIdRequired"))
        .regex(/^\d+$/, t("offers.validation.entityIdRequired")),
      discount_type: z.enum(
        ["percentage", "fixed_amount", "special_deal", "join_offers", "discount_events"],
        { message: t("offers.validation.discountTypeRequired") },
      ),
      discount_pct: z
        .string()
        .trim()
        .optional()
        .refine((val) => !val || Number.isFinite(Number(val)), t("validation.numeric"))
        .refine(
          (val) => !val || (Number(val) >= 0 && Number(val) <= 100),
          t("offers.validation.discountPctInvalid"),
        ),
      description: z
        .string()
        .trim()
        .max(1000, t("validation.max_length", { max: 1000 }))
        .optional(),
      starts_at: z
        .string()
        .min(1, t("offers.validation.validFromRequired"))
        .refine(isValidDate, t("validation.date_invalid")),
      ends_at: z
        .string()
        .optional()
        .refine((val) => !val || isValidDate(val), t("validation.date_invalid")),
    })
    .refine((data) => !data.ends_at || data.ends_at >= data.starts_at, {
      message: t("offers.validation.endBeforeStart"),
      path: ["ends_at"],
      // Run even when other fields are invalid, but only once both dates are valid.
      when: (payload) =>
        !payload.issues.some((issue) => issue.path?.[0] === "starts_at" || issue.path?.[0] === "ends_at"),
    });

type OfferFormValues = z.infer<ReturnType<typeof getOfferSchema>>;

interface AddOfferModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddOfferModal({
  open,
  onClose,
  onSuccess,
}: AddOfferModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useForm<OfferFormValues>({
    resolver: zodResolver(getOfferSchema(t)),
    defaultValues: {
      name: "",
      entity_type: "PROPERTIES",
      entity_id: "",
      discount_type: "percentage",
      discount_pct: "",
      description: "",
      starts_at: "",
      ends_at: "",
    },
  });

  const selectedEntityType = watch("entity_type");

  const { data: entitiesData, isLoading: loadingEntities } = useQuery({
    queryKey: ["entitiesList", selectedEntityType],
    queryFn: async () => {
      if (selectedEntityType === "DEVELOPERS") return DashboardAdminService.getDevelopers();
      if (selectedEntityType === "PROJECTS") return DashboardAdminService.getProjects();
      if (selectedEntityType === "PROPERTIES") return DashboardAdminService.getProperties();
      return { data: [] };
    },
    enabled: open,
  });

  const availableEntities: any[] = Array.isArray((entitiesData as any)?.data)
    ? (entitiesData as any).data
    : Array.isArray(entitiesData)
      ? (entitiesData as any[])
      : [];

  const mutation = useMutation({
    mutationFn: (data: OfferFormValues) =>
      AdminOffersService.createOffer({
        name: data.name,
        entity_type: data.entity_type,
        entity_id: parseInt(data.entity_id),
        discount_type: data.discount_type,
        is_active: true,
        ...(data.description && { description: data.description }),
        ...(data.discount_pct && { discount_pct: parseFloat(data.discount_pct) }),
        ...(data.starts_at && { starts_at: data.starts_at }),
        ...(data.ends_at && { ends_at: data.ends_at }),
      }),
    onSuccess: () => {
      toast.success(t("offers.messages.createSuccess"));
      queryClient.invalidateQueries({ queryKey: ["offers"] });
      queryClient.invalidateQueries({ queryKey: ["offersTotals"] });
      if (onSuccess) onSuccess();
      reset();
      onClose();
    },
    onError: (error) => {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fallbackMessage: t("offers.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    reset();
    onClose();
  };

  const onSubmit = (formData: OfferFormValues) => {
    mutation.mutate(formData);
  };

  const getEntityLabel = (type: string) => {
    if (type === "PROPERTIES") return t("offers.types.property");
    if (type === "PROJECTS") return t("offers.types.project");
    if (type === "DEVELOPERS") return t("offers.types.developer");
    return type;
  };

  return (
    <Modal isOpen={open} onClose={handleClose} title={t("offers.addModal.title")} size="md">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-h-[75vh] overflow-y-auto px-1 pb-2"
      >
        <FormErrorAlert message={errors.root?.server?.message} />

        <div className="space-y-1.5">
          <Label htmlFor="offer-name">
            {t("offers.form.title")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="offer-name"
            placeholder={t("offers.form.titlePlaceholder")}
            {...register("name")}
            error={!!errors.name}
            aria-invalid={!!errors.name}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>
              {t("offers.form.linkTo")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="entity_type"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    // Ids belong to the previous entity list, so the selection no longer applies.
                    setValue("entity_id", "");
                  }}
                  value={field.value}
                >
                  <SelectTrigger ref={field.ref} className="bg-white" error={!!errors.entity_type} aria-invalid={!!errors.entity_type}>
                    <SelectValue placeholder={t("offers.form.selectType")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PROPERTIES">{t("offers.types.properties")}</SelectItem>
                    <SelectItem value="PROJECTS">{t("offers.types.projects")}</SelectItem>
                    <SelectItem value="DEVELOPERS">{t("offers.types.developers")}</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.entity_type?.message} />
          </div>

          <div className="space-y-1.5">
            <Label>
              {t("offers.form.selectEntity", { entityType: getEntityLabel(selectedEntityType) })}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="entity_id"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={loadingEntities}
                >
                  <SelectTrigger ref={field.ref} className="bg-white" error={!!errors.entity_id} aria-invalid={!!errors.entity_id}>
                    <SelectValue
                      placeholder={loadingEntities ? t("common.loading") : t("offers.form.selectTarget")}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableEntities.map((entity: any, index: number) => {
                      const entityId =
                        entity.id ||
                        entity.project_id ||
                        entity.developer_id ||
                        entity.property_id ||
                        String(index);
                      const entityName =
                        entity.name ||
                        entity.title ||
                        entity.developer_name ||
                        entity.project_name ||
                        entity.property_name ||
                        `Item ${entityId}`;
                      return (
                        <SelectItem key={entityId} value={entityId.toString()}>
                          {entityName}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.entity_id?.message} />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>
            {t("offers.form.discountType")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="discount_type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger ref={field.ref} className="bg-white" error={!!errors.discount_type} aria-invalid={!!errors.discount_type}>
                  <SelectValue placeholder={t("offers.form.selectDiscountType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">{t("offers.discountTypes.percentage")}</SelectItem>
                  <SelectItem value="fixed_amount">{t("offers.discountTypes.fixedAmount")}</SelectItem>
                  <SelectItem value="special_deal">{t("offers.discountTypes.specialDeal")}</SelectItem>
                  <SelectItem value="join_offers">{t("offers.discountTypes.joinOffers")}</SelectItem>
                  <SelectItem value="discount_events">{t("offers.discountTypes.discountEvents")}</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.discount_type?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="offer-discount-pct">{t("offers.form.discountPct")}</Label>
          <Input
            id="offer-discount-pct"
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            step="0.01"
            placeholder={t("offers.form.discountPctPlaceholder")}
            {...register("discount_pct")}
            error={!!errors.discount_pct}
            aria-invalid={!!errors.discount_pct}
          />
          <FieldError message={errors.discount_pct?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="offer-description">{t("offers.form.description")}</Label>
          <Input
            id="offer-description"
            placeholder={t("offers.form.descriptionPlaceholder")}
            {...register("description")}
            error={!!errors.description}
            aria-invalid={!!errors.description}
          />
          <FieldError message={errors.description?.message} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="offer-starts-at">
              {t("offers.form.validFrom")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="offer-starts-at"
              type="date"
              {...register("starts_at")}
              error={!!errors.starts_at}
              aria-invalid={!!errors.starts_at}
            />
            <FieldError message={errors.starts_at?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="offer-ends-at">{t("offers.form.validUntil")}</Label>
            <Input
              id="offer-ends-at"
              type="date"
              min={watch("starts_at") || undefined}
              {...register("ends_at")}
              error={!!errors.ends_at}
              aria-invalid={!!errors.ends_at}
            />
            <FieldError message={errors.ends_at?.message} />
          </div>
        </div>

        <div className="flex gap-2 justify-end pt-4 sticky bottom-0 bg-white border-t mt-4 py-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            {t("common.close")}
          </Button>
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            {mutation.isPending && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {mutation.isPending ? t("offers.form.creating") : t("offers.createOffer")}
          </Button>
        </div>
      </form>
    </Modal>
  );
}