import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/content/site";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sarin Lab at Stanford — about joining the lab, research collaborations, or general questions.",
};

const PURPOSES: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "users",
    title: "Join the Lab",
    body: "We welcome students, trainees, and volunteers interested in skin, genetics, imaging, and computation. Tell us about your background and what you'd like to work on.",
  },
  {
    icon: "link",
    title: "Research Collaborations",
    body: "We partner with clinicians, engineers, and scientists across disciplines. If you see a connection to your work, we'd like to hear from you.",
  },
  {
    icon: "stethoscope",
    title: "Patient & Clinical Questions",
    body: "This lab conducts research and does not provide medical care through this site. For appointments or clinical questions, please contact Stanford Health Care Dermatology.",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Contact"
        subtitle="We'd love to hear from you."
        image="/images/hero/hero-secondary.png"
      />

      {/* Intro + details */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Get in Touch" />
            <p className="mt-4 text-[17px] leading-relaxed text-gray-dark">
              Whether you're interested in joining the lab, exploring a
              collaboration, or learning more about our research, we'd be glad to
              connect.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ContactDetail icon="map-pin" label="Address">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </ContactDetail>
            <ContactDetail icon="phone" label="Phone">
              <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="hover:text-cardinal">
                {SITE.phone}
              </a>
            </ContactDetail>
            <ContactDetail icon="mail" label="Email">
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-cardinal">
                {SITE.email}
              </a>
            </ContactDetail>
          </div>

          {SITE.social.length > 0 ? (
            <div className="mt-6 flex items-center gap-3">
              <span className="text-[14px] font-semibold text-navy">Follow us:</span>
              {SITE.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-cardinal/40 hover:text-cardinal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Purposes */}
      <section className="bg-cream">
        <div className="container-wide section-pad-tight">
          <SectionHeading eyebrow="How Can We Help?" title="Reasons to Reach Out" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PURPOSES.map((p) => (
              <div key={p.title} className="card-surface flex h-full flex-col p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light text-cardinal">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-[18px] font-bold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-dark">{p.body}</p>
                {p.title === "Patient & Clinical Questions" ? (
                  <a
                    href="https://med.stanford.edu/dermatology.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-cardinal hover:underline"
                  >
                    Stanford Dermatology
                    <Icon name="external" className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          {/* Medical disclaimer */}
          <div
            role="note"
            className="mx-auto mt-8 max-w-3xl rounded-lg border border-border bg-white p-5 text-[14px] leading-relaxed text-gray-dark"
          >
            <strong className="font-semibold text-navy">
              Not for medical emergencies.
            </strong>{" "}
            Our email and contact form are not monitored for urgent medical needs
            and are not a substitute for professional medical advice. For medical
            care, contact your physician or Stanford Health Care. In an emergency,
            call 911.
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white">
        <div className="container-wide section-pad-tight">
          <SectionHeading title="Send a Message" />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactDetail({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface flex h-full gap-4 p-5">
      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-light text-cardinal">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[13px] font-semibold uppercase tracking-wide text-navy">
          {label}
        </p>
        <p className="mt-1 text-[15px] leading-relaxed text-gray-dark">{children}</p>
      </div>
    </div>
  );
}
