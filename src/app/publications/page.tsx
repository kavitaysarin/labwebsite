// APPROVED — finalized Publications page (curated Selected Publications, 2026-06-30).
// Layout/structure approved; do not redesign without re-approval. The publication
// LIST is content-managed in src/content/publications.ts (see PUBLICATIONS_MAINTENANCE.md).
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FeaturedPublicationCard } from "@/components/cards/FeaturedPublicationCard";
import { SelectedPublicationCard } from "@/components/cards/SelectedPublicationCard";
import { SITE } from "@/content/site";
import {
  FEATURED_SELECTED,
  PUBLICATION_SECTIONS,
  selectedByCategory,
} from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected studies from the Sarin Lab spanning imaging, genetics, molecular biology, digital measurement, and clinical research.",
};

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <PageHero title="Publications" image="/images/hero/hero-secondary.png" />

      {/* Intro */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <p className="text-[17px] leading-relaxed text-gray-dark">
              Explore selected publications that represent the lab&apos;s work in
              optical imaging, skin cancer, neurofibromatosis, autoimmune and
              inflammatory disease, molecular biology, and artificial
              intelligence.
            </p>
            <div className="mt-6">
              <Button href={SITE.pubmedUrl} external>
                View All Publications on PubMed
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {FEATURED_SELECTED.length > 0 ? (
        <section className="bg-cream">
          <div className="container-wide section-pad-tight">
            <SectionHeading eyebrow="Highlights" title="Featured Publications" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {FEATURED_SELECTED.map((pub) => (
                <FeaturedPublicationCard key={pub.pubmedUrl} pub={pub} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Selected publications by research area */}
      {PUBLICATION_SECTIONS.map((section, i) => {
        // The three featured papers are highlighted above; sections show the rest.
        const pubs = selectedByCategory(section.slug).filter((p) => !p.featured);
        if (pubs.length === 0) return null;
        return (
          <section
            key={section.slug}
            id={section.slug}
            className={`scroll-mt-24 ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}
          >
            <div className="container-wide section-pad-tight">
              <SectionHeading title={section.heading} />
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:gap-x-6 lg:gap-y-5 xl:grid-cols-3">
                {pubs.map((pub) => (
                  <SelectedPublicationCard key={pub.pubmedUrl} pub={pub} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Final PubMed CTA */}
      <section className="bg-navy">
        <div className="container-wide section-pad-tight text-center">
          <h2 className="font-heading text-[24px] font-bold text-white">
            Looking for the complete publication list?
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href={SITE.pubmedUrl} external variant="secondary-light">
              View All Publications on PubMed
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
