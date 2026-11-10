---
agent_auth:
  register_uri: __API_BASE_URL__/api/oauth/register
  supported_identity_types:
    - email
    - api_key
  supported_credential_types:
    - jwt
    - api_key
  claim_url: https://mezzedu.com/auth.md
  revocation_url: __API_BASE_URL__/api/oauth/revoke
---

# Manarat Al-Ezz auth.md

> **Version**: 1.0.0  
> **Updated**: 2026-08-03  
> **Platform**: Manarat Al-Ezz Educational Platform (`https://mezzedu.com`)

---

## Overview

This document describes how AI agents can register and authenticate with the **Manarat Al-Ezz** platform API at `__API_BASE_URL__/api/`.

---

## Authentication Method

The API uses **OAuth 2.0 / OpenID Connect** (Bearer tokens).

| Property | Value |
|---|---|
| Authorization Server | `__API_BASE_URL__` |
| Token Endpoint | `__API_BASE_URL__/api/oauth/token` |
| Authorization Endpoint | `__API_BASE_URL__/api/oauth/authorize` |
| JWKS URI | `__API_BASE_URL__/api/oauth/jwks` |
| Token Format | JWT (RS256) |

---

## Agent Registration

### Step 1 — Request Client Credentials

Contact the platform administrator to obtain OAuth client credentials:

- **Email**: info@manaratezz.edu.sa
- **Subject**: Agent API Access Request

Provide:
- Agent name and description
- Intended scopes (`read` / `write`)
- Contact email for the agent operator

### Step 2 — Obtain a Token

Use the **client credentials** grant flow:

```http
POST __API_BASE_URL__/api/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&scope=read
```

### Step 3 — Use the Token

Include the token as a `Bearer` header on all API requests:

```http
GET __API_BASE_URL__/api/courses
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## Supported Scopes

| Scope | Description |
|---|---|
| `read` | Read-only access to courses, schedules, and public data |
| `write` | Create/update student records, attendance, and grades |

---

## Machine-Readable Discovery

- **OIDC Config**: `https://mezzedu.com/.well-known/openid-configuration`
- **OAuth AS Metadata**: `https://mezzedu.com/.well-known/oauth-authorization-server`
- **Protected Resource**: `https://mezzedu.com/.well-known/oauth-protected-resource`
- **MCP Server Card**: `https://mezzedu.com/.well-known/mcp/server-card.json`
- **Agent Skills**: `https://mezzedu.com/.well-known/agent-skills/index.json`
- **API Catalog**: `https://mezzedu.com/.well-known/api-catalog`

---

## Rate Limits

Unauthenticated requests: **60 req/hour**  
Authenticated requests: **1,000 req/hour** (per token)

---

## Contact

**Email**: info@manaratezz.edu.sa  
**Organisation**: أكاديمية منارة العز (Manarat Al-Ezz Academy)  
**Website**: https://mezzedu.com/
