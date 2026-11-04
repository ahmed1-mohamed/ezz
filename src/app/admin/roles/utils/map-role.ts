import { Role } from "../page.client";

export const SECTIONS = [
  "Developers",
  "Projects",
  "Properties",
  "Ads",
  "Roles",
  "Users",
  "Experts",
] as const;

export const ACTIONS = ["view", "edit", "delete", "create"] as const;

type ActionName = (typeof ACTIONS)[number];
type PermissionsMatrix = Record<string, Record<ActionName, boolean>>;

export interface RawPermissionItem {
  permission_id: number;
  permission_name: string;
  group: string;
  description: string;
  created_at?: string | null;
  deleted_at?: string | null;
  pivot?: { role_id: number; permission_id: number } | null;
}

export function unpackRolesResponse(data: unknown): any[] {
  const rawData = data as unknown;
  let rolesArray: any[] = [];
  if (Array.isArray(rawData)) {
    rolesArray = rawData;
  } else if (
    rawData &&
    typeof rawData === "object" &&
    "data" in rawData &&
    Array.isArray((rawData as { data?: unknown }).data)
  ) {
    rolesArray = (rawData as { data?: unknown }).data as any[];
  }
  return rolesArray;
}

export interface DynamicModuleGroup {
  groupKey: string;
  displayName: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  otherActions: string[];
  permissions: RawPermissionItem[];
  grantedCount: number;
  totalCount: number;
}

export function formatGroupDisplayName(group: string): string {
  if (!group) return "General";
  return group
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => {
      const wLower = word.toLowerCase();
      if (wLower === "ai") return "AI";
      if (wLower === "dld") return "DLD";
      if (wLower === "otp") return "OTP";
      if (wLower === "tx") return "Transactions";
      if (wLower === "api") return "API";
      if (wLower === "id") return "ID";
      if (wLower === "faq") return "FAQ";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export function extractPermissionsList(rawPerms: any): RawPermissionItem[] {
  let parsed = rawPerms;
  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      return [];
    }
  }

  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    if (Array.isArray(parsed.permissions)) {
      parsed = parsed.permissions;
    } else if (Array.isArray(parsed.data)) {
      parsed = parsed.data;
    }
  }

  if (Array.isArray(parsed)) {
    return parsed.map((p) => {
      const isNum = typeof p === "number";
      const pId = isNum ? p : Number(p?.permission_id ?? p?.id ?? 0);
      return {
        permission_id: pId,
        permission_name: isNum ? `permission_${p}` : String(p?.permission_name ?? p?.name ?? ""),
        group: isNum ? "General" : String(p?.group ?? p?.section ?? "General"),
        description: isNum ? "" : String(p?.description ?? p?.permission_name ?? p?.name ?? ""),
        created_at: isNum ? null : p?.created_at ?? null,
        deleted_at: isNum ? null : p?.deleted_at ?? null,
        pivot: isNum ? null : p?.pivot ?? null,
      };
    });
  }

  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    const list: RawPermissionItem[] = [];
    Object.entries(parsed).forEach(([grp, val]) => {
      if (Array.isArray(val)) {
        val.forEach((p: any) => {
          if (p) {
            const isNum = typeof p === "number";
            const pId = isNum ? p : Number(p?.permission_id ?? p?.id ?? 0);
            list.push({
              permission_id: pId,
              permission_name: isNum ? `permission_${p}` : String(p?.permission_name ?? p?.name ?? ""),
              group: isNum ? grp : String(p?.group ?? grp ?? "General"),
              description: isNum ? "" : String(p?.description ?? p?.permission_name ?? p?.name ?? ""),
              created_at: isNum ? null : p?.created_at ?? null,
              deleted_at: isNum ? null : p?.deleted_at ?? null,
              pivot: isNum ? null : p?.pivot ?? null,
            });
          }
        });
      }
    });
    if (list.length > 0) return list;
  }

  return [];
}

