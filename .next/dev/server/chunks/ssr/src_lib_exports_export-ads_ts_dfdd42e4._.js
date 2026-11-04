module.exports = [
"[project]/src/lib/exports/export-ads.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_52cc19cd._.js",
  "server/chunks/ssr/src_lib_exports_export-ads_ts_377f6647._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/exports/export-ads.ts [app-ssr] (ecmascript)");
    });
});
}),
];