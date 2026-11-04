"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NotFoundState } from "@/components/ui/empty-states";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFoundPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50/50 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col items-center">
        <NotFoundState />
        <Button
          onClick={() => router.push("/admin/home")}
          className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          {t("notFound.goBackHome")}
        </Button>
      </div>
    </div>
  );
}
