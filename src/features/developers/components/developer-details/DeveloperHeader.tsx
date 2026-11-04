import { SafeImage } from "@/components/ui/safe-image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Edit, Star, Plus, Globe, ExternalLink } from "lucide-react";
import { DeveloperData } from "@/hooks/use-developer-details";

interface DeveloperHeaderProps {
  developer: DeveloperData;
  onEdit?: () => void;
  onCreateDeveloper?: () => void;
}

export function DeveloperHeader({ developer, onEdit, onCreateDeveloper }: DeveloperHeaderProps) {
  const { t } = useLanguage();
  const tenant = developer.erpNextTenant || developer.erp_next_tenant;
  const hasCover = !!developer.cover_photo;

  return (
    <div className="mb-6">
      {hasCover && (
        <div className="relative w-full h-32 sm:h-44 -mt-4 sm:-mt-6 -mx-4 sm:-mx-6 mb-4 sm:mb-6 rounded-t-lg overflow-hidden border-b border-gray-100">
          <SafeImage
            src={developer.cover_photo!}
            alt={`${developer.name} cover`}
            fill
            className="object-cover"
            fallbackSrc="/images/default-cover.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {developer.logo ? (
            <SafeImage
              src={developer.logo}
              alt={developer.name}
              width={112}
              height={112}
              fallbackSrc="/images/default-logo.svg"
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-contain p-1 border border-gray-200 bg-white shadow-sm flex-shrink-0 ${
                hasCover ? "-mt-10 sm:-mt-12 relative z-10 ring-4 ring-white" : ""
              }`}
            />
          ) : (
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl sm:text-3xl font-bold text-gray-600 flex-shrink-0 ${
                hasCover ? "-mt-10 sm:-mt-12 relative z-10 ring-4 ring-white" : ""
              }`}
            >
              {developer.name?.substring(0, 2).toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                {developer.name}
              </h2>
              {developer.is_top === 1 && (
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-3 mt-1 sm:mt-2 text-sm text-gray-600 flex-wrap">
              <div className="flex items-center gap-1">
                <span
                  className={`inline-flex h-2 w-2 rounded-full flex-shrink-0 ${
                    developer.status === "active" ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                <span className="capitalize">{t(`common.${developer.status}`) || developer.status}</span>
              </div>

              {tenant && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200">
                  <Globe className="h-3.5 w-3.5 text-teal-600" />
                  <span className="font-semibold">{tenant.tenant_name}</span>
                  <span
                    className={`inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-semibold uppercase ${
                      tenant.is_active === "active" || tenant.is_active === 1 || tenant.is_active === true
                        ? "bg-green-100 text-green-800"
                        : tenant.is_active === "creating"
                        ? "bg-amber-100 text-amber-800 animate-pulse"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {String(tenant.is_active)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap sm:flex-shrink-0">
          {tenant?.tenant_url && (
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 text-sm h-9 px-3 shadow-xs"
            >
              <a href={tenant.tenant_url} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                <span className="hidden xs:inline">{t("developers.details.openErpnext")}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}

          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 text-sm h-9 px-3"
            onClick={onCreateDeveloper}
          >
            <Plus className="h-4 w-4" />
            <span className="hidden xs:inline">{t("developers.addDeveloper")}</span>
          </Button>

          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white gap-1.5 text-sm h-9 px-3"
            onClick={onEdit}
          >
            <Edit className="h-4 w-4" />
            <span className="hidden xs:inline">{t("common.update")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
