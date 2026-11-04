"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import { MarketplaceHero } from "./components/MarketplaceHero";
import { FeaturedPackages } from "./components/FeaturedPackages";
import { AllAddons } from "./components/AllAddons";
import { CheckoutPage } from "./components/CheckoutPage";
import { fetchAdCreditPackages } from "@/data/api-client";
import { type MarketplaceItem } from "./types";

const COLOR_SCHEMES: MarketplaceItem["colorScheme"][] = ["purple", "blue", "green", "yellow", "cyan", "pink"];

function mapPackage(pkg: any, t: (key: string, values?: Record<string, string | number>) => string): MarketplaceItem {
  const colorScheme = COLOR_SCHEMES[pkg.id % COLOR_SCHEMES.length] || "purple";

  let icon = "zap";
  if (pkg.credits >= 50000) icon = "trending";
  else if (pkg.credits >= 15000) icon = "eye";
  else if (pkg.credits >= 5000) icon = "star";
  else if (pkg.credits >= 3000) icon = "shield";
  else if (pkg.credits >= 1000) icon = "zap";
  else icon = "chart";

  const category = pkg.price >= 400 ? "featured" : "addon";

  let badgeKey: string | undefined;
  let badgeVariant: "popular" | "premium" | "value" | undefined;
  if (pkg.credits >= 50000) {
    badgeKey = "marketplace.badge.premium";
    badgeVariant = "premium";
  } else if (pkg.credits >= 15000) {
    badgeKey = "marketplace.badge.popular";
    badgeVariant = "popular";
  } else if (pkg.credits <= 1000) {
    badgeKey = "marketplace.badge.bestValue";
    badgeVariant = "value";
  }

  const credits = pkg.credits.toLocaleString();

  // Text fields hold already-translated strings; the cards pass them through t(), which returns them unchanged.
  return {
    id: pkg.id.toString(),
    titleKey: pkg.name,
    descriptionKey: t("marketplace.apiPackage.description", { credits }),
    credits: pkg.credits,
    creditUnitKey: "marketplace.creditsPerUnit",
    price: pkg.price,
    currency: pkg.currency || "AED",
    features: [
      t("marketplace.apiPackage.feature1", { credits }),
      t("marketplace.apiPackage.feature2"),
      t("marketplace.apiPackage.feature3"),
    ],
    icon,
    badgeKey,
    badgeVariant,
    category,
    colorScheme,
    tags: category === "addon" ? [t("marketplace.apiPackage.adCreditsTag"), t("marketplace.apiPackage.creditsTag", { credits })] : undefined,
  };
}

export default function MarketplacePage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const token = session?.user?.accessToken;

  const { data: packagesResult, isLoading } = useQuery({
    queryKey: ["adCreditPackages", token],
    queryFn: () => fetchAdCreditPackages(token!),
    enabled: !!token,
    retry: false,
  });

  const packages =
    packagesResult && Array.isArray(packagesResult.packages) && packagesResult.packages.length > 0
      ? packagesResult.packages.map((pkg: any) => mapPackage(pkg, t))
      : null;

  const handlePurchase = (item: MarketplaceItem): void => {
    setSelectedItem(item);
  };

  const handleCloseCheckout = (): void => {
    setSelectedItem(null);
  };


  if (selectedItem) {
    return (
      <CheckoutPage item={selectedItem} onClose={handleCloseCheckout} />
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#0D7A70] border-t-transparent" />
      </div>
    );
  }

  const featuredItems = packages ? packages.filter((p: MarketplaceItem) => p.category === "featured") : undefined;
  const addonItems = packages ? packages.filter((p: MarketplaceItem) => p.category === "addon") : undefined;

  return (
    <div className="p-6 space-y-8 max-w-full overflow-hidden">
      <MarketplaceHero />
      <FeaturedPackages onPurchase={handlePurchase} items={featuredItems} />
      <AllAddons onPurchase={handlePurchase} items={addonItems} />
    </div>
  );
}
