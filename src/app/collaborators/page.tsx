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
    "The clinicians, pathologists, engineers, and imaging scientists the Sarin Lab works with to read the skin as a sensor for disease.",
};

export default function CollaboratorsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Collaborators"
        subtitle="The science is a team effort across disciplines and institutions."
        image="/images/hero/hero-secondary.png"
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Working Across Disciplines" />
            <p className="mt-4 text-[17px] leading-relaxed text-gray-dark">
              Reading the skin as a sensor takes more than one lab. We work with
              clinicians, pathologists, engineers, and imaging scientists who
              each bring an essential piece — from surgical and diagnostic
              expertise to the optics and microscopy that let us see the skin in
              new ways.
            </p>
          </div>
        </div>
      </section>

      {/* Grouped collaborators */}
      {COLLABORATOR_CATEGORY_ORDER.map((group, i) => {
        const members = COLLABORATORS.filter((c) => c.category === group.category);
        if (members.length === 0) return null;
        return (
          <section
            key={group.category}
            className={i % 2 === 0 ? "bg-cream" : "bg-white"}
          >
            <div className="container-wide section-pad-tight">
              <SectionHeading title={group.category} intro={group.blurb} />
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
