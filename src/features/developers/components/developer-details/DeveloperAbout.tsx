import { DeveloperData } from "@/hooks/use-developer-details";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe, Loader2, ShieldCheck, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DeveloperAboutProps {
  developer: DeveloperData;
  handleToggleTopDeveloper: (checked: boolean) => void;
  isTogglingTop: boolean;
}

export function DeveloperAbout({ developer, handleToggleTopDeveloper, isTogglingTop }: DeveloperAboutProps) {
  const { t } = useLanguage();
  const tenant = developer.erpNextTenant || developer.erp_next_tenant;

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return null;
    try {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? null : d.toLocaleDateString();
    } catch {
      return null;
    }
  };

  const formattedCreatedAt = formatDate(developer.created_at);

  return (
    <div className="space-y-4">
      {/* About Developer */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
          {t("developers.details.aboutDeveloper")}
        </h3>
        <div
          className="text-sm text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: developer.description || t("developers.details.noDescription"),
          }}
        />
      </div>

      {/* ERPNext Tenant Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 space-y-4 shadow-2xs">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-50 text-teal-600 rounded-lg flex-shrink-0">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {t("developers.details.erpNextTenant")}
              </h3>
              <p className="text-xs text-gray-500">
                {t("developers.details.erpNextTenantSubtitle")}
              </p>
            </div>
          </div>
          {tenant && (
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${
                tenant.is_active === "active" || tenant.is_active === 1 || tenant.is_active === true
                  ? "bg-green-100 text-green-800"
                  : tenant.is_active === "creating"
                  ? "bg-amber-100 text-amber-800 animate-pulse"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  tenant.is_active === "active" || tenant.is_active === 1 || tenant.is_active === true
                    ? "bg-green-600"
                    : tenant.is_active === "creating"
                    ? "bg-amber-600"
                    : "bg-gray-400"
                }`}
              />
              <span className="capitalize">{String(tenant.is_active)}</span>
            </span>
          )}
        </div>

        {tenant ? (
          <div className="space-y-3 pt-2 border-t border-gray-100 text-sm">
            <div className="flex items-start justify-between gap-2">
              <span className="text-gray-500 flex-shrink-0">{t("developers.details.tenantName")}</span>
              <span className="text-gray-900 font-medium text-end break-all">
                {tenant.tenant_name}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <span className="text-gray-500 flex-shrink-0">{t("developers.details.tenantId")}</span>
              <span className="font-mono text-gray-700 bg-gray-50 px-2 py-0.5 rounded border border-gray-200 text-xs">
                #{tenant.erp_next_tenant_id}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <span className="text-gray-500 flex-shrink-0">{t("developers.details.tenantUrl")}</span>
              <a
                href={tenant.tenant_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1 text-end break-all"
              >
                <span>{tenant.tenant_url}</span>
                <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </a>
            </div>

            {developer.userDeveloperRelationships && developer.userDeveloperRelationships.length > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium block mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
                  {t("developers.details.assignedAdmin")}
                </span>
                <div className="space-y-1.5">
                  {developer.userDeveloperRelationships.map((rel, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs bg-gray-50 p-2 rounded border border-gray-100"
                    >
                      <span className="text-gray-700 font-medium flex items-center gap-1">
                        <User className="h-3 w-3 text-gray-400" />
                        User #{rel.user_id}
                      </span>
                      <Badge variant="outline" className="text-[10px] bg-white text-gray-700 border-gray-200">
                        {rel.role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tenant.is_active === "creating" && (
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-start gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("developers.details.tenantCreatingNotice")}</span>
              </div>
            )}

            {tenant.tenant_url && (
              <div className="pt-1">
                <a
                  href={tenant.tenant_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-2xs"
                >
                  <Globe className="h-4 w-4" />
                  <span>{t("developers.details.openErpnext")}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-100">
            {t("developers.details.noErpNextTenant")}
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
          {t("developers.details.contactInfo")}
        </h3>
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <span className="text-sm text-gray-500 flex-shrink-0">{t("common.name")}</span>
            <span className="text-sm text-gray-900 font-medium text-end break-all">{developer.name}</span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-sm text-gray-500 flex-shrink-0">{t("common.email")}</span>
            <span className="text-sm text-gray-900 font-medium text-end break-all">
              {developer.email || t("common.na")}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-sm text-gray-500 flex-shrink-0">{t("common.phone")}</span>
            <span className="text-sm text-gray-900 font-medium text-end break-all">
              {developer.phone_number || t("common.na")}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-sm text-gray-500 flex-shrink-0">{t("developers.country")}</span>
            <span className="text-sm text-gray-900 font-medium text-end break-all">
              {(developer as any).country_name || (developer as any).countries || ((developer as any).country_id === 1 ? t("common.countries.egypt") : (developer as any).country_id === 3 ? t("common.countries.oman") : (developer as any).country_id === 2 ? t("common.countries.uae") : t("common.na"))}
            </span>
          </div>

          {developer.slug && (
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm text-gray-500 flex-shrink-0">{t("developers.details.slug")}</span>
              <span className="text-sm text-gray-900 font-mono text-end break-all bg-gray-50 px-2 py-0.5 rounded border border-gray-200 text-xs">
                {developer.slug}
              </span>
            </div>
          )}

          {formattedCreatedAt && (
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm text-gray-500 flex-shrink-0">{t("developers.details.createdAt")}</span>
              <span className="text-sm text-gray-700 text-end">
                {formattedCreatedAt}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-500 flex-shrink-0 leading-tight">
              {t("developers.details.isTopDeveloper")}
            </span>
            <div className="flex items-center gap-2">
              <Switch
                id="is-top-developer-toggle"
                checked={developer.is_top === 1}
                onCheckedChange={handleToggleTopDeveloper}
                disabled={isTogglingTop}
              />
              <span className="text-sm text-gray-900 font-medium">
                {developer.is_top === 1 ? t("common.yes") : t("common.no")}
              </span>
            </div>
          </div>

          {developer.website && (
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm text-gray-500 flex-shrink-0">{t("developers.columns.website")}</span>
              <a
                href={developer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-end"
              >
                <span className="break-all">{t("developers.details.visitSite")}</span>
                <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}