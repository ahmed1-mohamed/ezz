"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { fetchAd } from "@/data/api-client";
import { Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AdHeader } from "./view-ad-modal-components/AdHeader";
import { AdDetailsSection } from "./view-ad-modal-components/AdDetailsSection";
import { CtaDetailsSection } from "./view-ad-modal-components/CtaDetailsSection";
import { AdImageSection } from "./view-ad-modal-components/AdImageSection";
import { PlacementDetailsSection } from "./view-ad-modal-components/PlacementDetailsSection";
import { LinkedEntitySection } from "./view-ad-modal-components/LinkedEntitySection";
import { TimestampsSection } from "./view-ad-modal-components/TimestampsSection";

interface Ad {
  creative_id: string;
  creative_title: string;
  type: string;
  platform: "Web" | "Mobile" | "Both";
  country: string;
  location: string;
  views: number;
  clicks: number;
  ctr: string;
  status: string;
}

interface ViewAdModalProps {
  ad: Ad | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onSuccess?: () => void;
}

export function ViewAdModal({
  ad,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onSuccess,
}: ViewAdModalProps) {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [adDetails, setAdDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const fetchAdDetails = async () => {
    if (!session?.user?.accessToken || !ad) return;
    setLoading(true);
    try {
      const response = await fetchAd(ad.creative_id, session.user?.accessToken);
      setAdDetails(response);
    } catch (error) {
      console.error("Error fetching ad details:", error);
      toast.error(getApiErrorMessage(error, t, t("ads.details.failedLoadDetails")), { id: API_ERROR_TOAST_ID });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isOpen && ad) {
      fetchAdDetails();
    }
  }, [isOpen, ad]);
  if (!isOpen || !ad) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Advertisement Details"
      size="xl"
      showCloseButton={true}
      scrollable={true}
    >
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"></div>
            <p className="mt-4 text-sm text-gray-600">Loading ad details...</p>
          </div>
        </div>
      ) : (
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-6">
          <AdHeader adDetails={adDetails} ad={ad} />
          <AdDetailsSection adDetails={adDetails} ad={ad} />
          <CtaDetailsSection adDetails={adDetails} />
          <AdImageSection adDetails={adDetails} />
          <PlacementDetailsSection adDetails={adDetails} />
          <LinkedEntitySection adDetails={adDetails} />
          <TimestampsSection adDetails={adDetails} />
          <div className="flex gap-3 justify-end pt-4 border-t">
            <Button
              variant="outline"
              onClick={onDelete}
              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <Button
              onClick={onEdit}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
