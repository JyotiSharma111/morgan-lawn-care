export function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-base text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
