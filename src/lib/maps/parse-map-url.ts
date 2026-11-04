/**
 * Utility to extract latitude and longitude from various Google Maps URLs or direct coordinate strings.
 */

export interface ParsedCoords {
  lat: number;
  lng: number;
}

function extractDirectCoordinates(input: string): ParsedCoords | null {
  if (!input || typeof input !== "string") return null;

  const trimmed = input.trim();

  // 1. Direct "lat, lng" or "lat,lng" string
  const directMatch = trimmed.match(/^(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)$/);
  if (directMatch) {
    const lat = parseFloat(directMatch[1]);
    const lng = parseFloat(directMatch[2]);
    if (isValidLatLng(lat, lng)) {
      return { lat, lng };
    }
  }

  // 2. Decode URI if needed
  let decoded = trimmed;
  try {
    decoded = decodeURIComponent(trimmed);
  } catch {
    decoded = trimmed;
  }

  // 3. Various Google Maps URL patterns
  const patterns: Array<{ regex: RegExp; latFirst: boolean }> = [
    // /@25.2048,55.2708,17z
    { regex: /@(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
    // ?q=25.2048,55.2708 or &q=25.2048,55.2708
    { regex: /[?&]q=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
    // ?ll=25.2048,55.2708
    { regex: /[?&]ll=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
    // ?center=25.2048,55.2708
    { regex: /[?&]center=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
    // ?sll=25.2048,55.2708
    { regex: /[?&]sll=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
    // !3d25.2048!4d55.2708
    { regex: /!3d(-?\d+\.?\d*).*?!4d(-?\d+\.?\d*)/, latFirst: true },
    // !4d55.2708!3d25.2048
    { regex: /!4d(-?\d+\.?\d*).*?!3d(-?\d+\.?\d*)/, latFirst: false },
    // place/.../@25.2048,55.2708
    { regex: /place\/.*?@(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
    // data=...3d25.2048...4d55.2708
    { regex: /data=.*?3d(-?\d+\.?\d*).*?4d(-?\d+\.?\d*)/, latFirst: true },
    // pb=...2d55.2708...3d25.2048
    { regex: /pb=.*?2d(-?\d+\.?\d*).*?3d(-?\d+\.?\d*)/, latFirst: false },
  ];

  for (const { regex, latFirst } of patterns) {
    const match = decoded.match(regex);
    if (match) {
      const lat = parseFloat(latFirst ? match[1] : match[2]);
      const lng = parseFloat(latFirst ? match[2] : match[1]);
      if (isValidLatLng(lat, lng)) {
        return { lat, lng };
      }
    }
  }

  return null;
}

export async function resolveGoogleMapsUrl(url: string): Promise<ParsedCoords | null> {
  const direct = extractDirectCoordinates(url);
  if (direct) return direct;

  const trimmed = url.trim();
  // Check if it's a short URL (goo.gl, maps.app.goo.gl)
  if (trimmed.includes("goo.gl") || trimmed.includes("maps.app")) {
    try {
      const res = await fetch(`/api/expand-url?shortUrl=${encodeURIComponent(trimmed)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.longUrl) {
          const fromExpanded = extractDirectCoordinates(data.longUrl);
          if (fromExpanded) return fromExpanded;
        }
      }
    } catch (err) {
      console.error("Failed to expand short Google Maps URL:", err);
    }
  }

  return null;
}

export function isValidLatLng(lat: number, lng: number): boolean {
  return (
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180 &&
    !(lat === 0 && lng === 0)
  );
}

export function buildGoogleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}
