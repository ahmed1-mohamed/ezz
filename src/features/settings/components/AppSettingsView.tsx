"use client";

import React, { useState } from "react";
import { Plus, Trash2, Globe, Coins, Building, MapPin, Sparkles, Home, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AppSettingsSubTab,
  CountryItem,
  CurrencyItem,
  CityItem,
  AreaItem,
  AmenityItem,
  PropertyTypeItem,
} from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { FieldError } from "@/components/ui/form-message";
import { validateAppSettingsItem } from "../validation";

interface AppSettingsViewProps {
  countries: CountryItem[];
  setCountries: React.Dispatch<React.SetStateAction<CountryItem[]>>;
  currencies: CurrencyItem[];
  setCurrencies: React.Dispatch<React.SetStateAction<CurrencyItem[]>>;
  cities: CityItem[];
  setCities: React.Dispatch<React.SetStateAction<CityItem[]>>;
  areas: AreaItem[];
  setAreas: React.Dispatch<React.SetStateAction<AreaItem[]>>;
  amenities: AmenityItem[];
  setAmenities: React.Dispatch<React.SetStateAction<AmenityItem[]>>;
  propertyTypes: PropertyTypeItem[];
  setPropertyTypes: React.Dispatch<React.SetStateAction<PropertyTypeItem[]>>;
}

