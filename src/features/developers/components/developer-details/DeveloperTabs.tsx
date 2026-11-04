import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Home,
  Loader2,
  MapPin,
  Plus,
  ShieldCheck,
  User,
} from "lucide-react";
import { DeveloperData } from "@/hooks/use-developer-details";
import { useLanguage } from "@/contexts/LanguageContext";

interface Unit {
  id: string;
  unitNumber: string;
  project: string;
  type: string;
  area: string;
}

interface DeveloperTabsProps {
  developer: DeveloperData;
  projects: any[];
  units: Unit[];
}

export function DeveloperTabs({ developer, projects, units }: DeveloperTabsProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(units.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUnits = units.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUnits(paginatedUnits.map((u) => u.id));
    } else {
      setSelectedUnits([]);
    }
  };

  const handleSelectUnit = (unitId: string, checked: boolean) => {
    if (checked) {
      setSelectedUnits((prev) => [...prev, unitId]);
    } else {
      setSelectedUnits((prev) => prev.filter((id) => id !== unitId));
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex gap-0.5 overflow-x-auto scrollbar-none px-2 sm:px-4 py-1 sm:py-2">
          {[
            { id: "projects", label: t("developers.details.projects"), icon: Building2 },
            { id: "payment", label: t("developers.details.paymentPlans"), icon: FileText },
            { id: "units", label: t("developers.details.units"), icon: Home },
            { id: "erpnext", label: t("developers.details.erpNextTenant"), icon: Globe },
            { id: "documents", label: t("developers.details.documents"), icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-t-lg transition-all whitespace-nowrap flex-shrink-0 ${activeTab === tab.id
                ? "bg-white text-teal-600 border-t-2 border-teal-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
            >
              <tab.icon
                className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${activeTab === tab.id ? "text-teal-600" : "text-gray-400"
                  }`}
              />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 sm:p-5">
        {activeTab === "projects" && (
          <div>
            <div className="flex items-center justify-end mb-3 sm:mb-4">
              <Button
                variant="outline"
                className="gap-2 bg-purple-600 text-white hover:bg-purple-700 text-xs sm:text-sm h-8 sm:h-9"
              >
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {t("common.export")}
              </Button>
            </div>
            <div className="space-y-4">
              {projects.length > 0 ? (
                projects.map((project: any) => (
                  <div
                    key={project.project_id}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          {project.project_name}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge
                            className={`text-xs ${project.status === "ongoing"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : project.status === "completed"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                              }`}
                          >
                            {project.status ? (t(`common.${project.status}`) || project.status) : (t("common.active"))}
                          </Badge>
                          {project.project_type && (
                            <Badge className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                              {t(`projects.types.${project.project_type}`) || t(`common.${project.project_type}`) || project.project_type}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Building2 className="h-4 w-4 text-teal-600" />
                        <span className="font-medium">
                          {project.total_units || 0} {t("developers.details.unitsLabel")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Home className="h-4 w-4 text-teal-600" />
                        <span className="font-medium">
                          {project.available_units || 0} {t("developers.details.available")}
                        </span>
                      </div>
                      {project.project_size && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="h-4 w-4 text-teal-600" />
                          <span className="font-medium">
                            {project.project_size} {t("developers.details.sqft")}
                          </span>
                        </div>
                      )}
                      {project.launch_date && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="h-4 w-4 text-teal-600" />
                          <span className="font-medium">
                            {new Date(project.launch_date).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                    {project.price_range && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{t("developers.details.priceRange")}: </span>
                        {project.price_range}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">{t("developers.details.noProjects")}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "units" && (
          <div>
            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <div className="min-w-[480px] sm:min-w-full px-3 sm:px-0">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="px-3 py-3 text-start">
                        <Checkbox
                          checked={
                            paginatedUnits.length > 0 &&
                            selectedUnits.length === paginatedUnits.length
                          }
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                        {t("developers.details.unitNumber")}
                      </th>
                      <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                        {t("developers.details.project")}
                      </th>
                      <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                        {t("developers.details.type")}
                      </th>
                      <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                        {t("developers.details.area")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedUnits.length > 0 ? (
                      paginatedUnits.map((unit) => (
                        <tr
                          key={unit.id}
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-3 py-3">
                            <Checkbox
                              checked={selectedUnits.includes(unit.id)}
                              onCheckedChange={(checked) =>
                                handleSelectUnit(unit.id, checked as boolean)
                              }
                            />
                          </td>
                          <td className="px-3 py-3 text-sm text-teal-600 font-semibold">
                            {unit.unitNumber}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-900 font-medium">
                            {unit.project}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-700">
                            {unit.type}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-700">
                            {unit.area}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-3 py-12 text-center text-gray-500">
                          {t("developers.details.noUnits")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {totalPages > 0 && (
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  {t("common.showing")} {startIndex + 1}-{Math.min(endIndex, units.length)} {t("common.of")}{" "}
                  {units.length > 1000 ? "1000" : units.length}
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="h-8 w-8"
                  >
                    <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                  </Button>
                  {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? "h-8 w-8 bg-gray-900 hover:bg-gray-800 text-white"
                            : "h-8 w-8"
                        }
                      >
                        {page}
                      </Button>
                    )
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="h-8 w-8"
                  >
                    <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "payment" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{t("developers.details.paymentPlans")}</h3>
            </div>
            <div className="space-y-4">
              {developer.paymentPlans && developer.paymentPlans.length > 0 ? (
                developer.paymentPlans.map((plan: any) => (
                  <div
                    key={plan.payment_plan_id}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg text-gray-900">
                        {plan.name}
                      </h4>
                      <Badge
                        className={
                          plan.status === "active"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-50 text-gray-700"
                        }
                      >
                        {plan.status ? (t(`common.${plan.status}`) || plan.status) : (t("common.active"))}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    {plan.total_cost && (
                      <div className="text-sm font-medium text-gray-900">
                        {t("developers.details.totalCost")}: {Number(plan.total_cost).toLocaleString()} {t("common.aed")}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  {t("developers.details.noPaymentPlans")}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("developers.details.noDocuments")}
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center max-w-sm">
              {t("developers.details.uploadDesc")}
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2">
              <Plus className="h-4 w-4" />
              {t("developers.details.uploadDocument")}
            </Button>
          </div>
        )}

        {activeTab === "erpnext" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t("developers.details.erpNextTenant")}</h3>
              {(developer.erpNextTenant || developer.erp_next_tenant)?.tenant_url && (
                <Button
                  asChild
                  className="bg-teal-600 hover:bg-teal-700 text-white gap-2 text-xs sm:text-sm h-8 sm:h-9"
                >
                  <a
                    href={(developer.erpNextTenant || developer.erp_next_tenant)!.tenant_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{t("developers.details.openErpnext")}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </div>

            {developer.erpNextTenant || developer.erp_next_tenant ? (
              (() => {
                const tenant = (developer.erpNextTenant || developer.erp_next_tenant)!;
                return (
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-2xs">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg">
                            <Globe className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                              {tenant.tenant_name}
                            </h4>
                            <p className="text-xs text-gray-500 font-mono">
                              ID: #{tenant.erp_next_tenant_id}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto ${
                            tenant.is_active === "active" || tenant.is_active === 1 || tenant.is_active === true
                              ? "bg-green-100 text-green-800"
                              : tenant.is_active === "creating"
                              ? "bg-amber-100 text-amber-800 animate-pulse"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              tenant.is_active === "active" || tenant.is_active === 1 || tenant.is_active === true
                                ? "bg-green-600"
                                : tenant.is_active === "creating"
                                ? "bg-amber-600"
                                : "bg-gray-400"
                            }`}
                          />
                          <span className="capitalize">{String(tenant.is_active)}</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-500 block mb-1">
                            {t("developers.details.tenantName")}
                          </span>
                          <span className="font-medium text-gray-900 break-all">{tenant.tenant_name}</span>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-500 block mb-1">
                            {t("developers.details.tenantUrl")}
                          </span>
                          <a
                            href={tenant.tenant_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-teal-600 hover:text-teal-800 flex items-center gap-1 break-all"
                          >
                            <span>{tenant.tenant_url}</span>
                            <ExternalLink className="h-3 w-3 flex-shrink-0" />
                          </a>
                        </div>
                      </div>

                      {tenant.is_active === "creating" && (
                        <div className="mt-4 p-4 bg-amber-50/80 border border-amber-200 rounded-lg text-sm text-amber-900 flex items-start gap-3">
                          <Loader2 className="h-5 w-5 animate-spin text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-xs sm:text-sm">
                              {t("developers.details.tenantCreatingNotice")}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {developer.userDeveloperRelationships && developer.userDeveloperRelationships.length > 0 && (
                      <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-2xs">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldCheck className="h-5 w-5 text-teal-600" />
                          <h4 className="font-semibold text-base text-gray-900">
                            {t("developers.details.assignedAdmin")}
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {developer.userDeveloperRelationships.map((rel, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
                                  <User className="h-4 w-4" />
                                </div>
                                <div>
                                  <span className="text-sm font-semibold text-gray-900 block">
                                    User #{rel.user_id}
                                  </span>
                                  {rel.created_at && (
                                    <span className="text-[11px] text-gray-500">
                                      {new Date(rel.created_at).toLocaleDateString()}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs bg-white text-gray-700 border-gray-200">
                                {rel.role}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("developers.details.noErpNextTenant")}
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}