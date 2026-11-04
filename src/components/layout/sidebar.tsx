"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect, useMemo, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQueryClient, type QueryKey } from "@tanstack/react-query";
import {
  LayoutDashboard,
  Building2,
  Users,
  DollarSign,
  FolderKanban,
  Shield,
  MessageSquare,
  Calendar,
  Activity,
  MapPin,
  Layers,
  Briefcase,
  Bell,
  Star,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Banknote,
  GraduationCap,
  ClipboardList,
  Megaphone,
  Gift,
  Globe,
  Handshake,
  CalendarCheck,
  Store,
} from "lucide-react";

import { SidebarLogo } from "./sidebar/sidebar-logo";
import { SidebarMenuItem } from "./sidebar/sidebar-menu-item";
import { SidebarCollapsibleGroup } from "./sidebar/sidebar-collapsible-group";

type SidebarItem = {
  icon: React.ComponentType<{ className?: string }>;
  labelKey: string;
  href: string;
  badge?: string | number;
};

type TabGroup = {
  id: string;
  labelKey: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: SidebarItem[];
};

const developerMenuItems: SidebarItem[] = [
  { icon: LayoutDashboard, labelKey: "sidebar.home", href: "/developer/home" },
  { icon: Building2, labelKey: "sidebar.myProperties", href: "/developer/properties" },
  { icon: FolderKanban, labelKey: "sidebar.myProjects", href: "/developer/projects" },
  { icon: Calendar, labelKey: "sidebar.myBookings", href: "/developer/reservations" },
  { icon: DollarSign, labelKey: "sidebar.transactions", href: "/developer/transactions" },
  { icon: ClipboardList, labelKey: "sidebar.marketPlace", href: "/developer/ready_market" },
];

const mainItems: SidebarItem[] = [
  { icon: LayoutDashboard, labelKey: "sidebar.dashboard", href: "/admin/home" },
];

const expertMenuItems: SidebarItem[] = [
  { icon: Home, labelKey: "sidebar.home", href: "/expert/home" },
  { icon: Calendar, labelKey: "sidebar.booking", href: "/expert/bookings" },
  { icon: FileText, labelKey: "sidebar.history", href: "/expert/history" },
  { icon: DollarSign, labelKey: "sidebar.transactions", href: "/expert/transactions" },
];

const tabGroups: TabGroup[] = [
  {
    id: "catalog",
    labelKey: "sidebar.catalogGroup",
    items: [
      { icon: Building2, labelKey: "sidebar.properties", href: "/admin/properties" },
      { icon: FolderKanban, labelKey: "sidebar.projects", href: "/admin/projects" },
      { icon: Briefcase, labelKey: "sidebar.developers", href: "/admin/developers" },
      { icon: GraduationCap, labelKey: "sidebar.experts", href: "/admin/experts" },
    ],
  },
  {
    id: "marketing",
    labelKey: "sidebar.marketingGroup",
    items: [
      { icon: Bell, labelKey: "sidebar.createNotifications", href: "/admin/marketing/notifications" },
      { icon: MessageCircle, labelKey: "sidebar.whatsappSms", href: "/admin/marketing/whatsapp-sms" },
      { icon: Mail, labelKey: "sidebar.email", href: "/admin/marketing/email" },
      { icon: Gift, labelKey: "sidebar.offers", href: "/admin/offers" },
      { icon: MessageSquare, labelKey: "sidebar.chat", href: "/admin/chat" },
      { icon: Megaphone, labelKey: "sidebar.ads", href: "/admin/ads" },
    ],
  },
  {
    id: "sales",
    labelKey: "sidebar.salesGroup",
    icon: Handshake,
    items: [
      { icon: CalendarCheck, labelKey: "sidebar.reservations", href: "/admin/reservations" },
    ],
  },
  {
    id: "users",
    labelKey: "sidebar.usersGroup",
    items: [
      { icon: Users, labelKey: "sidebar.users", href: "/admin/users" },
      { icon: Shield, labelKey: "sidebar.roles", href: "/admin/roles" },
    ],
  },
  {
    id: "settings",
    labelKey: "sidebar.settingsGroup",
    items: [
      { icon: Star, labelKey: "sidebar.features", href: "/admin/features" },
      { icon: Layers, labelKey: "sidebar.areas", href: "/admin/areas" },
      { icon: MapPin, labelKey: "sidebar.locations", href: "/admin/locations" },
      { icon: MapPin, labelKey: "sidebar.cities", href: "/admin/cities" },
    ],
  },
  {
    id: "custom_support",
    labelKey: "sidebar.customSupport",
    items: [
      { icon: Globe, labelKey: "sidebar.erpnext", href: "/admin/erpnext" },
      { icon: Banknote, labelKey: "sidebar.subscriptions", href: "/admin/subscriptions" },
      { icon: Activity, labelKey: "sidebar.activity", href: "/admin/activity" },
      { icon: Store, labelKey: "sidebar.readyMarket", href: "/admin/ready-market" },
    ],
  },
];

