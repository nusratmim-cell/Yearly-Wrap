# Shikho Year-End Wrap 2026 — PRD

The **Year-End Wrap 2026** product spec (Direction B, "Marksheet"), served as a web page. **Currently open to anyone with the link.**

- `public/wrap-2026-prd.html` — the PRD, served at the site root.
- `public/shots/` — the screens used in the doc.
- Other `public/*.html` — earlier working drafts.

## Deploy on Vercel
Import this repo in Vercel (Next.js auto-detected, no build settings needed) → Deploy. The root URL serves the PRD.

## Make it Shikho-only later
To restrict access to `@shikho.com` Google accounts, re-add the Auth.js gate (Google provider + middleware). Ask and it can be set back up.

Prototype reference: https://shikho-year-end-wrap.vercel.app/?v=b
