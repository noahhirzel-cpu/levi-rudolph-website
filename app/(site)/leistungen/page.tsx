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

const slugToImage: Record<string, string> = {
  berufsunfaehigkeit:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop",
  altersvorsorge:
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80&fit=crop",
  krankenversicherung:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
  vermoegensaufbau:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&fit=crop",
  immobilienfinanzierung:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop",
  "karriere-finanzplanung":
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {leistungenContent.map((service) => (
              <div key={service.slug} className="border-b border-r border-border">
                <ServiceCard
                  icon={slugToIcon[service.slug] ?? <Shield size={28} strokeWidth={1.5} />}
                  title={service.title}
                  description={service.heroSubtext}
                  href={`/leistungen/${service.slug}`}
                  imageSrc={slugToImage[service.slug]}
                  imageAlt={service.title}
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