export function AppSettingsView({
  countries,
  setCountries,
  currencies,
  setCurrencies,
  cities,
  setCities,
  areas,
  setAreas,
  amenities,
  setAmenities,
  propertyTypes,
  setPropertyTypes,
}: AppSettingsViewProps) {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  const [activeSubTab, setActiveSubTab] = useState<AppSettingsSubTab>("countries");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addErrors, setAddErrors] = useState<Record<string, string>>({});

  // Forms state
  const [newCountry, setNewCountry] = useState({ name: "", code: "", currency_code: "AED" });
  const [newCurrency, setNewCurrency] = useState({ code: "", name: "", symbol: "", exchange_rate: "1.0" });
  const [newCity, setNewCity] = useState({ name: "", country_id: "1" });
  const [newArea, setNewArea] = useState({ name: "", city_id: "1" });
  const [newAmenity, setNewAmenity] = useState({ name: "", category: "General" });
  const [newPropertyType, setNewPropertyType] = useState({ name: "", code: "" });

  const subTabs: { id: AppSettingsSubTab; label: string; count?: number }[] = [
    { id: "countries", label: isRTL ? "الدول" : "Countries", count: countries.length },
    { id: "currencies", label: isRTL ? "العملات" : "Currencies", count: currencies.length },
    { id: "cities", label: isRTL ? "المدن" : "Cities", count: cities.length },
    { id: "areas", label: isRTL ? "المناطق" : "Areas", count: areas.length },
    { id: "amenities", label: isRTL ? "المرافق" : "Amenities", count: amenities.length },
    { id: "property_types", label: isRTL ? "أنواع العقارات" : "Property Types", count: propertyTypes.length },
  ];

  const getAddButtonLabel = () => {
    switch (activeSubTab) {
      case "countries":
        return isRTL ? "+ إضافة دولة" : "+ Add Country";
      case "currencies":
        return isRTL ? "+ إضافة عملة" : "+ Add Currency";
      case "cities":
        return isRTL ? "+ إضافة مدينة" : "+ Add City";
      case "areas":
        return isRTL ? "+ إضافة منطقة" : "+ Add Area";
      case "amenities":
        return isRTL ? "+ إضافة مرفق" : "+ Add Amenity";
      case "property_types":
        return isRTL ? "+ إضافة نوع عقار" : "+ Add Property Type";
    }
  };

  const clearAddError = (field: string) => {
    setAddErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const openAddModal = (open: boolean) => {
    if (open) setAddErrors({});
    setIsAddModalOpen(open);
  };

  const getActiveFormValues = (): Record<string, string> => {
    switch (activeSubTab) {
      case "countries":
        return newCountry;
      case "currencies":
        return newCurrency;
      case "cities":
        return newCity;
      case "areas":
        return newArea;
      case "amenities":
        return newAmenity;
      case "property_types":
        return newPropertyType;
    }
  };

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateAppSettingsItem(activeSubTab, getActiveFormValues(), t);
    setAddErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error(isRTL ? "يرجى تعبئة الحقول المطلوبة" : "Please fill in required fields");
      return;
    }

    if (activeSubTab === "countries") {
      const item: CountryItem = {
        id: Date.now(),
        name: newCountry.name,
        code: newCountry.code.toUpperCase(),
        currency_code: newCountry.currency_code.toUpperCase(),
        cities_count: 0,
      };
      setCountries((prev) => [...prev, item]);
      setNewCountry({ name: "", code: "", currency_code: "AED" });
      toast.success(isRTL ? "تمت إضافة الدولة بنجاح" : "Country added successfully");
    } else if (activeSubTab === "currencies") {
      const item: CurrencyItem = {
        id: Date.now(),
        code: newCurrency.code.toUpperCase(),
        name: newCurrency.name,
        symbol: newCurrency.symbol || newCurrency.code.toUpperCase(),
        exchange_rate: parseFloat(newCurrency.exchange_rate) || 1.0,
        is_default: false,
      };
      setCurrencies((prev) => [...prev, item]);
      setNewCurrency({ code: "", name: "", symbol: "", exchange_rate: "1.0" });
      toast.success(isRTL ? "تمت إضافة العملة بنجاح" : "Currency added successfully");
    } else if (activeSubTab === "cities") {
      const selectedCountry = countries.find((c) => c.id === parseInt(newCity.country_id)) || countries[0];
      const item: CityItem = {
        id: Date.now(),
        name: newCity.name,
        country_id: selectedCountry?.id || 1,
        country_name: selectedCountry?.name || "Egypt",
        areas_count: 0,
      };
      setCities((prev) => [...prev, item]);
      setNewCity({ name: "", country_id: "1" });
      toast.success(isRTL ? "تمت إضافة المدينة بنجاح" : "City added successfully");
    } else if (activeSubTab === "areas") {
      const selectedCity = cities.find((c) => c.id === parseInt(newArea.city_id)) || cities[0];
      const item: AreaItem = {
        id: Date.now(),
        name: newArea.name,
        city_id: selectedCity?.id || 1,
        city_name: selectedCity?.name || "Cairo",
        country_name: selectedCity?.country_name || "Egypt",
      };
      setAreas((prev) => [...prev, item]);
      setNewArea({ name: "", city_id: "1" });
      toast.success(isRTL ? "تمت إضافة المنطقة بنجاح" : "Area added successfully");
    } else if (activeSubTab === "amenities") {
      const item: AmenityItem = {
        id: Date.now(),
        name: newAmenity.name,
        category: newAmenity.category,
      };
      setAmenities((prev) => [...prev, item]);
      setNewAmenity({ name: "", category: "General" });
      toast.success(isRTL ? "تمت إضافة المرفق بنجاح" : "Amenity added successfully");
    } else if (activeSubTab === "property_types") {
      const item: PropertyTypeItem = {
        id: Date.now(),
        name: newPropertyType.name,
        code: newPropertyType.code || newPropertyType.name.toLowerCase().replace(/\s+/g, "_"),
        properties_count: 0,
      };
      setPropertyTypes((prev) => [...prev, item]);
      setNewPropertyType({ name: "", code: "" });
      toast.success(isRTL ? "تمت إضافة نوع العقار بنجاح" : "Property type added successfully");
    }

    setIsAddModalOpen(false);
  };

  return (
    <div className="flex-1 space-y-6 min-w-0">
      {/* 1. Header with Title on Left and + Add Button on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {isRTL ? "إعدادات التطبيق" : "App Settings"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {isRTL
              ? "إدارة الدول، العملات، المدن، المناطق، والمرافق في النظام"
              : "Manage countries, currencies, cities, areas, amenities and property types"}
          </p>
        </div>

        <Button
          onClick={() => openAddModal(true)}
          className="h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs cursor-pointer self-start sm:self-auto gap-1.5"
        >
          <span>{getAddButtonLabel()}</span>
        </Button>
      </div>

      {/* 2. Horizontal Sub-Tabs */}
      <div className="flex items-center gap-6 border-b border-gray-200 dark:border-neutral-800 overflow-x-auto pb-px">
        {subTabs.map((tab) => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={cn(
                "pb-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer",
                isActive
                  ? "text-teal-700 dark:text-teal-400 font-semibold"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              )}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* 3. Sub-Tab Content */}

      {/* --- A. Countries Sub-Tab (Matches Exact Screenshot!) --- */}
      {activeSubTab === "countries" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country) => (
            <div
              key={country.id}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex items-center justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="font-bold text-sm tracking-wider text-gray-900 dark:text-gray-100 shrink-0 w-8">
                  {country.code}
                </span>

                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {country.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {country.cities_count} {isRTL ? "مدينة" : "cities"} · {country.currency_code}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setCountries((prev) => prev.filter((c) => c.id !== country.id));
                  toast.success(isRTL ? `تم حذف ${country.name}` : `Deleted ${country.name}`);
                }}
                className="p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer shrink-0"
                title={isRTL ? "حذف" : "Delete"}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* --- B. Currencies Sub-Tab (Table with Delete Action) --- */}
      {activeSubTab === "currencies" && (
        <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-2xs">
          <Table className="w-full min-w-[650px]">
            <TableHeader>
              <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-24">
                  {isRTL ? "الرمز" : "Code"}
                </TableHead>
                <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider ${isRTL ? "text-right" : "text-left"}`}>
                  {isRTL ? "اسم العملة" : "Currency Name"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-36">
                  {isRTL ? "العلامة" : "Symbol"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-36">
                  {isRTL ? "سعر الصرف" : "Exchange Rate"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-28 text-center">
                  {isRTL ? "الحالة" : "Status"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-4 text-[11px] uppercase tracking-wider">
                  {isRTL ? "إجراء" : "Actions"}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currencies.map((currency) => (
                <TableRow
                  key={currency.id}
                  className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <TableCell className="px-4 py-3 font-bold text-xs text-gray-900 dark:text-gray-100 font-mono">
                    {currency.code}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs font-semibold text-gray-900 dark:text-white">
                    {currency.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs font-mono text-gray-600 dark:text-gray-300">
                    {currency.symbol || currency.code}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs font-mono text-gray-600 dark:text-gray-300">
                    {currency.exchange_rate}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    {currency.is_default ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                        {isRTL ? "الافتراضية" : "Default"}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400">
                        {isRTL ? "نشطة" : "Active"}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    {!currency.is_default && (
                      <button
                        type="button"
                        onClick={() => {
                          setCurrencies((prev) => prev.filter((c) => c.id !== currency.id));
                          toast.success(isRTL ? "تم حذف العملة" : "Currency deleted");
                        }}
                        className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer"
                        title={isRTL ? "حذف" : "Delete"}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* --- C. Cities Sub-Tab (Table with Delete Action) --- */}
      {activeSubTab === "cities" && (
        <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-2xs">
          <Table className="w-full min-w-[650px]">
            <TableHeader>
              <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
                <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider ${isRTL ? "text-right" : "text-left"}`}>
                  {isRTL ? "اسم المدينة" : "City Name"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider">
                  {isRTL ? "الدولة" : "Country"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-40">
                  {isRTL ? "عدد المناطق" : "Areas Count"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-4 text-[11px] uppercase tracking-wider">
                  {isRTL ? "إجراء" : "Actions"}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cities.map((city) => (
                <TableRow
                  key={city.id}
                  className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <TableCell className="px-4 py-3 text-xs font-semibold text-gray-900 dark:text-white">
                    {city.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
                      {city.country_name}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">
                    {city.areas_count} {isRTL ? "منطقة" : "areas"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setCities((prev) => prev.filter((c) => c.id !== city.id));
                        toast.success(isRTL ? "تم حذف المدينة" : "City deleted");
                      }}
                      className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer"
                      title={isRTL ? "حذف" : "Delete"}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* --- D. Areas Sub-Tab (Table with Delete Action) --- */}
      {activeSubTab === "areas" && (
        <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-2xs">
          <Table className="w-full min-w-[650px]">
            <TableHeader>
              <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
                <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider ${isRTL ? "text-right" : "text-left"}`}>
                  {isRTL ? "اسم المنطقة" : "Area Name"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider">
                  {isRTL ? "المدينة" : "City"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider">
                  {isRTL ? "الدولة" : "Country"}
                </TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-4 text-[11px] uppercase tracking-wider">
                  {isRTL ? "إجراء" : "Actions"}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {areas.map((area) => (
                <TableRow
                  key={area.id}
                  className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <TableCell className="px-4 py-3 text-xs font-semibold text-gray-900 dark:text-white">
                    {area.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {area.city_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
                      {area.country_name}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setAreas((prev) => prev.filter((a) => a.id !== area.id));
                        toast.success(isRTL ? "تم حذف المنطقة" : "Area deleted");
                      }}
                      className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer"
                      title={isRTL ? "حذف" : "Delete"}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* --- E. Amenities Sub-Tab --- */}
      {activeSubTab === "amenities" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex items-center justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {amenity.name}
                  </h4>
                  {amenity.category && (
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">
                      {amenity.category}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setAmenities((prev) => prev.filter((a) => a.id !== amenity.id));
                  toast.success(isRTL ? "تم حذف المرفق" : "Amenity deleted");
                }}
                className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* --- F. Property Types Sub-Tab --- */}
      {activeSubTab === "property_types" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {propertyTypes.map((type) => (
            <div
              key={type.id}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex items-center justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-all"
            >
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                  {type.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {type.properties_count || 0} {isRTL ? "عقار" : "properties"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPropertyTypes((prev) => prev.filter((p) => p.id !== type.id));
                  toast.success(isRTL ? "تم حذف نوع العقار" : "Property type deleted");
                }}
                className="p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* --- Add Item Dialog --- */}
      <Dialog open={isAddModalOpen} onOpenChange={openAddModal}>
        <DialogContent className="max-w-md bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-gray-900 dark:text-white">
              {getAddButtonLabel()}
            </DialogTitle>
          </DialogHeader>

          <form noValidate onSubmit={handleCreateItem} className="space-y-4 pt-2">
            {activeSubTab === "countries" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "اسم الدولة" : "Country Name"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={newCountry.name}
                    onChange={(e) => {
                      setNewCountry({ ...newCountry, name: e.target.value });
                      clearAddError("name");
                    }}
                    error={!!addErrors.name}
                    aria-invalid={!!addErrors.name}
                    placeholder="e.g. Saudi Arabia"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.name} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">{isRTL ? "رمز الدولة (ISO)" : "Country Code"} <span className="text-red-500">*</span></Label>
                    <Input
                      value={newCountry.code}
                      onChange={(e) => {
                        setNewCountry({ ...newCountry, code: e.target.value.toUpperCase() });
                        clearAddError("code");
                      }}
                      dir="ltr"
                      error={!!addErrors.code}
                      aria-invalid={!!addErrors.code}
                      placeholder="e.g. SA"
                      maxLength={3}
                      className="h-9 text-xs"
                    />
                    <FieldError message={addErrors.code} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">{isRTL ? "العملة" : "Currency"} <span className="text-red-500">*</span></Label>
                    <Input
                      value={newCountry.currency_code}
                      onChange={(e) => {
                        setNewCountry({ ...newCountry, currency_code: e.target.value.toUpperCase() });
                        clearAddError("currency_code");
                      }}
                      dir="ltr"
                      error={!!addErrors.currency_code}
                      aria-invalid={!!addErrors.currency_code}
                      placeholder="e.g. SAR"
                      className="h-9 text-xs"
                    />
                    <FieldError message={addErrors.currency_code} />
                  </div>
                </div>
              </>
            )}

            {activeSubTab === "currencies" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "اسم العملة" : "Currency Name"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={newCurrency.name}
                    onChange={(e) => {
                      setNewCurrency({ ...newCurrency, name: e.target.value });
                      clearAddError("name");
                    }}
                    error={!!addErrors.name}
                    aria-invalid={!!addErrors.name}
                    placeholder="e.g. Saudi Riyal"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.name} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">{isRTL ? "الرمز" : "Code"} <span className="text-red-500">*</span></Label>
                    <Input
                      value={newCurrency.code}
                      onChange={(e) => {
                        setNewCurrency({ ...newCurrency, code: e.target.value.toUpperCase() });
                        clearAddError("code");
                      }}
                      dir="ltr"
                      error={!!addErrors.code}
                      aria-invalid={!!addErrors.code}
                      placeholder="SAR"
                      className="h-9 text-xs"
                    />
                    <FieldError message={addErrors.code} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">{isRTL ? "العلامة" : "Symbol"}</Label>
                    <Input
                      value={newCurrency.symbol}
                      onChange={(e) => {
                        setNewCurrency({ ...newCurrency, symbol: e.target.value });
                        clearAddError("symbol");
                      }}
                      error={!!addErrors.symbol}
                      aria-invalid={!!addErrors.symbol}
                      placeholder="SAR"
                      className="h-9 text-xs"
                    />
                    <FieldError message={addErrors.symbol} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">{isRTL ? "سعر الصرف" : "Rate"} <span className="text-red-500">*</span></Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={newCurrency.exchange_rate}
                      onChange={(e) => {
                        setNewCurrency({ ...newCurrency, exchange_rate: e.target.value });
                        clearAddError("exchange_rate");
                      }}
                      dir="ltr"
                      error={!!addErrors.exchange_rate}
                      aria-invalid={!!addErrors.exchange_rate}
                      placeholder="1.0"
                      className="h-9 text-xs"
                    />
                    <FieldError message={addErrors.exchange_rate} />
                  </div>
                </div>
              </>
            )}

            {activeSubTab === "cities" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "اسم المدينة" : "City Name"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={newCity.name}
                    onChange={(e) => {
                      setNewCity({ ...newCity, name: e.target.value });
                      clearAddError("name");
                    }}
                    error={!!addErrors.name}
                    aria-invalid={!!addErrors.name}
                    placeholder="e.g. Riyadh"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.name} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "الدولة" : "Country"} <span className="text-red-500">*</span></Label>
                  <Select
                    value={newCity.country_id}
                    onValueChange={(val) => {
                      setNewCity({ ...newCity, country_id: val });
                      clearAddError("country_id");
                    }}
                  >
                    <SelectTrigger className="h-9 text-xs" error={!!addErrors.country_id} aria-invalid={!!addErrors.country_id}>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c.id} value={c.id.toString()}>
                          {c.name} ({c.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError message={addErrors.country_id} />
                </div>
              </>
            )}

            {activeSubTab === "areas" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "اسم المنطقة" : "Area Name"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={newArea.name}
                    onChange={(e) => {
                      setNewArea({ ...newArea, name: e.target.value });
                      clearAddError("name");
                    }}
                    error={!!addErrors.name}
                    aria-invalid={!!addErrors.name}
                    placeholder="e.g. Al Olaya"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.name} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "المدينة" : "City"} <span className="text-red-500">*</span></Label>
                  <Select
                    value={newArea.city_id}
                    onValueChange={(val) => {
                      setNewArea({ ...newArea, city_id: val });
                      clearAddError("city_id");
                    }}
                  >
                    <SelectTrigger className="h-9 text-xs" error={!!addErrors.city_id} aria-invalid={!!addErrors.city_id}>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((c) => (
                        <SelectItem key={c.id} value={c.id.toString()}>
                          {c.name} ({c.country_name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError message={addErrors.city_id} />
                </div>
              </>
            )}

            {activeSubTab === "amenities" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "اسم المرفق" : "Amenity Name"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={newAmenity.name}
                    onChange={(e) => {
                      setNewAmenity({ ...newAmenity, name: e.target.value });
                      clearAddError("name");
                    }}
                    error={!!addErrors.name}
                    aria-invalid={!!addErrors.name}
                    placeholder="e.g. Private Garden"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.name} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "التصنيف" : "Category"}</Label>
                  <Input
                    value={newAmenity.category}
                    onChange={(e) => {
                      setNewAmenity({ ...newAmenity, category: e.target.value });
                      clearAddError("category");
                    }}
                    error={!!addErrors.category}
                    aria-invalid={!!addErrors.category}
                    placeholder="e.g. Outdoor / Facilities"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.category} />
                </div>
              </>
            )}

            {activeSubTab === "property_types" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "اسم نوع العقار" : "Type Name"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={newPropertyType.name}
                    onChange={(e) => {
                      setNewPropertyType({ ...newPropertyType, name: e.target.value });
                      clearAddError("name");
                    }}
                    error={!!addErrors.name}
                    aria-invalid={!!addErrors.name}
                    placeholder="e.g. Studio Apartment"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.name} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "الرمز البرمجي" : "Code Identifier"}</Label>
                  <Input
                    value={newPropertyType.code}
                    onChange={(e) => {
                      setNewPropertyType({ ...newPropertyType, code: e.target.value });
                      clearAddError("code");
                    }}
                    dir="ltr"
                    error={!!addErrors.code}
                    aria-invalid={!!addErrors.code}
                    placeholder="e.g. studio_apartment"
                    className="h-9 text-xs"
                  />
                  <FieldError message={addErrors.code} />
                </div>
              </>
            )}

            <DialogFooter className="pt-3 gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => openAddModal(false)}
                className="text-xs"
              >
                {isRTL ? "إلغاء" : "Cancel"}
              </Button>
              <Button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold"
              >
                {isRTL ? "إضافة وحفظ" : "Add & Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
