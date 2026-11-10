const configuredBaseUrl = globalThis.__MANARET_CONFIG__?.API_BASE_URL || '';

export const API_BASE_URL = configuredBaseUrl.replace(/\/+$/, '');

export function buildApiAssetUrl(path) {
  if (!path || typeof path !== 'string') return '';
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  return API_BASE_URL + '/' + path.replace(/^\/+/, '');
}

export function isApiAssetUrl(value) {
  if (!value || typeof value !== 'string' || !API_BASE_URL) return false;
  try {
    return new URL(value).origin === new URL(API_BASE_URL).origin;
  } catch {
    return false;
  }
}
