import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { leistungenContent } from "@/lib/leistungenContent";
import { Shield, TrendingUp, Cross, BarChart2, Building2, BookOpen } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Finanzberatung für Kammerberufler & Ingenieure: BU, Altersvorsorge, PKV, Vermögensaufbau, Immobilien und Karriere-Finanzplanung mit Levi Rudolph.",
};

const slugToIcon: Record<string, ReactNode> = {
  berufsunfaehigkeit: <Shield size={28} strokeWidth={1.5} />,
  altersvorsorge: <TrendingUp size={28} strokeWidth={1.5} />,
  krankenversicherung: <Cross size={28} strokeWidth={1.5} />,
  vermoegensaufbau: <BarChart2 size={28} strokeWidth={1.5} />,
  immobilienfinanzierung: <Building2 size={28} strokeWidth={1.5} />,
  "karriere-finanzplanung": <BookOpen size={28} strokeWidth={1.5} />,
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
          <p className="text-warmwhite/50 text-xl max-w-2xl leading-relaxed">
            Maßgeschneiderte Finanzberatung für jeden Lebensabschnitt — von der ersten
            Absicherung bis zur langfristigen Strategie.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {leistungenContent.map((service) => (
              <div key={service.slug} className="border-b border-r border-border">
                <ServiceCard
                  icon={slugToIcon[service.slug] ?? <Shield size={28} strokeWidth={1.5} />}
                  title={service.title}
                  description={service.heroSubtext}
                  href={`/leistungen/${service.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
