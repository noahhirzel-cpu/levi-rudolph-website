"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/finanzcheck", label: "Finanzcheck" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const showNavyBg = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNavyBg
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Levi Rudolph — Startseite"
            onClick={() => { if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span className="font-heading text-2xl font-bold text-warmwhite tracking-tight">
              Levi Rudolph
            </span>
            <span className="text-[11px] text-gold tracking-widest uppercase font-medium mt-0.5">
              Financial Advisor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 relative group py-1 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-warmwhite/80 hover:text-warmwhite"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              render={<Link href="/termin" />}
              variant="gold"
              className="outline-none focus:outline-none transition-all duration-200 rounded-none px-6 py-2.5 text-sm"
            >
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-warmwhite"
            aria-label={isMobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-medium py-3 border-b border-white/10 transition-colors min-h-[44px] flex items-center ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-warmwhite/80 hover:text-warmwhite"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                render={<Link href="/termin" />}
                variant="gold"
                className="mt-4 w-full outline-none focus:outline-none rounded-none py-4 text-base"
              >
                Termin buchen
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
