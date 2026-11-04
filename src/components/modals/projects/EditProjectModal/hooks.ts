import { useEffect, useCallback, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AdminProjectsService } from "@/features/projects/services/AdminProjectsService";
import useDashboardAdminProjectsCreateData from "@/hooks/use-dashboardAdminProjectsCreateData";
import { useForm } from "@/hooks/use-form";
import { toast } from "sonner";
import { EditProjectFormValues } from "./types";

export function useEditProjectLogic(projectId: number | undefined, token: string | undefined, isOpen: boolean, onClose: () => void, t: any) {
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<EditProjectFormValues>({
    defaultValues: {
      project_name: "",
      status: "",
      project_type: "",
      total_units: "",
      available_units: "",
      launch_date: "",
      completion_date: "",
      currency: "AED",
      project_size: "",
      description: "",
      developer_id: "",
      slug: "",
      meta_title: "",
      meta_description: "",
    },
  });

  const { data: projectData, isLoading: projectLoading } = useQuery({
    queryKey: ["project-detail-edit", projectId],
    queryFn: () => AdminProjectsService.getProject(projectId!),
    enabled: !!token && projectId != null && isOpen,
  });

  const { developersData } = useDashboardAdminProjectsCreateData();
  const developersList = Array.isArray(developersData?.data)
    ? developersData.data
    : Array.isArray((developersData?.data as any)?.data)
      ? (developersData.data as any).data
      : Array.isArray((developersData?.data as any)?.developers)
        ? (developersData.data as any).developers
        : [];

  useEffect(() => {
    if (!projectData) return;
    const raw = (projectData as { data?: unknown }).data ?? projectData;
    const p = raw as Record<string, unknown>;

    let mappedProjectType = (p.project_type as string) ?? "";
    const lowerType = mappedProjectType.toLowerCase();
    if (lowerType === "mixed use" || lowerType === "mixed-use") mappedProjectType = "mixed-use";
    else if (lowerType === "residential") mappedProjectType = "residential";
    else if (lowerType === "commercial") mappedProjectType = "commercial";

    let mappedStatus = ((p.status as string) || "").toLowerCase();
    if (mappedStatus === "under construction" || mappedStatus === "ongoing") mappedStatus = "ongoing";
    else if (mappedStatus === "upcoming" || mappedStatus === "planned") mappedStatus = "upcoming";
    else if (mappedStatus === "completed") mappedStatus = "completed";
    else mappedStatus = "ongoing";

    let mappedCurrency = ((p.currency as string) || "AED").toUpperCase();
    if (!["AED", "SAR", "USD", "EGP"].includes(mappedCurrency)) mappedCurrency = "AED";

    const devId = String((p.developer as any)?.developer_id || p.developer_id || (p.developer as any)?.id || "");

    reset({
      project_name: (p.project_name as string) ?? "",
      status: mappedStatus,
      project_type: mappedProjectType,
      total_units: p.total_units != null ? String(p.total_units) : "",
      available_units: p.available_units != null ? String(p.available_units) : "",
      launch_date: (p.launch_date as string) ?? "",
      completion_date: (p.completion_date as string) ?? "",
      currency: mappedCurrency,
      project_size: (p.project_size as string) ?? "",
      description: p.description ? String(p.description).replace(/<[^>]*>?/gm, '') : "",
      developer_id: devId,
      slug: (p.slug as string) ?? "",
      meta_title: (p.meta_title as string) ?? "",
      meta_description: (p.meta_description as string) ?? "",
    });
  }, [projectData, reset]);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  const onSubmit = async (formValues: EditProjectFormValues) => {
    if (!projectId) return;
    setIsSubmitting(true);
    try {
      const raw = (projectData as { data?: any }).data ?? projectData;
      const cityId = String(raw?.location?.city?.city_name || raw?.location?.city?.name || (raw?.location as any)?.city_id || "");
      const areaId = String(raw?.location?.area?.area_name || raw?.location?.area?.dld_area_name || raw?.location?.area?.name || (raw?.location as any)?.area_id || "");

      const payload: Record<string, unknown> = {
        project_name: formValues.project_name,
        status: formValues.status,
        project_type: formValues.project_type,
        developer_id: String(formValues.developer_id),
        currency: formValues.currency || "AED",
        price_range: String(raw?.price_range || "0-0"),
        price_range_SQ: String(raw?.price_range_SQ || "0-0"),
        is_active: String(raw?.is_active ?? "1"),
        location: {
          latitude: raw?.location?.latitude ?? 0,
          longitude: raw?.location?.longitude ?? 0,
          landmark: raw?.location?.landmark || "",
          city_id: cityId,
          area_id: areaId,
          north_side: raw?.location?.north_side || "",
          south_side: raw?.location?.south_side || "",
          east_side: raw?.location?.east_side || "",
          west_side: raw?.location?.west_side || "",
          google_map_link: raw?.location?.google_map_link || "",
        }
      };

      if (formValues.total_units) payload.total_units = String(formValues.total_units);
      if (formValues.available_units) payload.available_units = String(formValues.available_units);
      if (formValues.launch_date) payload.launch_date = formValues.launch_date;
      if (formValues.completion_date) payload.completion_date = formValues.completion_date;
      if (formValues.project_size) payload.project_size = String(formValues.project_size);
      if (formValues.description) payload.description = formValues.description;
      if (formValues.slug) payload.slug = formValues.slug;
      if (formValues.meta_title) payload.meta_title = formValues.meta_title;
      if (formValues.meta_description) payload.meta_description = formValues.meta_description;

      await AdminProjectsService.updateProject(projectId, payload);
      toast.success(t("projects.messages.updateSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project-detail-edit", projectId] });
      handleClose();
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } }; message?: string };
      toast.error(err.response?.data?.message ?? err.message ?? t("projects.messages.updateFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    errors,
    projectLoading,
    developersList,
    isSubmitting,
    handleClose,
    onSubmit,
    projectData
  };
}
