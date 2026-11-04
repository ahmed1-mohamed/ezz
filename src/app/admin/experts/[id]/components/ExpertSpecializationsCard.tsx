import { Badge } from "@/components/ui/badge";

interface ExpertSpecializationsCardProps {
  categories?: (string | { name: string })[];
  t: (key: string) => string;
}

export function ExpertSpecializationsCard({
  categories = [],
  t,
}: ExpertSpecializationsCardProps) {
  const categoryList = Array.isArray(categories) ? categories : [];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t("experts.columns.specializations")}
      </h3>
      <div className="flex flex-wrap gap-2">
        {categoryList.length > 0 ? (
          categoryList.map((category: any, index: number) => {
            const name = typeof category === "string" ? category : (category?.name || String(category));
            return (
              <Badge
                key={index}
                variant="outline"
                className="bg-teal-50 text-teal-700 border-teal-200 px-2.5 py-1 text-xs font-medium"
              >
                {name}
              </Badge>
            );
          })
        ) : (
          <span className="text-sm text-gray-400">
            {t("experts.details.noSpecializations")}
          </span>
        )}
      </div>
    </div>
  );
}