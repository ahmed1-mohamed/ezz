"use client";

import { FormProvider } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateFeature } from "@/hooks/use-create-feature";
import { Button } from "@/components/ui";
import { FormErrorAlert } from "@/components/ui/form-message";
import { createFeatureSchema, CreateFeatureInput } from "@/validators/feature.schema";
import { Loader2, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { FeatureIconUpload } from "./add-feature2-fields/FeatureIconUpload";
import { FeatureNamesInput } from "./add-feature2-fields/FeatureNamesInput";
import { FeatureCategorySelect } from "./add-feature2-fields/FeatureCategorySelect";

const FEATURE_FIELD_MAP: Record<string, keyof CreateFeatureInput> = {
  name: "feature_name",
  name_en: "feature_name",
  feature_name_en: "feature_name",
  name_ar: "feature_name_ar",
  is_amenity: "category",
  icon: "icons",
};

interface AddFeatureModal2Props {
  isOpen: boolean;
  onClose: () => void;
  onEdit?: (feature: any) => void;
  onDelete?: (feature: any) => void;
}

export function AddFeatureModal2({
  isOpen,
  onClose,
}: AddFeatureModal2Props) {
  const { t } = useLanguage();

  const formMethods = useForm<CreateFeatureInput>({
    resolver: zodResolver(createFeatureSchema),
    defaultValues: {
      feature_name: "",
      feature_name_ar: "",
      category: undefined,
      icons: "",
    },
  });

  const { handleSubmit, reset, setError, getValues, formState: { errors } } = formMethods;

  const { createFeature, isCreating } = useCreateFeature();

  const handleFormSubmit = async (formData: CreateFeatureInput) => {
    try {
      const apiPayload = {
        feature_name: formData.feature_name,
        is_amenity: formData.category === "amenity" ? 1 : 0,
        icons: formData.icons || "",
      };

      await createFeature(apiPayload as any);
      toast.success(t("features.modal.createSuccess"));
      reset();
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: FEATURE_FIELD_MAP,
        fallbackMessage: t("features.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const handleClose = () => {
    if (isCreating) return;
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl overflow-hidden relative flex flex-col">
        <div className="p-6 pb-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#15042B]">{t("features.modal.createTitle")}</h2>
            <button
              type="button"
              onClick={handleClose}
              disabled={isCreating}
              className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full h-0.5 bg-gray-100 relative rounded-full">
            <div className="absolute end-10 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </div>
        </div>

        <FormProvider {...formMethods}>
          <form noValidate onSubmit={handleSubmit(handleFormSubmit)} className="p-6 pt-0 space-y-5 flex-1 overflow-y-auto">
            <FormErrorAlert message={errors.root?.server?.message} />
            <FeatureIconUpload />
            <FeatureNamesInput />
            <FeatureCategorySelect />

            <div className="w-full h-px bg-gray-100 my-2" />

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isCreating}
                className="text-gray-600 bg-white hover:bg-gray-50 px-6 py-2.5 h-auto"
              >
                {t("features.modal.close")}
              </Button>
              <Button
                type="submit"
                disabled={isCreating}
                className="bg-[#007A55] hover:bg-[#007a55e0] text-white px-6 py-2.5 h-auto font-medium"
              >
                {isCreating && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
                {isCreating ? t("features.modal.creating") : t("features.modal.createBtn")}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
