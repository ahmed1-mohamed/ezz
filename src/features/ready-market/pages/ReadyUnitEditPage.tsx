"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReadyUnit } from "../hooks";
import { readyUnitToFormValues } from "../utils";
import { ReadyUnitForm } from "../components/ReadyUnitForm";

export default function ReadyUnitEditPage({ id }: { id: number }) {
  const { t } = useLanguage();
  const { data: unit, isLoading, isError } = useReadyUnit(id);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-72" />
        <Skeleton className="h-[600px] w-full" />
      </div>
    );
  }
  if (isError || !unit) {
    return <p className="py-16 text-center text-sm text-red-600">{t("readyMarket.details.loadFailed")}</p>;
  }

  return (
    <ReadyUnitForm
      key={unit.property_id}
      unitId={unit.property_id}
      initialValues={readyUnitToFormValues(unit)}
      existingMedias={(unit.medias ?? []).filter((m) => m.media_url && (!m.media_type || m.media_type === "image"))}
    />
  );
}
