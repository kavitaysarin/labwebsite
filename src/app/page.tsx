import Image from "next/image";
import { HomeHero } from "@/components/sections/HomeHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCard } from "@/components/cards/TechCard";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/content/site";
import { LAB_INTRO, WHY_SKIN, RESEARCH_APPROACH } from "@/content/research";
import { HOMEPAGE_TECH } from "@/content/technologies";
import { FEATURED_PUBLICATIONS } from "@/content/publications";
import type { IconName } from "@/lib/types";

const METRIC_ICONS: IconName[] = ["document", "stethoscope", "graduation"];

// Desktop-only editorial sidebar: left heading column + wider content column.
// Below lg it collapses to the current stacked layout.
const EDITORIAL = "lg:grid lg:grid-cols-[0.9fr_3.1fr] lg:gap-8";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />

      {/* Lab introduction · statistics · faded Stanford Medicine building */}
      <section className="bg-white">
        <div className="container-wide section-pad grid items-stretch gap-8 lg:grid-cols-[1.05fr_1.2fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Reading Disease Through the Skin"
              title="The Sarin Lab"
            />
            <p className="mt-4 text-[17px] leading-relaxed text-gray-dark">
              {LAB_INTRO}
            </p>
            <div className="mt-5">
              <ArrowLink href="/research">Learn more about our research</ArrowLink>
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
                  <span className="sm:hidden">{m.shortLabel ?? m.label}</span>
                  <span className="hidden sm:inline">{m.label}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Stanford Medicine building — desktop only, left edge faded into the page */}
          <div className="relative hidden min-h-[210px] overflow-hidden lg:block">
            <Image
              src="/images/intro/stanford-building.jpg"
              alt="Stanford Medicine building in Redwood City, California"
              fill
              sizes="25vw"
              className="object-cover"
              style={{
                objectPosition: "center 38%",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, #000 42%)",
                maskImage: "linear-gradient(to right, transparent 0%, #000 42%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Skin? */}
      <section className="bg-cream">
        <div className="container-wide section-pad-tight">
          <div className={EDITORIAL}>
            <div>
              <SectionHeading
                eyebrow="Skin as a Sensor"
                title="Why Skin?"
                intro="The skin is uniquely suited to reveal what is happening inside the body, and to do so again and again over time."
              />
            </div>
            <div className="mt-8 lg:mt-0">
              <FeatureGrid items={WHY_SKIN} variant="plain" />
            </div>
          </div>
        </div>
      </section>

      {/* Research approach */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className={EDITORIAL}>
            <div>
              <SectionHeading
                eyebrow="Our Research Approach"
                title="How We Read the Skin"
                intro="We integrate complementary signals, genetic, molecular, imaging, and digital, and translate them into meaningful insights about disease."
              />
              <div className="mt-5">
                <ArrowLink href="/research">Explore our research</ArrowLink>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <FeatureGrid items={RESEARCH_APPROACH} variant="card" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured technologies */}
      <section className="bg-cream">
        <div className="container-wide section-pad">
          <div className={EDITORIAL}>
            <div>
              <SectionHeading
                eyebrow="Tools & Technologies"
                title="Tools That Reveal What Matters"
                intro="High-resolution imaging, molecular profiling, and artificial intelligence that turn signals in the skin into measurable insight."
              />
              <div className="mt-5">
                <ArrowLink href="/technologies">Explore Our Technologies</ArrowLink>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 lg:mt-0">
              {HOMEPAGE_TECH.map((t, i) => (
                <TechCard
                  key={t.slug}
                  tech={t}
                  wide={i === HOMEPAGE_TECH.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest work */}
      <section className="bg-white">
        <div className="container-wide section-pad-compact">
          <div className={EDITORIAL}>
            <div>
              <SectionHeading
                eyebrow="Latest From the Lab"
                title="Recent Work"
                intro="A selection of recent publications from the lab. Browse the complete list on PubMed."
              />
              <div className="mt-5">
                <ArrowLink href="/publications">View All Publications</ArrowLink>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 lg:mt-0">
              {FEATURED_PUBLICATIONS.map((p, i) => (
                <PublicationCard
                  key={p.title}
                  pub={p}
                  wide={i === FEATURED_PUBLICATIONS.length - 1}
                />
              ))}
            </div>
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
