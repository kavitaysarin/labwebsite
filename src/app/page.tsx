import { HomeHero } from "@/components/sections/HomeHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCard } from "@/components/cards/TechCard";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { ArrowLink, Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/content/site";
import { LAB_INTRO, WHY_SKIN, RESEARCH_APPROACH } from "@/content/research";
import { HOMEPAGE_TECH } from "@/content/technologies";
import { FEATURED_PUBLICATIONS } from "@/content/publications";
import type { IconName } from "@/lib/types";

const METRIC_ICONS: IconName[] = ["document", "stethoscope", "graduation"];

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />

      {/* Lab introduction + statistics */}
      <section className="bg-white">
        <div className="container-wide section-pad grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Reading Disease Through the Skin"
              title="The Sarin Lab"
            />
            <p className="mt-4 text-lg leading-relaxed text-gray-dark">
              {LAB_INTRO}
            </p>
            <div className="mt-6">
              <ArrowLink href="/research">
                Learn more about our research
              </ArrowLink>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {SITE.metrics.map((m, i) => (
              <div
                key={m.label}
                className="flex h-full flex-col items-center justify-center rounded-[10px] border border-border bg-off-white px-2 py-5 text-center shadow-card sm:px-4 sm:py-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light text-cardinal sm:h-[44px] sm:w-[44px]">
                  <Icon name={METRIC_ICONS[i]} className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <p className="mt-2.5 font-heading text-2xl font-black text-navy sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 text-[12px] font-medium leading-tight text-gray-dark sm:text-sm">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Skin? */}
      <section className="bg-cream">
        <div className="container-wide section-pad-tight">
          <SectionHeading
            eyebrow="Skin as a Sensor"
            title="Why Skin?"
            intro="The skin is uniquely suited to reveal what is happening inside the body — and to do so again and again over time."
          />
          <div className="mt-8">
            <FeatureGrid items={WHY_SKIN} variant="plain" />
          </div>
        </div>
      </section>

      {/* Research approach */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <SectionHeading
            eyebrow="Our Research Approach"
            title="How We Read the Skin"
            intro="We integrate complementary signals — genetic, molecular, imaging, and digital — and translate them into meaningful insights about disease."
          />
          <div className="mt-10">
            <FeatureGrid items={RESEARCH_APPROACH} variant="card" />
          </div>
        </div>
      </section>

      {/* Featured technologies */}
      <section className="bg-cream">
        <div className="container-wide section-pad">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Tools & Technologies"
              title="Tools That Reveal What Matters"
            />
            <Button href="/technologies" variant="secondary">
              Explore Our Technologies
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {HOMEPAGE_TECH.map((t) => (
              <TechCard key={t.slug} tech={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest work */}
      <section className="bg-white">
        <div className="container-wide section-pad-compact">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Latest From the Lab"
              title="Recent Work"
            />
            <Button href="/publications" variant="secondary">
              View All Publications
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURED_PUBLICATIONS.map((p) => (
              <PublicationCard key={p.title} pub={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Interested in collaborating or learning more?"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Collaborate With Us", href: "/collaborators" }}
      />
    </main>
  );
}
