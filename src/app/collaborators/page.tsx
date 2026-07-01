import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollaboratorCard } from "@/components/cards/CollaboratorCard";
import { CTABand } from "@/components/sections/CTABand";
import {
  COLLABORATORS,
  COLLABORATOR_CATEGORY_ORDER,
} from "@/content/collaborators";

export const metadata: Metadata = {
  title: "Collaborators",
  description:
    "The clinicians, pathologists, engineers, imaging scientists, and data scientists the Sarin Lab works with to read the skin as a sensor for disease.",
};

export default function CollaboratorsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Collaborators"
        subtitle="The science is a team effort across disciplines and institutions."
        image="/images/hero/hero-secondary.png"
      />

      {COLLABORATOR_CATEGORY_ORDER.map((category, i) => {
        const members = COLLABORATORS.filter((c) => c.category === category);
        if (members.length === 0) return null;
        return (
          <section key={category} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
            <div className="container-wide section-pad">
              <SectionHeading title={category} />
              {/* Left-aligned grid: incomplete final rows start in column one;
                  cards are not stretched to fill empty columns, not centered. */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {members.map((c) => (
                  <CollaboratorCard key={c.name} person={c} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABand
        heading="Interested in collaborating?"
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Explore Our Technologies", href: "/technologies" }}
      />
    </main>
  );
}
