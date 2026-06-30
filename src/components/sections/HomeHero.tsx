import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Left-weighted navy overlay keeps live text readable (spec §9) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/90 to-navy/25" />
      </div>

      <div className="container-wide flex min-h-[clamp(480px,70vh,640px)] items-center py-20 sm:py-24">
        <div className="max-w-xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-blue-light">
            {SITE.parentOrg}
          </p>
          <h1
            className="mt-3 font-heading font-black leading-[1.05] text-white"
            style={{ fontSize: "clamp(2.75rem, 6vw, 4.75rem)" }}
          >
            Skin as a Sensor
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/85">{SITE.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/research" variant="primary">
              Explore Our Research
            </Button>
            <Button href="/contact" variant="secondary-light">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
