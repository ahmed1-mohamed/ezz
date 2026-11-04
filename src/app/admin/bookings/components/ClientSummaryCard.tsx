import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface UserInfo {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

interface ClientSummaryCardProps {
  user?: UserInfo;
}

export function ClientSummaryCard({ user }: ClientSummaryCardProps) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
        <User className="h-4 w-4" /> {t("reservations.details.client")}
      </h2>
      <p className="text-base font-medium text-gray-900">
        {user?.first_name} {user?.last_name}
      </p>
      <p className="text-sm text-gray-500">{user?.email}</p>
      <p className="text-sm text-gray-500">{user?.phone}</p>
    </div>
  );
}
