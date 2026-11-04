"use client";

import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Edit2,
  Trash2,
  MapPin,
  Globe,
  Building2,
  FolderKanban,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface City {
  id: number;
  name: string;
  areaName: string;
  countryName: string;
  locationsCount: number;
  projectsCount: number;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

interface ViewCityModalProps {
  city: City | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function ViewCityModal({
  city,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}: ViewCityModalProps) {
  const { t } = useLanguage();
  if (!isOpen || !city) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t("cities.viewModal.title")} size="md">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {city.name}
              </h3>
              <p className="text-sm text-gray-500">{t("cities.viewModal.id")} {city.id}</p>
            </div>
          </div>
          <Badge
            variant={city.status ? "default" : "destructive"}
            className={
              city.status
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }
          >
            {city.status ? t("common.active") : t("common.inactive")}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-sm">{t("cities.columns.country")}</span>
            </div>
            <p className="font-medium text-gray-900">{city.countryName}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{t("cities.columns.area")}</span>
            </div>
            <p className="font-medium text-gray-900">{city.areaName || "—"}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">{t("cities.viewModal.locations")}</span>
            </div>
            <p className="font-medium text-gray-900">{city.locationsCount}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <FolderKanban className="w-4 h-4" />
              <span className="text-sm">{t("cities.viewModal.projects")}</span>
            </div>
            <p className="font-medium text-gray-900">{city.projectsCount}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
            <div>
              <span className="text-gray-500 block">{t("cities.viewModal.created")}</span>
              <span className="font-medium text-gray-900">
                {new Date(city.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
            <div>
              <span className="text-gray-500 block">{t("cities.viewModal.lastUpdated")}</span>
              <span className="font-medium text-gray-900">
                {new Date(city.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end pt-2 border-t">
          <Button
            variant="outline"
            onClick={onDelete}
            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4 me-2" />
            {t("common.delete")}
          </Button>
          <Button
            onClick={onEdit}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            <Edit2 className="w-4 h-4 me-2" />
            {t("common.edit")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}