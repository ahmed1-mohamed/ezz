"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  ChevronRight,
  ExternalLink,
  Eye,
  Home,
  Info,
  Mail,
  MapPin,
  Maximize,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { PropertyPaymentPlans } from "@/features/properties/components/property-details/PropertyPaymentPlans";
import { extractPaymentPlans } from "@/lib/payment-plans";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useReadyUnit, useReadyUnitReview } from "../hooks";
import { READY_UNIT_STATE, type ReadyUnitState } from "../types";
import { useReadyMarketBasePath } from "../use-base-path";
import { getReadyUnitPaymentPlan } from "../utils";
import { ReadyUnitStatusBadge } from "../components/ReadyUnitStatusBadge";

const card = "rounded-xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-neutral-800 dark:bg-neutral-900";
const sectionTitle = "mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100";

type Value = string | number | null | undefined;
const isEmpty = (v: Value) => v === null || v === undefined || v === "";

function DetailRow({ label, value, ltr }: { label: string; value: Value; ltr?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-100 py-3 last:border-b-0 dark:border-neutral-800">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</span>
      <span className="text-sm text-gray-600 dark:text-gray-300 text-end break-all" dir={ltr ? "ltr" : undefined}>
        {isEmpty(value) ? "-" : value}
      </span>
    </div>
  );
}

