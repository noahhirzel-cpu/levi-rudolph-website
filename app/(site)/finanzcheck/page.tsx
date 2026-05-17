import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "360° Finanzcheck",
  description:
    "Kostenloser Finanzcheck für Kammerberufler und Ingenieure — in 15 Minuten weißt du, wie es um deine Absicherung, Altersvorsorge, Krankenversicherung und Kapitalanlage steht.",
};

const areas = [
  {
    number: "01",
    title: "Absicherung",
    description:
      "Bist du wirklich abgesichert, wenn du nicht mehr arbeiten kannst? Berufsunfähigkeit, Haftpflicht, Unfallschutz — ich zeige dir, wo Lücken sind.",
  },
  {
    number: "02",
    title: "Altersvorsorge",
    description:
      "Wann kannst du in Rente? Reicht deine Rente? Wir rechnen konkret durch, was du heute tun musst, damit du später wirklich frei bist.",
  },
  {
    number: "03",
    title: "Krankenversicherung",
    description:
      "GKV oder PKV — für Kammerberufler oft eine entscheidende Frage. Ich zeige dir, was langfristig günstiger und besser für dich ist.",
  },
  {
    number: "04",
    title: "Kapitalanlage",
    description:
      "Dein Geld soll arbeiten. ETF-Depot, Sparplan, Immobilie? Ich gebe dir einen klaren Überblick, welche Strategie zu deiner Situation passt.",
  },
];

const steps = [
  {
    number: "01",
    title: "Erstgespräch buchen",
    description:
      "Wähle einen Termin, der zu dir passt. Online, per Telefon oder persönlich in Frankfurt.",
  },
  {
    number: "02",
    title: "Situation besprechen",
    description:
      "Ich stelle gezielte Fragen zu deiner aktuellen Absicherung, Vorsorge und Anlage. Kein Formular, kein Overhead.",
  },
  {
    number: "03",
    title: "Klarheit bekommen",
    description:
      "Du bekommst eine ehrliche Einschätzung — ohne Verkaufsdruck, ohne versteckte Kosten.",
  },
];

export default function FinanzcheckPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px] lg:pt-[80px] min-h-[60vh] flex items-end overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&fit=crop"
          alt="360° Finanzcheck — Finanzielle Gesundheit im Überblick"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            360° Finanzcheck
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warmwhite leading-[1.05] mb-6">
            Wie steht's um deine Finanzen?
          </h1>
          <p className="text-warmwhite/70 text-lg max-w-xl leading-relaxed mb-10">
            In 15 Minuten weißt du, wo du stehst — bei BU, Altersvorsorge,
            Krankenversicherung und Kapitalanlage. Kostenlos und unverbindlich.
          </p>
          <Button
            render={<Link href="/termin" />}
            className="bg-gold text-navy font-semibold hover:bg-gold-light transition-colors duration-200 rounded-none px-10 py-5 text-sm tracking-wide"
          >
            Jetzt Finanzcheck starten
            <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* 4 Check Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              Was wir gemeinsam checken
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-darktext leading-tight max-w-2xl">
              Vier Bereiche. Ein vollständiger Überblick.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
            {areas.map((area) => (
              <div
                key={area.number}
                className="border-b border-r border-border p-8 flex flex-col gap-4"
              >
                <span className="font-heading text-5xl font-bold text-gold leading-none">
                  {area.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-darktext">
                  {area.title}
                </h3>
                <p className="text-gray-subtle text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&fit=crop"
          alt="Vom Überblick zur konkreten Strategie"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warmwhite text-center leading-tight max-w-2xl">
            Vom Überblick zur konkreten Strategie.
          </p>
        </div>
      </div>

      {/* Das erwartet dich */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              Ablauf
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-darktext leading-tight">
              Das erwartet dich
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="font-heading text-7xl font-bold text-darktext/10 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-darktext">
                  {step.title}
                </h3>
                <p className="text-gray-subtle text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Starte deinen kostenlosen Finanzcheck"
        buttonText="Termin buchen"
      />
    </>
  );
}
