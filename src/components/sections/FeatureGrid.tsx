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
            className="flex h-full flex-col rounded-xl border border-border bg-off-white p-7"
          >
            <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-lg bg-blue-light text-cardinal">
              <Icon name={f.icon} className="h-[26px] w-[26px]" strokeWidth={1.7} />
            </span>
            <h3 className="mt-4 text-xl">{f.title}</h3>
            <p className="mt-2 max-w-[34ch] text-[15px] leading-relaxed text-gray-dark">
              {f.description}
            </p>
          </article>
        ) : (
          <div key={f.title} className="flex flex-col">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-light text-cardinal">
              <Icon name={f.icon} className="h-[27px] w-[27px]" strokeWidth={1.7} />
            </span>
            <h3 className="mt-4 text-lg">{f.title}</h3>
            <p className="mt-1.5 max-w-[32ch] text-[15px] leading-relaxed text-gray-dark">
              {f.description}
            </p>
          </div>
        ),
      )}
    </div>
  );
}
