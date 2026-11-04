"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams, usePathname } from "next/navigation";
import useBookingDetails from "@/hooks/use-booking-details";
import { Button } from "@/components/ui/button";
import { Loader2, XCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BookingHeader } from "@/features/reservations/components/booking-details/BookingHeader";
import { BookingStatusPills } from "@/features/reservations/components/booking-details/BookingStatusPills";
import { BookingStagesTimeline } from "@/features/reservations/components/booking-details/BookingStagesTimeline";
import { BookingInfoCards } from "@/features/reservations/components/booking-details/BookingInfoCards";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BookingDetailsPage() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const token = session?.user?.accessToken as string;
  const cleanId = params?.id ? Number(String(params.id).replace(/\D/g, "")) : 0;
  const reservationId = cleanId || Number(params?.id) || 0;

  const [salesOfferFile, setSalesOfferFile] = useState<File | null>(null);
  const [spaFile, setSpaFile] = useState<File | null>(null);
  const [adminComment, setAdminComment] = useState("");

  const {
    bookingData,
    isLoading,
    isError,
    approveMutation,
    declineMutation,
    uploadSalesOfferMutation,
    uploadSPAMutation,
    approveDownPaymentMutation,
    uploadDownPaymentMutation,
    acceptSalesOfferMutation,
    formatPrice,
    stages,
    getStatusIcon,
    getStatusBadge,
  } = useBookingDetails({ reservationId });

  const handleSalesOfferUpload = () => {
    if (!salesOfferFile) return;
    uploadSalesOfferMutation.mutate(
      {
        file: salesOfferFile,
        comments: adminComment,
      },
      {
        onSuccess: () => {
          setSalesOfferFile(null);
          setAdminComment("");
          setTimeout(() => {
            const stage3El = document.getElementById("stage-3");
            if (stage3El) {
              stage3El.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 200);
        },
      }
    );
  };

  const handleSpaUpload = () => {
    if (!spaFile) return;
    uploadSPAMutation.mutate(
      {
        file: spaFile,
        comments: adminComment,
      },
      {
        onSuccess: () => {
          setSpaFile(null);
          setAdminComment("");
        },
      }
    );
  };

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      const blob = await response.blob();
      const contentType = blob.type;
      let ext = "";
      if (
        contentType.includes("image/jpeg") ||
        contentType.includes("image/jpg")
      )
        ext = ".jpg";
      else if (contentType.includes("image/png")) ext = ".png";
      else if (contentType.includes("image/gif")) ext = ".gif";
      else if (contentType.includes("application/pdf")) ext = ".pdf";
      else if (contentType.includes("application/msword")) ext = ".doc";
      else if (
        contentType.includes(
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        )
      )
        ext = ".docx";

      const finalFilename = filename + ext;
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = finalFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-teal-600" />
          <p className="mt-4 text-gray-600">{t("reservations.details.loading")}</p>
        </div>
      </div>
    );
  }

  if (isError || !bookingData) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="max-w-md text-center">
          <XCircle className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            {t("reservations.details.errorLoading")}
          </h2>
          <Button
            onClick={() => router.push(`${routePrefix}/reservations`)}
            className="mt-6 bg-teal-600 hover:bg-teal-700"
          >
            {t("reservations.details.backToBookings")}
          </Button>
        </div>
      </div>
    );
  }

  const displayReservationId = bookingData?.reservation?.reservation_id || bookingData?.reservation?.id || reservationId;

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link prefetch={false} href={`${routePrefix}/home`} className="hover:text-teal-600 transition-colors">
          {t("common.home")}
        </Link>
        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
        <Link prefetch={false} href={`${routePrefix}/reservations`} className="hover:text-teal-600 transition-colors">
          {t("reservations.details.bookings")}
        </Link>
        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
        <span className="text-gray-900">
          {t("reservations.details.bookingNumber", { id: displayReservationId })}
        </span>
      </div>

      <BookingHeader reservationId={displayReservationId} />

      <BookingStatusPills
        stages={stages}
        getStatusIcon={getStatusIcon}
        getStatusBadge={getStatusBadge}
        reservationId={displayReservationId}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BookingStagesTimeline
          stages={stages}
          getStatusBadge={getStatusBadge}
          handleDownload={handleDownload}
          salesOfferFile={salesOfferFile}
          setSalesOfferFile={setSalesOfferFile}
          spaFile={spaFile}
          setSpaFile={setSpaFile}
          adminComment={adminComment}
          setAdminComment={setAdminComment}
          uploadSalesOfferMutation={uploadSalesOfferMutation}
          uploadSPAMutation={uploadSPAMutation}
          approveMutation={approveMutation}
          declineMutation={declineMutation}
          approveDownPaymentMutation={approveDownPaymentMutation}
          uploadDownPaymentMutation={uploadDownPaymentMutation}
          acceptSalesOfferMutation={acceptSalesOfferMutation}
          handleSalesOfferUpload={handleSalesOfferUpload}
          handleSpaUpload={handleSpaUpload}
          reservationId={displayReservationId}
        />

        <BookingInfoCards
          bookingData={bookingData}
          formatPrice={formatPrice}
        />
      </div>
    </div>
  );
}