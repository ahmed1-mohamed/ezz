export const BASE_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL || "https://demoapi.p-adviser.com";

export const API_BASE_URL: string = `${BASE_URL}/api`;
export const DASHBOARD_API_BASE_URL: string = `${API_BASE_URL}/dashboard`;
export const DASHBOARD_V2_API_BASE_URL: string = `${DASHBOARD_API_BASE_URL}/v2`;
export const IMPORTS_API_BASE_URL: string = `${API_BASE_URL}/imports`;

export default BASE_URL;

