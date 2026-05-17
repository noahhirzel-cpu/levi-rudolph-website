import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  imageSrc?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-6 lg:p-8 bg-white rounded-2xl border border-border shadow-sm",
        className
      )}
    >
      <Quote size={24} className="text-gold shrink-0" aria-hidden />
      <blockquote className="text-darktext text-sm sm:text-base leading-relaxed italic flex-1">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-sm shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-darktext text-sm">{name}</p>
          {role && <p className="text-gray-subtle text-xs">{role}</p>}
        </div>
      </div>
    </div>
  );
}