const developerTabGroups: TabGroup[] = [
  {
    id: "marketing",
    labelKey: "sidebar.marketingGroup",
    items: [
      { icon: Megaphone, labelKey: "sidebar.ads", href: "/developer/ads" },
      { icon: Gift, labelKey: "sidebar.offers", href: "/developer/offers" },
      { icon: Bell, labelKey: "sidebar.createNotifications", href: "/developer/marketing/notifications" },
      { icon: MessageCircle, labelKey: "sidebar.whatsappSms", href: "/developer/marketing/whatsapp-sms" },
      { icon: Mail, labelKey: "sidebar.email", href: "/developer/marketing/email" },
      { icon: MessageSquare, labelKey: "sidebar.chat", href: "/developer/chat" },
    ],
  },
  {
    id: "custom_support",
    labelKey: "sidebar.customSupport",
    items: [
      { icon: Store, labelKey: "sidebar.readyMarket", href: "/developer/ready-market" },
    ],
  },
];

const bottomItems: SidebarItem[] = [];

const developerBottomItems: SidebarItem[] = [];

type CachedEntries = [QueryKey, unknown][];

/** Subscribes to the query cache and derives a primitive from entries under `prefix` without fetching. */
function useCachedValue(prefix: QueryKey, derive: (entries: CachedEntries) => number | undefined) {
  const queryClient = useQueryClient();
  const cache = queryClient.getQueryCache();
  return useSyncExternalStore(
    (onChange) => cache.subscribe(onChange),
    () => derive(queryClient.getQueriesData({ queryKey: prefix })),
    () => undefined,
  );
}

function getChatBadgeCount(entries: CachedEntries, isAdmin: boolean): number | undefined {
  // Unfiltered conversation lists only: ["supportConversations", token, search, isAdmin, ...]
  const entry = entries.find(([key, data]) => data && key[2] === "" && key[3] === isAdmin);
  const data = entry?.[1] as any;
  if (!data) return undefined;
  const conversations: any[] = Array.isArray(data.data)
    ? data.data
    : Array.isArray(data.pages)
      ? data.pages.flatMap((p: any) => p?.data || [])
      : [];
  if (conversations.length === 0) return undefined;
  const unread = conversations.reduce((sum: number, c: any) => {
    const u = Number(c.unread_for_admin ?? c.unread_for_user ?? c.unread_count ?? (c.unread ? 1 : 0));
    return sum + (u > 0 ? u : 0);
  }, 0);
  return unread > 0 ? unread : conversations.length;
}

function getReservationsBadgeCount(entries: CachedEntries): number | undefined {
  for (const [, data] of entries) {
    const total = Number((data as any)?.total ?? (data as any)?.data?.total);
    if (total > 0) return total;
  }
  return undefined;
}


