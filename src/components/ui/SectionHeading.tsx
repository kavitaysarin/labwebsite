import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl sm:text-4xl">{title}</h2>
      {intro ? (
        <p
          className={`prose-narrow mt-4 text-[17px] leading-relaxed text-gray-dark ${
            center ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
