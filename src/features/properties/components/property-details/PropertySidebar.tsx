"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Phone,
  Share2,
  Check,
  Building,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface PropertySidebarProps {
  property: any;
}

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
}

function InfoRow({ label, value }: InfoRowProps) {
  if (value == null || value === "") return null;
  return (
    <div className="flex justify-between items-start gap-2 py-2 border-b border-gray-100 dark:border-neutral-800/60 last:border-0 text-xs sm:text-sm">
      <span className="text-gray-500 dark:text-gray-400 shrink-0">{label}:</span>
      <span className="font-medium text-end text-gray-900 dark:text-gray-100 break-words max-w-[65%]">
        {value}
      </span>
    </div>
  );
}

export function PropertySidebar({ property }: PropertySidebarProps) {
  const { t } = useLanguage();
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const project = property.project?.[0] ?? property.project ?? null;
  const propertyType =
    property.property_type?.[0] ?? property.property_type ?? null;

  const statusLabel =
    t(`properties.create.options.status.${property.status}`) || property.status;

  const availabilityLabel =
    t(`properties.create.options.availabilityStatus.${property.availability_status}`) ||
    property.availability_status;

  const constructionLabel =
    t(`properties.create.options.constructionStatus.${property.construction_status}`) ||
    property.construction_status;

  const furnishLabel =
    t(`properties.create.options.furnishStatus.${property.furnish_status}`) ||
    property.furnish_status;

  const finishingLabel =
    t(`properties.create.options.finishingStatus.${property.finishing_status}`) ||
    property.finishing_status;

  const ownershipLabel =
    t(`properties.create.options.ownershipType.${property.ownership_type}`) ||
    property.ownership_type;

  const currencyLabel =
    t(`properties.create.options.currency.${property.currency?.toLowerCase?.() || "aed"}`) ||
    property.currency ||
    "AED";

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopiedLink(true);
      toast.success(t("properties.details.linkCopiedToast"));
      setTimeout(() => setIsCopiedLink(false), 2500);
    }
  };

  return (
    <div className="space-y-6">
      {/* ── Price Hero Card ─────────────────────────────────────── */}
      <Card className="border border-teal-500/20 dark:border-teal-500/30 bg-gradient-to-br from-white via-teal-50/20 to-white dark:from-neutral-900 dark:via-teal-950/20 dark:to-neutral-900 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600" />
        <CardHeader className="pb-2 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {t("properties.details.price")}
            </span>
            <Badge
              variant={
                property.availability_status === "available"
                  ? "success"
                  : property.availability_status === "sold"
                    ? "destructive"
                    : "warning"
              }
              className="text-xs font-medium"
            >
              {availabilityLabel}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 pb-5">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight">
              {property.price
                ? `${currencyLabel} ${Number(property.price).toLocaleString()}`
                : t("common.na")}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              {propertyType?.name ?? t("properties.title")}
            </p>
          </div>

          {property.price_per_m2 && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-200/60 dark:border-teal-800/60 text-xs font-medium text-teal-700 dark:text-teal-300">
              <span>
                {currencyLabel} {Number(property.price_per_m2).toLocaleString()} / m²
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Property Details Overview Card ─────────────────────────── */}
      <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
        <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80">
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.details.propertyInfo")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-5 space-y-1">
          <InfoRow
            label={t("properties.create.basicInfo.status")}
            value={
              <Badge
                variant={property.status === "active" ? "success" : "outline"}
                className="text-xs"
              >
                {statusLabel}
              </Badge>
            }
          />
          <InfoRow
            label={t("properties.create.basicInfo.constructionStatus")}
            value={constructionLabel}
          />
          <InfoRow
            label={t("properties.create.unitDetails.furnishStatus")}
            value={furnishLabel}
          />
          <InfoRow
            label={t("properties.create.unitDetails.finishingType")}
            value={finishingLabel}
          />
          <InfoRow
            label={t("properties.create.unitDetails.ownershipType")}
            value={ownershipLabel}
          />
          <InfoRow
            label={t("properties.create.basicInfo.propertyType")}
            value={propertyType?.name}
          />
          <InfoRow
            label={t("properties.create.basicInfo.propertySubtype")}
            value={property.property_subtype?.name}
          />
          <InfoRow
            label={t("properties.columns.unitNumber")}
            value={property.unit_number || property.property_no}
          />
          <InfoRow
            label={t("properties.create.license.zoneName")}
            value={property.zone_name}
          />
          <InfoRow
            label={t("properties.create.license.referenceListed")}
            value={property.reference_listed}
          />
          <InfoRow
            label={t("properties.create.unitDetails.maidRoom")}
            value={property.maid_room ? t("common.yes") : t("common.no")}
          />
        </CardContent>
      </Card>

      {/* ── Project Card ────────────────────────────────────────── */}
      {project && (
        <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
          <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center gap-2">
            <Building className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {t("properties.create.basicInfo.project")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-5 space-y-1">
            <InfoRow label={t("common.name")} value={project.project_name} />
            <InfoRow label={t("properties.columns.type")} value={project.project_type} />
            <InfoRow label={t("properties.columns.status")} value={project.status} />
            <InfoRow label={t("properties.details.totalUnits")} value={project.total_units} />
            <InfoRow
              label={t("properties.details.completion")}
              value={
                project.completion_date
                  ? new Date(project.completion_date).toLocaleDateString()
                  : null
              }
            />
            <InfoRow
              label={t("properties.details.priceRange")}
              value={
                project.price_range
                  ? `${currencyLabel} ${project.price_range}`
                  : null
              }
            />
          </CardContent>
        </Card>
      )}

      {/* ── Building Card ───────────────────────────────────────── */}
      {property.building && (
        <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
          <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80">
            <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {t("properties.details.building")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-5 space-y-1">
            <InfoRow
              label={t("common.name")}
              value={property.building.building_name}
            />
            <InfoRow
              label={t("properties.columns.type")}
              value={property.building.building_type}
            />
            <InfoRow
              label={t("properties.details.totalFloors")}
              value={property.building.total_floors}
            />
            <InfoRow
              label={t("properties.details.totalUnits")}
              value={property.building.total_units}
            />
          </CardContent>
        </Card>
      )}

      {/* ── License & Compliance Card ───────────────────────────── */}
      {(property.broker_license ||
        property.agent_license ||
        property.dld_permit_number ||
        property.dld_barcode) && (
        <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
          <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {t("properties.create.license.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-5 space-y-1">
            <InfoRow
              label={t("properties.create.license.brokerLicense")}
              value={property.broker_license}
            />
            <InfoRow
              label={t("properties.create.license.agentLicense")}
              value={property.agent_license}
            />
            <InfoRow
              label={t("properties.create.license.dldPermitNumber")}
              value={property.dld_permit_number}
            />
            <InfoRow
              label={t("properties.create.license.dldBarcode")}
              value={property.dld_barcode}
            />
          </CardContent>
        </Card>
      )}

      {/* ── Quick Actions Card ──────────────────────────────────── */}
      <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
        <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80">
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.details.quickActions")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-5 space-y-2.5">
          <Button
            type="button"
            variant="outline"
            onClick={handleShare}
            className="w-full justify-start dark:border-neutral-700 dark:text-gray-200 cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300"
          >
            {isCopiedLink ? (
              <Check className="me-2 h-4 w-4 text-teal-600 dark:text-teal-400" />
            ) : (
              <Share2 className="me-2 h-4 w-4" />
            )}
            {isCopiedLink ? t("properties.details.linkCopied") : t("properties.details.shareLink")}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start dark:border-neutral-700 dark:text-gray-200"
            onClick={() => toast.info(t("properties.details.scheduleViewingSoon"))}
          >
            <Calendar className="me-2 h-4 w-4" />
            {t("properties.details.scheduleViewing")}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start dark:border-neutral-700 dark:text-gray-200"
            onClick={() => toast.info(t("properties.details.contactAgentSoon"))}
          >
            <Phone className="me-2 h-4 w-4" />
            {t("properties.details.contactAgent")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

