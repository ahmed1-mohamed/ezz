"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Building, ChevronRight, Home, Loader2, MapPin, Save, Search, Trash2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RichTextEditor } from "@/components/ui";
import { UserSelect } from "@/components/shared/user-select";
import { usePropertySubtypes, usePropertyTypes } from "@/hooks/use-property-data";
import useExpandUrl from "@/hooks/use-expand-url";
import useGetLocationDetails from "@/hooks/use-get-location-details";
import { resolveGoogleMapsUrl } from "@/lib/maps/parse-map-url";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { CascadingLocationSelect, type CascadingLocationValue } from "@/components/shared/location/CascadingLocationSelect";
import { useCountriesSelect } from "@/hooks/use-countries-select";
import { countryKeyFromIso, countrySearchKey, resolveLocationByNames } from "@/lib/locations/matched-locations";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseApiError } from "@/lib/api-errors";
import { ROOT_SERVER_ERROR, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { FormErrorAlert } from "@/components/ui/form-message";
import { cn } from "@/lib/utils";
import { READY_UNIT_DEFAULTS, readyUnitCreateSchema, readyUnitSchema, type ReadyUnitFormValues } from "../schema";
import { buildReadyUnitFormData } from "../utils";
import { useSaveReadyUnit } from "../hooks";
import { PAYMENT_TYPES, type ReadyUnitMedia } from "../types";
import { useReadyMarketBasePath } from "../use-base-path";

const MAX_IMAGES = 10;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const AMENITIES_PREVIEW = 8;

/** Form fields, for matching backend validation errors (see `buildReadyUnitFormData`). */
const READY_UNIT_FIELDS = Object.keys(readyUnitSchema.shape);
const IMAGES_FIELD = "medias";

/** Backend keys (`location[x]` / `location.x`, `payment_plan[x]`) → form field. */
const READY_UNIT_FIELD_MAP: Record<string, string> = Object.fromEntries(
  (
    [
      ["location", "google_map_link", "google_map_link"],
      ["location", "latitude", "latitude"],
      ["location", "longitude", "longitude"],
      ["location", "city_id", "city"],
      ["location", "area_id", "area"],
      ["location", "description", "address"],
      ["location", "landmark", "address"],
      ["payment_plan", "name", "payment_name"],
      ["payment_plan", "payment_type", "payment_type"],
      ["payment_plan", "total_cost", "payment_total_cost"],
      ["payment_plan", "intervals", "payment_intervals"],
      ["payment_plan", "down_payment_price", "payment_down_payment"],
      ["payment_plan", "description", "payment_description"],
    ] as const
  ).flatMap(([group, key, field]) => [
    [`${group}.${key}`, field],
    [`${group}[${key}]`, field],
  ])
);
Object.assign(READY_UNIT_FIELD_MAP, {
  features: "feature_ids",
  medias: IMAGES_FIELD,
  "medias[]": IMAGES_FIELD,
});

interface ReadyUnitFormProps {
  unitId?: number;
  initialValues?: Partial<ReadyUnitFormValues>;
  existingMedias?: ReadyUnitMedia[];
}

const card = "rounded-xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900";
const label = "mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300";
const inputCls = "h-10 bg-gray-50 text-xs dark:bg-neutral-800";
const thumbCard = "relative w-[110px] rounded-lg bg-gray-100 p-2.5 dark:bg-neutral-800";

function FieldError({ message }: { message?: string }) {
  const { t } = useLanguage();
  return message ? (
    <p role="alert" data-field-error="" className="mt-1 text-[11px] text-red-500">
      {t(message)}
    </p>
  ) : null;
}

function Required() {
  return <span className="text-red-500"> *</span>;
}

export function ReadyUnitForm({ unitId, initialValues, existingMedias = [] }: ReadyUnitFormProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const basePath = useReadyMarketBasePath();
  const isEdit = unitId !== undefined;
  const save = useSaveReadyUnit(unitId);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<ReadyUnitFormValues>({
    resolver: zodResolver(isEdit ? readyUnitSchema : readyUnitCreateSchema),
    defaultValues: { ...READY_UNIT_DEFAULTS, ...initialValues } as ReadyUnitFormValues,
  });

  const listingType = watch("listing_type");
  const propertyTypeId = watch("property_type_id");
  const paymentType = watch("payment_type");
  const featureIds = watch("feature_ids");
  const city = watch("city");

  const { data: types = [] } = usePropertyTypes();
  const { data: subtypes = [] } = usePropertySubtypes();
  const typeSubtypes = useMemo(() => {
    const filtered = subtypes.filter((s: any) => String(s.property_type_id) === propertyTypeId);
    return filtered.length > 0 || !propertyTypeId ? filtered : subtypes;
  }, [subtypes, propertyTypeId]);

  const { data: features = [] } = useQuery({
    queryKey: ["available-features"],
    queryFn: () => AdminPropertiesService.getAvailableFeatures(),
    staleTime: 5 * 60 * 1000,
  });
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const visibleFeatures = showAllAmenities ? features : features.slice(0, AMENITIES_PREVIEW);

  // Country → City → Area. The form keeps submitting names (location[city_id] / location[area_id]);
  // ids from the search are kept here so the area search can be narrowed to the chosen city.
  const area = watch("area");
  const country = watch("country");
  const [locationIds, setLocationIds] = useState<{ country?: number | string | null; city?: number | string | null; area?: number | string | null }>({});
  const locationValue: CascadingLocationValue = {
    country: country ? { id: locationIds.country, name: country } : null,
    city: city ? { id: locationIds.city, name: city } : null,
    area: area ? { id: locationIds.area, name: area } : null,
  };
  const { countries } = useCountriesSelect();
  const [openAreaSignal, setOpenAreaSignal] = useState(0);
  const handleLocationChange = (next: CascadingLocationValue) => {
    setLocationIds({ country: next.country?.id, city: next.city?.id, area: next.area?.id });
    setValue("country", next.country?.name ?? "", { shouldDirty: true });
    setValue("city", next.city?.name ?? "", { shouldValidate: true, shouldDirty: true });
    setValue("area", next.area?.name ?? "", { shouldValidate: true, shouldDirty: true });
  };

  // Location lookup from a Google Maps link (same flow as the project form).
  const { expandUrl } = useExpandUrl();
  const { getLocationDetails } = useGetLocationDetails();
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const handleFetchLocation = async () => {
    const url = watch("google_map_link")?.trim();
    if (!url) {
      toast.error(t("readyMarket.form.mapLinkRequired"));
      return;
    }
    setIsFetchingLocation(true);
    try {
      const coords = (await resolveGoogleMapsUrl(url)) || (await expandUrl(url));
      if (!coords) {
        toast.error(t("readyMarket.form.locationExtractFailed"));
        return;
      }
      setValue("latitude", Number(coords.lat.toFixed(6)), { shouldValidate: true });
      setValue("longitude", Number(coords.lng.toFixed(6)), { shouldValidate: true });

      const geo = await getLocationDetails({ lat: coords.lat, lng: coords.lng }).catch(() => null);
      const result = geo?.results?.[0];
      if (result) {
        const component = (...kinds: string[]) =>
          result.address_components.find((c) => kinds.some((k) => c.types.includes(k)));
        if (!watch("address")) setValue("address", result.formatted_address);

        // Match Google's names to the system's country / city / area, then let the user pick the area.
        const googleCountry = component("country");
        const countryKey = countryKeyFromIso(googleCountry?.short_name) ?? countrySearchKey(googleCountry?.long_name);
        if (countryKey) {
          const countryOption = countries.find(
            (c: { country_id: number; country_name: string }) => countrySearchKey(c.country_name) === countryKey
          );
          const countryRef = countryOption
            ? { id: countryOption.country_id, name: countryOption.country_name }
            : { name: googleCountry?.long_name ?? countryKey };
          const cityRef = await resolveLocationByNames(countryKey, "city", [
            component("locality")?.long_name,
            component("administrative_area_level_2")?.long_name,
            component("administrative_area_level_1")?.long_name,
          ]);
          const areaRef = cityRef
            ? await resolveLocationByNames(
                countryKey,
                "area",
                [
                  component("sublocality_level_1")?.long_name,
                  component("sublocality")?.long_name,
                  component("neighborhood")?.long_name,
                ],
                cityRef.id,
                true
              )
            : null;
          handleLocationChange({ country: countryRef, city: cityRef, area: areaRef });
          if (cityRef && !areaRef) {
            toast.info(t("readyMarket.form.selectAreaAfterFetch"));
            setOpenAreaSignal((n) => n + 1);
          } else if (!cityRef) {
            toast.info(t("readyMarket.form.selectCityAfterFetch"));
          }
        }
      }
      toast.success(t("readyMarket.form.locationExtracted"));
    } catch {
      toast.error(t("readyMarket.form.locationExtractFailed"));
    } finally {
      setIsFetchingLocation(false);
    }
  };

  // Images: new files are uploaded with the form (medias[]); existing ones are shown read-only.
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [imagesError, setImagesError] = useState<string | null>(null);
  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);
  useEffect(() => () => imagesRef.current.forEach((img) => URL.revokeObjectURL(img.url)), []);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const files = Array.from(fileList);
    const valid = files.filter((f) => f.type.startsWith("image/") && f.size <= MAX_IMAGE_BYTES);
    if (valid.length < files.length) toast.error(t("readyMarket.form.imageRejected"));
    const room = MAX_IMAGES - images.length;
    if (valid.length > room) toast.error(t("readyMarket.form.maxImages", { max: MAX_IMAGES }));
    const next = valid.slice(0, Math.max(0, room)).map((file) => ({ file, url: URL.createObjectURL(file) }));
    if (next.length > 0) {
      setImages((prev) => [...prev, ...next]);
      setImagesError(null);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const onSubmit = async (values: ReadyUnitFormValues, e?: React.BaseSyntheticEvent) => {
    if (!isEdit && images.length === 0) {
      setImagesError("readyMarket.form.imagesRequired");
      toast.error(t("readyMarket.form.imagesRequired"));
      scrollToFirstInvalidField(e?.target ?? null);
      return;
    }
    try {
      await save.mutateAsync(
        buildReadyUnitFormData(
          values,
          images.map((i) => i.file)
        )
      );
      toast.success(t(isEdit ? "readyMarket.messages.updateSuccess" : "readyMarket.messages.createSuccess"));
      // After create, go back to the table (the list query is invalidated, so it shows the new unit).
      router.push(isEdit ? `${basePath}/${unitId}` : basePath);
    } catch (error) {
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t(isEdit ? "readyMarket.messages.updateFailed" : "readyMarket.messages.createFailed"),
        fields: [...READY_UNIT_FIELDS, IMAGES_FIELD],
        fieldMap: READY_UNIT_FIELD_MAP,
      });
      const { [IMAGES_FIELD]: imagesMessage, ...formFieldErrors } = fieldErrors;
      if (imagesMessage) setImagesError(imagesMessage);
      Object.entries(formFieldErrors).forEach(([field, message]) => {
        setError(field as keyof ReadyUnitFormValues, { type: "server", message });
      });
      if (generalMessage) {
        setError(ROOT_SERVER_ERROR, { type: "server", message: generalMessage });
      }
      if (imagesMessage || Object.keys(formFieldErrors).length > 0 || generalMessage) {
        scrollToFirstInvalidField();
      }
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const onInvalid = () => toast.error(t("readyMarket.form.fixErrors"));

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1.5">
          <nav className="flex items-center gap-1 text-xs text-gray-500">
            <Home className="h-3.5 w-3.5" />
            <span>{t("readyMarket.breadcrumb.home")}</span>
            <ChevronRight className="h-3 w-3 rtl:rotate-180" />
            <Link href={basePath} prefetch={false} className="hover:text-[#007b78]">
              {t("readyMarket.title")}
            </Link>
            <ChevronRight className="h-3 w-3 rtl:rotate-180" />
            <span className="text-gray-700 dark:text-gray-300">
              {t(isEdit ? "readyMarket.form.editBreadcrumb" : "readyMarket.form.createBreadcrumb")}
            </span>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => router.back()} aria-label={t("common.back")}>
              <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-200 rtl:rotate-180" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {t(isEdit ? "readyMarket.form.editTitle" : "readyMarket.form.createTitle")}
            </h1>
          </div>
        </div>
        <button
          type="submit"
          disabled={save.isPending}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#007b78] px-4 text-xs font-medium text-white hover:bg-[#006664] disabled:opacity-60"
        >
          {save.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {t(isEdit ? "common.save" : "readyMarket.form.create")}
        </button>
      </div>

      <FormErrorAlert message={errors.root?.server?.message} />

      {/* Basic information */}
      <section className={cn(card, "space-y-4")}>
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.form.basicInfo")}</h2>

        <div>
          <span className={label}>
            {t("readyMarket.form.listingType")}
            <Required />
          </span>
          <div className="grid grid-cols-2 gap-3">
            {(["rent", "sale"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setValue("listing_type", type, { shouldValidate: true })}
                className={cn(
                  "flex h-10 items-center justify-center gap-2 rounded-lg border text-xs transition-colors",
                  listingType === type
                    ? "border-[#007b78] bg-teal-50 text-[#007b78] dark:bg-teal-950/40"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-300"
                )}
              >
                {type === "rent" ? <Building className="h-4 w-4" /> : <Home className="h-4 w-4" />}
                {t(type === "rent" ? "readyMarket.form.forRent" : "readyMarket.form.forSale")}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="property_name" className={label}>
            {t("readyMarket.form.propertyTitle")}
            <Required />
          </label>
          <Input id="property_name" {...register("property_name")} error={!!errors.property_name} aria-invalid={!!errors.property_name} placeholder={t("readyMarket.form.propertyTitlePlaceholder")} className={inputCls} />
          <FieldError message={errors.property_name?.message} />
        </div>

        <div>
          <span className={label}>
            {t("readyMarket.form.description")}
            <Required />
          </span>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <RichTextEditor
                content={field.value}
                onChange={field.onChange}
                placeholder={t("readyMarket.form.descriptionPlaceholder")}
                error={!!errors.description}
              />
            )}
          />
          <FieldError message={errors.description?.message} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <span className={label}>
              {t("readyMarket.form.unitType")}
              <Required />
            </span>
            <Controller
              control={control}
              name="property_type_id"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(v) => {
                    field.onChange(v);
                    setValue("property_subtype_id", "");
                  }}
                >
                  <SelectTrigger
                    className={inputCls}
                    error={!!errors.property_type_id}
                    aria-invalid={!!errors.property_type_id}
                  >
                    <SelectValue placeholder={t("readyMarket.form.selectType")} />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type.id} value={String(type.id)}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.property_type_id?.message} />
          </div>
          <div>
            <span className={label}>
              {t("readyMarket.form.unitSubType")}
              <Required />
            </span>
            <Controller
              control={control}
              name="property_subtype_id"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={inputCls}
                    error={!!errors.property_subtype_id}
                    aria-invalid={!!errors.property_subtype_id}
                  >
                    <SelectValue placeholder={t("readyMarket.form.selectType")} />
                  </SelectTrigger>
                  <SelectContent>
                    {typeSubtypes.map((subtype: any) => (
                      <SelectItem key={subtype.id} value={String(subtype.id)}>
                        {subtype.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.property_subtype_id?.message} />
          </div>

          <div>
            <label htmlFor="price" className={label}>
              {t("readyMarket.form.totalPrice")}
              <Required />
            </label>
            <Input id="price" type="number" dir="ltr" min="0" step="any" {...register("price", { valueAsNumber: true })} error={!!errors.price} aria-invalid={!!errors.price} className={inputCls} />
            <FieldError message={errors.price?.message} />
          </div>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="size" className={label}>
              {t("readyMarket.form.unitSize")}
              <Required />
            </label>
            <Input id="size" type="number" dir="ltr" min="0" step="any" {...register("size", { valueAsNumber: true })} error={!!errors.size} aria-invalid={!!errors.size} className={inputCls} />
            <FieldError message={errors.size?.message} />
          </div>
          <div>
            <label htmlFor="bedrooms" className={label}>
              {t("readyMarket.form.bedrooms")}
              <Required />
            </label>
            <Input id="bedrooms" type="number" dir="ltr" min="0" {...register("bedrooms", { valueAsNumber: true })} error={!!errors.bedrooms} aria-invalid={!!errors.bedrooms} className={inputCls} />
            <FieldError message={errors.bedrooms?.message} />
          </div>
          <div>
            <label htmlFor="bathrooms" className={label}>
              {t("readyMarket.form.bathrooms")}
              <Required />
            </label>
            <Input id="bathrooms" type="number" dir="ltr" min="0" {...register("bathrooms", { valueAsNumber: true })} error={!!errors.bathrooms} aria-invalid={!!errors.bathrooms} className={inputCls} />
            <FieldError message={errors.bathrooms?.message} />
          </div>
          <div>
            <label htmlFor="floor" className={label}>
              {t("readyMarket.form.floor")}
              <Required />
            </label>
            <Input
              id="floor"
              type="number"
              dir="ltr"
              min="0"
              step="1"
              inputMode="numeric"
              {...register("floor", { valueAsNumber: true })} error={!!errors.floor} aria-invalid={!!errors.floor}
              placeholder={t("readyMarket.form.floorPlaceholder")}
              className={inputCls}
            />
            <FieldError message={errors.floor?.message} />
          </div>
          <div>
            <label htmlFor="view" className={label}>
              {t("readyMarket.form.view")}
            </label>
            <Input id="view" {...register("view")} error={!!errors.view} aria-invalid={!!errors.view} placeholder={t("readyMarket.form.view")} className={inputCls} />
            <FieldError message={errors.view?.message} />
          </div>
          <div>
            <label htmlFor="year_built" className={label}>
              {t("readyMarket.form.yearBuilt")}
            </label>
            <Input id="year_built" {...register("year_built")} error={!!errors.year_built} aria-invalid={!!errors.year_built} placeholder="1997" className={inputCls} />
            <FieldError message={errors.year_built?.message} />
          </div>
        </div>

        <div>
          <span className={label}>{t("readyMarket.form.amenities")}</span>
          <div className="flex flex-wrap gap-2">
            {visibleFeatures.map((feature) => {
              const active = featureIds.includes(feature.feature_id);
              return (
                <button
                  key={feature.feature_id}
                  type="button"
                  onClick={() =>
                    setValue(
                      "feature_ids",
                      active ? featureIds.filter((id) => id !== feature.feature_id) : [...featureIds, feature.feature_id]
                    )
                  }
                  className={cn(
                    "rounded-md border px-2.5 py-1 text-[11px] transition-colors",
                    active
                      ? "border-[#007b78] bg-[#007b78] text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200"
                  )}
                >
                  {feature.feature_name}
                </button>
              );
            })}
          </div>
          {features.length > AMENITIES_PREVIEW && (
            <button
              type="button"
              onClick={() => setShowAllAmenities((v) => !v)}
              className="mt-2 text-xs font-medium text-[#007b78] hover:underline"
            >
              {t(showAllAmenities ? "readyMarket.form.showLess" : "readyMarket.form.viewAll")}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <span className={label}>
              {t("readyMarket.form.seller")}
              <Required />
            </span>
            <Controller
              control={control}
              name="user_id"
              render={({ field }) => (
                <UserSelect selectedId={field.value ?? null} onChange={field.onChange} hasError={!!errors.user_id} />
              )}
            />
            <FieldError message={errors.user_id?.message} />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              {t("readyMarket.form.email")}
              <Required />
            </label>
            <Input id="email" type="email" dir="ltr" {...register("email")} error={!!errors.email} aria-invalid={!!errors.email} placeholder={t("readyMarket.form.emailPlaceholder")} className={inputCls} />
            <FieldError message={errors.email?.message} />
          </div>
          <div>
            <label htmlFor="whatsapp_number" className={label}>
              {t("readyMarket.form.whatsapp")}
              <Required />
            </label>
            <Input id="whatsapp_number" dir="ltr" {...register("whatsapp_number")} error={!!errors.whatsapp_number} aria-invalid={!!errors.whatsapp_number} placeholder={t("readyMarket.form.phonePlaceholder")} className={inputCls} />
            <FieldError message={errors.whatsapp_number?.message} />
          </div>
          <div>
            <label htmlFor="phone_number" className={label}>
              {t("readyMarket.form.phone")}
              <Required />
            </label>
            <Input id="phone_number" dir="ltr" {...register("phone_number")} error={!!errors.phone_number} aria-invalid={!!errors.phone_number} placeholder={t("readyMarket.form.phonePlaceholder")} className={inputCls} />
            <FieldError message={errors.phone_number?.message} />
          </div>
        </div>
      </section>

      {/* Payment plan */}
      <section className={cn(card, "space-y-4")}>
        <div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.form.paymentPlan")}</h2>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{t("readyMarket.form.paymentPlanHint")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <span className={label}>{t("readyMarket.form.paymentMethod")}</span>
            <Controller
              control={control}
              name="payment_type"
              render={({ field }) => (
                <Select value={field.value || "none"} onValueChange={(v) => field.onChange(v === "none" ? "" : v)}>
                  <SelectTrigger className={inputCls}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">{t("readyMarket.form.noPaymentMethod")}</SelectItem>
                    {PAYMENT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {t(`readyMarket.paymentTypes.${type}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {paymentType === "installments" && (
            <>
              <div>
                <label htmlFor="payment_intervals" className={label}>
                  {t("readyMarket.form.installmentsCount")}
                  <Required />
                </label>
                <Input
                  id="payment_intervals"
                  type="number"
                  dir="ltr"
                  min="1"
                  {...register("payment_intervals", { valueAsNumber: true })} error={!!errors.payment_intervals} aria-invalid={!!errors.payment_intervals}
                  className={inputCls}
                />
                <FieldError message={errors.payment_intervals?.message} />
              </div>
              <div>
                <label htmlFor="payment_down_payment" className={label}>
                  {t("readyMarket.form.downPayment")}
                  <Required />
                </label>
                <Input
                  id="payment_down_payment"
                  type="number"
                  dir="ltr"
                  min="0"
                  step="any"
                  {...register("payment_down_payment", { valueAsNumber: true })} error={!!errors.payment_down_payment} aria-invalid={!!errors.payment_down_payment}
                  className={inputCls}
                />
                <FieldError message={errors.payment_down_payment?.message} />
              </div>
            </>
          )}

          {paymentType && (
            <>
              <div>
                <label htmlFor="payment_name" className={label}>
                  {t("readyMarket.form.paymentPlanName")}
                </label>
                <Input
                  id="payment_name"
                  maxLength={255}
                  {...register("payment_name")} error={!!errors.payment_name} aria-invalid={!!errors.payment_name}
                  placeholder={t("readyMarket.form.paymentPlanNamePlaceholder")}
                  className={inputCls}
                />
                <FieldError message={errors.payment_name?.message} />
              </div>
              <div>
                <label htmlFor="payment_total_cost" className={label}>
                  {t("readyMarket.form.paymentPlanTotalCost")}
                </label>
                <Input
                  id="payment_total_cost"
                  type="number"
                  dir="ltr"
                  min="0"
                  step="any"
                  {...register("payment_total_cost", { valueAsNumber: true })} error={!!errors.payment_total_cost} aria-invalid={!!errors.payment_total_cost}
                  placeholder={t("readyMarket.form.paymentPlanTotalCostPlaceholder")}
                  className={inputCls}
                />
                <FieldError message={errors.payment_total_cost?.message} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="payment_description" className={label}>
                  {t("readyMarket.form.paymentPlanDescription")}
                </label>
                <Textarea
                  id="payment_description"
                  rows={3}
                  {...register("payment_description")} error={!!errors.payment_description} aria-invalid={!!errors.payment_description}
                  placeholder={t("readyMarket.form.paymentPlanDescriptionPlaceholder")}
                  className="bg-gray-50 text-xs dark:bg-neutral-800"
                />
                <FieldError message={errors.payment_description?.message} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Location */}
      <section className={cn(card, "space-y-4")}>
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.form.location")}</h2>
        <div>
          <label htmlFor="google_map_link" className={label}>
            {t("readyMarket.form.mapLink")}
            <Required />
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                id="google_map_link"
                dir="ltr"
                {...register("google_map_link")} error={!!errors.google_map_link} aria-invalid={!!errors.google_map_link}
                placeholder="https://maps.google.com"
                className={cn(inputCls, "ps-9")}
              />
            </div>
            <button
              type="button"
              onClick={handleFetchLocation}
              disabled={isFetchingLocation}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#7c3aed] px-4 text-xs font-medium text-white hover:bg-[#6d28d9] disabled:opacity-60"
            >
              {isFetchingLocation && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("readyMarket.form.fetchData")}
            </button>
          </div>
          <FieldError message={errors.google_map_link?.message} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="latitude" className={label}>
              {t("readyMarket.form.latitude")}
              <Required />
            </label>
            <Input id="latitude" type="number" dir="ltr" step="any" {...register("latitude", { valueAsNumber: true })} error={!!errors.latitude} aria-invalid={!!errors.latitude} className={inputCls} />
            <FieldError message={errors.latitude?.message} />
          </div>
          <div>
            <label htmlFor="longitude" className={label}>
              {t("readyMarket.form.longitude")}
              <Required />
            </label>
            <Input id="longitude" type="number" dir="ltr" step="any" {...register("longitude", { valueAsNumber: true })} error={!!errors.longitude} aria-invalid={!!errors.longitude} className={inputCls} />
            <FieldError message={errors.longitude?.message} />
          </div>
        </div>
        <CascadingLocationSelect
          idPrefix="ready-unit"
          value={locationValue}
          onChange={handleLocationChange}
          required={{ country: true, city: true, area: true }}
          errors={{
            city: errors.city?.message ? t(errors.city.message) : undefined,
            area: errors.area?.message ? t(errors.area.message) : undefined,
          }}
          labelClassName={label}
          triggerClassName={inputCls}
          openAreaSignal={openAreaSignal}
        />
        <div className="sm:w-1/2">
          <label htmlFor="address" className={label}>
            {t("readyMarket.form.fullAddress")}
          </label>
          <Input id="address" {...register("address")} error={!!errors.address} aria-invalid={!!errors.address} placeholder={t("readyMarket.form.fullAddressPlaceholder")} className={inputCls} />
          <FieldError message={errors.address?.message} />
        </div>
      </section>

      {/* Images */}
      <section className={cn(card, "space-y-4")}>
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.form.unitImages")}</h2>
        <div>
          <span className={label}>
            {t("readyMarket.form.unitImages")}
            {!isEdit && <Required />}
          </span>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              addFiles(e.dataTransfer.files);
            }}
            aria-invalid={!!imagesError || undefined}
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed px-4 py-8 text-center transition-colors",
              imagesError
                ? "border-red-400 bg-red-50/40 dark:bg-red-950/20"
                : isDragging
                  ? "border-[#007b78] bg-teal-50/60 dark:bg-teal-950/30"
                  : "border-gray-300 bg-gray-50 hover:bg-gray-100/70 dark:border-neutral-700 dark:bg-neutral-800/60"
            )}
          >
            <Upload className="mb-1 h-5 w-5 text-gray-600 dark:text-gray-300" />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-700 dark:text-gray-200">{t("readyMarket.form.uploadClick")}</span>{" "}
              {t("readyMarket.form.uploadDrag")}
            </p>
            <p className="text-[11px] text-gray-500">{t("readyMarket.form.uploadLimits", { max: MAX_IMAGES })}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-300">
              <Search className="h-3 w-3" />
              {t("readyMarket.form.browse")}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                addFiles(e.target.files);
                e.target.value = "";
              }}
            />
          </div>
          <FieldError message={imagesError ?? undefined} />
        </div>

        {(existingMedias.length > 0 || images.length > 0) && (
          <div className="flex flex-wrap gap-3">
            {existingMedias.map((media) => (
              <div key={`existing-${media.media_id}`} className={thumbCard}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image src={media.media_url} alt={t("readyMarket.form.unitImage")} fill sizes="110px" className="object-cover" unoptimized />
                </div>
              </div>
            ))}
            {images.map((image, index) => (
              <div key={image.url} className={thumbCard}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image src={image.url} alt={image.file.name} fill sizes="110px" className="object-cover" unoptimized />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  aria-label={t("common.delete")}
                  className="absolute end-1 top-1 text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </form>
  );
}
