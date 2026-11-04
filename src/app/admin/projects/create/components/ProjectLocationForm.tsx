"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, Check, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { FieldError } from "@/components/ui/form-message";
import { LocationData, Option } from "../types";
import useCitiesByCountry from "@/hooks/use-cities-by-country";
import useAreasByCountry from "@/hooks/use-areas-by-country";
import useExpandUrl from "@/hooks/use-expand-url";
import useGetLocationDetails from "@/hooks/use-get-location-details";
import { InteractiveMapPicker, LocationSelectedData } from "@/components/shared/InteractiveMapPicker";
import { resolveGoogleMapsUrl, buildGoogleMapsUrl } from "@/lib/maps/parse-map-url";

import { UseFormReturn } from "react-hook-form";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectLocationFormProps {
  form: UseFormReturn<CreateProjectInput>;
  locationData: LocationData;
  setLocationData: React.Dispatch<React.SetStateAction<LocationData>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setCountryId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const COUNTRY_OPTIONS = [
  { label: "Egypt", value: "Egypt", id: 1, key: "egypt", labelAr: "مصر" },
  { label: "Oman", value: "Oman", id: 3, key: "oman", labelAr: "سلطنة عمان" },
  { label: "UAE", value: "UAE", id: 2, key: "uae", labelAr: "الإمارات العربية المتحدة" },
];

const COUNTRY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  Egypt: { lat: 30.0444, lng: 31.2357 },
  UAE: { lat: 25.2048, lng: 55.2708 },
  Oman: { lat: 23.5880, lng: 58.3829 },
};

const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  // UAE
  dubai: { lat: 25.2048, lng: 55.2708 },
  "دبي": { lat: 25.2048, lng: 55.2708 },
  "abu dhabi": { lat: 24.4539, lng: 54.3773 },
  "أبو ظبي": { lat: 24.4539, lng: 54.3773 },
  sharjah: { lat: 25.3463, lng: 55.4209 },
  "الشارقة": { lat: 25.3463, lng: 55.4209 },
  ajman: { lat: 25.4052, lng: 55.5136 },
  "عجمان": { lat: 25.4052, lng: 55.5136 },
  "ras al khaimah": { lat: 25.7895, lng: 55.9432 },
  "رأس الخيمة": { lat: 25.7895, lng: 55.9432 },
  fujairah: { lat: 25.1288, lng: 56.3265 },
  "الفجيرة": { lat: 25.1288, lng: 56.3265 },
  "umm al quwain": { lat: 25.5647, lng: 55.5552 },
  "أم القيوين": { lat: 25.5647, lng: 55.5552 },
  // Egypt
  cairo: { lat: 30.0444, lng: 31.2357 },
  "القاهرة": { lat: 30.0444, lng: 31.2357 },
  giza: { lat: 29.9870, lng: 31.2118 },
  "الجيزة": { lat: 29.9870, lng: 31.2118 },
  alexandria: { lat: 31.2001, lng: 29.9187 },
  "الإسكندرية": { lat: 31.2001, lng: 29.9187 },
  "new cairo": { lat: 30.0300, lng: 31.4700 },
  "القاهرة الجديدة": { lat: 30.0300, lng: 31.4700 },
  "sheikh zayed": { lat: 30.0531, lng: 30.9839 },
  "الشيخ زايد": { lat: 30.0531, lng: 30.9839 },
  "6th of october": { lat: 29.9737, lng: 30.9593 },
  "السادس من أكتوبر": { lat: 29.9737, lng: 30.9593 },
  // Oman
  muscat: { lat: 23.5880, lng: 58.3829 },
  "مسقط": { lat: 23.5880, lng: 58.3829 },
  salalah: { lat: 17.0151, lng: 54.0924 },
  "صلالة": { lat: 17.0151, lng: 54.0924 },
  sohar: { lat: 24.3461, lng: 56.7075 },
  "صحار": { lat: 24.3461, lng: 56.7075 },
};

