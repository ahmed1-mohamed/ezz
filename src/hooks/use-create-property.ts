"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { UseFormSetError } from "react-hook-form";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { PropertiesInput, propertiesSchema } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseApiError } from "@/lib/api-errors";
import { ROOT_SERVER_ERROR, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

/** Fields the property form shows an input for (payment plans have their own tab UI). */
const PROPERTY_FORM_FIELDS = Object.keys(propertiesSchema.shape).filter(
  (field) => field !== "payment_plans" && field !== "property_name_en",
);

/** Backend keys that differ from the form's field names (the payload otherwise uses the form's names). */
const PROPERTY_FIELD_MAP: Record<string, keyof PropertiesInput> = {
  property_name_en: "property_name",
  property_name_ar: "property_name",
  name: "property_name",
  unit_number: "property_no",
  google_map_link: "maps_url",
  permit_no: "dld_permit_number",
  barcode: "dld_barcode",
};

interface PropertyFormTab {
  fields: (keyof PropertiesInput)[];
}

interface ApplyServerFieldErrorsOptions<TTab extends PropertyFormTab> {
  tabs: TTab[];
  /** The tab currently shown, used to tell the user when errors are on other tabs. */
  activeTab?: TTab;
  setError: UseFormSetError<PropertiesInput>;
  onShowTab: (tab: TTab) => void;
  getTabLabel: (tab: TTab) => string;
  t: (key: string, values?: Record<string, string | number>) => string;
  /** Translated message used when the error carries nothing safe to show. */
  fallbackMessage: string;
}

/**
 * Applies a failed create/update to the tabbed property form: backend field errors go under their
 * inputs, anything else goes to the form banner (`errors.root.server`). When the invalid fields are
 * on another tab, that tab is opened (the first one in tab order) and the toast names the tabs.
 */
export function applyServerFieldErrors<TTab extends PropertyFormTab>(
  error: unknown,
  { tabs, activeTab, setError, onShowTab, getTabLabel, t, fallbackMessage }: ApplyServerFieldErrorsOptions<TTab>,
): void {
  const { fieldErrors, generalMessage, summary } = parseApiError(error, {
    t,
    fallbackMessage,
    fields: PROPERTY_FORM_FIELDS,
    fieldMap: PROPERTY_FIELD_MAP,
  });

  const fields = Object.keys(fieldErrors) as (keyof PropertiesInput)[];
  fields.forEach((field) => setError(field, { type: "server", message: fieldErrors[field] }));
  if (generalMessage) {
    setError(ROOT_SERVER_ERROR, { type: "server", message: generalMessage });
  }

  const erroredTabs = tabs.filter((tab) => tab.fields.some((field) => fields.includes(field)));
  if (erroredTabs.length === 0) {
    toast.error(summary, { id: API_ERROR_TOAST_ID });
    if (generalMessage) scrollToFirstInvalidField();
    return;
  }

  const showsActiveTab = !!activeTab && erroredTabs.includes(activeTab);
  const targetTab = showsActiveTab ? activeTab! : erroredTabs[0];
  if (!showsActiveTab) onShowTab(targetTab);

  const otherTabs = erroredTabs.filter((tab) => tab !== activeTab);
  const tabHint =
    otherTabs.length > 0
      ? t("properties.validation.errorsInTabs", { tabs: otherTabs.map(getTabLabel).join(", ") })
      : "";
  toast.error([summary, tabHint].filter(Boolean).join(" — "), { id: API_ERROR_TOAST_ID });

  // Waits for the opened tab to render before scrolling to its first invalid field.
  scrollToFirstInvalidField();
}

export default function useCreateProperty() {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const mutation = useMutation({
    mutationFn: (data: PropertiesInput) => AdminPropertiesService.createProperty(data),
    // Error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: async () => {
      toast.success(t("properties.messages.createSuccess"));
      await queryClient.invalidateQueries({ queryKey: ["properties"] });
      queryClient.removeQueries({ queryKey: ["properties"] });
    },
  });

  return {
    createProperty: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
}
