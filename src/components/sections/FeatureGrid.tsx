import { Icon } from "@/components/ui/Icon";
import type { Feature } from "@/lib/types";

export function FeatureGrid({
  items,
  variant = "plain",
}: {
  items: Feature[];
  variant?: "plain" | "card";
}) {
  if (variant === "card") {
    // Research approach: 1 col mobile, 2×2 tablet, 4 across desktop
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {items.map((f) => (
          <article
            key={f.title}
            className="card-surface flex h-full flex-col p-5 sm:p-6"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-light text-cardinal">
              <Icon name={f.icon} className="h-[22px] w-[22px]" strokeWidth={1.7} />
            </span>
            <h3 className="mt-4 text-xl">{f.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-gray-dark">
              {f.description}
            </p>
          </article>
        ))}
      </div>
    );
  }

  // Why Skin: 2 col mobile (1 col under 340px), 4 across tablet+
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-8 max-[339px]:grid-cols-1 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-10">
      {items.map((f) => (
        <div key={f.title} className="flex flex-col">
          <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-full bg-blue-light text-cardinal">
            <Icon name={f.icon} className="h-[26px] w-[26px]" strokeWidth={1.7} />
          </span>
          <h3 className="mt-4 text-lg">{f.title}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-gray-dark">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
}
