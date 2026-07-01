"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/content/site";
import type { IconName } from "@/lib/types";

/**
 * Contact experience: the "How We Can Help" inquiry cards, the medical notice,
 * and the message form — kept in one client component so a card can preselect
 * the form's reason and scroll to it.
 *
 * Delivery: Web3Forms (https://web3forms.com). The access key is PUBLIC by
 * design (this is a static site with no server) and is read from
 * NEXT_PUBLIC_WEB3FORMS_KEY — never hardcoded/committed. When the key is absent
 * the form runs in "draft" mode: it validates input but NEVER claims a message
 * was sent. Success is shown ONLY when Web3Forms confirms delivery
 * (HTTP ok + { success: true }). See CONTACT_FORM_MAINTENANCE.md.
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const ENDPOINT = "https://api.web3forms.com/submit";

// Stanford Health Care — Dermatology (patient care). Verify before launch.
const CLINICAL_URL =
  "https://stanfordhealthcare.org/medical-clinics/dermatology-clinic.html";

// Reason options → email subject prefix.
const REASONS: { value: string; prefix: string }[] = [
  { value: "Joining the Lab", prefix: "[Website – Join the Lab]" },
  { value: "Research Collaboration", prefix: "[Website – Research Collaboration]" },
  { value: "Supporting the Lab", prefix: "[Website – Support Our Lab]" },
  { value: "General Inquiry", prefix: "[Website – General Inquiry]" },
];

const CARDS: {
  key: string;
  icon: IconName;
  title: string;
  body: string;
  reason?: string;
  href?: string; // set once a verified Stanford giving page is approved (Support card)
  cta?: string;
}[] = [
  {
    key: "join",
    icon: "users",
    title: "Join the Lab",
    body: "We welcome inquiries from students, trainees, and volunteers interested in skin biology, genetics, imaging, and computation. Tell us about your background, interests, and availability.",
    reason: "Joining the Lab",
  },
  {
    key: "collab",
    icon: "link",
    title: "Research Collaborations",
    body: "We collaborate with clinicians, scientists, engineers, and patient partners. Contact us if your work connects with our research or technologies.",
    reason: "Research Collaboration",
  },
  {
    key: "support",
    icon: "heart",
    title: "Support Our Lab",
    body: "Philanthropic support helps advance research, train the next generation of scientists and clinicians, and develop new approaches for detecting and measuring disease through the skin.",
    // No approved Stanford giving page yet (see CONTENT_REVIEW_NEEDED.md).
    // Until one exists, this scrolls to the form and preselects "Supporting the Lab".
    reason: "Supporting the Lab",
    cta: "Learn About Supporting the Lab",
  },
];

const MIN_MESSAGE = 10;
const MAX_MESSAGE = 2000;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_AFFILIATION = 150;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldKey = "name" | "email" | "affiliation" | "reason" | "message";
type Errors = Partial<Record<FieldKey, string>>;
type Status = "idle" | "draft" | "submitting" | "success" | "error";

const EMPTY = { name: "", email: "", affiliation: "", reason: "", message: "" };

export function ContactSection() {
  const configured = ACCESS_KEY.length > 0;

  const [values, setValues] = useState({ ...EMPTY });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const mountedAt = useRef(0);
  const botCheckRef = useRef<HTMLInputElement>(null); // Web3Forms honeypot
  const hpTextRef = useRef<HTMLInputElement>(null); // secondary honeypot
  const formSectionRef = useRef<HTMLElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const reasonRef = useRef<HTMLSelectElement>(null);

  // Focus a field by its input id (validation is client-side, so `document` is safe here).
  const focusField = (key: Exclude<FieldKey, "affiliation">) =>
    document.getElementById(`cf-${key}`)?.focus();

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  // Move focus to the status message once a submission attempt resolves.
  useEffect(() => {
    if (status === "success" || status === "error" || status === "draft") {
      statusRef.current?.focus();
    }
  }, [status]);

  const set =
    (k: FieldKey) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const v = e.target.value;
      setValues((prev) => ({ ...prev, [k]: v }));
      // Clear that field's error as the user corrects it.
      setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));
      if (status === "success" || status === "error") setStatus("idle");
    };

  function selectCard(reason: string) {
    setValues((prev) => ({ ...prev, reason }));
    setErrors((prev) => ({ ...prev, reason: undefined }));
    requestAnimationFrame(() => {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus the reason field so keyboard users land in the right place.
      window.setTimeout(() => reasonRef.current?.focus(), 350);
    });
  }

  function validate(): Errors {
    const er: Errors = {};
    if (!values.name.trim()) er.name = "Enter your name.";
    if (!values.email.trim()) er.email = "Enter your email address.";
    else if (!EMAIL_RE.test(values.email.trim()))
      er.email = "Enter a valid email address, like name@example.com.";
    if (!values.reason) er.reason = "Choose a reason for contacting us.";
    const msg = values.message.trim();
    if (!msg) er.message = "Enter a message.";
    else if (msg.length < MIN_MESSAGE)
      er.message = `Please add a little more detail (at least ${MIN_MESSAGE} characters).`;
    else if (values.message.length > MAX_MESSAGE)
      er.message = `Please keep your message under ${MAX_MESSAGE} characters.`;
    return er;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return; // prevent duplicate submits

    // Validate FIRST so real users always get feedback, even on a fast submit.
    const er = validate();
    setErrors(er);
    if (Object.keys(er).some((k) => er[k as FieldKey])) {
      const order: Exclude<FieldKey, "affiliation">[] = ["name", "email", "reason", "message"];
      const first = order.find((k) => er[k]);
      if (first) focusField(first);
      return;
    }

    // Spam traps applied only to an otherwise-valid submission: silently drop
    // bots (honeypots filled, or a complete valid form submitted implausibly
    // fast — a human can't type all fields in <2.5s, but autofill scripts do).
    const tooFast = Date.now() - mountedAt.current < 2500;
    if (botCheckRef.current?.checked || (hpTextRef.current?.value ?? "") !== "" || tooFast) {
      return;
    }

    if (!configured) {
      // No backend configured — do NOT pretend the message was sent.
      setStatus("draft");
      return;
    }

    try {
      setStatus("submitting");
      const prefix =
        REASONS.find((r) => r.value === values.reason)?.prefix ?? "[Website – General Inquiry]";
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${prefix} New message from ${values.name.trim()}`,
          from_name: "Sarin Lab Website",
          name: values.name.trim(),
          email: values.email.trim(),
          affiliation: values.affiliation.trim() || "(not provided)",
          reason: values.reason,
          message: values.message.trim(),
          botcheck: false,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (res.ok && data.success) {
        setStatus("success");
        setValues({ ...EMPTY });
        setErrors({});
      } else {
        // Log the technical detail; never surface it to the user.
        console.error("Contact form: delivery not confirmed", res.status, data?.message);
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form: network error", err);
      setStatus("error");
    }
  }

  const labelCls = "block text-[14px] font-semibold text-navy";
  const field =
    "mt-1.5 block min-h-[44px] w-full rounded-lg border bg-white px-3 py-2.5 text-[15px] text-navy placeholder:text-gray-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/45";
  const borderFor = (k: FieldKey) => (errors[k] ? "border-cardinal" : "border-border");

  function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
    return (
      <p id={id} className="mt-1.5 flex items-start gap-1.5 text-[13.5px] font-medium text-cardinal">
        <Icon name="alert" className="mt-[1px] h-4 w-4 flex-none" strokeWidth={1.8} />
        <span>
          <span className="sr-only">Error: </span>
          {children}
        </span>
      </p>
    );
  }

  const Req = () => (
    <>
      <span aria-hidden="true" className="text-cardinal"> *</span>
      <span className="sr-only"> (required)</span>
    </>
  );

  return (
    <>
      {/* Ways to Connect */}
      <section className="bg-cream">
        <div className="container-wide section-pad-tight">
          <SectionHeading title="Ways to Connect" />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CARDS.map((c) => {
              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light text-cardinal">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-[18px] font-bold text-navy">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-dark">{c.body}</p>
                </>
              );
              if (c.href) {
                return (
                  <a
                    key={c.key}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface group flex h-full flex-col p-6 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-2"
                  >
                    {inner}
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-cardinal group-hover:underline">
                      Stanford Health Care Dermatology
                      <Icon name="external" className="h-3.5 w-3.5" />
                    </span>
                  </a>
                );
              }
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => selectCard(c.reason!)}
                  className="card-surface group flex h-full flex-col p-6 text-left transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-2"
                >
                  {inner}
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-cardinal group-hover:underline">
                    {c.cta ?? "Start a message"}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Concise clinical disclaimer (secondary — not a primary pathway) */}
          <div
            role="note"
            className="mx-auto mt-8 max-w-3xl rounded-lg border border-border bg-white p-4 text-[13.5px] leading-relaxed text-gray-dark"
          >
            The Sarin Lab cannot provide medical advice or schedule appointments through this
            website. For clinical care, contact{" "}
            <a
              href={CLINICAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cardinal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
            >
              Stanford Health Care Dermatology
            </a>
            . In an emergency, call 911.
          </div>
        </div>
      </section>

      {/* Form */}
      <section ref={formSectionRef} id="contact-form" className="scroll-mt-24 bg-white">
        <div className="container-wide section-pad-tight">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading title="Send a Message" />

            {!configured ? (
              <div
                role="note"
                className="mt-6 rounded-lg border border-cardinal/30 bg-cardinal/5 p-4 text-[14px] leading-relaxed text-navy"
              >
                <strong className="font-semibold">This form isn’t connected yet.</strong> Messages
                aren’t being delivered until the mail service is configured. In the meantime, please
                email us at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-cardinal hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </div>
            ) : null}

            <form onSubmit={onSubmit} noValidate className="mt-8">
              <p className="text-[13px] text-gray-dark">
                Fields marked <span className="text-cardinal">*</span> are required.
              </p>

              {/* Honeypots — hidden from people, tempting to bots. */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="cf-botcheck">Leave this box unchecked</label>
                <input ref={botCheckRef} id="cf-botcheck" type="checkbox" tabIndex={-1} autoComplete="off" />
                <label htmlFor="cf-company">Company (leave blank)</label>
                <input ref={hpTextRef} id="cf-company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>
                    Name
                    <Req />
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={MAX_NAME}
                    value={values.name}
                    onChange={set("name")}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                    className={`${field} ${borderFor("name")}`}
                  />
                  {errors.name ? <ErrorText id="cf-name-err">{errors.name}</ErrorText> : null}
                </div>

                <div>
                  <label htmlFor="cf-email" className={labelCls}>
                    Email
                    <Req />
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={MAX_EMAIL}
                    value={values.email}
                    onChange={set("email")}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cf-email-err" : undefined}
                    className={`${field} ${borderFor("email")}`}
                  />
                  {errors.email ? <ErrorText id="cf-email-err">{errors.email}</ErrorText> : null}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="cf-affiliation" className={labelCls}>
                  Affiliation or organization{" "}
                  <span className="font-normal text-gray-dark">(optional)</span>
                </label>
                <input
                  id="cf-affiliation"
                  name="affiliation"
                  type="text"
                  autoComplete="organization"
                  maxLength={MAX_AFFILIATION}
                  value={values.affiliation}
                  onChange={set("affiliation")}
                  className={`${field} border-border`}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="cf-reason" className={labelCls}>
                  Reason for contact
                  <Req />
                </label>
                <select
                  ref={reasonRef}
                  id="cf-reason"
                  name="reason"
                  value={values.reason}
                  onChange={set("reason")}
                  aria-required="true"
                  aria-invalid={!!errors.reason}
                  aria-describedby={errors.reason ? "cf-reason-err" : undefined}
                  className={`${field} ${borderFor("reason")}`}
                >
                  <option value="">Select a reason…</option>
                  {REASONS.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.value}
                    </option>
                  ))}
                </select>
                {errors.reason ? <ErrorText id="cf-reason-err">{errors.reason}</ErrorText> : null}
              </div>

              <div className="mt-4">
                <label htmlFor="cf-message" className={labelCls}>
                  Message
                  <Req />
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={6}
                  maxLength={MAX_MESSAGE}
                  value={values.message}
                  onChange={set("message")}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={`cf-message-count${errors.message ? " cf-message-err" : ""}`}
                  className={`${field} resize-y ${borderFor("message")}`}
                />
                <div className="mt-1 flex items-start justify-between gap-3">
                  {errors.message ? (
                    <ErrorText id="cf-message-err">{errors.message}</ErrorText>
                  ) : (
                    <span />
                  )}
                  <span id="cf-message-count" className="mt-1 flex-none text-[12px] text-gray-dark">
                    {values.message.length}/{MAX_MESSAGE}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  aria-disabled={status === "submitting"}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-cardinal px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-cardinal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      />
                      Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>

              {/* Live status region — focus moves here after a submission attempt */}
              <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="mt-4 focus-visible:outline-none">
                {status === "draft" ? (
                  <div className="rounded-lg border border-cardinal/30 bg-cardinal/5 p-4 text-[14px] leading-relaxed text-navy">
                    Your details look good, but the form isn’t connected yet, so nothing was sent.
                    Please email{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-semibold text-cardinal hover:underline"
                    >
                      {SITE.email}
                    </a>{" "}
                    and we’ll get back to you.
                  </div>
                ) : null}

                {status === "success" ? (
                  <div className="flex items-start gap-2.5 rounded-lg border border-green-700/25 bg-green-50 p-4 text-[14.5px] leading-relaxed text-navy">
                    <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-green-700" strokeWidth={1.8} />
                    <span>
                      <strong className="font-semibold">
                        Thank you for contacting the Sarin Lab. Your message has been sent.
                      </strong>{" "}
                      We review inquiries as time permits. Please do not use this form for urgent or
                      clinical concerns.
                    </span>
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="flex items-start gap-2.5 rounded-lg border border-cardinal/30 bg-cardinal/5 p-4 text-[14.5px] leading-relaxed text-navy">
                    <Icon name="alert" className="mt-0.5 h-5 w-5 flex-none text-cardinal" strokeWidth={1.8} />
                    <span>
                      Your message could not be sent. Please try again, or contact the lab directly
                      at{" "}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-semibold text-cardinal hover:underline"
                      >
                        {SITE.email}
                      </a>
                      .
                    </span>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
