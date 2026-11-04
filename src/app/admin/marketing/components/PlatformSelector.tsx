import { Smartphone, Globe, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface PlatformSelectorProps {
  platform: "all" | "mobile" | "web";
  setPlatform: (platform: "all" | "mobile" | "web") => void;
}

export function PlatformSelector({ platform, setPlatform }: PlatformSelectorProps) {
  const { t } = useLanguage();
  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
          {t("marketingNotifications.create.targetPlatform")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => setPlatform("all")}
            className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${platform === "all"
                ? "border-teal-600 text-teal-600 bg-teal-50/10 dark:border-teal-500 dark:text-teal-400"
                : "border-gray-200 text-gray-700 dark:border-neutral-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
              }`}
          >
            <Layers className="h-4 w-4" />
            <span>{t("marketingNotifications.create.allPlatforms")}</span>
          </button>

          <button
            type="button"
            onClick={() => setPlatform("mobile")}
            className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${platform === "mobile"
                ? "border-teal-600 text-teal-600 bg-teal-50/10 dark:border-teal-500 dark:text-teal-400"
                : "border-gray-200 text-gray-700 dark:border-neutral-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
              }`}
          >
            <Smartphone className="h-4 w-4" />
            <span>{t("marketingNotifications.create.mobileApp")}</span>
          </button>

          <button
            type="button"
            onClick={() => setPlatform("web")}
            className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${platform === "web"
                ? "border-teal-600 text-teal-600 bg-teal-50/10 dark:border-teal-500 dark:text-teal-400"
                : "border-gray-200 text-gray-700 dark:border-neutral-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
              }`}
          >
            <Globe className="h-4 w-4" />
            <span>{t("marketingNotifications.create.website")}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}