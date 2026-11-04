import Redis, { RedisOptions } from "ioredis";

declare global {
  var redisClient: Redis | undefined;
  var redisMemoryStore: Map<string, { value: string; expiresAt?: number }> | undefined;
  var redisErrorLogged: boolean | undefined;
}

const memoryStore: Map<string, { value: string; expiresAt?: number }> =
  (globalThis.redisMemoryStore ??= new Map());

function getMemory(key: string): string | null {
  const entry = memoryStore.get(key);
  if (!entry) return null;
  if (entry.expiresAt && Date.now() > entry.expiresAt) {
    memoryStore.delete(key);
    return null;
  }
  return entry.value;
}

function setMemory(key: string, value: string, ttlSeconds?: number): void {
  const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined;
  memoryStore.set(key, { value, expiresAt });
}

function delMemory(keys: string[]): void {
  keys.forEach((k) => memoryStore.delete(k));
}

function existsMemory(key: string): boolean {
  return getMemory(key) !== null;
}

function incrMemory(key: string): number {
  const currentVal = getMemory(key);
  const num = currentVal ? parseInt(currentVal, 10) || 0 : 0;
  const nextVal = num + 1;
  const entry = memoryStore.get(key);
  memoryStore.set(key, { value: String(nextVal), expiresAt: entry?.expiresAt });
  return nextVal;
}

function expireMemory(key: string, ttlSeconds: number): void {
  const entry = memoryStore.get(key);
  if (entry) {
    entry.expiresAt = Date.now() + ttlSeconds * 1000;
  }
}

function ttlMemory(key: string): number {
  const entry = memoryStore.get(key);
  if (!entry) return -2;
  if (!entry.expiresAt) return -1;
  const remaining = Math.ceil((entry.expiresAt - Date.now()) / 1000);
  if (remaining <= 0) {
    memoryStore.delete(key);
    return -2;
  }
  return remaining;
}

let isRedisConnected = false;

function createRedisClient(): Redis {
  const url = process.env.REDIS_URL || "redis://localhost:6379";

  const options: RedisOptions = {
    maxRetriesPerRequest: 1,
    enableReadyCheck: true,
    lazyConnect: true,
    enableOfflineQueue: false,
    connectTimeout: 2000,
    retryStrategy(times: number) {
      if (times > 2) {
        if (!globalThis.redisErrorLogged) {
          console.warn("[Redis] ⚠️ Redis server is offline. Falling back to in-memory store for dev.");
          globalThis.redisErrorLogged = true;
        }
        return null;
      }
      return 1000;
    },
  };

  const client = new Redis(url, options);

  client.on("connect", () => {
    isRedisConnected = true;
    globalThis.redisErrorLogged = false;
    console.log("[Redis] ✅ Connected successfully");
  });

  client.on("error", (err: Error) => {
    isRedisConnected = false;
    if (!globalThis.redisErrorLogged) {
      console.warn(`[Redis] ⚠️ Connection notice: ${err.message}. Using in-memory fallback.`);
      globalThis.redisErrorLogged = true;
    }
  });

  client.on("close", () => {
    isRedisConnected = false;
  });

  client.connect().catch(() => { });

  return client;
}

const redis: Redis =
  process.env.NODE_ENV === "production"
    ? createRedisClient()
    : (globalThis.redisClient ??= createRedisClient());

export default redis;


export function isRedisAvailable(): boolean {
  return isRedisConnected;
}


export async function redisSet(
  key: string,
  value: string,
  ttlSeconds?: number
): Promise<void> {
  try {
    if (isRedisConnected) {
      if (ttlSeconds) {
        await redis.set(key, value, "EX", ttlSeconds);
      } else {
        await redis.set(key, value);
      }
      return;
    }
  } catch { }
  setMemory(key, value, ttlSeconds);
}


export async function redisGet(key: string): Promise<string | null> {
  try {
    if (isRedisConnected) {
      return await redis.get(key);
    }
  } catch { }
  return getMemory(key);
}


export async function redisSetJson<T>(
  key: string,
  value: T,
  ttlSeconds?: number
): Promise<void> {
  const serialized = JSON.stringify(value);
  await redisSet(key, serialized, ttlSeconds);
}

export async function redisGetJson<T>(key: string): Promise<T | null> {
  const value = await redisGet(key);
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}


export async function redisDel(key: string | string[]): Promise<void> {
  const keys = Array.isArray(key) ? key : [key];
  try {
    if (isRedisConnected && keys.length > 0) {
      await redis.del(...keys);
      return;
    }
  } catch { }
  delMemory(keys);
}


export async function redisExists(key: string): Promise<boolean> {
  try {
    if (isRedisConnected) {
      const result = await redis.exists(key);
      return result === 1;
    }
  } catch { }
  return existsMemory(key);
}


export async function redisIncr(key: string): Promise<number> {
  try {
    if (isRedisConnected) {
      return await redis.incr(key);
    }
  } catch { }
  return incrMemory(key);
}


export async function redisExpire(
  key: string,
  ttlSeconds: number
): Promise<void> {
  try {
    if (isRedisConnected) {
      await redis.expire(key, ttlSeconds);
      return;
    }
  } catch { }
  expireMemory(key, ttlSeconds);
}

export async function redisTtl(key: string): Promise<number> {
  try {
    if (isRedisConnected) {
      return await redis.ttl(key);
    }
  } catch { }
  return ttlMemory(key);
}


export async function redisRemember<T>(
  key: string,
  ttlSeconds: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = await redisGetJson<T>(key);
  if (cached !== null) {
    return cached;
  }

  const fresh = await fetcher();
  if (fresh !== undefined && fresh !== null) {
    await redisSetJson(key, fresh, ttlSeconds);
  }

  return fresh;
}