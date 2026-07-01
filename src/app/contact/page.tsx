// APPROVED — finalized Contact page (2026-07-01). Layout approved; do not
// redesign without re-approval. The form is connected via Web3Forms (public key
// in NEXT_PUBLIC_WEB3FORMS_KEY; never committed) and a real end-to-end delivery
// to ksarin@stanford.edu was confirmed. See CONTACT_FORM_MAINTENANCE.md and
// docs/DESIGN_SYSTEM_FROZEN.md.
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sarin Lab at Stanford — about joining the lab, research collaborations, supporting the lab, or general questions.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero title="Contact" image="/images/hero/hero-secondary.png" />

      {/* Ways to Connect (cards + clinical disclaimer) and the message form */}
      <ContactSection />
    </main>
  );
}
