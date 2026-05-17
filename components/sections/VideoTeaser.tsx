"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface VideoTeaserProps {
  /** YouTube video ID or full embed URL. Leave empty for poster-only mode. */
  videoId?: string;
  posterSrc?: string;
  posterAlt?: string;
  label?: string;
  headline?: string;
  subline?: string;
}

export function VideoTeaser({
  videoId,
  posterSrc = "/images/levi-business.jpeg",
  posterAlt = "Levi Rudolph — Financial Advisor Frankfurt",
  label = "Meine Arbeitsweise",
  headline = "Beratung, die wirklich passt",
  subline = "In einem kurzen Erstgespräch lerne ich deine Situation kennen — und du erfährst, wie ich dir konkret helfen kann.",
}: VideoTeaserProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : null;

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold">
              {label}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-darktext leading-tight">
              {headline}
            </h2>
            <p className="text-gray-subtle text-lg leading-relaxed">{subline}</p>
          </div>

          {/* Video / Image */}
          <div
            className={`relative aspect-[4/3] bg-darktext overflow-hidden ${embedUrl ? "cursor-pointer group" : ""}`}
            onClick={() => embedUrl && setIsOpen(true)}
            role={embedUrl ? "button" : undefined}
            tabIndex={embedUrl ? 0 : undefined}
            onKeyDown={(e) => embedUrl && e.key === "Enter" && setIsOpen(true)}
            aria-label={embedUrl ? "Video abspielen" : undefined}
          >
            <Image
              src={posterSrc}
              alt={posterAlt}
              fill
              className={`object-cover object-top transition-transform duration-700 ${embedUrl ? "group-hover:scale-105" : ""}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/30" />

            {/* Play Button */}
            {embedUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gold flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <Play size={24} fill="currentColor" className="text-navy ml-1" />
                </div>
              </div>
            )}

            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
              <p className="text-warmwhite font-heading font-bold text-lg">Levi Rudolph</p>
              <p className="text-warmwhite/60 text-xs tracking-wide uppercase">Financial Advisor · MLP Frankfurt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && embedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              aria-label="Video schließen"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                title="Levi Rudolph — Video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
