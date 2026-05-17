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
      {/* Left — Text */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 pt-36 pb-20 lg:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 sm:gap-8 max-w-xl"
        >
          <motion.p
            variants={fade(0.1)}
            className="text-xs font-semibold tracking-widest uppercase text-gold"
          >
            MLP Finanzberatung SE · Frankfurt
          </motion.p>

          <motion.h1
            variants={fade(0.2)}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-warmwhite leading-[1.05] tracking-tight"
          >
            {headline}
          </motion.h1>

          <motion.p
            variants={fade(0.35)}
            className="text-base sm:text-lg text-warmwhite/60 leading-relaxed"
          >
            {subline}
          </motion.p>

          <motion.div
            variants={fade(0.5)}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <Button
              render={<Link href={ctaHref} />}
              className="w-full sm:w-auto bg-gold text-navy font-semibold hover:bg-gold-light transition-colors duration-200 rounded-none px-8 py-5 text-sm tracking-wide"
            >
              {ctaText}
            </Button>
            <Button
              render={<Link href={secondaryCtaHref} />}
              variant="ghost"
              className="w-full sm:w-auto text-warmwhite/60 hover:text-warmwhite hover:bg-transparent rounded-none px-8 py-5 text-sm tracking-wide gap-2 border border-white/10 hover:border-white/30 transition-colors duration-200"
            >
              {secondaryCtaText}
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right — Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="relative min-h-[55vh] lg:min-h-screen"
      >
        <Image
          src="/images/levi-business.jpeg"
          alt="Levi Rudolph — Financial Advisor Frankfurt"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Gradient fade left */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent lg:block hidden" />
        {/* Gradient fade bottom on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-transparent lg:hidden" />
        {/* Subtle bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/60 to-transparent" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-6 sm:left-12 lg:left-16 xl:left-20 flex flex-col items-start gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-warmwhite/20 to-transparent"
          animate={prefersReducedMotion ? {} : { scaleY: [1, 0.6, 1] }}
          style={{ originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
