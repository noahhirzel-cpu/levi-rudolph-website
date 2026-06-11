"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AnimatedHeroProps {
  headline: string;
  subline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function AnimatedHero({
  headline,
  subline,
  ctaText = "Kostenloses Erstgespräch buchen",
  ctaHref = "/termin",
  secondaryCtaText = "Mehr erfahren",
  secondaryCtaHref = "/ueber-mich",
}: AnimatedHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const fade = (delay: number) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  });

  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-navy overflow-hidden">

      {/* Left — Text (Desktop: links, Mobile: unten) */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 pt-36 pb-20 lg:py-0 order-2 lg:order-1">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Label */}
          <motion.p
            variants={fade(0.1)}
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold"
          >
            Walther-von-Cronberg-Platz 2 · Frankfurt · MLP
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fade(0.2)}
            className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-warmwhite leading-[1.05] tracking-tight"
          >
            {headline}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fade(0.35)}
            className="text-base sm:text-lg text-warmwhite/60 leading-relaxed max-w-lg"
          >
            {subline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fade(0.5)}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <Button
              render={<Link href={ctaHref} />}
              variant="gold"
              className="w-full sm:w-auto outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy transition-all duration-200 rounded-none px-8 py-5 text-sm tracking-wide"
            >
              {ctaText}
            </Button>
            <Button
              render={<Link href={secondaryCtaHref} />}
              variant="ghost"
              className="w-full sm:w-auto text-warmwhite hover:bg-white/10 hover:text-warmwhite border border-white/30 hover:border-white/60 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy transition-all duration-200 rounded-none px-8 py-5 text-sm tracking-wide gap-2"
            >
              {secondaryCtaText}
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden lg:flex absolute bottom-6 left-16 xl:left-20 flex-col items-start gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden
        >
          <span className="text-[10px] tracking-widest uppercase text-warmwhite/40 font-semibold">
            Scrollen
          </span>
          <span className="block w-px h-10 bg-gradient-to-b from-warmwhite/40 to-transparent" />
        </motion.div>
      </div>

      {/* Right — Photo (Desktop: rechts, Mobile: oben) */}
      <div className="relative min-h-[60vh] lg:min-h-screen bg-navy order-1 lg:order-2">
        <Image
          src="/images/levi-business.jpeg"
          alt="Levi Rudolph — Financial Advisor Frankfurt"
          fill
          className="object-contain object-center lg:object-cover lg:object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Desktop: Gradient-Blend von links */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent hidden lg:block" />
        {/* Mobile: Gradient oben (Nav-Lesbarkeit) + unten (Übergang in Textblock) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/70 to-transparent lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent lg:hidden" />
      </div>
    </section>
  );
}
