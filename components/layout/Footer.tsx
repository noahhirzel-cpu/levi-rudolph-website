import Link from "next/link";

function LinkedInIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
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
      {
        href: "/leistungen/karriere-finanzplanung",
        label: "Karriere & Finanzen",
      },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-heading text-2xl font-bold text-warmwhite">
                Levi Rudolph
              </span>
              <span className="text-xs text-gold tracking-widest uppercase font-medium mt-1">
                Financial Advisor
              </span>
            </Link>
            <p className="text-sm text-warmwhite/60 leading-relaxed mb-6">
              Maßgeschneiderte Finanzberatung für Kammerberufler & Ingenieure.
              MLP Finanzberatung SE · Frankfurt am Main.
            </p>
            <a
              href="https://de.linkedin.com/in/levi-rudolph-dh-student"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profil von Levi Rudolph"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-navy transition-colors duration-200"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-warmwhite/60 hover:text-warmwhite transition-colors duration-200"
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
          <p className="text-xs text-warmwhite/40">
            © {new Date().getFullYear()} Levi Rudolph. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-warmwhite/40">
            Financial Advisor · MLP Finanzberatung SE · Frankfurt am Main
          </p>
        </div>
      </div>
    </footer>
  );
}
