
const localBlobMap = new Map<string, string>();

const STORAGE_PREFIX = "chat_media_cache_";

export function storeLocalBlobUrl(key: string | number | null | undefined, blobUrl: string | null | undefined) {
  if (!key || !blobUrl) return;
  const strKey = String(key);
  localBlobMap.set(strKey, blobUrl);

  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      if (blobUrl.startsWith("data:") || blobUrl.startsWith("http")) {
        sessionStorage.setItem(`${STORAGE_PREFIX}${strKey}`, blobUrl);
      }
    }
  } catch {
  }
}

export function getLocalBlobUrl(key: string | number | null | undefined): string | null {
  if (!key) return null;
  const strKey = String(key);

  const inMemory = localBlobMap.get(strKey);
  if (inMemory) return inMemory;

  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const persisted = sessionStorage.getItem(`${STORAGE_PREFIX}${strKey}`);
      if (persisted) {
        localBlobMap.set(strKey, persisted);
        return persisted;
      }
    }
  } catch { }

  return null;
}

export async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}
