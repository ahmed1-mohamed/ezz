"use client";

import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { HelpCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { useAddCityData } from "@/hooks/use-add-city";
import { citySchema, type CityInput } from "@/validators/city.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const CITY_FIELD_MAP: Record<string, keyof CityInput> = {
  city_name: "name",
  country: "country_id",
  state: "state_id",
};

interface AddCityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CityInput) => void | Promise<any>;
  isPending?: boolean;
}

export function AddCityModal({
  isOpen,
  onClose,
  onSubmit,
  isPending = false,
}: AddCityModalProps) {
  const { countries, states, loading, loadStates } = useAddCityData(isOpen);
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm<CityInput>({
    resolver: zodResolver(citySchema),
    defaultValues: {
      name: "",
      country_id: undefined,
      state_id: undefined,
    },
  });
  const selectedCountryId = watch("country_id");
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);
  const handleCountryChange = async (val: string) => {
    const countryId = Number(val);
    setValue("country_id", countryId, { shouldValidate: true });
    setValue("state_id", 0);
    const country = countries.find((c) => c.id === countryId);
    if (country) {
      await loadStates(country.name);
    }
  };
  const handleClose = () => {
    if (isPending) return;
    reset();
    onClose();
  };
  const onSubmitForm = async (data: CityInput) => {
    try {
      await onSubmit(data);
      toast.success(t("cities.messages.createSuccess"));
      reset();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: CITY_FIELD_MAP,
        fallbackMessage: t("cities.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={
        <div className="flex items-center gap-1 text-xl font-bold">
          {t("cities.addModal.titleAdd")}{" "}
          <span className="text-gray-900 px-1 rounded">
            {t("cities.addModal.titleCity")}
          </span>
        </div>
      }
      size="md"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isPending}>
            {t("cities.addModal.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
            onClick={handleSubmit(onSubmitForm)}
            disabled={isPending}
          >
            {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            {isPending ? t("cities.addModal.adding") : t("cities.addModal.addCity")}
          </Button>
        </div>
      }
    >
      <form noValidate onSubmit={handleSubmit(onSubmitForm)} className="space-y-5">
        <FormErrorAlert message={errors.root?.server?.message} />
        <div className="space-y-1">
          <Label htmlFor="city-name" className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
            {t("cities.addModal.cityName")} <span className="text-red-500">*</span>
            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
          </Label>
          <Input
            id="city-name"
            placeholder={t("cities.addModal.cityNamePlaceholder")}
            {...register("name")}
            className="bg-gray-50/50"
            error={!!errors.name}
            aria-invalid={!!errors.name}
          />
          <FieldError message={errors.name?.message ? t(errors.name.message) : undefined} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="country" className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
            {t("cities.addModal.country")} <span className="text-red-500">*</span>
            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
          </Label>
          <Controller
            name="country_id"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value ? field.value.toString() : ""}
                onValueChange={handleCountryChange}
                disabled={loading}
              >
                <SelectTrigger id="country" ref={field.ref} className="bg-gray-50/50" error={!!errors.country_id} aria-invalid={!!errors.country_id}>
                  <SelectValue
                    placeholder={loading ? t("cities.addModal.loading") : t("cities.addModal.selectCountry")}
                  />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.id} value={country.id.toString()}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.country_id?.message ? t(errors.country_id.message) : undefined} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="state" className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
            {t("cities.addModal.state")} <span className="text-red-500">*</span>
            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
          </Label>
          <Controller
            name="state_id"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value ? field.value.toString() : ""}
                onValueChange={(val) => field.onChange(Number(val))}
                disabled={!selectedCountryId}
              >
                <SelectTrigger id="state" ref={field.ref} className="bg-gray-50/50" error={!!errors.state_id} aria-invalid={!!errors.state_id}>
                  <SelectValue
                    placeholder={
                      !selectedCountryId
                        ? t("cities.addModal.selectCountryFirst")
                        : t("cities.addModal.selectState")
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.id} value={state.id.toString()}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.state_id?.message ? t(errors.state_id.message) : undefined} />
        </div>
      </form>
    </Modal>
  );
}