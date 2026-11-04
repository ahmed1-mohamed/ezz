export const projectsExportToPDF = async (data: any[]) => {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "landscape" });

  const title = "Projects Report";
  const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;

  doc.setFillColor(13, 148, 136);
  doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, 12);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(generated, doc.internal.pageSize.width - 14, 12, { align: "right" });

  doc.setTextColor(0, 0, 0);

  const cols = [
    { header: "Project Name", key: "project_name", width: 55 },
    { header: "Type", key: "project_type", width: 35 },
    { header: "Developer", key: "developer_name", width: 45 },
    { header: "Status", key: "status", width: 30 },
    { header: "Total Units", key: "total_units", width: 25 },
    { header: "Available", key: "available_units", width: 25 },
    { header: "City", key: "city_name", width: 30 },
    { header: "Price Range", key: "price_range", width: 35 },
  ];

  let xPos = 14;
  let yPos = 28;
  const rowHeight = 8;
  const pageHeight = doc.internal.pageSize.height;

  doc.setFillColor(243, 244, 246);
  doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(55, 65, 81);

  cols.forEach((col) => {
    doc.text(col.header, xPos, yPos);
    xPos += col.width;
  });

  yPos += rowHeight;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(31, 41, 55);

  data.forEach((p: any, rowIndex: number) => {
    if (yPos + rowHeight > pageHeight - 15) {
      doc.addPage();
      yPos = 20;

      doc.setFillColor(243, 244, 246);
      doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(55, 65, 81);
      let hX = 14;
      cols.forEach((col) => {
        doc.text(col.header, hX, yPos);
        hX += col.width;
      });
      yPos += rowHeight;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(31, 41, 55);
    }

    if (rowIndex % 2 === 1) {
      doc.setFillColor(249, 250, 251);
      doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
    }

    xPos = 14;
    cols.forEach((col) => {
      let val = p[col.key] ?? p.project?.[col.key] ?? "—";
      if (typeof val === "object") val = JSON.stringify(val);
      const strVal = String(val);
      const truncated = strVal.length > 28 ? strVal.substring(0, 26) + "…" : strVal;
      doc.text(truncated, xPos, yPos);
      xPos += col.width;
    });

    yPos += rowHeight;
  });

  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setTextColor(156, 163, 175);
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 6,
      { align: "center" }
    );
  }

  doc.save("Projects_Report.pdf");
};

export const projectsExportToCsv = (data: any[]) => {
  if (!data.length) return;

  const columns = [
    "project_id",
    "project_name",
    "project_type",
    "developer_name",
    "status",
    "is_active",
    "total_units",
    "available_units",
    "properties_count",
    "launch_date",
    "completion_date",
    "price_range",
    "price_range_SQ",
    "project_currency",
    "city_name",
    "country_name",
    "location_landmark",
    "project_size",
    "permit_no",
    "barcode",
    "slug",
    "created_at",
  ];

  const header = columns.join(",");
  const rows = data.map((p: any) =>
    columns
      .map((col) => {
        let val = p[col] ?? "";
        if (col === "is_active") {
          val = p.is_active === 1 || p.is_active === true || p.is_active === "1" ? "Yes" : "No";
        }
        const str = String(val).replace(/"/g, '""');
        return `"${str}"`;
      })
      .join(",")
  );

  const csvContent = [header, ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Projects_Report.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const projectsExportToExcel = async (data: any[]) => {
  const XLSX = await import("xlsx");
  const formattedData = data.map(
    ({
      project_id,
      project_name,
      project_type,
      total_units,
      available_units,
      status,
      launch_date,
      completion_date,
      price_range,
      price_range_SQ,
      description,
      project_size,
      phase,
      is_active,
      project_currency,
      permit_no,
      barcode,
      slug,
      properties_count,
      active_properties_count,
      available_properties_count,
      booked_properties_count,
      sold_properties_count,
      developer_name,
      city_name,
      country_name,
      country_currency,
      country_dimension_unit,
      location_landmark,
      created_at,
    }: any) => ({
      "Project ID": project_id ?? "N/A",
      "Project Name": project_name ?? "N/A",
      "Project Type": project_type ?? "N/A",
      "Developer": developer_name ?? "N/A",
      "Status": status ?? "N/A",
      "Is Active": is_active === 1 || is_active === true || is_active === "1" ? "Yes" : "No",
      "Total Units": total_units ?? "N/A",
      "Available Units": available_units ?? "N/A",
      "Properties Count": properties_count ?? 0,
      "Active Properties Count": active_properties_count ?? 0,
      "Available Properties Count": available_properties_count ?? 0,
      "Booked Properties Count": booked_properties_count ?? 0,
      "Sold Properties Count": sold_properties_count ?? 0,
      "Launch Date": launch_date ?? "N/A",
      "Completion Date": completion_date ?? "N/A",
      "Price Range": price_range ?? "N/A",
      "Price Range SQ": price_range_SQ ?? "N/A",
      "Project Currency": project_currency ?? "N/A",
      "Country Name": country_name ?? "N/A",
      "City Name": city_name ?? "N/A",
      "Location Landmark": location_landmark ?? "N/A",
      "Country Currency": country_currency ?? "N/A",
      "Country Dimension Unit": country_dimension_unit ?? "N/A",
      "Project Size": project_size ?? "N/A",
      "Description": description ? description.replace(/<[^>]*>?/gm, "") : "N/A",
      "Phase": phase ?? "N/A",
      "Permit No": permit_no ?? "N/A",
      "Barcode": barcode ?? "N/A",
      "Slug": slug ?? "N/A",
      "Created At": created_at ?? "N/A",
    }),
  );

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();

  const header = Object.keys(formattedData[0] || {});
  const columnWidths = header.map((h) => ({
    wch:
      Math.max(
        h.length,
        ...formattedData.map((row: any) => row[h]?.toString().length || 10),
      ) + 2,
  }));
  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
  XLSX.writeFile(workbook, "Projects_Report.xlsx");
};