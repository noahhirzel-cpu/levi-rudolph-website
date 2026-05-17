import type { Metadata } from "next";
import Image from "next/image";
import { FinanzcheckWizard } from "@/components/sections/FinanzcheckWizard";
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

export default function FinanzcheckPage() {
  return (
    <>
      {/* Hero — clean navy, kein Bild */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-navy text-warmwhite">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            360° Finanzcheck
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-warmwhite leading-[1.05] mb-6">
            Wie steht's um deine Finanzen?
          </h1>
          <p className="text-warmwhite/70 text-xl max-w-2xl leading-relaxed">
            In 15 Minuten weißt du, wo du stehst — bei BU, Altersvorsorge,
            Krankenversicherung und Kapitalanlage. Kostenlos und unverbindlich.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <FinanzcheckWizard />
      </section>

      {/* 4 Check Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Was wir gemeinsam checken
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-darktext leading-tight max-w-2xl">
              Vier Bereiche. Ein vollständiger Überblick.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
            {areas.map((area) => (
              <div
                key={area.number}
                className="border-b border-r border-border p-8 flex flex-col gap-4"
              >
                <span className="font-heading text-5xl font-bold text-gold/30 leading-none select-none">
                  {area.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-darktext">
                  {area.title}
                </h3>
                <p className="text-gray-subtle text-base leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-[45vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&fit=crop"
          alt="Vom Überblick zur konkreten Strategie"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warmwhite text-center leading-tight max-w-3xl">
            Vom Überblick zur konkreten Strategie.
          </p>
        </div>
      </div>

      <CTABanner
        heading="Starte deinen kostenlosen Finanzcheck"
        subtext="Kein Verkaufsdruck. Nur Klarheit über deine finanzielle Situation."
        buttonText="Jetzt starten"
        buttonHref="/finanzcheck"
      />
    </>
  );
}
