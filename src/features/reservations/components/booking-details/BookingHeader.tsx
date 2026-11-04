import { ChevronLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingHeaderProps {
  reservationId: string | number;
}

export function BookingHeader({ reservationId }: BookingHeaderProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push(`${routePrefix}/reservations`)}
          aria-label={t("common.back")}
        >
          <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">{t("reservations.details.bookingDetails")}</h1>
      </div>
      <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2 w-full sm:w-auto">
        <Printer className="h-4 w-4" />
        {t("reservations.details.printInvoice")}
      </Button>
    </div>
  );
}
