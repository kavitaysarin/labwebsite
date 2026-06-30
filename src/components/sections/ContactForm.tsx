"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

const INQUIRY_TYPES = [
  "Joining the lab",
  "Research collaboration",
  "Patient or clinical question",
  "Media or press",
  "Other",
];

type Errors = Partial<Record<"name" | "email" | "inquiry" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form with client-side validation. The form is intentionally NOT wired
 * to fake a successful send: it posts to Formspree only when a real form ID is
 * configured in SITE.formspreeId. Until then it validates input and then tells
 * the user to email the lab directly — it never claims a message was sent.
 */
export function ContactForm() {
  const configured = !!SITE.formspreeId && SITE.formspreeId !== "YOUR_FORMSPREE_ID";

  const [values, setValues] = useState({ name: "", email: "", inquiry: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "not-configured" | "submitting" | "success" | "error">("idle");

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function validate(): Errors {
    const er: Errors = {};
    if (!values.name.trim()) er.name = "Please enter your name.";
    if (!values.email.trim()) er.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) er.email = "Please enter a valid email address.";
    if (!values.inquiry) er.inquiry = "Please choose a reason for contact.";
    if (values.message.trim().length < 10) er.message = "Please enter a message (at least 10 characters).";
    return er;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) {
      setStatus("error");
      return;
    }
    if (!configured) {
      // No backend yet — do NOT pretend the message was sent.
      setStatus("not-configured");
      return;
    }
    try {
      setStatus("submitting");
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1 w-full rounded-lg border bg-white px-3 py-2 text-[15px] text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/40";
  const labelCls = "block text-[14px] font-semibold text-navy";
  const errCls = "mt-1 text-[13px] font-medium text-cardinal";

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-2xl">
      {/* Not-connected notice (draft) */}
      {!configured ? (
        <div
          role="note"
          className="mb-5 rounded-lg border border-cardinal/30 bg-cardinal/5 p-4 text-[14px] leading-relaxed text-navy"
        >
          <strong className="font-semibold">This form isn’t connected yet.</strong>{" "}
          Submissions are not being delivered until a mail service is configured.
          In the meantime, please email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-cardinal hover:underline">
            {SITE.email}
          </a>
          .
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            value={values.name}
            onChange={set("name")}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={`${field} ${errors.name ? "border-cardinal" : "border-border"}`}
          />
          {errors.name ? (
            <p id="cf-name-err" className={errCls}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelCls}>
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={values.email}
            onChange={set("email")}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={`${field} ${errors.email ? "border-cardinal" : "border-border"}`}
          />
          {errors.email ? (
            <p id="cf-email-err" className={errCls}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-inquiry" className={labelCls}>
          Reason for contact
        </label>
        <select
          id="cf-inquiry"
          value={values.inquiry}
          onChange={set("inquiry")}
          aria-required="true"
          aria-invalid={!!errors.inquiry}
          aria-describedby={errors.inquiry ? "cf-inquiry-err" : undefined}
          className={`${field} ${errors.inquiry ? "border-cardinal" : "border-border"}`}
        >
          <option value="">Select a reason…</option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.inquiry ? (
          <p id="cf-inquiry-err" className={errCls}>
            {errors.inquiry}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className={labelCls}>
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${field} resize-y ${errors.message ? "border-cardinal" : "border-border"}`}
        />
        {errors.message ? (
          <p id="cf-message-err" className={errCls}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-cardinal px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-cardinal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>

      {/* Live status */}
      <div aria-live="polite" className="mt-3">
        {status === "not-configured" ? (
          <p className="text-[14px] text-navy">
            Thanks — your details look good, but the form isn’t connected yet.
            Please email{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-cardinal hover:underline">
              {SITE.email}
            </a>{" "}
            and we’ll get back to you.
          </p>
        ) : null}
        {status === "success" ? (
          <p className="text-[14px] font-semibold text-navy">
            Thank you — your message has been sent. We’ll be in touch soon.
          </p>
        ) : null}
        {status === "error" && Object.keys(errors).length === 0 ? (
          <p className="text-[14px] text-cardinal">
            Something went wrong. Please email {SITE.email} instead.
          </p>
        ) : null}
        {status === "error" && Object.keys(errors).length > 0 ? (
          <p className="text-[14px] text-cardinal">
            Please fix the highlighted fields and try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
