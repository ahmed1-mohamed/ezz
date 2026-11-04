"use client";

import { useMemo } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Check } from "lucide-react";
import { getMilestoneFormSchema, MilestoneSchema } from "@/validators/milestone.schema";
import { addMilestone } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface AddMilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

export function AddMilestoneModal({
  isOpen,
  onClose,
  projectId,
}: AddMilestoneModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const statusOptions = [
    { label: t("common.pending"), value: "pending" },
    { label: t("common.inProgress"), value: "in_progress" },
    { label: t("common.completed"), value: "completed" },
  ];

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    setError,
    reset,
  } = useForm<MilestoneSchema>({
    resolver: zodResolver(useMemo(() => getMilestoneFormSchema(t), [t])),
    defaultValues: {
      project_id: projectId,
      milestone_name: "",
      description: "",
      status: "",
      planned_start_date: "",
      planned_end_date: "",
      actual_start_date: "",
      actual_end_date: "",
      completion_percentage: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: MilestoneSchema) => addMilestone(data, token!),
    onSuccess: () => {
      toast.success(t("projects.milestones.createdSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails"] });
      resetForm();
      onClose();
    },
    onError: (error) => {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fallbackMessage: t("projects.milestones.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleFormSubmit = (data: MilestoneSchema) => {
    if (mutation.isPending) return;
    mutation.mutate({
      ...data,
      project_id: projectId,
    });
  };

  const resetForm = () =>
    reset({
      project_id: projectId,
      milestone_name: "",
      description: "",
      status: "",
      planned_start_date: "",
      planned_end_date: "",
      actual_start_date: "",
      actual_end_date: "",
      completion_percentage: "",
    });

  const handleClose = () => {
    if (mutation.isPending) return;
    resetForm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("projects.milestones.addTitle")}
      size="lg"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={mutation.isPending}>
            {t("common.close")}
          </Button>
          <Button
            className="bg-[#008081] hover:bg-[#006666] text-white"
            onClick={handleSubmit(handleFormSubmit)}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 me-2 animate-spin" />
                {t("projects.milestones.creating")}
              </>
            ) : (
              <>
                <Check className="w-4 h-4 me-2" />
                {t("projects.milestones.addTitle")}
              </>
            )}
          </Button>
        </div>
      }
    >
      <form
        noValidate
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-4 overflow-y-auto max-h-[calc(90vh-180px)] pe-2"
      >
        <FormErrorAlert message={errors.root?.server?.message} />

        <div>
          <Label>
            {t("projects.milestones.name")} <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder={t("projects.milestones.namePlaceholder")}
            {...register("milestone_name")}
            className="mt-1"
            error={!!errors.milestone_name}
            aria-invalid={!!errors.milestone_name}
          />
          <FieldError message={errors.milestone_name?.message} />
        </div>

        <div>
          <Label>
            {t("common.statusLabel")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  ref={field.ref}
                  error={!!errors.status}
                  aria-invalid={!!errors.status}
                >
                  <SelectValue placeholder={t("common.selectStatus")} />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.status?.message} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>{t("projects.milestones.plannedStartDate")}</Label>
            <Input
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
            <Label>{t("projects.milestones.plannedEndDate")}</Label>
            <Input
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>{t("projects.milestones.actualStartDate")}</Label>
            <Input
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
            <Label>{t("projects.milestones.actualEndDate")}</Label>
            <Input
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

        <div>
          <Label>{t("projects.milestones.completionPercentage")}</Label>
          <Input
            type="number"
            min="0"
            max="100"
            dir="ltr"
            {...register("completion_percentage")}
            className="mt-1"
            error={!!errors.completion_percentage}
            aria-invalid={!!errors.completion_percentage}
          />
          <FieldError message={errors.completion_percentage?.message} />
        </div>

        <div>
          <Label>{t("common.shortDescription")}</Label>
          <Textarea
            placeholder={t("projects.milestones.descriptionPlaceholder")}
            {...register("description")}
            className="mt-1 min-h-[80px]"
            error={!!errors.description}
            aria-invalid={!!errors.description}
          />
          <FieldError message={errors.description?.message} />
        </div>
      </form>
    </Modal>
  );
}