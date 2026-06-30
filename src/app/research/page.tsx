import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ResearchPillar } from "@/components/sections/ResearchPillar";
import { CTABand } from "@/components/sections/CTABand";
import { Icon } from "@/components/ui/Icon";
import { RESEARCH_INTRO, RESEARCH_PILLARS } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "How the Sarin Lab reads genetic, molecular, imaging, and digital signals in the skin to detect, understand, and monitor disease.",
};

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Research"
        subtitle="Reading the skin as a sensor for disease."
        image="/images/hero/hero-secondary.png"
      />

      {/* Framing intro + signal legend */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <p className="eyebrow">Skin as a Sensor for Disease</p>
            <p className="mt-3 text-lg leading-relaxed text-gray-dark">
              {RESEARCH_INTRO}
            </p>
          </div>

          <nav aria-label="Research signals" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESEARCH_PILLARS.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="card-surface flex items-center gap-3 p-4 transition-colors hover:border-cardinal/40"
              >
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blue-light text-cardinal">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold uppercase tracking-wide text-cardinal">
                    {p.signal}
                  </span>
                  <span className="block font-heading text-[15px] font-bold leading-tight text-navy">
                    {p.title}
                  </span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Pillars */}
      {RESEARCH_PILLARS.map((pillar, i) => (
        <section
          key={pillar.slug}
          id={pillar.slug}
          className={i % 2 === 0 ? "bg-cream" : "bg-white"}
        >
          <div className="container-wide section-pad">
            <ResearchPillar pillar={pillar} reversed={i % 2 === 1} />
          </div>
        </section>
      ))}

      <CTABand
        heading="Interested in collaborating or learning more?"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Publications", href: "/publications" }}
      />
    </main>
  );
}
