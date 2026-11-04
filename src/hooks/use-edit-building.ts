"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchBuildingsDetails } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useEditBuildingData(
  buildingId: number | null,
  isOpen: boolean,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();

  const [buildingData, setBuildingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token || !isOpen || !buildingId) return;

    const loadBuilding = async () => {
      setLoading(true);
      try {
        const data = await fetchBuildingsDetails(buildingId, token);
        setBuildingData(data);
      } catch (error) {
        console.error("Error fetching building:", error);
        toast.error(getApiErrorMessage(error, t, t("buildings.errors.fetchFailed")), {
          id: API_ERROR_TOAST_ID,
        });
      } finally {
        setLoading(false);
      }
    };

    loadBuilding();
  }, [token, isOpen, buildingId]);

  return {
    buildingData,
    loading,
  };
}
