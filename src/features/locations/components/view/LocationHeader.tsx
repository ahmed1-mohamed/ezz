import { ArrowLeft, Edit2, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocationHeaderProps {
  landmark: string;
  cityName: string;
  areaName: string;
  onEdit?: () => void;
}

export function LocationHeader({ landmark, cityName, areaName, onEdit }: LocationHeaderProps) {
  const router = useRouter();
  const { t } = useLanguage();
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600 rtl:rotate-180" />
        </button>
        <div>
          <h1 className="text-md sm:text-xl font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-teal-600 shrink-0" />
            {landmark}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {areaName} · {cityName}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <Button variant="outline" size="sm" className="gap-2 text-red-600 border-red-200 hover:bg-red-50">
          <Trash2 className="w-4 h-4" /> {t("common.delete")}
        </Button>
        <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white" onClick={onEdit}>
          <Edit2 className="w-4 h-4" /> {t("common.edit")}
        </Button>
      </div>
    </div>
  );
}
