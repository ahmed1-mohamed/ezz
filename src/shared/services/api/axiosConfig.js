import axios from 'axios';
import toast from 'react-hot-toast';
import { getCookie, setCookie, deleteCookie } from '@/shared/utils/cookieUtils.js';

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
  } catch (_) {
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

    if (error.response?.status === 403) {
      return Promise.reject(error);
    }

    if (error.response?.status === 502 || error.response?.status === 503 || error.response?.status === 504) {
      if (originalRequest && (!originalRequest._gatewayRetryCount || originalRequest._gatewayRetryCount < 3)) {
        originalRequest._gatewayRetryCount = (originalRequest._gatewayRetryCount || 0) + 1;
        const delayMs = originalRequest._gatewayRetryCount * 1000;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return api(originalRequest);
      }
    }

    if (error.response?.status === 429) {
      if (originalRequest && (!originalRequest._rateLimitRetryCount || originalRequest._rateLimitRetryCount < 2)) {
        originalRequest._rateLimitRetryCount = (originalRequest._rateLimitRetryCount || 0) + 1;
        const delayMs = originalRequest._rateLimitRetryCount * 1200;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return api(originalRequest);
      }
      toast.error('تم تجاوز الحد المسموح من الطلبات، يرجى الانتظار قليلاً والمحاولة لاحقاً', { id: 'rate-limit-error', duration: 4000 });
      return Promise.reject(error);
    }

    if (error.response?.status === 400) {
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

      const formatErrorMsg = (msg) => {
        if (typeof msg !== 'string') return 'حدث خطأ في البيانات المدخلة';
        if (msg.includes('FEATURE_ITEM_LENGTH') || msg.includes('feature_item_length')) {
          return 'يجب أن لا يقل طول نص كل ميزة عن 3 أحرف';
        }
        return msg;
      };

      if (Array.isArray(msgs)) {
        msgs.forEach(msg => toast.error(formatErrorMsg(msg), { duration: 5000 }));
        if (msgs.length > 0) focusInputByError(msgs[0]);
      } else if (typeof msgs === 'string') {
        toast.error(formatErrorMsg(msgs), { duration: 5000 });
        focusInputByError(msgs);
      } else if (typeof msgs === 'object' && msgs !== null) {
        const text = msgs.ar || msgs.en || JSON.stringify(msgs);
        toast.error(formatErrorMsg(text), { duration: 5000 });
      } else {
        toast.error('حدث خطأ في البيانات المدخلة', { duration: 5000 });
      }
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
  if (config.skipCache || config.forceRefresh) {
    return originalGet(url, config);
  }

  const key = generateRequestKey({ ...config, url, method: 'get' });

  const cached = shortTermCache.get(key);
  if (cached && Date.now() < cached.expiresAt) {
    return Promise.resolve(cloneResponse(cached.response));
  }

  if (inFlightRequests.has(key)) {
    return inFlightRequests.get(key).then((res) => cloneResponse(res));
  }

  const promise = originalGet(url, config)
    .then((res) => {
      shortTermCache.set(key, {
        response: res,
        expiresAt: Date.now() + 2500,
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

  if (config.skipCache || config.forceRefresh) {
    return originalRequest(urlOrConfig, maybeConfig);
  }

  const key = generateRequestKey(config);

  const cached = shortTermCache.get(key);
  if (cached && Date.now() < cached.expiresAt) {
    return Promise.resolve(cloneResponse(cached.response));
  }

  if (inFlightRequests.has(key)) {
    return inFlightRequests.get(key).then((res) => cloneResponse(res));
  }

  const promise = originalRequest(urlOrConfig, maybeConfig)
    .then((res) => {
      shortTermCache.set(key, {
        response: res,
        expiresAt: Date.now() + 2500,
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
