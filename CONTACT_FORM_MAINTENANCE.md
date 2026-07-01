# Contact form — maintenance guide

How the Contact page form works, how to connect/test it, and how to keep it
running. Companion to `CONTENT_REVIEW_NEEDED.md` and `PROJECT_STATUS.md`.

Code: `src/components/sections/ContactSection.tsx` (form + inquiry cards).
Page: `src/app/contact/page.tsx`.

---

## 1. Which service handles submissions

**[Web3Forms](https://web3forms.com)** — a form-forwarding API that emails each
submission to a registered inbox. Chosen because the site is a **static export**
(no server), so the form posts directly from the browser to the Web3Forms
endpoint (`https://api.web3forms.com/submit`) via `fetch`.

- **Free tier:** 250 submissions / month, spam filtering included.
- **Access key is PUBLIC by design.** On a static site any key shipped to the
  browser is downloadable; Web3Forms keys are made to be public and carry no
  account privileges beyond "email this form's submissions to the registered
  address." We still keep it out of git (see §4).

## 2. Where submissions are delivered

To the email address the Web3Forms **access key is registered to**:
**`ksarin@stanford.edu`** (the launch decision).

> Note: this is the *delivery* destination and is separate from the **public
> contact email shown on the page/footer**, which is `ahoj@stanford.edu`
> (`SITE.email` in `src/content/site.ts`). Changing one does not change the
> other.

Each email's **subject is prefixed by the selected reason**, so the inbox can
filter/label:

| Reason selected | Subject prefix |
|---|---|
| Joining the Lab | `[Website – Join the Lab]` |
| Research Collaboration | `[Website – Research Collaboration]` |
| General Inquiry | `[Website – General Inquiry]` |
| Patient or Clinical Question | **not submittable** — redirected to Stanford Health Care |

The email body contains: name, email (used as reply-to), affiliation (or
"(not provided)"), reason, and message.

## 3. How to change the destination inbox

1. Sign in at [web3forms.com](https://web3forms.com) and create a **new access
   key** registered to the new destination email (or move the existing key's
   email in the dashboard).
2. Update the `NEXT_PUBLIC_WEB3FORMS_KEY` value (see §4) and rebuild/redeploy.

No code change is required.

## 4. Where credentials are stored (never committed)

The key lives in the **`NEXT_PUBLIC_WEB3FORMS_KEY`** environment variable, read
in `ContactSection.tsx` as `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`. It is **not**
hardcoded anywhere.

- **Local development:** put it in **`.env.local`** (gitignored). A template is
  in `.env.example`.
- **Production build (GitHub Pages / Actions):** set it as a **repository secret
  / Actions env var** named `NEXT_PUBLIC_WEB3FORMS_KEY` and expose it to the
  `next build` step. (Because the key is public-by-design it will still appear in
  the shipped JS — that is expected and safe for this provider.)
- `.gitignore` ignores all `.env*` files except the documented `.env.example`.

**If the variable is empty/unset, the form runs in safe "draft" mode:** it
validates input and then tells the user to email the lab directly — it never
claims a message was sent.

## 5. How to test the form

**Local end-to-end (real delivery):**
1. Add the real key to `.env.local`: `NEXT_PUBLIC_WEB3FORMS_KEY=<key>`.
2. `npm run build && <serve out/>` (or `npm run dev`).
3. Submit a message with reason "General Inquiry"; confirm it arrives at
   `ksarin@stanford.edu` (check spam on first send).

**UI states without a real key (mocked):** the session QA scripts
`scratchpad/shots/contact-qa.js` (validation, clinical block, draft mode, card
preselect, a11y, breakpoints) and `contact-live-qa.js` (mocks the endpoint to
exercise the success / error / duplicate-click states) can be re-run against a
static build.

**Checklist (spec §16):** successful submission · required-field errors ·
invalid email · honeypot/too-fast drop · provider outage (failed submission) ·
duplicate-click prevention · Join-the-Lab preselect · Research-Collaboration
preselect · Patient/Clinical blocking + redirect · delivery to the inbox ·
confirmation email (if enabled) · mobile + keyboard a11y · widths 320/390/768/1024/1440.

## 6. How to review spam

- Web3Forms applies **server-side spam filtering** automatically.
- The form adds two **honeypot fields** (`botcheck` checkbox + a hidden
  "company" text field) and drops any *otherwise-valid* submission sent in under
  2.5s (bot autofill). These are dropped silently.
- If spam still gets through, enable **hCaptcha** in the Web3Forms dashboard and
  add the `h-captcha` widget (least-intrusive option; only if needed).
- Review the destination inbox's spam/junk folder periodically.

## 7. Troubleshooting delivery failures

| Symptom | Check |
|---|---|
| User sees "could not be sent" | Browser console logs a technical reason (`Contact form: …`). Confirm the key is set and correct; confirm the Web3Forms email is verified. |
| Nothing arrives, no error | Message likely in the destination **spam** folder; whitelist Web3Forms. Confirm the key's registered email. |
| Works locally, not in production | The `NEXT_PUBLIC_WEB3FORMS_KEY` secret isn't exposed to the production `next build`. |
| Everyone sees the draft notice | The key is empty/unset in the build environment. |
| Sudden failures at scale | 250/mo free limit reached — upgrade or reduce. Check [Web3Forms status](https://web3forms.com). |

The form **never shows success unless Web3Forms confirms** (`HTTP ok` +
`{ success: true }`). Technical errors are `console.error`-logged only.

## 8. Cost & submission limits

- **Free:** 250 submissions/month. No card required.
- **Paid (Pro):** higher limits **and the automatic confirmation email**
  (auto-response) to the sender — see §9.

## 9. Confirmation email to the sender (optional, §7 of the brief)

Web3Forms can send an **auto-response** to the person who submitted the form,
but only on a **paid plan**. It is a **dashboard setting**, not code. Suggested
copy (privacy-safe — does not echo the sender's full message):

> Thank you for contacting the Sarin Lab. We received your message. This inbox is
> not monitored for urgent medical needs and cannot provide medical advice.

Until enabled, no confirmation email is sent (the on-page success message still
appears).

## 10. How to disable the form safely

**Blank or remove `NEXT_PUBLIC_WEB3FORMS_KEY`** and rebuild/redeploy. The form
reverts to draft mode: it still validates and shows an honest "not connected —
email us at ahoj@stanford.edu" message, and never sends or fakes a send. No code
change needed.

---

## Launch checklist (before removing the draft warning)

- [ ] Web3Forms account created; access key registered to **ksarin@stanford.edu**
      and the email **verified** in Web3Forms.
- [ ] Key added to `.env.local` (local) and to the production build secret.
- [ ] **A real test message was delivered** to `ksarin@stanford.edu` end-to-end.
- [ ] Confirm the displayed public email (`ahoj@stanford.edu`), phone, address,
      and the Stanford Health Care Dermatology link are correct.
- [ ] (Optional) upgrade + enable the confirmation auto-response.

Only after real delivery is confirmed: remove the draft notice (it disappears
automatically once the key is set) and mark the page final.
