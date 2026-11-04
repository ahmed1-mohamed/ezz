import { useState, useCallback } from "react";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { useAddLocationData, useAddLocation } from "@/hooks/use-add-location";
import useExpandUrl from "@/hooks/use-expand-url";
import useGetNearby from "@/hooks/use-get-nearby";
import useGetLocationDetails from "@/hooks/use-get-location-details";
import { getAddLocationFormSchema, AddLocationFormInput } from "./schema";
import { LocationInput } from "@/validators/location.schema";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const LOCATION_FIELD_MAP: Record<string, keyof AddLocationFormInput> = {
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

export function useAddLocationForm(isOpen: boolean, onClose: () => void) {
  const { cities, areas, isLoadingCities, isLoadingAreas } = useAddLocationData(isOpen);
  const { addLocation, isAddingLocation } = useAddLocation();
  const [isExtracting, setIsExtracting] = useState(false);

  const { t } = useLanguage();
  const formSchema = getAddLocationFormSchema(t);

  const methods = useForm<AddLocationFormInput>({
    resolver: zodResolver(formSchema),
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

  const { setValue, watch, trigger, reset, setError, getValues } = methods;

  const { expandUrl, isExpanding } = useExpandUrl();
  const { getNearby, isFetching: isFetchingNearby } = useGetNearby();
  const { getLocationDetails, isFetching: isFetchingLocationDetails } = useGetLocationDetails();

  const isProcessing = isExtracting || isExpanding || isFetchingNearby || isFetchingLocationDetails;

  const extractLocationDetails = useCallback(
    async (link: string) => {
      if (!link.trim()) return;

      setIsExtracting(true);

      try {
        const coordinates = await expandUrl(link);
        if (!coordinates) {
          toast.error(t("locations.messages.invalidMapUrl"));
          return;
        }

        const geocodeData = await getLocationDetails({ lat: coordinates.lat, lng: coordinates.lng });

        if (!geocodeData.results || geocodeData.results.length === 0) {
          toast.error(t("locations.messages.extractNoResults"));
          return;
        }

        const result = geocodeData.results[0];
        const addressComponents = result.address_components;

        let cityName = "";
        let areaName = "";

        for (const component of addressComponents) {
          const types = component.types;
          if (types.includes("sublocality") || types.includes("neighborhood")) {
            areaName = component.long_name;
          } else if (types.includes("locality")) {
            cityName = component.long_name;
          } else if (types.includes("administrative_area_level_2") && !cityName) {
            cityName = component.long_name;
          } else if (types.includes("administrative_area_level_1")) {
            if (!cityName) cityName = component.long_name;
          }
        }

        const directionalData = await getNearby({ lat: coordinates.lat, lng: coordinates.lng });

        setValue("googleMapLink", link, { shouldValidate: true });
        setValue("latitude", String(coordinates.lat), { shouldValidate: true });
        setValue("longitude", String(coordinates.lng), { shouldValidate: true });
        
        if (result.formatted_address) {
          setValue("landmark", result.formatted_address, { shouldValidate: true });
        }
        if (directionalData.north) setValue("northSide", directionalData.north, { shouldValidate: true });
        if (directionalData.south) setValue("southSide", directionalData.south, { shouldValidate: true });
        if (directionalData.east) setValue("eastSide", directionalData.east, { shouldValidate: true });
        if (directionalData.west) setValue("westSide", directionalData.west, { shouldValidate: true });

        if (cityName) {
          const matchedCity = cities.find((c) => c.label.toLowerCase() === cityName.toLowerCase());
          if (matchedCity) setValue("cityId", matchedCity.value, { shouldValidate: true });
        }

        if (areaName) {
          const matchedArea = areas.find((a) => a.label.toLowerCase() === areaName.toLowerCase());
          if (matchedArea) setValue("areaId", matchedArea.value, { shouldValidate: true });
        }

        toast.success(t("locations.messages.extractSuccess"));
      } catch (error) {
        console.error("Error extracting location details:", error);
        toast.error(t("locations.messages.extractFailedRetry"));
      } finally {
        setIsExtracting(false);
      }
    },
    [expandUrl, getLocationDetails, getNearby, cities, areas, setValue, t]
  );

  const googleMapLinkValue = watch("googleMapLink");

  const handleExtractLocation = async () => {
    const isValid = await trigger("googleMapLink");
    if (isValid && googleMapLinkValue) {
      extractLocationDetails(googleMapLinkValue);
    } else {
      toast.error(t("validation.required"));
    }
  };

  const onSubmit = async (data: AddLocationFormInput) => {
    const toNumber = (val?: string) => (val ? Number(val) : undefined);
    const locationPayload: LocationInput = {
      location_name_en: data.locationName,
      location_name_ar: data.locationName,
      city_id: Number(data.cityId),
      area_id: Number(data.areaId),
      google_map_link: data.googleMapLink,
      latitude: toNumber(data.latitude),
      longitude: toNumber(data.longitude),
      north_side: data.northSide,
      south_side: data.southSide,
      east_side: data.eastSide,
      west_side: data.westSide,
      landmark: data.landmark,
      description: data.description,
    };

    try {
      await addLocation(locationPayload);
      toast.success(t("locations.messages.addSuccess"));
      reset();
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: LOCATION_FIELD_MAP,
        fallbackMessage: t("locations.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  const handleClose = () => {
    if (isAddingLocation) return;
    reset();
    onClose();
  };

  return {
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
    t,
  };
}
