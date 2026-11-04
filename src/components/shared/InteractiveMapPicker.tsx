"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MapPin, Crosshair, ExternalLink, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildGoogleMapsUrl, isValidLatLng } from "@/lib/maps/parse-map-url";
import "leaflet/dist/leaflet.css";

export interface LocationSelectedData {
  lat: number;
  lng: number;
  googleMapLink: string;
  city?: string;
  area?: string;
  landmark?: string;
  country?: string;
}

export interface InteractiveMapPickerProps {
  latitude?: number;
  longitude?: number;
  defaultCenter?: { lat: number; lng: number };
  onLocationSelect?: (data: LocationSelectedData) => void;
  height?: string;
  readOnly?: boolean;
  className?: string;
  defaultZoom?: number;
  showControls?: boolean;
  showBadges?: boolean;
  attributionControl?: boolean;
}

export function InteractiveMapPicker({
  latitude,
  longitude,
  defaultCenter,
  onLocationSelect,
  height = "h-[420px]",
  readOnly = false,
  className = "",
  defaultZoom = 13,
  showControls = true,
  showBadges = true,
  attributionControl = true,
}: InteractiveMapPickerProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);
  const lastUserActionCoordsRef = useRef<{ lat: number; lng: number } | null>(null);

  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number } | null>(
    latitude && longitude && isValidLatLng(latitude, longitude)
      ? { lat: latitude, lng: longitude }
      : null
  );
  const [isLocating, setIsLocating] = useState(false);
  const [isGeocoding, setIsGeocoding] = useState(false);

  const reverseGeocode = useCallback(async (lat: number, lng: number) => {
    try {
      setIsGeocoding(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        {
          headers: {
            "Accept-Language": isAr ? "ar,en" : "en,ar",
          },
        }
      );
      if (!res.ok) throw new Error("Nominatim request failed");
      const data = await res.json();
      const addr = data.address || {};

      const city = addr.city || addr.town || addr.municipality || addr.governorate || addr.state || "";
      const area = addr.suburb || addr.neighbourhood || addr.quarter || addr.district || "";
      const landmark = data.display_name?.split(",").slice(0, 3).join(", ") || "";
      const country = addr.country || "";

      return { city, area, landmark, country };
    } catch (err) {
      console.warn("Reverse geocode failed, returning coordinates only:", err);
      return { city: "", area: "", landmark: "", country: "" };
    } finally {
      setIsGeocoding(false);
    }
  }, [isAr]);

  const handleCoordsChange = useCallback(
    async (lat: number, lng: number, shouldGeocode = true) => {
      const roundedLat = Number(lat.toFixed(6));
      const roundedLng = Number(lng.toFixed(6));
      lastUserActionCoordsRef.current = { lat: roundedLat, lng: roundedLng };
      setCurrentCoords({ lat: roundedLat, lng: roundedLng });

      let details = { city: "", area: "", landmark: "", country: "" };
      if (shouldGeocode) {
        details = await reverseGeocode(roundedLat, roundedLng);
      }

      const googleMapLink = buildGoogleMapsUrl(roundedLat, roundedLng);
      onLocationSelect?.({
        lat: roundedLat,
        lng: roundedLng,
        googleMapLink,
        ...details,
      });
    },
    [onLocationSelect, reverseGeocode]
  );

  // Helper for pin icon
  const getCustomPinIcon = useCallback((L: any) => {
    return L.divIcon({
      className: "custom-map-pin-container",
      html: `
        <div style="position: relative; width: 34px; height: 42px; transform: translate(-50%, -100%); cursor: pointer;">
          <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));">
            <path d="M17 0C7.61116 0 0 7.61116 0 17C0 27.5 17 42 17 42C17 42 34 27.5 34 17C34 7.61116 26.3888 0 17 0Z" fill="#008081"/>
            <circle cx="17" cy="17" r="6.5" fill="white"/>
            <circle cx="17" cy="17" r="3" fill="#008081"/>
          </svg>
          <div style="position: absolute; bottom: -2px; left: 50%; width: 14px; height: 4px; background: rgba(0,0,0,0.25); border-radius: 50%; transform: translateX(-50%); filter: blur(1px);"></div>
        </div>
      `,
      iconSize: [34, 42],
      iconAnchor: [17, 42],
    });
  }, []);

  // Initialize Leaflet Map
  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;
      if (!isMounted || !mapContainerRef.current) return;
      leafletRef.current = L;

      const initialLat =
        latitude && isValidLatLng(latitude, longitude || 0)
          ? latitude
          : defaultCenter && isValidLatLng(defaultCenter.lat, defaultCenter.lng)
          ? defaultCenter.lat
          : 25.2048;
      const initialLng =
        longitude && isValidLatLng(latitude || 0, longitude)
          ? longitude
          : defaultCenter && isValidLatLng(defaultCenter.lat, defaultCenter.lng)
          ? defaultCenter.lng
          : 55.2708;
      const initialZoom = latitude && longitude && isValidLatLng(latitude, longitude) ? 15 : defaultZoom;

      const map = L.map(mapContainerRef.current, {
        center: [initialLat, initialLng],
        zoom: initialZoom,
        zoomControl: true,
        attributionControl: attributionControl,
      });
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        subdomains: ["a", "b", "c"],
      }).addTo(map);

      const customPinIcon = getCustomPinIcon(L);

      if (latitude && longitude && isValidLatLng(latitude, longitude)) {
        const marker = L.marker([latitude, longitude], {
          icon: customPinIcon,
          draggable: !readOnly,
        }).addTo(map);

        marker.on("dragend", () => {
          const pos = marker.getLatLng();
          handleCoordsChange(pos.lat, pos.lng, true);
        });

        markerRef.current = marker;
      }

      if (!readOnly) {
        map.on("click", (e: any) => {
          const lat = e.latlng.lat;
          const lng = e.latlng.lng;

          if (markerRef.current) {
            markerRef.current.setLatLng([lat, lng]);
          } else {
            const marker = L.marker([lat, lng], {
              icon: customPinIcon,
              draggable: true,
            }).addTo(map);

            marker.on("dragend", () => {
              const pos = marker.getLatLng();
              handleCoordsChange(pos.lat, pos.lng, true);
            });

            markerRef.current = marker;
          }

          handleCoordsChange(lat, lng, true);
        });
      }

      [100, 300, 600, 1000].forEach((delay) => {
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        }, delay);
      });

      if (typeof ResizeObserver !== "undefined" && mapContainerRef.current) {
        const resizeObserver = new ResizeObserver(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        });
        resizeObserver.observe(mapContainerRef.current);
      }
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !leafletRef.current) return;
    const L = leafletRef.current;
    const map = mapInstanceRef.current;

    if (latitude && longitude && isValidLatLng(latitude, longitude)) {
      const isFromUserAction =
        lastUserActionCoordsRef.current &&
        Math.abs(lastUserActionCoordsRef.current.lat - latitude) < 0.0001 &&
        Math.abs(lastUserActionCoordsRef.current.lng - longitude) < 0.0001;

      setCurrentCoords({ lat: latitude, lng: longitude });

      if (markerRef.current) {
        markerRef.current.setLatLng([latitude, longitude]);
      } else {
        const customPinIcon = getCustomPinIcon(L);
        const marker = L.marker([latitude, longitude], {
          icon: customPinIcon,
          draggable: !readOnly,
        }).addTo(map);

        marker.on("dragend", () => {
          const pos = marker.getLatLng();
          handleCoordsChange(pos.lat, pos.lng, true);
        });

        markerRef.current = marker;
      }

      // Only fly/pan if the change was external (e.g. from input, city change, url parse)
      if (!isFromUserAction) {
        map.flyTo([latitude, longitude], 15, { duration: 0.8 });
      }
      setTimeout(() => map.invalidateSize(), 150);
    } else if (defaultCenter && isValidLatLng(defaultCenter.lat, defaultCenter.lng)) {
      // Pan to default center (e.g. when country or city was selected)
      map.panTo([defaultCenter.lat, defaultCenter.lng], { duration: 0.8 });
      setTimeout(() => map.invalidateSize(), 150);
    }
  }, [latitude, longitude, defaultCenter?.lat, defaultCenter?.lng, readOnly, handleCoordsChange, getCustomPinIcon]);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert(t("locations.mapPicker.geolocationUnsupported"));
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        if (mapInstanceRef.current) {
          mapInstanceRef.current.flyTo([lat, lng], 15, { duration: 1.2 });
        }
        handleCoordsChange(lat, lng, true);
      },
      (err) => {
        setIsLocating(false);
        console.warn("Geolocation failed:", err);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 shadow-sm ${className}`}>
      {/* ── Map Container ────────────────────────────────────────── */}
      <div ref={mapContainerRef} className={`w-full min-w-full ${height} z-0`} style={{ minHeight: "340px" }} />

      {/* ── Floating Controls (Top Right) ────────────────────────── */}
      {showControls && (
        <div className="absolute top-2.5 right-2.5 z-[1000] flex items-center gap-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-1 rounded-lg border border-gray-200/80 dark:border-neutral-800">
          <button
            type="button"
            onClick={handleLocateMe}
            disabled={isLocating}
            title={t("locations.mapPicker.locateMeTitle")}
            className="p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium"
          >
            <Crosshair className={`h-3.5 w-3.5 text-[#008081] ${isLocating ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">{t("locations.mapPicker.myLocation")}</span>
          </button>

          {currentCoords && (
            <a
              href={buildGoogleMapsUrl(currentCoords.lat, currentCoords.lng)}
              target="_blank"
              rel="noopener noreferrer"
              title={t("locations.mapPicker.openInGoogleMaps")}
              className="p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium"
            >
              <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
              <span className="hidden sm:inline">{t("locations.mapPicker.maps")}</span>
            </a>
          )}
        </div>
      )}

      {/* ── Coordinates & Status Badge (Bottom Bar) ────────────────── */}
      {showBadges && (
        <div className="absolute bottom-2 left-2 right-2 z-[1000] flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div className="pointer-events-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-200/80 dark:border-neutral-800 text-[11px] font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-[#008081] shrink-0" />
            {currentCoords ? (
              <span className="font-mono">
                {currentCoords.lat.toFixed(5)}, {currentCoords.lng.toFixed(5)}
              </span>
            ) : (
              <span>{t("locations.mapPicker.clickToPinpoint")}</span>
            )}

            {isGeocoding && (
              <span className="flex items-center gap-1 text-[#008081] text-[10px]">
                <Loader2 className="h-2.5 w-2.5 animate-spin" />
                <span>{t("locations.mapPicker.detectingAddress")}</span>
              </span>
            )}
          </div>

          <div className="pointer-events-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gray-500 dark:text-gray-400 border border-gray-200/80 dark:border-neutral-800">
            <span>{t("locations.mapPicker.dragHint")}</span>
          </div>
        </div>
      )}
    </div>
  );
}