"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("group", className)}
    >
      <Link
        href={href}
        className="flex flex-col h-full p-8 bg-white border border-border hover:border-darktext/20 transition-all duration-300"
        aria-label={`Mehr zu ${title}`}
      >
        <div className="text-darktext/40 mb-6 group-hover:text-gold transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-heading text-xl font-bold text-darktext mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-subtle text-sm leading-relaxed flex-1 mb-6">
          {description}
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-darktext/40 group-hover:text-gold transition-colors duration-300">
          Mehr erfahren
          <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}
