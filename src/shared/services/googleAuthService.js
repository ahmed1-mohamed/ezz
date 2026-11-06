
export const GOOGLE_CLIENT_ID = import.meta.env?.VITE_GOOGLE_CLIENT_ID || '669089500047-98g0u7is9m00d96qrnkk038u5vg4qc27.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = import.meta.env?.VITE_GOOGLE_CLIENT_SECRET || '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';
export const GOOGLE_SCRIPT_URL = 'https://accounts.google.com/gsi/client';
export const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

let scriptPromise = null;

export function loadGoogleScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window environment is not available'));
  }
  if (window.google?.accounts) {
    return Promise.resolve(window.google);
  }
  if (scriptPromise) {
    return scriptPromise;
  }
  scriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${GOOGLE_SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.google));
      existingScript.addEventListener('error', (err) => reject(err));
      return;
    }
    const scriptElement = document.createElement('script');
    scriptElement.src = GOOGLE_SCRIPT_URL;
    scriptElement.async = true;
    scriptElement.defer = true;
    scriptElement.onload = () => resolve(window.google);
    scriptElement.onerror = (errorEvent) => reject(errorEvent);
    document.head.appendChild(scriptElement);
  });
  return scriptPromise;
}

export function decodeGoogleCredential(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((character) => '%' + ('00' + character.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (parseError) {
    console.error('Failed to parse Google JWT credential:', parseError);
    return null;
  }
}

export async function triggerGoogleAuth() {
  await loadGoogleScript();
  return new Promise((resolve, reject) => {
    if (!window.google?.accounts?.oauth2) {
      reject(new Error('Google Identity Services library is not loaded'));
      return;
    }
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'openid email profile',
      callback: async (tokenResponse) => {
        if (tokenResponse.error) {
          reject(new Error(tokenResponse.error_description || tokenResponse.error));
          return;
        }
        try {
          const profileResponse = await fetch(GOOGLE_USERINFO_URL, {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          });
          if (!profileResponse.ok) {
            throw new Error(`Google profile request failed with status ${profileResponse.status}`);
          }
          const profileData = await profileResponse.json();
          resolve({
            googleId: profileData.sub,
            email: profileData.email || '',
            name: profileData.name || '',
            image: profileData.picture || '',
            accessToken: tokenResponse.access_token,
          });
        } catch (fetchError) {
          reject(fetchError);
        }
      },
      error_callback: (errorEvent) => {
        reject(new Error(errorEvent?.message || 'Google popup was closed or cancelled'));
      },
    });
    tokenClient.requestAccessToken({ prompt: 'select_account' });
  });
}

export async function renderGoogleSignInButton(container, onCredentialSuccess, options = {}) {
  await loadGoogleScript();
  if (!window.google?.accounts?.id || !container) {
    return;
  }
  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: (credentialResponse) => {
      const decoded = decodeGoogleCredential(credentialResponse.credential);
      if (decoded && onCredentialSuccess) {
        onCredentialSuccess({
          googleId: decoded.sub,
          email: decoded.email || '',
          name: decoded.name || '',
          image: decoded.picture || '',
          credential: credentialResponse.credential,
        });
      }
    },
  });
  window.google.accounts.id.renderButton(container, {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    shape: 'pill',
    width: options.width || 320,
    text: 'signin_with',
    ...options,
  });
}
