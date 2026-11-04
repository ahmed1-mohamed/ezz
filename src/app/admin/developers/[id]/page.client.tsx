"use client";

import { use } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDeveloperDetails } from "@/hooks/use-developer-details";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { DeveloperHeader } from "@/features/developers/components/developer-details/DeveloperHeader";
import { DeveloperStats } from "@/features/developers/components/developer-details/DeveloperStats";
import { DeveloperAbout } from "@/features/developers/components/developer-details/DeveloperAbout";
import { DeveloperTabs } from "@/features/developers/components/developer-details/DeveloperTabs";
import { EmptyState } from "@/components/ui/empty-state";

export default function DeveloperDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: developerId } = use(params);
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();

  const { developer, isLoading, isError, error, toggleTop, isTogglingTop } =
    useDeveloperDetails(Number(developerId));

  const handleToggleTopDeveloper = (checked: boolean) => {
    toggleTop(checked);
  };

  const projects = developer?.project || [];
  const units: any[] = [];

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent" />
          <p className="mt-4 text-sm text-gray-600">
            {t("developers.details.loading")}
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            title={t("developers.details.errorLoading")}
            message={getApiErrorMessage(error, t, t("developers.messages.loadFailed"))}
          />
          <Button
            onClick={() => router.push("/admin/developers")}
            className="mt-6 bg-teal-600 hover:bg-teal-700 text-white"
          >
            {t("developers.details.backToDevelopers")}
          </Button>
        </div>
      </div>
    );
  }

  if (!developer) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <EmptyState
            type="default"
            title={t("developers.details.noData")}
          />
          <Button
            onClick={() => router.push("/admin/developers")}
            className="mt-6 bg-teal-600 hover:bg-teal-700 text-white"
          >
            {t("developers.details.backToDevelopers")}
          </Button>
        </div>
      </div>
    );
  }

  const totalUnits = projects.reduce(
    (sum: any, p: any) => sum + (p.total_units || 0),
    0,
  );
  const availableUnits = projects.reduce(
    (sum: any, p: any) => sum + (p.available_units || 0),
    0,
  );

  return (
    <div className="p-3 sm:p-4 lg:p-6 space-y-4 max-w-full overflow-hidden">
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 flex-wrap">
        <Link prefetch={false} href="/admin/home" className="hover:text-teal-600 transition-colors whitespace-nowrap">
          {t("common.home")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 rtl:rotate-180" />
        <Link prefetch={false} href="/admin/developers" className="hover:text-teal-600 transition-colors whitespace-nowrap">
          {t("developers.title")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 rtl:rotate-180" />
        <span className="text-gray-900 truncate max-w-[150px] sm:max-w-xs">{developer.name}</span>
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/admin/developers")}
          className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 rtl:rotate-180" />
        </Button>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {t("developers.details.title")}
        </h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <DeveloperHeader
          developer={developer}
          onEdit={() => router.push(`${routePrefix}/developers/${developerId}/edit`)}
          onCreateDeveloper={() => router.push(`${routePrefix}/developers/create`)}
        />
        <DeveloperStats
          developer={developer}
          totalProjects={projects.length}
          totalUnits={totalUnits}
          availableUnits={availableUnits}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-1">
          <DeveloperAbout
            developer={developer}
            handleToggleTopDeveloper={handleToggleTopDeveloper}
            isTogglingTop={isTogglingTop}
          />
        </div>
        <div className="lg:col-span-2 min-w-0">
          <DeveloperTabs developer={developer} projects={projects} units={units} />
        </div>
      </div>
    </div>
  );
}