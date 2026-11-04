"use client";

import { usePathname } from "next/navigation";

/** "/admin/ready-market" or "/developer/ready-market", depending on the current dashboard. */
export function useReadyMarketBasePath() {
  const pathname = usePathname();
  return `${pathname?.startsWith("/developer") ? "/developer" : "/admin"}/ready-market`;
}
