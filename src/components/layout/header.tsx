"use client";

import { useSession, signOut } from "next-auth/react";
import {
  Menu,
  Search,
  Plus,
  MessageSquare,
  Globe,
  Bell,
  ChevronDown,
  User,
  Moon,
  Sun,
  LogOut,
  Building,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/theme_context";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { NOTIFICATIONS_LIST_QUERY_KEY, fetchNotificationsQuietly } from "@/components/layout/NotificationsWatcher";
import { NotificationSoundSettings } from "@/components/layout/NotificationSoundSettings";
import { extractListFromApiResponse, mapApiNotifications } from "@/app/admin/notifications/utils";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { data: session } = useSession();
  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const router = useRouter()

  const user = session?.user;
  const rawRole = (user?.user_type || user?.role_name || "").toLowerCase();
  const roleName = rawRole.includes("developer") ? "developer" : rawRole.includes("expert") ? "expert" : "admin";
  const notificationsToken = user?.accessToken as string | undefined;
  const { data: notificationsData } = useQuery({
    queryKey: NOTIFICATIONS_LIST_QUERY_KEY,
    queryFn: () => fetchNotificationsQuietly(notificationsToken!),
    enabled: false,
  });
  const unreadNotifications = notificationsData
    ? mapApiNotifications(extractListFromApiResponse(notificationsData), false, `/${roleName}`).filter((n) => !n.isRead).length
    : 0;
  const userName = user?.name || t("header.defaultUserName");
  const userType = user?.user_type || t("header.defaultUserName");
  const userEmail = user?.email || "";
  const userInitial = userName.charAt(0).toUpperCase();
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="sticky top-0 z-30 flex h-14 sm:h-16 items-center justify-between gap-1 sm:gap-4 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 sm:px-6">
      <div className="flex items-center gap-1 sm:gap-4 flex-1 min-w-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 text-gray-600 lg:hidden shrink-0 p-0"
          onClick={onMenuClick}
          aria-label={t("header.toggleMenu")}
        >
          <Menu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          <span className="sr-only">{t("header.toggleMenu")}</span>
        </Button>

        <div className="relative hidden md:block w-full max-w-xs">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder={t("header.search")}
            aria-label={t("header.search")}
            className="ps-10 bg-gray-50 border-gray-200 h-9 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white h-8 sm:h-9 px-2 sm:px-4 gap-1 text-xs sm:text-sm shrink-0"
              aria-label={t("header.create")}
            >
              <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{t("header.create")}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <Link href={`/${roleName}/projects/create`} prefetch={false}>
              <DropdownMenuItem className="cursor-pointer gap-2">
                <Building className="h-4 w-4 text-gray-500" />
                {t("header.createProject")}
              </DropdownMenuItem>
            </Link>
            <Link href={`/${roleName}/properties/create`} prefetch={false}>
              <DropdownMenuItem className="cursor-pointer gap-2">
                <HomeIcon className="h-4 w-4 text-gray-500" />
                {t("header.createProperty")}
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href={`/${roleName}/chat`} prefetch={false}>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0"
            aria-label={t("header.messages")}
          >
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">{t("header.messages")}</span>
          </Button>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0"
          onClick={toggleLanguage}
          aria-label={t("header.language")}
        >
          <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">{t("header.language")}</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0"
          onClick={toggleTheme}
          aria-label={t("header.toggleTheme")}
          title={theme === "light" ? t("header.themeToggleDark") : t("header.themeToggleLight")}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
          <span className="sr-only">{t("header.toggleTheme")}</span>
        </Button>

        <NotificationSoundSettings />

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0 relative"
          aria-label={t("header.notifications")}
          asChild
        >
          <Link href={`/${roleName}/notifications`} prefetch={false}>
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            {unreadNotifications > 0 && (
              <span className="absolute top-0.5 end-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white dark:ring-neutral-900">
                {unreadNotifications > 9 ? "9+" : unreadNotifications}
              </span>
            )}
            <span className="sr-only">{t("header.notifications")}</span>
          </Link>
        </Button>


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label={userName}
              className="flex items-center gap-1 sm:gap-2 hover:bg-gray-50 rounded-lg px-1 sm:px-2 py-1 transition-colors outline-none shrink-0"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {userInitial}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[55px] min-[400px]:max-w-[85px] sm:max-w-[150px] inline-block">
                  {userName}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[55px] min-[400px]:max-w-[85px] sm:max-w-[150px] inline-block">
                  ({userType})
                </span> 
              </div>
              <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-600 shrink-0" />
            </button>


          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[260px] sm:w-[280px] p-0">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">
                  {userInitials}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 text-sm">
                  {userName}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {userEmail}
                </div>
              </div>
            </div>

            <div className="py-2">
              <DropdownMenuItem className="px-4 py-2.5 cursor-pointer" onClick={() => router.push(`/${roleName}/settings`)}>
                <User className="h-4 w-4 me-3 text-gray-600" />
                <span className="text-sm text-gray-900">{t("header.accountSettings")}</span>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="my-0" />

            <div className="py-2">
              <DropdownMenuItem
                onClick={async () => {
                  document.cookie =
                    "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00";
                  document.cookie =
                    "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00";

                  await signOut({ callbackUrl: "/auth/signin" });
                }}
                className="px-4 py-2.5 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
              >
                <LogOut className="h-4 w-4 me-3" />
                <span className="text-sm font-medium">{t("header.signOut")}</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}