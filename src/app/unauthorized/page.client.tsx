"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function UnauthorizedPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { t } = useLanguage();

  const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userType === "admin") {
        router.push("/admin/home");
      } else if (userType === "expert") {
        router.push("/expert/home");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [router, userType]);

  const handleGoToDashboard = (): void => {
    if (userType === "admin") {
      router.push("/admin/home");
    } else if (userType === "expert") {
      router.push("/expert/home");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-5xl font-bold text-red-600 mb-4">403</h1>

        <h2 className="text-2xl font-semibold mb-3">
          {t("unauthorized.title")}
        </h2>

        <p className="text-gray-600 mb-4">
          {t("unauthorized.description")}
        </p>

        {userType && (
          <p className="text-sm text-gray-500 mb-6">
            {t("unauthorized.yourRole")}{" "}
            <span className="font-semibold text-black capitalize">{userType}</span>
          </p>
        )}

        <p className="text-xs text-gray-400 mb-6">
          {t("unauthorized.redirecting")}
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleGoToDashboard}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {t("unauthorized.goToDashboard")}
          </button>

          <button
            onClick={() => router.back()}
            className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            {t("unauthorized.goBack")}
          </button>
        </div>
      </div>
    </div>
  );
}