import axios from 'axios';
import { getCookie, setCookie, deleteCookie } from '@/shared/utils/cookieUtils.js';
import { showSafeErrorToast } from '@/shared/utils/errorHandler.js';

const inFlightRequests = new Map();
const shortTermCache = new Map();

function generateRequestKey(config = {}) {
  const url = config.url || '';
  const lang = localStorage.getItem('appLanguage') || 'ar';
  const effectiveParams = { ...(config.params || {}) };
  const sortedParamKeys = Object.keys(effectiveParams).sort();
  const serializedParams = sortedParamKeys.map((k) => {
    const val = effectiveParams[k];
    return `${k}=${typeof val === 'object' && val !== null ? JSON.stringify(val) : String(val)}`;
  }).join('&');
  const token = getCookie('access_token') || '';
  return `${url}?${serializedParams}#token=${token}#lang=${lang}`;
}

function cloneResponse(res) {
  if (!res) return res;
  let clonedData = res.data;
  try {
    if (typeof structuredClone === 'function') {
      clonedData = structuredClone(res.data);
    } else if (res.data !== undefined) {
      clonedData = JSON.parse(JSON.stringify(res.data));
    }
  } catch {
    clonedData = res.data;
  }
  return {
    ...res,
    data: clonedData,
  };
}