export function Sidebar({
  isOpen,
  setIsOpen,
  isCollapsed,
  setIsCollapsed,
}: {
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
  isCollapsed?: boolean;
  setIsCollapsed?: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { t, language } = useLanguage();
  const [expandedTabs, setExpandedTabs] = useState<Record<string, boolean>>({
    catalog: true,
    sales: true,
    users: true,
    marketing: true,
    settings: true,
    custom_support: true,
  });

  const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();

  const isDeveloperRole = userType === "developer";
  const isExpertRole = userType === "expert";
  const isAdminRole = userType === "admin" || (!isDeveloperRole && !isExpertRole);

  // Badges are read from data the Chat / Reservations pages have already cached;
  // the sidebar itself never requests page data.
  const chatBadgeCount = useCachedValue(["supportConversations"], (entries) =>
    getChatBadgeCount(entries, isAdminRole),
  );
  const reservationsBadgeCount = useCachedValue(["bookings"], getReservationsBadgeCount);

  const dynamicTabGroups = useMemo(() => {
    return tabGroups.map((group) => ({
      ...group,
      items: group.items.map((item) => {
        if (item.href === "/admin/chat") {
          return { ...item, badge: chatBadgeCount };
        }
        if (item.href === "/admin/reservations") {
          return { ...item, badge: reservationsBadgeCount };
        }
        return item;
      }),
    }));
  }, [chatBadgeCount, reservationsBadgeCount]);

  const dynamicDeveloperMenuItems = useMemo(() => {
    return developerMenuItems.map((item) => {
      if (item.href === "/developer/reservations") {
        return { ...item, badge: reservationsBadgeCount };
      }
      return item;
    });
  }, [reservationsBadgeCount]);

  const dynamicDeveloperTabGroups = useMemo(() => {
    return developerTabGroups.map((group) => ({
      ...group,
      items: group.items.map((item) => {
        if (item.href === "/developer/chat" || item.href === "/admin/chat") {
          return { ...item, badge: chatBadgeCount };
        }
        return item;
      }),
    }));
  }, [chatBadgeCount]);

  const toggleTab = (tabId: string) => {
    setExpandedTabs((prev) => ({
      ...prev,
      [tabId]: !prev[tabId],
    }));
  };

  useEffect(() => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }, [pathname, setIsOpen]);

  const isRTL = language === "ar";

  const collapsed = isCollapsed ?? false;

  return (
    <>
      {isOpen && setIsOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed start-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out",
          "border-e border-gray-200 dark:border-slate-700",
          "bg-white dark:bg-slate-900",
          collapsed ? "w-[72px]" : "w-64",
          isOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full lg:translate-x-0"
              : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          <SidebarLogo
            isCollapsed={collapsed}
            onToggleCollapse={() => setIsCollapsed && setIsCollapsed(!collapsed)}
            isRTL={isRTL}
          />

          <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-0.5 scrollbar-thin">
            {isDeveloperRole && (
              <>
                <ul className="space-y-0.5">
                  {dynamicDeveloperMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href} item={item} pathname={pathname} t={t} isCollapsed={collapsed} />
                  ))}
                </ul>

                <div className={cn("space-y-0.5", !collapsed && "mt-4")}>
                  {dynamicDeveloperTabGroups.map((group) => (
                    <SidebarCollapsibleGroup
                      key={group.id}
                      group={group}
                      pathname={pathname}
                      isExpanded={expandedTabs[group.id]}
                      onToggle={() => toggleTab(group.id)}
                      isRTL={isRTL}
                      t={t}
                      isCollapsed={collapsed}
                    />
                  ))}
                </div>

                {!collapsed && (
                  <div className="mt-6 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 p-4 text-white mx-1">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold">{t("sidebar.currentPlan")}</p>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                        {t("sidebar.free")}
                      </span>
                    </div>
                    <div className="mb-2">
                      <p className="text-xs text-teal-100 mb-1">{t("sidebar.credits")}</p>
                      <p className="text-lg font-bold">100 / 800</p>
                    </div>
                    <div className="mb-4">
                      <div className="h-1.5 w-full rounded-full bg-white/20">
                        <div
                          className="h-1.5 rounded-full bg-white"
                          style={{ width: "12.5%" }}
                        />
                      </div>
                    </div>
                    <button className="w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50">
                      {t("sidebar.upgrade")}
                    </button>
                  </div>
                )}

                {developerBottomItems.length > 0 && (
                  <ul className={cn("space-y-0.5", !collapsed && "mt-3 pt-3 border-t border-gray-200 dark:border-neutral-800")}>
                    {developerBottomItems.map((item) => (
                      <SidebarMenuItem key={item.href} item={item} pathname={pathname} t={t} isCollapsed={collapsed} />
                    ))}
                  </ul>
                )}
              </>
            )}

            {isAdminRole && (
              <>
                <ul className="space-y-0.5">
                  {mainItems.map((item) => (
                    <SidebarMenuItem key={item.href} item={item} pathname={pathname} t={t} isCollapsed={collapsed} />
                  ))}
                </ul>

                <div className={cn("space-y-0.5", !collapsed && "mt-2")}>
                  {dynamicTabGroups.map((group) => (
                    <SidebarCollapsibleGroup
                      key={group.id}
                      group={group}
                      pathname={pathname}
                      isExpanded={expandedTabs[group.id]}
                      onToggle={() => toggleTab(group.id)}
                      isRTL={isRTL}
                      t={t}
                      isCollapsed={collapsed}
                    />
                  ))}
                </div>

                {bottomItems.length > 0 && (
                  <ul className={cn("space-y-0.5", !collapsed && "mt-3 pt-3 border-t border-gray-200 dark:border-neutral-800")}>
                    {bottomItems.map((item) => (
                      <SidebarMenuItem key={item.href} item={item} pathname={pathname} t={t} isCollapsed={collapsed} />
                    ))}
                  </ul>
                )}
              </>
            )}

            {isExpertRole && (
              <ul className="space-y-0.5">
                {expertMenuItems.map((item) => (
                  <SidebarMenuItem key={item.href} item={item} pathname={pathname} t={t} isCollapsed={collapsed} />
                ))}
              </ul>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}