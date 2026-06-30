import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TechnologyDetail } from "@/components/sections/TechnologyDetail";
import { CTABand } from "@/components/sections/CTABand";
import { Icon } from "@/components/ui/Icon";
import { TECHNOLOGY_INTRO, TECHNOLOGY_PROGRAMS } from "@/content/technologies";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Optical imaging, optical clearing, 3D molecular pathology, spatial biology, and AI — the tools the Sarin Lab uses to see, measure, and interpret signals in the skin.",
};

export default function TechnologiesPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Technologies"
        subtitle="Tools that allow us to see, measure, and interpret signals in the skin."
        image="/images/hero/hero-secondary.png"
      />

      {/* Intro + program anchor cards */}
      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl space-y-3 text-[17px] leading-relaxed text-gray-dark">
            {TECHNOLOGY_INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <nav
            aria-label="Technology programs"
            className="mt-8 grid grid-cols-2 gap-3 max-[359px]:grid-cols-1 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
          >
            {TECHNOLOGY_PROGRAMS.map((p, i) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className={`card-surface flex h-full items-center gap-3 p-4 transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-card-strong lg:flex-col lg:items-start lg:gap-2 ${
                  i === TECHNOLOGY_PROGRAMS.length - 1 ? "max-[639px]:col-span-2" : ""
                }`}
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-light text-cardinal">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <span className="font-heading text-[15px] font-bold leading-tight text-navy">
                  {p.shortName}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Program sections */}
      {TECHNOLOGY_PROGRAMS.map((program, i) => (
        <section
          key={program.slug}
          id={program.slug}
          className={i % 2 === 0 ? "bg-cream" : "bg-white"}
        >
          <div className="container-wide section-pad-tight">
            <TechnologyDetail program={program} reversed={i % 2 === 1} />
          </div>
        </section>
      ))}

      <CTABand
        heading="Interested in collaborating or learning more?"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Explore Our Research", href: "/research" }}
      />
    </main>
  );
}
