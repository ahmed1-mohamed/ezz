"use client";

import { usePathname } from "next/navigation";
import CreateAdForm from "./CreateAdForm";

export default function CreateAdPage() {
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";

  return <CreateAdForm routePrefix={routePrefix} />;
}
