import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  goldUnderline?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = false,
  goldUnderline = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
    >
      {tag && (
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-warmwhite" : "text-darktext"
        )}
      >
        {title}
        {goldUnderline && (
          <span className="block w-12 h-1 bg-gold mt-3 rounded-full" />
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            light ? "text-warmwhite/70" : "text-gray-subtle"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
