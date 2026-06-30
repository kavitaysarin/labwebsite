"use client";

// FROZEN — homepage-approved component. Reuse as-is; do not modify without
// re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/content/navigation";
import { SITE } from "@/content/site";
import { Brand } from "./Brand";
import { Icon } from "@/components/ui/Icon";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function Header() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle shadow only after scroll (spec §7)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu + lock background scroll while open (spec §7)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-cardinal text-white transition-shadow ${
        scrolled ? "shadow-md shadow-black/20" : ""
      }`}
    >
      <div className="container-wide flex h-[var(--header-h)] items-center justify-between gap-4">
        <Brand />

        {/* Desktop nav (xl+ to fit the 9-item nav comfortably) */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-2 py-2 text-[15px] font-medium transition-colors hover:text-white ${
                  active ? "text-white" : "text-white/85"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-white transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Menu toggle (below xl) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-1.5 flex h-11 w-11 items-center justify-center rounded text-white xl:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {/* Drawer (below xl) */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-cardinal xl:hidden"
        >
          <nav aria-label="Mobile" className="container-wide flex flex-col py-4">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-white/15 py-3.5 text-lg font-medium ${
                    active ? "text-white" : "text-white/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex gap-4 pt-5">
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
          </nav>
        </div>
      )}
    </header>
  );
}
