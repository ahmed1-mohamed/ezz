import { useState, useEffect, useCallback } from "react";
import { useForm } from "@/hooks/use-form";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { propertiesSchema, PropertiesInput } from "@/validators/propertiesSchema";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { usePropertyTypes, usePropertySubtypes, useProjectsForSelect } from "@/hooks/use-property-data";

interface UseEditPropertyFormProps {
  propertyId: number;
  isOpen: boolean;
  onClose: () => void;
  token: string | undefined;
  t: (key: string) => string;
}

export function useEditPropertyForm({
  propertyId,
  isOpen,
  onClose,
  token,
  t,
}: UseEditPropertyFormProps) {
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<PropertiesInput>({
    resolver: zodResolver(propertiesSchema),
    defaultValues: {
      property_name: "",
      property_no: "",
      floor: "",
      price: undefined,
      size: undefined,
      bedrooms: undefined,
      bathrooms: undefined,
      project_id: "",
      property_type_id: "",
      property_subtype_id: "",
      status: "active",
      availability_status: "available",
      construction_status: "",
      furnish_status: "",
      finishing_status: "",
      view: "",
      ownership_type: "",
      description: "",
      maid_room: false,
    },
  });

  const { reset, watch, handleSubmit } = methods;

  const selectedTypeId = watch("property_type_id");

  const { data: propertyTypes = [] } = usePropertyTypes();
  const { data: allSubtypes = [] } = usePropertySubtypes();
  const { data: projects = [] } = useProjectsForSelect();

  const propertySubtypes = selectedTypeId
    ? allSubtypes.filter((s: any) => String(s.property_type_id) === String(selectedTypeId))
    : allSubtypes;

  const { data: propertyData, isLoading: propertyLoading } = useQuery({
    queryKey: ["property-detail", propertyId],
    queryFn: () => AdminPropertiesService.getProperty(propertyId),
    enabled: !!token && propertyId != null && isOpen,
  });

  useEffect(() => {
    if (!propertyData) return;
    const raw = (propertyData as { data?: unknown }).data ?? propertyData;
    const p = raw as Record<string, unknown>;
    reset({
      property_name: (p.property_name as string) ?? "",
      property_no: (p.property_no as string) ?? (p.unit_number as string) ?? "",
      floor: (p.floor as string) ?? "",
      price: p.price != null && !isNaN(Number(p.price)) ? Number(p.price) : undefined,
      size: p.size != null && !isNaN(Number(p.size)) ? Number(p.size) : undefined,
      bedrooms: p.bedrooms != null && !isNaN(Number(p.bedrooms)) ? Number(p.bedrooms) : undefined,
      bathrooms: p.bathrooms != null && !isNaN(Number(p.bathrooms)) ? Number(p.bathrooms) : undefined,
      project_id: p.project_id
        ? String(p.project_id)
        : (p.project as any)?.project_id
          ? String((p.project as any).project_id)
          : (p.project as any)?.id
            ? String((p.project as any).id)
            : "",
      property_type_id: p.property_type_id
        ? String(p.property_type_id)
        : p.property_type
          ? String((p.property_type as any).id ?? (p.property_type as any[])[0]?.id ?? "")
          : "",
      property_subtype_id: p.property_subtype_id
        ? String(p.property_subtype_id)
        : p.property_subtype
          ? String((p.property_subtype as any).id ?? (p.property_subtype as any[])[0]?.id ?? "")
          : "",
      status: (p.status as string) ?? "active",
      availability_status: (p.availability_status as string) ?? "available",
      construction_status: (p.construction_status as string) ?? "",
      furnish_status: (p.furnish_status as string) ?? "",
      finishing_status: (p.finishing_status as string) ?? "",
      view: (p.view as string) ?? "",
      ownership_type: (p.ownership_type as string) ?? "",
      description: (p.description as string) ?? "",
      maid_room: p.maid_room === 1 || p.maid_room === true,
    });
  }, [propertyData, reset]);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  const onSubmit = async (formValues: PropertiesInput) => {
    if (!propertyId) return;
    setIsSubmitting(true);
    try {
      await AdminPropertiesService.updateProperty(propertyId, formValues as any);
      toast.success(t("properties.messages.updateSuccess"));
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      queryClient.invalidateQueries({ queryKey: ["property-detail", propertyId] });
      queryClient.invalidateQueries({ queryKey: ["propertyDetails", propertyId] });
      queryClient.invalidateQueries({ queryKey: ["propertyDetails", String(propertyId)] });
      handleClose();
    } catch (error) {
      toast.error(t("properties.messages.updateFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    methods,
    propertyLoading,
    isSubmitting,
    propertyTypes,
    propertySubtypes,
    projects,
    handleClose,
    onSubmit: handleSubmit(onSubmit, () => {
      toast.error("Please fill in all required fields correctly.");
    }),
  };
}