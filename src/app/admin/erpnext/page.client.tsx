"use client";

import { useERPNext } from "@/features/erpnext/hooks/useERPNext";
import { ERPNextHeader } from "@/features/erpnext/components/ERPNextHeader";
import { ERPNextConfigCard } from "@/features/erpnext/components/ERPNextConfigCard";
import { ERPNextFrame } from "@/features/erpnext/components/ERPNextFrame";

export default function ERPNextClient() {
  const {
    inputUrl,
    setInputUrl,
    activeUrl,
    isSaving,
    saveConfig,
    openExternal,
  } = useERPNext();

  return (
    <div className="p-6 space-y-5 max-w-full overflow-hidden">
      <ERPNextHeader onOpenExternal={openExternal} />

      <ERPNextConfigCard
        url={inputUrl}
        onUrlChange={setInputUrl}
        onSave={saveConfig}
        isSaving={isSaving}
      />

      <ERPNextFrame url={activeUrl} />
    </div>
  );
}