export default function ReadyUnitDetailsPage({ id }: { id: number }) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const basePath = useReadyMarketBasePath();
  const { data: unit, isLoading, isError } = useReadyUnit(id);
  const { acceptUnit, rejectUnit, pendingId } = useReadyUnitReview();
  const [activeImage, setActiveImage] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const locale = language === "ar" ? "ar-EG" : "en-US";

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-80" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Skeleton className="h-[420px] lg:col-span-2" />
          <Skeleton className="h-[420px]" />
        </div>
      </div>
    );
  }

  if (isError || !unit) {
    return <p className="py-16 text-center text-sm text-red-600">{t("readyMarket.details.loadFailed")}</p>;
  }

  const images = (unit.medias ?? []).filter((m) => m.media_url && (!m.media_type || m.media_type === "image"));
  const mainImage = images[activeImage] ?? images[0];

  const up = unit.user_property;
  const owner = up?.user;
  const ownerName = owner?.name || [owner?.first_name, owner?.last_name].filter(Boolean).join(" ") || "-";
  const email = up?.address?.email || owner?.email || "";
  const phone = up?.address?.phone_number || owner?.phone_number || owner?.phone || "";
  const whatsapp = up?.address?.whatsapp_number || up?.whatsapp_number || phone;

  const location = unit.location;
  const lat = Number(location?.latitude);
  const lng = Number(location?.longitude);
  const hasCoords = Number.isFinite(lat) && Number.isFinite(lng) && !(lat === 0 && lng === 0);
  const address = [
    location?.description || location?.landmark,
    location?.area?.name ?? location?.area?.area_name,
    location?.city?.name ?? location?.city?.city_name,
  ]
    .filter(Boolean)
    .filter((part, index, all) => all.indexOf(part) === index)
    .join(" · ");
  const sides = (["north_side", "south_side", "east_side", "west_side"] as const).filter((k) => location?.[k]);

  const num = (v: unknown) => {
    const n = Number(v);
    return v === null || v === undefined || v === "" || Number.isNaN(n) ? null : n;
  };
  const fmt = (v: unknown) => {
    const n = num(v);
    return n === null ? null : n.toLocaleString(locale);
  };
  const price = num(unit.price);
  const formatDate = (value?: string) => {
    const date = value ? new Date(value) : null;
    return date && !Number.isNaN(date.getTime())
      ? date.toLocaleDateString(locale, { day: "2-digit", month: "short", year: "numeric" })
      : null;
  };
  /** Translated enum value (e.g. "semi-finished"), or the raw value when no label exists. */
  const label = (group: string, value?: string | null) => {
    if (!value) return null;
    const key = `readyMarket.${group}.${value}`;
    const text = t(key);
    return text === key ? value : text;
  };

  const plans = extractPaymentPlans(unit);
  const unitPlan = getReadyUnitPaymentPlan(unit);
  const money = (v: unknown) => {
    const n = num(v);
    return n === null ? null : `${t("common.aed")} ${n.toLocaleString(locale)}`;
  };
  const typeName = [unit.property_type?.name, unit.property_subtype?.name].filter(Boolean).join(" / ");
  const buildingName = typeof unit.building === "string" ? unit.building : unit.building?.building_name;
  const licenses = [
    { key: "referenceListed", value: unit.reference_listed },
    { key: "brokerLicense", value: unit.broker_license },
    { key: "agentLicense", value: unit.agent_license },
    { key: "zoneName", value: unit.zone_name },
    { key: "dldPermit", value: unit.dld_permit_number },
    { key: "dldBarcode", value: unit.dld_barcode },
  ].filter((l) => !isEmpty(l.value));

  const state: ReadyUnitState | null =
    unit.is_active === 0 || unit.is_active === 1 || unit.is_active === 2 ? unit.is_active : null;
  const isPending = pendingId === unit.property_id;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-1.5">
          <nav className="flex items-center gap-1 text-xs text-gray-500">
            <Home className="h-3.5 w-3.5" />
            <span>{t("readyMarket.breadcrumb.home")}</span>
            <ChevronRight className="h-3 w-3 rtl:rotate-180" />
            <Link href={basePath} prefetch={false} className="hover:text-[#007b78]">
              {t("readyMarket.title")}
            </Link>
            <ChevronRight className="h-3 w-3 rtl:rotate-180" />
            <span className="max-w-[200px] truncate text-gray-700 dark:text-gray-300">{unit.property_name}</span>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => router.push(basePath)} aria-label={t("common.back")}>
              <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-200 rtl:rotate-180" />
            </button>
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl">{unit.property_name}</h1>
            <ReadyUnitStatusBadge state={state} />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={isPending || state === READY_UNIT_STATE.REJECTED}
            onClick={() => rejectUnit(unit.property_id)}
            className="h-9 rounded-lg bg-[#f04438] px-4 text-xs font-medium text-white hover:bg-[#d92d20] disabled:opacity-50"
          >
            {t("readyMarket.actions.reject")}
          </button>
          <button
            type="button"
            disabled={isPending || state === READY_UNIT_STATE.ACCEPTED}
            onClick={() => acceptUnit(unit.property_id)}
            className="h-9 rounded-lg bg-[#12b76a] px-4 text-xs font-medium text-white hover:bg-[#039855] disabled:opacity-50"
          >
            {t("readyMarket.actions.approve")}
          </button>
          <Link
            href={`${basePath}/${unit.property_id}/edit`}
            prefetch={false}
            className="inline-flex h-9 items-center rounded-lg bg-[#007b78] px-4 text-xs font-medium text-white hover:bg-[#006664]"
          >
            {t("readyMarket.actions.edit")}
          </Link>
        </div>
      </div>

      <div className={cn(card, "space-y-4")}>
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.form.basicInfo")}</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Main column */}
          <div className="space-y-4 lg:col-span-2">
            <div className="space-y-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800">
                {mainImage ? (
                  <Image src={mainImage.media_url} alt={unit.property_name} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" unoptimized />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-gray-400">{t("readyMarket.details.noImages")}</div>
                )}
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.slice(0, 8).map((media, index) => (
                    <button
                      key={media.media_id}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-lg border-2",
                        index === activeImage ? "border-[#007b78]" : "border-transparent"
                      )}
                    >
                      <Image src={media.media_url} alt={unit.property_name} fill sizes="160px" className="object-cover" unoptimized />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={card}>
              <h3 className={sectionTitle}>{t("readyMarket.details.listingDetails")}</h3>
              <div className="flex flex-wrap items-center gap-4 pb-2 text-xs text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4" />
                  {t("readyMarket.details.beds", { count: unit.bedrooms ?? 0 })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Bath className="h-4 w-4" />
                  {t("readyMarket.details.baths", { count: unit.bathrooms ?? 0 })}
                </span>
                {fmt(unit.size) && (
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="h-4 w-4" />
                    {fmt(unit.size)}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {t("readyMarket.details.viewsCount", { count: unit.views_count ?? unit.views ?? 0 })}
                </span>
              </div>
              <DetailRow label={t("readyMarket.form.unitType")} value={typeName} />
              <DetailRow label={t("readyMarket.form.listingType")} value={label("listingType", up?.listing_type)} />
              <DetailRow label={t("readyMarket.columns.availability")} value={label("availability", unit.availability_status)} />
              <DetailRow label={t("readyMarket.details.construction")} value={label("construction", unit.construction_status)} />
              <DetailRow label={t("readyMarket.details.finishing")} value={label("finishing", unit.finishing_status)} />
              <DetailRow label={t("readyMarket.details.furnishing")} value={label("furnish", unit.furnish_status)} />
              <DetailRow label={t("readyMarket.form.yearBuilt")} value={up?.built_year ?? up?.year_built} />
              <DetailRow
                label={t("readyMarket.details.maidRoom")}
                value={t(unit.maid_room ? "readyMarket.details.yes" : "readyMarket.details.no")}
              />
              {!isEmpty(unit.floor) && <DetailRow label={t("readyMarket.form.floor")} value={unit.floor} />}
              {!isEmpty(unit.view) && <DetailRow label={t("readyMarket.form.view")} value={unit.view} />}
              {num(unit.parking_spaces) !== null && <DetailRow label={t("readyMarket.details.parking")} value={fmt(unit.parking_spaces)} />}
              {num(unit.bua_size) !== null && <DetailRow label={t("readyMarket.details.buaSize")} value={fmt(unit.bua_size)} />}
              {num(unit.plot_size) !== null && <DetailRow label={t("readyMarket.details.plotSize")} value={fmt(unit.plot_size)} />}
              {buildingName && <DetailRow label={t("readyMarket.details.building")} value={buildingName} />}
              {unit.project?.project_name && <DetailRow label={t("readyMarket.details.project")} value={unit.project.project_name} />}
              {unit.ownership_type && <DetailRow label={t("readyMarket.details.ownership")} value={label("ownership", unit.ownership_type)} />}
              <DetailRow
                label={t("readyMarket.details.listingId")}
                value={unit.property_no && unit.property_no !== "0" ? unit.property_no : `#${unit.property_id}`}
              />
              <DetailRow label={t("readyMarket.columns.createdAt")} value={formatDate(unit.created_at)} />

              {unit.description && (
                <div className="pt-4">
                  <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t("readyMarket.details.description")}
                    <Info className="h-3.5 w-3.5 text-gray-400" />
                  </h4>
                  <div
                    className="prose prose-sm max-w-none text-sm text-gray-600 dark:prose-invert dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: unit.description }}
                  />
                </div>
              )}

              {(unit.features ?? []).length > 0 && (
                <div className="pt-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.form.amenities")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {unit.features!.map((feature) => (
                      <span key={feature.feature_id} className="rounded-md border border-gray-200 px-2.5 py-1 text-[11px] text-gray-700 dark:border-neutral-700 dark:text-gray-300">
                        {feature.feature_name ?? feature.name}
                        {feature.pivot?.value ? ` · ${feature.pivot.value}` : ""}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {unitPlan && (
              <div className={card}>
                <h3 className={sectionTitle}>{t("readyMarket.form.paymentPlan")}</h3>
                {unitPlan.name && <DetailRow label={t("readyMarket.form.paymentPlanName")} value={unitPlan.name} />}
                {unitPlan.payment_type && (
                  <DetailRow label={t("readyMarket.form.paymentMethod")} value={label("paymentTypes", unitPlan.payment_type)} />
                )}
                {num(unitPlan.total_cost) !== null && (
                  <DetailRow label={t("readyMarket.form.paymentPlanTotalCost")} value={money(unitPlan.total_cost)} />
                )}
                {num(unitPlan.intervals) !== null && (
                  <DetailRow label={t("readyMarket.form.installmentsCount")} value={fmt(unitPlan.intervals)} />
                )}
                {num(unitPlan.down_payment_price) !== null && (
                  <DetailRow label={t("readyMarket.form.downPayment")} value={money(unitPlan.down_payment_price)} />
                )}
                {unitPlan.description && (
                  <div className="pt-3">
                    <p className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {t("readyMarket.form.paymentPlanDescription")}
                    </p>
                    <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-300">{unitPlan.description}</p>
                  </div>
                )}
              </div>
            )}

            {plans.length > 0 && <PropertyPaymentPlans plans={plans} />}

            <div className={card}>
              <h3 className={sectionTitle}>{t("readyMarket.form.location")}</h3>
              <DetailRow label={t("readyMarket.details.address")} value={address} />
              <DetailRow
                label={t("readyMarket.details.coordinates")}
                value={hasCoords ? `${lat.toFixed(6)}, ${lng.toFixed(6)}` : null}
                ltr
              />
              {sides.map((side) => (
                <DetailRow key={side} label={t(`readyMarket.details.${side}`)} value={location?.[side]} />
              ))}
            </div>

            {licenses.length > 0 && (
              <div className={card}>
                <h3 className={sectionTitle}>{t("readyMarket.details.licenses")}</h3>
                {licenses.map((l) => (
                  <DetailRow key={l.key} label={t(`readyMarket.details.${l.key}`)} value={l.value} ltr />
                ))}
              </div>
            )}
          </div>

          {/* Side column */}
          <div className="space-y-4">
            <div className={cn(card, "space-y-3")}>
              <div>
                <p className="text-lg font-bold text-[#7c3aed]">
                  {price === null ? "-" : `${t("common.aed")} ${price.toLocaleString(locale)}`}
                </p>
                <p className="text-xs text-gray-500">{t("readyMarket.columns.price")}</p>
              </div>
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center justify-center gap-2 rounded-lg bg-[#007b78] text-xs font-medium text-white hover:bg-[#006664]"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  {t("readyMarket.details.whatsapp")}
                </a>
              )}
              {phone &&
                (showPhone ? (
                  <a
                    href={`tel:${phone}`}
                    dir="ltr"
                    className="flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPhone(true)}
                    className="flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200"
                  >
                    <Phone className="h-4 w-4" />
                    {t("readyMarket.details.phoneNumber")}
                  </button>
                ))}
              {hasCoords && (
                <iframe
                  title={t("readyMarket.form.location")}
                  src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full rounded-lg border-0"
                />
              )}
              {address && (
                <p className="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {address}
                </p>
              )}
              {location?.google_map_link && (
                <a
                  href={location.google_map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#007b78] hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t("readyMarket.details.openInMaps")}
                </a>
              )}
            </div>

            <div className={cn(card, "space-y-3")}>
              <div className="flex items-center gap-3">
                {owner?.profile_picture ? (
                  <Image
                    src={owner.profile_picture}
                    alt={ownerName}
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">
                    {ownerName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">{ownerName}</p>
                  <p className="text-xs text-gray-500">{t("readyMarket.columns.owner")}</p>
                </div>
              </div>
              <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-700 dark:border-neutral-800 dark:text-gray-300">
                {email && (
                  <p className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                    <span className="truncate" dir="ltr">{email}</span>
                  </p>
                )}
                {phone && (
                  <p className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                    <span dir="ltr">{phone}</span>
                  </p>
                )}
                {whatsapp && whatsapp !== phone && (
                  <p className="flex items-center gap-2">
                    <FaWhatsapp className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                    <span dir="ltr">{whatsapp}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
