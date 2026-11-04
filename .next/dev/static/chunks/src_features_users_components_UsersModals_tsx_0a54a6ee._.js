(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/users/components/UsersModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsersModals",
    ()=>UsersModals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
"use client";
;
;
;
const AddUserModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/users/add-user-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.AddUserModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/users/add-user-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = AddUserModal;
const ViewUserModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/users/view-user-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ViewUserModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/users/view-user-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = ViewUserModal;
const EditUserModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/users/edit-user-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.EditUserModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/users/edit-user-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = EditUserModal;
function UsersModals(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "8dd18ac70b5e14fb5e8a2e69e56b989f0c3af6c8940cc21cae75fdac35a52975") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8dd18ac70b5e14fb5e8a2e69e56b989f0c3af6c8940cc21cae75fdac35a52975";
    }
    const { addUserModalOpen, viewUserModalOpen, editUserModalOpen, userIdToView, userToEdit, isAddPending, onAddClose, onAddSubmit, onViewClose, onViewEdit, onViewDelete, onEditClose, onEditSuccess } = t0;
    let t1;
    if ($[1] !== addUserModalOpen || $[2] !== isAddPending || $[3] !== onAddClose || $[4] !== onAddSubmit) {
        t1 = addUserModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddUserModal, {
            isOpen: addUserModalOpen,
            onClose: onAddClose,
            onSubmit: onAddSubmit,
            isPending: isAddPending
        }, void 0, false, {
            fileName: "[project]/src/features/users/components/UsersModals.tsx",
            lineNumber: 56,
            columnNumber: 30
        }, this);
        $[1] = addUserModalOpen;
        $[2] = isAddPending;
        $[3] = onAddClose;
        $[4] = onAddSubmit;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== onViewClose || $[7] !== onViewDelete || $[8] !== onViewEdit || $[9] !== userIdToView || $[10] !== viewUserModalOpen) {
        t2 = viewUserModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewUserModal, {
            isOpen: viewUserModalOpen,
            onClose: onViewClose,
            userId: userIdToView || 0,
            onEdit: onViewEdit,
            onDelete: onViewDelete
        }, void 0, false, {
            fileName: "[project]/src/features/users/components/UsersModals.tsx",
            lineNumber: 67,
            columnNumber: 31
        }, this);
        $[6] = onViewClose;
        $[7] = onViewDelete;
        $[8] = onViewEdit;
        $[9] = userIdToView;
        $[10] = viewUserModalOpen;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    let t3;
    if ($[12] !== editUserModalOpen || $[13] !== onEditClose || $[14] !== onEditSuccess || $[15] !== userToEdit) {
        t3 = editUserModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditUserModal, {
            isOpen: editUserModalOpen,
            onClose: onEditClose,
            userId: userToEdit || 0,
            onSuccess: onEditSuccess
        }, void 0, false, {
            fileName: "[project]/src/features/users/components/UsersModals.tsx",
            lineNumber: 79,
            columnNumber: 31
        }, this);
        $[12] = editUserModalOpen;
        $[13] = onEditClose;
        $[14] = onEditSuccess;
        $[15] = userToEdit;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== t1 || $[18] !== t2 || $[19] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true);
        $[17] = t1;
        $[18] = t2;
        $[19] = t3;
        $[20] = t4;
    } else {
        t4 = $[20];
    }
    return t4;
}
_c3 = UsersModals;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AddUserModal");
__turbopack_context__.k.register(_c1, "ViewUserModal");
__turbopack_context__.k.register(_c2, "EditUserModal");
__turbopack_context__.k.register(_c3, "UsersModals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/users/components/UsersModals.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/users/components/UsersModals.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_features_users_components_UsersModals_tsx_0a54a6ee._.js.map