export function groupPermissionsByModule(
  rawPerms: any,
  isSuperAdmin: boolean = false
): DynamicModuleGroup[] {
  const list = extractPermissionsList(rawPerms);

  if (list.length > 0) {
    const groupMap = new Map<string, DynamicModuleGroup>();

    list.forEach((item) => {
      const groupKey = item.group || "general";
      if (!groupMap.has(groupKey)) {
        groupMap.set(groupKey, {
          groupKey,
          displayName: formatGroupDisplayName(groupKey),
          view: false,
          create: false,
          edit: false,
          delete: false,
          otherActions: [],
          permissions: [],
          grantedCount: 0,
          totalCount: 0,
        });
      }

      const grp = groupMap.get(groupKey)!;
      grp.permissions.push(item);
      grp.totalCount += 1;

      const act = item.permission_name.toLowerCase();
      let matched = false;

      if (
        act.includes("view") ||
        act.includes("read") ||
        act.includes("show") ||
        act.includes("index") ||
        act.includes("get") ||
        act.includes("list")
      ) {
        grp.view = true;
        matched = true;
      }
      if (
        act.includes("create") ||
        act.includes("add") ||
        act.includes("store") ||
        act.includes("post") ||
        act.includes("new")
      ) {
        grp.create = true;
        matched = true;
      }
      if (
        act.includes("edit") ||
        act.includes("update") ||
        act.includes("put") ||
        act.includes("patch") ||
        act.includes("modify")
      ) {
        grp.edit = true;
        matched = true;
      }
      if (
        act.includes("delete") ||
        act.includes("destroy") ||
        act.includes("remove")
      ) {
        grp.delete = true;
        matched = true;
      }
      if (act.includes("manage") || act === "all") {
        grp.view = true;
        grp.create = true;
        grp.edit = true;
        grp.delete = true;
        matched = true;
      }

      if (!matched && !grp.otherActions.includes(item.permission_name)) {
        grp.otherActions.push(item.permission_name);
      }
    });

    const result = Array.from(groupMap.values()).map((grp) => {
      if (isSuperAdmin) {
        grp.view = true;
        grp.create = true;
        grp.edit = true;
        grp.delete = true;
      }
      grp.grantedCount =
        (grp.view ? 1 : 0) +
        (grp.create ? 1 : 0) +
        (grp.edit ? 1 : 0) +
        (grp.delete ? 1 : 0) +
        grp.otherActions.length;
      return grp;
    });

    result.sort((a, b) => a.displayName.localeCompare(b.displayName));
    return result;
  }

  // Handle object-based permissions (legacy matrix)
  if (rawPerms && typeof rawPerms === "object" && !Array.isArray(rawPerms)) {
    return Object.entries(rawPerms).map(([key, value]: [string, any]) => {
      const isObj = value && typeof value === "object";
      const view = isSuperAdmin || (isObj && Boolean(value.view));
      const create = isSuperAdmin || (isObj && Boolean(value.create));
      const edit = isSuperAdmin || (isObj && Boolean(value.edit));
      const del = isSuperAdmin || (isObj && Boolean(value.delete));
      return {
        groupKey: key.toLowerCase(),
        displayName: formatGroupDisplayName(key),
        view,
        create,
        edit,
        delete: del,
        otherActions: [],
        permissions: [],
        grantedCount: (view ? 1 : 0) + (create ? 1 : 0) + (edit ? 1 : 0) + (del ? 1 : 0),
        totalCount: 4,
      };
    });
  }

  // Fallback if super admin with no permissions returned
  if (isSuperAdmin) {
    return SECTIONS.map((section) => ({
      groupKey: section.toLowerCase(),
      displayName: section,
      view: true,
      create: true,
      edit: true,
      delete: true,
      otherActions: [],
      permissions: [],
      grantedCount: 4,
      totalCount: 4,
    }));
  }

  return [];
}

