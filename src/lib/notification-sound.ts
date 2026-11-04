export type SoundCategory = "success" | "error" | "warning" | "info" | "message" | "system";

export const SOUND_CATEGORIES: SoundCategory[] = ["message", "system", "success", "error", "warning", "info"];

export interface SoundSettings {
  enabled: boolean;
  volume: number;
  categories: Record<SoundCategory, boolean>;
}

const STORAGE_KEY = "notification-sound-settings";
const MIN_GAP_MS = 350;

const PRIORITY: Record<SoundCategory, number> = {
  error: 6,
  message: 5,
  system: 4,
  warning: 3,
  success: 2,
  info: 1,
};

const DEFAULT_SETTINGS: SoundSettings = {
  enabled: true,
  volume: 0.6,
  categories: { success: true, error: true, warning: true, info: true, message: true, system: true },
};

type Note = { freq: number; start: number; duration: number; type?: OscillatorType; glideTo?: number; gain?: number };

const TONES: Record<SoundCategory, Note[]> = {
  success: [
    { freq: 659.25, start: 0, duration: 0.14 },
    { freq: 880, start: 0.1, duration: 0.22 },
  ],
  error: [
    { freq: 440, start: 0, duration: 0.16, type: "triangle" },
    { freq: 311.13, start: 0.14, duration: 0.28, type: "triangle" },
  ],
  warning: [
    { freq: 523.25, start: 0, duration: 0.12, type: "triangle" },
    { freq: 523.25, start: 0.18, duration: 0.14, type: "triangle" },
  ],
  info: [{ freq: 783.99, start: 0, duration: 0.2, gain: 0.8 }],
  message: [{ freq: 587.33, start: 0, duration: 0.38, glideTo: 880 }],
  system: [
    { freq: 880, start: 0, duration: 0.6 },
    { freq: 1318.5, start: 0, duration: 0.45, gain: 0.35 },
  ],
};

let settings: SoundSettings = DEFAULT_SETTINGS;
let settingsLoaded = false;
const listeners = new Set<() => void>();

let audioContext: AudioContext | null = null;
let userInteracted = false;
let lastPlayedAt = 0;

function loadSettings(): SoundSettings {
  if (settingsLoaded || typeof window === "undefined") return settings;
  settingsLoaded = true;
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (stored && typeof stored === "object") {
      settings = {
        enabled: typeof stored.enabled === "boolean" ? stored.enabled : DEFAULT_SETTINGS.enabled,
        volume: typeof stored.volume === "number" ? Math.min(1, Math.max(0, stored.volume)) : DEFAULT_SETTINGS.volume,
        categories: { ...DEFAULT_SETTINGS.categories, ...(stored.categories || {}) },
      };
    }
  } catch {
  }
  return settings;
}

export function getSoundSettings(): SoundSettings {
  return loadSettings();
}

export function getServerSoundSettings(): SoundSettings {
  return DEFAULT_SETTINGS;
}

export function subscribeSoundSettings(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function updateSoundSettings(patch: Partial<Omit<SoundSettings, "categories">> & { categories?: Partial<Record<SoundCategory, boolean>> }) {
  const current = loadSettings();
  settings = {
    ...current,
    ...patch,
    categories: { ...current.categories, ...(patch.categories || {}) },
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
  }
  listeners.forEach((listener) => listener());
}

function hasUserActivation(): boolean {
  if (userInteracted) return true;
  const activation = typeof navigator !== "undefined" ? (navigator as any).userActivation : undefined;
  return !!activation?.hasBeenActive;
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (audioContext) return audioContext;
  if (!hasUserActivation()) return null;
  const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioCtx) return null;
  try {
    audioContext = new AudioCtx();
  } catch {
    audioContext = null;
  }
  return audioContext;
}

/** Browsers only allow audio after a user gesture; resume the shared context on the first one. */
export function installAudioUnlock(): () => void {
  if (typeof window === "undefined") return () => {};
  const unlock = () => {
    userInteracted = true;
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {});
    cleanup();
  };
  const cleanup = () => {
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
  };
  window.addEventListener("pointerdown", unlock, { once: true });
  window.addEventListener("keydown", unlock, { once: true });
  return cleanup;
}

function renderTone(ctx: AudioContext, notes: Note[], volume: number) {
  const now = ctx.currentTime + 0.01;
  const master = ctx.createGain();
  master.gain.value = volume * 0.35;
  master.connect(ctx.destination);

  for (const note of notes) {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    const start = now + note.start;
    const end = start + note.duration;
    const peak = note.gain ?? 1;

    osc.type = note.type ?? "sine";
    osc.frequency.setValueAtTime(note.freq, start);
    if (note.glideTo) osc.frequency.exponentialRampToValueAtTime(note.glideTo, start + note.duration * 0.35);

    env.gain.setValueAtTime(0.0001, start);
    env.gain.linearRampToValueAtTime(peak, start + 0.015);
    env.gain.exponentialRampToValueAtTime(0.0001, end);

    osc.connect(env);
    env.connect(master);
    osc.start(start);
    osc.stop(end + 0.02);
    osc.onended = () => {
      osc.disconnect();
      env.disconnect();
    };
  }
  window.setTimeout(() => master.disconnect(), (Math.max(...notes.map((n) => n.start + n.duration)) + 0.2) * 1000);
}

/**
 * Plays the sound for one notification category, honouring the user's settings and
 * the browser's autoplay rules. Calls closer together than MIN_GAP_MS are merged.
 */
export function playNotificationSound(category: SoundCategory, options: { force?: boolean } = {}) {
  const current = loadSettings();
  if (!options.force && (!current.enabled || !current.categories[category] || current.volume <= 0)) return;

  const nowMs = Date.now();
  if (!options.force && nowMs - lastPlayedAt < MIN_GAP_MS) return;

  const ctx = getAudioContext();
  if (!ctx) return;
  lastPlayedAt = nowMs;

  const play = () => {
    try {
      renderTone(ctx, TONES[category], options.force && current.volume <= 0 ? 0.6 : current.volume);
    } catch {
    }
  };
  if (ctx.state === "suspended") {
    ctx.resume().then(play).catch(() => {});
  } else {
    play();
  }
}

export function pickLoudestCategory(categories: SoundCategory[]): SoundCategory | null {
  return categories.reduce<SoundCategory | null>(
    (best, category) => (!best || PRIORITY[category] > PRIORITY[best] ? category : best),
    null
  );
}
