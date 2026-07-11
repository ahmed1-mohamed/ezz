export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
  document.cookie = `${name}=${encodeURIComponent(stringValue)}${expires}; path=/; SameSite=Lax; Secure`;
}

export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      const val = decodeURIComponent(c.substring(nameEQ.length));
      try {
        if ((val.startsWith('{') && val.endsWith('}')) || (val.startsWith('[') && val.endsWith(']'))) {
          return JSON.parse(val);
        }
      } catch (e) {
        // Ignore and return raw string
      }
      return val;
    }
  }
  return null;
}

export function deleteCookie(name) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax; Secure`;
}