export function parsePermissionsToMatrix(
  rawPerms: any,
  roleName?: string,
  roleType?: string
): PermissionsMatrix {
  const matrix: PermissionsMatrix = SECTIONS.reduce((acc, s) => {
    acc[s] = { view: false, edit: false, delete: false, create: false };
    return acc;
  }, {} as PermissionsMatrix);

  let parsed = rawPerms;
  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      parsed = null;
    }
  }

  const nameLower = String(roleName || "").toLowerCase();
  const isSuperAdmin =
    nameLower.includes("super admin") ||
    nameLower === "superadmin";

  if (Array.isArray(parsed)) {
    parsed.forEach((perm: any) => {
      if (!perm) return;
      const groupStr = String(perm.group || perm.section || "").toLowerCase();
      const actionStr = String(perm.permission_name || perm.name || "").toLowerCase();

      let targetSection: string | undefined;
      if (groupStr.includes("developer")) targetSection = "Developers";
      else if (groupStr.includes("project")) targetSection = "Projects";
      else if (groupStr.includes("propert")) targetSection = "Properties";
      else if (groupStr.includes("ad")) targetSection = "Ads";
      else if (groupStr.includes("role")) targetSection = "Roles";
      else if (groupStr.includes("user")) targetSection = "Users";
      else if (groupStr.includes("expert")) targetSection = "Experts";

      if (targetSection && matrix[targetSection]) {
        if (
          actionStr.includes("view") ||
          actionStr.includes("read") ||
          actionStr.includes("show") ||
          actionStr.includes("index") ||
          actionStr.includes("get")
        ) {
          matrix[targetSection].view = true;
        }
        if (
          actionStr.includes("create") ||
          actionStr.includes("add") ||
          actionStr.includes("store") ||
          actionStr.includes("post")
        ) {
          matrix[targetSection].create = true;
        }
        if (
          actionStr.includes("edit") ||
          actionStr.includes("update") ||
          actionStr.includes("put") ||
          actionStr.includes("patch")
        ) {
          matrix[targetSection].edit = true;
        }
        if (
          actionStr.includes("delete") ||
          actionStr.includes("destroy") ||
          actionStr.includes("remove")
        ) {
          matrix[targetSection].delete = true;
        }
        if (actionStr.includes("manage") || actionStr === "all") {
          matrix[targetSection].view = true;
          matrix[targetSection].edit = true;
          matrix[targetSection].delete = true;
          matrix[targetSection].create = true;
        }
      }
    });

    if (isSuperAdmin) {
      SECTIONS.forEach((s) => {
        ACTIONS.forEach((act) => {
          matrix[s][act] = true;
        });
      });
    }

    return matrix;
  }

  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    SECTIONS.forEach((section) => {
      const matchingKey = Object.keys(parsed).find(
        (k) => k.toLowerCase() === section.toLowerCase()
      );
      if (matchingKey && typeof parsed[matchingKey] === "object") {
        ACTIONS.forEach((action) => {
          const val = parsed[matchingKey]?.[action];
          matrix[section][action] =
            val === true || val === 1 || val === "1" || val === "true";
        });
      } else if (isSuperAdmin) {
        ACTIONS.forEach((action) => {
          matrix[section][action] = true;
        });
      }
    });
    return matrix;
  }

  if (isSuperAdmin) {
    SECTIONS.forEach((s) => {
      ACTIONS.forEach((act) => {
        matrix[s][act] = true;
      });
    });
  }

  return matrix;
}

function countPermissions(perms: any): number {
  if (!perms) return 0;
  if (Array.isArray(perms)) return perms.length;
  if (typeof perms === "object") {
    let count = 0;
    Object.values(perms).forEach((section) => {
      if (section && typeof section === "object") {
        Object.values(section).forEach((val) => {
          if (val === true || val === 1 || val === "1" || val === "true") count++;
        });
      }
    });
    return count;
  }
  return 0;
}

export function mapRole(role: any): Role {
  const rawList = extractPermissionsList(
    role.permissions ?? role.raw_permissions ?? role.permission_ids ?? role.default_permissions
  );
  const matrixPerms = parsePermissionsToMatrix(
    role.permissions ?? role.default_permissions,
    role.role_name ?? role.name,
    role.role_type ?? role.user_type
  );

  const rawRoleType = String(role.role_type || role.user_type || "").toLowerCase();
  let resolvedRoleType = rawRoleType;
  if (!resolvedRoleType) {
    const rId = Number(role.role_id ?? role.id);
    const rName = String(role.role_name ?? role.name ?? "").toLowerCase();
    if (rId === 4 || rName.includes("expert")) {
      resolvedRoleType = "expert";
    } else if (rId === 3 || rName.includes("developer")) {
      resolvedRoleType = "developer";
    } else if (rName.includes("admin")) {
      resolvedRoleType = "admin";
    } else {
      resolvedRoleType = "admin";
    }
  }

  const nameLower = String(role.role_name ?? role.name ?? "").toLowerCase();
  const isSuperAdmin =
    nameLower.includes("super admin") || nameLower === "superadmin";

  const matrixCount = countPermissions(matrixPerms);

  let finalCount = 0;
  if (rawList.length > 0) {
    finalCount = rawList.length;
  } else if (
    role.permissions_count !== undefined &&
    role.permissions_count !== null &&
    Number(role.permissions_count) > 0
  ) {
    finalCount = Number(role.permissions_count);
  } else if (isSuperAdmin) {
    finalCount = matrixCount;
  } else if (matrixCount > 0) {
    finalCount = matrixCount;
  }

  return {
    role_id: role.role_id ?? role.id ?? 0,
    role_name: role.role_name ?? role.name ?? "Role",
    role_type: resolvedRoleType,
    description: role.description
      ? Array.isArray(role.description)
        ? role.description
        : [role.description]
      : ["No specific description"],
    users_count: Number(role.users_count ?? 0),
    is_active: role.is_active !== undefined ? Boolean(role.is_active) : true,
    is_default: role.is_default,
    created_at: role.created_at ?? "",
    default_permissions: role.default_permissions ?? null,
    deleted_at: role.deleted_at ?? null,
    updated_at: role.updated_at ?? "",
    permissions: matrixPerms,
    raw_permissions: rawList,
    permissions_count: finalCount,
  };
}
