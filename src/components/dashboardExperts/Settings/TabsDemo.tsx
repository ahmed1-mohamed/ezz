'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ClockIcon, DollarSign, Home, Loader } from "lucide-react";
import { lazy, Suspense } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AccountInfo = lazy(() => import("./AccountProfile/AccountInfo"));
const Security = lazy(() => import("./Security"));
const Availability = lazy(() => import("./Availability"));
const Pricing = lazy(() => import("./Package/Pricing"));

export default function TabsDemo() {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-[#15042B] text-xl font-semibold mb-5">
        {t("experts.settings.title")}
      </h2>

      <Tabs defaultValue="account-info" className="flex flex-col gap-6">
        <TabsList className="gap-1 bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl w-full">
          <TabsTrigger
            value="account-info"
            className="flex items-center gap-1.5 rounded-lg py-2.5 px-4 text-sm text-[#15042B] data-[state=active]:bg-[#F9FAFB] data-[state=active]:text-[#15042B] transition-all"
          >
            <Home />
            {t("experts.settings.tabs.accountInfo")}
          </TabsTrigger>

          <TabsTrigger
            value="availability"
            className="flex items-center gap-1.5 rounded-lg py-2.5 px-4 text-sm text-[#15042B] data-[state=active]:bg-[#F9FAFB] data-[state=active]:text-[#15042B] transition-all"
          >
            <ClockIcon />
            {t("experts.settings.tabs.availability")}
          </TabsTrigger>

          <TabsTrigger
            value="pricing"
            className="flex items-center gap-1.5 rounded-lg py-2.5 px-4 text-sm text-[#15042B] data-[state=active]:bg-[#F9FAFB] data-[state=active]:text-[#15042B] transition-all"
          >
            <DollarSign />
            {t("experts.settings.tabs.pricing")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account-info">
          <Suspense fallback={<Loader />}>
            <AccountInfo />
          </Suspense>
        </TabsContent>

        <TabsContent value="availability">
          <Suspense fallback={<Loader />}>
            <Availability />
          </Suspense>
        </TabsContent>

        <TabsContent value="pricing">
          <Suspense fallback={<Loader />}>
            <Pricing />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}
