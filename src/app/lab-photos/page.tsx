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
      <PageHero title="Lab Photos" image="/images/hero/hero-secondary.png" />

      <section className="bg-white">
        <div className="container-wide section-pad">
          <SectionHeading title="Life in the Lab" />
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
