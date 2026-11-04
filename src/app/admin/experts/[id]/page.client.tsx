"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  FileText,
  Edit,
  User,
  Star,
} from "lucide-react";
import Link from "next/link";
import { OverviewTab } from "./components/tabs/OverviewTab";
import { ReviewsTab } from "./components/tabs/ReviewsTab";
import { TransactionsTab } from "./components/tabs/TransactionsTab";
import { UpcomingMeetingsTab } from "./components/tabs/UpcomingMeetingsTab";
import { useExpertDetailLogic } from "./hooks/useExpertDetailLogic";
import { getApiErrorMessage } from "@/lib/api-errors";
import { ExpertHeaderCard } from "./components/ExpertHeaderCard";
import { ExpertContactInfoCard } from "./components/ExpertContactInfoCard";
import { ExpertSpecializationsCard } from "./components/ExpertSpecializationsCard";
import { ExpertCountriesCard } from "./components/ExpertCountriesCard";
import { ExpertExperiencesCard } from "./components/ExpertExperiencesCard";

export default function ExpertDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: expertId } = use(params);
  const router = useRouter();

  const {
    expertDetailsQuery,
    reviewsQuery,
    transactionsQuery,
    bookingsQuery,
    activeTab,
    setActiveTab,
    isActive,
    setIsActive,
    processingBookingId,
    handleConfirm,
    handleDecline,
    handleReschedule,
    t,
  } = useExpertDetailLogic(expertId);

  const { data: apiResponse, isLoading, isError, error } = expertDetailsQuery;
  const { data: reviewsData, isLoading: loadingReviews } = reviewsQuery;
  const { data: transactionsData, isLoading: loadingTransactions } = transactionsQuery;
  const { data: bookingsData, isLoading: loadingBookings } = bookingsQuery;

  let rawExpert = apiResponse?.data ?? apiResponse;
  if (rawExpert?.data && (rawExpert.data.expert_id || rawExpert.data.id || rawExpert.data.display_name)) {
    rawExpert = rawExpert.data;
  }
  const expert = rawExpert && (rawExpert.expert_id || rawExpert.id || rawExpert.display_name || rawExpert.user)
    ? {
        ...rawExpert,
        expert_id: rawExpert.expert_id || rawExpert.id || expertId,
        display_name: rawExpert.display_name || rawExpert.name || t("experts.columns.expert"),
        status: rawExpert.status || "approved",
        rating_avg: String(rawExpert.rating_avg || "0.00"),
        rating_count: rawExpert.rating_count ?? 0,
        consultions: rawExpert.total_bookings ?? rawExpert.consultions ?? 0,
        total_bookings: rawExpert.total_bookings ?? rawExpert.consultions ?? 0,
        responded_bookings: rawExpert.responded_bookings ?? 0,
        years_experience: rawExpert.years_experience ?? 0,
        starting_from: rawExpert.starting_from ?? 0,
        currency: rawExpert.currency || "AED",
        bio: rawExpert.bio || "",
        image_url: rawExpert.image_url || rawExpert.photo_url || null,
        packages: Array.isArray(rawExpert.packages) ? rawExpert.packages : [],
        stars_distribution: Array.isArray(rawExpert.stars_distribution) ? rawExpert.stars_distribution : [],
        countries: Array.isArray(rawExpert.countries) ? rawExpert.countries : [],
        categories: Array.isArray(rawExpert.categories) ? rawExpert.categories : [],
        experiences: Array.isArray(rawExpert.experiences) ? rawExpert.experiences : [],
        languages: Array.isArray(rawExpert.languages) ? rawExpert.languages : [],
        user: rawExpert.user || {
          first_name: rawExpert.first_name || rawExpert.display_name?.split(" ")[0] || "",
          last_name: rawExpert.last_name || rawExpert.display_name?.split(" ").slice(1).join(" ") || "",
          email: rawExpert.email || (typeof rawExpert.image_url === "string" ? rawExpert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1] : "") || "",
          phone_number: rawExpert.phone_number || rawExpert.phone || "",
        },
      }
    : null;

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      approved: "bg-green-50 text-green-700 border-green-200",
      pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
      rejected: "bg-red-50 text-red-700 border-red-200",
    };
    return (
      <Badge
        className={`${styles[status] || "bg-gray-50 text-gray-700 border-gray-200"
          } border text-xs capitalize`}
      >
        {status}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return t("experts.table.na");
    const date = new Date(dateString.replace(" ", "T"));
    if (isNaN(date.getTime())) return t("experts.table.na");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent"></div>
          <p className="mt-4 text-sm text-gray-600">
            {t("experts.messages.loading")}
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        {t("experts.errorLabel")} {getApiErrorMessage(error, t, t("experts.failedLoad"))}
      </div>
    );
  }

  if (!expert) {
    return (
      <div className="p-4 text-center text-gray-500">
        {t("experts.table.noExperts")}
      </div>
    );
  }

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link prefetch={false} href="/admin/home" className="hover:text-teal-600 transition-colors">
          {t("common.home")}
        </Link>
        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
        <Link prefetch={false} href="/admin/experts" className="hover:text-teal-600 transition-colors">
          {t("experts.title")}
        </Link>
        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
        <span className="text-gray-900">{expert.display_name}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/admin/experts")}
          >
            <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">
            {t("experts.details.title")}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Phone className="h-4 w-4" />
            {t("experts.columns.contact")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
            onClick={() => router.push(`/admin/experts/${expert.expert_id}/edit`)}
          >
            <Edit className="h-4 w-4" />
            {t("common.edit")}
          </Button>
        </div>
      </div>

      <ExpertHeaderCard expert={expert} t={t} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <ExpertContactInfoCard
            expert={expert}
            isActive={isActive}
            setIsActive={setIsActive}
            t={t}
          />
          <ExpertSpecializationsCard categories={expert.categories} t={t} />
          <ExpertCountriesCard countries={expert.countries} currency={expert.currency} t={t} />
          <ExpertExperiencesCard experiences={expert.experiences} t={t} />
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="border-b border-gray-200 bg-white">
              <div className="flex overflow-x-auto">
                {[
                  { id: "overview", label: t("experts.details.overview"), icon: User },
                  { id: "reviews", label: t("experts.details.reviews"), icon: Star },
                  { id: "transactions", label: t("experts.details.transactions"), icon: FileText },
                  {
                    id: "upcoming-meetings",
                    label: t("experts.details.upcomingMeetings"),
                    icon: Calendar,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id
                        ? "border-teal-600 text-teal-600 bg-teal-50/50"
                        : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                  >
                    <tab.icon
                      className={`h-4 w-4 ${activeTab === tab.id ? "text-teal-600" : "text-gray-400"}`}
                    />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === "overview" && (
                <OverviewTab
                  expert={expert}
                  t={t}
                  formatDate={formatDate}
                  getStatusBadge={getStatusBadge}
                />
              )}

              {activeTab === "reviews" && (
                <ReviewsTab
                  loadingReviews={loadingReviews}
                  reviewsData={reviewsData}
                  expert={expert}
                  t={t}
                  formatDate={formatDate}
                />
              )}

              {activeTab === "transactions" && (
                <TransactionsTab
                  loadingTransactions={loadingTransactions}
                  transactionsData={transactionsData}
                  expert={expert}
                  t={t}
                  formatDate={formatDate}
                />
              )}

              {activeTab === "upcoming-meetings" && (
                <UpcomingMeetingsTab
                  loadingBookings={loadingBookings}
                  bookingsData={bookingsData}
                  processingBookingId={processingBookingId}
                  handleConfirm={handleConfirm}
                  handleDecline={handleDecline}
                  handleReschedule={handleReschedule}
                  t={t}
                  formatDate={formatDate}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}