"use client";

import { FieldError } from "@/components/ui/form-message";
import { useState, useCallback, useEffect, useRef } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Loader2 } from "lucide-react";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { InteractiveMapPicker, LocationSelectedData } from "@/components/shared/InteractiveMapPicker";
import { resolveGoogleMapsUrl, isValidLatLng, buildGoogleMapsUrl } from "@/lib/maps/parse-map-url";
import SeoSection from "../SeoSection";

interface LocationTabProps {
  register: UseFormRegister<PropertiesInput>;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
  projects?: any[];
  errors?: FieldErrors<PropertiesInput>;
  /** When rendered inside a hidden tab, pass whether the tab is active so the
   *  map (Leaflet chunk + tile requests) is only mounted once the tab is opened. */
  isActive?: boolean;
}

export default function LocationTab({
  register,
  setValue,
  watch,
  projects = [],
  errors,
  isActive = true,
}: LocationTabProps) {
  const { t } = useLanguage();

  // Latch: mount the map on first activation, then keep it mounted.
  const [hasActivated, setHasActivated] = useState(isActive);
  if (isActive && !hasActivated) setHasActivated(true);

  const watchedLat = watch?.("latitude");
  const watchedLng = watch?.("longitude");
  const watchedMapsUrl = watch?.("maps_url");

  const [googleMapsUrl, setGoogleMapsUrl] = useState(watchedMapsUrl || "");
  const [isFetchingFromUrl, setIsFetchingFromUrl] = useState(false);

  // Synchronize googleMapsUrl if external value changes
  useEffect(() => {
    if (watchedMapsUrl && watchedMapsUrl !== googleMapsUrl) {
      setGoogleMapsUrl(watchedMapsUrl);
    }
  }, [watchedMapsUrl]);

  // Initial / current coordinates
  const [mapCoords, setMapCoords] = useState<{ lat: number; lng: number } | null>(() => {
    if (watchedLat && watchedLng && isValidLatLng(Number(watchedLat), Number(watchedLng))) {
      return { lat: Number(watchedLat), lng: Number(watchedLng) };
    }
    return null;
  });

  // Direct string inputs for Latitude and Longitude (formatted e.g. 30.0500000)
  const [latInput, setLatInput] = useState<string>(() => {
    if (watchedLat != null && !isNaN(Number(watchedLat))) {
      return Number(watchedLat).toFixed(7);
    }
    return "";
  });

  const [lngInput, setLngInput] = useState<string>(() => {
    if (watchedLng != null && !isNaN(Number(watchedLng))) {
      return Number(watchedLng).toFixed(7);
    }
    return "";
  });

  // When external watch values change (e.g. initial load in edit mode)
  useEffect(() => {
    if (watchedLat != null && watchedLng != null && isValidLatLng(Number(watchedLat), Number(watchedLng))) {
      const latNum = Number(watchedLat);
      const lngNum = Number(watchedLng);
      setMapCoords({ lat: latNum, lng: lngNum });
      setLatInput(latNum.toFixed(7));
      setLngInput(lngNum.toFixed(7));
    }
  }, [watchedLat, watchedLng]);

  const handleMapSelect = useCallback(
    (data: LocationSelectedData) => {
      const formattedLat = Number(data.lat.toFixed(7));
      const formattedLng = Number(data.lng.toFixed(7));

      setMapCoords({ lat: formattedLat, lng: formattedLng });
      setLatInput(data.lat.toFixed(7));
      setLngInput(data.lng.toFixed(7));

      setGoogleMapsUrl(data.googleMapLink);
      setValue?.("maps_url", data.googleMapLink, { shouldDirty: true });
      setValue?.("latitude", formattedLat, { shouldDirty: true });
      setValue?.("longitude", formattedLng, { shouldDirty: true });

      if (data.city && !watch?.("city_name")) {
        setValue?.("city_name", data.city, { shouldDirty: true });
      }
      if (data.area && !watch?.("area_name")) {
        setValue?.("area_name", data.area, { shouldDirty: true });
      }
      if (data.landmark && !watch?.("landmark")) {
        setValue?.("landmark", data.landmark, { shouldDirty: true });
      }
    },
    [setValue, watch]
  );

  const handleFetchFromUrl = async () => {
    if (!googleMapsUrl.trim()) return;

    setIsFetchingFromUrl(true);
    try {
      const coords = await resolveGoogleMapsUrl(googleMapsUrl);
      if (!coords) {
        toast.error(t("properties.create.location.coordsExtractFailed"));
        return;
      }

      const formattedLat = Number(coords.lat.toFixed(7));
      const formattedLng = Number(coords.lng.toFixed(7));

      setMapCoords({ lat: formattedLat, lng: formattedLng });
      setLatInput(coords.lat.toFixed(7));
      setLngInput(coords.lng.toFixed(7));

      setValue?.("latitude", formattedLat, { shouldDirty: true });
      setValue?.("longitude", formattedLng, { shouldDirty: true });
      setValue?.("maps_url", googleMapsUrl, { shouldDirty: true });
      toast.success(t("properties.create.location.locationPinned"));
    } catch (err) {
      console.error("Error fetching map coordinates:", err);
      toast.error(t("properties.create.location.urlParseFailed"));
    } finally {
      setIsFetchingFromUrl(false);
    }
  };

  const handleUseParentProjectCoordinates = () => {
    const selectedProjectId = watch?.("project_id");
    if (!selectedProjectId) {
      toast.info(t("properties.create.location.selectProjectFirst"));
      return;
    }

    const parent = projects?.find(
      (p: any) => String(p.project_id ?? p.id) === String(selectedProjectId)
    );

    if (!parent) {
      toast.error(t("properties.create.location.projectNotFound"));
      return;
    }

    const loc = parent.location || (Array.isArray(parent.locations) ? parent.locations[0] : null);
    const rawLat = loc?.latitude ?? parent.latitude;
    const rawLng = loc?.longitude ?? parent.longitude;
    const pLat = parseFloat(String(rawLat));
    const pLng = parseFloat(String(rawLng));

    if (isValidLatLng(pLat, pLng)) {
      const formattedLat = Number(pLat.toFixed(7));
      const formattedLng = Number(pLng.toFixed(7));

      setMapCoords({ lat: formattedLat, lng: formattedLng });
      setLatInput(pLat.toFixed(7));
      setLngInput(pLng.toFixed(7));

      setValue?.("latitude", formattedLat, { shouldDirty: true });
      setValue?.("longitude", formattedLng, { shouldDirty: true });

      const link =
        loc?.google_map_link ||
        loc?.google_maps_link ||
        parent.google_map_link ||
        buildGoogleMapsUrl(formattedLat, formattedLng);

      if (link) {
        setGoogleMapsUrl(link);
        setValue?.("maps_url", link, { shouldDirty: true });
      }

      if (loc?.landmark && !watch?.("landmark")) {
        setValue?.("landmark", loc.landmark, { shouldDirty: true });
      }

      toast.success(t("properties.create.location.projectCoordsApplied"));
    } else {
      toast.error(t("properties.create.location.projectNoCoords"));
    }
  };

  const handleLatChange = (val: string) => {
    setLatInput(val);
    const latNum = parseFloat(val);
    if (!isNaN(latNum)) {
      setValue?.("latitude", latNum, { shouldDirty: true, shouldValidate: !!errors?.latitude });
      const lngNum = parseFloat(lngInput);
      if (!isNaN(lngNum) && isValidLatLng(latNum, lngNum)) {
        setMapCoords({ lat: latNum, lng: lngNum });
      }
    }
  };

  const handleLngChange = (val: string) => {
    setLngInput(val);
    const lngNum = parseFloat(val);
    if (!isNaN(lngNum)) {
      setValue?.("longitude", lngNum, { shouldDirty: true, shouldValidate: !!errors?.longitude });
      const latNum = parseFloat(latInput);
      if (!isNaN(latNum) && isValidLatLng(latNum, lngNum)) {
        setMapCoords({ lat: latNum, lng: lngNum });
      }
    }
  };

  const nextPointId = useRef(3);
  const [nearbyPoints, setNearbyPoints] = useState<Array<{ id: number; name: string; distance: string }>>([
    { id: 0, name: t("properties.create.location.defaultTransit"), distance: t("properties.create.location.minutes", { count: 5 }) },
    { id: 1, name: t("properties.create.location.defaultAirport"), distance: t("properties.create.location.minutes", { count: 20 }) },
    { id: 2, name: t("properties.create.location.defaultMall"), distance: t("properties.create.location.minutes", { count: 10 }) },
  ]);

  const handleAddPoint = () => {
    const id = nextPointId.current++;
    setNearbyPoints((prev) => [...prev, { id, name: "", distance: "" }]);
  };

  const handleRemovePoint = (index: number) => {
    setNearbyPoints((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdatePoint = (index: number, field: "name" | "distance", value: string) => {
    setNearbyPoints((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      {/* ── Main Property Location Card ─────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
          {t("properties.create.location.propertyLocation")}
        </h2>

        <div className="bg-[#f0fdfa] dark:bg-teal-950/20 border border-[#ccfbf1] dark:border-teal-900/40 rounded-lg p-3 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-[#0f766e] dark:text-teal-200">
            {t("properties.create.location.unitInsideProject")}
          </p>
          <button
            type="button"
            onClick={handleUseParentProjectCoordinates}
            className="bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-neutral-700 text-xs font-medium px-3.5 py-1.5 rounded-md shadow-none transition-colors shrink-0"
          >
            {t("properties.create.location.useProjectCoords")}
          </button>
        </div>

        {/* Google Maps link (generate coordinates) */}
        <div className="space-y-1">
          <Label htmlFor="maps_url" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {t("properties.create.location.mapsLinkLabel")}
          </Label>
          <div className="flex gap-2">
            <Input
              id="maps_url"
              value={googleMapsUrl}
              onChange={(e) => {
                const val = e.target.value;
                setGoogleMapsUrl(val);
                setValue?.("maps_url", val, { shouldDirty: true, shouldValidate: !!errors?.maps_url });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleFetchFromUrl();
                }
              }}
              placeholder="https://www.google.com/maps/@30.05,31.24,15z"
              type="url"
              dir="ltr"
              error={!!errors?.maps_url}
              aria-invalid={!!errors?.maps_url}
              className={`flex-1 bg-white dark:bg-neutral-950 text-xs h-9 ${errors?.maps_url ? "" : "border-gray-300 dark:border-neutral-700"}`}
            />
            <button
              type="button"
              onClick={handleFetchFromUrl}
              disabled={isFetchingFromUrl || !googleMapsUrl.trim()}
              className="border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 text-gray-800 dark:text-gray-200 text-xs font-medium px-4 h-9 rounded-md shadow-none transition-colors shrink-0 flex items-center gap-1.5"
            >
              {isFetchingFromUrl && <Loader2 className="h-3.5 w-3.5 animate-spin text-teal-600" />}
              <span>{t("properties.create.location.generate")}</span>
            </button>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            {t("properties.create.location.mapsLinkHint")}
          </p>
          <FieldError message={errors?.maps_url?.message ? t(errors.maps_url.message as string) : undefined} />
        </div>

        {/* Location on Map */}
        <div className="space-y-1 pt-1">
          <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {t("properties.create.location.locationOnMap")}
          </h3>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 pb-1">
            {t("properties.create.location.mapHint")}
          </p>

          {/* Interactive Map Component */}
          {hasActivated && (
            <InteractiveMapPicker
              latitude={mapCoords?.lat}
              longitude={mapCoords?.lng}
              onLocationSelect={handleMapSelect}
              height="h-[360px]"
              attributionControl={true}
              showControls={false}
              showBadges={false}
            />
          )}
        </div>

        {/* Latitude & Longitude inputs directly under map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <Label htmlFor="latitude" className="text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1">
              {t("properties.create.location.latitude")}
            </Label>
            <Input
              id="latitude"
              type="text"
              value={latInput}
              onChange={(e) => handleLatChange(e.target.value)}
              placeholder="30.0500000"
              inputMode="decimal"
              dir="ltr"
              error={!!errors?.latitude}
              aria-invalid={!!errors?.latitude}
              className={`bg-white dark:bg-neutral-950 text-xs font-mono h-9 ${errors?.latitude ? "" : "border-gray-300 dark:border-neutral-700"}`}
            />
            <FieldError message={errors?.latitude?.message ? t(errors.latitude.message as string) : undefined} />
          </div>
          <div>
            <Label htmlFor="longitude" className="text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1">
              {t("properties.create.location.longitude")}
            </Label>
            <Input
              id="longitude"
              type="text"
              value={lngInput}
              onChange={(e) => handleLngChange(e.target.value)}
              placeholder="31.2400000"
              inputMode="decimal"
              dir="ltr"
              error={!!errors?.longitude}
              aria-invalid={!!errors?.longitude}
              className={`bg-white dark:bg-neutral-950 text-xs font-mono h-9 ${errors?.longitude ? "" : "border-gray-300 dark:border-neutral-700"}`}
            />
            <FieldError message={errors?.longitude?.message ? t(errors.longitude.message as string) : undefined} />
          </div>
        </div>

        {/* Address & Region details (Zone, City, Area, Landmark) */}
        <div className="pt-4 border-t border-gray-100 dark:border-neutral-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zone_name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t("properties.create.license.zoneName")}
              </Label>
              <Input
                id="zone_name"
                {...register("zone_name")}
                error={!!errors?.zone_name}
                aria-invalid={!!errors?.zone_name}
                placeholder={t("properties.create.license.zoneName")}
                className="mt-1 text-xs h-9"
              />
              <FieldError message={errors?.zone_name?.message ? t(errors.zone_name.message as string) : undefined} />
            </div>

            <div>
              <Label htmlFor="city_name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t("properties.create.location.city")}
              </Label>
              <Input
                id="city_name"
                {...register("city_name")}
                error={!!errors?.city_name}
                aria-invalid={!!errors?.city_name}
                placeholder={t("properties.create.location.cityPlaceholder")}
                className="mt-1 text-xs h-9"
              />
              <FieldError message={errors?.city_name?.message ? t(errors.city_name.message as string) : undefined} />
            </div>

            <div>
              <Label htmlFor="area_name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t("properties.create.location.area")}
              </Label>
              <Input
                id="area_name"
                {...register("area_name")}
                error={!!errors?.area_name}
                aria-invalid={!!errors?.area_name}
                placeholder={t("properties.create.location.areaPlaceholder")}
                className="mt-1 text-xs h-9"
              />
              <FieldError message={errors?.area_name?.message ? t(errors.area_name.message as string) : undefined} />
            </div>

            <div>
              <Label htmlFor="landmark" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t("properties.create.location.landmark")}
              </Label>
              <Input
                id="landmark"
                {...register("landmark")}
                error={!!errors?.landmark}
                aria-invalid={!!errors?.landmark}
                placeholder={t("properties.create.location.landmarkPlaceholder")}
                className="mt-1 text-xs h-9"
              />
              <FieldError message={errors?.landmark?.message ? t(errors.landmark.message as string) : undefined} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Nearby Places & Distances ─────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 pb-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t("properties.create.location.nearbyTitle")}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {t("properties.create.location.nearbySubtitle")}
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAddPoint}
            className="gap-1.5 text-xs text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50 shadow-none"
          >
            <Plus className="h-3.5 w-3.5" />
            {t("properties.create.location.addNearby")}
          </Button>
        </div>

        <div className="space-y-3">
          {nearbyPoints.map((point, index) => (
            <div key={point.id} className="flex items-center gap-3">
              <div className="flex-1">
                <Input
                  value={point.name}
                  onChange={(e) => handleUpdatePoint(index, "name", e.target.value)}
                  placeholder={t("properties.create.location.destinationPlaceholder")}
                  className="text-xs h-9"
                />
              </div>
              <div className="w-36 sm:w-44">
                <Input
                  value={point.distance}
                  onChange={(e) => handleUpdatePoint(index, "distance", e.target.value)}
                  placeholder={t("properties.create.location.distancePlaceholder")}
                  className="text-xs h-9"
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => handleRemovePoint(index)}
                className="h-9 w-9 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />
    </div>
  );
}
