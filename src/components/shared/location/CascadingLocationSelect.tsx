"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountriesSelect } from "@/hooks/use-countries-select";
import { useDebounce } from "@/hooks/useDebounce";
import {
  countrySearchKey,
  detectCountryKeyForCity,
  fetchMatchedLocations,
  type LocationRef,
} from "@/lib/locations/matched-locations";
import { SearchableSelect } from "./SearchableSelect";

export interface CascadingLocationValue {
  country: LocationRef | null;
  city: LocationRef | null;
  area: LocationRef | null;
}

type Level = "country" | "city" | "area";

interface CascadingLocationSelectProps {
  value: CascadingLocationValue;
  onChange: (value: CascadingLocationValue) => void;
  required?: Partial<Record<Level, boolean>>;
  errors?: Partial<Record<Level, string>>;
  idPrefix?: string;
  className?: string;
  labelClassName?: string;
  triggerClassName?: string;
  /** Increment to open the Area list, e.g. after the city was filled automatically. */
  openAreaSignal?: number;
}

const CACHE_MS = 10 * 60 * 1000;

/**
 * Country → City → Area. Countries come from /dashboard/countries; cities and areas are searched
 * on demand in /api/matched-locations, scoped to the chosen country (and city, once the API filters
 * areas by it). Changing a level clears the levels below it.
 */
export function CascadingLocationSelect({
  value,
  onChange,
  required = {},
  errors = {},
  idPrefix = "location",
  className,
  labelClassName,
  triggerClassName,
  openAreaSignal = 0,
}: CascadingLocationSelectProps) {
  const { t, language } = useLanguage();
  const { countries, isLoading: countriesLoading } = useCountriesSelect();
  const countryOptions: LocationRef[] = countries.map((c: { country_id: number; country_name: string }) => ({
    id: c.country_id,
    name: c.country_name,
  }));

  const countryKey = countrySearchKey(value.country?.name);
  const cityId = value.city?.id ?? null;

  const [countrySearch, setCountrySearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [areaSearch, setAreaSearch] = useState("");
  const cityText = useDebounce(citySearch.trim());
  const areaText = useDebounce(areaSearch.trim());

  // Keyed by country / city / text: a late response for an old selection can never replace newer results.
  const citiesQuery = useQuery({
    queryKey: ["matched-locations", countryKey, "city", cityText],
    queryFn: ({ signal }) => fetchMatchedLocations({ countryKey: countryKey!, text: cityText, type: "city" }, signal),
    enabled: !!countryKey && cityText.length > 0,
    staleTime: CACHE_MS,
    placeholderData: (previous, previousQuery) => (previousQuery?.queryKey[1] === countryKey ? previous : undefined),
  });

  const areasQuery = useQuery({
    queryKey: ["matched-locations", countryKey, "area", cityId, areaText],
    queryFn: ({ signal }) => fetchMatchedLocations({ countryKey: countryKey!, text: areaText, type: "area", cityId }, signal),
    enabled: !!countryKey && !!value.city && areaText.length > 0,
    staleTime: CACHE_MS,
    placeholderData: (previous, previousQuery) =>
      previousQuery?.queryKey[1] === countryKey && previousQuery?.queryKey[3] === cityId ? previous : undefined,
  });

  // Edit forms may only know the city: find its country so the selects fill in the right order.
  const latest = useRef({ value, onChange });
  latest.current = { value, onChange };
  const detectedRef = useRef(false);
  useEffect(() => {
    const cityName = value.city?.name;
    if (detectedRef.current || value.country || !cityName || countryOptions.length === 0) return;
    detectedRef.current = true;
    const keyed = countryOptions
      .map((option) => ({ option, key: countrySearchKey(option.name) }))
      .filter((entry): entry is { option: LocationRef; key: string } => !!entry.key);
    detectCountryKeyForCity(cityName, keyed.map((entry) => entry.key)).then((key) => {
      const match = keyed.find((entry) => entry.key === key);
      const current = latest.current.value;
      if (match && !current.country && current.city?.name === cityName) {
        latest.current.onChange({ ...current, country: match.option });
      }
    });
  }, [value.country, value.city?.name, countryOptions]);

  const common = {
    retryText: t("locationSelect.retry"),
    clearText: t("locationSelect.clear"),
    footnote: language === "ar" ? t("locationSelect.englishOnly") : undefined,
    className: triggerClassName,
  };

  const field = (level: Level, control: React.ReactNode) => (
    <div className="min-w-0">
      <label
        htmlFor={`${idPrefix}-${level}`}
        className={cn("mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300", labelClassName)}
      >
        {t(`locationSelect.${level}`)}
        {required[level] && <span className="text-red-500"> *</span>}
      </label>
      {control}
      {errors[level] && <p className="mt-1 text-[11px] text-red-500">{errors[level]}</p>}
    </div>
  );

  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-3", className)}>
      {field(
        "country",
        <SearchableSelect
          {...common}
          footnote={undefined}
          id={`${idPrefix}-country`}
          value={value.country}
          onChange={(country) => {
            if (country?.id === value.country?.id && country?.name === value.country?.name) return;
            onChange({ country, city: null, area: null });
          }}
          options={countryOptions}
          filterLocally
          search={countrySearch}
          onSearchChange={setCountrySearch}
          isLoading={countriesLoading}
          placeholder={t("locationSelect.selectCountry")}
          searchPlaceholder={t("locationSelect.searchCountry")}
          emptyText={countriesLoading ? t("locationSelect.loading") : t("locationSelect.noCountries")}
          errorText={t("locationSelect.loadError")}
          invalid={!!errors.country}
        />
      )}
      {field(
        "city",
        <SearchableSelect
          {...common}
          id={`${idPrefix}-city`}
          value={value.city}
          onChange={(city) => {
            if (city?.id === value.city?.id && city?.name === value.city?.name) return;
            onChange({ ...value, city, area: null });
          }}
          options={citiesQuery.data ?? []}
          search={citySearch}
          onSearchChange={setCitySearch}
          isLoading={citiesQuery.isFetching}
          isError={citiesQuery.isError}
          onRetry={() => citiesQuery.refetch()}
          disabled={!value.country}
          placeholder={value.country ? t("locationSelect.selectCity") : t("locationSelect.selectCountryFirst")}
          searchPlaceholder={t("locationSelect.searchCity")}
          idleHint={t("locationSelect.typeToSearchCities")}
          emptyText={t("locationSelect.noCities")}
          errorText={t("locationSelect.loadError")}
          invalid={!!errors.city}
        />
      )}
      {field(
        "area",
        <SearchableSelect
          {...common}
          id={`${idPrefix}-area`}
          value={value.area}
          onChange={(area) => onChange({ ...value, area })}
          options={areasQuery.data ?? []}
          search={areaSearch}
          onSearchChange={setAreaSearch}
          isLoading={areasQuery.isFetching}
          isError={areasQuery.isError}
          onRetry={() => areasQuery.refetch()}
          disabled={!value.city}
          openSignal={openAreaSignal}
          placeholder={value.city ? t("locationSelect.selectArea") : t("locationSelect.selectCityFirst")}
          searchPlaceholder={t("locationSelect.searchArea")}
          idleHint={t("locationSelect.typeToSearchAreas")}
          emptyText={t("locationSelect.noAreas")}
          errorText={t("locationSelect.loadError")}
          invalid={!!errors.area}
        />
      )}
    </div>
  );
}
