# SPEC-004: CI/CD Pipeline & Containerization

**Sprint:** 4
**Severity:** HIGH
**Audit refs:** 3.1, 3.2, 3.4

---

## Objective

Establish a robust CI pipeline that catches issues before merge, and containerize the marketing site for portable, reproducible deployments beyond GitHub Pages.

---

## CI Pipeline

### New file: `.github/workflows/ci.yml`

Runs on all PRs and pushes (not just main). Does NOT deploy.

```yaml
name: CI
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm audit --audit-level=high
      - run: npm run build
```

### Updated: `.github/workflows/deploy.yml`

Only runs on main push. Adds caching. Depends on CI passing.

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Containerization

### New file: `Dockerfile`

Multi-stage build: Node for building, nginx-alpine for serving.

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1
```

### New file: `nginx.conf`

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA fallback — serves index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache images
    location /images/ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

### New file: `docker-compose.yml`

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

### New file: `.dockerignore`

```
node_modules
dist
.git
.github
dashboard-refactored
docs
*.md
.DS_Store
.env*
!.env.example
```

---

## Validation

- `docker build -t mentra-web .` succeeds
- `docker run -p 8080:80 mentra-web` serves the site
- Navigating to `/about` directly returns the SPA (no 404)
- CI workflow runs lint, typecheck, and audit on a test PR
- GitHub Pages deploy still works on main push
