import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ResearchPillar } from "@/components/sections/ResearchPillar";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RESEARCH_INTRO, RESEARCH_PILLARS } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "How the Sarin Lab uses genetic, molecular, imaging, and digital tools to find disease signals in the skin.",
};

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Research"
        subtitle="Reading the skin as a sensor for disease."
        image="/images/hero/hero-secondary.png"
      />

      {/* Intro + signal anchor cards */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Skin as a Sensor for Disease" />
            <div className="mt-4 space-y-3 text-[17px] leading-relaxed text-gray-dark">
              {RESEARCH_INTRO.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <nav
            aria-label="Research signals"
            className="mt-8 grid grid-cols-2 gap-3 max-[359px]:grid-cols-1 sm:gap-4 lg:grid-cols-4"
          >
            {RESEARCH_PILLARS.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="card-surface flex items-center gap-3 p-4 transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-card-strong"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-light text-cardinal">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <span className="font-heading text-[15px] font-bold text-navy">
                  {p.signal}
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
          <div className="container-wide section-pad-tight">
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
