"use client";

import { Controller } from "react-hook-form";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Navigation, Landmark, FileText, Loader2, Search } from "lucide-react";
import { useAddLocationForm } from "./hooks";
import { useLanguage } from "@/contexts/LanguageContext";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOUNDARY_FIELDS = [
  { name: "northSide", label: "locations.form.northSide", placeholder: "locations.form.northSidePlaceholder" },
  { name: "southSide", label: "locations.form.southSide", placeholder: "locations.form.southSidePlaceholder" },
  { name: "eastSide", label: "locations.form.eastSide", placeholder: "locations.form.eastSidePlaceholder" },
  { name: "westSide", label: "locations.form.westSide", placeholder: "locations.form.westSidePlaceholder" },
] as const;

export function AddLocationModal({ isOpen, onClose }: AddLocationModalProps) {
  const { t } = useLanguage();
  const {
    methods,
    cities,
    areas,
    isLoadingCities,
    isLoadingAreas,
    isProcessing,
    isAddingLocation,
    handleExtractLocation,
    onSubmit,
    handleClose,
  } = useAddLocationForm(isOpen, onClose);

  const { register, control, formState: { errors }, handleSubmit, watch } = methods;
  const googleMapLinkValue = watch("googleMapLink");

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("locations.addNewLocation")}
      size="lg"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isAddingLocation}>
            {t("common.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit(onSubmit)}
            disabled={isAddingLocation || isProcessing}
          >
            {isAddingLocation ? (
              <>
                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                {t("locations.form.adding")}
              </>
            ) : (
              t("locations.addNewLocation")
            )}
          </Button>
        </div>
      }
    >
      <div className="space-y-6 max-h-[70vh] overflow-y-auto pe-2">
        <FormErrorAlert message={errors.root?.server?.message} />

        <div>
          <Label htmlFor="location-name">
            {t("locations.form.locationName")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="location-name"
            placeholder={t("locations.form.locationNamePlaceholder")}
            {...register("locationName")}
            error={!!errors.locationName}
            aria-invalid={!!errors.locationName}
            className="mt-1"
          />
          <FieldError message={errors.locationName?.message} />
        </div>

        <div>
          <Label htmlFor="google-map-link">
            {t("locations.form.googleMapLink")} <span className="text-red-500">*</span>
          </Label>
          <div className="flex gap-2 mt-1">
            <div className="relative flex-1">
              <MapPin className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="google-map-link"
                type="url"
                dir="ltr"
                placeholder={t("locations.form.googleMapLinkPlaceholder")}
                {...register("googleMapLink")}
                error={!!errors.googleMapLink}
                aria-invalid={!!errors.googleMapLink}
                className="ps-10"
              />
            </div>
            <Button
              type="button"
              onClick={handleExtractLocation}
              disabled={!googleMapLinkValue?.trim() || isProcessing}
              className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
            >
              {isProcessing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Search className="h-4 w-4 me-2" />
                  {t("locations.form.extract")}
                </>
              )}
            </Button>
          </div>
          <FieldError message={errors.googleMapLink?.message} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">
              {t("locations.form.city")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="cityId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <SelectTrigger id="city" ref={field.ref} className="mt-1" error={!!errors.cityId} aria-invalid={!!errors.cityId}>
                    <SelectValue placeholder={isLoadingCities ? t("locations.form.loadingCities") : t("locations.form.selectCity")} />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.cityId?.message} />
          </div>

          <div>
            <Label htmlFor="area">
              {t("locations.form.area")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="areaId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value || ""} disabled={!watch("cityId")}>
                  <SelectTrigger id="area" ref={field.ref} className="mt-1" error={!!errors.areaId} aria-invalid={!!errors.areaId}>
                    <SelectValue placeholder={isLoadingAreas ? t("locations.form.loadingAreas") : watch("cityId") ? t("locations.form.selectArea") : t("locations.form.selectCityFirst")} />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area) => (
                      <SelectItem key={area.value} value={area.value}>{area.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.areaId?.message} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div>
            <Label htmlFor="latitude">{t("locations.form.latitude")}</Label>
            <div className="relative mt-1">
              <Navigation className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="latitude"
                inputMode="decimal"
                dir="ltr"
                placeholder={t("locations.form.latitudePlaceholder")}
                {...register("latitude")}
                error={!!errors.latitude}
                aria-invalid={!!errors.latitude}
                className="ps-10"
              />
            </div>
            <FieldError message={errors.latitude?.message} />
          </div>
          <div>
            <Label htmlFor="longitude">{t("locations.form.longitude")}</Label>
            <div className="relative mt-1">
              <Navigation className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="longitude"
                inputMode="decimal"
                dir="ltr"
                placeholder={t("locations.form.longitudePlaceholder")}
                {...register("longitude")}
                error={!!errors.longitude}
                aria-invalid={!!errors.longitude}
                className="ps-10"
              />
            </div>
            <FieldError message={errors.longitude?.message} />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
            <Navigation className="h-4 w-4" /> {t("locations.form.locationBoundaries")}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {BOUNDARY_FIELDS.map(({ name, label, placeholder }) => (
              <div key={name}>
                <Label htmlFor={name}>{t(label)}</Label>
                <Input
                  id={name}
                  placeholder={t(placeholder)}
                  {...register(name)}
                  error={!!errors[name]}
                  aria-invalid={!!errors[name]}
                  className="mt-1"
                />
                <FieldError message={errors[name]?.message} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="landmark">
            {t("locations.form.nearestLandmark")} <span className="text-gray-400 font-normal">{t("locations.form.optional")}</span>
          </Label>
          <div className="relative mt-1">
            <Landmark className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="landmark"
              placeholder={t("locations.form.landmarkPlaceholder")}
              {...register("landmark")}
              error={!!errors.landmark}
              aria-invalid={!!errors.landmark}
              className="ps-10"
            />
          </div>
          <FieldError message={errors.landmark?.message} />
        </div>

        <div>
          <Label htmlFor="description">
            {t("locations.form.locationDescription")} <span className="text-gray-400 font-normal">{t("locations.form.optional")}</span>
          </Label>
          <div className="relative mt-1">
            <FileText className="absolute start-3 top-3 h-4 w-4 text-gray-400" />
            <Textarea
              id="description"
              placeholder={t("locations.form.descriptionPlaceholder")}
              {...register("description")}
              error={!!errors.description}
              aria-invalid={!!errors.description}
              className="ps-10 min-h-[100px]"
            />
          </div>
          <FieldError message={errors.description?.message} />
        </div>
      </div>
    </Modal>
  );
}
