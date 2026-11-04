export interface MarketplaceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  credits: number;
  creditUnitKey: string;
  price: number;
  currency: string;
  features: string[];
  icon: string;
  badgeKey?: string;
  badgeVariant?: "popular" | "premium" | "value";
  category: "featured" | "addon";
  colorScheme: "purple" | "blue" | "green" | "yellow" | "cyan" | "pink";
  tags?: string[];
}

export type PaymentMethod = "card" | "wallet" | "bank" | "mobile";
