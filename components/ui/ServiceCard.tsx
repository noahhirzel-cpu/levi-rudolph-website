"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn("group", className)}
    >
      <Link
        href={href}
        className="flex flex-col h-full p-6 lg:p-8 bg-white rounded-2xl border border-border hover:border-gold/40 shadow-sm hover:shadow-lg transition-all duration-300"
        aria-label={`Mehr zu ${title}`}
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-heading text-xl font-bold text-darktext mb-3 group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-subtle text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Mehr erfahren
          <ArrowRight size={16} />
        </div>
      </Link>
    </motion.div>
  );
}