export function clearApiCache() {
  shortTermCache.clear();
  inFlightRequests.clear();
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://manaret-ezz.dramcode.top',
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const lang = localStorage.getItem('appLanguage') || 'ar';
    config.headers['Accept-Language'] = lang;

    const token = getCookie('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const apiKey = localStorage.getItem('x_api_key');
    if (apiKey) {
      config.headers['X-API-KEY'] = apiKey;
    }
    const secret = localStorage.getItem('secret');
    if (secret) {
      config.headers['Secret'] = secret;
    }

    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }

    if (config.params) {
      delete config.params.forceRefresh;
      delete config.params.skipCache;
    }
    if (config.data && typeof config.data === 'object' && !(config.data instanceof FormData)) {
      delete config.data.forceRefresh;
      delete config.data.skipCache;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    let newToken =
      response.headers?.['x-new-access-token'] ||
      response.headers?.['X-New-Access-Token'] ||
      response.headers?.['x-access-token'] ||
      response.headers?.['X-Access-Token'];

    const exposeHeader =
      response.headers?.['access-control-expose-headers'] ||
      response.headers?.['Access-Control-Expose-Headers'];
    if (!newToken && exposeHeader && typeof exposeHeader === 'string' && exposeHeader.length > 20 && !exposeHeader.includes(',')) {
      newToken = exposeHeader.trim();
    }

    if (newToken) {
      setCookie('access_token', newToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    }
    return response;
  },
  async (error) => {
    const errToken =
      error.response?.headers?.['x-new-access-token'] ||
      error.response?.headers?.['X-New-Access-Token'] ||
      error.response?.headers?.['x-access-token'];
    if (errToken) {
      setCookie('access_token', errToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${errToken}`;
    }

    const originalRequest = error.config;

    if (error.response?.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = getCookie('refresh_token');
        if (refreshToken) {
          try {
            const lang = localStorage.getItem('appLanguage') || 'ar';
            const headers = {
              'Authorization': `Bearer ${refreshToken}`,
            };

            const apiKey = localStorage.getItem('x_api_key');
            if (apiKey) headers['X-API-KEY'] = apiKey;
            const secret = localStorage.getItem('secret');
            if (secret) headers['Secret'] = secret;

            const res = await axios.post(
              `${api.defaults.baseURL}/api/v1/auth/refresh-token`,
              {},
              {
                params: { lang },
                headers
              }
            );

            const newAccess = res.data?.token || res.data?.accessToken || res.data?.access_token || res.data?.data?.token;
            const newRefresh = res.data?.refresh_token || res.data?.refreshToken || res.data?.data?.refresh_token;

            if (newAccess) {
              setCookie('access_token', newAccess);
              if (newRefresh) {
                setCookie('refresh_token', newRefresh);
              }
              api.defaults.headers.common['Authorization'] = `Bearer ${newAccess}`;
              originalRequest.headers['Authorization'] = `Bearer ${newAccess}`;
              return api(originalRequest);
            }
          } catch (refreshError) {
            clearApiCache();
            deleteCookie('access_token');
            deleteCookie('refresh_token');
            deleteCookie('authUser');
            if (window.location.pathname.startsWith('/dashboard')) {
              window.location.href = '/login';
            }
            return Promise.reject(refreshError);
          }
        }
      }

      clearApiCache();
      deleteCookie('access_token');
      deleteCookie('refresh_token');
      deleteCookie('authUser');
      if (window.location.pathname.startsWith('/dashboard')) {
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }

    const status = error.response?.status;
    const isArabic = (localStorage.getItem('appLanguage') || 'ar') === 'ar';

    if (status === 403) {
      if (!originalRequest?.silent && !originalRequest?.skipGlobalErrorToast) {
        showSafeErrorToast(error, { status: 403, isArabic });
      }
      return Promise.reject(error);
    }

    if (status === 404) {
      if (!originalRequest?.silent && !originalRequest?.skipGlobalErrorToast) {
        showSafeErrorToast(error, { status: 404, isArabic });
      }
      return Promise.reject(error);
    }

    if (status === 502 || status === 503 || status === 504) {
      if (originalRequest && (!originalRequest._gatewayRetryCount || originalRequest._gatewayRetryCount < 1)) {
        originalRequest._gatewayRetryCount = (originalRequest._gatewayRetryCount || 0) + 1;
        const delayMs = 400;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return api(originalRequest);
      }
      // Never show server error leaks or status codes
      error.message = isArabic
        ? 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً'
        : 'An unexpected error occurred. Please try again later.';
      return Promise.reject(error);
    }

    if (status === 429) {
      if (originalRequest && (!originalRequest._rateLimitRetryCount || originalRequest._rateLimitRetryCount < 2)) {
        originalRequest._rateLimitRetryCount = (originalRequest._rateLimitRetryCount || 0) + 1;
        const delayMs = originalRequest._rateLimitRetryCount * 1200;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return api(originalRequest);
      }
      return Promise.reject(error);
    }

    if (status === 400) {
      const data = error.response.data;
      const msgs = data?.message || data?.error || (typeof data === 'string' ? data : null);

      const focusInputByError = (msg) => {
        if (typeof msg !== 'string') return;
        const lowerMsg = msg.toLowerCase();
        
        const mapping = {
          'language': 'sessions_language',
          'اللغة': 'sessions_language',
          'features': 'features',
          'ميزة': 'features',
          'name': 'name',
          'الاسم': 'name',
          'price': 'price',
          'السعر': 'price',
          'sessions': 'sessions_per_month',
          'جلسات': 'sessions_per_month',
          'question': 'question',
          'سؤال': 'question',
          'answer': 'answer',
          'إجابة': 'answer'
        };

        for (const [key, inputId] of Object.entries(mapping)) {
          if (lowerMsg.includes(key)) {
            const el = document.getElementById(inputId) || document.querySelector(`[name="${inputId}"]`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.focus({ preventScroll: true });
              return;
            }
          }
        }
      };

      // Show ONE single sanitized toast, avoiding spamming or stacking multiple messages
      if (!originalRequest?.silent && !originalRequest?.skipGlobalErrorToast) {
        showSafeErrorToast(msgs, { status: 400, isArabic });
      }

      if (Array.isArray(msgs) && msgs.length > 0) {
        focusInputByError(msgs[0]);
      } else if (typeof msgs === 'string') {
        focusInputByError(msgs);
      }
    }

    // Sanitize any remaining technical message on the error object
    if (error.message && /status\s*code|internal\s*server|bad\s*gateway|network\s*error/i.test(error.message)) {
      error.message = isArabic
        ? 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً'
        : 'An unexpected error occurred. Please try again later.';
    }

    return Promise.reject(error);
  }
);

const originalGet = api.get.bind(api);
const originalRequest = api.request.bind(api);
const originalPost = api.post.bind(api);
const originalPut = api.put.bind(api);
const originalPatch = api.patch.bind(api);
const originalDelete = api.delete.bind(api);

api.get = function (url, config = {}) {
  const shouldSkipCache = Boolean(
    config.skipCache ||
    config.forceRefresh ||
    config.params?.skipCache ||
    config.params?.forceRefresh
  );

  let cleanConfig = config;
  if (config.params && (config.params.forceRefresh !== undefined || config.params.skipCache !== undefined)) {
    const { forceRefresh, skipCache, ...restParams } = config.params;
    cleanConfig = { ...config, params: restParams };
  }

  if (shouldSkipCache) {
    return originalGet(url, cleanConfig);
  }

  const key = generateRequestKey({ ...cleanConfig, url, method: 'get' });

  const cached = shortTermCache.get(key);
  if (cached && Date.now() < cached.expiresAt) {
    return Promise.resolve(cloneResponse(cached.response));
  }

  if (inFlightRequests.has(key)) {
    return inFlightRequests.get(key).then((res) => cloneResponse(res));
  }

  const promise = originalGet(url, cleanConfig)
    .then((res) => {
      shortTermCache.set(key, {
        response: res,
        expiresAt: Date.now() + 1500,
      });
      return res;
    })
    .finally(() => {
      inFlightRequests.delete(key);
    });

  inFlightRequests.set(key, promise);
  return promise.then((res) => cloneResponse(res));
};

api.request = function (urlOrConfig, maybeConfig) {
  let config;
  if (typeof urlOrConfig === 'string') {
    config = { ...(maybeConfig || {}), url: urlOrConfig };
  } else {
    config = { ...(urlOrConfig || {}) };
  }

  const method = (config.method || 'get').toLowerCase();

  if (method !== 'get') {
    shortTermCache.clear();
    return originalRequest(urlOrConfig, maybeConfig);
  }

  const shouldSkipCache = Boolean(
    config.skipCache ||
    config.forceRefresh ||
    config.params?.skipCache ||
    config.params?.forceRefresh
  );

  let cleanConfig = config;
  if (config.params && (config.params.forceRefresh !== undefined || config.params.skipCache !== undefined)) {
    const { forceRefresh, skipCache, ...restParams } = config.params;
    cleanConfig = { ...config, params: restParams };
  }

  const targetUrlOrConfig = typeof urlOrConfig === 'string' ? urlOrConfig : cleanConfig;
  const targetMaybeConfig = typeof urlOrConfig === 'string' ? cleanConfig : maybeConfig;

  if (shouldSkipCache) {
    return originalRequest(targetUrlOrConfig, targetMaybeConfig);
  }

  const key = generateRequestKey(cleanConfig);

  const cached = shortTermCache.get(key);
  if (cached && Date.now() < cached.expiresAt) {
    return Promise.resolve(cloneResponse(cached.response));
  }

  if (inFlightRequests.has(key)) {
    return inFlightRequests.get(key).then((res) => cloneResponse(res));
  }

  const promise = originalRequest(targetUrlOrConfig, targetMaybeConfig)
    .then((res) => {
      shortTermCache.set(key, {
        response: res,
        expiresAt: Date.now() + 1500,
      });
      return res;
    })
    .finally(() => {
      inFlightRequests.delete(key);
    });

  inFlightRequests.set(key, promise);
  return promise.then((res) => cloneResponse(res));
};

api.post = function (...args) {
  shortTermCache.clear();
  return originalPost(...args);
};

api.put = function (...args) {
  shortTermCache.clear();
  return originalPut(...args);
};

api.patch = function (...args) {
  shortTermCache.clear();
  return originalPatch(...args);
};

api.delete = function (...args) {
  shortTermCache.clear();
  return originalDelete(...args);
};

export default api;
