import Image from "next/image";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={asset("/images/hero/hero-skin-sensor.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center right" }}
        />
        {/* Desktop: moderate left-to-right navy overlay (text readable, image visible) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,19,38,0.95) 0%, rgba(3,19,38,0.82) 34%, rgba(3,19,38,0.38) 66%, rgba(3,19,38,0.12) 100%)",
          }}
        />
        {/* Tablet/mobile: extra darkening for contrast (removed at lg) */}
        <div className="absolute inset-0 bg-navy-deep/40 lg:bg-transparent" />
      </div>

      <div className="container-wide flex min-h-[clamp(520px,68vh,610px)] items-center pb-[46px] pt-[78px] sm:py-20 lg:py-16">
        <div className="max-w-[520px] lg:max-w-[640px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-blue-light">
            {SITE.parentOrg}
          </p>
          <h1
            className="mt-[18px] font-heading font-black text-white min-[1200px]:whitespace-nowrap"
            style={{
              fontSize: "clamp(2.6rem, 9vw, 5.4rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Skin as a Sensor
          </h1>
          <p className="mt-6 max-w-[36rem] text-base text-white/85 sm:text-lg">
            {SITE.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
            <Button href="/research" variant="primary" className="w-full sm:w-auto">
              Explore Our Research
            </Button>
            <Button href="/contact" variant="secondary-light" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
