"use client";

import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAddProjectFeatureData } from "@/hooks/use-add-project-feature";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button, Input } from "@/components/ui";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Check, Loader2, HelpCircle } from "lucide-react";
import { addProjectFeature } from "@/data/api-client";
import { toast } from "sonner";
import { z } from "zod";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface AddProjectFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  projectId: number;
}

const getProjectFeatureSchema = (t: (key: string, values?: Record<string, string | number>) => string) =>
  z.object({
    feature_id: z
      .number({ message: t("projects.features.validation.featureRequired") })
      .min(1, t("projects.features.validation.featureRequired")),
    value: z
      .string()
      .trim()
      .min(1, t("projects.features.validation.valueRequired"))
      .max(255, t("validation.max_length", { max: 255 })),
    is_amenity: z.number().min(0).max(1).optional(),
  });

/** Backend keys (payload is `{ project_id, features: [{ feature_id, value, description }] }`) → form fields. */
const PROJECT_FEATURE_FIELD_MAP = {
  features: "feature_id",
  "features.0.feature_id": "feature_id",
  "features.0.value": "value",
  "features.0.description": "value",
} as const;

type ProjectFeatureFormData = z.infer<ReturnType<typeof getProjectFeatureSchema>>;

export function AddProjectFeatureModal({
  isOpen,
  onClose,
  onSuccess,
  projectId,
}: AddProjectFeatureModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { features, loading: featuresLoading } =
    useAddProjectFeatureData(isOpen);

  const [addAnother, setAddAnother] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
    getValues,
  } = useForm<ProjectFeatureFormData>({
    resolver: zodResolver(useMemo(() => getProjectFeatureSchema(t), [t])),
    defaultValues: {
      feature_id: undefined,
      value: "",
      is_amenity: 0,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: any) => addProjectFeature(data, token!),
    onSuccess: () => {
      toast.success(t("projects.features.addedSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails"] });
      onSuccess?.();
      if (addAnother) {
        // Keep the modal open for the next feature.
        reset();
        return;
      }
      reset();
      setAddAnother(false);
      onClose();
    },
    onError: (error) => {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: PROJECT_FEATURE_FIELD_MAP,
        fallbackMessage: t("projects.features.addFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    reset();
    setAddAnother(false);
    onClose();
  };

  const onSubmit = (formData: ProjectFeatureFormData) => {
    if (mutation.isPending) return;
    const data = {
      project_id: projectId,
      features: [
        {
          feature_id: formData.feature_id,
          value: formData.value,
          description: "",
        },
      ],
    };

    mutation.mutate(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("projects.features.addTitle")}
      size="md"
      showCloseButton={false}
      scrollable
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-1">
        <FormErrorAlert message={errors.root?.server?.message} />

        <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div className="p-1.5 bg-blue-100 rounded-md">
            <Sparkles className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-900">
              {t("projects.features.addTitle")}
            </p>
            <p className="text-xs text-blue-600">
              {t("projects.features.addSubtitle")}
            </p>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5 text-xs">
            <Sparkles className="h-3 w-3 text-blue-500" />
            {t("projects.features.featureName")} <span className="text-red-500">*</span>
            <HelpCircle className="h-3 w-3 text-gray-400 ms-auto" />
          </Label>
          <Controller
            name="feature_id"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value?.toString() || ""}
                onValueChange={(val) => field.onChange(Number(val))}
              >
                <SelectTrigger
                  ref={field.ref}
                  className={`bg-gray-50 focus:border-blue-500 focus:ring-blue-500/20 py-3 ${errors.feature_id ? "" : "border-gray-200"}`}
                  error={!!errors.feature_id}
                  aria-invalid={!!errors.feature_id}
                >
                  <SelectValue
                    placeholder={
                      featuresLoading
                        ? (t("projects.features.loadingFeatures"))
                        : (t("projects.features.selectFeature"))
                    }
                  />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {featuresLoading ? (
                    <div className="p-2 text-sm text-gray-500 text-center">
                      {t("projects.features.loadingFeatures")}
                    </div>
                  ) : features.length === 0 ? (
                    <div className="p-2 text-sm text-gray-500 text-center">
                      {t("projects.features.noFeaturesAvailable")}
                    </div>
                  ) : (
                    features.map((feature) => (
                      <SelectItem
                        key={feature.feature_id}
                        value={feature.feature_id.toString()}
                      >
                        <div className="flex items-center gap-2">
                          <span>{feature.feature_name}</span>
                          {feature.is_amenity === 1 && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                              {t("projects.features.amenity")}
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.feature_id?.message} />
        </div>

        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5 text-xs">
            <Sparkles className="h-3 w-3 text-blue-500" />
            {t("projects.features.value")} <span className="text-red-500">*</span>
            <HelpCircle className="h-3 w-3 text-gray-400 ms-auto" />
          </Label>
          <Input
            placeholder={t("projects.features.valuePlaceholder")}
            {...register("value")}
            className={`bg-gray-50 focus:border-blue-500 focus:ring-blue-500/20 py-3 ${errors.value ? "" : "border-gray-200"}`}
            error={!!errors.value}
            aria-invalid={!!errors.value}
          />
          <FieldError message={errors.value?.message} />
        </div>

        <div className="space-y-3 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="addAnother"
              checked={addAnother}
              onChange={(e) => setAddAnother(e.target.checked)}
              disabled={mutation.isPending}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />

            <label htmlFor="addAnother" className="text-sm text-gray-700">
              {t("common.addAnotherItem")}
            </label>
          </div>

          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={mutation.isPending}
              className="hover:bg-gray-50"
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t("common.adding")}
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  {t("projects.features.addTitle")}
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}