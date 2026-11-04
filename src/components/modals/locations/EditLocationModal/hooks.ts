import { useState, useEffect } from "react";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditLocationData } from "@/hooks/use-edit-location";
import { useLocationActions } from "@/hooks/use-location-actions";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { getEditLocationFormSchema, EditLocationFormInput } from "./schema";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const LOCATION_FIELD_MAP: Record<string, keyof EditLocationFormInput> = {
  location_name: "locationName",
  location_name_en: "locationName",
  location_name_ar: "locationName",
  name: "locationName",
  google_map_link: "googleMapLink",
  city_id: "cityId",
  area_id: "areaId",
  lat: "latitude",
  lng: "longitude",
  north_side: "northSide",
  south_side: "southSide",
  east_side: "eastSide",
  west_side: "westSide",
};

export function useEditLocationForm(locationId: number, isOpen: boolean, onClose: () => void, onSuccess: () => void) {
  const { t } = useLanguage();
  const [isExtracting, setIsExtracting] = useState(false);
  const { locationData, cities, areas, loading } = useEditLocationData(locationId, isOpen);
  const { updateLocation, isUpdating } = useLocationActions();

  const methods = useForm<EditLocationFormInput>({
    resolver: zodResolver(getEditLocationFormSchema(t)),
    defaultValues: {
      locationName: "",
      googleMapLink: "",
      cityId: "",
      areaId: "",
      latitude: "",
      longitude: "",
      northSide: "",
      southSide: "",
      eastSide: "",
      westSide: "",
      landmark: "",
      description: "",
    },
  });

  const { setValue, reset, trigger, watch, setError, getValues } = methods;

  useEffect(() => {
    if (locationData) {
      const payload = (locationData as any)?.data;
      const data = (payload?.data ? payload.data : payload);

      if (data) {
        reset({
          locationName: data.location_name_en || data.location_name || data.location_landmark || data.area?.area_name || "",
          areaId: String(data.area?.area_id || data.area_id || ""),
          cityId: String(data.city?.id || data.city_id || ""),
          googleMapLink: data.google_map_link || "",
          // The API may return coordinates as numbers; the form works with strings.
          latitude: data.latitude != null ? String(data.latitude) : "",
          longitude: data.longitude != null ? String(data.longitude) : "",
          northSide: data.north_side || "",
          southSide: data.south_side || "",
          eastSide: data.east_side || "",
          westSide: data.west_side || "",
          landmark: data.landmark || "",
          description: data.description || "",
        });
      }
    }
  }, [locationData, reset]);

  const isShortGoogleMapsUrl = (url: string): boolean => {
    const shortPatterns = [/maps\.app\.goo\.gl/i, /goo\.gl\/maps/i, /goo\.gl\/m/i];
    return shortPatterns.some((pattern) => pattern.test(url));
  };

  const expandShortUrl = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(`/api/expand-url?shortUrl=${encodeURIComponent(url)}`);
      if (!response.ok) return null;
      const data = await response.json();
      return data.longUrl || null;
    } catch (error) {
      console.error("Error expanding URL:", error);
      return null;
    }
  };

  const extractCoordinatesFromLink = async (link: string): Promise<{ lat: number; lng: number } | null> => {
    let urlToProcess = link;
    if (isShortGoogleMapsUrl(link)) {
      toast.info(t("locations.messages.expandingLink"));
      const expandedUrl = await expandShortUrl(link);
      if (!expandedUrl) {
        toast.error(t("locations.messages.expandFailed"));
        return null;
      }
      urlToProcess = expandedUrl;
    }
    const match =
      urlToProcess.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/) ||
      urlToProcess.match(/q=(-?\d+\.?\d*),(-?\d+\.?\d*)/) ||
      urlToProcess.match(/place\/(-?\d+\.?\d*),(-?\d+\.?\d*)/);
    if (match) return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
    return null;
  };

  const getDirectionalReferences = async (lat: number, lng: number) => {
    try {
      const res = await fetch(`/api/get-nearby?lat=${lat}&lng=${lng}`);
      return await res.json();
    } catch (error) {
      console.error("Error getting directional references:", error);
      return {};
    }
  };

  const extractLocationDetails = async (link: string) => {
    const coords = await extractCoordinatesFromLink(link);
    if (!coords) {
      toast.error(t("locations.messages.invalidLinkCoords"));
      return;
    }

    setIsExtracting(true);

    try {
      const API_KEY = "AIzaSyA7pPVZpga50Hvurvanqkal3QEF9LPbG-g";
      if (!API_KEY) {
        toast.error(t("locations.messages.apiKeyMissing"));
        return;
      }

      const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${API_KEY}`);
      if (!geocodeResponse.ok) throw new Error("Failed to fetch location data");
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.results && geocodeData.results.length > 0) {
        const result = geocodeData.results[0];
        const addressComponents = result.address_components;

        let cityNameExtracted = "";
        let areaNameExtracted = "";

        for (const component of addressComponents) {
          const types = component.types;
          if (types.includes("sublocality") || types.includes("neighborhood")) {
            areaNameExtracted = component.long_name;
          } else if (types.includes("locality")) {
            cityNameExtracted = component.long_name;
          } else if (types.includes("administrative_area_level_2") && !cityNameExtracted) {
            cityNameExtracted = component.long_name;
          } else if (types.includes("administrative_area_level_1")) {
            if (!cityNameExtracted) cityNameExtracted = component.long_name;
          }
        }

        const directionalData = await getDirectionalReferences(coords.lat, coords.lng);

        setValue("googleMapLink", link, { shouldValidate: true });
        setValue("latitude", String(coords.lat), { shouldValidate: true });
        setValue("longitude", String(coords.lng), { shouldValidate: true });
        if (result.formatted_address) setValue("landmark", result.formatted_address, { shouldValidate: true });
        if (directionalData.north) setValue("northSide", directionalData.north, { shouldValidate: true });
        if (directionalData.south) setValue("southSide", directionalData.south, { shouldValidate: true });
        if (directionalData.east) setValue("eastSide", directionalData.east, { shouldValidate: true });
        if (directionalData.west) setValue("westSide", directionalData.west, { shouldValidate: true });

        if (cityNameExtracted) {
          const matchedCity = cities.find((c: any) => c.label.toLowerCase() === cityNameExtracted.toLowerCase());
          if (matchedCity) setValue("cityId", matchedCity.value, { shouldValidate: true });
        }

        if (areaNameExtracted) {
          const matchedArea = areas.find((a: any) => a.label.toLowerCase() === areaNameExtracted.toLowerCase());
          if (matchedArea) setValue("areaId", matchedArea.value, { shouldValidate: true });
        }

        toast.success(t("locations.messages.extractSuccess"));
      }
    } catch (error) {
      console.error("Extraction error:", error);
      toast.error(t("locations.messages.extractFailed"));
    } finally {
      setIsExtracting(false);
    }
  };

  const handleExtractLocation = async () => {
    const link = watch("googleMapLink");
    const isValid = await trigger("googleMapLink");
    if (isValid && link) {
      extractLocationDetails(link);
    } else {
      toast.error(t("validation.required"));
    }
  };

  const onSubmit = async (data: EditLocationFormInput) => {
    const locationPayload = {
      location_name_en: data.locationName,
      location_name_ar: data.locationName,
      city_id: data.cityId ? Number(data.cityId) : undefined,
      area_id: data.areaId ? Number(data.areaId) : undefined,
      google_map_link: data.googleMapLink,
      latitude: data.latitude ? Number(data.latitude) : undefined,
      longitude: data.longitude ? Number(data.longitude) : undefined,
      north_side: data.northSide || undefined,
      south_side: data.southSide || undefined,
      east_side: data.eastSide || undefined,
      west_side: data.westSide || undefined,
      landmark: data.landmark || undefined,
      description: data.description || undefined,
    };

    try {
      await updateLocation({ locationId, data: locationPayload as any });
      toast.success(t("locations.messages.updateSuccess"));
      reset();
      onClose();
      onSuccess();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: LOCATION_FIELD_MAP,
        fallbackMessage: t("locations.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const handleClose = () => {
    if (isUpdating) return;
    reset();
    onClose();
  };

  return {
    methods,
    cities,
    areas,
    loading,
    isExtracting,
    isUpdating,
    handleExtractLocation,
    onSubmit,
    handleClose,
    t,
  };
}
