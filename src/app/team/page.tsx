import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamBrowser } from "@/components/sections/TeamBrowser";
import { CTABand } from "@/components/sections/CTABand";
import { CURRENT_TEAM, TEAM_FILTERS, ALUMNI } from "@/content/people";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people of the Sarin Lab — an interdisciplinary group of physicians, scientists, engineers, and students studying the skin as a sensor for disease.",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Team"
        subtitle="The people reading the skin as a sensor for disease."
        image="/images/hero/hero-secondary.png"
      />

      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Our Team" />
            <p className="mt-4 text-[17px] leading-relaxed text-gray-dark">
              We are an interdisciplinary group of physicians, scientists,
              engineers, and students. Together we combine genetics, molecular
              biology, imaging, and computation to detect, measure, and monitor
              disease through the skin.
            </p>
          </div>

          <div className="mt-8">
            <TeamBrowser
              people={CURRENT_TEAM}
              filters={TEAM_FILTERS}
              alumni={ALUMNI}
            />
          </div>
        </div>
      </section>

      <CTABand
        heading="Interested in joining the lab?"
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Explore Our Research", href: "/research" }}
      />
    </main>
  );
}
