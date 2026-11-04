"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Plus, Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/ui/empty-state";

export default function CustomersClient() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="p-6 space-y-6 max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("sidebar.customers") || "Customers"}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isRTL
              ? "إدارة العملاء الفعليين وتتبع عمليات الشراء والحجوزات"
              : "Manage buyers, active clients, and purchase history"}
          </p>
        </div>

        <Button className="bg-teal-700 hover:bg-teal-800 text-white gap-2 font-medium text-xs sm:text-sm">
          <Plus className="h-4 w-4" />
          {isRTL ? "إضافة عميل" : "New Customer"}
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400`} />
          <Input
            placeholder={isRTL ? "البحث في العملاء..." : "Search customers..."}
            className={`${isRTL ? "pr-9" : "pl-9"} h-9 text-xs sm:text-sm bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800`}
          />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-12 text-center shadow-2xs">
        <EmptyState
          type="no_results"
          title={isRTL ? "لا يوجد عملاء حالياً" : "No customers found"}
          message={
            isRTL
              ? "ابدأ بإضافة أول عميل أو تحويل العملاء المحتملين إلى عملاء فعليين."
              : "Start by creating a customer profile or convert qualified leads."
          }
        />
      </div>
    </div>
  );
}
