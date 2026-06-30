import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
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
      <PageHero title="Team" image="/images/hero/hero-secondary.png" />

      <section className="bg-white">
        <div className="container-wide section-pad">
          <h2 className="sr-only">Team members</h2>
          <TeamBrowser
            people={CURRENT_TEAM}
            filters={TEAM_FILTERS}
            alumni={ALUMNI}
          />
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
