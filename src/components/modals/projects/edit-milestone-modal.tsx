"use client";

import { useEffect, useMemo } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { AdminProjectsService } from "@/features/projects/services/AdminProjectsService";
import { Milestone } from "@/app/admin/projects/[id]/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { refineMilestoneDates } from "@/validators/milestone.schema";

const getEditMilestoneSchema = (t: (key: string, values?: Record<string, string | number>) => string) =>
  z
    .object({
      milestone_name: z
        .string()
        .trim()
        .min(1, t("projects.milestones.validation.nameRequired"))
        .max(255, t("validation.max_length", { max: 255 })),
      description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })),
      status: z.enum(["pending", "in_progress", "completed", "delayed"], { message: t("validation.required") }),
      planned_start_date: z.string(),
      planned_end_date: z.string(),
      actual_start_date: z.string(),
      actual_end_date: z.string(),
      completion_percentage: z.string().refine(
        (val) => {
          if (val.trim() === "") return true;
          const num = Number(val);
          return Number.isFinite(num) && num >= 0 && num <= 100;
        },
        { message: t("projects.milestones.validation.percentageRange") }
      ),
    })
    .superRefine((data, ctx) => refineMilestoneDates(t, data, ctx));

type EditMilestoneFormValues = z.infer<ReturnType<typeof getEditMilestoneSchema>>;

interface EditMilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
  milestone: Milestone | null;
}

