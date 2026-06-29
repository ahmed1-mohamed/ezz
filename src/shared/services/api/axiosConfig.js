import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://manaret-ezz.dramcode.top',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const lang = localStorage.getItem('appLanguage') || 'ar';
    config.params = {
      ...config.params,
      lang,
    };

    const token = localStorage.getItem('access_token');
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

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem('refresh_token');
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
              localStorage.setItem('access_token', newAccess);
              if (newRefresh) {
                localStorage.setItem('refresh_token', newRefresh);
              }
              api.defaults.headers.common['Authorization'] = `Bearer ${newAccess}`;
              originalRequest.headers['Authorization'] = `Bearer ${newAccess}`;
              return api(originalRequest);
            }
          } catch (refreshError) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('authUser');
            sessionStorage.removeItem('authUser');
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }
      }

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('authUser');
      sessionStorage.removeItem('authUser');
      window.location.href = '/login';
      return Promise.reject(error);
    }

    if (error.response?.status === 403) {
      window.location.href = '/unauthorized?status=403';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api;
