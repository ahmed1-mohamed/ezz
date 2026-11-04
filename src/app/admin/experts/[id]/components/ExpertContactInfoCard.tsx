import { Switch } from "@/components/ui/switch";

interface ExpertContactInfoCardProps {
  expert: {
    title?: string | null;
    display_name?: string;
    email?: string;
    phone_number?: string;
    image_url?: string | null;
    years_experience?: number;
    starting_from?: number;
    currency?: string;
    categories?: any[];
    user?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone_number?: string;
    };
    [key: string]: any;
  };
  isActive: boolean;
  setIsActive: (val: boolean) => void;
  t: (key: string) => string;
}

export function ExpertContactInfoCard({
  expert,
  isActive,
  setIsActive,
  t,
}: ExpertContactInfoCardProps) {
  const firstName = expert?.user?.first_name || "";
  const lastName = expert?.user?.last_name || "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || expert?.display_name || (expert as any)?.name || t("experts.table.na");

  const extractedEmail = typeof expert?.image_url === "string"
    ? expert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1]
    : undefined;
  const email = expert?.user?.email || expert?.email || extractedEmail || t("experts.table.na");
  const phone = expert?.user?.phone_number || expert?.phone_number || (expert as any)?.phone || t("experts.table.na");

  const primaryCategory = Array.isArray(expert?.categories) && expert.categories.length > 0
    ? (typeof expert.categories[0] === "string" ? expert.categories[0] : expert.categories[0]?.name)
    : null;
  const title = expert?.title || primaryCategory || t("experts.table.na");

  const yearsExp = expert?.years_experience ?? 0;
  const startingRate = expert?.starting_from ? `${expert.starting_from} ${expert.currency || "AED"}` : t("experts.table.na");

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t("experts.details.contactInformation")}
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t("experts.details.name")}</span>
          <span className="text-sm text-gray-900 font-medium">
            {fullName}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t("experts.columns.email")}</span>
          <span className="text-sm text-gray-900 font-medium">
            {email}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t("experts.details.phone")}</span>
          <span className="text-sm text-gray-900 font-medium">
            {phone}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t("experts.details.specializationTitle")}</span>
          <span className="text-sm text-gray-900 font-medium">
            {title}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t("experts.details.experience")}</span>
          <span className="text-sm text-gray-900 font-medium">
            {yearsExp} {t("experts.details.years")}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t("experts.details.startingRate")}</span>
          <span className="text-sm text-teal-700 font-semibold">
            {startingRate}
          </span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-600">{t("experts.columns.status")}</span>
          <div className="flex items-center gap-2">
            <Switch
              checked={isActive}
              onCheckedChange={setIsActive}
              className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
            />
            <span className="text-sm text-gray-900 font-medium">
              {isActive ? t("common.active") : t("common.inactive")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}