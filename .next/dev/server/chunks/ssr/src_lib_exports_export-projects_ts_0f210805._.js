module.exports = [
"[project]/src/lib/exports/export-projects.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_82021574._.js",
  "server/chunks/ssr/src_lib_exports_export-projects_ts_12f5f89f._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/exports/export-projects.ts [app-ssr] (ecmascript)");
    });
});
}),
];