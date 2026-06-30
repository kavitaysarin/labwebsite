import { ArrowLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Technology, IconName } from "@/lib/types";

const TECH_ICON: Record<string, IconName> = {
  "klear-oct": "scan",
  "high-resolution-optical-imaging": "eye",
  "3d-molecular-pathology": "microscope",
  "ai-and-data-science": "chip",
  "spatial-biology": "molecule",
};

export function TechCard({ tech }: { tech: Technology }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white">
      <Placeholder ratio="aspect-[16/10]" icon={TECH_ICON[tech.slug] ?? "microscope"} />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl">{tech.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-dark">
          {tech.shortDescription}
        </p>
        <ArrowLink href={`/technologies#${tech.slug}`} className="mt-4">
          Learn More
        </ArrowLink>
      </div>
    </article>
  );
}
