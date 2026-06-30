import { Icon } from "@/components/ui/Icon";
import type { Feature } from "@/lib/types";

export function FeatureGrid({
  items,
  variant = "plain",
}: {
  items: Feature[];
  variant?: "plain" | "card";
}) {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((f) =>
        variant === "card" ? (
          <article
            key={f.title}
            className="rounded-xl border border-border bg-off-white p-6"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-light text-cardinal">
              <Icon name={f.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-dark">
              {f.description}
            </p>
          </article>
        ) : (
          <div key={f.title}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-light text-cardinal">
              <Icon name={f.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg">{f.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-gray-dark">
              {f.description}
            </p>
          </div>
        ),
      )}
    </div>
  );
}
