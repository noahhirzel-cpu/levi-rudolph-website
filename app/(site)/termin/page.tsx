import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Termin buchen",
  description:
    "Buche jetzt dein kostenloses 30-Minuten Erstgespräch mit Levi Rudolph — Financial Advisor bei MLP Frankfurt. Unverbindlich und kostenlos.",
};

const calcomUrl =
  process.env.NEXT_PUBLIC_CAL_COM_URL ??
  "https://cal.com/levi-rudolph/erstgespraech";

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

          {/* Cal.com Embed */}
          <div className="overflow-hidden border border-border bg-white shadow-sm">
            <iframe
              src={calcomUrl}
              width="100%"
              height="700"
              frameBorder="0"
              title="Termin mit Levi Rudolph buchen"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
