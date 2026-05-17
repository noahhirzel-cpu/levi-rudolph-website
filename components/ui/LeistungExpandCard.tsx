"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LeistungExpandCardProps {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export function LeistungExpandCard({
  slug,
  title,
  description,
  imageSrc,
  imageAlt,
}: LeistungExpandCardProps) {
  return (
    <Link
      href={`/leistungen/${slug}`}
      className="relative block aspect-[4/3] overflow-hidden group"
      aria-label={title}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Default state — dark gradient at bottom, title visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent transition-opacity duration-400 group-hover:opacity-0" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-heading text-xl font-bold text-warmwhite leading-snug break-words hyphens-auto" lang="de">
          {title}
        </h3>
      </div>

      {/* Hover state — white-ish blur overlay with text */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute inset-0 flex flex-col justify-center px-8 py-8 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-75 translate-y-2 group-hover:translate-y-0">
        <h3 className="font-heading text-xl font-bold text-darktext mb-3 leading-snug break-words hyphens-auto" lang="de">
          {title}
        </h3>
        <p className="text-gray-subtle text-sm leading-relaxed mb-5">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-darktext border-b border-darktext pb-0.5 w-fit group-hover:text-gold group-hover:border-gold transition-colors duration-200">
          Mehr erfahren
          <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
