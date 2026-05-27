import Link from "next/link";
import { Phone as PhoneIcon } from "lucide-react";

function LinkedInIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const footerLinks = [
  {
    heading: "Navigation",
    links: [
      { href: "/ueber-mich", label: "Über mich" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/blog", label: "Blog" },
      { href: "/termin", label: "Termin buchen" },
    ],
  },
  {
    heading: "Leistungen",
    links: [
      { href: "/leistungen/berufsunfaehigkeit", label: "Berufsunfähigkeit" },
      { href: "/leistungen/altersvorsorge", label: "Altersvorsorge" },
      { href: "/leistungen/krankenversicherung", label: "Krankenversicherung" },
      { href: "/leistungen/vermoegensaufbau", label: "Vermögensaufbau" },
      { href: "/leistungen/immobilienfinanzierung", label: "Immobilien" },
      { href: "/leistungen/karriere-finanzplanung", label: "Karriere & Finanzen" },
    ],
  },
  {
    heading: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-warmwhite/80">
      {/* MLP Partner Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warmwhite/40 tracking-wide">
            Ich bin selbstständiger Karriere- und Finanzberater als Partner in Kooperation mit MLP (Marschollek, Lautenschläger und Partner).
          </p>
          <a
            href="https://www.mlp.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-widest uppercase text-gold/60 hover:text-gold transition-colors duration-200"
          >
            mlp.de
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-5">
              <span className="font-heading text-2xl font-bold text-warmwhite">
                Levi Rudolph
              </span>
              <span className="text-xs text-gold tracking-widest uppercase font-medium mt-1">
                Financial Advisor
              </span>
            </Link>
            <p className="text-sm text-warmwhite/40 leading-relaxed mb-6">
              Maßgeschneiderte Finanzberatung für Kammerberufler und Ingenieure.
              Frankfurt am Main.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://de.linkedin.com/in/levi-rudolph-dh-student"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profil von Levi Rudolph"
                className="inline-flex items-center justify-center w-9 h-9 border border-white/20 text-warmwhite/60 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="tel:+4917640729893"
                className="inline-flex items-center gap-2 text-sm text-warmwhite/50 hover:text-gold transition-colors duration-200"
              >
                <PhoneIcon size={14} />
                +49 176 40729893
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold text-warmwhite/30 tracking-widest uppercase mb-5">
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-warmwhite/50 hover:text-warmwhite transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warmwhite/25">
            © {new Date().getFullYear()} Levi Rudolph. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-warmwhite/25">
            MLP Finanzberatung SE · Frankfurt am Main
          </p>
        </div>
      </div>
    </footer>
  );
}
