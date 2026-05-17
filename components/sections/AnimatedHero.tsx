"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle animated particle background
  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy pointer-events-none" />

      {/* Gold accent gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full px-4 py-2 bg-gold/10">
              MLP Finanzberatung SE · Frankfurt
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warmwhite leading-tight"
          >
            {headline}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-warmwhite/70 max-w-2xl leading-relaxed"
          >
            {subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Button
              render={<Link href={ctaHref} />}
              size="lg"
              className="bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-200 rounded-full px-8 py-6 text-base gap-2 shadow-lg shadow-gold/20"
            >
              <Calendar size={18} />
              {ctaText}
            </Button>
            <Button
              render={<Link href={secondaryCtaHref} />}
              variant="outline"
              size="lg"
              className="border-warmwhite/30 text-warmwhite hover:bg-warmwhite/10 hover:border-warmwhite/60 rounded-full px-8 py-6 text-base gap-2"
            >
              {secondaryCtaText}
              <ArrowRight size={18} />
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-4 text-warmwhite/50 text-xs font-medium"
          >
            <span>✓ Kostenlos & unverbindlich</span>
            <span>✓ Zertifizierter Financial Advisor</span>
            <span>✓ 10.000+ LinkedIn Follower</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="w-6 h-10 rounded-full border-2 border-warmwhite/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-warmwhite/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
