export type SiteSettingsMainTab =
  | "general"
  | "app_settings"
  | "quotation_content"
  | "contract_content"
  | "payment_methods"
  | "integrations"
  | "sent_notifications"
  | "policies";

export type AppSettingsSubTab =
  | "countries"
  | "currencies"
  | "cities"
  | "areas"
  | "amenities"
  | "property_types";

export interface CountryItem {
  id: number;
  code: string;
  name: string;
  name_ar?: string;
  cities_count: number;
  currency_code: string;
  currency_symbol?: string;
  flag?: string;
}

export interface CurrencyItem {
  id: number;
  code: string;
  name: string;
  symbol: string;
  exchange_rate: number;
  is_default: boolean;
}

export interface CityItem {
  id: number;
  name: string;
  name_ar?: string;
  country_id: number;
  country_name: string;
  areas_count: number;
}

export interface AreaItem {
  id: number;
  name: string;
  name_ar?: string;
  city_id: number;
  city_name: string;
  country_name: string;
}

export interface AmenityItem {
  id: number;
  name: string;
  name_ar?: string;
  icon?: string;
  category?: string;
}

export interface PropertyTypeItem {
  id: number;
  name: string;
  name_ar?: string;
  code: string;
  properties_count?: number;
}

export interface GeneralSettings {
  site_name: string;
  site_name_ar?: string;
  site_tagline: string;
  contact_email: string;
  contact_phone: string;
  whatsapp_number: string;
  default_country: string;
  default_currency: string;
  default_language: string;
  timezone: string;
}

export interface QuotationContentSettings {
  arabic_text: string;
  english_text: string;
  header_title?: string;
  default_validity_days?: number;
  notes?: string;
  footer_text?: string;
}

export interface ContractContentSettings {
  arabic_text: string;
  english_text: string;
  contract_title?: string;
  company_legal_name?: string;
  standard_terms?: string;
  disclaimer?: string;
  signature_notice?: string;
}

export interface PaymentMethodItem {
  id: string;
  name: string;
  code: string;
  description: string;
  enabled: boolean;
  type: "gateway" | "manual";
  fields?: Record<string, string>;
}

export interface IntegrationItem {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  status: "connected" | "disconnected" | "error";
  last_sync?: string;
  fields?: Record<string, string>;
}

export interface NotificationEventItem {
  id: string;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  template: string;
  template_ar?: string;
  enabled: boolean;
  channel: "bell" | "email";
  email_subject?: string;
}

export interface PolicySettings {
  privacy_policy_en: string;
  privacy_policy_ar: string;
  terms_of_service_en: string;
  terms_of_service_ar: string;
  privacy_policy?: string;
  terms_of_service?: string;
  refund_policy?: string;
  cookie_policy?: string;
}