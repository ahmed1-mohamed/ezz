export const dashboardExportToExcel = async (statsData: any[], bookingsData: any[]) => {
  const XLSX = await import("xlsx");
  const formattedStats = statsData.map((item: any) => ({
    Metric: item.title ?? "N/A",
    Value: item.value ?? "N/A",
    Comparison: item.change ?? "N/A",
    Trend: item.isPositive ? "Up" : "Down",
  }));

  const formattedBookings = bookingsData.map((item: any) => ({
    ID: item.id ?? "N/A",
    Name: item.name ?? "N/A",
    Property: item.property ?? "N/A",
    Unit: item.unit ?? "N/A",
    Amount: item.amount ?? "N/A",
    Status: item.status ?? "N/A",
    "Last Updated": item.lastUpdated ?? "N/A",
  }));

  const workbook = XLSX.utils.book_new();

  const worksheetStats = XLSX.utils.json_to_sheet(formattedStats);
  XLSX.utils.book_append_sheet(workbook, worksheetStats, "Overview Metrics");

  const worksheetBookings = XLSX.utils.json_to_sheet(formattedBookings);
  XLSX.utils.book_append_sheet(workbook, worksheetBookings, "Bookings");

  XLSX.writeFile(workbook, "Dashboard_Report.xlsx");
};
