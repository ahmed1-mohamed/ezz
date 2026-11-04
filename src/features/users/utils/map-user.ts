import { User } from "../types";
import { GetUserDataType } from "@/types";
export function unpackUsersResponse(data: unknown): { itemsArray: GetUserDataType[]; totalItems: number } {
  const rawData = (data as { data?: unknown })?.data;
  let itemsArray: GetUserDataType[] = [];

  if (Array.isArray(rawData)) {
    itemsArray = rawData as GetUserDataType[];
  } else {
    const nested = (rawData as { data?: unknown } | undefined)?.data;
    if (Array.isArray(nested)) itemsArray = nested as GetUserDataType[];
  }

  let totalItems = itemsArray.length;
  if (rawData && typeof rawData === "object" && "total" in rawData) {
    totalItems = (rawData as { total: number }).total;
  }

  return { itemsArray, totalItems };
}


export function mapUser(
  user: GetUserDataType,
  labels: { na: string; recently: string } = { na: "N/A", recently: "Recently" },
): User {
  const firstName = user.first_name ?? "";
  const lastName = user.last_name ?? "";
  const fullName = `${firstName} ${lastName}`.trim() || labels.na;

  const computedRoleName = user.role?.role_name || user.role_name || "User";

  return {
    user_id: user.user_id,
    name: fullName,
    profile_picture: user.profile_picture || "U",
    role_name: computedRoleName,
    user_type: user.user_type || user.role?.role_name?.toLowerCase() || "user",
    email: user.email || labels.na,
    lastLogin: labels.recently,
    status:
      user.status === "active"
        ? "Active"
        : user.status === "inactive"
          ? "Inactive"
          : "Suspended",
  };
}
