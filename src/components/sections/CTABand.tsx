import { Button } from "@/components/ui/Button";

type CTA = { label: string; href: string; external?: boolean };

export function CTABand({
  heading,
  subtitle,
  primary,
  secondary,
}: {
  heading: string;
  subtitle?: string;
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="bg-navy-deep text-white">
      <div className="container-wide py-14 text-center md:py-16">
        <h2 className="mx-auto max-w-4xl text-balance text-3xl text-white">
          {heading}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-white/80">{subtitle}</p>
        ) : null}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={primary.href} external={primary.external} variant="primary">
            {primary.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              external={secondary.external}
              variant="secondary-light"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
