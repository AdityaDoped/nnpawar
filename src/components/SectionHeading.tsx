interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p className="text-[10px] tracking-[0.25em] uppercase mb-3 font-medium text-accent">{label}</p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl font-semibold leading-tight ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm leading-relaxed max-w-xl ${centered ? "mx-auto" : ""} ${light ? "text-white/55" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
