"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToken } from "@/contexts/SessionProviderWrapper";
import { useExceptions } from "@/hooks/dashboardExpert/useExceptions";
import { GroupedEntry } from "@/types/expertDashboard/availability";
import { groupExceptions } from "./Format";
import ExceptionCard from "./ExceptionCard";
import ExceptionModal from "./ExceptionModal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Exceptions() {
  const { t } = useLanguage();
  const { expertId } = useToken();
  const { data, isLoading, isError } = useExceptions(expertId);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<GroupedEntry | undefined>();

  if (isLoading) return <div className="text-[14px] text-[#6B7280] mt-8 text-center">{t("experts.common.loading")}</div>;
  if (isError) return <div className="text-[14px] text-[#EF4444] mt-8 text-center">{t("experts.common.failedToLoad")}</div>;

  const exceptions = data?.data?.data ?? [];
  const grouped = groupExceptions(exceptions);

  const openAdd = () => {
    setEditingGroup(undefined);
    setModalOpen(true);
  };

  const openEdit = (group: GroupedEntry) => {
    setEditingGroup(group);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingGroup(undefined);
  };

  return (
    <div className="max-w-[723px] m-auto mt-4">
      <div className="flex justify-between py-5">
        <div>
          <h2 className="text-[20px] text-[#15042B] font-semibold">{t("experts.settings.timeOff.title")}</h2>
          <p className="text-[14px] text-[#4A5565]">{t("experts.settings.timeOff.description")}</p>
        </div>
        <Button
          onClick={openAdd}
          className="bg-[#008081] hover:bg-[#006667] rounded-[8px] py-2.5 px-4 text-white text-[14px] font-[500]"
        >
          {t("experts.settings.timeOff.add")}
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {grouped.length === 0 && (
          <div className="rounded-[10px] border border-dashed border-[#E5E7EB] bg-white py-10 flex flex-col items-center gap-2">
            <p className="text-[14px] text-[#9CA3AF]">{t("experts.settings.timeOff.noTimeOff")}</p>
            <button
              onClick={openAdd}
              className="flex items-center gap-1 text-[13px] font-[500] text-[#008081] hover:underline"
            >
              <Plus className="w-3.5 h-3.5" /> {t("experts.settings.timeOff.addFirst")}
            </button>
          </div>
        )}

        {grouped.map((group) => (
          <ExceptionCard
            key={group.key}
            group={group}
            expertId={expertId!}
            onEdit={() => openEdit(group)}
          />
        ))}
      </div>

      {expertId && (
        <ExceptionModal
          open={modalOpen}
          onClose={closeModal}
          expertId={expertId}
          editGroup={editingGroup}
        />
      )}
    </div>
  );
}