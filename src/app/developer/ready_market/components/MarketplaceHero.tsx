"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Store, Sparkles, TrendingUp } from "lucide-react";

export function MarketplaceHero() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D7A70] via-[#0a6560] to-[#1e1435] p-8 text-white shadow-lg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-16 -top-16 h-64 w-64 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -start-12 h-48 w-48 rounded-full bg-white/5"
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase">
            <Store className="h-3.5 w-3.5" />
            {t("marketplace.heroBadge")}
          </div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
            {t("marketplace.heroTitle")}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/80">
            {t("marketplace.heroSubtitle")}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <div>
              <p className="text-xs text-white/70">{t("marketplace.creditsAvailable")}</p>
              <p className="text-lg font-bold">—</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
            <TrendingUp className="h-5 w-5 text-emerald-300" />
            <div>
              <p className="text-xs text-white/70">{t("marketplace.activeFeatures")}</p>
              <p className="text-lg font-bold">—</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
