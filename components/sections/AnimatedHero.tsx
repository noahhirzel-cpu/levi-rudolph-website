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
    <section className="relative min-h-screen w-full overflow-hidden bg-navy -mt-[72px] lg:-mt-[80px]">
      {/* 1. Foto als Hintergrund — full-bleed */}
      <div className="absolute inset-0">
        <Image
          src="/images/levi-business.jpeg"
          alt="Levi Rudolph — Financial Advisor Frankfurt"
          fill
          className="object-cover object-center sm:object-[60%_center] lg:object-[65%_center]"
          priority
          sizes="100vw"
        />
      </div>

      {/* 2a. Horizontaler Gradient — links dunkel, rechts transparent (Lesbarkeit) */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30 lg:to-transparent" />
      {/* 2b. Vertikaler Auslauf unten — fließender Übergang in die nächste Section */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      {/* 3. Subtile Vignette unten rechts */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-navy/40" />
      {/* Mobile: zusätzlicher Verlauf von oben für Logo/Nav Lesbarkeit */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/70 to-transparent lg:hidden" />

      {/* 4. Text-Content — linksbündig, gut lesbar */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-[72px] lg:pt-[80px]">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-2xl pt-20 pb-32 lg:py-10 flex flex-col gap-6"
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
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warmwhite leading-[1.05] tracking-tight"
          >
            {headline}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fade(0.35)}
            className="text-base sm:text-lg lg:text-xl text-warmwhite/80 leading-relaxed max-w-xl"
          >
            {subline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fade(0.5)}
            className="flex flex-col sm:flex-row gap-3 pt-4"
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
      </div>

      {/* 5. Unterer Auslauf — Navy läuft weich in nächste Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-6 sm:left-8 lg:left-12 flex flex-col items-start gap-2 z-10 pointer-events-none"
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
    </section>
  );
}
