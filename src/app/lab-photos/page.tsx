import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { CTABand } from "@/components/sections/CTABand";
import { GALLERY, GALLERY_CATEGORIES } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Lab Photos",
  description:
    "A look at the people, places, and moments behind the work of the Sarin Lab at Stanford.",
};

export default function LabPhotosPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Lab Photos"
        subtitle="A look at the people, places, and moments behind the work."
        image="/images/hero/hero-secondary.png"
      />

      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Gallery" />
            <p className="mt-4 text-[17px] leading-relaxed text-gray-dark">
              A glimpse of life in the Sarin Lab, from conferences and
              presentations to celebrations, lab gatherings, and everyday moments
              at Stanford.
            </p>
          </div>

          <div className="mt-8">
            <PhotoGallery images={GALLERY} categories={GALLERY_CATEGORIES} />
          </div>
        </div>
      </section>

      <CTABand
        heading="Want to be part of the lab?"
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Meet the Team", href: "/team" }}
      />
    </main>
  );
}
