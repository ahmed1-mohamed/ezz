/**
 * Google Authentication Service
 * Integrates Google Identity Services (GIS) for Login, Account Linking, and Unlinking.
 */

export const GOOGLE_CLIENT_ID = '871377694681-7afrn0hvc1ter1a121nlj5eu10sch44q.apps.googleusercontent.com';
export const GOOGLE_SCRIPT_URL = 'https://accounts.google.com/gsi/client';
export const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

let scriptPromise = null;

/**
 * Loads the Google Identity Services client script dynamically if not present.
 * @returns {Promise<object>} Google accounts API object
 */
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

/**
 * Decodes a Google JWT credential token payload.
 * @param {string} token - Base64 encoded JWT
 * @returns {object|null} Decoded JSON payload or null
 */
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

/**
 * Triggers Google OAuth popup using Token Client and fetches the user profile.
 * Resolves with googleId (sub), email, name, and image.
 * @returns {Promise<{googleId: string, email: string, name: string, image: string, accessToken: string}>}
 */
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

/**
 * Renders the official Google Sign-In button into a container element.
 * @param {HTMLElement} container - DOM container
 * @param {Function} onCredentialSuccess - Callback with decoded user data
 * @param {object} options - Optional button appearance options
 */
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
