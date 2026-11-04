"use client";

import { useState } from "react";
import { SiteSettingsMainTab } from "@/features/settings/types";
import { SettingsSidebar } from "@/features/settings/components/SettingsSidebar";
import { AppSettingsView } from "@/features/settings/components/AppSettingsView";
import {
  GeneralSettingsView,
  QuotationContentView,
  ContractContentView,
  PaymentMethodsView,
  IntegrationsView,
  SentNotificationsView,
  PoliciesView,
} from "@/features/settings/components/OtherSettingsViews";
import {
  INITIAL_COUNTRIES,
  INITIAL_CURRENCIES,
  INITIAL_CITIES,
  INITIAL_AREAS,
  INITIAL_AMENITIES,
  INITIAL_PROPERTY_TYPES,
  INITIAL_GENERAL_SETTINGS,
  INITIAL_QUOTATION_SETTINGS,
  INITIAL_CONTRACT_SETTINGS,
  INITIAL_PAYMENT_METHODS,
  INITIAL_INTEGRATIONS,
  INITIAL_POLICIES,
} from "@/features/settings/data/mock-settings";

export default function SiteSettingsClientPage() {
  const [activeMainTab, setActiveMainTab] = useState<SiteSettingsMainTab>("app_settings");

  const [countries, setCountries] = useState(INITIAL_COUNTRIES);
  const [currencies, setCurrencies] = useState(INITIAL_CURRENCIES);
  const [cities, setCities] = useState(INITIAL_CITIES);
  const [areas, setAreas] = useState(INITIAL_AREAS);
  const [amenities, setAmenities] = useState(INITIAL_AMENITIES);
  const [propertyTypes, setPropertyTypes] = useState(INITIAL_PROPERTY_TYPES);

  const [generalSettings, setGeneralSettings] = useState(INITIAL_GENERAL_SETTINGS);
  const [quotationSettings, setQuotationSettings] = useState(INITIAL_QUOTATION_SETTINGS);
  const [contractSettings, setContractSettings] = useState(INITIAL_CONTRACT_SETTINGS);
  const [paymentMethods, setPaymentMethods] = useState(INITIAL_PAYMENT_METHODS);
  const [integrations, setIntegrations] = useState(INITIAL_INTEGRATIONS);
  const [policies, setPolicies] = useState(INITIAL_POLICIES);

  return (
    <div className="p-6 max-w-full">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <SettingsSidebar
          activeTab={activeMainTab}
          onSelectTab={setActiveMainTab}
        />

        <div className="flex-1 w-full min-w-0">
          {activeMainTab === "app_settings" && (
            <AppSettingsView
              countries={countries}
              setCountries={setCountries}
              currencies={currencies}
              setCurrencies={setCurrencies}
              cities={cities}
              setCities={setCities}
              areas={areas}
              setAreas={setAreas}
              amenities={amenities}
              setAmenities={setAmenities}
              propertyTypes={propertyTypes}
              setPropertyTypes={setPropertyTypes}
            />
          )}

          {activeMainTab === "general" && (
            <GeneralSettingsView
              settings={generalSettings}
              onSave={setGeneralSettings}
            />
          )}

          {activeMainTab === "quotation_content" && (
            <QuotationContentView
              settings={quotationSettings}
              onSave={setQuotationSettings}
            />
          )}

          {activeMainTab === "contract_content" && (
            <ContractContentView
              settings={contractSettings}
              onSave={setContractSettings}
            />
          )}

          {activeMainTab === "payment_methods" && (
            <PaymentMethodsView
              methods={paymentMethods}
              setMethods={setPaymentMethods}
            />
          )}

          {activeMainTab === "integrations" && (
            <IntegrationsView
              integrations={integrations}
              setIntegrations={setIntegrations}
            />
          )}

          {activeMainTab === "sent_notifications" && (
            <SentNotificationsView />
          )}

          {activeMainTab === "policies" && (
            <PoliciesView
              policies={policies}
              onSave={setPolicies}
            />
          )}
        </div>
      </div>
    </div>
  );
}