import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Property } from "../../types";

interface UnitsTabProps {
  properties: Property[];
  currency: string;
}

export function UnitsTab({ properties, currency }: UnitsTabProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const totalCount = properties?.length || 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {t("unitsTab.title", { count: totalCount })}
        </h3>
      </div>
      {properties && properties.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-800">
          <table className="w-full text-sm text-start">
            <thead className="border-b border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800/60 text-gray-900 dark:text-gray-100 font-semibold">
              <tr>
                <th className="px-4 py-3 text-start">{t("unitsTab.unitNo")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.type")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.price")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.areaName")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.size")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.bedsBathsParking")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.status")}</th>
                <th className="px-4 py-3 text-center">{t("unitsTab.availability")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
              {properties.map((property, index) => {
                const isAvailable = property.availability_status === "available";
                const bedsText = isRTL ? `${property.bedrooms} غرف` : `${property.bedrooms} Beds`;
                const bathsText = isRTL ? `${property.bathrooms} حمامات` : `${property.bathrooms} Baths`;
                const parkingText = isRTL ? `${property.parking_spaces} موقف` : `${property.parking_spaces} P`;
                const sqmText = isRTL ? "م²" : "sqm";

                return (
                  <tr
                    key={`unit-${property.property_id || (property as any).id || property.property_no || index}-${index}`}
                    className="transition-colors hover:bg-gray-50/70 dark:hover:bg-neutral-800/40"
                  >
                    <td className="px-4 py-3 font-semibold text-teal-600 dark:text-teal-400 text-start">
                      {property.property_no}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                      {property.propertytype?.name || "-"} -{" "}
                      {property.propertysubtype?.name || "-"}
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-gray-900 dark:text-gray-100">
                      {Number(property.price).toLocaleString()} {currency}
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-gray-700 dark:text-gray-300">
                      {(property as any).area_name || (property as any).location?.area?.area_name || "-"}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                      {property.size ? `${property.size} ${sqmText}` : "-"}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
                      {bedsText} • {bathsText} • {parkingText}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 capitalize border-none">
                        {property.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge
                        className={
                          isAvailable
                            ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400 capitalize border-none"
                            : "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400 capitalize border-none"
                        }
                      >
                        {isAvailable
                          ? (t("unitsTab.available"))
                          : (t("unitsTab.reserved"))}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
            <Home className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {t("unitsTab.noUnitsTitle")}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center max-w-sm">
            {t("unitsTab.noUnitsDesc")}
          </p>
        </div>
      )}
    </div>
  );
}
