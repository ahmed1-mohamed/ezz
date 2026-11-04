import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

type EntityTab = "developer" | "project" | "unit";

interface EntityDeveloperSelectorProps {
  activeEntityTab: EntityTab;
  setActiveEntityTab: (tab: EntityTab) => void;
  selectedEntity: string;
  setSelectedEntity: (id: string) => void;
  items: Array<{ id: string; name: string }>;
  isLoading: boolean;
}

export function EntityDeveloperSelector({
  activeEntityTab,
  setActiveEntityTab,
  selectedEntity,
  setSelectedEntity,
  items,
  isLoading,
}: EntityDeveloperSelectorProps) {
  const { t } = useLanguage();

  const tabLabel = (tab: string) => {
    if (tab === "developer") return t("marketingNotifications.create.developer");
    if (tab === "project") return t("marketingNotifications.create.project");
    if (tab === "unit") return t("marketingNotifications.create.propertyUnit");
    return tab;
  };

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div>
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
            {t("marketingNotifications.create.targetEntity")}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5 text-start">
            {t("marketingNotifications.create.targetEntityDesc")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(["developer", "project", "unit"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveEntityTab(tab);
                setSelectedEntity("");
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeEntityTab === tab
                ? "bg-teal-600 text-white border-transparent dark:bg-teal-500"
                : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700"
                }`}
            >
              {tabLabel(tab)}
            </button>
          ))}
        </div>

        <div className="space-y-1">
          <select
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.target.value)}
            disabled={isLoading}
            className="w-full p-2.5 border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
          >
            <option value="">
              {isLoading
                ? t("marketingNotifications.create.loading")
                : t("marketingNotifications.create.selectEntity", { entity: tabLabel(activeEntityTab) })}
            </option>
            {items.map((item) => (
              <option key={`${activeEntityTab}-${item.id}`} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {!isLoading && items.length === 0 && (
            <p className="text-xs text-gray-400 pt-1 text-start">
              {t("marketingNotifications.create.noDataAvailable")}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}