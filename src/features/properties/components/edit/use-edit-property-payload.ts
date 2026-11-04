import React from "react";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { ProjectsDataType, PropertySubtypeDataType, PropertyTypeDataType } from "@/types";

interface UseEditPropertyPayloadProps {
  propertyData: any;
  propertyId: number;
  projects: ProjectsDataType[];
  propertiesType: PropertyTypeDataType[];
  propertiesSubtype: PropertySubtypeDataType[];
}

export function useEditPropertyPayload({
  propertyData,
  propertyId,
  projects,
  propertiesType,
  propertiesSubtype,
}: UseEditPropertyPayloadProps) {
  const formValues = React.useMemo<PropertiesInput | undefined>(() => {
    if (!propertyData) return undefined;
    const raw =
      (propertyData as any)?.data?.property_name !== undefined ||
      (propertyData as any)?.data?.property_id !== undefined
        ? (propertyData as any).data
        : (propertyData as any)?.data ?? propertyData;
    
    // Merge root and data to handle properties that might be siblings of data
    const rootData = (propertyData as Record<string, any>) || {};
    const rawData = (raw as Record<string, any>) || {};
    const p = { ...rootData, ...rawData };

    if (!p.property_name && !p.property_id) return undefined;

    let resolvedProjectId = "";
    if (p.project_id != null && p.project_id !== "") resolvedProjectId = String(p.project_id);
    else if (p.project && typeof p.project === "object") {
      resolvedProjectId = String((p.project as any).project_id ?? (p.project as any).id ?? "");
    } else if (Array.isArray(p.project) && p.project[0]) {
      resolvedProjectId = String(p.project[0].project_id ?? p.project[0].id ?? "");
    }

    let resolvedTypeId = "";
    if (p.property_type_id != null && p.property_type_id !== "") resolvedTypeId = String(p.property_type_id);
    else if (p.property_type && typeof p.property_type === "object") {
      resolvedTypeId = String((p.property_type as any).id ?? (p.property_type as any).property_type_id ?? "");
    } else if (Array.isArray(p.property_type) && p.property_type[0]) {
      resolvedTypeId = String(p.property_type[0].id ?? p.property_type[0].property_type_id ?? "");
    }

    let resolvedSubtypeId = "";
    if (p.property_subtype_id != null && p.property_subtype_id !== "") resolvedSubtypeId = String(p.property_subtype_id);
    else if (p.property_subtype && typeof p.property_subtype === "object") {
      resolvedSubtypeId = String((p.property_subtype as any).id ?? (p.property_subtype as any).property_subtype_id ?? "");
    } else if (Array.isArray(p.property_subtype) && p.property_subtype[0]) {
      resolvedSubtypeId = String(p.property_subtype[0].id ?? p.property_subtype[0].property_subtype_id ?? "");
    }

    const normalizeOption = (val: any, validValues: string[]): string => {
      if (!val || typeof val !== "string") return "";
      const clean = val.toLowerCase().trim();
      if (validValues.includes(clean)) return clean;
      const dashed = clean.replace(/[\s_]+/g, "-");
      if (validValues.includes(dashed)) return dashed;
      const match = validValues.find((v) => clean.includes(v) || v.includes(clean));
      return match || clean;
    };

    const resolvedAvailability = normalizeOption(p.availability_status || p.status, ["available", "reserved", "sold"]) || "available";
    const resolvedConstruction = normalizeOption(p.construction_status, ["ready", "under-construction", "off-plan"]);
    const resolvedStatus = p.status === 1 || p.status === "1" || String(p.status).toLowerCase() === "active" ? "active" : "inactive";
    const resolvedFurnish = normalizeOption(p.furnish_status, ["furnished", "semi-furnished", "unfurnished"]);
    const resolvedFinishing = normalizeOption(p.finishing_status, ["finished", "semi-finished", "unfinished"]);
    const resolvedOwnership = normalizeOption(p.ownership_type, ["freehold", "leasehold"]);
    const resolvedView = normalizeOption(p.view, ["sea", "city", "garden"]);
    const resolvedCurrency = normalizeOption(p.currency || p.project?.currency, ["aed", "usd", "egp"]) || "aed";
    const resolvedBuildingName = (p.building_name as string) ?? (p.building?.building_name as string) ?? "";
    const resolvedParkingSpaces = p.parking_spaces != null && !isNaN(Number(p.parking_spaces))
      ? Number(p.parking_spaces)
      : p.building?.parking_spaces != null && !isNaN(Number(p.building.parking_spaces))
        ? Number(p.building.parking_spaces)
        : undefined;

    return {
      property_name: (p.property_name as string) ?? "",
      property_no: (p.property_no as string) || (p.unit_number as string) || (p.property_id != null ? String(p.property_id) : "") || (propertyId ? String(propertyId) : ""),
      floor: (p.floor as string) ?? "",
      price: p.price != null && !isNaN(Number(p.price)) ? Number(p.price) : 0,
      size: p.size != null && !isNaN(Number(p.size)) ? Number(p.size) : 0,
      bedrooms: p.bedrooms != null && !isNaN(Number(p.bedrooms)) ? Number(p.bedrooms) : undefined,
      bathrooms: p.bathrooms != null && !isNaN(Number(p.bathrooms)) ? Number(p.bathrooms) : undefined,
      project_id: resolvedProjectId,
      property_type_id: resolvedTypeId,
      property_subtype_id: resolvedSubtypeId,
      status: resolvedStatus,
      availability_status: resolvedAvailability,
      construction_status: resolvedConstruction,
      furnish_status: resolvedFurnish,
      finishing_status: resolvedFinishing,
      view: resolvedView,
      ownership_type: resolvedOwnership,
      description: (p.description as string) ?? "",
      maid_room: p.maid_room === 1 || p.maid_room === true,
      bua_size: p.bua_size != null && !isNaN(Number(p.bua_size)) ? Number(p.bua_size) : undefined,
      plot_size: p.plot_size != null && !isNaN(Number(p.plot_size)) ? Number(p.plot_size) : undefined,
      parking_spaces: resolvedParkingSpaces,
      currency: resolvedCurrency,
      price_per_m2: p.price_per_m2 != null && !isNaN(Number(p.price_per_m2)) ? Number(p.price_per_m2) : undefined,
      price_description: (p.price_description as string) ?? "",
      reference_listed: (p.reference_listed as string) ?? "",
      broker_license: (p.broker_license as string) ?? "",
      agent_license: (p.agent_license as string) ?? "",
      zone_name: (p.zone_name as string) ?? (p.area_name as string) ?? "",
      city_name: (p.city_name as string) ?? (p.city as string) ?? (p.location as any)?.city ?? "",
      area_name: (p.area_name as string) ?? (p.area as string) ?? (p.location as any)?.area ?? "",
      landmark: (p.landmark as string) ?? (p.location as any)?.landmark ?? "",
      maps_url: (p.maps_url as string) ?? (p.google_map_link as string) ?? (p.location as any)?.google_map_link ?? (p.location as any)?.google_maps_link ?? "",
      latitude: p.latitude != null && !isNaN(Number(p.latitude))
        ? Number(p.latitude)
        : (p.location as any)?.latitude != null && !isNaN(Number((p.location as any).latitude))
          ? Number((p.location as any).latitude)
          : undefined,
      longitude: p.longitude != null && !isNaN(Number(p.longitude))
        ? Number(p.longitude)
        : (p.location as any)?.longitude != null && !isNaN(Number((p.location as any).longitude))
          ? Number((p.location as any).longitude)
          : undefined,
      dld_permit_number: (p.dld_permit_number as string) ?? (p.permit_no as string) ?? (p.project?.permit_no as string) ?? "",
      dld_barcode: (p.dld_barcode as string) ?? (p.barcode as string) ?? (p.project?.barcode as string) ?? "",
      building_name: resolvedBuildingName,
      slug: (p.slug as string) ?? "",
      meta_title: (p.meta_title as string) ?? "",
      meta_description: (p.meta_description as string) ?? "",
    };
  }, [propertyData, propertyId]);

  const mergedProjects = React.useMemo(() => {
    const list = [...projects];
    const raw = (propertyData as any)?.data ?? propertyData;
    const pProject = raw?.project;
    if (pProject && typeof pProject === "object") {
      const projId = pProject.project_id ?? pProject.id;
      const projName = pProject.project_name ?? pProject.name ?? pProject.title;
      if (projId && !list.some((item) => String(item.project_id ?? (item as any).id) === String(projId))) {
        list.unshift({
          ...pProject,
          project_id: projId,
          project_name: projName || `Project #${projId}`,
        } as any);
      }
    }
    return list;
  }, [projects, propertyData]);

  const mergedTypes = React.useMemo(() => {
    const list = [...propertiesType];
    const raw = (propertyData as any)?.data ?? propertyData;
    const pType = raw?.property_type;
    if (pType && typeof pType === "object") {
      const tId = pType.id ?? pType.property_type_id;
      const tName = pType.name ?? pType.property_type_name;
      if (tId && !list.some((item) => String(item.id) === String(tId))) {
        list.unshift({ ...pType, id: tId, name: (tName || `Type #${tId}`).trim() } as any);
      }
    }
    return list;
  }, [propertiesType, propertyData]);

  const mergedSubtypes = React.useMemo(() => {
    const list = [...propertiesSubtype];
    const raw = (propertyData as any)?.data ?? propertyData;
    const pSubtype = raw?.property_subtype;
    if (pSubtype && typeof pSubtype === "object") {
      const sId = pSubtype.id ?? pSubtype.property_subtype_id;
      const sName = pSubtype.name ?? pSubtype.property_subtype_name;
      if (sId && !list.some((item) => String(item.id) === String(sId))) {
        list.unshift({ ...pSubtype, id: sId, name: (sName || `Subtype #${sId}`).trim() } as any);
      }
    }
    return list;
  }, [propertiesSubtype, propertyData]);

  const propertyName = propertyData
    ? ((propertyData as any).data?.property_name ?? (propertyData as any).property_name ?? "Property")
    : "Property";

  return {
    formValues,
    mergedProjects,
    mergedTypes,
    mergedSubtypes,
    propertyName,
  };
}