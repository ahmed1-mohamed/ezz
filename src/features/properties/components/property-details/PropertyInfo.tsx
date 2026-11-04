"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Bed,
  Bath,
  Maximize,
  Layers,
  Car,
  LayoutGrid,
  UserCheck,
  Building,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PropertyInfoProps {
  bedrooms: number | string;
  bathrooms: number | string;
  size: string | number;
  floor?: string | number | null;
  bua_size?: string | number | null;
  plot_size?: string | number | null;
  parking_spaces?: number | null;
  maid_room?: boolean | number | string | null;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function StatCard({ icon, label, value }: StatCardProps) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-800/40 hover:border-teal-200 dark:hover:border-teal-800/50 hover:bg-white dark:hover:bg-neutral-800/80 transition-all duration-200">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
          {label}
        </p>
        <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate mt-0.5">
          {value || t("common.na")}
        </p>
      </div>
    </div>
  );
}

export function PropertyInfo({
  bedrooms,
  bathrooms,
  size,
  floor,
  bua_size,
  plot_size,
  parking_spaces,
  maid_room,
}: PropertyInfoProps) {
  const { t } = useLanguage();

  const isMaidRoomTrue =
    maid_room === true || maid_room === 1 || maid_room === "1" || maid_room === "true";

  return (
    <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
            <Building className="w-4 h-4" />
          </div>
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.unitDetails.title")}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <StatCard
            icon={<Bed className="h-5 w-5" />}
            label={t("properties.create.unitDetails.bedrooms")}
            value={bedrooms}
          />
          <StatCard
            icon={<Bath className="h-5 w-5" />}
            label={t("properties.create.unitDetails.bathrooms")}
            value={bathrooms}
          />
          <StatCard
            icon={<Maximize className="h-5 w-5" />}
            label={t("properties.create.unitDetails.unitSize")}
            value={size ? `${size} m²` : undefined}
          />
          {bua_size != null && (
            <StatCard
              icon={<LayoutGrid className="h-5 w-5" />}
              label={t("properties.create.unitDetails.builtSize")}
              value={`${bua_size} m²`}
            />
          )}
          {plot_size != null && (
            <StatCard
              icon={<Layers className="h-5 w-5" />}
              label={t("properties.create.unitDetails.plotSize")}
              value={`${plot_size} m²`}
            />
          )}
          {floor != null && (
            <StatCard
              icon={<Layers className="h-5 w-5" />}
              label={t("properties.create.unitDetails.floor")}
              value={floor}
            />
          )}
          {parking_spaces != null && (
            <StatCard
              icon={<Car className="h-5 w-5" />}
              label={t("properties.create.license.parkingSpaces")}
              value={parking_spaces}
            />
          )}
          {maid_room != null && (
            <StatCard
              icon={<UserCheck className="h-5 w-5" />}
              label={t("properties.create.unitDetails.maidRoom")}
              value={
                isMaidRoomTrue
                  ? t("common.yes")
                  : t("common.no")
              }
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}