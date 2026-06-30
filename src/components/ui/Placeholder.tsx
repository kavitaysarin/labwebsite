import { Icon } from "./Icon";
import type { IconName } from "@/lib/types";

/**
 * Intentional image placeholder — a navy scientific gradient with an outline
 * icon. Used until real images are scraped/supplied (task: image integration).
 * The small "image pending" marker keeps the placeholder honest.
 */
export function Placeholder({
  icon = "microscope",
  ratio = "aspect-[16/10]",
  className = "",
}: {
  icon?: IconName;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-navy via-navy-soft to-blue/50 ${ratio} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid place-items-center">
        <Icon name={icon} className="h-12 w-12 text-white/35" strokeWidth={1.3} />
      </div>
      <span className="absolute bottom-1.5 right-2 text-[9px] font-medium uppercase tracking-wider text-white/30">
        image pending
      </span>
    </div>
  );
}
