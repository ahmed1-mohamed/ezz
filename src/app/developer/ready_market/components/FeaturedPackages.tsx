"use client";

import { type ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Eye, TrendingUp, Check, Zap, Building2 } from "lucide-react";
import { type MarketplaceItem } from "../types";

interface FeaturedPackagesProps {
  onPurchase: (item: MarketplaceItem) => void;
  items?: MarketplaceItem[];
}

const COLOR_SCHEMES: Record<
  string,
  {
    wrapper: string;
    iconBg: string;
    iconText: string;
    badge: string;
    button: string;
    price: string;
    border: string;
    check: string;
  }
> = {
  purple: {
    wrapper: "border-purple-200 bg-white hover:border-purple-300",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    badge: "bg-purple-600 text-white",
    button: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white",
    price: "text-purple-600",
    border: "border-purple-200",
    check: "text-purple-500",
  },
  blue: {
    wrapper: "border-blue-200 bg-white hover:border-blue-300",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badge: "bg-blue-600 text-white",
    button: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
    price: "text-blue-600",
    border: "border-blue-200",
    check: "text-blue-500",
  },
  green: {
    wrapper: "border-emerald-200 bg-white hover:border-emerald-300",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badge: "bg-emerald-600 text-white",
    button: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white",
    price: "text-emerald-600",
    border: "border-emerald-200",
    check: "text-emerald-500",
  },
};

const ICONS: Record<string, ReactNode> = {
  star: <Star className="h-6 w-6" />,
  eye: <Eye className="h-6 w-6" />,
  trending: <TrendingUp className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  building: <Building2 className="h-6 w-6" />,
};

const FEATURED_ITEMS: MarketplaceItem[] = [
  {
    id: "feature-unit",
    titleKey: "marketplace.featured.featureUnit.title",
    descriptionKey: "marketplace.featured.featureUnit.description",
    credits: 5000,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 499,
    currency: "AED",
    features: [
      "marketplace.featured.featureUnit.feature1",
      "marketplace.featured.featureUnit.feature2",
      "marketplace.featured.featureUnit.feature3",
      "marketplace.featured.featureUnit.feature4",
    ],
    icon: "star",
    badgeKey: "marketplace.badge.popular",
    badgeVariant: "popular",
    category: "featured",
    colorScheme: "purple",
  },
  {
    id: "project-highlight-pkg",
    titleKey: "marketplace.featured.projectHighlight.title",
    descriptionKey: "marketplace.featured.projectHighlight.description",
    credits: 15000,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 1499,
    currency: "AED",
    features: [
      "marketplace.featured.projectHighlight.feature1",
      "marketplace.featured.projectHighlight.feature2",
      "marketplace.featured.projectHighlight.feature3",
      "marketplace.featured.projectHighlight.feature4",
    ],
    icon: "eye",
    badgeKey: "marketplace.badge.premium",
    badgeVariant: "premium",
    category: "featured",
    colorScheme: "blue",
  },
  {
    id: "boost-listing",
    titleKey: "marketplace.featured.boostListing.title",
    descriptionKey: "marketplace.featured.boostListing.description",
    credits: 2000,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 199,
    currency: "AED",
    features: [
      "marketplace.featured.boostListing.feature1",
      "marketplace.featured.boostListing.feature2",
      "marketplace.featured.boostListing.feature3",
      "marketplace.featured.boostListing.feature4",
    ],
    icon: "trending",
    badgeKey: "marketplace.badge.bestValue",
    badgeVariant: "value",
    category: "featured",
    colorScheme: "green",
  },
];

function FeaturedCard({
  item,
  onPurchase,
}: {
  item: MarketplaceItem;
  onPurchase: (item: MarketplaceItem) => void;
}) {
  const { t } = useLanguage();
  const scheme = COLOR_SCHEMES[item.colorScheme] ?? COLOR_SCHEMES.purple;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 p-6 shadow-sm transition-all duration-200 hover:shadow-md ${scheme.wrapper}`}
    >
      {item.badgeKey && (
        <span
          className={`absolute -top-3 end-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${scheme.badge}`}
        >
          {t(item.badgeKey)}
        </span>
      )}

      <div className="mb-4 flex items-start gap-3">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${scheme.iconBg} ${scheme.iconText}`}>
          {ICONS[item.icon] || ICONS["zap"]}
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900">{t(item.titleKey)}</h3>
      <p className="mt-1 text-sm leading-relaxed text-gray-500">
        {t(item.descriptionKey)}
      </p>

      <ul className="mt-4 space-y-2 flex-1">
        {item.features.map((featureKey) => (
          <li key={featureKey} className="flex items-center gap-2 text-sm text-gray-700">
            <Check className={`h-4 w-4 shrink-0 ${scheme.check}`} />
            {t(featureKey)}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-gray-100 pt-4">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-gray-400">{t("marketplace.price")}</p>
            <p className={`text-3xl font-extrabold ${scheme.price}`}>
              {item.currency === "$" ? "$" : ""}{item.price.toLocaleString()}{item.currency !== "$" ? ` ${item.currency}` : ""}
            </p>
          </div>
          <span className="text-xs text-gray-400">{t(item.creditUnitKey)} ({item.credits.toLocaleString()} {t("marketplace.checkout.credits")})</span>
        </div>
        <button
          id={`purchase-btn-${item.id}`}
          onClick={() => onPurchase(item)}
          className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${scheme.button}`}
        >
          {t("marketplace.purchaseNow")}
        </button>
      </div>
    </div>
  );
}

export function FeaturedPackages({ onPurchase, items }: FeaturedPackagesProps) {
  const { t } = useLanguage();
  const displayItems = items || FEATURED_ITEMS;

  return (
    <section aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="mb-5 text-xl font-bold text-gray-900">
        {t("marketplace.featuredTitle")}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {displayItems.map((item) => (
          <FeaturedCard key={item.id} item={item} onPurchase={onPurchase} />
        ))}
      </div>
    </section>
  );
}
