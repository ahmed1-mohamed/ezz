"use client";

import { use, useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { Building2, Star, Flag, CreditCard, Home } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import { fetchProjectsDetails } from "@/data/api-client";
import { ProjectHeader } from "./components/ProjectHeader";
import { ProjectStats } from "./components/ProjectStats";
import { ProjectSidebar } from "./components/ProjectSidebar";
import { ProjectMedia } from "./components/ProjectMedia";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

const BuildingsTab = dynamic(() => import("./components/tabs/BuildingsTab").then(mod => mod.BuildingsTab), { ssr: false });
const FeaturesTab = dynamic(() => import("./components/tabs/FeaturesTab").then(mod => mod.FeaturesTab), { ssr: false });
const MilestonesTab = dynamic(() => import("./components/tabs/MilestonesTab").then(mod => mod.MilestonesTab), { ssr: false });
const PaymentPlansTab = dynamic(() => import("./components/tabs/PaymentPlansTab").then(mod => mod.PaymentPlansTab), { ssr: false });
const UnitsTab = dynamic(() => import("./components/tabs/UnitsTab").then(mod => mod.UnitsTab), { ssr: false });

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("buildings");

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["projectDetails", id],
    queryFn: () => fetchProjectsDetails(Number(id), token!),
    enabled: !!token,
    select: (response: any) => {
      if (response?.data && response.data.project_id) {
        return response.data;
      }
      return response?.data || response;
    },
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        type="error"
        message={getApiErrorMessage(error, t, t("projects.details.errorLoading"))}
      />
    );
  }

  if (!data) {
    return (
      <div className="p-6">
        <div className="text-gray-500">{t("projects.details.notFound")}</div>
      </div>
    );
  }

  const buildings = data.buildings || [];
  const features = data.features || [];
  const milestones = data.milestones || [];
  const paymentPlans = data.paymentPlans || (data as { payment_plans?: unknown[] }).payment_plans || [];
  const medias = data.medias || [];
  const properties = data.properties || [];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-[1600px] mx-auto min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <ProjectHeader projectId={Number(id)} token={token!} data={data} />
      <ProjectStats data={data} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
        <div className="lg:col-span-1">
          <ProjectSidebar data={data} buildingsCount={buildings.length} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t("projects.details.aboutProject")}
            </h3>
            <div
              className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: data.description || t("projects.details.noDescription"),
              }}
            />
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="border-b border-slate-200/60 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 sm:px-6 pt-3 overflow-x-auto hide-scrollbar">
              <div className="flex gap-2 min-w-max pb-px">
                {[
                  { id: "buildings", label: t("editProject.tabs.buildings"), icon: Building2 },
                  { id: "features", label: t("projects.details.tabs.features"), icon: Star },
                  { id: "milestones", label: t("editProject.tabs.milestones"), icon: Flag },
                  { id: "payment", label: t("editProject.tabs.paymentPlans"), icon: CreditCard },
                  { id: "units", label: t("projects.columns.units"), icon: Home },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-xl transition-all relative ${activeTab === tab.id
                      ? "bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-sm before:absolute before:bottom-0 before:start-0 before:w-full before:h-0.5 before:bg-teal-600"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-700/50"
                      }`}
                  >
                    <tab.icon
                      className={`h-4 w-4 transition-colors ${activeTab === tab.id ? "text-teal-600" : "text-slate-400"
                        }`}
                    />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-x-auto">
              {activeTab === "buildings" && (
                <BuildingsTab projectId={Number(id)} token={token!} buildings={buildings} />
              )}

              {activeTab === "features" && (
                <FeaturesTab projectId={Number(id)} token={token!} features={features} />
              )}

              {activeTab === "milestones" && (
                <MilestonesTab projectId={Number(id)} token={token!} milestones={milestones} />
              )}

              {activeTab === "payment" && (
                <PaymentPlansTab
                  projectId={Number(id)}
                  developerId={data.developer?.developer_id || 0}
                  token={token!}
                  paymentPlans={paymentPlans}
                  currency={data.currency}
                />
              )}

              {activeTab === "units" && (
                <UnitsTab properties={properties} currency={data.currency} />
              )}
            </div>
          </div>

          <ProjectMedia projectId={Number(id)} medias={medias} />
        </div>
      </div>
    </div>
  );
}