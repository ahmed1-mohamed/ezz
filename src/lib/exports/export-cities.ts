export const citiesExportToExcel = async (data: any[]) => {
  const XLSX = await import("xlsx");
  const formattedData = data.map((item: any) => ({
    ID: item.id ?? "N/A",
    Name: item.name ?? "N/A",
    "Area Name": item.area_name ?? "N/A",
    "Country Name": item.country_name ?? "N/A",
    "Locations Count": item.locations_count ?? 0,
    "Projects Count": item.projects_count ?? 0,
    Created: item.created_at ?? "N/A",
    Status: item.status ? "Active" : "Inactive",
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();

  const header = Object.keys(formattedData[0] || {});
  const columnWidths = header.map((h) => ({
    wch: Math.max(h.length, ...formattedData.map((row: any) => row[h]?.toString().length || 10)) + 2,
  }));
  worksheet["!cols"] = columnWidths;
  worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

  XLSX.utils.book_append_sheet(workbook, worksheet, "Cities");
  XLSX.writeFile(workbook, "Cities_Report.xlsx");
};

export const citiesExportToPDF = async (data: any[]) => {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Cities Report", 14, 10);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  let yPos = 25;
  const lineSpacing = 7;
  const cardMargin = 15;
  const pageHeight = doc.internal.pageSize.height;
  const valueXPos = 50;

  data.forEach((item: any) => {
    if (yPos + 60 > pageHeight) {
      doc.addPage();
      yPos = 25;
    }

    doc.setFont("helvetica", "bold");
    doc.text(`ID:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.id?.toString() || "N/A", valueXPos, yPos);
    yPos += lineSpacing;

    doc.setFont("helvetica", "bold");
    doc.text(`Name:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.name || "N/A", valueXPos, yPos);
    yPos += lineSpacing;

    doc.setFont("helvetica", "bold");
    doc.text(`Area Name:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.area_name || "N/A", valueXPos, yPos);
    yPos += lineSpacing;

    doc.setFont("helvetica", "bold");
    doc.text(`Country Name:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.country_name || "N/A", valueXPos, yPos);
    yPos += lineSpacing;

    doc.setFont("helvetica", "bold");
    doc.text(`Locations Count:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.locations_count?.toString() || "0", valueXPos, yPos);
    yPos += lineSpacing;

    doc.setFont("helvetica", "bold");
    doc.text(`Projects Count:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.projects_count?.toString() || "0", valueXPos, yPos);
    yPos += lineSpacing;

    doc.setFont("helvetica", "bold");
    doc.text(`Status:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(item.status ? "Active" : "Inactive", valueXPos, yPos);
    yPos += lineSpacing;

    yPos += cardMargin;
  });

  doc.save("Cities_Report.pdf");
};
