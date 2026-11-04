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
import { getBuildingFormSchema, BuildingInputType } from "@/validators/buildingSchema";
import { addBuilding } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface AddBuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

import { useRouter } from "next/navigation";

const constructionStatusOptions = [
  { labelKey: "buildings.statusOptions.ready", value: "ready" },
  { labelKey: "buildings.statusOptions.underConstruction", value: "under-construction" },
  { labelKey: "buildings.statusOptions.offPlan", value: "off-plan" },
];

const builtTypeOptions = [
  { labelKey: "buildings.builtTypeOptions.building", value: "building" },
  { labelKey: "buildings.builtTypeOptions.compound", value: "compound" },
];

const buildingTypeOptions = [
  { labelKey: "buildings.typeOptions.residential", value: "residential" },
  { labelKey: "buildings.typeOptions.commercial", value: "commercial" },
  { labelKey: "buildings.typeOptions.mixedUse", value: "mixed-use" },
];

export function AddBuildingModal({
  isOpen,
  onClose,
  projectId,
}: AddBuildingModalProps) {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const router = useRouter();
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    setError,
    reset,
  } = useForm<BuildingInputType>({
    resolver: zodResolver(useMemo(() => getBuildingFormSchema(t), [t])),
    defaultValues: {
      project_id: projectId,
      building_name: "",
      total_floors: 1,
      total_units: 0,
      construction_status: "",
      completion_date: "",
      description: "",
      building_type: "",
      built_type: "",
      parking_spaces: 0,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: BuildingInputType) => addBuilding(data, token!),
    onSuccess: () => {
      toast.success(t("buildings.createSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["projectDetails", String(projectId)],
      });
      router.refresh();
      resetForm();
      onClose();
    },
    onError: (error) => {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fallbackMessage: t("buildings.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleFormSubmit = (data: BuildingInputType) => {
    if (mutation.isPending) return;
    const submitData = {
      ...data,
      project_id: projectId,
    };
    mutation.mutate(submitData);
  };

  const resetForm = () =>
    reset({
      project_id: projectId,
      building_name: "",
      total_floors: 1,
      total_units: 0,
      construction_status: "",
      completion_date: "",
      description: "",
      building_type: "",
      built_type: "",
      parking_spaces: 0,
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
      title={t("buildings.createTitle")}
      size="xl"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
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
                {t("projects.create.creating")}
              </>
            ) : (
              <>
                <Check className="w-4 h-4 me-2" />
                {t("buildings.createButton")}
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
            {t("buildings.buildingName")} <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder={t("buildings.buildingNamePlaceholder")}
            {...register("building_name")}
            className="mt-1"
            error={!!errors.building_name}
            aria-invalid={!!errors.building_name}
          />
          <FieldError message={errors.building_name?.message} />
        </div>
        <div>
          <Label>
            {t("buildings.constructionStatus")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="construction_status"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  ref={field.ref}
                  error={!!errors.construction_status}
                  aria-invalid={!!errors.construction_status}
                >
                  <SelectValue placeholder={t("common.selectStatus")} />
                </SelectTrigger>
                <SelectContent>
                  {constructionStatusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {t(status.labelKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.construction_status?.message} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>
              {t("buildings.buildingType")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="building_type"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    ref={field.ref}
                    error={!!errors.building_type}
                    aria-invalid={!!errors.building_type}
                  >
                    <SelectValue placeholder={t("common.selectType")} />
                  </SelectTrigger>
                  <SelectContent>
                    {buildingTypeOptions.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {t(type.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.building_type?.message} />
          </div>
          <div>
            <Label>
              {t("buildings.builtType")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="built_type"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    ref={field.ref}
                    error={!!errors.built_type}
                    aria-invalid={!!errors.built_type}
                  >
                    <SelectValue placeholder={t("buildings.selectBuiltType")} />
                  </SelectTrigger>
                  <SelectContent>
                    {builtTypeOptions.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {t(type.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.built_type?.message} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>
              {t("buildings.totalFloors")} <span className="text-red-500">*</span>
            </Label>
            <Input
              type="number"
              dir="ltr"
              {...register("total_floors", { valueAsNumber: true })}
              className="mt-1"
              error={!!errors.total_floors}
              aria-invalid={!!errors.total_floors}
            />
            <FieldError message={errors.total_floors?.message} />
          </div>
          <div>
            <Label>
              {t("buildings.totalUnits")} <span className="text-red-500">*</span>
            </Label>
            <Input
              type="number"
              dir="ltr"
              {...register("total_units", { valueAsNumber: true })}
              className="mt-1"
              error={!!errors.total_units}
              aria-invalid={!!errors.total_units}
            />
            <FieldError message={errors.total_units?.message} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>{t("buildings.parkingSpaces")}</Label>
            <Input
              type="number"
              dir="ltr"
              {...register("parking_spaces", {
                setValueAs: (v) => (v === "" || v === null ? undefined : Number(v)),
              })}
              className="mt-1"
              error={!!errors.parking_spaces}
              aria-invalid={!!errors.parking_spaces}
            />
            <FieldError message={errors.parking_spaces?.message} />
          </div>
          <div>
            <Label>
              {t("buildings.completionDate")} <span className="text-red-500">*</span>
            </Label>
            <Input
              type="date"
              dir="ltr"
              {...register("completion_date")}
              className="mt-1"
              error={!!errors.completion_date}
              aria-invalid={!!errors.completion_date}
            />
            <FieldError message={errors.completion_date?.message} />
          </div>
        </div>
        <div>
          <Label>{t("buildings.description")}</Label>
          <Textarea
            placeholder={t("common.writeDescriptionHere")}
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
