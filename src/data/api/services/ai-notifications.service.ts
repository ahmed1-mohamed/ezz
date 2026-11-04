import { apiClient2, fetchData, postData } from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchAiConversations = (token: string, params?: string) =>
  fetchData(`/ai/conversations${params ? `?${params}` : ""}`, token);

export const fetchAiTemplates = (token: string) =>
  fetchData("/ai/templates", token);

export const addAiTemplate = (
  templateData: {
    name: string;
    content: string;
    description?: string;
  },
  token: string,
) => postData("/ai/templates", templateData, token);

export const fetchNotifications = async (token: string, params?: string) => {
  try {
    const url = `${ENDPOINTS.COMMON.NOTIFICATIONS}${params ? `?${params}` : ""}`;
    const res = await apiClient2.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch notifications with apiClient2, trying fallback:", error);
    return fetchData(`${ENDPOINTS.COMMON.NOTIFICATIONS}${params ? `?${params}` : ""}`, token);
  }
};

export const searchNotifications = (
  searchData: { keyword: string; per_page: number; cursor?: string },
  token: string,
) => postData("/notifications/search", searchData, token);

export const markNotificationAsRead = async (token: string, notificationId?: number | string) => {
  try {
    const res = await apiClient2.post(
      "/mark-notification-as-read",
      notificationId ? { notification_id: notificationId } : {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to mark notification as read with apiClient2, trying fallback:", error);
    return postData("/mark-notification-as-read", notificationId ? { notification_id: notificationId } : {}, token);
  }
};

export const fetchActivityLogs = (token: string, params?: string) =>
  fetchData(`/activityLogs${params ? `?${params}` : ""}`, token);

export const searchActivityLogs = (
  searchData: { keyword: string; per_page: number; page: number },
  token: string,
) => postData("/activityLogs", searchData, token);
