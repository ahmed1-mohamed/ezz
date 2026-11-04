import { DASHBOARD_API_BASE_URL } from "@/config/api";

export const ProjectsTemplate = async () => {
  const XLSX = await import("xlsx");
  const headers = [
    "project_id",
    "developer_id",
    "location_id",
    "project_name",
    "project_type",
    "total_units",
    "availabe_units",
    "launch_date",
    "completion_date",
    "status",
    "price_range",
    "price_range_SQ",
    "description",
  ];

  const worksheet = XLSX.utils.aoa_to_sheet([headers]);

  const columnWidths = headers.map((header) => ({
    wch: header.length + 5,
  }));

  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");

  XLSX.writeFile(workbook, "Empty_Projects_Template.xlsx");
};

export const PropertiesTemplate = async () => {
  const XLSX = await import("xlsx");
  const headers = [
    "property_name",
    "property_no",
    "property_type_id",
    "property_subtype_id",
    "plot_size",
    "bua_size",
    "price",
    "size",
    "maid_room ",
    "finishing_status",
    "furnish_status",
    " bedrooms",
    "bathrooms",
    " parking_spaces",
    "building_name",
    "building_community",
    "building_commuinty_compelation_date",
    "description",
  ];

  const worksheet = XLSX.utils.aoa_to_sheet([headers]);

  const columnWidths = headers.map((header) => ({
    wch: header.length + 5,
  }));

  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");

  XLSX.writeFile(workbook, "Empty_Properties_Template.xlsx");
};

export const PropertiesFilledTemplate = async (
  projectId: number,
  token: string,
) => {
  const XLSX = await import("xlsx");
  let enrichedProperties = [];
  let projectName = "";
  try {
    const res = await fetch(
      `${DASHBOARD_API_BASE_URL}/projects/${projectId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const resJson: any = await res.json();
    const data = await resJson.data;
    projectName = await data.project_name;
    const buildings = (await data.buildings) || [];
    const allProps = (await data.properties) || [];
    const props = allProps.filter(
      (property: any) =>
        property.project_id === projectId ||
        Number(property.project_id) === Number(projectId),
    );
    enrichedProperties = props.map((property: any) => {
      const building = buildings.find(
        (b: any) => b.building_id === property.building_id,
      );

      return {
        ...property,
        building_name: building?.building_name || null,
        completion_date: building?.completion_date || null,
        built_type: building?.built_type || null,
      };
    });
  } catch (error) {
    console.error(error);
  }

  const headers = [
    "property_name",
    "property_no",
    "property_type_id",
    "property_subtype_id",
    "plot_size",
    "bua_size",
    "price",
    "size",
    "maid_room ",
    "finishing_status",
    "furnish_status",
    " bedrooms",
    "bathrooms",
    " parking_spaces",
    "building_name",
    "building_community",
    "building_commuinty_compelation_date",
    "description",
  ];

  const rows = enrichedProperties.map((item: any) => [
    item.property_name || "",
    item.property_no || "",
    item.propertytype == null ? "" : item.propertytype?.name || "",
    item.propertysubtype == null ? "" : item.propertysubtype?.name || "",
    item.plot_size || "",
    item.bua_size || "",
    item.price || "",
    item.size || "",
    item.maid_room || "",
    item.finishing_status || "",
    item.furnish_status || "",
    item.bedrooms || "",
    item.bathrooms || "",
    item.parking_spaces || "",
    item.building_name || "",
    item.built_type || "",
    item.completion_date || "",
    item.description,
  ]);

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);

  const columnWidths = headers.map((header) => ({
    wch: header.length + 5,
  }));

  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");

  XLSX.writeFile(workbook, `${projectName}_Properties_Template.xlsx`);
};

export const ExpertsTemplate = async () => {
  const XLSX = await import("xlsx");
  const headers = [
    "display_name",
    "email",
    "phone_number",
    "title",
    "years_experience",
    "bio",
    "website",
    "linkedin",
    "specializations",
    "service_areas",
    "languages",
  ];

  const worksheet = XLSX.utils.aoa_to_sheet([headers]);

  const columnWidths = headers.map((header) => ({
    wch: header.length + 5,
  }));

  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Experts");

  XLSX.writeFile(workbook, "Empty_Experts_Template.xlsx");
};

export const ExpertsFilledTemplate = async (token: string) => {
  const XLSX = await import("xlsx");
  let experts = [];
  try {
    const res = await fetch(
      `${DASHBOARD_API_BASE_URL}/experts?page=1&per_page=100`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const resJson: any = await res.json();
    experts = resJson.data || [];
  } catch (error) {
    console.error(error);
  }

  const headers = [
    "display_name",
    "email",
    "phone_number",
    "title",
    "years_experience",
    "bio",
    "website",
    "linkedin",
    "specializations",
    "service_areas",
    "languages",
  ];

  const rows = experts.map((item: any) => [
    item.display_name || "",
    item.email || "",
    item.phone_number || "",
    item.title || "",
    item.years_experience || "",
    item.bio || "",
    item.website || "",
    item.linkedin || "",
    item.categories ? item.categories.join(", ") : "",
    item.countries ? item.countries.join(", ") : "",
    item.languages ? item.languages.map((l: any) => l.name || l).join(", ") : "",
  ]);

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);

  const columnWidths = headers.map((header) => ({
    wch: header.length + 5,
  }));

  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Experts");

  XLSX.writeFile(workbook, "Experts_Template_With_Data.xlsx");
};

export const CitiesTemplate = async () => {
  const XLSX = await import("xlsx");
  const headers = [
    "name",
    "state_id",
    "country_id",
    "status",
  ];

  const worksheet = XLSX.utils.aoa_to_sheet([headers]);

  const columnWidths = headers.map((header) => ({
    wch: header.length + 5,
  }));

  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Cities");

  XLSX.writeFile(workbook, "Empty_Cities_Template.xlsx");
};
