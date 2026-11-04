"use client";

import { useState, useRef, useEffect } from "react";
import { FormProvider } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { useQuery } from "@tanstack/react-query";
import useDashboardAdminFeatures from "@/hooks/use-dashboardAdminFeatures";
import { AdminFeaturesService } from "@/data/api-client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { X, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { editFeatureSchema, EditFeatureInput, FEATURE_ICON_EXTENSIONS } from "@/validators/feature.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { FeatureNamesInput } from "./add-feature2-fields/FeatureNamesInput";
import { FeatureCategorySelect } from "./add-feature2-fields/FeatureCategorySelect";

const NO_FILE = "No file chosen";

const FEATURE_FIELD_MAP: Record<string, keyof EditFeatureInput> = {
  name: "feature_name",
  name_en: "feature_name",
  feature_name_en: "feature_name",
  name_ar: "feature_name_ar",
  is_amenity: "category",
  icon: "icons",
};

interface EditFeatureModal2Props {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    id: number;
    featureName: string;
    isAmenity: boolean;
    icon: string;
  } | null;
}

export function EditFeatureModal2({
  isOpen,
  onClose,
  feature,
}: EditFeatureModal2Props) {
  const { t } = useLanguage();
  const [selectedFileName, setSelectedFileName] = useState<string>(NO_FILE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formMethods = useForm<EditFeatureInput>({
    resolver: zodResolver(editFeatureSchema),
    defaultValues: {
      feature_name: "",
      feature_name_ar: "",
      category: undefined,
      icons: "",
    },
  });

  const {
    handleSubmit,
    reset,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = formMethods;

  const { editFeatureMutation } = useDashboardAdminFeatures();
  const isUpdating = editFeatureMutation.isPending;

  const { data: featureDetails, isLoading: isFetching } = useQuery({
    queryKey: ["featureDetails", feature?.id],
    queryFn: async () => {
      const response = await AdminFeaturesService.getFeature(feature!.id);
      return (response as any).data?.data || (response as any).data || response;
    },
    enabled: isOpen && feature?.id != null,
  });

  useEffect(() => {
    if (featureDetails || feature) {
      const displayFeature = featureDetails || feature;
      const fName = displayFeature.feature_name || feature?.featureName || "";
      const fNameAr = displayFeature.feature_name_ar || displayFeature.feature_name || feature?.featureName || "";
      const isAm = featureDetails ? displayFeature.is_amenity === 1 : feature?.isAmenity;
      const icn = displayFeature.icons || feature?.icon || "";

      setValue("feature_name", fName);
      setValue("feature_name_ar", fNameAr);
      setValue("category", isAm ? "amenity" : "feature");
      setSelectedFileName(icn || NO_FILE);
    }
  }, [featureDetails, feature, setValue]);

  const handleFormSubmit = async (formData: EditFeatureInput) => {
    if (!feature?.id) return;

    try {
      const isAmenity = formData.category === "amenity" ? 1 : 0;
      const apiPayload = {
        feature_name: formData.feature_name,
        is_amenity: isAmenity,
        icons: formData.icons || selectedFileName !== NO_FILE ? selectedFileName : "",
      };

      await editFeatureMutation.mutateAsync({ id: feature.id, data: apiPayload as any });
      toast.success(t("features.messages.updateSuccess"));
      resetAndClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: FEATURE_FIELD_MAP,
        fallbackMessage: t("features.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const resetAndClose = () => {
    reset();
    setSelectedFileName(NO_FILE);
    onClose();
  };

  const handleClose = () => {
    if (isUpdating) return;
    resetAndClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue("icons", file.name, { shouldValidate: true, shouldDirty: true });
    }
  };

  const iconError = errors.icons?.message;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl overflow-hidden relative flex flex-col">
        <div className="p-6 pb-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#15042B]">{t("features.modal.editTitle")}</h2>
            <button
              type="button"
              onClick={handleClose}
              disabled={isUpdating}
              className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full h-0.5 bg-gray-100 relative rounded-full">
            <div className="absolute end-10 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </div>
        </div>

        {isFetching ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
          </div>
        ) : (
          <FormProvider {...formMethods}>
            <form noValidate onSubmit={handleSubmit(handleFormSubmit)} className="p-6 pt-0 space-y-5 flex-1 overflow-y-auto">
              <FormErrorAlert message={errors.root?.server?.message} />

              <div>
                <Label className="text-sm font-semibold text-[#15042B] mb-2 block">{t("features.modal.uploadIcon")}</Label>
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-xl bg-[#9333EA] flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div
                      className={`flex items-center border rounded-lg overflow-hidden cursor-pointer w-full bg-white hover:bg-gray-50 transition-colors ${iconError ? "border-red-500" : "border-gray-200"}`}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-invalid={!!iconError || undefined}
                    >
                      <div className="bg-gray-50 px-4 py-2.5 border-e border-gray-200 text-sm font-medium text-gray-600 whitespace-nowrap">
                        {t("features.modal.chooseFiles")}
                      </div>
                      <div className="px-4 py-2.5 text-sm text-gray-500 truncate flex-1">
                        {selectedFileName === NO_FILE ? t("features.modal.noFile") : selectedFileName}
                      </div>
                    </div>
                    <FieldError message={iconError ? t(String(iconError)) : undefined} className="mt-0" />
                    <p className="text-xs text-gray-400 font-medium">{t("features.modal.maxSizeWarning")}</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept={FEATURE_ICON_EXTENSIONS.map((ext) => `.${ext}`).join(",")}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              <FeatureNamesInput />
              <FeatureCategorySelect />

              <div className="w-full h-px bg-gray-100 my-2" />

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isUpdating}
                  className="text-gray-600 bg-white hover:bg-gray-50 px-6 py-2.5 h-auto"
                >
                  {t("features.modal.close")}
                </Button>
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className="bg-[#007A55] hover:bg-[#007a55e0] text-white px-6 py-2.5 h-auto font-medium"
                >
                  {isUpdating && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
                  {isUpdating ? t("common.updating") : t("features.modal.updateBtn")}
                </Button>
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </div>
  );
}
