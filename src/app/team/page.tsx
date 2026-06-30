import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonCard } from "@/components/cards/PersonCard";
import { TeamBrowser } from "@/components/sections/TeamBrowser";
import { CTABand } from "@/components/sections/CTABand";
import {
  PRINCIPAL_INVESTIGATOR,
  CURRENT_TEAM,
  TEAM_CATEGORY_ORDER,
  ALUMNI,
} from "@/content/people";

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

      {/* Intro + PI */}
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

          {PRINCIPAL_INVESTIGATOR ? (
            <div className="mt-8">
              <PersonCard person={PRINCIPAL_INVESTIGATOR} featured />
            </div>
          ) : null}
        </div>
      </section>

      {/* Current team */}
      <section className="bg-cream">
        <div className="container-wide section-pad-tight">
          <SectionHeading eyebrow="People" title="The Lab" />
          <div className="mt-8">
            <TeamBrowser people={CURRENT_TEAM} categoryOrder={TEAM_CATEGORY_ORDER} />
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="bg-white">
        <div className="container-wide section-pad-tight">
          <SectionHeading title="Alumni" />
          {ALUMNI.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ALUMNI.map((p) => (
                <PersonCard key={p.slug} person={p} />
              ))}
            </div>
          ) : (
            <div className="card-surface mt-6 max-w-3xl p-6">
              <p className="text-[15px] leading-relaxed text-gray-dark">
                Our alumni have gone on to careers across medicine, industry, and
                research. A full alumni roster is being compiled and will appear
                here soon.
              </p>
            </div>
          )}
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
