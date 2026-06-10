# GARDEN GHOUL — Deployment Guide

**Domain:** `https://www.gardenghoul.com`  
**Description:** Garden & outdoor care products

---

## Build

```bash
npm install
npm run build
```

Output: `dist/` (Vite static build)

## Deploy

### Cloudflare Pages (Recommended)

```bash
npx wrangler pages deploy dist --project-name=gardenghoul-com --branch=main
```

### GitHub Actions

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

### DNS

- `www.gardenghoul.com` → CNAME → `gardenghoul-com.pages.dev`
- `gardenghoul.com` → CNAME → `gardenghoul-com.pages.dev`

Managed in Cloudflare DNS.

---

*Part of the GHOULVERSE ecosystem. See root `DEPLOY.md` for ecosystem-wide deployment.*
