(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/exports/export-users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Excel ────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "usersExportToCsv",
    ()=>usersExportToCsv,
    "usersExportToExcel",
    ()=>usersExportToExcel,
    "usersExportToPDF",
    ()=>usersExportToPDF
]);
const usersExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((user)=>({
            "User ID": user.user_id ?? user.id ?? "N/A",
            "Full Name": user.name || `${user.first_name || ""} ${user.last_name || ""}`.trim() || "N/A",
            "Email": user.email ?? "N/A",
            "Phone Number": user.phone_number ?? user.phone ?? "N/A",
            "Role": user.role_name ?? user.role?.role_name ?? "N/A",
            "Status": user.status ?? "N/A",
            "Last Login": user.lastLogin ?? user.last_login ?? "N/A",
            "Created At": user.created_at ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h] ? row[h].toString().length : 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, `Users_Report_${new Date().toISOString().split("T")[0]}.xlsx`);
};
const usersExportToCsv = (data)=>{
    if (!data.length) return;
    const headers = [
        "User ID",
        "Full Name",
        "Email",
        "Phone Number",
        "Role",
        "Status",
        "Created At"
    ];
    const headerRow = headers.join(",");
    const rows = data.map((u)=>{
        const fullName = u.name || `${u.first_name || ""} ${u.last_name || ""}`.trim() || "";
        const roleName = u.role_name ?? u.role?.role_name ?? "";
        const phone = u.phone_number ?? u.phone ?? "";
        const createdAt = u.created_at ?? "";
        return [
            u.user_id ?? u.id ?? "",
            `"${String(fullName).replace(/"/g, '""')}"`,
            `"${String(u.email ?? "").replace(/"/g, '""')}"`,
            `"${String(phone).replace(/"/g, '""')}"`,
            `"${String(roleName).replace(/"/g, '""')}"`,
            `"${String(u.status ?? "").replace(/"/g, '""')}"`,
            `"${String(createdAt).replace(/"/g, '""')}"`
        ].join(",");
    });
    const csvContent = [
        headerRow,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Users_Report_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const usersExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Users Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    doc.setFillColor(13, 148, 136); // teal-600
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    const cols = [
        {
            header: "ID",
            key: "user_id",
            width: 25
        },
        {
            header: "Name",
            key: "name",
            width: 65
        },
        {
            header: "Email",
            key: "email",
            width: 75
        },
        {
            header: "Role",
            key: "role_name",
            width: 45
        },
        {
            header: "Status",
            key: "status",
            width: 35
        }
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
    cols.forEach((col)=>{
        doc.text(col.header, xPos, yPos);
        xPos += col.width;
    });
    yPos += rowHeight;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(31, 41, 55);
    data.forEach((u, rowIndex)=>{
        if (yPos + rowHeight > pageHeight - 15) {
            doc.addPage();
            yPos = 20;
            doc.setFillColor(243, 244, 246);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(55, 65, 81);
            let hX = 14;
            cols.forEach((col)=>{
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
        cols.forEach((col)=>{
            let val = u[col.key] ?? "—";
            if (col.key === "name" && !u.name) {
                val = `${u.first_name || ""} ${u.last_name || ""}`.trim() || "—";
            }
            if (col.key === "role_name" && !u.role_name) {
                val = u.role?.role_name || "—";
            }
            const strVal = String(val);
            const truncated = strVal.length > 35 ? strVal.substring(0, 33) + "…" : strVal;
            doc.text(truncated, xPos, yPos);
            xPos += col.width;
        });
        yPos += rowHeight;
    });
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 6, {
            align: "center"
        });
    }
    doc.save(`Users_Report_${new Date().toISOString().split("T")[0]}.pdf`);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_exports_export-users_ts_6390bc30._.js.map