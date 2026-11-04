"use client";

import { useState, useEffect } from "react";
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
import { Check, Loader2 } from "lucide-react";
import { useEditCityData } from "@/hooks/use-edit-city";
import { CityInput } from "@/validators/city.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";

// Backend field → form field.
const CITY_FIELD_MAP: Record<string, string> = {
  name: "cityName",
  city_name: "cityName",
  country_id: "countryId",
  state_id: "stateId",
};

interface EditCityModalProps {
  cityId: number;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onUpdate: (params: { cityId: number; data: CityInput }) => Promise<void>;
  isUpdating: boolean;
}

export function EditCityModal({
  cityId,
  isOpen,
  onClose,
  onSuccess,
  onUpdate,
  isUpdating,
}: EditCityModalProps) {
  const [formData, setFormData] = useState({
    cityName: "",
    countryId: 0,
    countryName: "",
    stateId: 0,
    stateName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();
  const { t } = useLanguage();
  const { cityData, countries, states, loading } = useEditCityData(
    cityId,
    isOpen,
    formData.countryId ? String(formData.countryId) : undefined,
  );
  useEffect(() => {
    if ((cityData as { data?: Record<string, unknown> })?.data) {
      const data = (cityData as { data: Record<string, unknown> }).data;
      setFormData({
        cityName: (data.name as string) || "",
        countryId: ((data.country as { id?: number })?.id) || 0,
        countryName: ((data.country as { name?: string })?.name) || "",
        stateId: ((data.state as { id?: number })?.id) || 0,
        stateName: ((data.state as { name?: string })?.name) || "",
      });
    }
  }, [cityData]);
  const handleCountryChange = (countryId: string): void => {
    const countryList =
      (countries as { data?: { id: number; name: string }[] })?.data ||
      (countries as { id: number; name: string }[]) ||
      [];
    const country = countryList.find(
      (c: { id: number; name: string }) => c.id.toString() === countryId,
    );
    setFormData({
      ...formData,
      countryId: country ? country.id : 0,
      countryName: country ? country.name : "",
      stateId: 0,
      stateName: "",
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next.countryId;
      delete next.stateId;
      return next;
    });
  };
  const handleStateChange = (stateId: string): void => {
    const stateList =
      (states as { data?: { id: number; name: string }[] })?.data ||
      (states as { id: number; name: string }[]) ||
      [];
    const state = stateList.find(
      (s: { id: number; name: string }) => s.id.toString() === stateId,
    );
    setFormData({
      ...formData,
      stateId: state ? state.id : 0,
      stateName: state ? state.name : "",
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next.stateId;
      return next;
    });
  };
  const handleSubmit = async (): Promise<void> => {
    const newErrors: Record<string, string> = {};
    if (!formData.cityName.trim()) {
      newErrors.cityName = "validation.required";
    } else if (formData.cityName.trim().length > 255) {
      newErrors.cityName = "cities.validation.nameMax";
    }
    if (!formData.countryId) {
      newErrors.countryId = "cities.validation.countryRequired";
    }
    if (!formData.stateId) {
      newErrors.stateId = "cities.validation.stateRequired";
    }
    setGeneralError(undefined);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      scrollToFirstInvalidField();
      return;
    }
    try {
      await onUpdate({
        cityId,
        data: {
          name: formData.cityName.trim(),
          state_id: formData.stateId,
          country_id: formData.countryId,
        },
      });
      toast.success(t("cities.messages.updateSuccess"));
      setErrors({});
      onSuccess();
      onClose();
    } catch (error) {
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("cities.messages.updateFailed"),
        fields: ["cityName", "countryId", "stateId"],
        fieldMap: CITY_FIELD_MAP,
      });
      setErrors(fieldErrors);
      setGeneralError(generalMessage);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      if (Object.keys(fieldErrors).length > 0 || generalMessage) scrollToFirstInvalidField();
    }
  };
  const handleClose = (): void => {
    if (isUpdating) return;
    setFormData({
      cityName: "",
      countryId: 0,
      countryName: "",
      stateId: 0,
      stateName: "",
    });
    setErrors({});
    setGeneralError(undefined);
    onClose();
  };
  if (!isOpen) return null;
  const countryList =
    (countries as { data?: { id: number; name: string }[] })?.data ||
    (countries as { id: number; name: string }[]) ||
    [];
  const stateList =
    (states as { data?: { id: number; name: string }[] })?.data ||
    (states as { id: number; name: string }[]) ||
    [];
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("cities.editModal.title")}
      size="md"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isUpdating}>
            {t("cities.cancelBtn")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit}
            disabled={isUpdating || loading}
          >
            {isUpdating ? (
              <>
                <Loader2 className="w-4 h-4 me-2 animate-spin" />
                {t("common.saving")}
              </>
            ) : (
              <>
                <Check className="w-4 h-4 me-2" />
                {t("common.saveChanges")}
              </>
            )}
          </Button>
        </div>
      }
    >
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
        </div>
      ) : (
        <div className="space-y-5">
          <FormErrorAlert message={generalError} />
          <div className="p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">{t("cities.editModal.cityId")} </span>
            <span className="font-medium text-gray-900">{cityId}</span>
          </div>

          <div>
            <Label htmlFor="edit-city-name">
              {t("cities.addModal.cityName")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-city-name"
              placeholder={t("cities.editModal.cityNamePlaceholder")}
              value={formData.cityName}
              onChange={(e) => {
                setFormData({ ...formData, cityName: e.target.value });
                setErrors((prev) => {
                  const next = { ...prev };
                  delete next.cityName;
                  return next;
                });
              }}
              className="mt-1"
              error={!!errors.cityName}
              aria-invalid={!!errors.cityName}
            />
            <FieldError message={errors.cityName ? t(errors.cityName) : undefined} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-country">
                {t("cities.addModal.country")} <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.countryId ? formData.countryId.toString() : ""}
                onValueChange={handleCountryChange}
                disabled={loading}
              >
                <SelectTrigger id="edit-country" className="mt-1" error={!!errors.countryId} aria-invalid={!!errors.countryId}>
                  <SelectValue
                    placeholder={loading ? t("cities.addModal.loading") : t("cities.addModal.selectCountry")}
                  />
                </SelectTrigger>
                <SelectContent>
                  {countryList.map((country: { id: number; name: string }) => (
                    <SelectItem key={country.id} value={country.id.toString()}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.countryId ? t(errors.countryId) : undefined} />
            </div>
            <div>
              <Label htmlFor="edit-state">
                {t("cities.addModal.state")} <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.stateId ? formData.stateId.toString() : ""}
                onValueChange={handleStateChange}
                disabled={!formData.countryId || loading}
              >
                <SelectTrigger id="edit-state" className="mt-1" error={!!errors.stateId} aria-invalid={!!errors.stateId}>
                  <SelectValue
                    placeholder={
                      loading
                        ? t("cities.addModal.loading")
                        : !formData.countryId
                          ? t("cities.addModal.selectCountryFirst")
                          : t("cities.addModal.selectState")
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {stateList.map((state: { id: number; name: string }) => (
                    <SelectItem key={state.id} value={state.id.toString()}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.stateId ? t(errors.stateId) : undefined} />
            </div>
          </div>

        </div>
      )}
    </Modal>
  );
}