import { API_BASE_URL } from "@/config/api";

export type MatchedLocationType = "city" | "area" | "building";

export interface LocationRef {
  id?: number | string | null;
  name: string;
}

interface MatchedLocation {
  type: MatchedLocationType;
  id: number;
  name: string;
}

const COUNTRY_KEYS: [string, string[]][] = [
  ["uae", ["uae", "united arab emirates", "emirates", "الإمارات", "الامارات"]],
  ["egypt", ["egypt", "مصر"]],
  ["oman", ["oman", "عمان", "سلطنة عمان"]],
  ["ksa", ["ksa", "saudi arabia", "saudi", "السعودية"]],
];

/**
 * `/api/matched-locations` scopes results with a `country` header that expects a short key
 * ("uae", "egypt", "oman"), not the country's id or full name.
 */
export function countrySearchKey(countryName?: string | null): string | null {
  const name = countryName?.trim().toLowerCase();
  if (!name) return null;
  const match = COUNTRY_KEYS.find(([, aliases]) => aliases.some((alias) => name === alias || name.includes(alias)));
  return match ? match[0] : name;
}

/**
 * Searches cities or areas of one country. `text` is required in practice: the endpoint fails
 * without it. `cityId` is sent for areas so results narrow to the city once the API supports it.
 */
export async function fetchMatchedLocations(
  params: { countryKey: string; text: string; type: Exclude<MatchedLocationType, "building">; cityId?: number | string | null },
  signal?: AbortSignal
): Promise<LocationRef[]> {
  const query = new URLSearchParams({ text: params.text.trim() });
  if (params.type === "area" && params.cityId != null && params.cityId !== "") query.set("city_id", String(params.cityId));

  const res = await fetch(`${API_BASE_URL}/matched-locations?${query.toString()}`, {
    headers: { Accept: "application/json", country: params.countryKey },
    signal,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok || body?.status === false) throw new Error(body?.message || `Location search failed (${res.status})`);

  const items: MatchedLocation[] = Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : [];
  const seen = new Set<string>();
  const results: LocationRef[] = [];
  for (const item of items) {
    const name = String(item?.name ?? "").trim();
    if (item?.type !== params.type || !name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    results.push({ id: item.id, name });
  }
  return results;
}

/** Finds which country a city name belongs to (edit forms whose record has no country). */
export async function detectCountryKeyForCity(cityName: string, countryKeys: string[]): Promise<string | null> {
  const needle = cityName.trim().toLowerCase();
  if (!needle) return null;
  for (const countryKey of countryKeys) {
    try {
      const cities = await fetchMatchedLocations({ countryKey, text: cityName, type: "city" });
      if (cities.some((c) => c.name.toLowerCase() === needle)) return countryKey;
    } catch {
      // Try the next country.
    }
  }
  return null;
}

const ISO_TO_KEY: Record<string, string> = { AE: "uae", EG: "egypt", OM: "oman", SA: "ksa" };

/** Google's country short_name ("AE") → the matched-locations country key ("uae"). */
export function countryKeyFromIso(code?: string | null): string | null {
  return code ? ISO_TO_KEY[code.trim().toUpperCase()] ?? null : null;
}

const GENERIC_WORDS = /\b(city|governorate|emirate|province|region|district|municipality|county)\b/gi;

/**
 * Resolves geocoder names (most specific first) to a system city / area of the given country.
 * Each name is also tried without generic words ("Cairo Governorate" → "Cairo"). Exact matches
 * win over partial ones, and a system name contained in the geocoder name is preferred.
 */
export async function resolveLocationByNames(
  countryKey: string,
  type: "city" | "area",
  names: (string | undefined | null)[],
  cityId?: number | string | null,
  exactOnly = false
): Promise<LocationRef | null> {
  const variants = Array.from(
    new Set(
      names
        .flatMap((name) => [name?.trim(), name?.replace(GENERIC_WORDS, " ").replace(/\s+/g, " ").trim()])
        .filter((n): n is string => !!n && n.length >= 2)
    )
  );

  const searched: { variant: string; results: LocationRef[] }[] = [];
  for (const variant of variants) {
    const results = await fetchMatchedLocations({ countryKey, text: variant, type, cityId }).catch(() => []);
    const exact = results.find((r) => r.name.toLowerCase() === variant.toLowerCase());
    if (exact) return exact;
    searched.push({ variant: variant.toLowerCase(), results });
  }
  if (exactOnly) return null;

  for (const { variant, results } of searched) {
    const contained = results.find((r) => r.name.length >= 3 && variant.includes(r.name.toLowerCase()));
    if (contained) return contained;
  }
  for (const { variant, results } of searched) {
    const containing = results.find((r) => r.name.toLowerCase().includes(variant));
    if (containing) return containing;
  }
  return null;
}
