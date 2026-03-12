# SPEC-001: Security Hardening & Repo Hygiene

**Sprint:** 1
**Severity:** CRITICAL
**Audit refs:** 1.1, 1.2, 1.3, 3.3, 5.1, 6.2, 6.4, 6.5

---

## Objective

Eliminate all hardcoded secrets from the codebase, close the shell injection vector, fix broken asset references, and establish hygiene patterns (`.gitignore`, `.env.example`, single lock file) that prevent recurrence.

---

## Changes

### 1. `dashboard-refactored/config/constants.js`

**Before:** Hardcoded credentials, API keys, and session secret fallback.

**After:** All sensitive values read from `process.env` with no insecure fallbacks. Missing vars throw on startup instead of silently using defaults.

```js
// Credentials
VALID_CREDENTIALS: JSON.parse(process.env.VALID_CREDENTIALS || '{}'),

// API Keys
API_KEYS: {
    HUGGINGFACE: process.env.HUGGINGFACE_API_KEY || '',
    VLLM: process.env.VLLM_API_KEY || ''
},

// Session
SESSION: {
    SECRET: process.env.SESSION_SECRET,  // no fallback — must be set
    ...
}
```

A startup validation function will check that required env vars are present and throw a clear error if not.

### 2. `dashboard-refactored/server/services/vllm.js`

**Before:** `exec('../start.sh', ...)` and `exec('../stop.sh', ...)`

**After:** `execFile(path.resolve(..., '../start.sh'), ...)` — `execFile` does not spawn a shell, preventing injection.

### 3. `.gitignore` additions

```
.env
.env.*
.env.local
!.env.example
**/.DS_Store
bun.lockb
```

### 4. New file: `.env.example`

Documents every environment variable for both the marketing site (if any) and the dashboard:

```
# Dashboard (dashboard-refactored/)
SESSION_SECRET=
VALID_CREDENTIALS={"email":"hashed_password"}
HUGGINGFACE_API_KEY=
VLLM_API_KEY=
NODE_ENV=development
PORT=4000
```

### 5. `index.html` and `404.html`

Fix all broken `/lovable-uploads/...` paths to `/images/logos/...`.

### 6. Remove `bun.lockb`

Standardize on npm (CI already uses `npm ci`). Remove the Bun lock file.

### 7. Remove tracked `.DS_Store` files

Run `git rm --cached` on all `.DS_Store` files so they stop being tracked.

---

## Validation

- `grep -r "Furmom\|TempPass\|hf_Iuv\|94139815\|your-secret-key" .` returns zero results
- `grep -r "lovable-uploads" . --include="*.html"` returns zero results
- `.env.example` exists and documents all vars
- `npm run build` succeeds
- `find . -name ".DS_Store" -not -path "./node_modules/*"` tracked by git returns empty

---

## Risk

- **Credential rotation** is an out-of-band task — the owner must rotate HuggingFace and vLLM API keys on those platforms. This spec removes them from code but cannot rotate external keys.
- Dashboard will not start without env vars set. This is intentional — silent fallbacks were the vulnerability.
