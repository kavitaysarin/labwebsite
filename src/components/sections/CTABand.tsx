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
      <div className="container-wide py-10 text-center md:py-[48px]">
        <h2 className="mx-auto max-w-[320px] text-balance text-[1.8rem] leading-tight text-white sm:max-w-2xl sm:text-[2rem]">
          {heading}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-white/80">{subtitle}</p>
        ) : null}
        <div className="mt-6 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
          <Button
            href={primary.href}
            external={primary.external}
            variant="primary"
            className="w-full sm:w-auto"
          >
            {primary.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              external={secondary.external}
              variant="secondary-light"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
