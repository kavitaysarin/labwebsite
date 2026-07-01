# Deploying the Sarin Lab website (GitHub Pages)

The site is a **Next.js static export** (`output: "export"` → `./out`). A GitHub
Actions workflow (`.github/workflows/deploy.yml`) builds it and publishes `out/`
to **GitHub Pages** on every push to `main` (and on manual dispatch).

Nothing deploys until you push to GitHub and complete the one-time setup below —
the repo is currently local-only.

## One-time setup

1. **Push the repo to GitHub.** The launch code is on `feature/remaining-pages-draft`;
   merge it to `main` (or set `main` to that commit) and push. The workflow runs on
   pushes to `main`.

2. **Enable Pages via Actions.** In the repo: **Settings → Pages → Build and
   deployment → Source → "GitHub Actions".**

3. **Add the Contact-form secret.** **Settings → Secrets and variables → Actions →
   New repository secret:**
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: the Web3Forms access key (the same value in your local `.env.local`,
     registered to `ksarin@stanford.edu`).

   The key is public-by-design (it ships in the client bundle), but keeping it as a
   secret keeps it out of git. **Without this secret the deployed Contact form
   safely falls back to its "email us" notice instead of sending.**

## Deploying

- **Automatic:** push/merge to `main`. The workflow builds and deploys.
- **Manual:** **Actions → "Deploy to GitHub Pages" → Run workflow.**

The base path (e.g. `/labwebsite`) is **auto-detected** by `actions/configure-pages`
and passed to the build as `NEXT_PUBLIC_BASE_PATH`, so assets and links resolve
correctly on a project site. Verified locally that a base-path build prefixes
`_next/` assets and internal links correctly.

**Result:** `https://<user-or-org>.github.io/<repo>/`.

## Custom domain (optional)

1. **Settings → Pages → Custom domain** → enter the domain; GitHub writes a `CNAME`.
2. With a root/custom domain the auto-detected base path is empty (handled — a lone
   `/` is normalized to no base path in `next.config.ts`).
3. Update **`SITE.url`** in `src/content/site.ts` to the final domain so metadata,
   canonical URLs, and (any future) sitemap are correct. Currently
   `https://kavitaysarin.github.io/labwebsite` — **confirm the production domain.**

## After the first deploy — verify

- Open the live URL; click through all nav pages (no broken assets/links).
- **Submit a real test through the Contact form** and confirm it arrives at
  `ksarin@stanford.edu` (this proves the secret is wired). See
  `CONTACT_FORM_MAINTENANCE.md`.
- Confirm the looping Technologies videos play (GitHub Pages serves video with the
  correct MIME type + range support).

## Notes

- `images.unoptimized: true` — no server image optimization on Pages (expected).
- `trailingSlash: true` — routes export as `<route>/index.html`, which Pages serves
  cleanly.
- No `.nojekyll` needed: the Actions Pages deployment serves the uploaded artifact
  directly (no Jekyll processing of `_next/`).
- Pre-launch content confirmations (image reuse rights, patient consent, a few
  facts) are tracked in `CONTENT_REVIEW_NEEDED.md`.
