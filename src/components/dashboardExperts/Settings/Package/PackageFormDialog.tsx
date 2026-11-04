import { PackageFormData } from "@/types/expertDashboard/package";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { getPackageFormSchema } from "@/validators/dashboardExpert/packageSchema";

type PackageFormErrors = Partial<Record<keyof PackageFormData, string>>;

const PACKAGE_FIELDS: (keyof PackageFormData)[] = ["name", "minutes", "price_cents", "currency", "is_active"];

// Backend keys → form fields (the payload uses the same names; these cover common aliases).
const PACKAGE_FIELD_MAP: Record<string, keyof PackageFormData> = {
  duration: "minutes",
  price: "price_cents",
};

const inputClass = (hasError: boolean) =>
  `border rounded-[8px] px-3 py-2.5 text-[14px] text-[#15042B] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 transition-all ${hasError
    ? "border-red-500 focus:ring-red-500/30 focus:border-red-500"
    : "border-[#E5E7EB] focus:ring-[#008081]/30 focus:border-[#008081]"
  }`;

export default function PackageFormDialog({
  open,
  onOpenChange,
  initial,
  onSubmit,
  loading,
  mode,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initial: PackageFormData;
  /** Resolves on success; a rejection's API errors are shown in the dialog (values are kept). */
  onSubmit: (data: PackageFormData) => Promise<unknown>;
  loading: boolean;
  mode: "add" | "edit";
}) {
  const { t } = useLanguage();
  const [form, setForm] = useState<PackageFormData>(initial);
  const [prevInitial, setPrevInitial] = useState(initial);
  const [prevOpen, setPrevOpen] = useState(open);
  const [errors, setErrors] = useState<PackageFormErrors>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

  // Start from the initial values, without stale errors, whenever the dialog opens or its target changes.
  if (initial !== prevInitial || open !== prevOpen) {
    setPrevInitial(initial);
    setPrevOpen(open);
    if (open) {
      setForm(initial);
      setErrors({});
      setGeneralError(undefined);
    }
  }

  const set = (key: keyof PackageFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const result = getPackageFormSchema(t).safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const nextErrors: PackageFormErrors = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof PackageFormData;
      if (field && !nextErrors[field]) nextErrors[field] = issue.message;
    });
    setErrors(nextErrors);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (loading) return;
    setGeneralError(undefined);
    if (!validate()) {
      toast.error(t("validation.fillRequiredFields"));
      scrollToFirstInvalidField(formElement);
      return;
    }
    try {
      await onSubmit(form);
    } catch (error) {
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage:
          mode === "add"
            ? t("experts.settings.pricing.messages.createFailed")
            : t("experts.settings.pricing.messages.updateFailed"),
        fields: PACKAGE_FIELDS,
        fieldMap: PACKAGE_FIELD_MAP,
      });
      setErrors(fieldErrors as PackageFormErrors);
      setGeneralError(generalMessage);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      scrollToFirstInvalidField(formElement);
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next && loading) return;
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[460px] p-0 gap-0 overflow-hidden rounded-[12px]">
        <DialogHeader className="px-6 py-4 border-b border-[#E5E7EB]">
          <DialogTitle className="text-[16px] font-semibold text-[#15042B]">
            {mode === "add" ? t("experts.settings.pricing.add") : t("experts.settings.pricing.edit")}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} noValidate className="px-6 py-5 flex flex-col gap-4">
          <FormErrorAlert message={generalError} />

          <div className="flex flex-col gap-1.5">
            <label htmlFor="package-name" className="text-[13px] font-medium text-[#15042B]">
              {t("experts.settings.pricing.packageName")} <span className="text-red-500">*</span>
            </label>
            <input
              id="package-name"
              type="text"
              placeholder={t("experts.settings.pricing.packageNamePlaceholder")}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              aria-invalid={!!errors.name || undefined}
              className={inputClass(!!errors.name)}
            />
            <FieldError message={errors.name} className="mt-0" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="package-minutes" className="text-[13px] font-medium text-[#15042B]">
              {t("experts.settings.pricing.duration")} <span className="text-red-500">*</span>
            </label>
            <input
              id="package-minutes"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              dir="ltr"
              placeholder={t("experts.settings.pricing.durationPlaceholder")}
              value={form.minutes}
              onChange={(e) => set("minutes", e.target.value)}
              aria-invalid={!!errors.minutes || undefined}
              className={inputClass(!!errors.minutes)}
            />
            <FieldError message={errors.minutes} className="mt-0" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="package-price" className="text-[13px] font-medium text-[#15042B]">
                {t("experts.settings.pricing.price")} <span className="text-red-500">*</span>
              </label>
              <input
                id="package-price"
                type="number"
                inputMode="decimal"
                min="0"
                dir="ltr"
                placeholder={t("experts.settings.pricing.pricePlaceholder")}
                value={form.price_cents}
                onChange={(e) => set("price_cents", e.target.value)}
                aria-invalid={!!errors.price_cents || undefined}
                className={inputClass(!!errors.price_cents)}
              />
              <FieldError message={errors.price_cents} className="mt-0" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="package-currency" className="text-[13px] font-medium text-[#15042B]">
                {t("experts.settings.pricing.currency")} <span className="text-red-500">*</span>
              </label>
              <input
                id="package-currency"
                type="text"
                dir="ltr"
                placeholder={t("experts.settings.pricing.currencyPlaceholder")}
                value={form.currency}
                onChange={(e) => set("currency", e.target.value)}
                aria-invalid={!!errors.currency || undefined}
                className={inputClass(!!errors.currency)}
              />
              <FieldError message={errors.currency} className="mt-0" />
            </div>
          </div>

          <div className="flex items-center gap-2 py-1">
            <button
              type="button"
              role="switch"
              aria-checked={form.is_active}
              aria-invalid={!!errors.is_active || undefined}
              onClick={() => set("is_active", !form.is_active)}
              className={`relative w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#008081]/30 ${form.is_active ? "bg-[#008081]" : "bg-[#D1D5DB]"
                }`}
            >
              <span
                className={`absolute top-[3px] start-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform duration-200 ${form.is_active ? "translate-x-4 rtl:-translate-x-4" : "translate-x-0"
                  }`}
              />
            </button>
            <span className="text-[13px] font-medium text-[#15042B]">{t("experts.settings.pricing.active")}</span>
          </div>
          <FieldError message={errors.is_active} className="mt-0" />

          <DialogFooter className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              disabled={loading}
              className="px-4 py-2 rounded-[8px] text-[14px] font-medium text-[#374151] border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {t("experts.common.cancel")}
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-[8px] text-[14px] font-medium text-white bg-[#008081] hover:bg-[#006e6e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-w-[100px] flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t("experts.common.saving")}
                </>
              ) : mode === "add" ? (
                t("experts.settings.pricing.add")
              ) : (
                t("profileSettings.saveChanges")
              )}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
