import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { CTABand } from "@/components/sections/CTABand";
import { GALLERY, GALLERY_CATEGORIES } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Lab Photos",
  description:
    "A look at the Sarin Lab — the imaging and science behind reading the skin as a sensor for disease.",
};

export default function LabPhotosPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Lab Photos"
        subtitle="A look at the science and the place behind the work."
        image="/images/hero/hero-secondary.png"
      />

      <section className="bg-white">
        <div className="container-wide section-pad">
          <div className="max-w-3xl">
            <SectionHeading title="Gallery" />
            <p className="mt-4 text-[17px] leading-relaxed text-gray-dark">
              A glimpse of the imaging and science behind the lab. Select a photo
              to view it larger. Photos of the team and lab events are being
              curated and will be added here.
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
