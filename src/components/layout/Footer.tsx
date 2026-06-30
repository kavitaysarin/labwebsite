// FROZEN — homepage-approved component. Reuse as-is; do not modify without
// re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import Link from "next/link";
import { SITE } from "@/content/site";
import { FOOTER_NAV } from "@/content/navigation";
import { Brand } from "./Brand";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = SITE;

  return (
    <footer className="bg-cardinal text-white">
      <div className="container-wide py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr] md:items-start">
          {/* Identity + contact */}
          <div>
            <Brand tone="light" />
            <p className="mt-3 text-[15px] text-white/85">
              {SITE.department}, {SITE.parentOrg}
            </p>
            <address className="mt-1.5 text-[15px] not-italic text-white/85">
              {address.line1}, {address.city}, {address.state} {address.zip}
              <br />
              <a className="hover:text-white hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <span className="px-1.5 text-white/40">·</span>
              <a
                className="hover:text-white hover:underline"
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
              >
                {SITE.phone}
              </a>
            </address>
          </div>

          {/* Links + social */}
          <div className="md:text-right">
            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-x-5 gap-y-2 sm:flex sm:flex-wrap md:justify-end"
            >
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium text-white/85 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex gap-4 md:justify-end">
              {SITE.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/85 hover:text-white"
                >
                  <Icon name={s.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-2 border-t border-white/20 pt-5 text-[14px] text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Stanford University · Sarin Lab</p>
          <div className="flex gap-5">
            <a
              href="https://www.stanford.edu/site/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Privacy
            </a>
            <a
              href="https://www.stanford.edu/site/terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
