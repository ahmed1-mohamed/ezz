import {
  redisIncr,
  redisExpire,
  redisTtl,
  redisSet,
  redisExists,
} from "./redis";

export interface RateLimitConfig {
  keyPrefix: string;
  identifier: string;
  maxRequests: number;
  windowSeconds: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
  limit: number;
}

export async function rateLimit(
  config: RateLimitConfig
): Promise<RateLimitResult> {
  const { keyPrefix, identifier, maxRequests, windowSeconds } = config;

  const safeId = identifier.replace(/[^a-zA-Z0-9@._-]/g, "_");
  const key = `rate_limit:${keyPrefix}:${safeId}`;

  try {
    const current = await redisIncr(key);

    if (current === 1) {
      await redisExpire(key, windowSeconds);
    }

    const ttl = await redisTtl(key);

    const allowed = current <= maxRequests;
    const remaining = Math.max(0, maxRequests - current);

    return {
      allowed,
      remaining,
      retryAfter: allowed ? 0 : Math.max(0, ttl),
      limit: maxRequests,
    };
  } catch (err) {
    console.error("[RateLimit] Error – failing open:", err);
    return {
      allowed: true,
      remaining: maxRequests,
      retryAfter: 0,
      limit: maxRequests,
    };
  }
}

export async function loginRateLimit(ip: string): Promise<RateLimitResult> {
  return rateLimit({
    keyPrefix: "login",
    identifier: ip,
    maxRequests: 5,
    windowSeconds: 60,
  });
}

export async function refreshRateLimit(ip: string): Promise<RateLimitResult> {
  return rateLimit({
    keyPrefix: "refresh",
    identifier: ip,
    maxRequests: 30,
    windowSeconds: 60,
  });
}

const BLACKLIST_PREFIX = "blacklist:token:";

export async function blacklistToken(
  token: string,
  expiresAt: number
): Promise<void> {
  try {
    const now = Math.floor(Date.now() / 1000);
    const ttl = expiresAt - now;

    if (ttl <= 0) {
      return;
    }

    const tokenHash = simpleHash(token);
    await redisSet(`${BLACKLIST_PREFIX}${tokenHash}`, "1", ttl);

    console.log(`[Redis] 🚫 Token blacklisted (TTL: ${ttl}s)`);
  } catch (err) {
    console.error("[Redis] Failed to blacklist token:", err);
  }
}

export async function isTokenBlacklisted(token: string): Promise<boolean> {
  try {
    const tokenHash = simpleHash(token);
    return await redisExists(`${BLACKLIST_PREFIX}${tokenHash}`);
  } catch (err) {
    console.error("[Redis] Failed to check blacklist:", err);
    return false;
  }
}

function simpleHash(str: string): string {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}