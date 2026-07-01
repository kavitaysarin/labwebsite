import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "@/components/sections/ContactSection";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/content/site";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sarin Lab at Stanford — about joining the lab, research collaborations, or general questions.",
};

const { address } = SITE;
const FULL_ADDRESS = `${address.line1}, ${address.line2}, ${address.city}, ${address.state} ${address.zip}`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;
const PHONE_HREF = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
const detailLink =
  "rounded-sm hover:text-cardinal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-1";

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
              Whether you&apos;re interested in joining the lab, exploring a collaboration, or
              learning more about our research, we&apos;d be glad to connect.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ContactDetail icon="map-pin" label="Address">
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={detailLink}>
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.city}, {address.state} {address.zip}
              </a>
            </ContactDetail>
            <ContactDetail icon="phone" label="Phone">
              <a href={PHONE_HREF} className={detailLink}>
                {SITE.phone}
              </a>
            </ContactDetail>
            {/* On tablet (2-col) the third card spans the full second row to avoid an orphan. */}
            <ContactDetail icon="mail" label="Email" className="sm:col-span-2 lg:col-span-1">
              <a href={`mailto:${SITE.email}`} className={`break-all ${detailLink}`}>
                {SITE.email}
              </a>
            </ContactDetail>
          </div>
        </div>
      </section>

      {/* How We Can Help (cards + medical notice) and the message form */}
      <ContactSection />
    </main>
  );
}

function ContactDetail({
  icon,
  label,
  children,
  className = "",
}: {
  icon: IconName;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`card-surface flex h-full gap-4 p-5 ${className}`}>
      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-light text-cardinal">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[13px] font-semibold uppercase tracking-wide text-navy">{label}</p>
        <p className="mt-1 text-[15px] leading-relaxed text-gray-dark">{children}</p>
      </div>
    </div>
  );
}
