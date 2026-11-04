import type { ReadyUnitRow } from "./types";

export type ExportFormat = "xlsx" | "pdf" | "xls";

const STATE_LABELS: Record<number, string> = { 0: "Rejected", 1: "Confirmed", 2: "Pending" };

const toRecords = (rows: ReadyUnitRow[]) =>
  rows.map((row) => ({
    "Unit Number": row.unitNumber,
    Name: row.name,
    Owner: row.owner,
    Location: row.location,
    Size: row.size === null ? "" : `${row.size} ${row.sizeUnit}`.trim(),
    Price: row.price === null ? "" : `${row.price} ${row.currency}`.trim(),
    Availability: row.availability,
    "Created At": row.createdAt ? row.createdAt.slice(0, 10) : "",
    Status: row.state === null ? row.status : STATE_LABELS[row.state],
  }));

/** Export labels stay English, like the dashboard's other exports. */
export async function exportReadyUnits(rows: ReadyUnitRow[], format: ExportFormat) {
  const records = toRecords(rows);

  if (format === "pdf") {
    const { default: jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Ready Market Report", 14, 12);
    doc.setFontSize(10);
    let y = 24;
    records.forEach((record) => {
      if (y + Object.keys(record).length * 6 + 6 > pageHeight) {
        doc.addPage();
        y = 20;
      }
      Object.entries(record).forEach(([label, value]) => {
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(String(value || "-"), 55, y);
        y += 6;
      });
      y += 4;
    });
    doc.save("Ready_Market_Report.pdf");
    return;
  }

  const XLSX = await import("xlsx");
  const worksheet = XLSX.utils.json_to_sheet(records);
  const header = Object.keys(records[0] ?? {});
  worksheet["!cols"] = header.map((h) => ({
    wch: Math.max(h.length, ...records.map((r) => String((r as Record<string, unknown>)[h] ?? "").length)) + 2,
  }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Ready Market");
  XLSX.writeFile(workbook, `Ready_Market_Report.${format}`, { bookType: format });
}
