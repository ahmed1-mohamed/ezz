"use client";

import { useQuery } from "@tanstack/react-query";
import { Modal } from "@/components/ui/modal";
import {
  Loader2,
  Tag,
  Calendar,
  MousePointerClick,
  Eye,
  Building2,
  ToggleRight,
  Hash,
  Percent,
  Clock,
} from "lucide-react";
import { AdminOffersService } from "@/data/api-client";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface ViewOfferModalProps {
  open: boolean;
  onClose: () => void;
  offerId: number | string | null;
}


function isPresent(value: unknown): boolean {
  return value !== null && value !== undefined && value !== "";
}

function formatDate(dateStr: string | undefined | null): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
}

function formatDiscountType(type: string): string {
  return type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}


function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon?: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-1">
        {Icon && <Icon className="h-3 w-3" />}
        {label}
      </p>
      <div className="text-sm font-medium text-gray-900">{children}</div>
    </div>
  );
}


function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b pb-1">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-x-6 gap-y-4">{children}</div>
    </div>
  );
}

export default function ViewOfferModal({
  open,
  onClose,
  offerId,
}: ViewOfferModalProps) {
  const { t } = useLanguage();
  const { data: response, isLoading, isError } = useQuery({
    queryKey: ["offerDetails", offerId],
    queryFn: () => AdminOffersService.getOffer(offerId!.toString()),
    enabled: open && !!offerId,
  });

  const raw = (response as any)?.data;
  const offer = raw?.data ?? raw ?? null;
  const project = offer?.project ?? null;

  return (
    <Modal isOpen={open} onClose={onClose} title={t("offers.columns.offerDetails")} size="xl">
      <div className="space-y-5 max-h-[78vh] overflow-y-auto px-1 pb-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <Loader2 className="h-8 w-8 animate-spin text-teal-600 mb-3" />
            <p className="text-sm">{t("offers.view.loading")}</p>
          </div>
        ) : isError ? (
          <div className="py-10 text-center text-red-500 text-sm">
            {t("offers.view.loadFailed")}
          </div>
        ) : !offer ? (
          <div className="py-10 text-center text-gray-400 text-sm">
            {t("offers.view.noDetails")}
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-3 border-b pb-4">
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-gray-900 leading-tight">
                  {offer.name || offer.offer_details || t("offers.unnamedOffer")}
                </h2>
                {isPresent(offer.description) && (
                  <p className="text-sm text-gray-500 mt-1">{offer.description}</p>
                )}
              </div>
              <Badge
                className={
                  offer.is_active
                    ? "bg-green-100 text-green-800 shrink-0"
                    : "bg-gray-100 text-gray-600 shrink-0"
                }
              >
                {offer.is_active ? t("offers.filters.active") : t("offers.filters.inactive")}
              </Badge>
            </div>

            <Section title={t("offers.view.offerInformation")}>
              {isPresent(offer.entity_type) && (
                <DetailRow icon={Building2} label={t("offers.view.entityType")}>
                  <span className="capitalize">{offer.entity_type?.toLowerCase()}</span>
                </DetailRow>
              )}

              {isPresent(offer.discount_type) && (
                <DetailRow icon={Tag} label={t("offers.form.discountType")}>
                  {formatDiscountType(offer.discount_type)}
                </DetailRow>
              )}

              {isPresent(offer.discount_pct) && (
                <DetailRow icon={Percent} label={t("offers.columns.discount")}>
                  {offer.discount_pct}%
                </DetailRow>
              )}

              {isPresent(offer.is_active) && (
                <DetailRow icon={ToggleRight} label={t("offers.columns.status")}>
                  <Badge
                    className={
                      offer.is_active
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }
                  >
                    {offer.is_active ? t("offers.filters.active") : t("offers.filters.inactive")}
                  </Badge>
                </DetailRow>
              )}

              {isPresent(offer.starts_at) && (
                <DetailRow icon={Calendar} label={t("offers.view.startsAt")}>
                  {formatDate(offer.starts_at)}
                </DetailRow>
              )}

              {isPresent(offer.ends_at) && (
                <DetailRow icon={Calendar} label={t("offers.view.endsAt")}>
                  {formatDate(offer.ends_at)}
                </DetailRow>
              )}

              {isPresent(offer.clicks) && (
                <DetailRow icon={MousePointerClick} label={t("offers.columns.clicks")}>
                  {(offer.clicks as number).toLocaleString()}
                </DetailRow>
              )}

              {isPresent(offer.views) && (
                <DetailRow icon={Eye} label={t("offers.columns.views")}>
                  {(offer.views as number).toLocaleString()}
                </DetailRow>
              )}

              {isPresent(offer.created_at) && (
                <DetailRow icon={Clock} label={t("offers.view.createdAt")}>
                  {formatDate(offer.created_at)}
                </DetailRow>
              )}

              {isPresent(offer.updated_at) && (
                <DetailRow icon={Clock} label={t("offers.view.updatedAt")}>
                  {formatDate(offer.updated_at)}
                </DetailRow>
              )}
            </Section>

            {project && (
              <Section title={t("offers.view.linkedProject")}>
                {isPresent(project.project_name) && (
                  <DetailRow icon={Building2} label={t("offers.view.projectName")}>
                    {project.project_name}
                  </DetailRow>
                )}

                {isPresent(project.project_type) && (
                  <DetailRow label={t("offers.columns.type")}>
                    <span className="capitalize">{project.project_type}</span>
                  </DetailRow>
                )}

                {isPresent(project.status) && (
                  <DetailRow label={t("offers.columns.status")}>
                    <span className="capitalize">{project.status}</span>
                  </DetailRow>
                )}

                {isPresent(project.total_units) && (
                  <DetailRow icon={Hash} label={t("offers.view.totalUnits")}>
                    {project.total_units}
                  </DetailRow>
                )}

                {isPresent(project.available_units) && (
                  <DetailRow label={t("offers.view.availableUnits")}>
                    {project.available_units}
                  </DetailRow>
                )}

                {isPresent(project.price_range) && (
                  <DetailRow label={t("offers.view.priceRange")}>
                    {project.currency ?? "AED"} {project.price_range}
                  </DetailRow>
                )}

                {isPresent(project.project_size) && (
                  <DetailRow label={t("offers.view.projectSize")}>
                    {project.project_size}
                  </DetailRow>
                )}

                {isPresent(project.completion_date) && (
                  <DetailRow icon={Calendar} label={t("offers.view.completionDate")}>
                    {formatDate(project.completion_date)}
                  </DetailRow>
                )}

                {isPresent(project.launch_date) && (
                  <DetailRow icon={Calendar} label={t("offers.view.launchDate")}>
                    {formatDate(project.launch_date)}
                  </DetailRow>
                )}

                {isPresent(project.permit_no) && (
                  <DetailRow label={t("offers.view.permitNo")}>
                    {project.permit_no}
                  </DetailRow>
                )}
              </Section>
            )}
          </>
        )}
      </div>
    </Modal>
  );
}