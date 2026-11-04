import React from "react";
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { useLanguage } from "@/contexts/LanguageContext";
import { CampaignsType } from "./types";

interface CampaignsTableHeaderProps {
  type: CampaignsType;
  isRTL: boolean;
}

export const CampaignsTableHeader = React.memo(function CampaignsTableHeader({
  type,
  isRTL,
}: CampaignsTableHeaderProps) {
  const { t } = useLanguage();

  const headerCells = (() => {
    const nameLabel =
      type === "email"
        ? t("marketingEmail.columns.campaignName")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.campaignName")
          : t("marketingNotifications.columns.campaignName");

    const typeLabel =
      type === "notification"
        ? t("marketingNotifications.columns.platform")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.channel")
          : "";

    const audienceLabel =
      type === "email"
        ? t("marketingEmail.columns.audience")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.audience")
          : t("marketingNotifications.columns.audience");

    const sentLabel =
      type === "email"
        ? t("marketingEmail.columns.sent")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.sent")
          : t("marketingNotifications.columns.sent");

    const receivedLabel =
      type === "email"
        ? t("marketingEmail.columns.received")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.received")
          : t("marketingNotifications.columns.received");

    const openedLabel =
      type === "email"
        ? t("marketingEmail.columns.opened")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.read")
          : t("marketingNotifications.columns.opened");

    const failedLabel =
      type === "email"
        ? t("marketingEmail.columns.failed")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.failed")
          : t("marketingNotifications.columns.failed");

    const dateLabel =
      type === "email"
        ? t("marketingEmail.columns.date")
        : type === "sms"
          ? t("marketingWhatsappSms.columns.date")
          : t("marketingNotifications.columns.date");

    return { nameLabel, typeLabel, audienceLabel, sentLabel, receivedLabel, openedLabel, failedLabel, dateLabel };
  })();

  return (
    <TableHeader>
      <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 py-3 text-[11px] tracking-wider min-w-[200px] text-start">
          {headerCells.nameLabel}
        </TableHead>
        {type !== "email" && (
          <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[110px]">
            {headerCells.typeLabel}
          </TableHead>
        )}
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[130px]">
          {headerCells.audienceLabel}
        </TableHead>
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
          {headerCells.sentLabel}
        </TableHead>
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
          {headerCells.receivedLabel}
        </TableHead>
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
          {headerCells.openedLabel}
        </TableHead>
        <TableHead className="font-semibold text-red-500 dark:text-red-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
          {headerCells.failedLabel}
        </TableHead>
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[120px] min-w-[110px] whitespace-nowrap">
          {headerCells.dateLabel}
        </TableHead>
        <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[120px] min-w-[120px] whitespace-nowrap">
          {isRTL ? "العمليات" : "Actions"}
        </TableHead>
      </TableRow>
    </TableHeader>
  );
});