export function EditMilestoneModal({
  isOpen,
  onClose,
  projectId,
  milestone,
}: EditMilestoneModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const statusOptions = [
    { label: t("common.pending"), value: "pending" },
    { label: t("common.inProgress"), value: "in_progress" },
    { label: t("common.completed"), value: "completed" },
    // "delayed" (set when creating a project) isn't offered as a new choice here, but a milestone that
    // already has it must still show and save it.
    ...(milestone?.status === "delayed" ? [{ label: t("common.delayed"), value: "delayed" }] : []),
  ];

  const schema = useMemo(() => getEditMilestoneSchema(t), [t]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    getValues,
    formState: { errors },
  } = useForm<EditMilestoneFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      milestone_name: "",
      description: "",
      status: "pending",
      planned_start_date: "",
      planned_end_date: "",
      actual_start_date: "",
      actual_end_date: "",
      completion_percentage: "0",
    },
  });

  useEffect(() => {
    if (!milestone) return;
    reset({
      milestone_name: milestone.milestone_name ?? "",
      description: milestone.description ?? "",
      status: (milestone.status as "pending" | "in_progress" | "completed") ?? "pending",
      planned_start_date: milestone.planned_start_date ?? "",
      planned_end_date: milestone.planned_end_date ?? "",
      actual_start_date: milestone.actual_start_date ?? "",
      actual_end_date: milestone.actual_end_date ?? "",
      completion_percentage: milestone.completion_percentage != null
        ? String(milestone.completion_percentage)
        : "0",
    });
  }, [milestone, reset]);

  const updateMutation = useMutation({
    mutationFn: (formValues: EditMilestoneFormValues) =>
      AdminProjectsService.updateMilestone(milestone!.milestone_id, {
        project_id: projectId,
        milestone_name: formValues.milestone_name,
        description: formValues.description,
        // The update type omits "delayed", but an existing delayed milestone is sent back unchanged (as before).
        status: formValues.status as "pending" | "in_progress" | "completed",
        planned_start_date: formValues.planned_start_date || undefined,
        planned_end_date: formValues.planned_end_date || undefined,
        actual_start_date: formValues.actual_start_date || undefined,
        actual_end_date: formValues.actual_end_date || undefined,
        completion_percentage: formValues.completion_percentage
          ? Number(formValues.completion_percentage)
          : undefined,
      }),
    onSuccess: () => {
      toast.success(t("projects.milestones.updateSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["projectDetails", projectId.toString()],
      });
      onClose();
    },
    onError: (error) => {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fallbackMessage: t("projects.milestones.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const isSubmitting = updateMutation.isPending;

  const onSubmit = (formValues: EditMilestoneFormValues) => {
    if (!milestone || isSubmitting) return;
    updateMutation.mutate(formValues);
  };

  const handleClose = () => {
    if (isSubmitting) return;
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("projects.milestones.editTitle")}
      size="lg"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
            {t("common.cancel")}
          </Button>
          <Button
            className="bg-[#008081] hover:bg-[#006666] text-white"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 me-2 animate-spin" />
                {t("projects.milestones.updating")}
              </>
            ) : (
              t("projects.milestones.updateTitle")
            )}
          </Button>
        </div>
      }
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormErrorAlert message={errors.root?.server?.message} />

        <div>
          <Label htmlFor="em-name">
            {t("projects.milestones.name")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="em-name"
            {...register("milestone_name")}
            placeholder={t("projects.milestones.namePlaceholder")}
            className="mt-1"
            error={!!errors.milestone_name}
            aria-invalid={!!errors.milestone_name}
          />
          <FieldError message={errors.milestone_name?.message} />
        </div>

        <div>
          <Label>{t("common.statusLabel")}</Label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  ref={field.ref}
                  className="mt-1"
                  error={!!errors.status}
                  aria-invalid={!!errors.status}
                >
                  <SelectValue placeholder={t("common.selectStatus")} />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.status?.message} />
        </div>

        <div>
          <Label htmlFor="em-completion">{t("projects.milestones.completionPercentagePct")}</Label>
          <Input
            id="em-completion"
            type="number"
            min={0}
            max={100}
            dir="ltr"
            {...register("completion_percentage")}
            placeholder="0 - 100"
            className="mt-1"
            error={!!errors.completion_percentage}
            aria-invalid={!!errors.completion_percentage}
          />
          <FieldError message={errors.completion_percentage?.message} />
        </div>

        <div>
          <Label htmlFor="em-desc">{t("common.shortDescription")}</Label>
          <Input
            id="em-desc"
            {...register("description")}
            placeholder={t("projects.milestones.descriptionPlaceholder")}
            className="mt-1"
            error={!!errors.description}
            aria-invalid={!!errors.description}
          />
          <FieldError message={errors.description?.message} />
        </div>

        <h4 className="text-sm font-semibold text-gray-700">{t("projects.milestones.plannedDates")}</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="em-plan-start">{t("projects.milestones.startDate")}</Label>
            <Input
              id="em-plan-start"
              type="date"
              dir="ltr"
              {...register("planned_start_date")}
              className="mt-1"
              error={!!errors.planned_start_date}
              aria-invalid={!!errors.planned_start_date}
            />
            <FieldError message={errors.planned_start_date?.message} />
          </div>
          <div>
            <Label htmlFor="em-plan-end">{t("projects.milestones.endDate")}</Label>
            <Input
              id="em-plan-end"
              type="date"
              dir="ltr"
              {...register("planned_end_date")}
              className="mt-1"
              error={!!errors.planned_end_date}
              aria-invalid={!!errors.planned_end_date}
            />
            <FieldError message={errors.planned_end_date?.message} />
          </div>
        </div>

        <h4 className="text-sm font-semibold text-gray-700">{t("projects.milestones.actualDates")}</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="em-act-start">{t("projects.milestones.startDate")}</Label>
            <Input
              id="em-act-start"
              type="date"
              dir="ltr"
              {...register("actual_start_date")}
              className="mt-1"
              error={!!errors.actual_start_date}
              aria-invalid={!!errors.actual_start_date}
            />
            <FieldError message={errors.actual_start_date?.message} />
          </div>
          <div>
            <Label htmlFor="em-act-end">{t("projects.milestones.endDate")}</Label>
            <Input
              id="em-act-end"
              type="date"
              dir="ltr"
              {...register("actual_end_date")}
              className="mt-1"
              error={!!errors.actual_end_date}
              aria-invalid={!!errors.actual_end_date}
            />
            <FieldError message={errors.actual_end_date?.message} />
          </div>
        </div>
      </form>
    </Modal>
  );
}