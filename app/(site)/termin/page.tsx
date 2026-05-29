import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Termin buchen",
  description:
    "Buche jetzt dein kostenloses 30-Minuten Erstgespräch mit Levi Rudolph — Financial Advisor bei MLP Frankfurt. Unverbindlich und kostenlos.",
};

const benefits = [
  "Kostenlos & unverbindlich",
  "30 Minuten via Video oder Telefon",
  "Keine versteckten Kosten",
  "Persönliche Antwort — kein Callcenter",
];

export default function TerminPage() {
  return (
    <>
      {/* Hero mit Bild */}
      <section className="relative pt-[72px] lg:pt-[80px] min-h-[45vh] flex items-end overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&fit=crop"
          alt="Beratungsgespräch mit Levi Rudolph"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Erstgespräch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warmwhite leading-[1.05] mb-4">
            Kostenloses Erstgespräch buchen
          </h1>
          <p className="text-warmwhite/60 text-lg max-w-xl leading-relaxed">
            30 Minuten, kein Verkaufsdruck. Ich lerne deine Situation kennen — und du weißt
            danach, wo du stehst.
          </p>
        </div>
      </section>

      {/* Benefits + Embed */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-4xl mx-auto">
          {/* Benefits row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white border border-border">
                <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-darktext leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Termin-Card — Placeholder bis Cal.com Account steht */}
          {/* TODO: Cal.com Link eintragen sobald Account erstellt — dann iframe wieder einbinden */}
          <div className="text-center p-10 sm:p-14 border-2 border-dashed border-gold bg-white">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 mb-6">
              <Phone size={24} className="text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-darktext mb-3">
              Termin direkt vereinbaren
            </h2>
            <p className="text-gray-subtle mb-2 text-base">
              30 Minuten · Online via Microsoft Teams · Kostenlos
            </p>
            <p className="text-gray-subtle/80 text-sm mb-10">
              Online-Kalender folgt in Kürze. So lange erreichst du mich am schnellsten direkt:
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href="tel:+4917640729893"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 text-base hover:brightness-110 active:brightness-125 transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2"
              >
                <Phone size={18} strokeWidth={2} />
                +49 176 40729893
              </Link>
              <Link
                href="mailto:levi.rudolph@mlp.de"
                className="inline-flex items-center justify-center gap-2 border border-darktext/20 text-darktext font-semibold px-8 py-4 text-base hover:border-darktext/50 hover:text-gold transition-all duration-200"
              >
                <Mail size={18} strokeWidth={1.5} />
                levi.rudolph@mlp.de
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
