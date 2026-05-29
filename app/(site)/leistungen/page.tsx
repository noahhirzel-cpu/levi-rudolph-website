import type { Metadata } from "next";
import { CTABanner } from "@/components/ui/CTABanner";
import { LeistungExpandCard } from "@/components/ui/LeistungExpandCard";
import { leistungenContent } from "@/lib/leistungenContent";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Finanzberatung für Kammerberufler & Ingenieure: BU, Altersvorsorge, PKV, Vermögensaufbau, Immobilien und Karriere-Finanzplanung mit Levi Rudolph.",
};

const slugToImage: Record<string, string> = {
  absicherung:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop",
  finanzanalyse:
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80&fit=crop",
  kontenmodell:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
  kapitalanlage:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&fit=crop",
  immobilien:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop",
  karriere:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop",
};

export default function LeistungenPage() {
  return (
    <>
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-navy text-warmwhite">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            Leistungen
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Was ich für dich tue
          </h1>
          <p className="text-warmwhite/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Maßgeschneiderte Finanzberatung für jeden Lebensabschnitt — von der ersten
            Absicherung bis zur langfristigen Strategie.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {leistungenContent.map((service) => (
              <LeistungExpandCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.heroSubtext}
                imageSrc={slugToImage[service.slug] ?? ""}
                imageAlt={service.title}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
