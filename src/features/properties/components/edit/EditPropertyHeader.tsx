"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditPropertyHeaderProps {
  routePrefix: string;
  propertyId: number;
  propertyName: string;
  onCancel: () => void;
}

export default function EditPropertyHeader({
  routePrefix,
  propertyId,
  propertyName,
  onCancel,
}: EditPropertyHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("properties.edit.title")}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
            <Link prefetch={false}
              href={`${routePrefix}/home`}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {t("properties.breadcrumbs.home")}
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 rtl:rotate-180" />
            <Link prefetch={false}
              href={`${routePrefix}/properties`}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {t("properties.breadcrumbs.properties")}
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 rtl:rotate-180" />
            <Link prefetch={false}
              href={`${routePrefix}/properties/${propertyId}`}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate max-w-[200px]"
            >
              {propertyName}
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 rtl:rotate-180" />
            <span className="text-gray-900 dark:text-gray-200 font-medium truncate">
              {t("properties.edit.title")}
            </span>
          </div>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200"
        >
          {t("properties.edit.cancel")}
        </Button>
      </div>
    </div>
  );
}
