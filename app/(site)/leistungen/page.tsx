import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { leistungenContent } from "@/lib/leistungenContent";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Finanzberatung für Kammerberufler & Ingenieure: BU, Altersvorsorge, PKV, Vermögensaufbau, Immobilien und Karriere-Finanzplanung mit Levi Rudolph.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy text-warmwhite">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-4 block">
            Leistungen
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Was ich für dich tue
          </h1>
          <p className="text-warmwhite/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Maßgeschneiderte Finanzberatung für jeden Lebensabschnitt — von der ersten
            Absicherung bis zur Ruhestandsstrategie.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungenContent.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.heroSubtext}
                href={`/leistungen/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
