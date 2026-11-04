"use client";

import { SafeImage } from "@/components/ui/safe-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, Clock, DollarSignIcon, MessageCircle } from "lucide-react";
import { Booking } from "@/types/expertDashboard/bookings";
import { formatDate, formatPrice, formatTime, getInitials } from "@/utlis/format";
import { STATUS_COLORS } from "@/constants/StatusBooking";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingCardProps {
  session: Booking;
  actions?: React.ReactNode;
  className?: string;
}

export function BookingCard({ session, actions, className }: BookingCardProps) {
  const { t } = useLanguage();
  const customerName = `${session.customer.first_name} ${session.customer.last_name}`;

  return (
    <Card className={`overflow-hidden transition-shadow ${className}`}>
      <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-8">

        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-4 items-center">
            <Avatar className="h-16 w-16 border-2 rounded-lg border-primary/10 flex-shrink-0">
              {session.customer.profile_picture ? (
                <SafeImage
                  src={session.customer.profile_picture}
                  alt={customerName}
                  width={64}
                  height={64}
                  fallbackSrc="/images/default-avatar.svg"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <AvatarFallback className="bg-primary/5 text-primary text-lg rounded-lg">
                  {getInitials(customerName)}
                </AvatarFallback>
              )}
            </Avatar>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="font-semibold text-base sm:text-lg truncate">
                  {customerName}
                </h3>
                <Badge
                  variant="secondary"
                  className={`w-fit ${STATUS_COLORS[session.status] ?? "bg-gray-100"}`}
                >
                  {t(`experts.common.status.${session.status}`)}
                </Badge>
              </div>
              <p className="text-[14px] text-[#4A5565] truncate">
                {t("experts.booking.sessionWith", { name: session.expert.display_name })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              {formatDate(session.start_time)}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {formatTime(session.start_time)} ({session.minutes} {t("experts.common.minutes")})
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              {session.meeting_provider}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSignIcon className="h-4 w-4" />
              {formatPrice(session.price_cents, session.currency)}
            </div>
          </div>

          {session.notes_customer && (
            <div>
              <span className="font-medium text-sm">{t("experts.booking.notes")} </span>
              <p className="text-sm text-muted-foreground">
                {session.notes_customer}
              </p>
            </div>
          )}
        </div>

        {actions && (
          <>
            <Separator className="sm:hidden w-full bg-[#F3F4F6]" />
            <Separator
              orientation="vertical"
              className="hidden sm:block h-[110px] bg-[#F3F4F6]"
            />
            <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[160px]">
              {actions}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}