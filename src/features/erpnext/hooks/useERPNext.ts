import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ERPNextService } from "../services/erpnext.service";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useERPNext() {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const [inputUrl, setInputUrl] = useState("https://crm.advixs.com");
  const [activeUrl, setActiveUrl] = useState("https://crm.advixs.com");

  const { data, isLoading } = useQuery({
    queryKey: ["erpnextConfig"],
    queryFn: ERPNextService.getConfig,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data?.url) {
      setInputUrl(data.url);
      setActiveUrl(data.url);
    }
  }, [data?.url]);

  const saveMutation = useMutation({
    mutationFn: (url: string) => ERPNextService.saveConfig(url),
    onSuccess: (_, newUrl) => {
      setActiveUrl(newUrl);
      toast.success(t("erpnext.saveSuccess"));
      queryClient.invalidateQueries({ queryKey: ["erpnextConfig"] });
    },
    onError: (err) => {
      toast.error(getApiErrorMessage(err, t, t("erpnext.saveFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const handleOpenExternal = () => {
    if (activeUrl) {
      window.open(activeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return {
    inputUrl,
    setInputUrl,
    activeUrl,
    isLoading,
    isSaving: saveMutation.isPending,
    saveConfig: () => saveMutation.mutate(inputUrl.trim()),
    openExternal: handleOpenExternal,
  };
}
