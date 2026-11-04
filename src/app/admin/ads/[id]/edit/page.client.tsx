"use client";

import { useParams, usePathname } from "next/navigation";
import { useAdQuery } from "@/hooks/use-ad-edit";
import { useLanguage } from "@/contexts/LanguageContext";
import EditAdForm from "./EditAdForm";

export default function EditAdPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const params = useParams();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const id = params.id as string;

  const { data: adData, isLoading: loadingAd } = useAdQuery(id);

  if (loadingAd) {
    return (
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded w-32 animate-pulse"></div>
          <div className="flex items-center gap-3">
            <div className="h-8 bg-gray-200 dark:bg-neutral-800 rounded w-48 animate-pulse"></div>
            <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded w-32 animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm p-6 h-64 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (!adData) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-center py-20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {isAr ? "لم يتم العثور على الإعلان" : "Advertisement not found"}
        </h2>
        <p className="text-gray-500 dark:text-neutral-400 mt-2">
          {isAr ? "قد يكون هذا الإعلان محذوفاً أو غير موجود." : "The advertisement may have been deleted or doesn't exist."}
        </p>
      </div>
    );
  }

  return <EditAdForm id={id} adData={adData} routePrefix={routePrefix} />;
}