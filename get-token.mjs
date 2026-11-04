#!/usr/bin/env node

/**
 * Script to get a new access token from the backend
 * 
 * Usage:
 *   node get-token.mjs <email> <password>
 *   node get-token.mjs --refresh <refreshToken>
 */

const BASE_URL = process.env.API_URL || "https://demoapi.p-adviser.com/api";

const args = process.argv.slice(2);

async function login(email, password) {
  console.log(`\nLogging in to ${BASE_URL}/auth/login with ${email}...\n`);
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Context": "dashboard",
        "country-id": "1",
        "country_id": "1",
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Login failed (Status:", res.status, "):");
      console.error(JSON.stringify(data, null, 2));
      process.exit(1);
    }

    const userData = data.data || data;
    console.log("✅ Successfully logged in!\n");
    console.log("--------------------------------------------------");
    console.log("User:", `${userData.first_name || ""} ${userData.last_name || ""}`.trim() || userData.email);
    console.log("Email:", userData.email);
    console.log("Role:", userData.role?.role_name || userData.role_name || userData.user_type);
    console.log("--------------------------------------------------");
    console.log("Access Token:\n" + (userData.access_token || userData.accessToken));
    console.log("--------------------------------------------------");
    if (userData.refresh_token || userData.refreshToken) {
      console.log("Refresh Token:\n" + (userData.refresh_token || userData.refreshToken));
      console.log("--------------------------------------------------");
    }
    console.log(`Expires in: ${userData.expires_in || 3600} seconds\n`);
  } catch (err) {
    console.error("❌ Network or script error:", err.message);
    process.exit(1);
  }
}

async function refreshToken(token) {
  console.log(`\nRefreshing token at ${BASE_URL}/auth/refresh-token...\n`);
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify({
        refresh_token: token,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Token refresh failed (Status:", res.status, "):");
      console.error(JSON.stringify(data, null, 2));
      process.exit(1);
    }

    console.log("✅ Token refreshed successfully!\n");
    console.log("--------------------------------------------------");
    console.log("New Access Token:\n" + (data.access_token || data.data?.access_token));
    console.log("--------------------------------------------------");
    if (data.refresh_token || data.data?.refresh_token) {
      console.log("New Refresh Token:\n" + (data.refresh_token || data.data?.refresh_token));
      console.log("--------------------------------------------------");
    }
  } catch (err) {
    console.error("❌ Network or script error:", err.message);
    process.exit(1);
  }
}

if (args.length === 0) {
  console.log(`
Usage:
  1) To login with email and password:
     node get-token.mjs <email> <password>

  2) To refresh an existing token:
     node get-token.mjs --refresh <refreshToken>
`);
  process.exit(0);
}

if (args[0] === "--refresh" || args[0] === "-r") {
  if (!args[1]) {
    console.error("❌ Please provide a refresh token.");
    process.exit(1);
  }
  refreshToken(args[1]);
} else {
  if (args.length < 2) {
    console.error("❌ Please provide both email and password.");
    process.exit(1);
  }
  login(args[0], args[1]);
}
