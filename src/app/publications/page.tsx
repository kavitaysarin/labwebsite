import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { PublicationsBrowser } from "@/components/sections/PublicationsBrowser";
import { CTABand } from "@/components/sections/CTABand";
import { FEATURED_PUBLICATIONS } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed research from the Sarin Lab across genetic, molecular, imaging, and digital approaches to reading disease in the skin. Search and filter by research area and year.",
};

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Publications"
        subtitle="Peer-reviewed research reading the skin as a sensor for disease."
        image="/images/hero/hero-secondary.png"
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Research Publications" />
            <div className="mt-4 space-y-3 text-[17px] leading-relaxed text-gray-dark">
              <p>
                Our work spans the genetic, molecular, imaging, and digital
                approaches the lab uses to detect, measure, and monitor disease
                through the skin. The publications below are organized so you can
                explore the science by the question it asks rather than by a
                single disease.
              </p>
              <p>
                Browse by research area or year, or search by title, author, or
                journal. The list reflects records indexed in PubMed; the
                complete, always-current list is available there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {FEATURED_PUBLICATIONS.length > 0 ? (
        <section className="bg-cream">
          <div className="container-wide section-pad-tight">
            <SectionHeading
              eyebrow="Recent Highlights"
              title="Featured Publications"
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PUBLICATIONS.map((pub) => (
                <PublicationCard key={pub.pmid ?? pub.title} pub={pub} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Browse all */}
      <section className="bg-white">
        <div className="container-wide section-pad-tight">
          <SectionHeading title="All Publications" />
          <div className="mt-8">
            <PublicationsBrowser />
          </div>
        </div>
      </section>

      <CTABand
        heading="Interested in collaborating or learning more?"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Explore Our Research", href: "/research" }}
      />
    </main>
  );
}
