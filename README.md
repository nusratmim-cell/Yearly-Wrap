# Shikho Year-End Wrap 2026 — internal PRD (Google-gated)

A small Next.js app that serves the **Year-End Wrap 2026** product spec behind Google sign-in, **restricted to `@shikho.com` Google Workspace accounts**. Personal Gmail and other domains are rejected.

## The document
- `public/wrap-2026-prd.html` — the PRD, served at the site root after login.
- `public/shots/` — the screens used in the doc.
- Other `public/*.html` — earlier working drafts.

## How access control works
- **Auth.js (NextAuth v5)** with the Google provider — `hd=shikho.com` on the Google screen, plus a server-side check that the verified email ends in `@shikho.com` (`auth.js`).
- **Middleware** (`middleware.js`) blocks every route until signed in.

## Deploy on Vercel
1. **Import this repo** in Vercel — framework auto-detects as **Next.js** (no build settings needed).
2. **Create a Google OAuth client**: Google Cloud Console → *APIs & Services → Credentials → Create credentials → OAuth client ID → Web application*.
   - **Authorized redirect URI:** `https://<your-vercel-domain>/api/auth/callback/google`
3. **Add Environment Variables** in Vercel (*Project → Settings → Environment Variables*), for Production (and Preview):
   | Name | Value |
   |------|-------|
   | `AUTH_SECRET` | run `openssl rand -base64 32` |
   | `AUTH_GOOGLE_ID` | the OAuth **Client ID** |
   | `AUTH_GOOGLE_SECRET` | the OAuth **Client Secret** |
4. **Deploy.** Open the URL → "Sign in with Google" → a `@shikho.com` account gets the PRD; anyone else is blocked.

> After the first deploy you'll know the real domain — update the Google redirect URI if it changed, and (if you add a custom domain later) add that redirect URI too.

## Local dev
```
npm install
cp .env.example .env.local   # fill in the three values
npm run dev                  # http://localhost:3000
```
Local redirect URI for the Google client: `http://localhost:3000/api/auth/callback/google`.

Prototype reference: https://shikho-year-end-wrap.vercel.app/?v=b
