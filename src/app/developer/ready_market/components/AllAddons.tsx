"use client";

import { type ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Video, BarChart3, Globe, Shield, Zap } from "lucide-react";
import { type MarketplaceItem } from "../types";

interface AllAddonsProps {
  onPurchase: (item: MarketplaceItem) => void;
  items?: MarketplaceItem[];
}

const ADDON_ICON_MAP: Record<string, ReactNode> = {
  building: <Building2 className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  chart: <BarChart3 className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
};

const ADDON_COLORS: Record<string, { bg: string; text: string; price: string; tagBg: string; tagText: string }> = {
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    price: "text-orange-500",
    tagBg: "bg-orange-100",
    tagText: "text-orange-700",
  },
  cyan: {
    bg: "bg-cyan-100",
    text: "text-cyan-700",
    price: "text-blue-500",
    tagBg: "bg-blue-100",
    tagText: "text-blue-700",
  },
  pink: {
    bg: "bg-pink-100",
    text: "bg-pink-100",
    price: "text-pink-500",
    tagBg: "bg-pink-100",
    tagText: "text-pink-700",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    price: "text-purple-500",
    tagBg: "bg-purple-100",
    tagText: "text-purple-700",
  },
  green: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    price: "text-emerald-600",
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-700",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    price: "text-blue-600",
    tagBg: "bg-blue-100",
    tagText: "text-blue-700",
  },
};

const ADDON_ITEMS: MarketplaceItem[] = [
  {
    id: "project-highlight",
    titleKey: "marketplace.addons.projectHighlight.title",
    descriptionKey: "marketplace.addons.projectHighlight.description",
    credits: 15000,
    creditUnitKey: "marketplace.creditsPerProject",
    price: 1499,
    currency: "AED",
    features: [],
    icon: "building",
    category: "addon",
    colorScheme: "yellow",
    tags: [
      "marketplace.addons.projectHighlight.tag1",
      "marketplace.addons.projectHighlight.tag2",
      "marketplace.addons.projectHighlight.tag3",
    ],
  },
  {
    id: "virtual-tour",
    titleKey: "marketplace.addons.virtualTour.title",
    descriptionKey: "marketplace.addons.virtualTour.description",
    credits: 4500,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 449,
    currency: "AED",
    features: [],
    icon: "globe",
    category: "addon",
    colorScheme: "cyan",
    tags: [
      "marketplace.addons.virtualTour.tag1",
      "marketplace.addons.virtualTour.tag2",
      "marketplace.addons.virtualTour.tag3",
    ],
  },
  {
    id: "video-tour",
    titleKey: "marketplace.addons.videoTour.title",
    descriptionKey: "marketplace.addons.videoTour.description",
    credits: 8000,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 799,
    currency: "AED",
    features: [],
    icon: "video",
    category: "addon",
    colorScheme: "pink",
    tags: [
      "marketplace.addons.videoTour.tag1",
      "marketplace.addons.videoTour.tag2",
      "marketplace.addons.videoTour.tag3",
    ],
  },
  {
    id: "expert-profile",
    titleKey: "marketplace.addons.expertProfile.title",
    descriptionKey: "marketplace.addons.expertProfile.description",
    credits: 3000,
    creditUnitKey: "marketplace.creditsPerProject",
    price: 299,
    currency: "AED",
    features: [],
    icon: "shield",
    category: "addon",
    colorScheme: "purple",
    tags: [
      "marketplace.addons.expertProfile.tag1",
      "marketplace.addons.expertProfile.tag2",
      "marketplace.addons.expertProfile.tag3",
    ],
  },
  {
    id: "sms-campaign",
    titleKey: "marketplace.addons.smsCampaign.title",
    descriptionKey: "marketplace.addons.smsCampaign.description",
    credits: 1200,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 119,
    currency: "AED",
    features: [],
    icon: "zap",
    category: "addon",
    colorScheme: "green",
    tags: [
      "marketplace.addons.smsCampaign.tag1",
      "marketplace.addons.smsCampaign.tag2",
      "marketplace.addons.smsCampaign.tag3",
    ],
  },
  {
    id: "push-notifications",
    titleKey: "marketplace.addons.pushNotifications.title",
    descriptionKey: "marketplace.addons.pushNotifications.description",
    credits: 600,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: 59,
    currency: "AED",
    features: [],
    icon: "chart",
    category: "addon",
    colorScheme: "blue",
    tags: [
      "marketplace.addons.pushNotifications.tag1",
      "marketplace.addons.pushNotifications.tag2",
      "marketplace.addons.pushNotifications.tag3",
    ],
  },
];

function AddonRow({
  item,
  onPurchase,
}: {
  item: MarketplaceItem;
  onPurchase: (item: MarketplaceItem) => void;
}) {
  const { t } = useLanguage();
  const colors = ADDON_COLORS[item.colorScheme] ?? ADDON_COLORS.blue;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
          {ADDON_ICON_MAP[item.icon] || <Zap className="h-5 w-5" />}
        </div>
        <div className="space-y-1 text-start">
          <h3 className="font-bold text-gray-900">{t(item.titleKey)}</h3>
          <p className="text-sm leading-relaxed text-gray-500">
            {t(item.descriptionKey)}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tagKey) => (
                <span
                  key={tagKey}
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.tagBg} ${colors.tagText}`}
                >
                  {t(tagKey)}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-6 sm:flex-col sm:items-end sm:gap-1.5">
        <div className="text-end">
          <p className={`text-2xl font-extrabold ${colors.price}`}>
            {item.currency === "$" ? "$" : ""}{item.price.toLocaleString()}{item.currency !== "$" ? ` ${item.currency}` : ""}
          </p>
          <p className="text-xs text-gray-400">{t(item.creditUnitKey)} ({item.credits.toLocaleString()} {t("marketplace.checkout.credits")})</p>
        </div>
      </div>

      <button
        id={`addon-btn-${item.id}`}
        onClick={() => onPurchase(item)}
        className="shrink-0 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 active:scale-95"
      >
        {t("marketplace.learnAndPurchase")}
      </button>
    </div>
  );
}

export function AllAddons({ onPurchase, items }: AllAddonsProps) {
  const { t } = useLanguage();
  const displayItems = items || ADDON_ITEMS;

  return (
    <section aria-labelledby="addons-heading">
      <h2 id="addons-heading" className="mb-5 text-xl font-bold text-gray-900">
        {t("marketplace.allAddonsTitle")}
      </h2>
      <div className="space-y-4">
        {displayItems.map((item) => (
          <AddonRow key={item.id} item={item} onPurchase={onPurchase} />
        ))}
      </div>
    </section>
  );
}
