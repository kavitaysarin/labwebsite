import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-skin-sensor.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center right" }}
        />
        {/* Moderate left-to-right navy overlay: dark behind text, image visible on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,19,38,0.95) 0%, rgba(3,19,38,0.82) 34%, rgba(3,19,38,0.38) 66%, rgba(3,19,38,0.12) 100%)",
          }}
        />
      </div>

      <div className="container-wide flex min-h-[clamp(460px,62vh,610px)] items-center py-16">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-blue-light">
            {SITE.parentOrg}
          </p>
          <h1
            className="mt-3 font-heading font-black text-white min-[1200px]:whitespace-nowrap"
            style={{
              fontSize: "clamp(3.5rem, 5.5vw, 5.4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Skin as a Sensor
          </h1>
          <p className="mt-5 max-w-[34rem] text-lg text-white/85">
            {SITE.subtitle}
          </p>
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
