"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col bg-white">
      {/* Image — prominent, clickable */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative aspect-[4/3] overflow-hidden group w-full text-left"
        aria-expanded={open}
        aria-label={`${title} — Details anzeigen`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-navy/25 group-hover:bg-navy/15 transition-colors duration-300" />
      </button>

      {/* Title row — click to toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between px-6 pt-5 pb-4 text-left w-full group"
        aria-expanded={open}
      >
        <h3 className="font-heading text-lg font-bold text-darktext leading-snug group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <ChevronDown
          size={18}
          className={`text-darktext/40 group-hover:text-gold transition-all duration-300 shrink-0 ml-3 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              <p className="text-gray-subtle text-sm leading-relaxed">{description}</p>
              <Link
                href={`/leistungen/${slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-darktext border-b border-darktext pb-0.5 w-fit hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Mehr erfahren
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