export function ProjectLocationForm({
  form,
  locationData,
  setLocationData,
  country,
  setCountry,
  setCountryId,
}: ProjectLocationFormProps) {
  const { formState: { errors }, setValue, watch } = form;
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [googleMapsLinkError, setGoogleMapsLinkError] = useState<string | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>(locationData.city_id || watch("city_id") || "");
  const [selectedArea, setSelectedArea] = useState<string>(locationData.area_id || watch("area_id") || "");
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [googleMapsInput, setGoogleMapsInput] = useState<string>(locationData.google_map_link || "");
  const [fullAddress, setFullAddress] = useState<string>(
    watch("location_description") || locationData.landmark || ""
  );

  const { expandUrl } = useExpandUrl();
  const { getLocationDetails } = useGetLocationDetails();

  useEffect(() => {
    if (!country) {
      setCountry("UAE");
      setCountryId(2);
    }
  }, [country, setCountry, setCountryId]);

  const citiesQuery = useCitiesByCountry(country || "UAE");
  const areasQuery = useAreasByCountry(country || "UAE", selectedCity);

  useEffect(() => {
    const currentVal = watch("area_id") || locationData.area_id || "";
    if (currentVal !== selectedArea) {
      setSelectedArea(currentVal);
    }
  }, [watch, locationData.area_id, selectedArea]);

  useEffect(() => {
    const currentCityVal = watch("city_id") || locationData.city_id || "";
    if (currentCityVal && currentCityVal !== selectedCity) {
      setSelectedCity(currentCityVal);
    }
  }, [watch, locationData.city_id, selectedCity]);

  // Load and filter cities by selected country
  useEffect(() => {
    const response = citiesQuery.data;
    if (!response) {
      setOptions([]);
      return;
    }

    let citiesArray: any[] = [];
    const rawData = response.data;
    if (Array.isArray(rawData)) {
      citiesArray = rawData;
    } else {
      const nested = (rawData as any)?.data;
      if (Array.isArray(nested)) {
        citiesArray = nested;
      } else if (Array.isArray((nested as any)?.data)) {
        citiesArray = (nested as any).data;
      }
    }

    const currentCountryObj = COUNTRY_OPTIONS.find((c) => c.value === country);

    const filteredCities = citiesArray.filter((c: any) => {
      if (currentCountryObj?.id && c.country_id != null) {
        if (Number(c.country_id) === currentCountryObj.id) return true;
        return false;
      }
      if (c.country) {
        const cName = typeof c.country === "string" ? c.country : (c.country?.name || "");
        if (cName) {
          const lower = cName.toLowerCase();
          if (country === "UAE") return lower.includes("emirates") || lower.includes("uae") || lower.includes("إمارات");
          if (country === "Egypt") return lower.includes("egypt") || lower.includes("مصر");
          if (country === "Oman") return lower.includes("oman") || lower.includes("عمان");
        }
      }
      return true;
    });

    if (filteredCities.length > 0) {
      const mapped = filteredCities.map((c: any) => ({
        label: c.name || c.city_name,
        value: c.name || c.city_name,
        id: c.id ?? c.city_id,
        latitude: c.latitude,
        longitude: c.longitude,
        raw: c,
      }));
      const unique = Array.from(new Map(mapped.map((item: any) => [item.value, item])).values());
      setOptions(unique as Option[]);
    } else {
      setOptions([]);
    }
  }, [citiesQuery.data, country]);

  // Filter areas strictly based on selectedCity
  const areaOptions = useMemo<Option[]>(() => {
    if (!selectedCity) return [];
    const data = areasQuery.data;
    if (!data || !Array.isArray(data)) return [];

    const normCity = selectedCity.trim().toLowerCase();
    const selectedCityOpt = options.find(
      (o) => o.value.toLowerCase() === normCity || o.label.toLowerCase() === normCity
    ) as any;
    const selectedCityId = selectedCityOpt?.id != null ? String(selectedCityOpt.id) : null;

    const filtered = data.filter((item) => {
      // 1. Direct city_name check
      const itemCity = (
        item.city_name ||
        item.raw?.city?.name ||
        item.raw?.city?.city_name ||
        item.raw?.city_name ||
        (typeof item.raw?.city === "string" ? item.raw?.city : "")
      )?.trim().toLowerCase();

      if (itemCity && (itemCity === normCity || normCity.includes(itemCity) || itemCity.includes(normCity))) {
        return true;
      }

      // 2. City ID check
      const itemCityId = item.city_id ?? item.raw?.city_id ?? item.raw?.city?.id;
      if (selectedCityId && itemCityId != null && String(itemCityId) === selectedCityId) {
        return true;
      }

      // 3. If selected city is Dubai, any DLD area belongs to Dubai
      const isDubai = normCity.includes("dubai") || normCity.includes("دبي");
      if (isDubai) {
        if (item.raw?.dld_area_id || item.raw?.dld_area_name) {
          return true;
        }
        if (!itemCity || itemCity.includes("dubai") || itemCity.includes("دبي")) {
          return true;
        }
      }

      // 4. State / Region check
      const itemState = (item.raw?.state?.name || item.raw?.state?.city_name || item.raw?.region)?.trim().toLowerCase();
      if (itemState && (itemState === normCity || normCity.includes(itemState) || itemState.includes(normCity))) {
        return true;
      }

      return false;
    });

    const anyHasCity = data.some(
      (item) => item.city_name || item.city_id != null || item.raw?.city_id || item.raw?.city?.id
    );

    const finalAreas = (filtered.length > 0 || anyHasCity) ? filtered : data;

    return finalAreas.map((item) => ({
      label: item.area_name,
      value: item.area_name,
    }));
  }, [areasQuery.data, selectedCity, options]);

  const handleCountryChange = (newCountry: string) => {
    const found = COUNTRY_OPTIONS.find((c) => c.value === newCountry);
    setCountry(newCountry);
    if (found) {
      setCountryId(found.id);
    }
    setSelectedCity("");
    setSelectedArea("");
    setValue("city_id", "", { shouldValidate: true });
    setValue("area_id", "", { shouldValidate: true });

    const fallbackCoord = COUNTRY_COORDINATES[newCountry] || COUNTRY_COORDINATES.UAE;
    setLocationData((prev) => ({
      ...prev,
      city_id: "",
      area_id: "",
      latitude: fallbackCoord.lat,
      longitude: fallbackCoord.lng,
      google_map_link: buildGoogleMapsUrl(fallbackCoord.lat, fallbackCoord.lng),
    }));
    setValue("latitude", fallbackCoord.lat, { shouldValidate: true });
    setValue("longitude", fallbackCoord.lng, { shouldValidate: true });
    setValue("google_map_link", buildGoogleMapsUrl(fallbackCoord.lat, fallbackCoord.lng), { shouldValidate: true });
  };

  const handleCityChange = (cityValue: string) => {
    setSelectedCity(cityValue);
    setSelectedArea("");
    setValue("city_id", cityValue, { shouldValidate: true });
    setValue("area_id", "", { shouldValidate: true });

    // Look up city coordinates to center the map
    const cityOpt = options.find((o) => o.value === cityValue) as any;
    const norm = cityValue.trim().toLowerCase();
    const cityCoords =
      cityOpt?.latitude && cityOpt?.longitude
        ? { lat: Number(cityOpt.latitude), lng: Number(cityOpt.longitude) }
        : CITY_COORDINATES[norm] || COUNTRY_COORDINATES[country] || COUNTRY_COORDINATES.UAE;

    setLocationData((prev) => ({
      ...prev,
      city_id: cityValue,
      area_id: "",
      latitude: cityCoords.lat,
      longitude: cityCoords.lng,
      google_map_link: buildGoogleMapsUrl(cityCoords.lat, cityCoords.lng),
    }));
    setValue("latitude", cityCoords.lat, { shouldValidate: true });
    setValue("longitude", cityCoords.lng, { shouldValidate: true });
    setValue("google_map_link", buildGoogleMapsUrl(cityCoords.lat, cityCoords.lng), { shouldValidate: true });
  };

  const handleAreaChange = (areaValue: string) => {
    setSelectedArea(areaValue);
    setValue("area_id", areaValue, { shouldValidate: true });
    setLocationData((prev) => ({ ...prev, area_id: areaValue }));
    setIsAreaOpen(false);
  };

  const handleFullAddressChange = (addressValue: string) => {
    setFullAddress(addressValue);
    // Re-validate only while an error is shown, so it clears as soon as the value is fixed.
    setValue("location_description", addressValue, { shouldValidate: !!errors.location_description });
    setValue("landmark", addressValue, { shouldValidate: !!errors.landmark });
    setLocationData((prev) => ({
      ...prev,
      landmark: addressValue,
    }));
  };

  const handleLatitudeChange = (val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setValue("latitude", num, { shouldValidate: true });
      setLocationData((prev) => ({ ...prev, latitude: num }));
    } else if (val === "") {
      setLocationData((prev) => ({ ...prev, latitude: 0 }));
    }
  };

  const handleLongitudeChange = (val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setValue("longitude", num, { shouldValidate: true });
      setLocationData((prev) => ({ ...prev, longitude: num }));
    } else if (val === "") {
      setLocationData((prev) => ({ ...prev, longitude: 0 }));
    }
  };

  const handleGoogleMapLink = async (url: string) => {
    if (!url.trim()) return;

    setIsLoadingLocation(true);
    setGoogleMapsLinkError(null);

    try {
      const coordinates = (await resolveGoogleMapsUrl(url)) || (await expandUrl(url));
      if (!coordinates) {
        const extractFailedMsg = t("projects.form.location.messages.extractFailed");
        setGoogleMapsLinkError(extractFailedMsg);
        toast.error(extractFailedMsg);
        return;
      }

      const geocodeData = await getLocationDetails({ lat: coordinates.lat, lng: coordinates.lng });
      let detectedCity = "";
      let detectedCountry = "";
      let detectedLandmark = "";

      if (geocodeData?.results && geocodeData.results.length > 0) {
        const result = geocodeData.results[0];
        detectedLandmark = result.formatted_address || "";
        for (const comp of result.address_components) {
          if (comp.types.includes("locality")) detectedCity = comp.long_name;
          else if (comp.types.includes("administrative_area_level_2") && !detectedCity) detectedCity = comp.long_name;
          else if (comp.types.includes("country")) {
            const cName = comp.long_name.toLowerCase();
            if (cName.includes("emirates") || cName === "uae") detectedCountry = "UAE";
            else if (cName === "egypt") detectedCountry = "Egypt";
            else if (cName === "oman") detectedCountry = "Oman";
          }
        }
      }

      if (detectedCountry) {
        const found = COUNTRY_OPTIONS.find((c) => c.value === detectedCountry);
        setCountry(detectedCountry);
        if (found) setCountryId(found.id);
      }

      if (detectedCity) {
        const matchOpt = options.find(
          (o) => o.value.toLowerCase() === detectedCity.toLowerCase() || o.label.toLowerCase() === detectedCity.toLowerCase()
        );
        if (matchOpt) {
          setSelectedCity(matchOpt.value);
          setValue("city_id", matchOpt.value, { shouldValidate: true });
        }
      }

      const formattedLat = Number(coordinates.lat.toFixed(6));
      const formattedLng = Number(coordinates.lng.toFixed(6));

      setValue("latitude", formattedLat, { shouldValidate: true });
      setValue("longitude", formattedLng, { shouldValidate: true });
      setValue("google_map_link", url, { shouldValidate: true });

      if (detectedLandmark && !fullAddress) {
        setFullAddress(detectedLandmark);
        setValue("location_description", detectedLandmark);
        setValue("landmark", detectedLandmark);
      }

      setLocationData((prev) => ({
        ...prev,
        latitude: formattedLat,
        longitude: formattedLng,
        google_map_link: url,
        city_id: detectedCity || prev.city_id,
        landmark: detectedLandmark || prev.landmark,
      }));

      toast.success(t("projects.form.location.messages.extractSuccess"));
    } catch (err) {
      console.error("Error processing Google Maps link:", err);
      const processErrorMsg = t("projects.form.location.messages.processError");
      setGoogleMapsLinkError(processErrorMsg);
      toast.error(processErrorMsg);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleMapSelect = useCallback(
    (data: LocationSelectedData) => {
      const roundedLat = Number(data.lat.toFixed(6));
      const roundedLng = Number(data.lng.toFixed(6));
      const mapLink = data.googleMapLink || buildGoogleMapsUrl(roundedLat, roundedLng);

      setValue("latitude", roundedLat, { shouldValidate: true });
      setValue("longitude", roundedLng, { shouldValidate: true });
      setValue("google_map_link", mapLink, { shouldValidate: true });

      if (data.city) {
        const matchOpt = options.find(
          (o) => o.value.toLowerCase() === data.city!.toLowerCase() || o.label.toLowerCase() === data.city!.toLowerCase()
        );
        if (matchOpt) {
          setSelectedCity(matchOpt.value);
          setValue("city_id", matchOpt.value, { shouldValidate: true });
        }
      }

      if (data.landmark && !fullAddress) {
        setFullAddress(data.landmark);
        setValue("location_description", data.landmark);
        setValue("landmark", data.landmark);
      }

      setGoogleMapsInput(mapLink);
      setGoogleMapsLinkError(null);

      // Match area against current city's areas list
      let matchedAreaName = "";
      if (data.area && areaOptions.length > 0) {
        const needle = data.area.trim().toLowerCase();
        const found = areaOptions.find(
          (a) =>
            a.value.toLowerCase() === needle ||
            a.label.toLowerCase() === needle ||
            a.value.toLowerCase().includes(needle) ||
            needle.includes(a.value.toLowerCase())
        );
        if (found) {
          matchedAreaName = found.value;
        }
      }

      if (matchedAreaName) {
        setSelectedArea(matchedAreaName);
        setValue("area_id", matchedAreaName, { shouldValidate: true });
        setLocationData((prev) => ({
          ...prev,
          latitude: roundedLat,
          longitude: roundedLng,
          google_map_link: mapLink,
          area_id: matchedAreaName,
          landmark: data.landmark || prev.landmark,
        }));
        toast.success(
          isAr
            ? `تم تحديد المنطقة في النظام: ${matchedAreaName}`
            : `System area selected: ${matchedAreaName}`
        );
      } else {
        setLocationData((prev) => ({
          ...prev,
          latitude: roundedLat,
          longitude: roundedLng,
          google_map_link: mapLink,
          landmark: data.landmark || prev.landmark,
        }));
      }
    },
    [setValue, fullAddress, setLocationData, areaOptions, options, isAr]
  );

  const activeMapCenter = useMemo(() => {
    if (selectedCity) {
      const norm = selectedCity.trim().toLowerCase();
      const cityOpt = options.find((o) => o.value.toLowerCase() === norm) as any;
      if (cityOpt?.latitude && cityOpt?.longitude) {
        return { lat: Number(cityOpt.latitude), lng: Number(cityOpt.longitude) };
      }
      if (CITY_COORDINATES[norm]) {
        return CITY_COORDINATES[norm];
      }
    }
    return COUNTRY_COORDINATES[country] || COUNTRY_COORDINATES.UAE;
  }, [selectedCity, country, options]);

  return (
    <div className="space-y-5 w-full">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs w-full">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "تفاصيل الموقع" : "Location Details"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="country" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "الدولة *" : "Country *"}
            </Label>
            <Select value={country || "UAE"} onValueChange={handleCountryChange}>
              <SelectTrigger id="country" className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950">
                <SelectValue placeholder={isAr ? "اختر الدولة" : "Select Country"} />
              </SelectTrigger>
              <SelectContent>
                {COUNTRY_OPTIONS.map((c) => (
                  <SelectItem key={c.value} value={c.value} className="text-xs cursor-pointer">
                    {t(`common.countries.${c.key}`) || (isAr ? c.labelAr : c.label)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div id="error-city_id">
            <Label htmlFor="city" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "المحافظة / المدينة *" : "Governorate / City *"}
            </Label>
            <Select value={selectedCity} onValueChange={handleCityChange}>
              <SelectTrigger
                id="city"
                className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
                error={!!errors.city_id}
                aria-invalid={!!errors.city_id}
              >
                <SelectValue
                  placeholder={
                    citiesQuery.isLoading
                      ? (isAr ? "جاري تحميل المدن..." : "Loading cities...")
                      : (isAr ? "اختر المحافظة / المدينة" : "Pick or type a governorate/city")
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="text-xs">
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError message={t(errors.city_id?.message || "")} />
          </div>

          <div id="error-area_id">
            <Label htmlFor="area" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "المنطقة (المعتمدة في النظام) *" : "Area (System Area) *"}
            </Label>
            <Popover open={isAreaOpen} onOpenChange={setIsAreaOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  id="area"
                  role="combobox"
                  disabled={!selectedCity}
                  aria-expanded={isAreaOpen}
                  aria-invalid={!!errors.area_id}
                  className={cn(
                    "mt-1.5 flex h-10 w-full items-center justify-between rounded-md border border-input dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-xs shadow-2xs transition-colors text-gray-900 dark:text-gray-100",
                    "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer",
                    !selectedCity && "opacity-60 cursor-not-allowed bg-gray-100 dark:bg-neutral-800",
                    errors.area_id && "border-red-500 focus-visible:ring-red-500",
                    !selectedArea && "text-muted-foreground"
                  )}
                >
                  <span className="truncate">
                    {!selectedCity
                      ? (isAr ? "اختر المحافظة / المدينة أولاً" : "Select governorate/city first")
                      : selectedArea
                      ? areaOptions.find((a) => a.value === selectedArea)?.label || selectedArea
                      : (isAr ? `ابحث واختر المنطقة (${areaOptions.length})...` : `Choose area (${areaOptions.length})...`)}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800" align="start">
                <Command shouldFilter={true} className="dark:bg-neutral-900">
                  <CommandInput
                    placeholder={isAr ? "ابحث عن منطقة..." : "Search area..."}
                    className="text-xs dark:text-gray-100"
                  />
                  <CommandList className="max-h-60 overflow-y-auto dark:bg-neutral-900">
                    <CommandEmpty className="p-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                      {areasQuery.isLoading
                        ? (isAr ? "جاري تحميل المناطق..." : "Loading areas...")
                        : (isAr ? "لم يتم العثور على منطقة مسجلة لهذه المدينة" : "No registered area found for this city")}
                    </CommandEmpty>
                    <CommandGroup>
                      {areaOptions.map((opt) => (
                        <CommandItem
                          key={opt.value}
                          value={opt.label}
                          onSelect={() => handleAreaChange(opt.value)}
                          className="text-xs cursor-pointer flex items-center justify-between py-2"
                        >
                          <span>{opt.label}</span>
                          {selectedArea === opt.value && (
                            <Check className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FieldError message={t(errors.area_id?.message || "")} />
          </div>
        </div>

        <div id="error-landmark">
          <Label htmlFor="full_address" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
            {isAr ? "العنوان الكامل" : "Full Address"}
          </Label>
          <Input
            id="full_address"
            value={fullAddress}
            onChange={(e) => handleFullAddressChange(e.target.value)}
            placeholder={isAr ? "المنطقة، الشارع، المبنى" : "Area, street, building"}
            className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
            error={!!(errors.landmark || errors.location_description)}
            aria-invalid={!!(errors.landmark || errors.location_description)}
          />
          <FieldError message={t(errors.landmark?.message || errors.location_description?.message || "")} />
        </div>

        <div
          id="error-google_map_link"
          className="rounded-lg border border-gray-200 dark:border-neutral-800 p-3.5 sm:p-4 space-y-1.5 bg-gray-50/50 dark:bg-neutral-950/40"
        >
          <Label htmlFor="google_maps_input" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {isAr
              ? "رابط خريطة جوجل (توليد الإحداثيات)"
              : "Google Maps link (generate coordinates)"}
          </Label>
          <div className="flex gap-2">
            <Input
              id="google_maps_input"
              type="url"
              dir="ltr"
              value={googleMapsInput}
              onChange={(e) => {
                setGoogleMapsInput(e.target.value);
                setValue("google_map_link", e.target.value, { shouldValidate: !!errors.google_map_link });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleGoogleMapLink(googleMapsInput);
                }
              }}
              placeholder="https://www.google.com/maps/@30.05,31.24,15z"
              error={!!errors.google_map_link}
              aria-invalid={!!errors.google_map_link}
              className={cn(
                "flex-1 bg-white dark:bg-neutral-950 text-xs h-9",
                !errors.google_map_link && "border-gray-300 dark:border-neutral-700"
              )}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => handleGoogleMapLink(googleMapsInput)}
              disabled={isLoadingLocation || !googleMapsInput.trim()}
              className="border-teal-600 dark:border-teal-500 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 font-medium px-4 h-9 text-xs shadow-2xs shrink-0 cursor-pointer"
            >
              {isLoadingLocation ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <span>{isAr ? "توليد" : "Generate"}</span>
              )}
            </Button>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            {isAr
              ? "الصق رابط خرائط جوجل وسنقوم بملء خط الطول ودوائر العرض تلقائياً."
              : "Paste a Google Maps link and we'll fill latitude/longitude automatically."}
          </p>
          <FieldError message={googleMapsLinkError || t(errors.google_map_link?.message || "")} />
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 border-b border-gray-100 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                {isAr ? "الموقع على الخريطة" : "Location on Map"}
              </h3>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {isAr
                ? "انقر فوق الخريطة لتحديد الموقع، أو اسحب الدبوس للضبط الدقيق."
                : "Click the map to set the location, or drag the pin to fine-tune."}
            </p>
          </div>

          {locationData.latitude && locationData.longitude ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60 text-teal-700 dark:text-teal-300 text-xs font-mono shrink-0">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span>{Number(locationData.latitude).toFixed(5)}, {Number(locationData.longitude).toFixed(5)}</span>
            </div>
          ) : null}
        </div>

        {/* Full-width Map Container */}
        <div className="w-full rounded-xl overflow-hidden shadow-xs border border-gray-200 dark:border-neutral-800">
          <InteractiveMapPicker
            latitude={locationData.latitude ? Number(locationData.latitude) : undefined}
            longitude={locationData.longitude ? Number(locationData.longitude) : undefined}
            defaultCenter={activeMapCenter}
            onLocationSelect={handleMapSelect}
            height="h-[440px]"
            showControls={true}
            showBadges={true}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div id="error-latitude">
            <Label htmlFor="lat_coord" className="text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1">
              {isAr ? "خط العرض (Latitude)" : "Latitude"}
            </Label>
            <Input
              id="lat_coord"
              type="number"
              step="any"
              value={locationData.latitude ?? ""}
              onChange={(e) => handleLatitudeChange(e.target.value)}
              placeholder="25.204800"
              dir="ltr"
              error={!!errors.latitude}
              aria-invalid={!!errors.latitude}
              className={cn(
                "bg-white dark:bg-neutral-950 text-xs font-mono h-9",
                !errors.latitude && "border-gray-300 dark:border-neutral-700"
              )}
            />
            <FieldError message={t(errors.latitude?.message || "")} />
          </div>
          <div id="error-longitude">
            <Label htmlFor="lng_coord" className="text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1">
              {isAr ? "خط الطول (Longitude)" : "Longitude"}
            </Label>
            <Input
              id="lng_coord"
              type="number"
              step="any"
              value={locationData.longitude ?? ""}
              onChange={(e) => handleLongitudeChange(e.target.value)}
              placeholder="55.270800"
              dir="ltr"
              error={!!errors.longitude}
              aria-invalid={!!errors.longitude}
              className={cn(
                "bg-white dark:bg-neutral-950 text-xs font-mono h-9",
                !errors.longitude && "border-gray-300 dark:border-neutral-700"
              )}
            />
            <FieldError message={t(errors.longitude?.message || "")} />
          </div>
        </div>
      </div>
    </div>
  );
}