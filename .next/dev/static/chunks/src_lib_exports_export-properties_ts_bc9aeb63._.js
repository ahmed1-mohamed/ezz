(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/exports/export-properties.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Excel ────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "propertiesExportToCsv",
    ()=>propertiesExportToCsv,
    "propertiesExportToExcel",
    ()=>propertiesExportToExcel,
    "propertiesExportToPdf",
    ()=>propertiesExportToPdf
]);
const propertiesExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((property)=>({
            property_name: property.property_name ?? "",
            property_no: property.property_no ?? "",
            property_type_id: property.propertytype?.id ?? property.property_type_id ?? "",
            property_subtype_id: property.propertysubtype?.id ?? property.property_subtype_id ?? "",
            project_id: property.project_id ?? "",
            location_id: property.location_id ?? "",
            building_id: property.building_id ?? "",
            plot_size: property.plot_size ?? "",
            bua_size: property.bua_size ?? "",
            maid_room: property.maid_room ? 1 : 0,
            status: property.status ?? "",
            furnish_status: property.furnish_status ?? "",
            finishing_status: property.finishing_status ?? "",
            price: property.price ?? "",
            size: property.size ?? "",
            bedrooms: property.bedrooms ?? 0,
            bathrooms: property.bathrooms ?? 0,
            parking_spaces: property.parking_spaces ?? 0,
            availability_status: property.availability_status ?? "",
            construction_status: property.construction_status ?? "",
            description: property.description ?? "",
            reference_listed: property.reference_listed ?? "",
            ownership_type: property.ownership_type ?? "",
            broker_license: property.broker_license ?? "",
            agent_license: property.agent_license ?? "",
            zone_name: property.zone_name ?? "",
            dld_permit_number: property.dld_permit_number ?? "",
            dld_barcode: property.dld_barcode ?? "",
            created_at: property.created_at ?? "",
            updated_at: property.updated_at ?? "",
            deleted_at: property.deleted_at ?? "",
            views_count: property.views_count ?? 0,
            is_active: property.is_active ? 1 : 0,
            plan_type: property.plan_type ?? "",
            slug: property.slug ?? ""
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, "Properties_Export.xlsx");
};
const propertiesExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "property_name",
        "property_no",
        "status",
        "price",
        "size",
        "bedrooms",
        "bathrooms",
        "parking_spaces",
        "floor",
        "availability_status",
        "construction_status",
        "furnish_status",
        "finishing_status",
        "plan_type",
        "ownership_type",
        "zone_name",
        "dld_permit_number",
        "slug",
        "views_count",
        "created_at",
        "updated_at"
    ];
    const header = columns.join(",");
    const rows = data.map((p)=>columns.map((col)=>{
            const val = p[col] ?? "";
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
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
    link.download = "Properties_Export.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const propertiesExportToPdf = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Properties Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    // Header bar
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
    // Table columns
    const cols = [
        {
            header: "#",
            key: "index",
            width: 10
        },
        {
            header: "Property Name",
            key: "property_name",
            width: 45
        },
        {
            header: "Unit No.",
            key: "property_no",
            width: 22
        },
        {
            header: "Type",
            key: "type",
            width: 28
        },
        {
            header: "Status",
            key: "status",
            width: 22
        },
        {
            header: "Price",
            key: "price",
            width: 28
        },
        {
            header: "Size (m²)",
            key: "size",
            width: 22
        },
        {
            header: "Beds",
            key: "bedrooms",
            width: 14
        },
        {
            header: "Baths",
            key: "bathrooms",
            width: 14
        },
        {
            header: "Floor",
            key: "floor_number",
            width: 14
        },
        {
            header: "Project",
            key: "project_name",
            width: 40
        }
    ];
    const startX = 10;
    const startY = 26;
    const rowHeight = 8;
    const headerHeight = 9;
    const pageW = doc.internal.pageSize.width;
    const pageH = doc.internal.pageSize.height;
    const drawTableHeader = (y)=>{
        doc.setFillColor(240, 253, 250); // teal-50
        doc.rect(startX, y, pageW - 20, headerHeight, "F");
        doc.setFontSize(7.5);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 118, 110);
        let xPos = startX + 2;
        cols.forEach((col)=>{
            doc.text(col.header, xPos, y + 6);
            xPos += col.width;
        });
        doc.setTextColor(0, 0, 0);
    };
    drawTableHeader(startY);
    let y = startY + headerHeight;
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    data.forEach((prop, idx)=>{
        if (y + rowHeight > pageH - 15) {
            // Footer
            doc.setFontSize(7);
            doc.setTextColor(150, 150, 150);
            doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageW / 2, pageH - 8, {
                align: "center"
            });
            doc.addPage();
            drawTableHeader(startY);
            y = startY + headerHeight;
            doc.setFontSize(7);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);
        }
        // Zebra stripe
        if (idx % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(startX, y, pageW - 20, rowHeight, "F");
        }
        const rowData = {
            index: String(idx + 1),
            property_name: prop.property_name ?? "",
            property_no: prop.property_no ?? "",
            type: prop.propertytype?.property_type_name ?? prop.type ?? "",
            status: prop.availability_status ?? prop.status ?? "",
            price: prop.price ? `${Number(prop.price).toLocaleString()}` : "",
            size: prop.size ? `${prop.size}` : prop.bua_size ? `${prop.bua_size}` : "",
            bedrooms: prop.bedrooms != null ? String(prop.bedrooms) : "",
            bathrooms: prop.bathrooms != null ? String(prop.bathrooms) : "",
            floor_number: prop.floor_number != null ? String(prop.floor_number) : "",
            project_name: prop.project?.project_name ?? prop.project_name ?? ""
        };
        let xPos = startX + 2;
        cols.forEach((col)=>{
            const text = doc.splitTextToSize(rowData[col.key] ?? "", col.width - 2);
            doc.text(text[0] ?? "", xPos, y + 5.5);
            xPos += col.width;
        });
        // Row divider
        doc.setDrawColor(229, 231, 235);
        doc.line(startX, y + rowHeight, startX + (pageW - 20), y + rowHeight);
        y += rowHeight;
    });
    // Last page footer
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${doc.internal.getNumberOfPages()} · Total: ${data.length} properties`, pageW / 2, pageH - 8, {
        align: "center"
    });
    doc.save("Properties_Export.pdf");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_exports_export-properties_ts_bc9aeb63._.js.map