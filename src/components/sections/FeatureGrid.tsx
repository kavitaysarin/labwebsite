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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {items.map((f) => (
          <article
            key={f.title}
            className="card-surface flex h-full flex-col p-[18px] sm:p-6"
          >
            <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-lg bg-blue-light text-cardinal">
              <Icon name={f.icon} className="h-[21px] w-[21px]" strokeWidth={1.7} />
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

  // Why Skin: 2 col mobile (1 col under 340px), 4 across at >=900px
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 max-[339px]:grid-cols-1 min-[900px]:grid-cols-4 min-[900px]:gap-x-8 min-[900px]:gap-y-10">
      {items.map((f) => (
        <div key={f.title} className="flex flex-col">
          <span className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-light text-cardinal">
            <Icon name={f.icon} className="h-[24px] w-[24px]" strokeWidth={1.7} />
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
