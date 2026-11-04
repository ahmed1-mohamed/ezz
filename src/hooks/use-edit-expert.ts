"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminExpertsService, fetchExpertDetails } from "@/data/api-client";

function extractExpertData(response: any) {
  if (!response) return null;
  let raw = response?.data ?? response;
  if (
    raw &&
    raw.data &&
    (raw.data.expert_id ||
      raw.data.id ||
      raw.data.display_name ||
      raw.data.user ||
      raw.data.email)
  ) {
    raw = raw.data;
  }
  return raw;
}

export function useEditExpertData(expertId: number | null) {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;

  // These keys are shared with AddExpertModal, which caches the JSON body; return the
  // body (not the axios response) so both consumers read the same cache shape.
  const { data: languagesData, isLoading: languagesLoading } = useQuery({
    queryKey: ["expert-languages"],
    queryFn: async () => (await AdminExpertsService.getLanguages()).data,
  });

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ["expert-categories"],
    queryFn: async () => (await AdminExpertsService.getCategories()).data,
  });

  const { data: countriesData, isLoading: countriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => (await AdminExpertsService.getCountries()).data,
  });

  const {
    data: expertData,
    isLoading: expertLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["adminEditExpert", expertId ? String(expertId) : ""],
    queryFn: async () => {
      if (!expertId) return null;
      // Primary: admin dashboard endpoint (includes private administrative data such as email/phone).
      try {
        const adminRes = (await AdminExpertsService.getExpert(expertId)) as any;
        const data = adminRes?.data?.data ?? adminRes?.data ?? adminRes;
        if (data && (data.expert_id || data.id || data.display_name || data.user)) {
          return data;
        }
      } catch (err) {
        console.warn(
          "AdminExpertsService.getExpert failed in edit, falling back to fetchExpertDetails",
          err,
        );
      }

      // Fallback: public expert endpoint if the admin endpoint fails.
      if (token) {
        try {
          const res = await fetchExpertDetails(expertId, token);
          const data = res?.data?.data ?? res?.data ?? res;
          if (data) return data;
        } catch (e) {
          console.warn("fetchExpertDetails fallback failed", e);
        }
      }
      return null;
    },
    enabled: !!expertId,
  });

  const languages = useMemo(() => {
    const raw =
      (languagesData as any)?.data?.data ??
      (languagesData as any)?.data ??
      languagesData ??
      [];
    return Array.isArray(raw) ? raw : [];
  }, [languagesData]);

  const categories = useMemo(() => {
    const raw =
      (categoriesData as any)?.data?.data ??
      (categoriesData as any)?.data ??
      categoriesData ??
      [];
    return Array.isArray(raw) ? raw : [];
  }, [categoriesData]);

  const countries = useMemo(() => {
    const raw =
      (countriesData as any)?.data?.data ??
      (countriesData as any)?.data ??
      countriesData ??
      [];
    return Array.isArray(raw) ? raw : [];
  }, [countriesData]);

  const rawExpert = extractExpertData(expertData);

  const expert = useMemo(() => {
    if (
      !rawExpert ||
      (!rawExpert.expert_id &&
        !rawExpert.id &&
        !rawExpert.display_name &&
        !rawExpert.user &&
        !rawExpert.name)
    ) {
      return null;
    }

    const resolveItemIds = (
      items: any[],
      idKeys: string[],
      nameKeys: string[],
      availableList: any[],
      listIdKeys: string[],
    ): number[] => {
      if (!Array.isArray(items)) return [];
      const result: number[] = [];
      for (const item of items) {
        if (item === null || item === undefined) continue;
        if (typeof item === "number" && !isNaN(item) && item > 0) {
          result.push(item);
          continue;
        }
        if (
          typeof item === "string" &&
          !isNaN(Number(item)) &&
          Number(item) > 0
        ) {
          result.push(Number(item));
          continue;
        }

        let foundId: number | null = null;
        if (typeof item === "object") {
          for (const k of idKeys) {
            const val = Number(item[k]);
            if (!isNaN(val) && val > 0) {
              foundId = val;
              break;
            }
          }
          if (!foundId && item.pivot) {
            for (const k of idKeys) {
              const val = Number(item.pivot[k]);
              if (!isNaN(val) && val > 0) {
                foundId = val;
                break;
              }
            }
          }
        }

        if (foundId) {
          result.push(foundId);
          continue;
        }

        // Match by name or code against availableList
        const rawName =
          typeof item === "string"
            ? item
            : item.name || item.code || item.title || "";
        if (
          rawName &&
          typeof rawName === "string" &&
          availableList.length > 0
        ) {
          const target = rawName.trim().toLowerCase();
          const matched = availableList.find((avail) => {
            for (const nk of nameKeys) {
              if (
                avail[nk] &&
                String(avail[nk]).trim().toLowerCase() === target
              ) {
                return true;
              }
            }
            return false;
          });
          if (matched) {
            for (const lk of listIdKeys) {
              const val = Number(matched[lk]);
              if (!isNaN(val) && val > 0) {
                result.push(val);
                break;
              }
            }
          }
        }
      }
      return Array.from(new Set(result));
    };

    const resolvedCountries = resolveItemIds(
      rawExpert.countries,
      ["country_id", "id"],
      ["name", "code", "currency"],
      countries,
      ["country_id", "id"],
    );

    const resolvedCategories = resolveItemIds(
      rawExpert.categories,
      ["category_id", "id"],
      ["name", "code", "title"],
      categories,
      ["category_id", "id"],
    );

    const resolvedLanguages = resolveItemIds(
      rawExpert.languages,
      ["language_id", "id"],
      ["name", "code", "language"],
      languages,
      ["language_id", "id"],
    );

    const expertEmail =
      rawExpert.email ||
      rawExpert.user?.email ||
      (typeof rawExpert.image_url === "string"
        ? rawExpert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1]
        : "") ||
      "";

    const expertPhone =
      rawExpert.phone_number ||
      rawExpert.phone ||
      rawExpert.user?.phone_number ||
      "";

    return {
      ...rawExpert,
      expert_id: rawExpert.expert_id || rawExpert.id || expertId,
      display_name: rawExpert.display_name || rawExpert.name || "",
      status: rawExpert.status || "approved",
      title: rawExpert.title || "",
      rating_avg: String(rawExpert.rating_avg || "0.00"),
      rating_count: rawExpert.rating_count ?? 0,
      consultions: rawExpert.total_bookings ?? rawExpert.consultions ?? 0,
      total_bookings: rawExpert.total_bookings ?? rawExpert.consultions ?? 0,
      responded_bookings: rawExpert.responded_bookings ?? 0,
      years_experience: rawExpert.years_experience ?? 0,
      starting_from:
        rawExpert.starting_from ?? rawExpert.rate_per_30min_cents ?? 0,
      rate_per_30min_cents: rawExpert.rate_per_30min_cents ?? 0,
      currency: rawExpert.currency || "AED",
      bio: rawExpert.bio || "",
      website: rawExpert.website || "",
      linkedin: rawExpert.linkedin || "",
      podcast: rawExpert.podcast === 1 || rawExpert.podcast === true,
      photo_url: rawExpert.photo_url || rawExpert.image_url || null,
      packages: Array.isArray(rawExpert.packages) ? rawExpert.packages : [],
      stars_distribution: Array.isArray(rawExpert.stars_distribution)
        ? rawExpert.stars_distribution
        : [],
      certifications:
        Array.isArray(rawExpert.certifications) &&
        rawExpert.certifications.length > 0
          ? rawExpert.certifications
          : Array.isArray(rawExpert.experiences)
            ? rawExpert.experiences.map((e: any) => ({
                cert_name: e.cert_name || e.name || e.title || "",
              }))
            : [],
      countries: resolvedCountries,
      categories: resolvedCategories,
      experiences: Array.isArray(rawExpert.experiences)
        ? rawExpert.experiences
        : [],
      languages: resolvedLanguages,
      email: expertEmail,
      phone_number: expertPhone,
      user: rawExpert.user || {
        first_name:
          rawExpert.first_name ||
          rawExpert.display_name?.split(" ")[0] ||
          "",
        last_name:
          rawExpert.last_name ||
          rawExpert.display_name?.split(" ").slice(1).join(" ") ||
          "",
        email: expertEmail,
        phone_number: expertPhone,
      },
    };
  }, [rawExpert, expertId, categories, languages, countries]);

  const loading =
    languagesLoading || categoriesLoading || countriesLoading || expertLoading;

  return {
    languages,
    categories,
    countries,
    expert,
    loading,
    isError,
    error,
  };
}