import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreib Levi Rudolph direkt — Financial Advisor bei MLP Frankfurt. Antwort innerhalb von 24 Stunden.",
};

const contactInfo = [
  {
    icon: <Mail size={18} strokeWidth={1.5} />,
    label: "E-Mail",
    value: "levi.rudolph@mlp.de",
    href: "mailto:levi.rudolph@mlp.de",
  },
  {
    icon: <MapPin size={18} strokeWidth={1.5} />,
    label: "Standort",
    value: "Frankfurt am Main",
    href: null,
  },
  {
    icon: <ExternalLink size={18} strokeWidth={1.5} />,
    label: "LinkedIn",
    value: "levi-rudolph-dh-student",
    href: "https://de.linkedin.com/in/levi-rudolph-dh-student",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-navy text-warmwhite">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            Kontakt
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-warmwhite leading-[1.05] mb-6">
            Schreib mir direkt
          </h1>
          <p className="text-lg text-warmwhite/60 max-w-xl leading-relaxed">
            Hast du Fragen oder möchtest einen Termin vereinbaren? Ich antworte
            persönlich — meist innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="font-heading text-2xl font-bold text-darktext mb-6">
                Kontaktdaten
              </h2>
              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="mt-0.5 text-gold">{item.icon}</div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-subtle mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-darktext hover:text-gold transition-colors duration-200 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-darktext font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MLP Partnership box */}
            <div className="border border-border p-6 bg-white">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-subtle mb-3">
                Partner
              </p>
              <p className="text-sm text-gray-subtle leading-relaxed">
                Levi Rudolph ist selbstständiger Handelsvertreter der{" "}
                <a
                  href="https://www.mlp.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-darktext font-semibold hover:text-gold transition-colors duration-200"
                >
                  MLP Finanzberatung SE
                </a>
                . Alle Beratungen sind unverbindlich und kostenfrei.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-darktext mb-8">
              Nachricht senden
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
